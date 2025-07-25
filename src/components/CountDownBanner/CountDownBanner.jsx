import CountdownTimer from "@components/CountDownTimer/CountDownTimer";
import styles from "./styles.module.scss";
import MyButton from "../Button/Button";

function CountDownBanner() {
  const { container, containerTimer, title } = styles;
  const targetDate = "2025-08-01T00:00:00";

  return (
    <div className={container}>
      <div className={containerTimer}>
        <CountdownTimer targetDate={targetDate} />
        <div className={title}>The classics make a comeback</div>
        <MyButton content={"Buy now"}/>
      </div>
    </div>
  );
}

export default CountDownBanner;
