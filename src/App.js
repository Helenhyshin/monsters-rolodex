import React, { Component } from 'react'
import {CardList} from './components/card-list/card-list.component'
import {SearchBox} from "./components/search-box/search-box"
import './App.css';

class App extends Component {
  constructor(){
    super()

    this.state ={
      monsters: [],
      searchField: ""
    }
  }

  componentDidMount() {
    fetch ('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}))
  }

  render() {
    const { monsters, searchField } = this.state;
    // filters monsters by taking lower cased value entered in text field and finding matching monster names
    const filteredMonsters = monsters.filter( monster => monster.name.toLowerCase().includes(searchField.toLowerCase()) )

    return(
      <div className="App">
        <h1>Monster Rolodex</h1>
        <SearchBox 
          placeholder="search monsters"
          handleChange= {e => this.setState({ searchField: e.target.value })}/>
        <CardList monsters={filteredMonsters}/>
      </div>
    )
  }
}

export default App;
