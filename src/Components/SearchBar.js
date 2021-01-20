import React from 'react'
import './SearchBar.css'
import Spinner from 'react-bootstrap/Spinner'
import {useState, useEffect} from 'react';

export default function SearchBar() {
    const [city, setCity] = useState('');
    const [input, setInput] = useState('');
    const [temp, setTemp] = useState(0);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
  
     const handleEnter = (e)=>{
       if(e.key==='Enter')
      CitySet();
     }
  
    useEffect(() => {
      if(city)
      {
          setError(false);
          setLoading(true);
          
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=2167f2df60ba36b6ecdcb300c0e4167c`)
      .then(res=>res.json())
      .then(data=>{
        if(data.cod===200){
        setTemp(data.main.temp)
        setLoading(false)
        }
        else{
        setError(true)
        setLoading(false)
        }
        })
    }
    }, [city])
    const CitySet =() =>{
        setCity(input)
    }

    return (
        <div className='Box'>
        <div className='pa3 br2 shadow-5 form center vcenter'>
            <input className='f4 pa3 w-70 h-30 center'
            id='searchbox'
            name='city'
             type="text" value={input} 
             onChange={(e)=>setInput(e.target.value)}
            onKeyPress={(e)=>handleEnter(e)}></input>
            <button 
            className='w-30 f4 grow link white ph3 pv2 dib bg-light-green'
            id='search-btn'
            onClick={()=>CitySet()}>Search</button>
        </div>
        {loading===true?
            <Spinner animation="border" role="status" className='center'>
            <span className="sr-only">Loading...</span>
        </Spinner>
            :
        error===true?
        <div id='result' className='result'> Unable to find the city in our database. Check the city you have entered.</div>
            :
        city?
        <div id='result' className='result'>Weather in {city} is {temp}{'\u00b0C'}</div>
        :
        <div id='result' className='result'> Enter a city name to get the temperature!</div>
        }
        
        </div>
    )
}
