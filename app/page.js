import Image from "next/image";
import styles from "./page.module.css";
import { Navbar } from "./componants/Navbar";
import billie from '../public/billie2.png'

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar/>

      <section className={styles.hero}>

        <div className={styles.text}>
          <span className={styles.text1}>Hi there,</span>
          <span className={styles.text2}>myself
            <span className={styles.text2Name}>Sneha.K</span>
          </span>
          <span className={styles.text3}>I am a professional</span>
          <span className={styles.text4}>ARCHITECT</span>
        </div>

        <div className={styles.imageDiv}>
          <Image 
            src={billie}
            className={styles.mainImage} 
          />
        </div>

      </section>
    </main>
  );
}
