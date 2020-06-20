import React from 'react';




function App() {
  return (
    <div className="App">
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
        <h1>CHAT BOT APP&nbsp;</h1>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={{
            height: 700, width: 800,
            border: '3px solid black', borderRadius: '7px'
          }}>
            <div style={{ height: 644, width: '100%', overflow: 'auto' }}>


               


            </div>
            <input
                style={{
                    margin: 0, width: '90%', height: 50,
                    borderRadius: '4px', padding: '5px', fontSize: '1rem'
                  }}
                placeholder="Send a message..."
                
                type="text"
            />

        </div>
          
 

      </div>
    </div>
  );
}

export default App;
