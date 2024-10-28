import { comparePassword } from "@/lib/auth";
import { connectToDatabase } from "@/lib/db";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
  session: {
    jwt: true,
  },
  providers: [
    CredentialsProvider({
      authorize: async (credentials) => {
        console.log("🚀 ~ authorize: ~ credentials:", credentials);
        const client = await connectToDatabase();
        if (!client) {
          throw new Error("Can't Connect To Database!");
        }

        const db = client.db();
        const user = await db
          .collection("users")
          .findOne({ email: credentials.email });
        if (!user) {
          client.close();
          throw new Error("Email Doesn't Exist! Sign Up First!");
        }

        const isValidPassword = await comparePassword(
          credentials.password,
          user.password
        );
        if (!isValidPassword) {
          client.close();
          throw new Error("Wrong Password! Try Again!");
        }

        client.close();
        return { email: user.email };
      },
    }),
  ],
});
