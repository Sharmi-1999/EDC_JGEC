import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";
import Appbar from "../components/Nav";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);
  return (
    <SessionProvider session={session} refetchInterval={5 * 60}>
      <Appbar />
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default MyApp;
