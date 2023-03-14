import styles from "@/scss/post-body.module.scss";

export default function PostBody({ children }) {
  return <div className={styles.stack}>{children}</div>;
}
