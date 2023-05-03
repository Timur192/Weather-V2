import { useTranslation } from 'react-i18next';
import styles from "./leftSide.module.css";

export default function index() {
  const { t } = useTranslation();

  return (
    <div className={styles.logo}>
        <img
          src="/weather-icon.png"
          alt="Weather Icon"
          width={40}
          height={40}
        />
        <h1>{t('Weather')}</h1>
      </div>
  )
}
