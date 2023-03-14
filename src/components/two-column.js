import styles from "@/scss/two-column.module.scss"

export default function TwoColumn({children}) {
return (

  <div className={styles.flexContainer}>
    {children}
  </div>
);
}

TwoColumn.Main = ({children})=> {
return (
<div className={styles.main}>
  {children}
  </div>

);
}

TwoColumn.Sidebar =({children})=> {
return (
<div className={styles.sidebar}>
  {children}
</div>

);
}

