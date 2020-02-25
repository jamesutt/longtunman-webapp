import React from 'react'
import styled from '@emotion/styled'
import { COLORS, MAX_POST_WIDTH } from '../constants'
import defaultThumbnail from '../assets/defaultThumbnail.jpg'
import { getThaiDate } from '../utils'

function Post({ post }) {
  return (
    <StyledPost
      onClick={() => {
        window.location.href = `https://www.longtunman.com/${post.id}`
      }}
    >
      {post.thumbnail ? (
        <img src={post.thumbnail.src} alt="" />
      ) : (
        <img src={defaultThumbnail} alt="" />
      )}
      <div className="description">
        <h2>{post.post_title}</h2>
        <p>{post.post_excerpt || post.post_title}</p>
      </div>
      <div className="date-container">
        <div className="date">{getThaiDate(new Date(post.post_date))}</div>
      </div>
    </StyledPost>
  )
}

const StyledPost = styled.div`
  max-width: ${MAX_POST_WIDTH}px;
  background-color: ${COLORS.WHITE};
  cursor: pointer;
  border-bottom: 4px solid ${COLORS.BLUE};
  margin-bottom: 16px;

  font-size: 1.6rem;

  img {
    height: auto;
    width: 100%;
  }

  .description {
    border-left: 6px solid ${COLORS.RED};
    margin: 8px;
    padding: 8px;

    h2 {
      margin: 0 0 8px;
      font-size: 2.8rem;
      line-height: 3.3rem;
    }

    p {
      font-family: 'Sarabun', sans-serif;
      margin: 0;
    }

    &:hover {
      color: ${COLORS.BLUE};
    }
  }

  .date-container {
    display: flex;
    justify-content: center;

    .date {
      font-family: 'Sarabun', sans-serif;
      margin: 0 auto;
      background-color: ${COLORS.BLUE};
      border-top-left-radius: 16px;
      border-top-right-radius: 16px;
      color: ${COLORS.WHITE};
      padding: 4px 16px 0;
      display: inline-block;
    }
  }
`

export default Post
