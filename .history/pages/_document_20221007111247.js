import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <meta charset="utf-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name=" theme-color" content="#fff" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="robots" content="index, follow" />

                <title key="title">Application title</title>
                <link rel="icon" href="/favicon.ico"></link>
                <link rel="canonical" href="https://website.com/"></link>
                <meta name="description" content="Application description"></meta>

                {/* Open Graph Protocol */}
                {/* <meta property="fb:page_id" content="" />
                <meta property="twitter:site" content="" />

                <meta property="og:title" content="Application title"/>
                <meta property="og:type" content="application"/>
                <meta property="og:url" content="https://website.com"/>
                <meta property="og:site_name" content=""/>
                <meta property="og:description" content="Application description"/>
                <meta property="og:image" content=""/> */}
                {/* /Open Graph Protocol */}

                <noscript>Information if the scripts are not loaded</noscript>
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}