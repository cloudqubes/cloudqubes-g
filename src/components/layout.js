import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { mainHeader, row, newsletterContainer,
          innerContainer,
          navItemList,
          navItem,
          logo,
          logoText,
          logoContainer,
          navContainer,
          footer,
          footerCard, footerLogoContainer, footerLogo, footerLogoText, footerAbout,
          socialMediaLogo, socialMediaIcons, socialMediaLink
 } from "./layout.module.css";
import "./layout.css";

const Layout = ({ pageTitle, children, showNewsletter }) => {
  let newsletter;
  if (showNewsletter) {
    newsletter = <iframe src="https://cloudqubes.substack.com/embed" width="480" height="320" frameborder="0"></iframe>         
  } else{
    newsletter = <div></div>
  }

  return (
    <div>
      <header className={mainHeader} >
        <div className={row}>
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
                <li className={navItem}><Link to="https://cloudqubes.substack.com/">Newsletter</Link></li>
              </ul>
            </nav>
          </div>

        </div>
      </header>
      <main>
        {children}
        <div className={row}>
          <div className={newsletterContainer}>
            { newsletter }
          </div>
        </div>
      </main>
      <footer className={footer}>
        <div className={innerContainer}>
          <div className={footerCard}>
            <div className={footerLogoContainer}>
              <Link to="/" >
                <StaticImage 
                  alt="cloudqubes logo"
                  src="../images/logo_v1.png"
                  className={footerLogo}
                />
              </Link>
              <Link to="/">
                <h1 className={footerLogoText}>cloudqubes</h1>
              </Link>
            </div>
            <div>
              <Link to="/about" className={footerAbout}>
                About
              </Link>
            </div>
          </div>
          <div className={footerCard}>
            <div className={socialMediaIcons}>
              <Link to="https://github.com/cloudqubes" className={socialMediaLink}>
                <StaticImage 
                  alt="cloudqubes logo"
                  src="../images/github-mark.png"
                  className={socialMediaLogo}
                />
              </Link>

              <Link to="https://twitter.com/cloudqubes" className={socialMediaLink}>
                <StaticImage 
                  alt="cloudqubes logo"
                  src="../images/logo-black.png"
                  className={socialMediaLogo}
                />
              </Link>
            </div>
          </div>
        </div>

      </footer>
    </div>
  )
}

export const Head = () => {
  return
}

export default Layout


