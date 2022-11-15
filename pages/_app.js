import '../styles/globals.css'
import Header from '../components/Header';
import Footer from '../components/Footer';


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      {/* <div className='y'> */}
      <Component pageProps={pageProps} />
      {/* </div> */}
      <Footer />
    </>
  )
}

export default MyApp
