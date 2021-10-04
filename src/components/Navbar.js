import React, { useState } from "react"
import { Link } from "gatsby"
import { FiAlignJustify } from "react-icons/fi"
import logo from "../assets/images/logo.svg"

const Navbar = () => {
  const [show, setShow] = useState(false)

  const links = [
    { name: "home", url: "/" },
    { name: "tags", url: "/tags" },
    { name: "recipes", url: "/recipes" },
    { name: "about", url: "/about" },
  ]

  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img src={logo} alt="simply recipes" />
          </Link>
          <button className="nav-btn" onClick={() => setShow(!show)}>
            <FiAlignJustify />
          </button>
        </div>
        <div className={show ? "nav-links show-links" : "nav-links"}>
          {links.map((link, index) => (
            <Link
              key={index}
              to={link.url}
              className="nav-link"
              activeClassName="active-link"
              onClick={() => setShow(false)}
            >
              {link.name}
            </Link>
          ))}

          <div className="nav-link contact-link">
            <Link to="/contact" className="btn" onClick={() => setShow(false)}>
              contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
