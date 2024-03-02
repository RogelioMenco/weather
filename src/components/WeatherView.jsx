import { useCallback, useRef } from 'react';
import { toast } from 'react-toastify';
import useWeather from '../hooks/useWeather';
import GenericCard from './GenericCard';
import SearchBox from './SearchBox';
import TemperatureButton from './TemperatureButton';
import WeatherCard from './WeatherCard';

const WeatherView = () => {
  const cityName = useRef('');

  const onWeatherError = useCallback(() => {
    toast.error('The city you entered was not found!');
  }, []);

  const [weather, , , setCity] = useWeather({
    cityName: 'Miami',
    onError: onWeatherError,
  });

  const handleSearch = (e) => {
    if (e.type !== 'click' && e.key !== 'Enter') return;

    let cName = cityName.current.value;
    if (cName.trim()) {
      setCity(String(cName));
    }
  };

  return (
    <div className="flex-auto">
      <div className="flex flex-col md:flex-row-reverse items-stretch mb-6 gap-3 md:gap-9">
        <TemperatureButton />
        <SearchBox action={handleSearch} refTarget={cityName} />
      </div>
      <WeatherCard weather={weather} />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-3">
        <GenericCard
          logo="./assets/wind_2.svg"
          title="Wind Speed"
          text={weather.wind.speed + 'm/s'}
        />
        <GenericCard
          logo="./assets/humidity_2.svg"
          title="Humidity"
          text={weather.humidity + '%'}
        />
        <GenericCard
          logo="./assets/cloudiness.svg"
          title="Cloudiness"
          text={weather.cloudiness + '%'}
        />
      </div>
    </div>
  );
};

export default WeatherView;
