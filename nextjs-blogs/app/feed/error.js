"use client";

export default function FeedError({ error }) {
  return (
    <>
      <h2>An Error Occurred!</h2>
      <p>Unfortunately, Something Went Wrong! We&apos;re Working on it!</p>
      <p>{error.message}</p>
    </>
  );
}
