import React, { useState, useEffect } from 'react';

import BlockElement from './BlockElement';

const Block = () => {
 const [elements, setElements] = useState([]);

 useEffect(() => {
    const newElements = Array.from({ length: 8 }, () =>
      Math.floor(Math.random() * 1000) + 1
    );
    setElements(newElements);
 }, []);

 return (
    <div className="block">
      <h3>Последние обмены</h3>
      <div className="elements">
        {elements.map((element, index) => (
          <div key={index} className="element">
            <BlockElement/>
          </div>
        ))}
      </div>
    </div>
 );
};

export default Block;