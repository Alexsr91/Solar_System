import './App.css';
import { Route, Link, Switch } from 'react-router-dom';
import React, { Component } from 'react';
import axios from 'axios'

//Components
// import Planet from './components/Planetlist/Planet'
import Navbar from './components/NavBar'
import Signup from './components/Signup'
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

      })
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
        <Navbar currentUser={this.state.currentUser} updateCurrentUser={this.updateCurrentUser}></Navbar>

        {this.state.currentUser && <p>Hello Mr. {this.state.currentUser.username}</p>}


        <Switch>
          <Route path="/home" >
            <p>Home Page, Hello :-)</p>
            {this.state.fromLocal.map((planetObj) => {
              return (
                <div>
                  <Link to={planetObj._id}>{planetObj.apiReferenceId}</Link>
                </div>
              )
            })}
          </Route>
          <Route path="/:planetID" render={(props) => <Planet key={props.match.params.planetID} match={props.match}></Planet>}></Route>
        </Switch>
        
      </div>
    );
  }
}


export default App;




