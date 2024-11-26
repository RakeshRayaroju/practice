import React from 'react'

const WomencCollection = (props) => {
  const{tittle, image1, image2, image3, image4, image5, image6 }=props.LadiesFashion
  return (
    <div className='collectionSection'>
      <h2>{tittle}</h2>
      <div className="bannerBox">
      <img src="assets/LadiesBanner.gif" alt="" />
        
      </div>
      <div className="menImage">
        <img src={image1} alt={tittle} />
        <img src={image2} alt={tittle} />
        <img src={image3} alt={tittle} />
        <img src={image4} alt={tittle} />
        <img src={image5} alt={tittle} />
        <img src={image6} alt={tittle} />
        
      </div>
    </div>
  )
}

export default WomencCollection