export default function BlogPostPage(props) {
  const { params } = props;
  return (
    <main>
      <h1>Blog Post Page</h1>
      <p>{params.slug}</p>
    </main>
  );
}
