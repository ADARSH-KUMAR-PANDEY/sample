import React, { useEffect, useRef } from "react";
import "./../style.css";

export default function Nav() {
  const togglerRef = useRef(null);
  const navCollapseRef = useRef(null);

  useEffect(() => {
    const toggler = togglerRef.current;
    const navCollapse = navCollapseRef.current;

    if (!toggler || !navCollapse) return;

    const handleToggle = (e) => {
      e.stopPropagation();
      navCollapse.classList.toggle("show");
    };

    const handleOutsideClick = (e) => {
      if (!toggler.contains(e.target) && !navCollapse.contains(e.target)) {
        navCollapse.classList.remove("show");
      }
    };

    toggler.addEventListener("click", handleToggle);
    document.addEventListener("click", handleOutsideClick);

    return () => {
      toggler.removeEventListener("click", handleToggle);
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <>
    <div className="container-fluid">
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" ref={togglerRef}>
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-center"
            id="cismrNavbar"
            ref={navCollapseRef}
          >
            <ul
              style={{ width: "100%" }}
              className="d-block-inline flex-wrap justify-content-center list-unstyled nav mb-0"
            >
              <li className="navitems px-3 py-2 position-relative">HOME</li>
              <li className="navitems px-3 py-2 position-relative">PROJECTS</li>
              <li className="navitems px-3 py-2 position-relative">PUBLICATIONS</li>
              <li className="navitems px-3 py-2 position-relative">
                RESEARCH
                <ul className="dropdown">
                  <li>Overview</li>
                  <li>Research Team</li>
                  <li>Careers</li>
                </ul>
              </li>
              <li className="navitems px-3 py-2 position-relative">AWARDS</li>
              <li className="navitems px-3 py-2 position-relative">
                EVENTS
                <ul className="dropdown">
                  <li>Completed</li>
                  <li>Upcoming</li>
                </ul>
              </li>
              <li className="navitems px-3 py-2 position-relative">Gallary</li>
              <li className="navitems px-3 py-2 position-relative">ABOUT US</li>
              <li className="navitems px-3 py-2 position-relative">CONTACT US</li>
            </ul>
          </div>
        </div>
      </nav>
    </div></>
  );
}
