import React from 'react'
import styled from '@emotion/styled'
import { Link } from 'react-router-dom'
import {
  COLORS,
  SIDE_BAR_TRANSITION_DURATION,
  SIDE_BAR_WIDTH,
} from '../constants'

function SideBar({ open }) {
  return (
    <StyledSideBar open={open}>
      <SideBarLink to="/">HOME</SideBarLink>
      <SideBarLink to="/category/บริษัทไทย">บริษัทไทย</SideBarLink>
      <SideBarLink to="/category/เศรษฐกิจ">เศรษฐกิจ</SideBarLink>
      <SideBarLink to="/category/แนวคิดการลงทุน">แนวคิดการลงทุน</SideBarLink>
      <SideBarLink to="/category/บริษัทต่างประเทศ">
        บริษัทต่างประเทศ
      </SideBarLink>
      <SideBarLink to="/category/ประวัติศาสตร์">ประวัติศาสตร์</SideBarLink>
      <SideBarLink to="/category/เทคโนโลยี">เทคโนโลยี</SideBarLink>
      <SideBarLink to="/category/บุคคลที่น่าสนใจ">บุคคลที่น่าสนใจ</SideBarLink>
      <SideBarLink to="/category/ABOUT">ABOUT</SideBarLink>
      <SideBarLink to="/category/CAREERS">CAREERS</SideBarLink>
    </StyledSideBar>
  )
}

const StyledSideBar = styled.div`
  background-color: ${COLORS.BLUE};
  position: absolute;
  padding-top: 24px;
  height: 100%;
  width: ${SIDE_BAR_WIDTH}px;

  left: ${props => (props.open ? '0px' : `-${SIDE_BAR_WIDTH}px`)};
  transition: all ${SIDE_BAR_TRANSITION_DURATION} linear;
`

const SideBarLink = styled(Link)`
  font-size: 1.6rem;
  color: ${COLORS.WHITE};
  display: block;
  padding: 8px 16px;
  text-decoration: none;
  cursor: pointer;

  &:visited,
  &:hover {
    color: ${COLORS.WHITE};
  }
`

export default SideBar
