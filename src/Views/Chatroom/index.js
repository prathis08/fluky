import ChatBox from "../../Components/ChatBox";
import IncomingVideo from "../../Components/IncomingVideo";
import LocalVideo from "../../Components/LocalVideo";
import styles from "./style.module.scss";

export default function Chatroom() {
  return (
    <div className={`${styles.flex}`}>
      <div className={`${styles.header} ${styles.flexRow}`}>
        <img src="/assets/logo.png" width="7%" />
        Flucky
      </div>
      <div className={`${styles.mainContainer} ${styles.flexRow}`}>
        <LocalVideo />
        <IncomingVideo />
        <ChatBox />
      </div>
    </div>
  );
}
