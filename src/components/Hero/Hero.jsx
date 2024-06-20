import styles from "../Hero/Hero.module.css"
export default function Hero() {
  return (
    <section className={styles.HeroSection}>
      <ul className={styles.HeroPictures}>
        <li><p className={styles.forWomenText}>ЖІНКАМ
        </p><img className={styles.folkWearPicture} srcSet="../src/assets/Pictures/ForWomen.jpg" alt="Ukrainian woman in folk dress" /></li>
        <li><p className={styles.forMenText}>ЧОЛОВІКАМ
        </p><img className={styles.folkWearPicture} srcSet="../src/assets/Pictures/Smiley_man_holding_hanger.jpg" alt="Ukrainian man in folk dress" /></li>
      </ul>
    </section>
  )
}