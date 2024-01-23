/* eslint-disable @next/next/no-img-element */

import { Cloudy, Droplets, Waves, Wind } from 'lucide-react';

import type { TCurrentWeather } from '@/typings';
import { format } from 'date-fns';

type CurrentWeatherProps = {
  weather?: TCurrentWeather;
  localTime?: string;
};

const CurrentWeather = ({ weather, localTime }: CurrentWeatherProps) => {
  if (!weather) return null;

  const time = format(localTime ?? new Date(), 'EEEE, d MMMM yyyy');

  return (
    <section className='flex flex-col bg-blue-800/30 px-5 py-6 rounded-xl h-max w-max'>
      <h4 className='font-medium'>Current Weather</h4>
      <p className='text-xs font-light'>{time}</p>
      <div className='flex flex-row gap-x-5 items-center justify-center relative px-5 my-6'>
        <img
          src={weather.condition.icon}
          alt={weather.condition.text + ' icon'}
          className='size-16'
        />
        <div className='flex flex-col text-center'>
          <h2 className='text-6xl font-semibold'>{weather.temp_c}</h2>
          <p className='text-xs font-light capitalize'>
            {weather.condition.text}
          </p>
        </div>
        <p className='absolute right-0 top-0 -mt-2'>°C</p>
      </div>

      <div className='flex flex-row justify-between'>
        <div className='flex flex-col items-center justify-center gap-y-2'>
          <Waves />
          <p className='text-xs'>{weather.precip_mm}%</p>
        </div>
        <div className='flex flex-col items-center justify-center gap-y-2'>
          <Droplets />
          <p className='text-xs'>{weather.humidity}%</p>
        </div>
        <div className='flex flex-col items-center justify-center gap-y-2'>
          <Wind />
          <p className='text-xs'>{weather.wind_kph}km/h</p>
        </div>
        <div className='flex flex-col items-center justify-center gap-y-2'>
          <p>
            <Cloudy />
          </p>
          <p className='text-xs'>{weather.cloud}%</p>
        </div>
      </div>
    </section>
  );
};

export default CurrentWeather;
