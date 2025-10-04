import Link from 'next/link'
import React from 'react'

function Navebar() {
  return (
    <div className=' shadow p-4 flex gap-3'>
        <Link href="/">home</Link>
        <Link href="/blogs">blogs</Link>
    </div>
  )
}

export default Navebar