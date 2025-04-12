/* eslint-disable @next/next/no-img-element */
import ACCOUNTLOGO from "../AccountLog/AccountLogo";
import messenger from "../../assets/img/message.svg";
import notificator from "../../assets/img/notification.svg";
import styles from "./styles.module.css";
const MESSAGESNOTACC = () => {
  return (
    <div className={styles.main}>
      <button>
        <img src={messenger.src} alt="messenger" />
      </button>
      <button>
        <img src={notificator.src} alt="notificator" />
      </button>
      <ACCOUNTLOGO />
    </div>
  );
};
export default MESSAGESNOTACC;
