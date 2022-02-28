import React from 'react'
import Link from 'next/link'
const Home = () => {
  return (
    <div>
        <h1>
            This is a Home Page
        </h1>
        <ul>
          <li>
            <Link href='/product'>Products</Link>
            
          </li>
          <li>
          <Link href='/categories'>Category</Link>
          </li>
        </ul>
    </div>
  )
}

export default Home