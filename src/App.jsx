import React, { useState } from 'react';
import Data from './data/Data';
import styles from './modulyarCss/searchfilter.module.css'
import './App.css';

function App() {
  const [search, setSearch] = useState('');

  return (
    <>
      <input 
        type='text' 
        placeholder='Search edib axtarın...' 
        onChange={(e) => setSearch(e.target.value)} 
        className={styles.search}
      />
      <div>
        {Data.filter((val) => {
          if (search === '') {
            return val;
          } else if (val.title && val.title.toLowerCase().includes(search.toLowerCase())) {
            return val;
          }
          return null;
        }).map((val, index) => (
          <div key={index} className={styles.container}>
            <h2 className={styles.title}>{val.title}</h2>
            <img src={val.img} alt={`img-${index}`} className={styles.image}/>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;

