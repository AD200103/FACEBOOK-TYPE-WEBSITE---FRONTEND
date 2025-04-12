/* eslint-disable @next/next/no-img-element */
import styles from "./styles.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

import home from "../../assets/img/home.svg";
import friendsreq from "../../assets/img/friendsreq.svg";
import videos from "../../assets/img/videos.svg";
import groups from "../../assets/img/groups.svg";

import homeActive from "../../assets/img/homeActive.svg";
import groupsActive from "../../assets/img/groupsActive.svg";
import videosActive from "../../assets/img/videosActive.svg";
import friendsActive from "../../assets/img/friendsreqActive.svg";
const PAGELIST = () => {
  const pageParams = [
    {
      link: "/",
      imgSource: home.src,
      imgSourceActive: homeActive.src,
      alt: "home",
    },
    {
      link: "/friends",
      imgSource: friendsreq.src,
      imgSourceActive: friendsActive.src,
      alt: "friends",
    },
    {
      link: "/videos",
      imgSource: videos.src,
      imgSourceActive: videosActive.src,
      alt: "videos",
    },
    {
      link: "/groups",
      imgSource: groups.src,
      imgSourceActive: groupsActive.src,
      alt: "groups",
    },
  ];

  const router = useRouter();
  return (
    <ul className={styles.locationList}>
      {pageParams.map((p) => (
        <li
          key={p.alt}
          className={`${router.pathname == p.link && styles.bottomBorder}`}
        >
          <Link href={p.link}>
            <button>
              {router.pathname == p.link ? (
                <img src={p.imgSourceActive} alt={p.alt} />
              ) : (
                <img src={p.imgSource} alt={p.alt} />
              )}
            </button>
          </Link>
        </li>
      ))}
    </ul>
  );
};
export default PAGELIST;
