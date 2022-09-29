import React,{Fragment} from 'react'
const Forecast = ({data}) => {
    
     const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
     const weekday = new Date().getDay();
     const forecastDays = days.slice(weekday, days.length).concat(days.slice(0, weekday));
    
     return (
    <Fragment>
       {data?.list?.splice(0, 7).map((item, id) => (
        
     <div className="mb-2 mt-3 pb-3  border-b-[1px] " key={id}>
          <div className="group outline-none accordion-section" tabIndex={id + 1}>
               <div className="group flex justify-between px-4 py-3 items-center text-white transition ease duration-500 cursor-pointer pr-10 relative">
                    <div className="group-focus:text-blue-400 flex items-stretch w-full justify-between transition ease duration-500">
                        <div>
                        <label className="mr-3">
                              {forecastDays[id]}
                         </label>
                        </div>
                         <div>
                              <label className="text-right">{Math.round(item?.main?.temp_max)}°C /{Math.round(item?.main?.temp_min)}°C</label>
                         </div>
                    </div>
                  
               </div>  

               <div className="group-focus:max-h-screen max-h-0 to-blue-500 px-4 overflow-hidden ease duration-500">
                    <div className="flex flex-row detail__">
                         <p className="p-2 text-white text-justify">
                              {data.list && data.list[id]?.weather[0]?.description}
                         </p>
                         <img
                         alt="weather"
                         className="weather-icon w-10 h-10"
                         src={`icons/${data.list && data.list[id]?.weather[0]?.icon}.png`}
                         />
                          <p className="p-2 text-white text-justify">Wind Speed {item?.wind?.speed} m/s</p>
                          <p className="p-2 text-white text-justify">Feels Like {item?.main?.feels_like}°C</p>
                          <p className="p-2 text-white text-justify">Clouds all {item?.clouds?.all}%</p>
                    </div>

               </div>
          </div>
     </div>

       ))}
    </Fragment>
  )
}

export default Forecast
