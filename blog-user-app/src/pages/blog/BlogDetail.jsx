import React from "react";
import { useParams } from "react-router-dom";
import { useGetBlogByIdAndSlugQuery} from "../../app/service/BlogService";

function BlogDetail() {
  const { blogId,blogSlug} = useParams();
  const { data, isLoading, isError, error } = useGetBlogByIdAndSlugQuery({id: blogId,slug: blogSlug});
  console.log(data);
  if (isLoading) {
    return <h2>Loading ...</h2>;
}

if (isError) {
    return <h2>Error : {error}</h2>;
}
  return (
      <main className="main">
            <article className="post-single">
            <header className="post-header">
              <h1 className="post-title">
                {data.title}
              </h1>
              <div className="post-meta">
                <span>{data.createdAt.join("/")}</span>
              </div>
            </header>
            <div className="post-content">
              <p>
                {data.content}
              </p>
            </div>
          </article>
    </main>
    
  );
}

export default BlogDetail;
