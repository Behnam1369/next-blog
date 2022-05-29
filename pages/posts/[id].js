import Layout from '../../components/layout';
import { getAllPostIds, getPostData } from '../../lib/posts';

export default function post({ postData }) {
  return <Layout>
    <h1>{postData.title}</h1>
    <h2>{postData.id}</h2>
    <p>{postData.date}</p>
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
  const postData = getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}