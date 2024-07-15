export default function Post(props) {
  const { author, body } = props;
  return (
    <div>
      <p>{author}</p>
      <p>{body}</p>
    </div>
  );
}
