import MainLayout from "@components/Layout/Layout";

import styles from "./styles.module.scss";
import CountdownTimer from "../CountDownTimer/CountDownTimer";
import CountDownBanner from "../CountDownBanner/CountDownBanner";
import ProductItem from "../ProductItem/ProductItem";

function HeadingListProducts() {
  const { container, containerItem } = styles;

  return (
    <MainLayout>
      <div className={container}>
        <CountDownBanner />
        <div className={containerItem}>
          <ProductItem />
          <ProductItem />
        </div>
      </div>
    </MainLayout>
  );
}

export default HeadingListProducts;
