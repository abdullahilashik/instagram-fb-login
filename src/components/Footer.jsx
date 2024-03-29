import React from 'react'
import {credits, links} from '../constrants/footer';
import { FaAngleDown } from "react-icons/fa6";


const Footer = () => {
  return (
    <div className='flex flex-col items-center'>
        {/* footer links */}
        <ul className="flex items-center">
            {
                links.map(link => <li className='opacity-70 hover:opacity-100 duration-300 p-2 text-sm'><a href={link.href} target='_blank'>{link.title}</a></li>)
            }
        </ul>
        {/* credits */}
        <ul className="flex items-center">
            {
                credits.map(item=> <li className='opacity-70 hover:opacity-100 duration-300 text-sm p-2 flex items-center space-x-2'>
                    <span>{item.title}</span>
                    {item.hasDropdown && <FaAngleDown />}
                </li>)
            }
        </ul>
    </div>
  )
}

export default Footer