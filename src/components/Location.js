import React from 'react'

const Location = ({dataforcast}) => {
     return(
     <div className="flex mt-4 flex-col">
          <div>
              <h1 className="block">Your Current location : {dataforcast.name}</h1>   
             <p className="weather-description block">{dataforcast.weather && dataforcast?.weather[0]?.description}</p>
          </div>
          <div className="h-56 grid grid-cols-3 gap-4 items-center text-center content-start ...">
               <div>
                    <img
                    alt="weather"
                    className="weather-icon w-20 h-20"
                    src={`icons/${dataforcast.weather && dataforcast?.weather[0]?.icon}.png`}
                    />
               </div>
               <div>
                    <h1 className="text-8xl">{Math.round(dataforcast?.main?.temp)}°C</h1>
               </div>
               <div className='flex flex-col'>
                    
                    <span className="">Feels like</span>
                    <span className="mb-1 text-xs">
                         {Math.round(dataforcast?.main?.feels_like)}°C
                    </span>
                    <span className="">Wind</span>
                    <span className="mb-1 text-xs">
                         {dataforcast?.main?.feels_like} m/s
                    </span>
                    <span className="">Pressure</span>
                    <span className="mb-1 text-xs">
                         {dataforcast?.main?.pressure} hPa
                    </span>
               </div>
          </div>
          <div className="flex">
          </div>
     </div>
    );
}

export default Location
