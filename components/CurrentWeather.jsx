import styles from '../styles/weather.module.scss';

const CurrentWeather = ({ currentWeatherData }) => {
    console.log(currentWeatherData);
    return (
        <div className={styles.weatherCard}>
            <p className={styles.cityName}>{currentWeatherData.name}</p>
                <img src={`http://openweathermap.org/img/wn/${currentWeatherData.weather[0].icon}@2x.png`} alt="Weather Icon" />
                <p className={styles.tempCurrent}>{currentWeatherData.main.feels_like}&#730;</p>
                <div className={styles.tempMinMax}>
                    <p className={styles.tempMin}>{currentWeatherData.main.temp_min}&#730;</p>
                    <p className={styles.tempMax}>{currentWeatherData.main.temp_max}&#730;</p>
                </div>
        </div>
    );
};

export default CurrentWeather;