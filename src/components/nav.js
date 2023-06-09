import Link from "next/link";
import styles from "@/scss/nav.module.scss";
import { useState } from "react";

export default function Nav() {
  const [navIsOpen, setNavIsOpen] = useState(false);
  const toggleNav = () => {
    setNavIsOpen((prev) => {
      return !prev;
    });
  };
  const closeNav = () => {
    setNavIsOpen(false);
  };
  return (
    <nav className={navIsOpen ? styles.open : styles.close}>
      {navIsOpen && (
        <style jsx global>{`
          @media (max-width: 767px) {
            body {
              overflow: hidden;
              position: fixed;
              width: 100%;
            }
          }
        `}</style>
      )}
      <button className={styles.button} onClick={toggleNav}>
        <span className={styles.bar}></span>
        <span className="sr-only">MENU</span>
      </button>
      <ul className={styles.list}>
        <li>
          <Link href="/" onClick={closeNav}>
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" onClick={closeNav}>
            About
          </Link>
        </li>
        <li>
          <Link href="/blog" onClick={closeNav}>
            Blog
          </Link>
        </li>
      </ul>
    </nav>
  );
}
