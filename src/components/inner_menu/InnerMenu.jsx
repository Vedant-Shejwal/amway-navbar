import React from 'react';
import { FaChevronLeft } from "react-icons/fa";
import './InnerMenu.css';

const InnerMenu = ({ item, isSupportList }) => {
    
    const list = isSupportList ? item.supportList : item.subList;
    const title = isSupportList ? item.supportTitle : item.title;

    return (
        <div className='inner-menu'>
            <div className="innermenu-topbar">
                <div className="left-chevron"><FaChevronLeft /></div>
                <div className="innermenu-title">{title}</div>
            </div>
            <ul className="innermenu-sublist">
                {list.map((subItem, subIndex) => {
                    const isLastItem = !isSupportList && subIndex === list.length - 1;
                    return (
                        <li key={subIndex}>
                            <a 
                                href={subItem.link.href} 
                                style={{
                                    textDecoration: isLastItem ? 'underline' : 'none',
                                    fontWeight: isLastItem ? 600 : 400,
                                }}
                            >
                                {subItem.link.title}
                            </a>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
};

export default InnerMenu;
