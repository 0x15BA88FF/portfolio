import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <meta name="description" content="Pascal Nkornyui's Portfolio | Website developer, frontend, backend, fullstack, software developer, software engineer" />
                <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
            </Head>
            <body className="bg-background-50">
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
