import React from 'react'

const Collection = (props) => {
  const{tittle, image1, image2, image3, image4, image5, image6}=props.gentsFashion
  
  return (
    <div className='collectionSection'>
      <h2>{tittle}</h2>
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

export default Collection