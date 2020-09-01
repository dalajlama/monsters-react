import React, {Component} from 'react';
import './App.css';
import  {CardList} from "./components/card-list/card-list.component";
import { SearchBox } from './components/search-box/search-box.component';
import Title from './components/title/title';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      monsters: [],
      searchField: ''
    };
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({monsters: users}));
  }

  render(){
    //Destructuring 
    const{monsters, searchField} = this.state;
    // to je isto kao
    /*cost monsters = this.state.monsters;
    cost searchField = this.state.searchField;
    */
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase()));


  return (
    <div className="App">
      <Title/>
        <SearchBox 
          placeholder='Search ...'
          handleChange={e => this.setState({searchField: e.target.value})}
          />
      <CardList monsters = {filteredMonsters}/>
    </div>
  );
  }
}

export default App;
