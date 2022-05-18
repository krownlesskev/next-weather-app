import Axios from 'axios';
import WeatherCard from '../components/WeatherCard';
import styles from '../styles/home.module.scss';
import Head from 'next/head';

export default function Home({ currentWeatherData, fiveDayForecastData }) {
  return (
    <>
      <Head>
        <title>NextJS Weather App</title>
      </Head>
      <div className={styles.container}>
        <p className={styles.name}>{currentWeatherData.name}</p>
        <div className={styles.weatherCards}>
          <WeatherCard currentWeatherData={currentWeatherData} day0 />
          <WeatherCard fiveDayForecastData={fiveDayForecastData} day1 />
          <WeatherCard fiveDayForecastData={fiveDayForecastData} day2 />
          <WeatherCard fiveDayForecastData={fiveDayForecastData} day3 />
          <WeatherCard fiveDayForecastData={fiveDayForecastData} day4 />
        </div>
      </div>
    </>
  );
}

export const getStaticProps = async () => {
  const currentWeatherData = await Axios.get('https://api.openweathermap.org/data/2.5/weather?q=winnipeg&appid=3f6820661329be846a6d89b4fa860d8f&units=metric');
  const fiveDayForecastData = await Axios.get('https://api.openweathermap.org/data/2.5/forecast?q=winnipeg&appid=3f6820661329be846a6d89b4fa860d8f&units=metric');

  return {
    props: {
      currentWeatherData: currentWeatherData.data,
      fiveDayForecastData: fiveDayForecastData.data
    },
  };
};