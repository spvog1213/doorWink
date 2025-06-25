import { useContext, useState } from 'react';
import './App.css';
import Header from './components/Header';
import { ProjectContext } from './store/context';
import MostPopular from './components/MostPopular';
import Menu from './components/Menu';
import Cart from './components/Cart';

function Main() {
  return (
    <section className="Meals_container__KVvKq">
      <div className="Meals_meals__KtzY1">
        <MostPopular />
        <Menu />
      </div>
    </section>
  );
}

function App() {
  const { state, dispatch } = useContext(ProjectContext);
  const { visiblePage } = state;
  
  return (
    <>
      <Header />
      {visiblePage === 'main' && <Main />}
      {visiblePage === 'cart' && <Cart />}
    </>
  )
}

export default App;
