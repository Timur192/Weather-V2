import { useGetWeatherQuery } from "@/redux/services/weather/weather";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { useTranslation } from "react-i18next";
import Skeleton from "../Skeleton/Skeleton";
import styles from "./Forecast.module.css";

export default function ForecastSection() {
  const cityName = useSelector((state: RootState) => state.input.value);
  const lang = useSelector((state: RootState) => state.langs.langs);
  const { data, error, isLoading } = useGetWeatherQuery({cityName, lang});
  const { t } = useTranslation();
  
  const getDate = (
    dt_txt: string
  ): { dayOfWeek: string; dayOfHours: string } => {
    const dt = new Date(dt_txt);
    const daysOfWeek = [
      `${t('Sunday')}`,
      `${t("Monday")}`,
      `${t("Tuesday")}`,
      `${t("Wednesday")}`,
      `${t("Thursday")}`,
      `${t("Friday")}`,
      `${t("Saturday")}`,
    ];
    const dayOfWeek = daysOfWeek[dt.getDay()];
    const dayOfHours = `${dt.getHours()}:00`;
    return { dayOfWeek, dayOfHours };
  };

  return (
    <div className={styles.main}>
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <Skeleton />
      ) : data ? (
        <>
          {data?.list.map((item) => (
            <div key={item.dt} className={styles.container}>
              {
                <img
                  src={`/weatherIcons/${item.weather[0].icon}.svg`}
                  alt={data.list[0].weather[0].description}
                />
              }
              {getDate(item.dt_txt).dayOfWeek}
              <p>{getDate(item.dt_txt).dayOfHours}</p>
              <p>{t(`${item.weather[0].main}`)}</p>
              <div>{Math.round(item.main.temp)}°</div>
            </div>
          ))}
        </>
      ) : null}
    </div>
  );
}
