import Head from 'next/head';
import Layout from '../components/Layout';
import SearchEngine from '../components/search/SearchEngine';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title key="title">Artworks Search Engine</title>
      </Head>

      <main>
        <SearchEngine />  
      </main>

    </Layout>
  )
}
