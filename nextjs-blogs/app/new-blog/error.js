"use client";

export default function NewBlogError({ error }) {
  return (
    <>
      <h2>An Error Occurred!</h2>
      <p>Unfortunately, Something Went Wrong!</p>
      <p>{error.message}</p>
    </>
  );
}
