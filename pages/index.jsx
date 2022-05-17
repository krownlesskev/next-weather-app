import Axios from 'axios';
import CurrentWeather from '../components/WeatherCard';
import styles from '../styles/home.module.scss';


export default function Home({ currentWeatherData, fiveDayForecastData }) {
  return (
    <div className={styles.container}>
      <p className={styles.name}>{currentWeatherData.name}</p>
      <div className={styles.weatherCards}>
        <CurrentWeather currentWeatherData={currentWeatherData} day0 />
        <CurrentWeather currentWeatherData={currentWeatherData} day1 />
        <CurrentWeather currentWeatherData={currentWeatherData} day2 />
        <CurrentWeather currentWeatherData={currentWeatherData} day3 />
        <CurrentWeather currentWeatherData={currentWeatherData} day4 />
      </div>
    </div>
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