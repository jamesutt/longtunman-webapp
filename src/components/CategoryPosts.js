import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { useBottomScrollListener } from 'react-bottom-scroll-listener'
import Post from './Post'
import { GET_CATEGORY } from '../graphql'

function CategoryPosts({ termId }) {
  const { data, loading, error, fetchMore } = useQuery(GET_CATEGORY, {
    variables: {
      termId: termId,
    },
  })

  const getLastPostId = () => {
    return data.category.posts.range.data[
      data.category.posts.range.data.length - 1
    ].id
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
          mergedResult.category.posts.range.data = [
            ...prev.category.posts.range.data,
            ...fetchMoreResult.category.posts.range.data,
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
      {data.category.posts.range.data.map(post => (
        <Post key={post.id} post={post} />
      ))}
    </>
  )
}

export default CategoryPosts
