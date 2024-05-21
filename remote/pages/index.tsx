'use client'
import React from 'react'
import Link from 'next/link'

const index = () => {
  return (
   <>
    <div>
      <h3>
        this is next js remote app
        {/* <Button/> */}
        {/* <button><Link href="/home">home</Link></button> */}
        <Link href="/">Home</Link>

      </h3>
    </div>

   </>
  )
}

export default index