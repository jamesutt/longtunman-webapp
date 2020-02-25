import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { useBottomScrollListener } from 'react-bottom-scroll-listener'
import Post from './Post'
import { GET_POSTS } from '../graphql'

function Posts() {
  const { data, loading, error, fetchMore } = useQuery(GET_POSTS)

  const getLastPostId = () => {
    return data.posts.range.data[data.posts.range.data.length - 1].id
  }

  useBottomScrollListener(() => {
    if (!loading && !error) {
      fetchMore({
        variables: {
          before: getLastPostId(),
        },
        updateQuery: (prev, { fetchMoreResult }) => {
          if (!fetchMoreResult) return prev

          const mergedResult = { ...fetchMoreResult }
          mergedResult.posts.range.data = [
            ...prev.posts.range.data,
            ...fetchMoreResult.posts.range.data,
          ]
          return mergedResult
        },
      })
    }
  })

  if (loading || error) {
    return <div></div>
  }

  return (
    <>
      {data.posts.range.data.map(post => (
        <Post key={post.id} post={post} />
      ))}
    </>
  )
}

export default Posts
