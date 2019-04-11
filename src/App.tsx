import React, { Component } from 'react';
import { Provider } from 'react-redux';
import ProjectsPage  from './pages/ProjectsPage';
import store from './store';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <ProjectsPage/>
        </div>
      </Provider> 
    );
  }
}

export default App; 
