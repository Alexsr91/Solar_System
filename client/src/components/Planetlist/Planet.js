import axios from 'axios';
import React, { Component, Suspense } from 'react';
import { Canvas } from "react-three-fiber"
import { OrbitControls, Stars } from "@react-three/drei";


//planets
import Earth from "./../Earth";
import Mars from "./../Mars";
import Mercury from "./../Mercury";
import Moon from "./../Moon";
import Neptune from "./../Neptune";
import Pluto from "./../Pluto";
import Saturn from "./../Saturn";
import Sun from "./../Sun";
import Uranus from "./../Uranus";
import Jupiter from "./../Jupiter";
import Venus from "./../Venus";


class Planet extends Component {

  state = {
    myModel: null,
    apiInfo: null,
    isPlant: false,
    loading: true,
    displayFull: false,
    hide: true,

  }


  componentDidMount() {
    axios.get(`/api/planet/${this.props.match.params.planetID}`)
      .then(response => {
        console.log("BBBBBBBBBBBB", response.data);
        this.setState({
          myModel: response.data.myModel,
          apiInfo: response.data.apiInfo,
          isPlanet: response.data.apiInfo.isPlanet,
          loading: false,

        })
      })
  }

  hideHandler = () => {
    this.setState({
      displayFull: true,
      hide: false,
    })
  }

  showHandler = () => {
    this.setState({
      displayFull: false,
      hide: true,
    })
  }




  render() {
    if (this.state.loading) {
      return <div>Loading .... </div>
    }

    let comp = null
  if (this.state.apiInfo.id === "soleil") {
    comp = <Sun/> 
  }
  if (this.state.apiInfo.id === "mercure") {
    comp = <Mercury/>
  }
  if (this.state.apiInfo.id === "venus") {
    comp = <Venus/>
  }
  if (this.state.apiInfo.id === "lune") {
    comp = <Moon/>
  }
  if (this.state.apiInfo.id === "terre") {
    comp = <Earth position={[0, 0, 0]} scale={[6, 6, 6]} />
  }
  if (this.state.apiInfo.id === "mars") {
    comp = <Mars/>
  }
  if (this.state.apiInfo.id === "jupiter") {
    comp = <Jupiter/>
  }
  if (this.state.apiInfo.id === "saturne") {
    comp = <Saturn/>
  }
  if (this.state.apiInfo.id === "uranus") {
    comp = <Uranus/>
  }
  if (this.state.apiInfo.id === "neptune") {
    comp = <Neptune />
  }
  if (this.state.apiInfo.id === "pluton") {
    comp = <Pluto />
  }
  

    return (
      <div>
      <div className="header">
        {this.state.hide &&
          <div className="headerPlanet">
            <h1>Welcome to {this.state.apiInfo.englishName}</h1>
            <p>{this.state.myModel.description}</p>
            <div className="extra_info">
              <div className="block">
                <h5>Density</h5>
                <h2>{this.state.apiInfo.density}</h2>
              </div>
              <div class="vl"></div>
              <div className="line"></div>
              <div className="block">
                <h5>Gravity</h5>
                <h2>{this.state.apiInfo.gravity}</h2>
              </div>
              <div class="vl"></div>
              <div className="line"></div>
              <div className="block">
                <h5>Inclination</h5>
                <h2>{this.state.apiInfo.inclination}</h2>
              </div>
              <div class="vl"></div>
              <div className="block">
                <h5>Inclination</h5>
                <h2>{this.state.apiInfo.sideralOrbit}</h2>
              </div>
            </div>
          </div>
        }


        <div className="canvasContainer">
          <Canvas className="canvas">
            <OrbitControls />
            <ambientLight intensity={0.6} />
            <directionalLight intensity={0.5} />
            <spotLight position={[-7, 3, 1]} angle={0.3} />

            <Suspense fallback={null}>
              {this.state.displayFull && <Stars count={1000} />}
              {comp}
            </Suspense>
          </Canvas>
        </div>
        
      </div>
      
      {this.state.hide && <div className="btn">
      <a onClick={this.hideHandler} >LONG VIEW</a>
      </div>}

      {this.state.displayFull && <div className="btn">
      <a onClick={this.showHandler} >X</a>
      </div>}
      

      </div>

    )
  }
}

export default Planet;


// render() {
//   if (this.state.loading) {
//     return <div>Loading .... </div>
//   }

//   let comp = null
//   if (this.state.apiInfo.id === "venus") {
//     comp = <Joder />
//   }
//   return (
//     <Canvas>
//     <OrbitControls />
//       <ambientLight intensity={0.6} />
//       <directionalLight intensity={0.5} />
//       <spotLight position={[0, 1, 1]} angle={0.3} />

//       <Suspense fallback={null}>
//         <Stars count={1000} />

//         {comp}
//         {/* <Jupiter/> */}
//       </Suspense>
//   </Canvas>

//   )
// }

