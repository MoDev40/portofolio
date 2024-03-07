import { GithubIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
const Header = () => {
  return (
  <header className="container mx-auto p-4 text-black">
    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-4">
        {/* <img
          src="path/to/your/logo.png"
          alt="Logo"
          className="h-8 w-8 rounded-full"
        /> */}
        <span className="text-2xl font-black">MA</span>
      </div>
      <Link
        href="https://github.com/your-username"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center space-x-2"
      >
        <GithubIcon size={30} className="text-2xl" />
        <span>Github</span>
      </Link>
    </div>
  </header>
  )
}

export default Header