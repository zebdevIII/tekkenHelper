import React, { Component } from 'react';
import './App.css';
import Tiptap from './Tiptap/Tiptap.tsx';
import PlayerCharacterButton from "./playerCharacterButton";

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
  /*
    const {playerCharacters, isLoading} = this.state;

    if (isLoading) {
      return <p>Loading...</p>;ls
      <div>
          <h1>Player Character </h1>
            {playerCharacterButton()}
        </div>
    }
    */
    var characterButtons = loadCharacters();
    return (
      <div>
        {characterButtons}
      </div>
    );
  }
}

function loadCharacters(){
  var characterButtons = [];
  for (let i = 1;i<35;i++) {
    var iconPath = "characterIcons/" + i + ".png";
    characterButtons.push(<img className="icon" src={iconPath}  alt={i}/>)
    characterButtons.push(<PlayerCharacterButton />)
  }
  return characterButtons;
}

export default App;
