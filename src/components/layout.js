import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { mainHeader,
          innerContainer,
          navItemList,
          navItem,
          logo,
          logoText,
          logoContainer,
          navContainer,
          footer,
          footerCard, footerLogoContainer,
 } from "./layout.module.css";
import "./layout.css";

const Layout = ({ pageTitle, children }) => {
  return (
    <div>
      <header className={mainHeader} >
        <div className={innerContainer}>
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
      <footer className={footer}>
        <div className={innerContainer}>

        </div>
        <div className={footerCard}>
          <div className={footerLogoContainer}>
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
          <div>
            <Link>
              About
            </Link>
          </div>
        </div>
        <div className={footerCard}>
          dd
          {/* <iframe src="https://cloudqubes.substack.com/embed" width="480" height="320" style={{border:`1px solid #EEE`, background:`#C5CAE9`}} frameborder="0"></iframe> */}
        </div>
        <div className={footerCard}>
          cloudqubes
        </div>
      </footer>
    </div>
  )
}

export const Head = () => {
  return
}

export default Layout


