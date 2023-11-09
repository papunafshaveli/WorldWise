/* eslint-disable no-unused-vars */
import React from "react";
import styles from "../components/Sidebar.module.css";
import Logo from "../components/Logo";
import AppNav from "./AppNav";
import { Outlet } from "react-router-dom";
export default function SideBar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />

      <Outlet />

      <footer className={styles.footer}></footer>
      <p className={styles.copyright}>
        &copy; Copyright {new Date().getFullYear()} by WorldWise Inc.
      </p>
    </div>
  );
}
