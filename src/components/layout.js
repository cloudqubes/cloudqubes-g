import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

const Layout = ({ pageTitle, children }) => {
  return (
    <body>
      <header >
        <div>
          <Link to="/">
            <StaticImage 
              alt="cloudqubes logo"
              src="../images/logo_v1.png"
            />
          </Link>
          <Link to="/">
            <h1>cloudqubes</h1>
          </Link>
        </div>
        <nav>
          <ul>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/newsletter">Newsletter</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </header>
      <main>
        {children}
      </main>
    </body>
  )
}

export default Layout


