import React from 'react'
import { Link } from 'react-router-dom'

function Sidebar() {
  return (
    <div className='h-100 shadow position-fixed bg-white' style={{width:300,zIndex:3}}>
      <Link to='members'>Members</Link>
    </div>
  )
}

export default Sidebar