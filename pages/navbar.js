import React from 'react'
import Link from 'next/link'

const navbar = () => {
  return (
    <div><ul>
        <Link href="/"><li>Home</li></Link>
        <Link href="/about"><li>About</li></Link>
        <Link href="/User"><li>User</li></Link>
    </ul></div>
  )
}

export default navbar