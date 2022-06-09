import Head from 'next/head';
import Layout from '../components/Layout';
import SearchEngine from '../components/search/searchEngine';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title key="title">Home</title>
      </Head>

      <main>
        <SearchEngine />  
      </main>

    </Layout>
  )
}
