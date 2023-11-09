/* eslint-disable no-unused-vars */
import React from "react";
import styles from "./AppLayout.module.css";
import SideBar from "../components/SideBar";
import Map from "../components/Map";
export default function AppLayout() {
  return (
    <div className={styles.app}>
      <SideBar />
      <Map />
    </div>
  );
}
