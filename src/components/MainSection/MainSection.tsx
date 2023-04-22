import { useGetWeatherQuery } from "@/redux/services/weather/weather";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { useTranslation } from "react-i18next";
import Skeleton from "../Skeleton/Skeleton";
import styles from "./Main.module.css";

export default function MainSection() {
  const cityName = useSelector((state: RootState) => state.input.value);
  const lang = useSelector((state: RootState) => state.langs.langs);
  const { data, error, isLoading } = useGetWeatherQuery({cityName, lang});
  const { t } = useTranslation();

  return (
    <div className={styles.main}>
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <Skeleton />
      ) : data ? (
        <>
          <h2>
            {data?.city.name}, {data?.city.country}, {data?.list[1].dt_txt}
          </h2>
          <div className={styles.weatherData}>
            <h3>{Math.round(data?.list[1].main.temp)}°</h3>
            <p>{t(`${data?.list[1].weather[0].main}`)} / {data?.list[1].weather[0].description}</p>
            <p>{t('Wind')} - {data?.list[1].wind.speed} m/s</p>
            <p>{t('Humidity')} - {data?.list[1].main.humidity}%</p>
          </div>
          <img
            src={`/weatherIcons/${data?.list[1].weather[0].icon}.svg`}
            alt="weather icon"
          />
        </>
      ) : null}
    </div>
  );
}
