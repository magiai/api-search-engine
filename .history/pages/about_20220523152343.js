import Head from 'next/head';
import Layout from '../components/layout';

export default function About() {
    return (
        <Layout>
            <Head>
                <title key="title">About</title>
            </Head>
            <h1>About</h1>
        </Layout>
    );
}