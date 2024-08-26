import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { TfiMenu } from "react-icons/tfi";
import { FaCheck } from 'react-icons/fa6';
import { IoMdClose } from "react-icons/io";
import { IoChevronDownSharp } from 'react-icons/io5';
import useDropdown from '../../utils/useDropdown';
import InnerMenu from './../inner_menu/InnerMenu';
import './Sidebar.css';

const Sidebar = () => {
  const { topBar, amwayLogo, navBar } = useSelector(state => state.headerState);
  const { languageList } = useSelector(state => state.headerState.topBar.topBarRightData);

  const storedLanguage = localStorage.getItem('selectedLanguage');
  const initialLanguage = storedLanguage || languageList[0].link.title;
  const [selectedLanguage, setSelectedLanguage] = useState(initialLanguage);
  const [isSidebarOpen, toggleSidebar, sidebarRef] = useDropdown();
  const [isInnerMenuOpen, toggleInnerMenu, InnerMenuRef] = useDropdown();

  
  const [openSublists, setOpenSublists] = useState({});

  const sortedLanguages = [...languageList].sort((a, b) => {
    return a.link.title === selectedLanguage ? -1 : b.link.title === selectedLanguage ? 1 : 0;
  });

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language.title);
    localStorage.setItem('selectedLanguage', language.title);
    window.location.href = `/${language.href}`;
  };

  const handleSublistToggle = (itemTitle) => {
    setOpenSublists((prevOpenSublists) => ({
      ...prevOpenSublists,
      [itemTitle]: !prevOpenSublists[itemTitle],
    }));
  };
  
  return (
    <>
      <div className='sidebar'>
        <div className='hamburger' onClick={toggleSidebar}><TfiMenu /></div>

        {isSidebarOpen && (
          <div className='sidebar-option'>
            <div className='sidebar-topbar'>
              <div className="sidebar-close" onClick={toggleSidebar}><IoMdClose /></div>
            </div>

            <div className="sidebar-area">
              <div className="sidebar-subarea">
                {navBar.navBarData.map(item => (
                  <div key={item.title} className="sidebar-items" style={{ display: 'block' }}>

                    <div className="sidebar-link" onClick={() => handleSublistToggle(item.title)}>
                      <a className='sidebar-title' href={item.categoryData.href}>{item.title}</a>
                      {item.tag && (
                        <span className="sidebar-tag" style={{ backgroundColor: item.tagColor }}>
                          {item.tag}
                        </span>
                      )}
                      {(item.tabType === 'multiList' || item.tabType === 'singleList') && (
                        <span className={`sidebar-dropdown ${openSublists[item.title] ? 'rotate' : ''}`}>
                          <IoChevronDownSharp />
                        </span>
                      )}
                    </div>

                    {openSublists[item.title] && item.tabType === 'singleList' && (
                      <ul className="sidebar-sublist">
                        {item.categoryData[0]?.subList.map((subItem, index) => (
                          <li key={index} className="sublist-items">
                            <a href={subItem.link.href}>
                              {subItem.link.title}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                    {openSublists[item.title] && item.tabType === 'multiList' && (
                      <ul className="sidebar-sublist">
                        {item.categoryData.map((catagory, index) => (
                          <li key={index} className="sublist-items" onClick={() => handleSublistToggle(catagory.title)}>

                            {catagory.title}
                            {openSublists[catagory.title] && (<InnerMenu item={catagory} isSupportList={false} />)}
                          </li>
                        ))}
                      </ul>
                    )}

                  </div>
                ))}
              </div>

              <div className="sidebar-subarea">
                {topBar.topBarLeftData.map(item => (
                  <div className="sidebar-items-list" key={item.link.href}>
                    <a href={item.link.href} className="sidebar-list">
                      {item.link.title}
                    </a>
                  </div>
                ))}
              </div>

              <div className="sidebar-subarea">
                {sortedLanguages.map(language => (
                  <div className="sidebar-items" key={language.link.href}>
                    <li onClick={() => handleLanguageChange(language.link)}>
                      {language.link.title}
                      {selectedLanguage === language.link.title && (
                        <div className="check-mark"><FaCheck fontSize={20} /></div>
                      )}
                    </li>
                  </div>
                ))}
              </div>
              <div className="sidebar-subarea bottom-space">
                <div className="sidebar-items" onClick={() => handleSublistToggle(topBar.topBarRightData.supportTitle)}>
                  {topBar.topBarRightData.supportTitle}
                  {openSublists[topBar.topBarRightData.supportTitle] && (<InnerMenu item={topBar.topBarRightData} isSupportList={true} />)}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      {isSidebarOpen && <div className='blur-overlay' onClick={toggleSidebar}></div>}
    </>
  )
}

export default Sidebar;
