import React, { useRef } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

const Sidebar = () => {

  const sidebarNav = [
    {
      display: "Dashboard",
      path: "/",
    },
    {
      display: "Ecommerce",
      path: "/ecommerce",
    },
    {
      display: "Products",
      path: "/ecommerce/products",
    },
    {
      display: "Order",
      path: "/ecommerce/order",
    },
    {
      display: "Customer",
      path: "/customer",
    },
    {
      display: "Invoice",
      path: "/invoice"
    }
  ];

  const { pathname } = useLocation();
  const sidebarRef = useRef(null);
  const active = sidebarNav.findIndex((e) => e.path === pathname);

  return (
    <>
      {/* Sidebar Start */}
      <aside className="sidebar" data-trigger="scrollbar">
        {/* Sidebar Profile Start */}
        <div className="sidebar--profile">
          <div className="profile--img">
            <Link to="/profile">
              <img
                src="/src/assets/img/avatars/01_80x80.png"
                alt=""
                className="rounded-circle"
              />
            </Link>
          </div>
          <div className="profile--name">
            <a href="profile.html" className="btn-link">
              Henry Foster
            </a>
          </div>
        </div>
        <div ref={sidebarRef} className="sidebar--nav">
          <ul>
            <li>
              <ul>
                {
                  sidebarNav.map((e,i) => (
                    <li key={i} className={`${i === active ? "active" : ""}`}>
                    <Link to={e.path}>{e.display}</Link>
                  </li>
                  ))
                }
              </ul>
            </li>
          </ul>
        </div>
        {/* Sidebar Navigation End */}
        {/* Sidebar Widgets End */}
      </aside>
      {/* Sidebar End */}
    </>
  );
};

export default Sidebar;
