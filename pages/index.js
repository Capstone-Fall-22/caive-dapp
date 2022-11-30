import styles from '../styles/Home.module.css'
import Nft from '../components/Nft';
import Tech from '../components/Tech';
import About from '../components/About';
import Timeline from '../components/Timeline';
import Generate from '../components/Generate'

export default function Home({ images }) {
  console.log(images);
  return (
    <div className={styles.container}>
      <Nft images={images} />
      <Tech />
      <About />
      <Timeline />
      <Generate />
    </div>
  )
}

export async function getServerSideProps() {
  return {
    props: {
      images: `${process.cwd()}/json/${process.env.CONTRACT_ADDRESS}.json`
      // contract
    }
  }
}