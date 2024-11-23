import React from 'react';
import Wine from './Wine'; // Импортируем компонент Wine
import './App.css';

function App() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', padding: '20px' }}>
      <Wine 
        title="Игристое вино Le Grand Noir Brut Reserve Rose"
        description="Франция, розовое, 0.75 л."
        rating="3.6"
      />
      <Wine 
        title="Игристое вино Martini Prosecco"
        description="Италия, белое, 0.75 л."
        rating="4.1"
      />
      <Wine 
        title="Игристое вино Asti Mondoro"
        description="Италия, сладкое, 0.75 л."
        rating="4.7"
      />
    </div>
  );
}

export default App;
