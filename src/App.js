import React, { useEffect, useState } from "react";
import axios from 'axios'
import Table from "./components/Table";
import Loader from "./components/Loader";
import ShowFullItem from "./components/ShowFullItem";

function App() {
  const API = 'https://api.coincap.io/v2/assets';

  const [coins, setCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [directionSort, setDirectionSort] = useState(true);
  const [rowItem, setRowItem] = useState('');
  

  const showFullItem = (row) => {
    setRowItem(row);
  }

  const sortData = (field) => {
    const copyCoins = coins.concat();
    let sortData;
    if (directionSort) {
      sortData = copyCoins.sort((a, b) => {
        return Number(a[field]) > Number(b[field]) ? 1 : -1
      });
    } else {
      sortData = copyCoins.sort((a, b) => {
        return Number(b[field]) > Number(a[field]) ? 1 : -1
      });
    }
    setCoins(sortData);
    setDirectionSort(!directionSort);
  }

  useEffect(() => {
    axios(API)
      .then(
        (res) => {
          setCoins(res.data.data)
          setIsLoading(false)
        }
      )
  }, [])

  return (
    <div className="container">
      {isLoading ? <Loader /> : 
      <Table 
      coins={coins} 
      sortData={sortData} 
      directionSort={directionSort} 
      showFullItem={showFullItem}/>}
      <ShowFullItem showFullItemData={rowItem}/>
    </div>
  );
}

export default App;
