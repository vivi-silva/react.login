import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <h2>Login</h2>
      <form>
        <input type="text" placeholder="Usuário" />
        <input type="password" placeholder="Senha" />
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}

export default App;


