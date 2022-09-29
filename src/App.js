import './App.css';
import CuacaSekarang from './components/CuacaSekarang';
import Search from './components/Search';
import { CUACA_API,KEY_API } from '../src/services/service'
import {useState,useEffect} from "react"
import Location from './components/Location';
import Forecast from './components/Forecast';
function App() {
     
     const [lat, setLat] = useState([]);
     const [long, setLong] = useState([]);
     const [cuacaCurrent,setCuacaCurrent] = useState("")
     const [forecast,setForecast] = useState(" ")
     const [dataLocation,setDataLocation] = useState("")
     const [loading,setLoading] = useState(false);
     useEffect(() => {
         setLoading(true)
          navigator.geolocation.getCurrentPosition(function(position) {
            setLat(position.coords.latitude);
            setLong(position.coords.longitude);
           
             const cuacaSekarang = fetch(`${CUACA_API}/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${KEY_API}&exclude=hourly,daily&units=metric`)
        
            Promise.all([cuacaSekarang]).then(async (res)=> {
                    const cuacaResponse =  await res[0].json();
                    setDataLocation({...cuacaResponse});
                    setLoading(false)
            })
            .catch((error)=> {
                 console.log(error)
            })
          });
    
      }, [lat,long])
    
     const handleOnSearchChange  = (searchData) => {
          const [lat,lon] = searchData.value.split(" ");
          const cuacaSekarang = fetch(`${CUACA_API}/weather?lat=${lat}&lon=${lon}&appid=${KEY_API}&exclude=hourly,daily&units=metric`)
          const forecastFetch = fetch(`${CUACA_API}/forecast?lat=${lat}&lon=${lon}&appid=${KEY_API}&units=metric`)

          Promise.all([cuacaSekarang,forecastFetch]).then(async (res)=> {
             const cuacaResponse =  await res[0].json();
             const forecastResponse = await res[1].json();

             setCuacaCurrent({kota:searchData.label, ...cuacaResponse});
             setForecast({kota:searchData.label, ...forecastResponse});
          })
          .catch((error)=> {
               console.log(error)
          })
     }

  return (
     <>
     <h1 className="text-center pt-5 pb-5 uppercase font-semibold text-3xl">Radya Digital Weather</h1>
    <div className="mx-auto max-w-screen-md mt-4 py-5 bg-gradient-to-br h-fit shadow-xl shadow-gray-400">
      {loading ? (
        <div className="loader-container">
      	  <div className="spinner"></div>
        </div>
      ) : (
          <div>
          <div className="pl-5 pr-5">
          <Search onSearchChange={handleOnSearchChange }/>
          <Location dataforcast = {dataLocation} />
           </div>

      </div>
      )}
    </div>
    <div className="mx-auto max-w-screen-md mt-4 bg-slate-800  bg-gradient-to-br h-fit shadow-xl shadow-gray-400">
           {cuacaCurrent && <CuacaSekarang data = {cuacaCurrent} />}
           {forecast && <Forecast data = {forecast} />}
    </div>
    </>
  );
}

export default App;
