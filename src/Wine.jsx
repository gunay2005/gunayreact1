import React from 'react';

function Wine({ title, description, rating }) {
  return (
    <div style={{
      border: '1px solid black',
      padding: '10px',
      margin: '10px',
      textAlign: 'center',
      width: '200px',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h3 style={{ marginBottom: '5px' }}>{title}</h3>
      <p style={{ fontStyle: 'italic', color: 'gray' }}>{description}</p>
      <p style={{ fontSize: '20px', fontWeight: 'bold' }}>{rating}</p>
    </div>
  );
}

export default Wine;