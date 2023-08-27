import React from 'react'

const Banner = ({src,className,label}) => {
  return (
    <div>
          <img
              className={className}
              src={src}
              alt={label}
              loading="lazy" 
          />
    </div>
  )
}

export default Banner