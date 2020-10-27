import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Image from 'react-bootstrap/Image'

export default function Project() {
    return (
        <div className={styles.container}>
      <Head>
        <title>Joe's Home - Projects</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Image className={styles.halfSize} src='/assets/images/projects-2.jpg' />
        <p className={styles.description}>
          Projects I am part of, follow, or am fond of.
        </p>

        <div className={styles.grid}>
          <a href="/projects/1" className={styles.card}>
            <h3>Quip &rarr;</h3>
            <p>Digital Pathology viewing and markup software.</p>
          </a>

          <a href="/projects/2" className={styles.card}>
            <h3>SBRIES &rarr;</h3>
            <p>Local image archive of de-identified radiology images.</p>
          </a>

          <a href="/projects/3" className={styles.card}>
            <h3>Covid Bots &rarr;</h3>
            <p>Bots to disseminate Covid 19 information based on answers to questions.</p>
          </a>

          <a href="/misc" className={styles.card}>
            <h3>Miscellaneous &rarr;</h3>
            <p> Various things I am interested in and like.</p>
          </a>
        </div>

      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
        </footer>
        </div>
    )
}