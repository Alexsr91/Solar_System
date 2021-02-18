import './App.css';
import { Route, Link, Switch } from 'react-router-dom';
import React, { Component } from 'react';
import axios from 'axios'
import Home from './components/Home'
//Components
// import Planet from './components/Planetlist/Planet'
import Navbar from './components/NavBar'
import Planet from './components/Planetlist/Planet'

class App extends Component {

  state = {
    solarElement: [],
    fromLocal: [],
    loading: true,
    currentUser: this.props.user.userDoc

  }

  componentDidMount() {
    axios.get("/api/planets")
      .then(response => {
        console.log("aaaaaaaaaa", response.data);
        this.setState({
          fromLocal: response.data,
          loading: false
        })

      }).catch(error=>{console.log("Something erroooooooor!!!", error);})
  }

  updateCurrentUser = (userObjFromBackend) => {
    this.setState({
      currentUser: userObjFromBackend
    })
  }

  //Loading
  render() {
    if (this.state.loading) {
      return <div>Loading...</div>
    }



    // let earthlocal = this.state.fromLocal.filter(e => e.apiReferenceId === "Earth");
    // console.log("=============", earthlocal);



    return (
      <div>
        <Navbar planets={this.state.fromLocal} currentUser={this.state.currentUser} updateCurrentUser={this.updateCurrentUser}></Navbar>

        {this.state.currentUser && <p>Hello Mr. {this.state.currentUser.username}</p>}

        <Switch>
          <Route exact path="/" component={Home}>
          
          </Route>
          <Route exact path="/:planetID" render={(props) => <Planet key={props.match.params.planetID} match={props.match}></Planet>}></Route>
        </Switch>
        
      </div>
    );
  }
}


export default App;




