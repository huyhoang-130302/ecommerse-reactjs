import style from "./style.module.scss";

function MyButton() {
  return (
    <div>
      <button className={style.btn}>M</button>
      <button className={style.btn2}>X</button>
    </div>
  );
}

export default MyButton;
