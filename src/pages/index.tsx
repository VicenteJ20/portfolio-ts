import type { NextPage } from 'next'
import Head from 'next/head'
import { Poppins } from '@next/font/google'
import { Navbar } from '../components/Navbar'

const poppins = Poppins({
  subsets: ['latin'],
  weight: [
    '100','200','300',
    '400','500','600',
    '700','800','900']
})

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home - Vicente Jorquera</title>
      </Head>
      <Navbar />
      <main className={`min-h-screen w-screen ${poppins.className}`}>

      </main>
    </>
  )
}

export default Home
