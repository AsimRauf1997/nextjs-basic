import React from 'react'
import {useRouter} from 'next/router'
const ProductDetailPage = () => {
    const router =  useRouter()
    console.log(router.pathname, router.query)
  return (
    <div>
    <h1>This is a Product Detail Page</h1>
    </div>
  )
}

export default ProductDetailPage