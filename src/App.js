// import { Component } from 'react';

// //import logo from './logo.svg';
// import './App.css';
// import CardList from './components/card-list/card-list.components';
// import SearchBox from './components/search-box/search-box.component';

// class App extends Component{

//   constructor() {
//     //console.log("App_constructor");
//     super();

//     this.state = {
//       Monsters: [],
//       searchField: "",
//     }
//     console.log(this.state.Monsters)
//   }
  
//   componentDidMount(){
//     //console.log("App_componentDidMount")
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then((resp) => resp.json())
//     .then((users) => this.setState(() => {
//       return { Monsters: users }
//     }, () => {
//       console.log( this.state.Monsters )
//     }))
//   }

//   onSearchChange = (event) => {
//     const searchField = event.target.value.toLowerCase();
//     console.log({ searchField }); //within curly braces, returns object, remove curly braces, returns value
//     this.setState (() => {
//       return { searchField }
//     })
//   }

//   render() {
//     const { Monsters, searchField } = this.state;
//     const { onSearchChange } = this;

//     const filteredMonster = Monsters.filter((monster) => {
//       if(monster.name.toLowerCase().includes(searchField))
//         return monster.name.toLowerCase().includes(searchField);
//       else
//         return monster.email.toLowerCase().includes(searchField);
//     })

//     //console.log("App_render")

//     return (
//       <div className="App">
//         <h1 className='app-title'>Monsters Rolodex</h1>
//           <SearchBox 
//             onChangeHandler = { onSearchChange }
//             placeholder = "Search-Monsters"
//             className = "search-box"
//           />
//           <CardList monsters = { filteredMonster }/>
//       </div> 
//     );
//   }
// }

// export default App;


// import { useState, useEffect } from 'react';

// import CardList from './components/card-list/card-list.components';
// import SearchBox from './components/search-box/search-box.component';
// import './App.css';

// const App = () => {
//   console.log("Render");

//   const [searchField, setSearchField] = useState('');
//   const [monsters, setMonsters] = useState([]);
//   //const [searchString, setSearchString] = useState('searchString-empty');
//   const [filteredMonsters, setFilterMonsters] = useState(monsters);

//   useEffect(() => {
//     console.log("fetch");
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then((response) => response.json())
//       .then((users) => setMonsters(users));
//   }, []);

//   useEffect(() => {
//     console.log("filter");
//     const newFilteredMonsters = monsters.filter((monster) => {
//       return monster.name.toLocaleLowerCase().includes(searchField);
//     });

//     setFilterMonsters(newFilteredMonsters);
//     console.log(newFilteredMonsters);
//   }, [monsters, searchField]);

//   const onSearchChange = (event) => {
//     const searchFieldString = event.target.value.toLocaleLowerCase();
//     setSearchField(searchFieldString);
//   };

//   // const onStringChange = (event) => {
//   //   setSearchString(event.target.value);
//   // }

//   return (
//     <div className='App'>
//       <h1 className='app-title'>Monsters Rolodex</h1>

//       <SearchBox
//         className='monsters-search-box'
//         onChangeHandler={onSearchChange}
//         placeholder='search monsters'
//       />

//       {
//         console.log("return")
//       }

//       {/* <SearchBox
//         onChangeHandler={onStringChange}
//         placeholder='search string'
//       /> */}

//       <CardList monsters={filteredMonsters} />
//     </div>
//   );
// };

// export default App;

import CardList from './components/card-list/card-list.components';
import SearchBox from './components/search-box/search-box.component';
import { useEffect, useState } from 'react';
import './App.css';

const App = () => {

  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilterMonsters] = useState(monsters);
  //const [searchString, setSearchString] = useState('');

  console.log('render');

  useEffect(() => {
    console.log("Fetch is firing");
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((resp) => resp.json())
    .then((users) => setMonsters(users))
  },[])

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField);
    });
    
    setFilterMonsters(newFilteredMonsters);
    console.log("filteredMonsters");
  }, [monsters, searchField]);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLowerCase();
    setSearchField(searchFieldString);
  }

  // const onStringChange = (event) => {
  //   setSearchString(event.target.value)
  // } 

  return (
    <div className="App">
      <h1 className='app-title'>ECE Rolodex</h1>
      <SearchBox 
        onChangeHandler = { onSearchChange }
        placeholder = "Search-Monsters"
        className = "search-box"
      />

      {console.log("Return")}
      
      {/* <SearchBox 
        onChangeHandler = { onStringChange }
        placeholder = "StringChange"
      /> */}

      <CardList monsters = { filteredMonsters }/>
        
    </div> 
  );
}

export default App;