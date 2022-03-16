import React from 'react'
import {SidebarBottom,SidebarData,SidebarMore} from '../../../data/sidebar'
import './sidebar.css'
import SidebarOption from './sidebar-option'

function Sidebar() {

  const topOption = SidebarData;
  const more = SidebarMore;
  const bottomOption = SidebarBottom;

  return <div className='sidebar'>
    <div className='sidebar-top'>
      <div></div>
      {topOption.map((option)=>{
        return(
          <SidebarOption option={option} isActive={option.name === "Chat"? true:false} />
        )
      })}
    </div>
    <div>
      <SidebarOption option={more} />
    </div>
    <div className='sidebar-bottom'>
      {bottomOption.map((option) => {
        return(
          <SidebarOption option={option} />
        )
      })}
    </div>
  </div>
}

export default Sidebar