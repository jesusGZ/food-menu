import React from 'react';
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarMenu,
  SidebarLink,
  SidebarRoute,
  SideBtnWrap,
} from './SidebarElements';

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer
      // @ts-ignore
      isOpen={isOpen}
      onClick={toggle}
    >
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarMenu>
        <SidebarLink to="/">Pizzas</SidebarLink>
        <SidebarLink to="/">Pizzas</SidebarLink>
        <SidebarLink to="/">Todo el menu</SidebarLink>
      </SidebarMenu>
      <SideBtnWrap>
        <SidebarRoute to="/">Ordenar</SidebarRoute>
      </SideBtnWrap>
    </SidebarContainer>
  );
};

export default Sidebar;
