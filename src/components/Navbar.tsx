import Link from "next/link"
import { Poppins } from '@next/font/google'
import { useState } from "react"
import { HiMenuAlt3 } from 'react-icons/hi'

const poppins = Poppins({
  subsets: ['latin'],
  weight: [
    '100','200','300',
    '400','500','600',
    '700','800','900']
})

export const Navbar = () => {

  const [menu, setMenu] = useState(false)
  function handleClickMenu() {
    setMenu(!menu)
  }

  return (
    <div className={`fixed top-0 left-0 bg-white dark:bg-zinc-900 dark:text-white ${menu ? 'h-screen' : ''} sm:h-fit w-screen flex flex-row items-center ${poppins.className} z-10`}>
      <div className={`flex flex-col sm:flex-row items-center px-4 py-4 w-full ${menu ? 'absolute left-0 top-0 h-full': 'justify-between'}`}>
        <ul className={`flex-col sm:flex-row gap-4 ${menu ? 'flex absolute top-16 right-6 text-end' : 'hidden'} sm:flex`}>
          <li><Link href='/about'>Acerca de</Link></li>
          <li><Link href='/blog'>Blog</Link></li>
        </ul>
        <Link href='/' className={`block font-bold text-lg md:text-2xl ${menu ? 'absolute top-4 mx-auto' : ''}`}>Vicente Jorquera</Link>
        <Link href='/contact' className={`border-2 font-semibold p-1 px-2 rounded-md border-gray-900 text-lg dark:bg-teal-900 bg-gray-900 text-white hover:bg-gray-700 ${menu ? 'absolute top-36 right-6' : 'hidden'} sm:block`}>Contacto</Link>
        <HiMenuAlt3 onClick={handleClickMenu} className={`${menu ? '' : ''} sm:hidden absolute right-4 top-4 h-7 w-7 cursor-pointer`} />
        </div>
    </div>
  )
}