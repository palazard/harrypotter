import { Component } from 'react';
import Character from '../components/Character.js';
import TestButton from '../components/TestButton.js';
import './App.css';
import Circle from '../components/Circle.js';


class App extends Component {
  constructor(){
    super();
    this.state={
      characters:[],
      trigger: 0,
      ramdomCharacter: 0,
      animationFinished: 0
    }
  }
  
  //setting characters with API Harry Potter https://hp-api.onrender.com/
  componentDidMount() {
    fetch("https://hp-api.onrender.com/api/characters")
    .then(resp=> resp.json())
    .then(data=>this.setState({characters: data.filter(character => character.image !== "")}))
    .catch((err)=> alert("Sorry, Harry Potter API failed loading"));
  }

  //when button to get result click, change text and set triger so result can appear (if/else on rendering)
  handleClick = () => {
    this.setState({ramdomCharacter : this.state.characters[Math.floor(Math.random()*this.state.characters.length)]});   
    this.setState({trigger:1});
    //to reset the trigger for animation before rendering result
    this.setState({animationFinished:0});
  }

  // funtion for little animation before rendering result
  circleAnimationEnd = () => {
    this.setState({animationFinished:1});
  }


  render(){
    const {characters, trigger, ramdomCharacter, animationFinished} = this.state;
    //if characters from API still loading
    return !characters.length ?
       <p>Loading</p>
    // if loaded: initial screen
    : !trigger ?
          <div>
              <p>
                Which character of Harry Potter are you?
              </p>
              <TestButton onClick={this.handleClick} textButton="Figure it out!"/>
          </div>
    //when button click animation start
    : !animationFinished ?
          <div>
              <Circle circleAnimationEnd={this.circleAnimationEnd}/>
          </div>
      //when animation end, result appear on screen
      : <div>
            <Character character={ramdomCharacter}/>
            <TestButton onClick={this.handleClick} textButton="Test again!"/>
        </div>

  }
}

export default App;
