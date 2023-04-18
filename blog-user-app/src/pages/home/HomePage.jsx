import React from "react";
import { Link } from "react-router-dom";
import { useGetAllblogQuery } from "../../app/service/BlogService";
import { useGetTop5CategoryMostUsedQuery } from "../../app/service/categoryService";

function HomePage() {
  const { data, isLoading, isError, error } = useGetAllblogQuery();
  const { data: category} = useGetTop5CategoryMostUsedQuery();
//   console.log(category);
  if (isLoading) {
    return <h2>Loading ...</h2>;
  }

  if (isError) {
    return <h2>Error : {error}</h2>;
  }
  return (
    <main className="main">
      <header className="entry-header">
        <h1>
          <span
            style={{
              display: "inline-block",
              transform: "rotateY(180deg)",
            }}
          >
            🐈
          </span>
          Blog app <span>🐈</span>
        </h1>
      </header>
      <ul className="terms-tags top-tags">
        {category?.length > 0 &&
          category.map((c) => (
            <li key={c.id}>
              <Link to={`/categories/${c.name}`}>
                {c.name}
                <sup>
                  <strong>
                    <sup>{c.used}</sup>
                  </strong>
                </sup>
              </Link>
            </li>
          ))}
      </ul>
      {data?.content.map((c) => (
        <article key={c.id} className="post-entry">
          <header className="entry-header">
            <h2>{c.title}</h2>
          </header>
          <div className="entry-content">
            <p>{c.content}</p>
          </div>
          <footer className="entry-footer">
            <span>{c.createdAt.join("/")}</span>
          </footer>
          <Link
            className="entry-link"
            aria-label="post link to Hướng dẫn tạo tài khoản và sử dụng ChatGPT chỉ với 1 cốc trà đá"
            to={`/blogs/${c.id}/${c.slug}`}
          ></Link>
        </article>
      ))}
    </main>
  );
}

export default HomePage;
