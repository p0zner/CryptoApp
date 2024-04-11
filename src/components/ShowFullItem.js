import React from 'react'

const ShowFullItem = ({ showFullItemData }) => {
   return (
      <div className='full-item'>
         <div>
            <img src={showFullItemData.image} alt={'There is no image in API'} onClick={() => this.props.onShowItem(this.props.item)} />
            <h2>{showFullItemData.rank} {showFullItemData.name} {showFullItemData.symbol}</h2>
            <p>supply: {showFullItemData.supply}</p>
            <p>priceUsd: {showFullItemData.priceUsd}</p>
            <p>marketCapUsd: {showFullItemData.marketCapUsd}</p>
            <p>maxSupply: {showFullItemData.maxSupply}</p>
            <div className='add-to-cart' onClick={() => this.props.onAdd(this.props.item)}>Add</div>
            <button>Go Back</button>
         </div>
      </div>
   )
}
export default ShowFullItem