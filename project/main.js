var scene, camera, renderer, mesh;
var meshFloor, ambientLight, light;

var createWall;

var crate1, crateTexture1, crateNormalMap1, crateBumpMap1, createWall1;

var keyboard = {};
var player = { height: 1.8, speed: 0.2, turnSpeed: Math.PI * 0.02 };

var loadingScreen = {
  scene: new THREE.Scene(),
  camera: new THREE.PerspectiveCamera(90, 1280 / 720, 0.1, 100),
  box: new THREE.Mesh(
    new THREE.BoxGeometry(0.5, 0.5, 0.5),
    new THREE.MeshBasicMaterial({ color: 0x4444ff })
  ),
};
var loadingManager = null;
var RESOURCES_LOADED = false;

var models = {
  wall: {
    obj: 'models/wall.obj',
    mtl: 'models/wall.mtl',
    mesh: null,
    map: createWall,
  },
};

// Meshes index
var meshes = {};

function init() {
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(90, 1280 / 720, 0.1, 1000);

  loadingManager = new THREE.LoadingManager();
  loadingManager.onProgress = function (item, loaded, total) {
    console.log('item: ', item, ' cargados: ', loaded, ' de: ', total);
  };
  loadingManager.onLoad = function () {
    console.log('se cargo todos los recursos');
    RESOURCES_LOADED = true;
    onResourcesLoaded();
  };

  meshFloor = new THREE.Mesh(
    new THREE.PlaneGeometry(160, 100, 10, 10),
    new THREE.MeshPhongMaterial({ color: 0xffffff })
  );
  meshFloor.rotation.x -= Math.PI / 2;
  meshFloor.receiveShadow = true;
  scene.add(meshFloor);

  ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
  scene.add(ambientLight);

  light = new THREE.PointLight(0xffffff, 0.9, 18);
  light.position.set(-3, 6, -3);
  light.castShadow = true;
  light.shadow.camera.near = 0.1;
  light.shadow.camera.far = 20;
  //scene.add(light);

  var textureLoader = new THREE.TextureLoader(loadingManager);
  wallTexture = textureLoader.load('images/wall_difuse.jpg');
  wallBumpMap = textureLoader.load('images/wall_bump.jpg');
  wallNormalMap = textureLoader.load('images/wall_normal.jpg');

  //  bloques de henry
  crateTexture1 = new textureLoader.load('images/wall_difuse.jpg');
  crateBumpMap1 = new textureLoader.load('images/wall_bump.jpg');

  crate1 = new THREE.Mesh(
    new THREE.BoxGeometry(20, 20, 20),
    new THREE.MeshPhongMaterial({
      color: 0xffffff,
      map: crateTexture1,
      bumpMap: crateBumpMap1,
    })
  );
  //scene.add(crate1);
  crate1.position.set(10, 10, 0);

  //cono
  //var geometry = new THREE.ConeGeometry( 5, 90, 4, 10 );
  //ConeGeometry (radio: Float , altura: Float , radialSegments: Integer , heightSegments: Integer , openEnded: Boolean , thetaStart: Float , thetaLength: Float )
  //var material = new THREE.MeshBasicMaterial( {color: 0xccc});
  //var cone = new THREE.Mesh( geometry, material );
  //scene.add( cone );
  //cone.position.set(0,50, 0);

    // esfera
    //SphereGeometry(radius : Float, widthSegments : Integer, heightSegments : Integer, phiStart : Float, phiLength : Float, thetaStart : Float, thetaLength : Float)
  var geometry = new THREE.SphereGeometry( 8, 30, 6 );
  var material = new THREE.MeshBasicMaterial( {color: 0x444444} );
  var sphere = new THREE.Mesh( geometry, material );
  //scene.add( sphere );
 //cone.position.set(0,50, 0);
    //cilindro largo
    //CylinderGeometry(radiusTop : Float, radiusBottom : Float, height : Float, radialSegments : Integer, heightSegments : Integer, openEnded : Boolean, thetaStart : Float, thetaLength : Float)
  var geometry = new THREE.CylinderGeometry( 1, 7, 80, 4 );
  var cylinder = new THREE.Mesh( geometry, material );
  scene.add( cylinder );
  cylinder.position.set(1.5,40, 0);

   //cilindro base
    //CylinderGeometry(radiusTop : Float, radiusBottom : Float, height : Float, radialSegments : Integer, heightSegments : Integer, openEnded : Boolean, thetaStart : Float, thetaLength : Float)
    var geometry1 = new THREE.CylinderGeometry( 10, 10, 4, 20 );
    var material2 = new THREE.MeshBasicMaterial( {color: 0x555555} );
    var cylinder1 = new THREE.Mesh( geometry1, material2 );
    scene.add( cylinder1 );
    cylinder1.position.set(0,0, 0);
    var geometry2 = new THREE.CylinderGeometry( 9, 10, 1, 20 );
    var material3 = new THREE.MeshBasicMaterial( {color: 0xfff} );
    var cylinder2 = new THREE.Mesh( geometry2, material3 );
    scene.add( cylinder2 );
    cylinder2.position.set(0,2.5, 0);
    var geometry3 = new THREE.CylinderGeometry( 8, 9, 1, 20 );
    var cylinder3 = new THREE.Mesh( geometry3, material2 );
    scene.add( cylinder3 );
    cylinder3.position.set(0,3, 0);
    //nombre placa 
    var geometry4 = new THREE.CylinderGeometry( 4, 4, 6, 20 );
    var cylinder4 = new THREE.Mesh( geometry4, material3 );
    scene.add( cylinder4 );
    cylinder4.position.set(-1.8,6, 0);
  // fin bloques de henry

  // Cargar modelos

  for (var _key in models) {
    (function (key) {
      var mtlLoader = new THREE.MTLLoader(loadingManager);
      mtlLoader.load(models[key].mtl, function (materials) {
        materials.preload();

        var objLoader = new THREE.OBJLoader(loadingManager);

        objLoader.setMaterials(materials);
        objLoader.load(models[key].obj, function (mesh) {
          mesh.traverse(function (node) {
            if (node instanceof THREE.Mesh) {
              if ('castShadow' in models[key])
                node.castShadow = models[key].castShadow;
              else node.castShadow = true;

              if ('receiveShadow' in models[key])
                node.receiveShadow = models[key].receiveShadow;
              else node.receiveShadow = true;
            }
          });
          models[key].mesh = mesh;
        });
      });
    })(_key);
  }

  camera.position.set(0, player.height, -5);
  camera.lookAt(new THREE.Vector3(0, player.height, 0));

  renderer = new THREE.WebGLRenderer();
  renderer.setSize(1280, 720);

  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.BasicShadowMap;

  document.body.appendChild(renderer.domElement);

  animate();
}

function onResourcesLoaded() {
  meshes.wall1 = models.wall.mesh.clone();

  meshes.wall1.position.set(-14, -1, 8);
  scene.add(meshes.wall1);
}

function animate() {
  // Play the loading screen until resources are loaded.
  if (RESOURCES_LOADED == false) {
    requestAnimationFrame(animate);

    loadingScreen.box.position.x -= 0.05;
    if (loadingScreen.box.position.x < -10) loadingScreen.box.position.x = 10;
    loadingScreen.box.position.y = Math.sin(loadingScreen.box.position.x);

    renderer.render(loadingScreen.scene, loadingScreen.camera);
    return;
  }

  requestAnimationFrame(animate);

  var time = Date.now() * 0.0005;

  if (keyboard[87]) {
    // tecla W
    camera.position.x -= Math.sin(camera.rotation.y) * player.speed;
    camera.position.z -= -Math.cos(camera.rotation.y) * player.speed;
  }
  if (keyboard[83]) {
    // tecla S
    camera.position.x += Math.sin(camera.rotation.y) * player.speed;
    camera.position.z += -Math.cos(camera.rotation.y) * player.speed;
  }
  if (keyboard[65]) {
    // tecla A
    camera.position.x +=
      Math.sin(camera.rotation.y + Math.PI / 2) * player.speed;
    camera.position.z +=
      -Math.cos(camera.rotation.y + Math.PI / 2) * player.speed;
  }
  if (keyboard[68]) {
    // tecla D
    camera.position.x +=
      Math.sin(camera.rotation.y - Math.PI / 2) * player.speed;
    camera.position.z +=
      -Math.cos(camera.rotation.y - Math.PI / 2) * player.speed;
  }

  if (keyboard[37]) {
    // flecha izquierda
    camera.rotation.y -= player.turnSpeed;
  }
  if (keyboard[39]) {
    // flecha derecha
    camera.rotation.y += player.turnSpeed;
  }

  renderer.render(scene, camera);
}

function keyDown(event) {
  keyboard[event.keyCode] = true;
}

function keyUp(event) {
  keyboard[event.keyCode] = false;
}

window.addEventListener('keydown', keyDown);
window.addEventListener('keyup', keyUp);

window.onload = init;
