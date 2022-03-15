import axios from 'axios';

const url = 'https://covid-19.mathdro.id/api';
export const fetchData=async ()=>{
    try{
        const Data = await axios.get(url);
        console.log(Data)
        const {data :{confirmed ,deaths , recovered , lastUpdate}} = await axios.get(url);
        
        return { confirmed,deaths,recovered,lastUpdate};
        
    }catch(error){

    }
};