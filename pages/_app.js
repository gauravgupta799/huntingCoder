import '../styles/globals.css';
import Navbar from "../Components/Navbar";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer} from 'react-toastify';
import Footer from "../Components/Footer"

function MyApp({ Component, pageProps }) {
  return<>
    <Navbar/>
     <ToastContainer />
    <Component {...pageProps} />
    <Footer/>
  </>
}
export default MyApp