/* eslint-disable @next/next/no-img-element */

import { format, fromUnixTime } from 'date-fns';

import { ForecastDay } from '@/typings';

type ForecastProps = {
  forecast?: ForecastDay[];
};

const Forecast = ({ forecast }: ForecastProps) => {
  return (
    <section className='flex flex-col bg-blue-400/50 px-5 py-6 rounded-xl h-max w-max'>
      <h4 className='font-medium mb-4'>Forecast</h4>
      {forecast?.map((item) => {
        const dt = new Date(item.date);
        const dtDateOnly = new Date(
          dt.valueOf() + dt.getTimezoneOffset() * 60 * 1000
        );
        const date = format(dtDateOnly, 'd, MMM, EEE').split(',');

        return (
          <div
            className='flex flex-row gap-x-5 text-sm items-center py-1.5 px-1 hover:bg-blue-900/80 cursor-pointer rounded-xl transition-all ease-in-out duration-300'
            key={item.date_epoch}
          >
            <img
              src={item.day.condition.icon}
              alt={item.day.condition.text}
              className='size-8'
            />

            <p className='font-semibold w-[72px] flex flex-row'>
              <span className='flex-1'>{item.day.mintemp_c}°</span>
              <span>/</span>
              <span className='flex-1 ml-1'>{item.day.maxtemp_c}°</span>
            </p>

            <p className='flex flex-row flex-1 items-center gap-x-0.5'>
              <span className='font-medium'>{date[0]}</span>
              <span className='font-light text-xs mr-0.5'>{date[1]},</span>
              <span className='font-light text-xs'>{date[2]}</span>
            </p>
          </div>
        );
      })}
    </section>
  );
};

export default Forecast;
