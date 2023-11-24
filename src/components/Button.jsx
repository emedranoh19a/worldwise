import styles from "./Button.module.css";
// eslint-disable-next-line no-unused-vars
export default function Button({ children, onClick, type }) {
  return (
    <button onClick={onClick} className={`${styles.btn} ${styles[type]}`}>
      {children}
    </button>
  );
}
