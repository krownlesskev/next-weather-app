import Axios from 'axios';
import CurrentWeather from '../components/CurrentWeather';
import styles from '../styles/home.module.scss';

export default function Home({ currentWeatherData }) {
  return (
    <div className={styles.container}>
      <CurrentWeather currentWeatherData={currentWeatherData} />
    </div>
  );
}

export const getStaticProps = async () => {
  const currentWeatherData = await Axios.get('https://api.openweathermap.org/data/2.5/weather?q=winnipeg&appid=3f6820661329be846a6d89b4fa860d8f&units=metric');

  return {
    props: {
      currentWeatherData: currentWeatherData.data
    },
  };
};