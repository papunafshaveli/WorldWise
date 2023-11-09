/* eslint-disable no-unused-vars */
import React from "react";
import styles from "../components/Sidebar.module.css";
import Logo from "../components/Logo";
import AppNav from "./AppNav";
export default function SideBar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />

      <p>list of cities</p>

      <footer className={styles.footer}></footer>
      <p className={styles.copyright}>
        &copy; Copyright {new Date().getFullYear()} by WorldWise Inc.
      </p>
    </div>
  );
}
