import React from 'react'
import { useRouter } from 'next/router'
const CategoryDetailPage = () => {
    const router  =  useRouter()
  return (
    <div>
        <h1>
        This is a Category Detail Page
        </h1>
        <button onClick={()=>router.replace({
            pathname: '/categories/[id]/[categoryid]',
            query:{id:'asim', categoryid:'1'}
        })}>
            Router Replace
        </button>
        <button onClick={()=>router.push({
            pathname: '/categories/[id]/[categoryid]',
            query:{id:'rauf', categoryid:'2'}
        })}>
            Router Push
        </button>
        </div>
  )
}

export default CategoryDetailPage