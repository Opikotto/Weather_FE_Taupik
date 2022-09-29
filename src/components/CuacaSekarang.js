import React from 'react'
const CuacaSekarang = ({data}) => {

   return (
     <div className="w-full p-2 mt-10 pl-5 pr-5">
          <div className="flex flex-col">
               <div>
               <h1 className="block text-white">{data.kota}</h1>   
               <p className="weather-description text-white block">{data.weather[0].description}</p>
               </div>
               <div className="h-56 grid grid-cols-3 gap-4 items-center text-center content-start">
                    <div>
                         <img
                         alt="weather"
                         className="weather-icon w-20 h-20"
                         src={`icons/${data.weather[0].icon}.png`}
                         />
                    </div>
                    <div>
                         <h1 className="text-8xl text-white">{Math.round(data.main.temp)}°C</h1>
                    </div>
                    <div className='flex flex-col'>
                      
                         <span className="text-white">Feels like</span>
                         <span className="mb-1text-white text-white text-xs">
                              {Math.round(data.main.feels_like)}°C
                         </span>
                         <span className="text-white">Wind</span>
                         <span className="mb-1 text-white text-xs">
                              {data.main.feels_like} m/s
                         </span>
                         <span className="text-white">Pressure</span>
                         <span className="mb-1 text-white text-xs">
                              {data.main.pressure} hPa
                         </span>
                    </div>
               </div>
               <div className="flex">
             
                    
               </div>
          </div>
     </div>
  )
}

export default CuacaSekarang
