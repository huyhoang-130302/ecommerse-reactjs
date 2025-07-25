import styles from "./styles.module.scss";

import bagshopingIcon from "@icon/svgs/bagshopingIcon.svg";
import heartIcon from "@icon/svgs/heartIcon.svg";
import reloadIcon from "@icon/svgs/reloadIcon.svg";
import eyeIcon from "@icon/svgs/eyeIcon.svg";

function ProductItem({src, prevSrc, name, price}) {
  const { boxImg, showImgWhenHover, showFncWhenHover, boxIcon, title, priceItem } = styles;

  return (
    <div>
      <div className={boxImg}>
        <img
          src="https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-1.1-min-285x340.jpg"
          alt=""
        />
        <img
          src="https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-1.2-min-285x340.jpg"
          alt=""
          className={showImgWhenHover}
        />
        <div className={showFncWhenHover}>
          <div className={boxIcon}>
            <img src={bagshopingIcon} alt="" />
          </div>
          <div className={boxIcon}>
            <img src={heartIcon} alt="" />
          </div>
          <div className={boxIcon}>
            <img src={reloadIcon} alt="" />
          </div>
          <div className={boxIcon}>
            <img src={eyeIcon} alt="" />
          </div>
        </div>
      </div>

      <div className={title}>10K Yellow Gold</div>
      <div className={priceItem}>$99.99</div>
    </div>
  );
}

export default ProductItem;
