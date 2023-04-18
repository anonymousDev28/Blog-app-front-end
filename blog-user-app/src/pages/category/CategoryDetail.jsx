import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useGetBlogUsedCategoryNameQuery } from '../../app/service/categoryService';

function CategoryDetail() {
    const {categoryName} = useParams();
    const { data, isLoading, isError, error } = useGetBlogUsedCategoryNameQuery(categoryName);
    console.log(data);
    if (isLoading) {
        return <h2>Loading ...</h2>;
      }
      if (isError) {
        return <h2>Error: {error}</h2>;
      }
  return (
    <main className="main">
    <header className="entry-header">
        <h1 style={{marginBottom: "1rem"}}>Tag : {categoryName}</h1>
    </header>
    {data.length > 0 && 
              data.map((c)=>(
                // <li key = {c.id} >
                // <Link to={`/categories/${c.name}`}>{c.name}
                //     <sup><strong><sup>{c.used}</sup></strong></sup></Link>
                // </li>
                <article className="post-entry">
                <header className="entry-header">
                    <h2>
                        {c.title}
                    </h2>
                </header>
                <div className="entry-content">
                    <p>
                        {c.content}
                    </p>
                </div>
                <footer className="entry-footer">
                    <span>{c.createdAt.join("/")}</span>
                </footer>
                <Link className="entry-link"
                    aria-label="post link to Hướng dẫn tạo tài khoản và sử dụng ChatGPT chỉ với 1 cốc trà đá" to={"/blogs/1/abc"}></Link>
                </article>
              )) 

            }
    {/* <article className="post-entry">
        <header className="entry-header">
            <h2>
                Hướng dẫn tạo tài khoản và sử dụng Chat GPT chỉ với 1
                cốc trà đá
            </h2>
        </header>
        <div className="entry-content">
            <p>
                Dạo này Chat GPT đang rất hot, được thần thành hóa lên
                quá khiến nhiều người lo sợ nó sẽ “cướp” mất công việc
                của mình. Vậy Chat GPT cụ thể là gì, dùng như nào? Bài
                viết này mình sẽ hướng dẫn các bạn tự tạo tài khoản cho
                riêng mình và trải nghiệm thử Chat GPT, một công cụ khá
                hữu ích nếu bạn sử dụng đúng cách. Còn nếu muốn trải
                nghiệm nhanh thì các bạn có thể kéo xuống cuối bài viết
                để lấy một số tài khoản free được chia sẻ trên mạng
                (dùng chung cho nhiều người)....
            </p>
        </div>
        <footer className="entry-footer">
            <span>01/02/2023</span>
        </footer>
        <Link className="entry-link"
            aria-label="post link to Hướng dẫn tạo tài khoản và sử dụng ChatGPT chỉ với 1 cốc trà đá" to={"/blogs/1/abc"}></Link>
    </article> */}
</main>
  )
}

export default CategoryDetail