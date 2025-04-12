/* eslint-disable @next/next/no-img-element */
import styles from "./styles.module.css";
import facebookLogo from "../../assets/img/facebookLogo.webp";
import searchLogo from "../../assets/img/searchLogo.png";
import PAGELIST from "../PageList/PageList";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";

const HEADER = () => {
  const router = useRouter();
  const [searchShifted, setSearchShifted] = useState(false);
  //=================================================================
  const searchInpRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (
        searchInpRef.current &&
        !searchInpRef.current.contains(e.target as Node)
      ) {
        setSearchShifted(false);
      } else {
        setSearchShifted(true);
      }
    };
    document.addEventListener("mousedown", handler);
    console.log(router.pathname);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);
  //==================================================================

  return (
    <div className={styles.main}>
      <div className={styles.logoAndSearch}>
        <img src={facebookLogo.src} alt="facebookLogo" />
        <div className={styles.search} ref={searchInpRef}>
          <div
            className={`${styles.searchBox} ${
              searchShifted ? styles.searchBoxShifted : ""
            }`}
          >
            <img
              className={`${styles.searchImage} ${
                searchShifted ? styles.searchImageFaded : ""
              }`}
              src={searchLogo.src}
              alt="searchLogo"
            />
            <input type="text" placeholder="Search for friends" />
          </div>
        </div>
      </div>
      <PAGELIST />
    </div>
  );
};
export default HEADER;
