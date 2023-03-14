import styles from "@/scss/footer.module.scss";
import Social from "@/components/social";
import Container from "@/components/container";
import Logo from "@/components/logo";
export default function Footer() {
  return (
    <footer className={styles.wrapper}>
      <Container>
        <div className={styles.flexContainer}>
          <Logo />
          <Social />
        </div>
      </Container>
    </footer>
  );
}
