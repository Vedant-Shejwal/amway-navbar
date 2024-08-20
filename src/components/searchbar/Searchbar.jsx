import { FaMagnifyingGlass } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import './Searchbar.css'

const Searchbar = () => {
    return (
        <div className="navbar-search">
            <input
                type="text"
                placeholder="Search"
                className="search-input"
            />
            <FaMagnifyingGlass className="search-icon" />
        </div>
    );
};

export default Searchbar;
