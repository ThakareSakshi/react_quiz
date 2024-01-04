import logo from './logo.svg';
import './App.css';
import {useState,useEffect} from 'react'
import axios from 'axios'
import Question from './components/Question';

function App() {

  const [data,setData]=useState([]);
  const apiKey = 'I34YZGfJuiwmithX63h0hPmLvEj07a3CRwzuPT7A';
  const apiUrl = 'https://quizapi.io/api/v1/questions';
  
  useEffect(()=>{

    const fetchData = async () => {
      try {
        const response = await axios.get(apiUrl, {
          params: {
            apiKey: apiKey,
            limit: 10, // Adjust the limit as needed
          },
        });
        // console.log(response.data)
        setData(response.data)
        // setData(response.data);
      } catch (error) {
        console.log('Error fetching quiz questions:', error);
      }
    };

    fetchData();
  },[])

  return (
    <div className="App">
      <Question data={data}/>
      
    </div>
  );
}

export default App;
