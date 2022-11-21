import styles from '../styles/Home.module.css'
import Nft from '../components/Nft';
import Tech from '../components/Tech';
import About from '../components/About';
import Timeline from '../components/Timeline';
import Generate from '../components/Generate'

export default function Home() {
  return (
    <div className={styles.container}>
      <Generate />
      <Nft />
      <Tech />
      <About />
      <Timeline />
    </div>
  )
}
