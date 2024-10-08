"use server";

import { createAuthSession, destroySession } from "@/lib/auth";
import { hashUserPassword, verifyPassword } from "@/lib/hash";
import { createUser, getUserByEmail } from "@/lib/user";
import { redirect } from "next/navigation";

async function signUp(_, formData) {
  const email = formData.get("email");
  const password = formData.get("password");

  const errors = {};
  if (!email.includes("@")) {
    errors.email = "Please enter a valid email address.";
  }
  if (password.trim().length < 8) {
    errors.password = "Password must be at least 8 characters long.";
  }
  if (Object.keys(errors).length > 0) {
    return { errors };
  }

  const hashedPassword = hashUserPassword(password);
  try {
    const userId = createUser(email, hashedPassword);
    await createAuthSession(userId);
    redirect("/training");
  } catch (error) {
    if (error.code === "SQLITE_CONSTRAINT_UNIQUE") {
      return { errors: { email: "Email address is already taken." } };
    }
    throw error;
  }
}

async function logIn(_, formData) {
  const email = formData.get("email");
  const password = formData.get("password");

  const existingUser = getUserByEmail(email);
  if (!existingUser) {
    return { errors: { email: "Email address not found." } };
  }

  const isValidPassword = verifyPassword(existingUser.password, password);
  if (!isValidPassword) {
    return { errors: { password: "Incorrect password." } };
  }

  await createAuthSession(existingUser.id);
  redirect("/training");
}

export async function authAction(mode, _, formData) {
  const action = mode === "login" ? logIn : signUp;
  return await action(_, formData);
}

export async function logOut() {
  await destroySession();
  redirect("/");
}
