import React from "react";
import { useEffect, useState } from "react";
import {FormControl, MenuItem, Select} from "@material-ui/core"
import {InfoBox } from "/bot/react-app/website/src/InfoBox";
import {Counter} from "/bot/react-app/website/src/components/navbar";
function MainPage(){
    const [countries, setCountries] = useState([]);
    const [country, setCountry] = useState("worldwide")
    const [countryInfo, setCountryInfo] = useState([]);
    useEffect(() => {
      fetch("https://disease.sh/v3/covid-19/all")
      .then((response)=> response.json())
      
      .then(data  => {
        setCountryInfo(data);
      }
      
      );
    },[]);
    useEffect(() => {
        const getCountriesData = async () =>{
        await fetch ("https://disease.sh/v3/covid-19/countries").then((response) => response.json())
        .then((data)=> {const countries = data.map((country)=> ({
            name: country.country,
            value: country.countryInfo.iso2
  
        }));
        setCountries(countries);
    });
    };
    getCountriesData()
  }, []);
  
    const onCountryChange = async (event) => {
      const countryCode = event.target.value;
  
      console.log(countryCode)
      setCountry(countryCode);
    }
    return (
        <div className="app">
          
            <Counter>
  
            </Counter>
          
            <div className="app_header">
                <h2>Covid-19 Dashboard</h2>
                <FormControl className="app_dropdown">
                    <Select variant="outlined" onChange={onCountryChange}value = {country}>
                      <MenuItem value = "Worldwide">Worldwide</MenuItem>
                      {countries.map((country)=> (
                        <MenuItem value={country.value}>{country.name}</MenuItem>
                      ))}
                        
                    </Select>
                </FormControl>
            </div>
        
  
        <div className="app_stats">
          <InfoBox title="Total Worldwide Cases"total = {countryInfo.cases}></InfoBox>
          <InfoBox title="Total Worldwide Recoveries" total={countryInfo.recovered}></InfoBox>
          <InfoBox title="Total Worldwide Deaths" total= {countryInfo.deaths}></InfoBox>
          <InfoBox title="Daily Worldwide Cases" total = {countryInfo.todayCases}></InfoBox>
          <InfoBox title = "Daily Worldwide Recoveries" total = {countryInfo.todayRecovered}></InfoBox>
          <InfoBox title = "Daily Worldwide Deaths" total = {countryInfo.todayDeaths}></InfoBox>
        </div>
        </div>
    )
  }
  export default MainPage;