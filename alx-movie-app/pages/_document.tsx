import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <link rel="manifest" href="/manifest.json" />
                <meta name="theme-color" content="#0070f3" />
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta name="apple-mobile-web-app-status-bar-style" content="default" />
                <meta name="apple-mobile-web-app-title" content="Cine Seek" />
                <link rel="apple-touch-icon" href="/icons/apple-icon-152x152.png" />
                <meta name="msapplication-TileImage" content="/icons/ms-icon-310x310.png" />
                <meta name="msapplication-TileColor" content="#0070f3" />
            </Head>
            <body className="antialiased">
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}