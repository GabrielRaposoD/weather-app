import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from '@tanstack/react-query';

import Home from '@/screens/Home';
import { getWeather } from '@/services/weather';
import { headers } from 'next/headers';

export default async function PostsPage() {
  const queryClient = new QueryClient();

  const headersList = headers();
  const ip = headersList.get('request-ip');

  let cityName = 'London';

  if (ip && ip?.length > 0) {
    const response = await fetch(
      process.env.NEXT_PUBLIC_WEATHER_API_URL +
        `/ip.json?key=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}&q=${ip}`
    );

    const data = await response.json();

    cityName = data.city;
  }

  await queryClient.prefetchQuery({
    queryKey: ['Weather', cityName],
    queryFn: () => getWeather(cityName),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Home initialCity={cityName} />
    </HydrationBoundary>
  );
}
