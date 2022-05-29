import Layout from '../../components/layout';
import { getAllPostIds, getPostData } from '../../lib/posts';
import Head from 'next/head';
import Date from '../../components/date';

export default function post({ postData }) {
  return <Layout>
    <Head>
      <title>{postData.title}</title>
    </Head>
    <h1>{postData.title}</h1>
    <h2>{postData.id}</h2>
    <Date dateString={postData.date} />
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