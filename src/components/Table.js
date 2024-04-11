import React, { useState } from 'react';
import Arrow from './svgs/Arrow';

const Table = ({ sortData, coins, directionSort, showFullItem }) => {

  const [fieldData, setFieldData] = useState('');

  const fieldSortData = (field) => {
    sortData(field);
    setFieldData(field);
  }

  return (
    <div>
      <table className="table">
        <thead>
          <tr>

            <th scope="col" onClick={() => { fieldSortData('rank') }}>
              #{fieldData === 'rank' ? <Arrow directionSort={directionSort} /> : null}
            </th>

            <th scope="col">Name</th>
            
            <th scope='col' onClick={() => { fieldSortData('priceUsd') }}>
              Price{fieldData === 'priceUsd' ? <Arrow directionSort={directionSort} /> : null}
            </th>
            
            <th scope="col" onClick={() => { fieldSortData('marketCapUsd') }}>
              Market Cap{fieldData === 'marketCapUsd' ? <Arrow directionSort={directionSort} /> : null}
            </th>
            
            <th scope="col" onClick={() => { fieldSortData('changePercent24Hr') }}>
              24h %{fieldData === 'changePercent24Hr' ? <Arrow directionSort={directionSort} /> : null}
            </th>
            
            <th scope="col">Add</th>
          </tr>
        </thead>
        <tbody>
          {coins.map(
            (item) => (
              <tr key={item.id} onClick={() => {showFullItem(item)}}>
                <th scope="row">{item.rank}</th>
                <td>{item.name} {item.symbol}</td>
                <td>{Number(item.priceUsd).toFixed(2)}</td>
                <td>{Number(item.marketCapUsd).toFixed(2)}</td>
                <td>{Number(item.changePercent24Hr).toFixed(2)}</td>
                <td><button>Add</button></td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  )
}

export default Table