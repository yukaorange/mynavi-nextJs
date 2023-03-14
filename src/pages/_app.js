import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import Layout from "@/components/layout";
import styles from "@/scss/style.scss";

config.autoAddCss = false;

function MyApp({ Component, pageProps }) {
  const getLayout =
    Component.getLayout ||
    ((page) => {
      console.log(page)
      return page;
    });
  return <Layout>{getLayout(<Component {...pageProps} />)}</Layout>;
}

export default MyApp;
