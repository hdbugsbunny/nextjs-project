import styles from "./layout.module.css";
import MainNavigation from "./mainNavigation";

export default function Layout({ children }) {
  return (
    <div>
      <MainNavigation />
      <main className={styles.main}>{children}</main>
    </div>
  );
}
