import React, { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import NavBar from './NavBar'
import SideBar from './SideBar'
import TopBar from './TopBar'
import {
  COLORS,
  SIDE_BAR_TRANSITION_DURATION,
  SIDE_BAR_WIDTH,
} from '../constants'

function Layout({ children }) {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false)

  useEffect(() => {
    document.querySelector('body').style.overflowX = isSideBarOpen
      ? 'hidden'
      : 'visible'
  }, [isSideBarOpen])

  return (
    <>
      <Main open={!isSideBarOpen}>
        <MainOverlay
          show={isSideBarOpen}
          onClick={() => setIsSideBarOpen(false)}
        />
        <TopBar setIsSideBarOpen={setIsSideBarOpen} />
        <NavBar />
        {children}
      </Main>

      <SideBar open={isSideBarOpen} />
    </>
  )
}

const Main = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  left: ${props => (props.open ? '0px' : `${SIDE_BAR_WIDTH}px`)};
  transition: all ${SIDE_BAR_TRANSITION_DURATION} linear;
`

const MainOverlay = styled.div`
  display: ${props => (props.show ? 'block' : 'none')};
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: ${COLORS.OVERLAY};
  z-index: 1;
`

export default Layout
