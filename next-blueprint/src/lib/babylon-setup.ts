import * as BABYLON from '@babylonjs/core'

/**
 * Initialize babylon.js scene with sleek, modern, elegant background
 * Features: flowing geometries, smooth animations, sophisticated lighting
 */
export const createBabylonScene = (canvas: HTMLCanvasElement): BABYLON.Engine => {
  const engine = new BABYLON.Engine(canvas, true, { 
    preserveDrawingBuffer: true, 
    antialias: true,
    stencil: true,
  })

  const scene = new BABYLON.Scene(engine)
  scene.clearColor = new BABYLON.Color4(0.06, 0.09, 0.16, 1) // Dark navy

  // Elegant camera positioning
  const camera = new BABYLON.ArcRotateCamera('camera', Math.PI / 4, Math.PI / 3, 40, BABYLON.Vector3.Zero(), scene)
  camera.attachControl(canvas, true)
  camera.inertia = 0.85
  camera.wheelPrecision = 50
  camera.minZ = 0.1
  camera.maxZ = 1000

  // Sophisticated soft lighting
  const ambientLight = new BABYLON.HemisphericLight('ambientLight', new BABYLON.Vector3(0.5, 1, 0.5), scene)
  ambientLight.intensity = 0.5
  ambientLight.diffuse = new BABYLON.Color3(0.3, 0.35, 0.5)

  // Soft accent light
  const accentLight = new BABYLON.PointLight('accentLight', new BABYLON.Vector3(20, 10, 20), scene)
  accentLight.intensity = 0.8
  accentLight.range = 100
  accentLight.diffuse = new BABYLON.Color3(0, 0.7, 1)

  // Create elegant materials
  const createElegantMaterial = (color: BABYLON.Color3) => {
    const mat = new BABYLON.StandardMaterial('elegantMat', scene)
    mat.emissiveColor = color.scale(0.3)
    mat.specularColor = new BABYLON.Color3(0.3, 0.3, 0.3)
    mat.specularPower = 32
    mat.alpha = 0.95
    return mat
  }

  const matCyan = createElegantMaterial(new BABYLON.Color3(0, 0.7, 1))
  const matBlue = createElegantMaterial(new BABYLON.Color3(0.2, 0.5, 1))

  // Create elegant torus knot-like shape
  const createElegantShape = () => {
    // Create multiple interconnected toruses for elegant look
    const torus1 = BABYLON.MeshBuilder.CreateTorus('torus1', {
      diameter: 15,
      thickness: 1,
      tessellation: 48,
    }, scene)
    torus1.material = matCyan
    torus1.rotation.x = Math.PI / 6

    const torus2 = BABYLON.MeshBuilder.CreateTorus('torus2', {
      diameter: 12,
      thickness: 0.8,
      tessellation: 48,
    }, scene)
    torus2.material = matBlue
    torus2.rotation.z = Math.PI / 4

    const torus3 = BABYLON.MeshBuilder.CreateTorus('torus3', {
      diameter: 9,
      thickness: 0.6,
      tessellation: 48,
    }, scene)
    torus3.material = matCyan
    torus3.rotation.y = Math.PI / 3

    return [torus1, torus2, torus3]
  }

  // Create smooth flowing cylinder
  const cylinder = BABYLON.MeshBuilder.CreateCylinder('cylinder', {
    diameter: 8,
    height: 20,
    tessellation: 64,
  }, scene)
  const cylinderMat = new BABYLON.StandardMaterial('cylinderMat', scene)
  cylinderMat.emissiveColor = new BABYLON.Color3(0, 0.6, 0.8).scale(0.2)
  cylinderMat.wireframe = true
  cylinderMat.alpha = 0.3
  cylinder.material = cylinderMat

  // Create elegant centerpiece - smooth sphere with glow
  const centerSphere = BABYLON.MeshBuilder.CreateSphere('centerSphere', {
    diameter: 4,
    segments: 64,
  }, scene)
  const sphereMat = new BABYLON.StandardMaterial('sphereMat', scene)
  sphereMat.emissiveColor = new BABYLON.Color3(0, 0.8, 1)
  sphereMat.specularColor = new BABYLON.Color3(0.5, 0.5, 0.5)
  sphereMat.specularPower = 64
  centerSphere.material = sphereMat

  const toruses = createElegantShape()

  // Smooth animation loop
  let time = 0
  scene.registerBeforeRender(() => {
    time += 0.008 // Slower, more elegant pace

    // Rotate center sphere gently
    centerSphere.rotation.x += 0.001
    centerSphere.rotation.y += 0.0015
    centerSphere.rotation.z += 0.0008

    // Rotate cylinder
    cylinder.rotation.z += 0.0005
    cylinder.position.y = Math.sin(time * 0.3) * 2

    // Smooth rotation of interconnected toruses
    toruses[0].rotation.x += 0.0008
    toruses[0].rotation.y += 0.0012

    toruses[1].rotation.z += 0.0006
    toruses[1].rotation.x = Math.sin(time * 0.2) * 0.3

    toruses[2].rotation.y += 0.0010
    toruses[2].rotation.z = Math.cos(time * 0.25) * 0.3

    // Subtle camera orbit
    camera.alpha += 0.0001
    camera.beta = Math.PI / 3 + Math.sin(time * 0.1) * 0.15

    // Pulsing light intensity for elegance
    accentLight.intensity = 0.7 + Math.sin(time * 0.5) * 0.2
  })

  // Handle resize
  window.addEventListener('resize', () => {
    engine.resize()
  })

  // Render loop
  engine.runRenderLoop(() => {
    scene.render()
  })

  return engine
}

export type BabylonEngine = BABYLON.Engine
