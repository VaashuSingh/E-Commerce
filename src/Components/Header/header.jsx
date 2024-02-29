import React from "react";
import "./header.css";
import logo from "../../assets/logo/logo.svg";
import SearchIcon from "@mui/icons-material/Search";
import Select from "../select/select";

const Header = () => {
  return (
    <header className="header">
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-2">
            <img src={logo} alt="Logo" />
          </div>
          <div className="col-sm-5">
            <div className="header_search d-flex align-items-center">
              <div className="select_drop_down drop_down_cursor">
                All Category
                <Select />
              </div>
              <div className="search">
                <input type="text" placeholder="Search for items..." />
                <SearchIcon className="search_icon drop_down_cursor" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
