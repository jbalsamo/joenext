import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import MyNav from './mynav'
//import navsty from '../styles/nav.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
            <title>Joe's Home</title>
            <link rel="icon" href="/favicon.ico" />
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous" />
      </Head>

      <main className={styles.main}>
        <MyNav />
        <Container className={styles.title}>
          <Row>
            <Col md='3' lg='3'>
              <Image src="/assets/images/joe@0.25x.jpg" rounded />
            </Col>
            <Col className={styles.htitle} md='3' lg='9'>
              <div>Welcome to Joe's Home!</div>
            </Col>
          </Row>
        </Container>

        <p className={styles.description}>
          Programmer, Gamer, and critical thinker.  Follow my projects, interests,
          random thoughts, and the leftovers that litter my space.
        </p>

        <div className={styles.grid}>
          <a href="/projects" className={styles.card}>
            <h3>Projects &rarr;</h3>
            <p>Explore the projects I am working on or have worked on.</p>
          </a>

          <a href="/blog" className={styles.card}>
            <h3>Blog &rarr;</h3>
            <p>My random thoughts and rants on all topics!</p>
          </a>

          <a href="/gallery" className={styles.card}>
            <h3>Gallery &rarr;</h3>
            <p>Images, Screenshots, and Art from my imagination.</p>
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
