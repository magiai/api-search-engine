import Head from 'next/head';
import { Artwork } from '../components/artwork/Artwork';
import Layout from '../components/Layout';
import SearchEngine from '../components/search/SearchEngine';

export default function Home() {
  return (
    <Layout home = { true }>
      <Head>
        <title key="title">Artworks Search Engine</title>
      </Head>

      <main>
        <SearchEngine />
        {/* <Artwork 
            source='https://www.artic.edu/iiif/2/276252ca-b499-5539-ea43-a7e58c8ea973/full/843,/0/default.jpg' 
            title='Halko' 
            author='Dominika' />   */}
      </main>

    </Layout>
  )
}
