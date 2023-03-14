import Logo from "@/components/logo";
import Nav from "@/components/nav";
import Container from "./container";
import styles from "@/scss/header.module.scss";
export default function Header() {
  return (
    <header>
      <Container large>
        <div className={styles.flexContainer}>
          <Logo boxOn />
          <Nav />
        </div>
      </Container>
    </header>
  );
}
