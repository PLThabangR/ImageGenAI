import React from 'react'

const Card = ({_id,name,prompt}) => {
  return (
    <>
      <div>
      <div className="card mt-2 mb-2 mr-2 ml-2">
      <div className="card-image">
     <figure className="image is-3by2">
      <img src="https://bulma.io/images/placeholders/1280x960.png" alt={prompt}/>
    </figure>
  </div>
  <div className="card-content">
    <div className="media">
      <div className="media-content">
        <p className="title is-4">{name}</p>
        <p className="subtitle is-6">{prompt}</p>
      </div>
    </div>

  </div>
   </div>
      
      
      
      </div>



    </>
  )
}

export default Card