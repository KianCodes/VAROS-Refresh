import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class CustomDocument extends Document {
  render() {
    return (
      <Html>
        <Head />
        <body>
          <style>
            @import
            url('https://fonts.googleapis.com/css2?family=Spline+Sans:wght@300;400;500;600;700&display=swap');
          </style>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
