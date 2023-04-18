import React from 'react'

function Header() {
  return (
    <div>
      <header className="header">
        <nav className="nav">
            <div className="logo">
                <Link to={"/"}>Kong.dev</Link>
            </div>
            <ul id="menu">
                <li>
                    <Link to={"/search"}><span>Search</span></Link>
                </li>
                <li>
                    <Link to={"/categories"}><span>Categories</span></Link>
                </li>
            </ul>
        </nav>
    </header>
    </div>
  )
}

export default Header
