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
            source='//upload.wikimedia.org/wikipedia/commons/thumb/1/10/Illustration_Fagopyrum_esculentum0.jpg/363px-Illustration_Fagopyrum_esculentum0.jpg' 
            title='Halko' 
            author='Dominika' />  
      </main>

    </Layout>
  )
}
