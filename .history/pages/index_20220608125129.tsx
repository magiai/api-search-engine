import Head from 'next/head';
import Layout from '../components/Layout';
import SearchEngine from '../components/search/SearchEngine';
import { ArtInstituteOfChicago } from '../components/institution/ArtInsituteOfChicago';

export default function Home() {
  return (
    <Layout home = { true }>
      <Head>
        <title key="title">Artworks Search Engine</title>
      </Head>

      <main>
        <SearchEngine />
        <ArtInstituteOfChicago /> 
      </main>

    </Layout>
  )
}
