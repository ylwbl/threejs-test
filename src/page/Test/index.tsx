import React, { Component } from "react";
// import {
//   Scene,
//   BoxGeometry,
//   PerspectiveCamera,
//   Mesh,
//   MeshNormalMaterial,
//   WebGLRenderer,
// } from "three";

import * as THREE from 'three';

// init

const camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.01, 10 );
camera.position.z = 1;

const scene = new THREE.Scene();

const geometry = new THREE.BoxGeometry( 0.2, 0.2, 0.2 );
const material = new THREE.MeshNormalMaterial();

const mesh = new THREE.Mesh( geometry, material );
scene.add( mesh );

const renderer = new THREE.WebGLRenderer( { antialias: true } );
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setAnimationLoop( animation );
document.body.appendChild( renderer.domElement );

// animation

function animation( time: number ) {

	mesh.rotation.x = time / 2000;
	mesh.rotation.y = time / 1000;

	renderer.render( scene, camera );

}

class Test extends Component {
  constructor(props: any) {
    super(props);
    this.state = {
      // scene: new Scene(),
      // geometry: new BoxGeometry(0.2, 0.2, 0.2),
      // camera: new PerspectiveCamera(
      //   70,
      //   window.innerWidth / window.innerHeight,
      //   0.01,
      //   10
      // ),
      // material: new MeshNormalMaterial(),
      // mesh: null,
      // renderer: null,
    };
  }
  // componentDidMount() {
  //   this.setState(
  //     {
  //       mesh: new Mesh(this.state.geometry, this.state.material),
  //       renderer: new WebGLRenderer({ antialias: true }),
  //     },
  //     () => {
  //       this.state.renderer.setSize(window.innerWidth, window.innerHeight);
  //       this.state.renderer.setAnimationLoop(this.animation);
  //       this.state.scene.add(this.state.mesh);
  //     }
  //   );
  // }
  // animation = (time) => {
  //   this.state.mesh.rotation.x = time / 2000;
	//   this.state.mesh.rotation.y = time / 1000;

	// this.state.renderer.render( this.state.scene, this.state.camera );
  // };
  render() {
    return <div>{}</div>;
  }
}
export default Test;