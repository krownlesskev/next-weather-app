import styles from '../styles/weather.module.scss';
import { useState, useEffect } from 'react';

const currentDayOfTheWeek = (day) => {
    const currentDate = new Date();
    let currentDayOfTheWeekNumber = currentDate.getDay();

    switch (day) {
        case 1:
            currentDayOfTheWeekNumber++;
            break;
        case 2:
            for (let i = 0; i < day; i++) {
                currentDayOfTheWeekNumber++;
            }
            break;
        case 3:
            for (let i = 0; i < day; i++) {
                currentDayOfTheWeekNumber++;
            }
            break;
        case 4:
            for (let i = 0; i < day; i++) {
                currentDayOfTheWeekNumber++;
            }
            break;
    }

    if (currentDayOfTheWeekNumber === 7) {
        currentDayOfTheWeekNumber = 0;
    } else if (currentDayOfTheWeekNumber === 8) {
        currentDayOfTheWeekNumber = 1;
    } else if (currentDayOfTheWeekNumber === 9) {
        currentDayOfTheWeekNumber = 2;
    } else if (currentDayOfTheWeekNumber === 10) {
        currentDayOfTheWeekNumber = 3;
    }


    switch (currentDayOfTheWeekNumber) {
        case 0:
            return 'Sun';
        case 1:
            return 'Mon';
        case 2:
            return 'Tue';
        case 3:
            return 'Wed';
        case 4:
            return 'Thu';
        case 5:
            return 'Fri';
        case 6:
            return 'Sat';
        default:
            return 'Error';
    }

};



const WeatherCard = ({ currentWeatherData, fiveDayForecastData, day0, day1, day2, day3, day4 }) => {
    const [weatherIcon, setWeatherIcon] = useState();
    const [currentWeather, setCurrentWeather] = useState();
    const [tempMin, setTempMin] = useState();
    const [tempMax, setTempMax] = useState();
    const [dayOfTheWeek, setDayOfTheWeek] = useState();

    useEffect(() => {
        if (day0) {
            setWeatherIcon(currentWeatherData.weather[0].icon);
            setCurrentWeather(Math.round(currentWeatherData.main.feels_like));
            setTempMin(Math.round(currentWeatherData.main.temp_min));
            setTempMax(Math.round(currentWeatherData.main.temp_max));
        } else if (day1) {
            setWeatherIcon(fiveDayForecastData.list[0].weather[0].icon);
            setCurrentWeather(Math.round(fiveDayForecastData.list[0].main.feels_like));
            setTempMin(Math.round(fiveDayForecastData.list[0].main.temp_min));
            setTempMax(Math.round(fiveDayForecastData.list[0].main.temp_max));
            setDayOfTheWeek(1);
        } else if (day2) {
            setWeatherIcon(fiveDayForecastData.list[7].weather[0].icon);
            setCurrentWeather(Math.round(fiveDayForecastData.list[7].main.feels_like));
            setTempMin(Math.round(fiveDayForecastData.list[7].main.temp_min));
            setTempMax(Math.round(fiveDayForecastData.list[7].main.temp_max));
            setDayOfTheWeek(2);
        } else if (day3) {
            setWeatherIcon(fiveDayForecastData.list[15].weather[0].icon);
            setCurrentWeather(Math.round(fiveDayForecastData.list[15].main.feels_like));
            setTempMin(Math.round(fiveDayForecastData.list[15].main.temp_min));
            setTempMax(Math.round(fiveDayForecastData.list[15].main.temp_max));
            setDayOfTheWeek(3);
        } else if (day4) {
            setWeatherIcon(fiveDayForecastData.list[23].weather[0].icon);
            setCurrentWeather(Math.round(fiveDayForecastData.list[23].main.feels_like));
            setTempMin(Math.round(fiveDayForecastData.list[23].main.temp_min));
            setTempMax(Math.round(fiveDayForecastData.list[23].main.temp_max));
            setDayOfTheWeek(4);
        }
    }, []);

    return (
        <div className={styles.weatherCard}>
            <p className={styles.day}>
                {currentDayOfTheWeek(dayOfTheWeek)}
            </p>
            <img src={`http://openweathermap.org/img/wn/${weatherIcon}@2x.png`} alt="Weather Icon" />
            <p className={styles.tempCurrent}>{currentWeather}&deg;c</p>
            <div className={styles.tempMinMax}>
                <p className={styles.tempMin}>
                    {tempMin}&deg;c
                </p>
                <p className={styles.tempMax}>
                    {tempMax}&deg;c
                </p>
            </div>
        </div>
    );
};

export default WeatherCard;