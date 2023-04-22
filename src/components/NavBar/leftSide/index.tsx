import { useTranslation } from 'react-i18next';
import styles from "./leftSide.module.css";

export default function index() {
  const { t } = useTranslation();

  return (
    <div className={styles.logo}>
        <img
          src="/weather-icon.svg"
          alt="Picture of the author"
          width={50}
          height={50}
        />
        <h1>{t('Weather')}</h1>
      </div>
  )
}
