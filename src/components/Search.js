import {useState} from 'react'
import {AsyncPaginate} from "react-select-async-paginate"
import { GE0_API_URL,geoApiOptions } from '../services/service'
const Search = ({onSearchChange}) => {
     const [search,setSearch] = useState("");
     
     const loadOptions = (value) => {
          return fetch(
          `${GE0_API_URL}/cities?minPopulation=1000000&namePrefix=${value}`,
          geoApiOptions)
          .then(response => response.json())
          .then(response => {
               return {
                    options:response.data.map((kota)=> {
                         return {
                              value: `${kota.latitude} ${kota.longitude}`,
                              label: `${kota.name},${kota.region},${kota.country}`,
                         } 
                    })
               }
          })
          .catch(err => console.error(err));
     }
     const handleOnChange = (searchData) => {
          setSearch(searchData);
          onSearchChange(searchData);
        };


     return (
    <AsyncPaginate
          placeholder="Search ..."
          debounceTimeout={600}
          value={search}
          onChange={handleOnChange}
          loadOptions={loadOptions}
    />
  )
}

export default Search
