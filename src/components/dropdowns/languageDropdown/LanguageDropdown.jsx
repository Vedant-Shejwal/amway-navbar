import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { IoChevronDownSharp } from "react-icons/io5";
import { FaCheck } from 'react-icons/fa6';
import useDropdown from '../../../utils/useDropdown';
import './LanguageDropdown.css';

const LanguageDropdown = () => {
    const { languageList } = useSelector(state => state.headerState.topBar.topBarRightData);

    const [ isDropdownOpen, toggleDropdown, dropdownRef, setIsDropdownOpen ] = useDropdown(); 
    const storedLanguage = localStorage.getItem('selectedLanguage');
    const initialLanguage = storedLanguage || languageList[0].link.title;
    const [selectedLanguage, setSelectedLanguage] = useState(initialLanguage);

    const handleLanguageChange = (language) => {
        setSelectedLanguage(language.title);
        localStorage.setItem('selectedLanguage', language.title);
        setIsDropdownOpen(false); // Close the dropdown after selection
        window.location.href = `/${language.href}`;
    };

    const sortedLanguages = [...languageList].sort((a, b) => {
        return a.link.title === selectedLanguage ? -1 : b.link.title === selectedLanguage ? 1 : 0;
    });

    return (
        <div className="language-dropdown" ref={dropdownRef}>
            <div className="topbar-item" onClick={toggleDropdown}>
                <div className="topbar-desc">{selectedLanguage}</div>
                <div className="topbar-dropdown"><IoChevronDownSharp /></div>
            </div>
            {isDropdownOpen && (
                <ul className="language-options">
                    {sortedLanguages.map(language => (
                        <li
                            key={language.link.href}
                            onClick={() => handleLanguageChange(language.link)}
                        >
                            {language.link.title}
                            {selectedLanguage === language.link.title && (
                                <div className="tick-mark"><FaCheck /></div>
                            )}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default LanguageDropdown;
