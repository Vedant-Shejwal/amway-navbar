import React from 'react'
import './NavSection.css'

const NavSection = ({ item }) => {
    return (
        <div className='navsection'>
            <div className="footer-title">
                {item.header}
            </div>
            <ul>
                {item.list.map((sublist, index) => (
                    <li className='footer-link' key={index} >
                        <a href={sublist.link.href}>
                            {sublist.link.title}
                        </a>
                    </li>
                ))}

            </ul>

        </div>
    )
}

export default NavSection
