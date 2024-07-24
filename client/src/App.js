import React, { Component } from 'react';
import './App.css';
import Tiptap from './Tiptap/Tiptap.tsx';

class App extends Component {
  state = {
    isLoading: true,
    playerCharacters: [],
    user: [],
  };

  async componentDidMount() {
    const response = await fetch('/api/playercharacters');
    const body = await response.json();
    this.setState({playerCharacters: body._embedded.playercharacters, isLoading: false});
  }

  render() {
    const {playerCharacters, isLoading} = this.state;

    if (isLoading) {
      return <p>Loading...</p>;
    }

    return (
          <div className="App-intro">
            <h2>Data Example</h2>
            <div> {playerCharacters[0].text} </div>
            <div className="characterScreen">
                <Tiptap />
            </div>
          </div>
    );
  }
}

export default App;
