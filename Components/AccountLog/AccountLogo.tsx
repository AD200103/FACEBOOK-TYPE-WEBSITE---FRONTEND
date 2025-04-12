/* eslint-disable @next/next/no-img-element */
import styles from "./styles.module.css";
import accArrow from "../../assets/img/littleArrowAccount.svg";
import { useState } from "react";

const ACCOUNTLOGO = () => {
  const [onLogo, setOnLogo] = useState(false);
  const consfunc = () => {
    setOnLogo(true);
  };
  const consfunc2 = () => {
    setOnLogo(false);
  };
  return (
    <div
      onMouseEnter={consfunc}
      onMouseLeave={consfunc2}
      className={styles.main}
    >
      <img
        className={`${styles.accountLogo} ${
          onLogo ? styles.accountLogoActivated : ""
        }`}
        src="https://scontent.fkun1-2.fna.fbcdn.net/v/t1.30497-1/453178253_471506465671661_2781666950760530985_n.png?stp=cp0_dst-png_s40x40&_nc_cat=1&ccb=1-7&_nc_sid=136b72&_nc_ohc=rYsotGnx_-kQ7kNvwFxEPI8&_nc_oc=AdnNcXRGHRQzH_1pjuz4IRoLZ34_IPKrJF1AZ2sv2ejR7zPHUU-tRjoAYxaUIp5Gv7s&_nc_zt=24&_nc_ht=scontent.fkun1-2.fna&oh=00_AfHxAzvQ_m_TeWN80fANnP3VCVYaltWcu5aeVd7fTRanAw&oe=6821B73A"
        alt="image"
      />
      <div
        className={`${styles.accountArrContainer} ${
          onLogo ? styles.accountArrowDeactivated : ""
        }`}
      >
        <img
          className={styles.accountArrow}
          src={accArrow.src}
          alt="AccountArrow"
        />
      </div>
    </div>
  );
};
export default ACCOUNTLOGO;
