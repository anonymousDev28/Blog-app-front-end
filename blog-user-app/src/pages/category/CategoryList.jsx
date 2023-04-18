import React from 'react'
import { Link } from 'react-router-dom'
import { useGetAllCategoryQuery} from '../../app/service/categoryService';

function CategoryList() {
  const { data, isLoading, isError, error } = useGetAllCategoryQuery();
  if (isLoading) {
    return <h2>Loading ...</h2>;
  }
  if (isError) {
    return <h2>Error: {error}</h2>;
  }
  // console.log(data)
  return (
    <main className="main">
        <header className="page-header">
            <h1>Tags</h1>
        </header>
        <ul className="terms-tags">
            {data.length > 0 && 
              data.map((c)=>(
                <li key = {c.id} >
                <Link to={`/categories/${c.name}`}>{c.name}
                    <sup><strong><sup>{c.used}</sup></strong></sup></Link>
                </li>
              )) 

            }
        </ul>
    </main>
  )
}

export default CategoryList