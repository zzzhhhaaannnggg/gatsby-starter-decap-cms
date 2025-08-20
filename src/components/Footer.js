import * as React from "react";
import { Link } from "gatsby";

import logo from "../img/logo.svg";
import beianLogo from "../img/back.png"
import facebook from "../img/social/facebook.svg";
import instagram from "../img/social/instagram.svg";
import twitter from "../img/social/twitter.svg";
import vimeo from "../img/social/vimeo.svg";

const Footer = () => {
  
    return (
      <footer className="footer has-background-black has-text-white-ter">
        {/* <div className="content has-text-centered">
          <img
            src={logo}
            alt="Kaldi"
            style={{ width: "14em", height: "10em" }}
          />
        </div> */}
        {/* <div style={{ display: 'flex', justifyContent: 'center', marginTop: '0.25rem' }}>
          <a
            href="https://beian.mps.gov.cn/#/query/websearch?code=11010802046169"
            target="_blank"
            rel="noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              textDecoration: 'none',
              color: 'inherit',
              fontSize: '0.9rem'
            }}
          >
            <img
              src={beianLogo}
              alt="备案"
              style={{ width: '20px', height: '20px', marginRight: '8px', objectFit: 'contain' }}
            />
            <span>京公网安备11010802046169号</span>
          </a>
        </div> */}
        
        {/* 第二版 */}
        <div
          className="logo-wrapper"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            paddingBottom: "1.2rem", // 若仍被裁切可增大
            overflow: "visible"
          }}
        >
          <div className="content has-text-centered" style={{ overflow: "visible" }}>
            <img
              src={logo}
              alt="Kaldi"
              style={{ width: "14em", height: "10em", objectFit: "contain" }}
            />
          </div>

          {/* 居中外层（保证 inline-block 容器水平居中） */}
          <div style={{ display: "flex", justifyContent: "center", width: "100%", marginTop: "0.2rem" }}>
            {/* inline-block 容器：宽度由内部最宽的一行决定（通常是上面带图标的一行） */}
            <div
              className="beian-inline-wrapper"
              style={{
                display: "inline-block",
                textAlign: "left",     // 内部左对齐 -> 两行的首字（“京”）会对齐
                lineHeight: 1,
                whiteSpace: "nowrap"   // 防止单行自动换行（按需删除）
              }}
            >
              {/* 上行：ICP + 图标（图标放在文本后面） */}
              <div style={{ fontSize: "0.95rem", display: "block", alignItems: "center" }}>
                <span>京ICP备2025136048号-1</span>
                <img
                  src={beianLogo}
                  alt="备案"
                  style={{
                    width: "20px",
                    height: "20px",
                    marginLeft: "8px",
                    verticalAlign: "middle",
                    objectFit: "contain"
                  }}
                />
              </div>

              {/* 下行：只有文本（去掉图标），并且首字与上行首字对齐 */}
              <div style={{ marginTop: "0.15rem", fontSize: "0.95rem" }}>
                <a
                  href="https://beian.mps.gov.cn/#/query/websearch?code=11010802046169"
                  target="_blank"
                  rel="noreferrer"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  京公网安备11010802046169号
                </a>
              </div>
            </div>
          </div>
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
