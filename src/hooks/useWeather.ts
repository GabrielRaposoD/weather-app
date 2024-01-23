import { Weather } from '@/typings';
import { getWeather } from '@/services/weather';
import { useQuery } from '@tanstack/react-query';

const useWeather = (city: string) => {
  const { data } = useQuery<Weather>({
    queryKey: ['Weather', city],
    queryFn: () => getWeather(city),
  });

  return data;
};

export default useWeather;
