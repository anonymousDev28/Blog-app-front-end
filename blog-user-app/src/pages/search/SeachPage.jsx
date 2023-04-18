import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useLazySearchBlogByKeyQuery} from '../../app/service/BlogService';

function SeachPage() {
    const [keyword,setKeyWord] = useState("");
    const [ search, results] = useLazySearchBlogByKeyQuery(keyword);
    const handleSearch = (event) =>{
        if (event.key === 'Enter') {
            search(event.target.value);
        }
    }
    useEffect(() => {
        if (results) {
          console.log(results)
        }
      }, [results]);
  return (
    <main className="main">
    <header className="page-header">
        <h1>
            Search
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentcolor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
        </h1>
        <div className="post-description">Tìm kiếm bài viết</div>
        <div className="post-meta"></div>
    </header>
    <div id="searchbox">
        <input
            id="searchInput"
            autoFocus
            placeholder="Tìm kiếm bài viết"
            type="search"
            autoComplete="off"
            onChange={(e)=>setKeyWord(e.target.value)}
            onKeyDown={(e)=>handleSearch(e)}
        />
        <ul id="searchResults">
            {results.data?.map((c)=>(
                <li className="post-entry" key={c.id}>
                    <header className="entry-header">
                       {c.title}&nbsp;»
                    </header>
                    <Link
                        to={`/blogs/${c.id}/${c.slug}`}
                        aria-label="Truyền dữ liệu giữa React Components"
                    ></Link>
                </li>
            ))}
        </ul>
    </div>
</main>
  )
}

export default SeachPage