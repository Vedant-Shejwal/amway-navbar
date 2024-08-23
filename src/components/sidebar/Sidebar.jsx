import React from 'react'
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { TfiMenu } from "react-icons/tfi";
import useDropdown from '../../utils/useDropdown';
import { IoMdClose } from "react-icons/io";
import { IoChevronDownSharp } from 'react-icons/io5';
import { FaCheck } from 'react-icons/fa6';

import './Sidebar.css'


const Sidebar = () => {
  const { topBar, amwayLogo, navBar } = useSelector(state => state.headerState);
  const { languageList } = useSelector(state => state.headerState.topBar.topBarRightData);

  const storedLanguage = localStorage.getItem('selectedLanguage');
  const initialLanguage = storedLanguage || languageList[0].link.title;
  const [selectedLanguage, setSelectedLanguage] = useState(initialLanguage);
  const { isDropdownOpen, toggleDropdown, dropdownRef } = useDropdown();
  const sortedLanguages = [...languageList].sort((a, b) => {
    return a.link.title === selectedLanguage ? -1 : b.link.title === selectedLanguage ? 1 : 0;
  });

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language.title);
    localStorage.setItem('selectedLanguage', language.title); // Store the selection
    window.location.href = `/${language.href}`;
  };
  return (
    <>
      <div className='sidebar' >
        <div className='hamburger' onClick={toggleDropdown} ><TfiMenu /></div>

        {isDropdownOpen && (
          <div className='sidebar-option'>
            <div className='sidebar-topbar'>
              <div className="sidebar-close" onClick={toggleDropdown} ><IoMdClose /></div>
            </div>

            <div className="sidebar-area">
              <div className="sidebar-subarea">
                {navBar.navBarData.map(item => (
                  <div key={item.title} className="sidebar-items">
                    <a className='sidebar-title' href={item.categoryData.href}>{item.title}</a>
                    {item.tag && (
                      <span className="sidebar-tag" style={{ backgroundColor: item.tagColor }} href={item.categoryData.href}>
                        {item.tag}
                      </span>
                    )}
                    {(item.tabType === 'multiList' || item.tabType === 'singleList') && (
                      <div className="sidebar-dropdown"><IoChevronDownSharp /></div>)}
                  </div>
                ))}
              </div>

              <div className="sidebar-subarea">
                {topBar.topBarLeftData.map(item => (
                  <div className="sidebar-items-list">
                    <a href={item.link.href} className="sidebar-list">
                      {item.link.title}
                    </a>
                  </div>
                ))}
              </div>

              <div className="sidebar-subarea">
                  {sortedLanguages.map(language => (
                <div className="sidebar-items">
                    <li
                      key={language.link.href}
                      onClick={() => handleLanguageChange(language.link)}
                    >
                      {language.link.title}
                      {selectedLanguage === language.link.title && (
                        <div className="check-mark"><FaCheck fontSize={20}/></div>
                      )}
                    </li>
                    
                </div>
                  ))}
              </div>
              <div className="sidebar-subarea bottom-space">
              <div className="sidebar-items">{topBar.topBarRightData.supportTitle}

              </div>
              </div>
            </div>
          </div>
        )}
      </div>
      {isDropdownOpen && <div className='blur-overlay' onClick={toggleDropdown} ></div>}
    </>
  )
}

export default Sidebar
