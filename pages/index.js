import Head from 'next/head';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>This is the Home Page for Duggy's</title>

      </Head>

      <main>
        <p>Hello World</p>
      </main>

      <footer>
      </footer>

    </div>
  );
}
