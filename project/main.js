var scene, camera, renderer, mesh;
var meshFloor, ambientLight, light;

var createWall;

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
    new THREE.PlaneGeometry(50, 30, 10, 10),
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
  scene.add(light);

  var textureLoader = new THREE.TextureLoader(loadingManager);
  wallTexture = textureLoader.load('images/wall_difuse.jpg');
  wallBumpMap = textureLoader.load('images/wall_bump.jpg');
  wallNormalMap = textureLoader.load('images/wall_normal.jpg');

  wall = new THREE.Mesh(
    new THREE.BoxGeometry(14, 12, 8),
    new THREE.MeshPhongMaterial({
      color: 0xffffff,
      map: wallTexture,
      bumpMap: wallBumpMap,
      normalMap: wallNormalMap,
    })
  );
  wallx = new THREE.Mesh(
    new THREE.BoxGeometry(14, 12, 8),
    new THREE.MeshPhongMaterial({
      color: 0xffffff,
      map: wallTexture,
      bumpMap: wallBumpMap,
      normalMap: wallNormalMap,
    })
  );

  scene.add(wall);
  wall.position.set(10.5, 5, 7.5);
  wall.rotation.y += 1.55;
  wall.receiveShadow = true;
  wall.castShadow = true;

  scene.add(wallx);
  wallx.position.set(18, 6, -11);
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
  scene.add(meshes.wall1);

  meshes.wall2.position.set(-14, -1, -4);
  scene.add(meshes.wall2);

  meshes.wall3.position.set(-8, -1, 14);
  meshes.wall3.rotation.y += 1.55;
  scene.add(meshes.wall3);

  meshes.wall4.position.set(3.9, -1, 14.2);
  meshes.wall4.rotation.y += 1.56;
  scene.add(meshes.wall4);
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
