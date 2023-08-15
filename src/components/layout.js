import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { mainHeader,
          headerContainer,
          navItemList,
          navItem,
          logo,
          logoText,
          logoContainer,
          navContainer,
 } from "./layout.module.css";
import "./layout.css";

const Layout = ({ pageTitle, children }) => {
  return (
    <div>
      <header className={mainHeader} >
        <div className={headerContainer}>
          <div className={logoContainer}>
            <Link to="/">
              <StaticImage 
                alt="cloudqubes logo"
                src="../images/logo_v1.png"
                className={logo}
              />
            </Link>
            <Link to="/">
              <h1 className={logoText}>cloudqubes</h1>
            </Link>
          </div>
          <nav className={navContainer}>
            <ul className={navItemList}>
              <li className={navItem}><Link to="/about">About</Link></li>
              <li className={navItem}><Link to="/blog">Blog</Link></li>
              <li className={navItem}><Link to="/contact">Contact</Link></li>
              <li className={navItem}><Link to="/newsletter">Newsletter</Link></li>
            </ul>
          </nav>
        </div>

      </header>
      <main>
        {children}
      </main>
    </div>
  )
}

export const Head = () => {
  return
}

export default Layout


