import React, { Suspense, lazy } from 'react';
import './App.css';

const Header = lazy(() => import('./components/Header'));
const Main = lazy(() => import('./components/Main'));
const Footer = lazy(() => import('./components/Footer'));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        <Header />
        <Main />
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
