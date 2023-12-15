import React from 'react';
import './menu-item.styles.css';


 
const MenuItem = ({ title, imageUrl, size, History, linkUrl, match}) => {
    return (
     <div 
      className={`${size} menu-item`}
        onClick={() => History.pushState(`${match.url}${linkUrl}`)}
        >
        <div
         className="background-image"
         style={{
            backgroundImage: `url(${imageUrl})`
         }}
         
         >
            <div className="content">
              <h1 className="title">{title.toUpperCase()}</h1>
              <span className="substitute">SHOP NOW</span>
            </div>
        </div>
     </div>
    );
}

export default MenuItem;