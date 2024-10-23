import PostContent from "@/components/posts/postDetails/postContent";
import { getPostData } from "@/helpers/postsUtils";
import Head from "next/head";

export default function PostPage(props) {
  const { post } = props;

  return (
    <>
      <Head>
        <title>Harshit's Blog | {post.title}</title>
        <meta name="description" content={post.description} />
      </Head>
      <PostContent post={post} />
    </>
  );
}

export function getServerSideProps(context) {
  const { postId } = context.params;
  const postData = getPostData(`${postId}.md`);

  return { props: { post: postData } };
}
