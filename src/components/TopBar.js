import React from 'react'
import styled from '@emotion/styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons'
import { COLORS } from '../constants'

function TopBar({ setIsSideBarOpen }) {
  return (
    <StyledTopBar>
      <Button
        onClick={() => {
          setIsSideBarOpen(true)
        }}
      >
        <FontAwesomeIcon icon={faBars} />
      </Button>
      <Logo>ลงทุนแมน</Logo>
      <Button>
        <FontAwesomeIcon icon={faSearch} />
      </Button>
    </StyledTopBar>
  )
}

const StyledTopBar = styled.div`
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

export default TopBar
