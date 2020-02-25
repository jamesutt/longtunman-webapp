import React, { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import NavBar from './NavBar'
import SideBar from './SideBar'
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
        <TopBar>
          <Button
            onClick={() => {
              setIsSideBarOpen(!isSideBarOpen)
            }}
          >
            <FontAwesomeIcon icon={faBars} />
          </Button>
          <Logo>ลงทุนแมน</Logo>
          <Button>
            <FontAwesomeIcon icon={faSearch} />
          </Button>
        </TopBar>
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

const TopBar = styled.div`
  background-color: ${COLORS.BLUE};
  height: 60px;
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Button = styled.button`
  font-size: 2rem;
  color: ${COLORS.WHITE};
  padding: 0 24px;
  border: none;
  background-color: transparent;
  outline: none;
  cursor: pointer;
`

const Logo = styled.h1`
  font-size: 4rem;
  color: ${COLORS.WHITE};
  margin: 0;
  font-weight: 500;
  letter-spacing: 3.2px;
  position: relative;
`

export default Layout
