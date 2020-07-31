import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import BlogCard from './BlogCard';

const BlogContainer = styled.div`
  height: 100vh;
  max-width: 100%;
  padding: 5rem 0rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow-y: hidden;
  line-height: 1.5rem;
`;

const BreakFade = styled.div`
  display:block;
  color:white;
  height: 5px;
  width: 100%;
  margin: 1rem 0;
  background: black;
  background: -webkit-gradient(
    radial, 50% 50%, 0, 50% 50%, 550, from(rgb(32, 40, 58)), to(#0E111A)
  );
`

const BlogTitle = styled.h1`
  font-size: 10rem;
  text-decoration: underline;
`

const BlogWrapper = () => {
  const [blog, setBlog] = useState([])

  useEffect(() => {
    axios('https://dev.to/api/articles?username=syriiadvent')
    .then(res => {
      setBlog(res.data)
    })
    .catch(err => console.log("Error retrieving blog post.", err))
  }, [])

  return (
    <BlogContainer>
      <BlogTitle>Blogs</BlogTitle>
        {blog.length > 0 ? 
          blog.map(article => {
            return (
              <BlogCard key={article.slug} blog={article} />
            )
          }
        ) : null}
      {console.log(blog)}
    </BlogContainer>
  )
}

export default BlogWrapper
