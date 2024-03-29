import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                    <link href="https://fonts.googleapis.com/css2?family=Kaushan+Script&family=Poppins:wght@400;600;700&display=swap" rel="stylesheet" />
                </Head>
                <body className='bg-gradient-to-r from-green to-blue-400 dark:from-dark-500 dark:to-dark-700 dark:text-white'>
                <Main />
                <NextScript />
                </body>
            </Html>
        );
    }
}
