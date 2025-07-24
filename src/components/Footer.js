import * as React from "react";
import { Link } from "gatsby";

import logo from "../img/logo.svg";
import facebook from "../img/social/facebook.svg";
import instagram from "../img/social/instagram.svg";
import twitter from "../img/social/twitter.svg";
import vimeo from "../img/social/vimeo.svg";

const Footer = () => {
  
    return (
      <footer className="footer has-background-black has-text-white-ter">
        <div className="content has-text-centered">
          <img
            src={logo}
            alt="Kaldi"
            style={{ width: "14em", height: "10em" }}
          />
        </div>
        <div className="content has-text-centered has-background-black has-text-white-ter">
          <div className="container has-background-black has-text-white-ter">
            <div style={{ maxWidth: "100vw" }} className="columns">
              <div className="column is-4">
                <section className="menu">
                  <ul className="menu-list">
                    <li>
                      <Link to="/" className="navbar-item">
                        首页
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/about">
                        关于我们
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/products">
                        谛听产品
                      </Link>
                    </li>
                    {/* <li>
                      <Link className="navbar-item" to="/contact/examples">
                        Form Examples
                      </Link>
                    </li> */}
                    <li>
                      <a
                        className="navbar-item"
                        href="/admin/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Admin
                      </a>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-4">
                <section>
                  <ul className="menu-list">
                    <li>
                      <Link className="navbar-item" to="/blog">
                        谛听视讯
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/contact">
                        联系我们
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>

              <div className="column is-4">
                <section>
                  <ul className="menu-list">
                      <li>
                        <a
                          className="navbar-item"
                          href="https://www.cea-igp.ac.cn/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          中国地震局地球物理研究所
                        </a>
                      </li>
                      <li>
                        <a
                          className="navbar-item"
                          href="http://124.17.4.220:24081"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          EarthStack
                        </a>
                      </li>
                      {/* <li>
                        <a
                          className="navbar-item"
                          href="http://124.17.4.220:24081"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          EarthStack
                        </a>
                      </li> */}
                  </ul>
                </section>
              </div>
              {/* <div className="column is-4 social">
                <a title="facebook" href="https://facebook.com">
                  <img
                    src={facebook}
                    alt="Facebook"
                    style={{ width: "1em", height: "1em" }}
                  />
                </a>
                <a title="twitter" href="https://twitter.com">
                  <img
                    className="fas fa-lg"
                    src={twitter}
                    alt="Twitter"
                    style={{ width: "1em", height: "1em" }}
                  />
                </a>
                <a title="instagram" href="https://instagram.com">
                  <img
                    src={instagram}
                    alt="Instagram"
                    style={{ width: "1em", height: "1em" }}
                  />
                </a>
                <a title="vimeo" href="https://vimeo.com">
                  <img
                    src={vimeo}
                    alt="Vimeo"
                    style={{ width: "1em", height: "1em" }}
                  />
                </a>
              </div> */}
            </div>
          </div>
        </div>
      </footer>
    );
};

export default Footer;
