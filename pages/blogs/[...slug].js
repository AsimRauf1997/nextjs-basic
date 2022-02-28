import React from 'react'
import { useRouter } from 'next/router'
const BlogPage = () => {
  const router = useRouter()
  console.log(router.query)
  return (
    <div>
      <h1>
        This is a Blog Page for Slugs   
      </h1>
    </div>
  )
}

export default BlogPage