import '../styles/globals.css';
import Navbar from "../Components/Navbar";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer} from 'react-toastify';

function MyApp({ Component, pageProps }) {
  return<>
    <Navbar/>
     <ToastContainer />
    <Component {...pageProps} />
  </>
}

export default MyApp
