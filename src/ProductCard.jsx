import styles from "./InfoCard.module.css";

const ProductCard = ({ name, price }) => {
  return (
    <div className={styles.card}>
      <h2>{name}</h2>
      <p>Price : {price.toFixed(2)}</p>
    </div>
  );
};

export default ProductCard;
