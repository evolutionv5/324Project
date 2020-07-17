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
  uzi: {
    obj: 'models/uziGold.obj',
    mtl: 'models/uziGold.mtl',

    mesh: null,
    castShadow: false,
  },
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
  //meshFloor.position.set(0, 0, 0);

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
  var textureLoader = new THREE.TextureLoader();
  crateTexture1 = new textureLoader.load('images/wall_difuse.jpg');
  crateBumpMap1 = new textureLoader.load('images/wall_bump.jpg');

  crate1 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 20, 100),
    new THREE.MeshPhongMaterial({
      color: 0xffffff,
      map: crateTexture1,
      bumpMap: crateBumpMap1,
    })
  );
  scene.add(crate1);
  crate1.position.set(-80, 10, 0);

  crate2 = new THREE.Mesh(
    new THREE.BoxGeometry(160, 20, 1),
    new THREE.MeshPhongMaterial({
      color: 0xffffff,
      map: crateTexture1,
      bumpMap: crateBumpMap1,
    })
  );
  scene.add(crate2);
  crate2.position.set(0, 10, -50);

  // fin bloques de henry

  wall = new THREE.Mesh(
    new THREE.BoxGeometry(160, 20, 1),
    new THREE.MeshPhongMaterial({
      color: 0xffffff,
      map: wallTexture,
      bumpMap: wallBumpMap,
      normalMap: wallNormalMap,
    })
  );
  pared1 = new THREE.Mesh(
    new THREE.BoxGeometry(100, 20, 1),
    new THREE.MeshPhongMaterial({
      color: 0xffffff,
      map: wallTexture,
      bumpMap: wallBumpMap,
      normalMap: wallNormalMap,
    })
  );
  pared2 = new THREE.Mesh(
    new THREE.BoxGeometry(80, 20, 1),
    new THREE.MeshPhongMaterial({
      color: 0xffffff,
      map: wallTexture,
      bumpMap: wallBumpMap,
      normalMap: wallNormalMap,
    })
  );
  pared3 = new THREE.Mesh(
    new THREE.BoxGeometry(30, 20, 1),
    new THREE.MeshPhongMaterial({
      color: 0xffffff,
      map: wallTexture,
      bumpMap: wallBumpMap,
      normalMap: wallNormalMap,
    })
  );
  pared4 = new THREE.Mesh(
    new THREE.BoxGeometry(20, 20, 1),
    new THREE.MeshPhongMaterial({
      color: 0xffffff,
      map: wallTexture,
      bumpMap: wallBumpMap,
      normalMap: wallNormalMap,
    })
  );
  pared5 = new THREE.Mesh(
    new THREE.BoxGeometry(10, 20, 1),
    new THREE.MeshPhongMaterial({
      color: 0xffffff,
      map: wallTexture,
      bumpMap: wallBumpMap,
      normalMap: wallNormalMap,
    })
  );
  pared6 = new THREE.Mesh(
    new THREE.BoxGeometry(90, 20, 1),
    new THREE.MeshPhongMaterial({
      color: 0xffffff,
      map: wallTexture,
      bumpMap: wallBumpMap,
      normalMap: wallNormalMap,
    })
  );
  pared7 = new THREE.Mesh(
    new THREE.BoxGeometry(80, 20, 1),
    new THREE.MeshPhongMaterial({
      color: 0xffffff,
      map: wallTexture,
      bumpMap: wallBumpMap,
      normalMap: wallNormalMap,
    })
  );
  pared8 = new THREE.Mesh(
    new THREE.BoxGeometry(70, 20, 1),
    new THREE.MeshPhongMaterial({
      color: 0xffffff,
      map: wallTexture,
      bumpMap: wallBumpMap,
      normalMap: wallNormalMap,
    })
  );
  pared9 = new THREE.Mesh(
    new THREE.BoxGeometry(60, 20, 1),
    new THREE.MeshPhongMaterial({
      color: 0xffffff,
      map: wallTexture,
      bumpMap: wallBumpMap,
      normalMap: wallNormalMap,
    })
  );
  pared10 = new THREE.Mesh(
    new THREE.BoxGeometry(50, 20, 1),
    new THREE.MeshPhongMaterial({
      color: 0xffffff,
      map: wallTexture,
      bumpMap: wallBumpMap,
      normalMap: wallNormalMap,
    })
  );
  pared11 = new THREE.Mesh(
    new THREE.BoxGeometry(40, 20, 1),
    new THREE.MeshPhongMaterial({
      color: 0xffffff,
      map: wallTexture,
      bumpMap: wallBumpMap,
      normalMap: wallNormalMap,
    })
  );
  pared12 = new THREE.Mesh(
    new THREE.BoxGeometry(30, 20, 1),
    new THREE.MeshPhongMaterial({
      color: 0xffffff,
      map: wallTexture,
      bumpMap: wallBumpMap,
      normalMap: wallNormalMap,
    })
  );
  pared13 = new THREE.Mesh(
    new THREE.BoxGeometry(20, 20, 1),
    new THREE.MeshPhongMaterial({
      color: 0xffffff,
      map: wallTexture,
      bumpMap: wallBumpMap,
      normalMap: wallNormalMap,
    })
  );
  pared14 = new THREE.Mesh(
    new THREE.BoxGeometry(10, 20, 1),
    new THREE.MeshPhongMaterial({
      color: 0xffffff,
      map: wallTexture,
      bumpMap: wallBumpMap,
      normalMap: wallNormalMap,
    })
  );
  pared15 = new THREE.Mesh(
    new THREE.BoxGeometry(20, 20, 1),
    new THREE.MeshPhongMaterial({
      color: 0xffffff,
      map: wallTexture,
      bumpMap: wallBumpMap,
      normalMap: wallNormalMap,
    })
  );
  pared16 = new THREE.Mesh(
    new THREE.BoxGeometry(30, 20, 1),
    new THREE.MeshPhongMaterial({
      color: 0xffffff,
      map: wallTexture,
      bumpMap: wallBumpMap,
      normalMap: wallNormalMap,
    })
  );
  pared17 = new THREE.Mesh(
    new THREE.BoxGeometry(40, 20, 1),
    new THREE.MeshPhongMaterial({
      color: 0xffffff,
      map: wallTexture,
      bumpMap: wallBumpMap,
      normalMap: wallNormalMap,
    })
  );
  pared18 = new THREE.Mesh(
    new THREE.BoxGeometry(50, 20, 1),
    new THREE.MeshPhongMaterial({
      color: 0xffffff,
      map: wallTexture,
      bumpMap: wallBumpMap,
      normalMap: wallNormalMap,
    })
  );

  scene.add(wall);
  wall.position.set(0, 10, 50);
  wall.rotation.y -= Math.PI * 2;
  wall.receiveShadow = true;
  wall.castShadow = true;
  scene.add(pared1);
  pared1.position.set(80, 10, 0);
  pared1.rotation.y += Math.PI / 2;
  scene.add(pared2);
  pared2.position.set(70, 10, 0);
  pared2.rotation.y += Math.PI / 2;
  scene.add(pared3);
  pared3.position.set(60, 10, 35);
  pared3.rotation.y += Math.PI / 2;
  scene.add(pared4);
  pared4.position.set(60, 10, 0);
  pared4.rotation.y += Math.PI / 2;
  scene.add(pared5);
  pared5.position.set(60, 10, -25);
  pared5.rotation.y += Math.PI / 2;
  scene.add(pared6);
  pared6.position.set(50, 10, 5);
  pared6.rotation.y += Math.PI / 2;
  scene.add(pared7);
  pared7.position.set(40, 10, 10);
  pared7.rotation.y += Math.PI / 2;
  scene.add(pared8);
  pared8.position.set(30, 10, 0);
  pared8.rotation.y += Math.PI / 2;
  scene.add(pared9);
  pared9.position.set(20, 10, 0);
  pared9.rotation.y += Math.PI / 2;
  scene.add(pared10);
  pared10.position.set(10, 10, 0);
  pared10.rotation.y += Math.PI / 2;
  scene.add(pared11);
  pared11.position.set(0, 10, 0);
  pared11.rotation.y += Math.PI / 2;
  scene.add(pared12);
  pared12.position.set(-10, 10, 0);
  pared12.rotation.y += Math.PI / 2;
  scene.add(pared13);
  pared13.position.set(-20, 10, 0);
  pared13.rotation.y += Math.PI / 2;
  scene.add(pared14);
  pared14.position.set(-30, 10, 0);
  pared14.rotation.y += Math.PI / 2;
  scene.add(pared15);
  pared15.position.set(-40, 10, 0);
  pared15.rotation.y += Math.PI / 2;
  scene.add(pared16);
  pared16.position.set(-50, 10, 0);
  pared16.rotation.y += Math.PI / 2;
  scene.add(pared17);
  pared17.position.set(-60, 10, 0);
  pared17.rotation.y += Math.PI / 2;
  scene.add(pared18);
  pared18.position.set(-70, 10, 0);
  pared18.rotation.y += Math.PI / 2;

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
  meshes.wall2 = models.wall.mesh.clone();
  meshes.wall3 = models.wall.mesh.clone();
  meshes.wall4 = models.wall.mesh.clone();

  meshes.wall1.position.set(-14, -1, 8);
  // scene.add(meshes.wall1);

  meshes.wall2.position.set(-14, -1, -4);
  // scene.add(meshes.wall2);

  meshes.wall3.position.set(-8, -1, 14);
  meshes.wall3.rotation.y += 1.55;
  // scene.add(meshes.wall3);

  meshes.wall4.position.set(3.9, -1, 14.2);
  meshes.wall4.rotation.y += 1.56;
  // scene.add(meshes.wall4);
  // arma
  meshes.playerweapon = models.uzi.mesh.clone();
  meshes.playerweapon.position.set(0, 2, 0);
  meshes.playerweapon.scale.set(10, 10, 10);
  // scene.add(meshes.playerweapon);
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

  // posicion del arma
  meshes.playerweapon.position.set(
    camera.position.x - Math.sin(camera.rotation.y + Math.PI / 6) * 0.75,
    camera.position.y -
      0.5 +
      Math.sin(time * 4 + camera.position.x + camera.position.z) * 0.01,
    camera.position.z + Math.cos(camera.rotation.y + Math.PI / 6) * 0.75
  );
  meshes.playerweapon.rotation.set(
    camera.rotation.x,
    camera.rotation.y - Math.PI,
    camera.rotation.z
  );

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
