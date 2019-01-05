import {
  BoxGeometry, MeshBasicMaterial, Mesh
} from 'three'

export default class Cube {
  constructor() {
    const mesh = new Mesh(
      new BoxGeometry( 1, 1, 1 ),
      new MeshBasicMaterial({ color: 0x00ff00 })
    )

    this.animate = () => {
      mesh.rotation.y += 0.01
      mesh.rotation.x += 0.005
    }

    this.getMesh = () => mesh
  }
}
