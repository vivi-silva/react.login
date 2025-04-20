import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <h2>Login</h2>
      <form>
        <input type="text" placeholder="Usuário" /><br />
        <input type="password" placeholder="Senha" /><br />
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}

export default App;

