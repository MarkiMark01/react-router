import React from 'react';
import "./components/styles/style.css"
import Header from './components/header/Header';
import UserRoutes from './components/UserRoutes';



function App() {
  return (
    <div className="App">
      <Header />
      <UserRoutes />
    </div>
  );
}

export default App;
