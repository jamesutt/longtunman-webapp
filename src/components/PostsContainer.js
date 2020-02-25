import React from 'react'
import styled from '@emotion/styled'
import { COLORS } from '../constants'

function PostsContainer({ children }) {
  return (
    <StyledPostsContainer>
      <div>{children}</div>
      <Ads />
    </StyledPostsContainer>
  )
}

function Ads() {
  return (
    <StyledAds>
      <Ad>Advertisement</Ad>
      <Ad>Advertisement</Ad>
      <Ad>Advertisement</Ad>
    </StyledAds>
  )
}

const StyledPostsContainer = styled.div`
  padding: 16px;
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  width: 100%;

  @media (min-width: 1000px) {
    width: 1000px;
    margin: 0 auto;
    padding: 16px 0;
    justify-content: flex-end;
  }
`

const StyledAds = styled.div`
  margin-left: 16px;

  @media (max-width: 999px) {
    display: none;
  }
`

const Ad = styled.div`
  background-color: ${COLORS.WHITE};
  width: 300px;
  height: 200px;
  margin-bottom: 16px;
  font-size: 1.2rem;

  display: flex;
  justify-content: center;
  align-items: center;
`

export default PostsContainer
