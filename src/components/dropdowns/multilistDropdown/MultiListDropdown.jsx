import React from 'react';
import { IoChevronDownSharp } from 'react-icons/io5';
import "./MultiListDropdown.css";
import useDropdown from '../../../utils/useDropdown';

const MultiListDropdown = ({ item }) => {
    const { categoryData } = item;

    const { isDropdownOpen, toggleDropdown, dropdownRef } = useDropdown();

    return (
        <div className="multilist-dropdown" onClick={toggleDropdown} ref={dropdownRef}>
            <div className="navbar-title">{item.title}</div>
            <div className="navbar-dropdown"><IoChevronDownSharp /></div>
            {isDropdownOpen && (
                <div className="multilist-option">
                    {/* {categoryData.map((category, index) => (
                        <div key={index} className="multilist-category">
                            <div>{category.title}</div>
                            <ul className="multilist-sublist">
                                {category.subList.map((subItem, subIndex) => (
                                    <li key={subIndex}>
                                        <a href={subItem.link.href} style={}>
                                            {subItem.link.title}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))} */}
                    {categoryData.map((category, index) => (
                        <div key={index} className="multilist-category">
                            <div>{category.title}</div>
                            <ul className="multilist-sublist">
                                {category.subList.map((subItem, subIndex) => {
                                    const isLastItem = subIndex === category.subList.length - 1;
                                    return (
                                        <li key={subIndex}>
                                            <a href={subItem.link.href} style={{
                                                textDecoration: isLastItem ? 'underline' : 'none',
                                                fontWeight: isLastItem ? 600 : 400, 

                                            }}>
                                                {subItem.link.title}
                                            </a>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    ))}


                </div>
            )
            }
        </div >
    );
};

export default MultiListDropdown;
