import React from 'react'
import styled from '@emotion/styled'
import { Link, useLocation } from 'react-router-dom'
import { COLORS } from '../constants'

function Layout({ children }) {
  const { pathname } = useLocation()

  return (
    <div>
      <TopBar />
      <NavBar>
        <NavBarLink to="/" pathname={pathname}>
          HOME
        </NavBarLink>
        <NavBarLink to="/category/บริษัทไทย" pathname={pathname}>
          บริษัทไทย
        </NavBarLink>
        <NavBarLink to="/category/เศรษฐกิจ" pathname={pathname}>
          เศรษฐกิจ
        </NavBarLink>
        <NavBarLink to="/category/แนวคิดการลงทุน" pathname={pathname}>
          แนวคิดการลงทุน
        </NavBarLink>
        <NavBarLink to="/category/บริษัทต่างประเทศ" pathname={pathname}>
          บริษัทต่างประเทศ
        </NavBarLink>
        <NavBarLink to="/category/ประวัติศาสตร์" pathname={pathname}>
          ประวัติศาสตร์
        </NavBarLink>
        <NavBarLink to="/category/เทคโนโลยี" pathname={pathname}>
          เทคโนโลยี
        </NavBarLink>
        <NavBarLink to="/category/บุคคลที่น่าสนใจ" pathname={pathname}>
          บุคคลที่น่าสนใจ
        </NavBarLink>
        <NavBarLink to="/category/ABOUT" pathname={pathname}>
          ABOUT
        </NavBarLink>
        <NavBarLink to="/category/CAREERS" pathname={pathname}>
          CAREERS
        </NavBarLink>
      </NavBar>
      {children}
    </div>
  )
}

function NavBarLink({ to, pathname, children }) {
  return (
    <StyledNavBarLink to={to} active={pathname === to ? 1 : 0}>
      {children}
    </StyledNavBarLink>
  )
}

const TopBar = styled.div`
  background-color: ${COLORS.BLUE};
  height: 60px;
  width: 100%;
`

const NavBar = styled.div`
  width: 1000px;
  border-bottom: 3px solid ${COLORS.BLUE};
  padding: 16px 8px;
  margin: 0 auto;
  box-sizing: border-box;

  display: flex;
  justify-content: space-between;

  @media (max-width: 1000px) {
    display: none;
  }
`

const StyledNavBarLink = styled(Link)`
  font-size: 1.6rem;
  color: ${props => (props.active ? COLORS.BLUE : COLORS.BLACK)};
  display: block;
  text-decoration: none;
  border-bottom: ${props =>
    props.active ? `3px solid ${COLORS.RED}` : 'none'};
  padding: 0 8px;

  &:visited {
    color: ${props => (props.active ? COLORS.BLUE : COLORS.BLACK)};
  }

  &:hover {
    color: ${COLORS.BLUE};
  }
`

export default Layout
