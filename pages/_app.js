import '../styles/globals.css'
import { SessionProvider } from 'next-auth/react'

function MyApp({
  Component,
  pageProps: {
    session, ...pageProps
  }
}) {

  return (
    <SessionProvider session={session} refetchInterval={5*60}>
      <Component {...pageProps} />
    </SessionProvider>
  )
}

export default MyApp
