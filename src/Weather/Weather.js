  
import React, {useMemo, useEffect, useState} from 'react';
import './Weather.css';
import DayOfWeek from "./DayOfWeek";

function Weather() {
	const [weatherData, setWeatherData] = useState([]);

	useEffect(() => {
		fetch('https://netcraft2.s3-eu-west-1.amazonaws.com/weather.json')
			.then(res => res.json())
			.then(data => setWeatherData(data));
	}, [])

	const hottestDay = useMemo(() => {
		return weatherData.reduce((day, hottestDay) => day.temperature > hottestDay.temperature ? day : hottestDay, {});
	}, [weatherData]);

	const coldestDay = useMemo(() => {
		return weatherData.reduce((day, coldestDay) => day.temperature < coldestDay.temperature ? day : coldestDay, {});
	}, [weatherData]);

	return (
		<div className="Weather">
			<p>
				Use the following API to display the hottest and coldest days:<br />
				<code>https://netcraft2.s3-eu-west-1.amazonaws.com/weather.json</code>
			</p>
			<div className="Weather__stats">
				<strong>Hottest day is:</strong> <DayOfWeek day={hottestDay.day} />
			</div>
			<div className="Weather__stats">
				<strong>Coldest day is:</strong> <DayOfWeek day={coldestDay.day} />
			</div>
		</div>
	);
}

export default Weather;