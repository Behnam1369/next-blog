import Layout from '../../components/layout';
import { getAllPostIds, getPostData } from '../../lib/posts';

export default function post({ postData }) {
  return <Layout>
    <h1>{postData.title}</h1>
    <h2>{postData.id}</h2>
    <span>{postData.date}</span>
    <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
  </Layout>
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}