import styles from "./styles.module.scss";

function InfoCard({content, description, src}) {
  const { containerCard, containerContent, title, desc } = styles;

  return (
  <div className={containerCard}>
    <img src={src} alt={title} width={40} height={41}/>
    <div className={containerContent}>
        <div className={title}>{content}</div>
        <div className={desc}>{description}</div>
    </div>
  </div>);
}

export default InfoCard;
