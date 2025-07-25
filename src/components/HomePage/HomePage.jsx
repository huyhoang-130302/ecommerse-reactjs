import MyHeader from "@components/Header/Header";
import Banner from "@components/Banner/Banner";
import Info from "@components/Info/Info";
import AdvanceHeading from "../AdvanceHeading/AdvanceHeading";

import styles from './styles.module.scss'
import HeadingListProducts from "../HeadingListProduct/HeadingListProducts";

function HomePage() {
  const {container} = styles

  return (
    <div>
      <div className={container}>
        <MyHeader />
        <Banner />
        <Info />
        <AdvanceHeading />
        <HeadingListProducts />
        <div style={{height: "500px"}}></div>
      </div>
    </div>
  );
}

export default HomePage;
