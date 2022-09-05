import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";
import Appbar from "../components/Nav";
import AOS from "aos";
import Loader from "../components/Loader";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";
function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-out-cubic",
      once: false,
      offset: 50,
    });
    setTimeout(() => setLoading(false), 3000);
  }, []);
  return loading ? (
    <Loader />
  ) : (
    <SessionProvider session={session} refetchInterval={5 * 60}>
      <Appbar />
      <Component {...pageProps} />
      <Footer />
    </SessionProvider>
  );
}

export default MyApp;
