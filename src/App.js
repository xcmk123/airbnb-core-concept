import logo from './logo.svg';
import './App.css';
import { lazy, Suspense } from 'react';
// import BaseButtonExtendable from './common/button_extendable'
const BaseButtonExtendable = lazy(() => import('./common/button_extendable'))
const BaseButtonCompose = lazy(() => import('./common/button_compose'))
const PrimaryButton = lazy(() => import('./common/button/primary'))
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Suspense fallback={<div>Loading...</div>}>
          <BaseButtonExtendable>
            Airbnb
          </BaseButtonExtendable>
        </Suspense>
        {/* <Suspense fallback={<div>Loading...</div>}>
          <BaseButtonCompose>
            BaseButtonCompose
          </BaseButtonCompose>
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <PrimaryButton>
            PrimaryButton
          </PrimaryButton>
        </Suspense> */}
      </header>
    </div>
  );
}

export default App;
