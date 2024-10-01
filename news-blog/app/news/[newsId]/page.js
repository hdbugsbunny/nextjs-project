export default function NewsDetailPage({ params }) {
  const { newsId } = params;
  return (
    <>
      <h1>News Detail Page</h1>
      <p>You are viewing news #{newsId}.</p>
    </>
  );
}
