import Image from 'next/image'
import Link from 'next/link'
export default function Home() {
  return (
    <div>
      <h1>LOGIN</h1>
      <button className='p-2 bg-green-500 text-white'> <Link href='/login'> Login page </Link> </button>
      
      <h1>SIGN PAGE</h1>
      <button className='p-2 bg-green-500 text-white'> <Link href='/signup'> sign page </Link></button>
      
    </div>
  )
}
