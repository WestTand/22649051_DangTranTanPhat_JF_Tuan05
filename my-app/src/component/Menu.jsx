import React from 'react'
import DataMenu from '../data/DataMenu'
import './Menu.css';
export default function Menu() {
  return (
    <div className="menu">
      {DataMenu.map((item) => (
        <span key={item.id} className="menu-item">
          {item.title}
        </span>
      ))}
    </div>
  )
}
