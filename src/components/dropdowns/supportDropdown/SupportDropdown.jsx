import React from 'react';
import { useSelector } from 'react-redux';
import { IoChevronDownSharp } from "react-icons/io5";
import useDropdown from '../../../utils/useDropdown';
import './SupportDropdown.css';

const SupportDropdown = () => {
    const { supportList, supportTitle } = useSelector(state => state.headerState.topBar.topBarRightData);
    const [ isDropdownOpen, toggleDropdown, dropdownRef, setIsDropdownOpen ] = useDropdown();

    const handleSupportChange = (support) => {
        setIsDropdownOpen(false);
        window.location.href = support.href;
    };

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
