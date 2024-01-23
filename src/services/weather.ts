const getWeather = async (city: string) => {
  const response = await fetch(
    process.env.NEXT_PUBLIC_WEATHER_API_URL +
      `/forecast.json?key=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}&q=${city}&aqi=no&days=3`
  );

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  const data = await response.json();

  return data;
};

export { getWeather };
