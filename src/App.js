// IMPORT PACKAGES
import React from 'react';
import { Provider } from 'react-redux';
import { createAppStore } from './components/state/stores/AppStore';
import { AppRouter } from './components/routers/AppRouter';
// import logo from './logo.svg';
import './App.css';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

// export default App;

// COMPONENT

export const App = () => (
    <Provider store={createAppStore()}>
        <div>
            <AppRouter />
        </div>
    </Provider>
);