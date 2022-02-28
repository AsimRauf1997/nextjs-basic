import React from 'react'
import { useRouter } from 'next/router'
const CategorySpecificpage = () => {
    const router  = useRouter()
    console.log(router.query)
  return (
    <div>
        <h1>
            This is a Category Page Specific Category Detail
        </h1>
        </div>
  )
}
export default CategorySpecificpage