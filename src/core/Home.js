import React, { useState, useEffect } from 'react';
import { get } from './api';
import Card from './Card';
import Layout from './Layout';

import "../App.css";


 




const Home = () => {
   
const [productsByArrival, setProductsByArrival] = useState([]);
const [error, setError] = useState(false);
const [data,setData] =useState([]);
const [searchResults, setSearchResults] = useState([]);
const [searchTerm, setSearchTerm] = useState("");
  


const handleChange = event => {
    setSearchTerm(event.target.value);
    console.log(event.target.value);
  };


    const load = () => {
        get().then(data => {
            
            console.log(data.data);
            if (data.error) {
                setError(data.error);
            } else {
                setProductsByArrival(data.data);
                
            }
        });
    };

    const loadsearch= () => {
        const results = productsByArrival.filter(person =>
        person.email.toLowerCase().includes(searchTerm)
         
        );
        setSearchResults(results);
    };
    

    useEffect(() => {
        load();
        loadsearch();
        
    },[]);
    


    return (
     <Layout
            title="Lybrate users"
            description="clients of Lybrate"
            className="container-fluid"
        >
<div className="App">
<input type="text" 
placeholder="search by email" 
value={searchTerm} 
onChange={handleChange}/>
       
       <ul>
         {searchResults.map(item => (
          <li>{item}</li>
        ))}
      </ul>
</div>




      
      <h2 className="mb-4">Users</h2>
            <div className="row">
                
                {productsByArrival.map((product, i) => (
                    <div key={i} className="col-4 mb-3">
                        <Card product={product} />

                      </div>
                ))}
            </div>
        
            </Layout>
          
      
     );

};

export default Home;