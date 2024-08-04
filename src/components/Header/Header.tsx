"use client";
import Link from "next/link";
import { BiLogoBootstrap } from "react-icons/bi";
import style from "./header.module.css";
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <header className={style.header}>
      <nav className={style.nav}>
        <div className={style.logoWrapper}>
          <Link className={style.logo} href="/">
            <BiLogoBootstrap />
            Demo Project
          </Link>
          <div className={style.menu}>
            {toggle ? (
              <IoMdClose onClick={() => setToggle((prev) => !prev)} />
            ) : (
              <AiOutlineMenu onClick={() => setToggle((prev) => !prev)} />
            )}
          </div>
        </div>
        <div className={`${style.linksWrapper} ${toggle ? style.open : ""}`}>
          <ul className={style.navLinks}>
            <li>
              <Link
                onClick={() => setToggle(false)}
                className={style.navLink}
                href="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setToggle(false)}
                className={style.navLink}
                href="/customer-service/about"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setToggle(false)}
                className={style.navLink}
                href="/articles"
              >
                Articles
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className={style.right}>
        <Link
          onClick={() => setToggle(false)}
          className={style.btn}
          href="/loyalty/login"
        >
          Log in
        </Link>
        <Link
          onClick={() => setToggle(false)}
          className={style.btn}
          href="/loyalty/enrollment"
        >
          Join
        </Link>
      </div>
    </header>
  );
};

export default Header;
