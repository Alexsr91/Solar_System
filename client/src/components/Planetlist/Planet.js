import axios from 'axios';
import React, { Component, Suspense} from 'react';

import Joder from "./../Joder";
import { Canvas } from "react-three-fiber"
import { OrbitControls, Stars } from "@react-three/drei";

class Planet extends Component {

  state = {
    myModel: null,
    apiInfo: null,
    isPlant: false,
    loading: true
  }


  componentDidMount() {
    axios.get(`/api/planet/${this.props.match.params.planetID}`)
      .then(response => {
        console.log("BBBBBBBBBBBB", response.data);
        this.setState({
          myModel: response.data.myModel,
          apiInfo: response.data.apiInfo,
          isPlanet: response.data.apiInfo.isPlanet,
          loading: false
        })
      })
  }


  render() {
    if (this.state.loading) {
      return <div>Loading .... </div>
    }

    return (
      <div>
      <div>
        <div className="headerPlanet">
          <h1>Welcome to </h1>
          <h1>planet {this.state.apiInfo.englishName}</h1>
          <p>{this.state.myModel.description}</p>
        </div>
      </div>
       <Canvas>
       <OrbitControls />
         <ambientLight intensity={0.6} />
         <directionalLight intensity={0.5} />
         <spotLight position={[0, 1, 1]} angle={0.3} />
         
         <Suspense fallback={null}>
           <Stars count={1000} />
           <Joder position={[0,0,0]} scale={[6,6,6]}/>
           {/* <Jupiter/> */}
         </Suspense>
     </Canvas>
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

