import React from 'react';
import PostForm from './components/PostForm'
import logo from './logo.svg';
import './App.css';


import Posts from './components/Posts'
import { Provider } from 'react-redux'
import store from './store'



class App extends React.Component {
  render(){
    return (
      <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <PostForm />
        <Posts />
      </div>
      </Provider>
    );
  }
}

export default App;
