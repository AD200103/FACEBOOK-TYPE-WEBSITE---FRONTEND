/* eslint-disable @next/next/no-img-element */
import styles from "./styles.module.css";
import facebookLogo from "../../assets/img/facebookLogo.webp";
import searchLogo from "../../assets/img/searchLogo.png";

import { useRouter } from "next/router";
import home from "../../assets/img/home.svg";
import friendsreq from "../../assets/img/friendsreq.svg";
import videos from "../../assets/img/videos.svg";
import marketplace from "../../assets/img/marketplace.svg";
import groups from "../../assets/img/groups.svg";
import homeActive from "../../assets/img/homeActive.svg";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

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
      <ul className={styles.locationList}>
        <li
          className={`${styles.bottom} ${
            router.pathname == "/" && styles.bottomBorder
          }`}
        >
          <Link href="/">
            <button>
              {router.pathname == "/" ? (
                <img src={homeActive.src} alt="home" />
              ) : (
                <img src={home.src} alt="home" />
              )}
            </button>
          </Link>
        </li>
        <li
          className={`${styles.bottom} ${
            router.pathname == "/friends" && styles.bottomBorder
          }`}
        >
          <Link href="/friends">
            <button>
              <img src={friendsreq.src} alt="friendsReq" />
            </button>
          </Link>
        </li>
        <li
          className={`${styles.bottom} ${
            router.pathname == "/videos" && styles.bottomBorder
          }`}
        >
          <Link href="/videos">
            <button>
              <img src={videos.src} alt="videos" />
            </button>
          </Link>
        </li>
        <li
          className={`${styles.bottom} ${
            router.pathname == "/marketplace" && styles.bottomBorder
          }`}
        >
          <Link href="/marketplace">
            <button>
              <img src={marketplace.src} alt="marketplace" />
            </button>
          </Link>
        </li>
        <li
          className={`${styles.bottom} ${
            router.pathname == "/groups" && styles.bottomBorder
          }`}
        >
          <Link href="/groups">
            <button>
              <img src={groups.src} alt="groups" />
            </button>
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default HEADER;
