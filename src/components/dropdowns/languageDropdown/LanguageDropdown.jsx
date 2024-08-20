import React, { useState, useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { IoChevronDownSharp } from "react-icons/io5";
import { FaCheck } from 'react-icons/fa6';
import './LanguageDropdown.css';

const LanguageDropdown = () => {
    const { languageList } = useSelector(state => state.headerState.topBar.topBarRightData);
    const dropdownRef = useRef(null);

    // Get selected language from localStorage or default to the first language
    const storedLanguage = localStorage.getItem('selectedLanguage');
    const initialLanguage = storedLanguage || languageList[0].link.title;
    const [selectedLanguage, setSelectedLanguage] = useState(initialLanguage);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleLanguageChange = (language) => {
        setSelectedLanguage(language.title);
        localStorage.setItem('selectedLanguage', language.title); // Store the selection
        setIsDropdownOpen(false);
        window.location.href = `/${language.href}`;
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
