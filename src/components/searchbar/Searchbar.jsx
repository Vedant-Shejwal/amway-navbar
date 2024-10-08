import React, { useState } from 'react';
import { FaMagnifyingGlass } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import useDropdown from '../../utils/useDropdown'; // Import your custom hook
import './Searchbar.css';

const Searchbar = () => {
    const [searchText, setSearchText] = useState('');
    const [isFocused, toggleDropdown, dropdownRef, setIsDropdownOpen] = useDropdown();
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        setSearchText(e.target.value);
    };

    const handleClearSearch = () => {
        setSearchText('');
        setIsDropdownOpen(false);
    };

    const handleSearch = (e) => {
        if (e.key === 'Enter') {
            navigate(`/search?query=${searchText}`)
            setIsDropdownOpen(false); 
        }
    };

    return (
        <div className="navbar-search" ref={dropdownRef}>
            <input
                type="text"
                placeholder="Search"
                className="search-input"
                value={searchText}
                onChange={handleInputChange}
                onKeyDown={handleSearch}
                onFocus={toggleDropdown}
            />
            {isFocused || searchText ? (
                <IoMdClose className="search-icon" onClick={handleClearSearch} />
            ) : (
                <FaMagnifyingGlass className="search-icon" />
            )}
        </div>
    );
};

export default Searchbar;
