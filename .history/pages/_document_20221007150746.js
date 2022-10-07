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
                <meta name="description" content="Application description"></meta>

                <noscript>Information if the scripts are not loaded</noscript>
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}