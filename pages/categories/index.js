import React from 'react'
import Link from 'next/link'
const categories = [
  {id:'vegetables', name:'Vegetables'},
  {id:'fruits', name:'Fruits'},
  {id:'dryFruits', name:'Dry Fruits'},
  {id:'Newly Added', name:'Newly Added'},
]
const Categories = () => {
  return (
    <div>
      <h1>
      This is a Categories Page
      </h1>
      <ul style={{ display: 'flex', flexDirection:'row', justifyContent: 'space-around', backgroundColor:'#cfcfcf', padding:'20px', margin:'20px', borderRadius:'20px'}}>
        {categories.map(category=>(
          <li key={category.id} style={{ listStyle:'none' }}>
          <Link href={{
            pathname:'/categories/[id]',
            query:{id: category.id}
          }}>{category.name}</Link>
        </li>
        ))}
      </ul>
    </div>
  )
}

export default Categories