import '../styles/globals.css'
import { SessionProvider } from 'next-auth/react'
import Appbar from '../components/Nav'
function MyApp({
  Component,
  pageProps: {
    session, ...pageProps
  }
}) {

  return (
    <SessionProvider session={session} refetchInterval={5*60}>
      <Appbar/>
      <Component {...pageProps} />
    </SessionProvider>
  )
}

export default MyApp
