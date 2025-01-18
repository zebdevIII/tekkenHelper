import React, { Component } from 'react';
import './App.css';
import Tiptap from './Tiptap/Tiptap.tsx';
import PlayerCharacterButton from "./playerCharacterButton";
import {getPlayerCharacter} from "./Services/player-character-service";

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

    //require('dotenv').config()
    const characterButtons = loadCharacters();
    return (
      <div>
      <button
          onClick={onPress}
          title="Get Values"
      />
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

function onPress(){
  alert("alert working")
  getPlayerCharacter(1);
}

export default App;
