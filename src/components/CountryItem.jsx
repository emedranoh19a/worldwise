import styles from "./CountryItem.module.css";

// eslint-disable-next-line react/prop-types
function CountryItem({ country }) {
  return (
    // eslint-disable-next-line react/prop-types
    <li className={styles.countryItem}>
      <span>{country.emoji}</span>
      <span>{country.country}</span>
    </li>
  );
}

export default CountryItem;
