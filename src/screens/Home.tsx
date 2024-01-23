'use client';

import { CurrentWeather, Forecast } from '@/components';

import { useWeather } from '@/hooks';

type HomeProps = {
  initialCity: string;
};

export default function Home({ initialCity }: HomeProps) {
  const weather = useWeather(initialCity);

  return (
    <main className='bg-blue-900/30 rounded-xl container flex h-96'>
      <CurrentWeather
        weather={weather?.current}
        localTime={weather?.location.localtime}
      />
      <Forecast forecast={weather?.forecast.forecastday} />
    </main>
  );
}
