import styles from '../styles/weather.module.scss';

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


const WeatherCard = ({ currentWeatherData, day0, day1, day2, day3, day4 }) => {
    return (
        <div className={styles.weatherCard}>
            <p className={styles.day}>
                {day0 ? currentDayOfTheWeek() : null}
                {day1 ? currentDayOfTheWeek(1) : null}
                {day2 ? currentDayOfTheWeek(2) : null}
                {day3 ? currentDayOfTheWeek(3) : null}
                {day4 ? currentDayOfTheWeek(4) : null}
            </p>
            <img src={`http://openweathermap.org/img/wn/${currentWeatherData.weather[0].icon}@2x.png`} alt="Weather Icon" />
            <p className={styles.tempCurrent}>{currentWeatherData.main.feels_like}&#730;</p>
            <div className={styles.tempMinMax}>
                <p className={styles.tempMin}>{currentWeatherData.main.temp_min}&#730;</p>
                <p className={styles.tempMax}>{currentWeatherData.main.temp_max}&#730;</p>
            </div>
        </div>
    );
};

export default WeatherCard;