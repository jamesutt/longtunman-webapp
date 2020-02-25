import { gql } from 'apollo-boost'

export const POST_FRAGMENT = gql`
  fragment PostFragment on Post {
    id
    post_status
    post_title
    post_excerpt
    post_date
    post_modified
    thumbnail {
      src
      height
      width
      sizes(size: "medium_large") {
        width
        height
        src
      }
    }
  }
`

export const GET_POSTS = gql`
  query Posts($before: Int) {
    posts {
      range(before: $before) {
        has_before
        data {
          ...PostFragment
        }
      }
    }
  }
  ${POST_FRAGMENT}
`

export const GET_CATEGORY = gql`
  query Category($termId: Int!, $before: Int) {
    category(term_id: $termId) {
      term_id
      slug
      name
      posts {
        range(before: $before) {
          has_before
          data {
            ...PostFragment
          }
        }
      }
    }
  }
  ${POST_FRAGMENT}
`
