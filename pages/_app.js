import '../styles/globals.css'
import Header from '../components/Header';
import Footer from '../components/Footer';
import Nft from '../components/Nft';
import Tech from '../components/Tech';
import About from '../components/About';
import Timeline from '../components/Timeline';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Nft />
      <Tech />
      <About />
      <Timeline />
      <Footer />
    </>
  )
}

export default MyApp
