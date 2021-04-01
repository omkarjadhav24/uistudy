import React, { Component } from 'react'
import './sidebar.css'
import {
    ProSidebar,
    Menu,
    MenuItem,
    SidebarHeader,
    SidebarFooter,
    SidebarContent,
  } from "react-pro-sidebar";
import {  } from "react-icons/fa";
import {  FiLogOut } from "react-icons/fi";
import { HiUsers,HiOutlineViewList } from "react-icons/hi";
import { AiFillShop } from "react-icons/ai";
import { GiFamilyTree } from "react-icons/gi";
import {NavLink } from 'react-router-dom';
import "react-pro-sidebar/dist/css/styles.css";
class Sidebar extends Component{
  state={
    menuCollapse:true
  }
  // for collapsing sidebar
  menuIconClick = () => {
    let prevMenuCollapse=this.state.menuCollapse
    this.setState({
        menuCollapse:!prevMenuCollapse
    })
  };
    render(){
        return(
            <>
           <div id="header">
        <ProSidebar collapsed={this.state.menuCollapse}>
          <SidebarHeader>
          <div  onClick={this.menuIconClick} className="logotext">
              <p>{this.state.menuCollapse ? <MenuItem icon={<HiOutlineViewList />}></MenuItem> : <MenuItem icon={<HiOutlineViewList />}>Serve</MenuItem>}</p>
           
            </div>
         
          </SidebarHeader>
          <SidebarContent>
            <Menu >
              <MenuItem icon={<HiUsers />}> <NavLink to="/user-management">User Management</NavLink> </MenuItem>
              <MenuItem icon={<AiFillShop />}><NavLink to="/vendors">Vendors</NavLink></MenuItem>
              <MenuItem icon={<GiFamilyTree />}><NavLink to="/product-category">Product Category</NavLink></MenuItem>
            </Menu>
          </SidebarContent>
          <SidebarFooter>
            <Menu >
              <MenuItem icon={<FiLogOut />}>Logout</MenuItem>
            </Menu>
          </SidebarFooter>
        </ProSidebar>
      </div>
            </>
        );
    }
}
export default Sidebar;