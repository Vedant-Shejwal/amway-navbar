import React, { useState, useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { IoChevronDownSharp } from "react-icons/io5";
import './SupportDropdown.css'

const SupportDropdown = () => {
    const { supportList , supportTitle } = useSelector(state => state.headerState.topBar.topBarRightData);
    const dropdownRef = useRef(null);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleSupportChange = (support) => {
        setIsDropdownOpen(false);
        window.location.href = support.href;
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(prevState => !prevState);
    };

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsDropdownOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div className="support-dropdown" ref={dropdownRef}>
            <div className="topbar-item" onClick={toggleDropdown}>
                <div className="topbar-desc">{supportTitle}</div>
                <div className="topbar-dropdown"><IoChevronDownSharp /></div>
            </div>
            {isDropdownOpen && (
                <ul className="support-options">
                    {supportList.map(support => (
                        <li
                            key={support.link.href}
                            onClick={() => handleSupportChange(support.link)}
                        >
                            {support.link.title}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default SupportDropdown;
