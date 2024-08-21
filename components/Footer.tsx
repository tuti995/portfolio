import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className='bg-secondary py-4'>
      <div className='text-center text-muted-freground'>
        <small className='text-slate-500'>&copy; {new Date().getFullYear()} tuti95. All Rights Reserved.</small>
      </div>
    </footer>
  )
}