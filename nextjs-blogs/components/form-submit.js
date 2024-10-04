"use client";

import { useFormStatus } from "react-dom";
export default function FormSubmit() {
  const { pending } = useFormStatus();
  if (pending) {
    return <p>Creating Blog...</p>;
  }

  return (
    <>
      <button type="reset">Clear Form</button>
      <button>Create Blog</button>
    </>
  );
}
