import BoxIcon from "./BoxIcon/BoxIcon";
import { dataBoxIcon, dataMenu } from "./constants";
import Menu from "./Menu/Menu";
import styles from "./style.module.scss";
import logo from "@imgs/Logo-retina.png";
import reloadIcon from "@icon/svgs/reloadIcon.svg";
import heartIcon from "@icon/svgs/heartIcon.svg";
import cartIcon from "@icon/svgs/cartIcon.svg";

function MyHeader() {
  const {
    container,
    containerBoxIcon,
    containerMenu,
    containerHeader,
    containerBox,
  } = styles;

  return (
    <div className={container}>
      <div className={containerHeader}>
        <div className={containerBox}>
          <div className={containerBoxIcon}>
            {dataBoxIcon.map((item) => {
              return <BoxIcon type={item.type} href={item.href} />;
            })}
          </div>
          <div className={containerMenu}>
            {dataMenu.slice(0, 3).map((item) => {
              return <Menu content={item.content} href={item.href} />;
            })}
          </div>
        </div>

        <div>
          <img src={logo} style={{ width: "153px", height: "53px" }} />
        </div>

        <div className={containerBox}>
          <div className={containerMenu}>
            {dataMenu.slice(3, dataMenu.length).map((item) => {
              return <Menu content={item.content} href={item.href} />;
            })}
          </div>
          <div >
            <img src={reloadIcon} style={{ width: "21px", height: "21px", paddingRight: "25px"}} />
            <img src={heartIcon} style={{ width: "21px", height: "21px", paddingRight: "25px"}} />
            <img src={cartIcon} style={{ width: "21px", height: "21px", paddingRight: "25px"}} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyHeader;
