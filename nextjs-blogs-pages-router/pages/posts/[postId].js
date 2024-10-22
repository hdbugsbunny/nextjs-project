import PostContent from "@/components/posts/postDetails/postContent";
import { getPostData } from "@/helpers/postsUtils";

export default function PostPage(props) {
  const { post } = props;

  return <PostContent post={post} />;
}

export function getServerSideProps(context) {
  const { postId } = context.params;
  const postData = getPostData(`${postId}.md`);

  return { props: { post: postData } };
}
