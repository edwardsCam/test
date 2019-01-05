import React from 'react'
import {
  Scene, PerspectiveCamera, WebGLRenderer,
  BoxGeometry, MeshBasicMaterial, Mesh
} from 'three'
import Cube from './cube'
import styles from './App.scss'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.ref = React.createRef()
    this.scene = new Scene()
    this.camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    this.renderer = new WebGLRenderer()
  }

  componentDidMount() {
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setClearColor(0xf7f7e2, 1)
    this.ref.current.appendChild(this.renderer.domElement);
    this.camera.position.z = 5;

    this.cube = new Cube()
    this.scene.add(this.cube.getMesh())
    this.animate()
  }

  render() {
    return (
      <div ref={this.ref} />
    )
  }

  animate() {
    this.cube.animate()
    this.renderer.render(this.scene, this.camera);
    requestAnimationFrame(() => this.animate());
  }
}
