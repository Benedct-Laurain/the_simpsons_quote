
import React, {useState, useEffect} from 'react'; 
import axios from 'axios';

import QuoteCard from './components/QuoteCard';
import './App.css';

const App= () => {
  const [data, setData] = useState ([])

      useEffect(() => {
        getQuote()
      }, []);

      const getQuote = () => {
         // Send the request
         axios
          .get('https://simpsons-quotes-api.herokuapp.com/quotes')
          // Extract the DATA from the received response
          .then((res) => setData(res.data))
          // Use this data to update the state
      }


  return (
    <div className="simpson">
       {console.log(data)}
       {/* {data.map(elem=> <QuoteCard simpsons={elem} />) } */}
       {data.map(elem=> <QuoteCard quote={elem.quote} image={elem.image} character={elem.character}  />) }
        <button type="button" onClick={getQuote}>Get Quote</button>
    </div>
  );
}

export default App ;
// {data.map(elem=> <div> {elem.quote} <img src={elem.image} /> </div>) }