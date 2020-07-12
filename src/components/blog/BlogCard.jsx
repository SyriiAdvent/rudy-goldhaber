import React from 'react'
import styled from 'styled-components'

const Blog = styled.div`
  max-width: 80%;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #20283a;
  border-radius: 8px;

  @media (max-width: 786px) {
    margin: 0;
    flex-direction: column;
  }
`
const PreviewImage = styled.div`
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  @media (max-width: 786px) {
    max-width: 100%;
  }

  a img {
    width: 100%;
    height: auto;
    border-radius: 12px;
  }
`
const BlogContents = styled.div`
  margin: 0 0 0 1rem;
  display: flex;
  flex-direction: column;
  width: 100%;

  span {
    color: cyan;
  }

  ul {
    display: flex;
    flex-direction: row;
    margin-top: auto;
    padding: 0;

    @media (max-width: 786px) {
      margin: 0;
    }

    li {
      list-style: none;
      margin-left: 8px;

      @media (max-width: 786px) {
        margin-left: 5px;
      }
    }
    li:first-child {
      margin: 0
    }
  }

  @media (max-width: 786px) {
    margin: 0;
    flex-direction: column;
    justify-content: center;
    text-align: center;

    p {
      text-align: left;
    }
  }
`

const BlogCard = (props) => {
  const blog = props.blog

  return (
    <Blog key={blog.slug}>
      <PreviewImage>
        <a href={blog.url} target='_blank'>
          <img src={blog.social_image} />
        </a>
      </PreviewImage>
      <BlogContents>
        <h3>{blog.title}</h3>
        <p>{blog.description}</p>
        <br/>
        <ul>
          {blog.tag_list.map(tag => {
            return <li><span>#</span>{tag}</li>
          })}
        </ul>
      </BlogContents>
    </Blog>
  )
}

export default BlogCard
