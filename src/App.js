import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ApolloClient from 'apollo-boost'
import { ApolloProvider, useQuery } from '@apollo/react-hooks'
import { POST_FRAGMENT, GET_POSTS, GET_CATEGORY } from './graphql'

function App() {
  const client = new ApolloClient({
    uri: process.env.REACT_APP_GRAPHQL_URL,
  })

  return (
    <ApolloProvider client={client}>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Posts />
          </Route>
          <Route path="/category/เศรษฐกิจ" exact>
            <CategoryPosts termId={2} />
          </Route>
        </Switch>
      </Router>
    </ApolloProvider>
  )
}

function Posts() {
  const { data, loading, error, fetchMore } = useQuery(GET_POSTS)

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error</div>

  return (
    <>
      <h1>Posts</h1>
      {data.posts.range.data.map(post => (
        <p key={post.id}>{post.post_title}</p>
      ))}
      <button
        onClick={() => {
          fetchMore({
            variables: {
              before:
                data.posts.range.data[data.posts.range.data.length - 1].id,
            },
            updateQuery: (prev, { fetchMoreResult }) => {
              if (!fetchMoreResult) return prev

              const updatedResult = { ...fetchMoreResult }
              updatedResult.posts.range.data = [
                ...prev.posts.range.data,
                ...fetchMoreResult.posts.range.data,
              ]
              return updatedResult
            },
          })
        }}
      >
        Load more
      </button>
    </>
  )
}

function CategoryPosts({ termId }) {
  const { data, loading, error, fetchMore } = useQuery(GET_CATEGORY, {
    variables: {
      termId: 2,
    },
  })

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error</div>

  return (
    <>
      {data.category.posts.range.data.map(post => (
        <p key={post.id}>{post.post_title}</p>
      ))}
      <button
        onClick={() => {
          fetchMore({
            variables: {
              before:
                data.category.posts.range.data[
                  data.category.posts.range.data.length - 1
                ].id,
            },
            updateQuery: (prev, { fetchMoreResult }) => {
              if (!fetchMoreResult) return prev

              const updatedResult = { ...fetchMoreResult }
              updatedResult.category.posts.range.data = [
                ...prev.category.posts.range.data,
                ...fetchMoreResult.category.posts.range.data,
              ]
              return updatedResult
            },
          })
        }}
      >
        Load more
      </button>
    </>
  )
}

export default App
