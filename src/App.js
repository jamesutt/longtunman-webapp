import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ApolloClient from 'apollo-boost'
import { ApolloProvider, useQuery } from '@apollo/react-hooks'
import { POST_FRAGMENT, GET_POSTS, GET_CATEGORY } from './graphql'
import GlobalCss from './GlobalCss'
import Layout from './components/Layout'
import Posts from './components/Posts'
import CategoryPosts from './components/CategoryPosts'
import PostsContainer from './components/PostsContainer'

function App() {
  const client = new ApolloClient({
    uri: process.env.REACT_APP_GRAPHQL_URL,
  })

  return (
    <ApolloProvider client={client}>
      <Router>
        <GlobalCss />
        <Layout>
          <Switch>
            <Route path="/" exact>
              <PostsContainer>
                <Posts />
              </PostsContainer>
            </Route>
            <CategoryRoutes />
          </Switch>
        </Layout>
      </Router>
    </ApolloProvider>
  )
}

function CategoryRoutes() {
  const categories = [
    {
      name: 'บริษัทไทย',
      termId: 2,
    },
    {
      name: 'เศรษฐกิจ',
      termId: 16,
    },
    {
      name: 'แนวคิดการลงทุน',
      termId: 85,
    },
    {
      name: 'บริษัทต่างประเทศ',
      termId: 11,
    },
    {
      name: 'ประวัติศาสตร์',
      termId: 131,
    },
    {
      name: 'เทคโนโลยี',
      termId: 13,
    },
    {
      name: 'บุคคลที่น่าสนใจ',
      termId: 467,
    },
  ]

  return (
    <>
      {categories.map(category => (
        <Route key={category.termId} path={`/category/${category.name}`} exact>
          <PostsContainer>
            <CategoryPosts termId={category.termId} />
          </PostsContainer>
        </Route>
      ))}
    </>
  )
}

export default App
