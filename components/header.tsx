import Link from "next/link";

import styles from "../styles/Header.module.css";

export default function Header() {
  return (
    <header>
      <nav className={styles.nav}>
        <ul className={styles.nav__list}>
          <li className={styles["nav__list-item"]}>
            <Link href={"/"}>
              <a className={styles["nav__list-link"]}>~/</a>
            </Link>
          </li>
          <li className={styles["nav__list-item"]}>
            <Link href={"https://spence-m.github.io/"}>
              <a className={styles["nav__list-link"]}>Blog</a>
            </Link>
          </li>
          <li className={styles["nav__list-item"]}>
            <Link href={"https://github.com/spence-m/"}>
              <a className={styles["nav__list-link"]}>Github</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
