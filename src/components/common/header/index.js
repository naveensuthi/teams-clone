import React from "react";
import "./header.css";

function Header() {
  return (
    <div className="header">
      <div className="header-menu">
        <i class="fi-rr-layout-fluid"></i>
      </div>
      <div className="header-leftFold">
        <label className="header-label"> Microsoft Teams</label>
      </div>
      <div className="header-rightFold">
        <div className="header-search">
          <i class="fi-rr-search"></i>
          <input placeholder="Search" />
        </div>
        <div className="header-profile">
          <div className="header-options">
            <i class="fi-rr-menu-dots"></i>
          </div>
          <img
            src="https://img-premium.flaticon.com/png/128/2202/premium/2202112.png?token=exp=1625986582~hmac=0592b23851ccbb451db4ebffb86f0005"
            alt="avatar"
            className="header-avatar"
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
