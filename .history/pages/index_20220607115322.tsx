import Head from 'next/head';
import { Artwork } from '../components/artwork/Artwork';
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
        <Artwork 
            source='http://curec.hamk.fi/old/vanhat_numerot/Curec2_2002/lehtikuvat/ompeluohje2.JPG' 
            title='Halko' 
            author='Dominika' />  
      </main>

    </Layout>
  )
}
