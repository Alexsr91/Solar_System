import React from 'react';
import { Link } from 'react-router-dom';
import Signup from './Signup'
import Login from './Login'

// const orderOfPlanets = [
//     { "Sun": 0 },
//     { "Mercury": 1 },
//     { "Venus": 2 },
//     { "Moon": 3 },
//     { "Earth": 4 },
//     { "Mars": 5 },
//     { "Jupiter": 6 },
//     { "Saturn": 7 },
//     { "Uranus": 8 },
//     { "Neptune": 9 },
//     { "Pluto": 10 }

// ]



class Navbar extends React.Component {
    state = {
        displayLogin: false,
        displaySignup: false
    }
    signUpHandler = () => {
        this.setState({
            displaySignup: true,
            displayLogin: false
        })
    }
    logingHandler = () => {
        this.setState({
            displayLogin: true,
            displaySignup: false
        })
    }


// const orderOfPlanets = [
//     "Sun",
//     "Mercury",
//     "Venus",
//     "Moon",
//     "Earth",
//     "Mars",
//     "Jupiter",
//     "Saturn",
//     "Uranus",
//     "Neptune",
//     "Pluto"
// ]

    // creatingPlanetOrder = () => {
    //     const planetsCopy = [...this.props.planets]
    //     let b = this.orderOfPlanets
    //     // sort function gets each pair -> return negative number if order should be changes / apiReferenceId
    //     // positive number if order is already correct
    //     let sortedArray = planetsCopy.map(e => 
    //     for (let i = 0; i < b.length; ++i) {
    //         if (e.apiReferenceId in b[i]) {
    //             return e[i];
    //         }
    //     })
    // }

    mapOrder = (array, order, key) => {
        array.sort( function (a, b) {
          var A = a[key], B = b[key];
          if (order.indexOf(A) > order.indexOf(B)) {
            return 1;
          } else {
            return -1;
          }
        });
        return array;
      };

      creatingPlanetOrder = () => {
      const planetsCopy = [...this.props.planets]
      const orderOfPlanets = [
        "Sun",
        "Mercury",
        "Venus",
        "Moon",
        "Earth",
        "Mars",
        "Jupiter",
        "Saturn",
        "Uranus",
        "Neptune",
        "Pluto"
    ]
      let result = this.mapOrder(planetsCopy, orderOfPlanets, 'apiReferenceId')
      return (result)
      }



      
    render() {


        let sortedPlanets = this.creatingPlanetOrder();
        console.log("Soooooooooooooooooooooooooooooooo",sortedPlanets);

        return (

            <div className="navbar">
                <div className="nav-content">
                    <div className="logo">SOLAR X</div>
                    

                        {/* <a onClick={this.logingHandler}>Login</a>
                        <a onClick={this.signUpHandler}>Register</a> */}
                        <div className="navegationPlanets">


                            {sortedPlanets.map((planetObj) => {
                                console.log("aaaaaaaaaaaaa", planetObj);
                                return (
                                    <div className="navegationPlanets">
                                        <Link to={planetObj._id} className="navegationPlanets">{planetObj.apiReferenceId}</Link>
                                    </div>
                                )
                            })}
                        </div>
                        


                    </div>
                </div>

                // {this.state.displaySignup && <Signup></Signup>}
                // {this.state.displayLogin && <Login updateCurrentUser={this.props.updateCurrentUser}></Login>}
           
        );
    }
}

export default Navbar;
