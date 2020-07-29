var scene, camera, renderer, mesh;
var meshFloor, ambientLight, light;

var createWall;

var crate1, crateTexture1, crateNormalMap1, crateBumpMap1, createWall1;

var keyboard = {};
//height 1.8
var player = { height: 10, speed: 1, turnSpeed: Math.PI * 0.02 };

//colores
<<<<<<< HEAD
var plomoclaro = new THREE.MeshPhongMaterial({ color: 0x9da3a4 , wireframe:false });
var verde = new THREE.MeshPhongMaterial({ color: 0x32965d, wireframe:false });
var verdeclaro = new THREE.MeshPhongMaterial({ color: 0x68a357, wireframe:false });
var concreto = new THREE.MeshPhongMaterial({ color: 0x5f7367, wireframe:false });
var blanco = new THREE.MeshPhongMaterial({ color: 0xffffff, wireframe:false });

var plomoraton = new THREE.MeshPhongMaterial({ color: 0x59656f, wireframe:false });
var verdeinge = new THREE.MeshPhongMaterial({ color: 0x216869, wireframe:false });
var rojop = new THREE.MeshPhongMaterial({ color: 0xac3931, wireframe:false });
var azulm = new THREE.MeshPhongMaterial({ color: 0x2374ab, wireframe:false });
var oscuro = new THREE.MeshPhongMaterial({ color: 0x04151f, wireframe:false });
var veis = new THREE.MeshPhongMaterial({ color: 0xd3b88c, wireframe:false });
var blancosu = new THREE.MeshPhongMaterial({ color: 0xf4f2f3, wireframe:false });
var veispuerta = new THREE.MeshPhongMaterial({ color: 0xbca371, wireframe:false });
var verdeoscuro = new THREE.MeshPhongMaterial({ color: 0x2d572c, wireframe:false });
var luz = new THREE.MeshPhongMaterial({ color: 0xffff00, wireframe:false });
var veisclaro = new THREE.MeshPhongMaterial({ color: 0xFDFCDC, wireframe:false });
var plomoesta = new THREE.MeshPhongMaterial({ color: 0x54577C, wireframe:false });
var colortierra = new THREE.MeshPhongMaterial({ color: 0x4e3b31, wireframe:false });
var plomoclaro = new THREE.MeshPhongMaterial({ color: 0x9da3a4, wireframe:false });
var verde = new THREE.MeshPhongMaterial({ color: 0x32965d, wireframe:false });
var verdeclaro = new THREE.MeshPhongMaterial({ color: 0x68a357, wireframe:false });
var concreto = new THREE.MeshPhongMaterial({ color: 0x5f7367, wireframe:false });
var blanco = new THREE.MeshPhongMaterial({ color: 0xffffff, wireframe:false });
=======
var plomoclaro = new THREE.MeshPhongMaterial({
  color: 0x9da3a4,
  wireframe: false,
});
var verde = new THREE.MeshPhongMaterial({ color: 0x32965d, wireframe: false });
var verdeclaro = new THREE.MeshPhongMaterial({
  color: 0x68a357,
  wireframe: false,
});
var concreto = new THREE.MeshPhongMaterial({
  color: 0x5f7367,
  wireframe: false,
});
var blanco = new THREE.MeshPhongMaterial({ color: 0xffffff, wireframe: false });

var plomoraton = new THREE.MeshPhongMaterial({
  color: 0x59656f,
  wireframe: false,
});
var verdeinge = new THREE.MeshPhongMaterial({
  color: 0x216869,
  wireframe: false,
});
var rojop = new THREE.MeshPhongMaterial({ color: 0xac3931, wireframe: false });
var azulm = new THREE.MeshPhongMaterial({ color: 0x2374ab, wireframe: false });
var oscuro = new THREE.MeshPhongMaterial({ color: 0x04151f, wireframe: false });
var veis = new THREE.MeshPhongMaterial({ color: 0xd3b88c, wireframe: false });
var blancosu = new THREE.MeshPhongMaterial({
  color: 0xf4f2f3,
  wireframe: false,
});
var veispuerta = new THREE.MeshPhongMaterial({
  color: 0xbca371,
  wireframe: false,
});
var verdeoscuro = new THREE.MeshPhongMaterial({
  color: 0x2d572c,
  wireframe: false,
});
var luz = new THREE.MeshPhongMaterial({ color: 0xffff00, wireframe: false });
var veisclaro = new THREE.MeshPhongMaterial({
  color: 0xfdfcdc,
  wireframe: false,
});
var plomoesta = new THREE.MeshPhongMaterial({
  color: 0x54577c,
  wireframe: false,
});
var colortierra = new THREE.MeshBasicMaterial({ color: 0x4e3b31 });
var coloramarillo = new THREE.MeshBasicMaterial({ color: 0xf5d033 });
var plomoclaro = new THREE.MeshBasicMaterial({ color: 0x9da3a4 });
var verde = new THREE.MeshBasicMaterial({ color: 0x32965d });
var verdeclaro = new THREE.MeshBasicMaterial({ color: 0x68a357 });
var concreto = new THREE.MeshBasicMaterial({ color: 0x5f7367 });
var blanco = new THREE.MeshBasicMaterial({ color: 0xffffff });
>>>>>>> b35c7993025e4d1337a8e5e0a2d2634cdcb5823b
function init() {
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(90, 1280 / 720, 0.1, 1000);

  meshFloor = new THREE.Mesh(
    //160
    new THREE.PlaneGeometry(800, 300, 10, 10),
    new THREE.MeshPhongMaterial({ color: 0xffffff })
  );
  meshFloor.rotation.x -= Math.PI / 2;
  meshFloor.receiveShadow = true;
  scene.add(meshFloor);

  ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
  scene.add(ambientLight);

  light = new THREE.PointLight(0xffffff, 0.8, 1000);
  light.position.set(0, 50, 3);
  light.castShadow = true;
  // Will not light anything closer than 0.1 units or further than 25 units
  light.shadow.camera.near = 0.1;
  light.shadow.camera.far = 100;
  scene.add(light);

  //cono
  //var geometry = new THREE.ConeGeometry( 5, 90, 4, 10 );
  //ConeGeometry (radio: Float , altura: Float , radialSegments: Integer , heightSegments: Integer , openEnded: Boolean , thetaStart: Float , thetaLength: Float )
  //var material = new THREE.MeshBasicMaterial( {color: 0xccc});
  //var cone = new THREE.Mesh( geometry, material );
  //scene.add( cone );
  //cone.position.set(0,50, 0);

  // esfera
  //SphereGeometry(radius : Float, widthSegments : Integer, heightSegments : Integer, phiStart : Float, phiLength : Float, thetaStart : Float, thetaLength : Float)
  var geometry = new THREE.SphereGeometry(8, 30, 6);
  var material = new THREE.MeshBasicMaterial({ color: 0x444444 });
  var sphere = new THREE.Mesh(geometry, material);
  //scene.add( sphere );
  //cone.position.set(0,50, 0);
  //cilindro largo
  //CylinderGeometry(radiusTop : Float, radiusBottom : Float, height : Float, radialSegments : Integer, heightSegments : Integer, openEnded : Boolean, thetaStart : Float, thetaLength : Float)
  geometry = new THREE.CylinderGeometry(3, 9, 140, 4);
  var cylinder = new THREE.Mesh(geometry, material);
  cylinder.receiveShadow = true;
  cylinder.castShadow = true;
  scene.add(cylinder);
  cylinder.position.set(1.5, 70, 0);
  cylinder.rotation.set(0, 45, 0);
  var delmedio = new THREE.CylinderGeometry(3, 3, 100, 4);
  var colornegro = new THREE.MeshBasicMaterial({ color: 0xdddddd });
  var cmedio = new THREE.Mesh(delmedio, colornegro);
  cmedio.receiveShadow = true;
  cmedio.castShadow = true;
  scene.add(cmedio);
  cmedio.position.set(-2, 40, 0);
  cmedio.rotation.set(0, 0.45, -0.03);
  //piramide
  geometry = new THREE.ConeGeometry(3.1, 3.5, 4);
  material = new THREE.MeshBasicMaterial({ color: 0xffff00 });
  var cone = new THREE.Mesh(geometry, material);
  cone.receiveShadow = true;
  cone.castShadow = true;
  scene.add(cone);
  cone.position.set(1.5, 142, 0);
  cone.rotation.set(0, 45, 0);
  //la punta arriba
  var punta = new THREE.CylinderGeometry(0.2, 0.2, 40, 4);
  var cpunta = new THREE.Mesh(punta, colornegro);
  cpunta.receiveShadow = true;
  cpunta.castShadow = true;
  scene.add(cpunta);
  cpunta.position.set(-0.5, 145, 0);
  cpunta.rotation.set(0, 0, 0);

  //cilindro base
  //CylinderGeometry(radiusTop : Float, radiusBottom : Float, height : Float, radialSegments : Integer, heightSegments : Integer, openEnded : Boolean, thetaStart : Float, thetaLength : Float)
  var geometry1 = new THREE.CylinderGeometry(16, 20, 15, 20);
  var material2 = new THREE.MeshBasicMaterial({ color: 0x555555 });
  var cylinder1 = new THREE.Mesh(geometry1, material2);
  cylinder1.receiveShadow = true;
  cylinder1.castShadow = true;
  scene.add(cylinder1);
  cylinder1.position.set(0, 0, 0);
  var geometry2 = new THREE.CylinderGeometry(13, 13, 3, 20);
  var material3 = new THREE.MeshBasicMaterial({ color: 0xfff });
  var cylinder2 = new THREE.Mesh(geometry2, verde);
  cylinder2.receiveShadow = true;
  cylinder2.castShadow = true;
  scene.add(cylinder2);
  cylinder2.position.set(0, 8, 0);
  var geometry3 = new THREE.CylinderGeometry(13, 16, 2, 20);
  var cylinder3 = new THREE.Mesh(geometry3, veis);
  cylinder3.receiveShadow = true;
  cylinder3.castShadow = true;
  scene.add(cylinder3);
  cylinder3.position.set(0, 8, 0);
  //nombre placa
  var geometry4 = new THREE.CylinderGeometry(8, 8, 10, 20);
  var cylinder4 = new THREE.Mesh(geometry4, plomoesta);
  cylinder4.receiveShadow = true;
  cylinder4.castShadow = true;
  scene.add(cylinder4);
  cylinder4.position.set(-1.8, 13, 0.5);

  //suelo redondo
  var sueloredon = new THREE.CylinderGeometry(20, 20, 0.5, 20);
  material2 = new THREE.MeshBasicMaterial({ color: 0x555555 });
  var csueloredon = new THREE.Mesh(sueloredon, material2);
  csueloredon.receiveShadow = true;
  csueloredon.castShadow = true;
  scene.add(csueloredon);
  csueloredon.position.set(0, 2.35, 0);

  var pasillo = new THREE.CylinderGeometry(27, 27, 0.5, 20);
  var colorp = new THREE.MeshBasicMaterial({ color: 0x808080 });
  var pasillo1 = new THREE.Mesh(pasillo, colorp);
  pasillo1.receiveShadow = true;
  pasillo1.castShadow = true;
  scene.add(pasillo1);
  pasillo1.position.set(0, 1.15, 0);

  //base del soldado caido
  var basesoldado = new THREE.CylinderGeometry(7, 24, 6, 4);
  var colorazul = new THREE.MeshBasicMaterial({ color: 0xfff });
  var cbasesoldado = new THREE.Mesh(basesoldado, colorazul);
  cbasesoldado.receiveShadow = true;
  cbasesoldado.castShadow = true;
  scene.add(cbasesoldado);
  cbasesoldado.position.set(-35, 0, 0);
  cbasesoldado.rotation.set(0, 40, 0);

<<<<<<< HEAD
    //Mesh
    var mesh = new THREE.Mesh(
      new THREE.BoxGeometry(10,10,10),
      new THREE.MeshPhongMaterial({color:0xff4444, wireframe:false})
    );
    mesh.position.set(20, 20,20);
    mesh.receiveShadow = true;
	  mesh.castShadow = true;
	  //scene.add(mesh);
=======
  //Mesh
  var mesh = new THREE.Mesh(
    new THREE.BoxGeometry(10, 10, 10),
    new THREE.MeshPhongMaterial({ color: 0xff4444, wireframe: false })
  );
  mesh.position.set(20, 20, 20);
  mesh.receiveShadow = true;
  mesh.castShadow = true;
  scene.add(mesh);
>>>>>>> b35c7993025e4d1337a8e5e0a2d2634cdcb5823b

  //piedras del Soldado caido
  //BoxGeometry(width : Float, height : Float, depth : Float, widthSegments : Integer, heightSegments : Integer, depthSegments : Integer)
  mesh = new THREE.Mesh(
    new THREE.BoxGeometry(6, 2, 4),
    new THREE.MeshPhongMaterial({ color: 0x00ff00, wireframe: false })
  );

  mesh.position.set(-35, 4, 0);
  mesh.rotation.set(0, 0, 0);
  mesh.receiveShadow = true;
  mesh.castShadow = true;
  scene.add(mesh);
  //cabeza
  var cabeza = new THREE.SphereGeometry(1, 10, 10);
  var spherecabeza = new THREE.Mesh(cabeza, plomoesta);
  spherecabeza.receiveShadow = true;
  spherecabeza.castShadow = true;
  scene.add(spherecabeza);
  spherecabeza.position.set(-39, 4.8, 0);
  //cuerpo
  var cuerpo = new THREE.BoxGeometry(5, 1.8, 3);
  var cubecuerpo = new THREE.Mesh(cuerpo, plomoesta);
  cubecuerpo.receiveShadow = true;
  cubecuerpo.castShadow = true;
  scene.add(cubecuerpo);
  cubecuerpo.position.set(-36, 5.5, 0);
  //brazo izq
  var brazoi = new THREE.BoxGeometry(1, 2, 1);
  var cubebrazoi = new THREE.Mesh(brazoi, plomoesta);
  cubebrazoi.receiveShadow = true;
  cubebrazoi.castShadow = true;
  scene.add(cubebrazoi);
  cubebrazoi.position.set(-38.6, 4.7, 1.4);
  cubebrazoi.rotation.set(0, 1, -0.3);
  //mano izq
  var manoi = new THREE.BoxGeometry(1, 2.4, 1);
  var cubemanoi = new THREE.Mesh(manoi, plomoesta);
  cubemanoi.receiveShadow = true;
  cubemanoi.castShadow = true;
  scene.add(cubemanoi);
  cubemanoi.position.set(-39.6, 3.5, 1.4);
  cubemanoi.rotation.set(0, -0.8, -1.4);
  //brazo der
  var brazod = new THREE.BoxGeometry(1, 2, 1);
  var cubebrazod = new THREE.Mesh(brazod, plomoesta);
  cubebrazod.receiveShadow = true;
  cubebrazod.castShadow = true;
  scene.add(cubebrazod);
  cubebrazod.position.set(-38, 5.1, -2.4);
  cubebrazod.rotation.set(1, 0.5, 0.5);
  //mano der
  var manod = new THREE.BoxGeometry(1, 2.4, 1);
  var cubemanod = new THREE.Mesh(manod, plomoesta);
  cubemanod.receiveShadow = true;
  cubemanod.castShadow = true;
  scene.add(cubemanod);
  cubemanod.position.set(-37.5, 3.8, -3);
  cubemanod.rotation.set(-0.5, 0, 0);

  //parte baja
  var partec = new THREE.BoxGeometry(2, 2, 3);
  var cubepartec = new THREE.Mesh(partec, plomoesta);
  cubepartec.receiveShadow = true;
  cubepartec.castShadow = true;
  scene.add(cubepartec);
  cubepartec.position.set(-32.5, 5.5, 0);
  cubepartec.rotation.set(0, 0, 0);

  //pierna izq
  manod = new THREE.BoxGeometry(1, 3, 1);
  cubemanod = new THREE.Mesh(manod, plomoesta);
  cubemanod.receiveShadow = true;
  cubemanod.castShadow = true;
  scene.add(cubemanod);
  cubemanod.position.set(-31, 4.8, -1.4);
  cubemanod.rotation.set(0.5, 0, 0.4);
  //pie izq
  manod = new THREE.BoxGeometry(1, 3, 1);
  cubemanod = new THREE.Mesh(manod, plomoesta);
  cubemanod.receiveShadow = true;
  cubemanod.castShadow = true;
  scene.add(cubemanod);
  cubemanod.position.set(-29.6, 3.5, -1);
  cubemanod.rotation.set(-1, 0, 0.8);
  //pierna der
  manod = new THREE.BoxGeometry(1, 3, 1);
  cubemanod = new THREE.Mesh(manod, plomoesta);
  scene.add(cubemanod);
  cubemanod.position.set(-31, 4.8, 1.4);
  cubemanod.rotation.set(-0.5, 0, 0.4);
  //pie der
  manod = new THREE.BoxGeometry(1, 3, 1);
  cubemanod = new THREE.Mesh(manod, plomoesta);
  scene.add(cubemanod);
  cubemanod.position.set(-29.6, 3.5, 2);
  cubemanod.rotation.set(-1.5, 0, 1.8);

  //edificio

  //pilares
  var pilar = new THREE.BoxGeometry(15, 1, 50);
  var cubepilar = new THREE.Mesh(pilar, plomoraton);
  cubepilar.receiveShadow = true;
  cubepilar.castShadow = true;
  scene.add(cubepilar);
  cubepilar.position.set(130, 30, 2);
  cubepilar.rotation.set(0, -0.1 * Math.PI, 0, 0, 0);
  //
  var count = -11.5;
  var countx = 135;
  for (let i = 0; i < 4; i++) {
    pilar = new THREE.BoxGeometry(15, 40, 2);
    cubepilar = new THREE.Mesh(pilar, plomoraton);
    cubepilar.receiveShadow = true;
    cubepilar.castShadow = true;
    cubepilar.position.set(countx, 20, count);
    scene.add(cubepilar);
    cubepilar.rotation.set(0, -0.1 * Math.PI, 0);
    if (i == 0 || i == 3) {
      cubepilar.position.set(countx, 17, count);
    } else {
      cubepilar.position.set(countx, 20, count);
    }
    countx -= 3;
    count += 10;
  }
  // voulumen
  var edificio = new THREE.BoxGeometry(100, 180, 90);
  var cubeedificio = new THREE.Mesh(edificio, veis);
  cubeedificio.receiveShadow = true;
  cubeedificio.castShadow = true;
  scene.add(cubeedificio);
  cubeedificio.position.set(190, 35, 4);
  cubeedificio.rotation.set(0, 0, 0);
  //
  var edificio = new THREE.BoxGeometry(23, 180, 90);
  var cubeedificio = new THREE.Mesh(edificio, veisclaro);
  cubeedificio.receiveShadow = true;
  cubeedificio.castShadow = true;
  scene.add(cubeedificio);
  cubeedificio.position.set(142, 35, 3);
  cubeedificio.rotation.set(0, -0.1 * Math.PI, 0);
  ///
  edificio = new THREE.BoxGeometry(3, 180, 90);
  cubeedificio = new THREE.Mesh(edificio, veis);
  cubeedificio.receiveShadow = true;
  cubeedificio.castShadow = true;
  scene.add(cubeedificio);
  cubeedificio.position.set(130, 35, 2);
  cubeedificio.rotation.set(0, -0.1 * Math.PI, 0, 0, 0);
  //puerta de este edificio chica
  edificio = new THREE.BoxGeometry(2, 40, 40);
  cubeedificio = new THREE.Mesh(edificio, oscuro);
  cubeedificio.receiveShadow = true;
  cubeedificio.castShadow = true;
  scene.add(cubeedificio);
  cubeedificio.position.set(127, 15, 2);
  cubeedificio.rotation.set(0, -0.1 * Math.PI, 0, 0, 0);
  //frontis de la puerta grande
  edificio = new THREE.BoxGeometry(2, 60, 70);
  cubeedificio = new THREE.Mesh(edificio, veispuerta);
  cubeedificio.receiveShadow = true;
  cubeedificio.castShadow = true;
  scene.add(cubeedificio);
  cubeedificio.position.set(128, 15, 2);
  cubeedificio.rotation.set(0, -0.1 * Math.PI, 0, 0, 0);
  edificio = new THREE.BoxGeometry(2, 45, 55);
  cubeedificio = new THREE.Mesh(edificio, veis);
  cubeedificio.receiveShadow = true;
  cubeedificio.castShadow = true;
  scene.add(cubeedificio);
  cubeedificio.position.set(128.5, 15, 2);
  cubeedificio.rotation.set(0, -0.1 * Math.PI, 0, 0, 0);
  //ventanas
  // var edificio = new THREE.BoxGeometry( 2, 13 , 10 );
  // var cubeedificio = new THREE.Mesh( edificio, colorazul );
  // scene.add( cubeedificio );
  // cubeedificio.position.set(88,50, -30);
  var incre = -42.5;
  var increvent = 143;
  for (let i = 0; i < 5; i++) {
    edificio = new THREE.BoxGeometry(2, 10, 8);
    cubeedificio = new THREE.Mesh(edificio, blancosu);
    cubeedificio.receiveShadow = true;
    cubeedificio.castShadow = true;
    scene.add(cubeedificio);
    if (i == 1 || i == 4) {
      incre += 20;
    } else {
      incre += 12;
    }
    increvent -= 5;
    cubeedificio.position.set(increvent, 51, incre);
    cubeedificio.rotation.set(0, -0.1 * Math.PI, 0, 0, 0);
  }

  increvent = 143;
  incre = -42.5;
  for (let i = 0; i < 5; i++) {
    edificio = new THREE.BoxGeometry(2, 10, 8);
    cubeedificio = new THREE.Mesh(edificio, blancosu);
    scene.add(cubeedificio);
    if (i == 1 || i == 4) {
      incre += 20;
    } else {
      incre += 12;
    }
    increvent -= 5;
    cubeedificio.position.set(increvent, 70, incre);
    cubeedificio.rotation.set(0, -0.1 * Math.PI, 0, 0, 0);
  }
  increvent = 143;
  incre = -42.5;
  for (let i = 0; i < 5; i++) {
    edificio = new THREE.BoxGeometry(2, 10, 8);
    cubeedificio = new THREE.Mesh(edificio, blancosu);
    scene.add(cubeedificio);
    if (i == 1 || i == 4) {
      incre += 20;
    } else {
      incre += 12;
    }
    increvent -= 5;
    cubeedificio.position.set(increvent, 92, incre);
    cubeedificio.rotation.set(0, -0.1 * Math.PI, 0, 0, 0);
  }

  //edificio ingenieria
  edificio = new THREE.BoxGeometry(280, 150, 80);
  cubeedificio = new THREE.Mesh(edificio, colornegro);
  scene.add(cubeedificio);
  cubeedificio.position.set(-100, 60, -140);

  //relleno
  edificio = new THREE.BoxGeometry(280, 150, 100);
  cubeedificio = new THREE.Mesh(edificio, colornegro);
  scene.add(cubeedificio);
  cubeedificio.position.set(-100, 60, -150);

  //barra de arriba
  edificio = new THREE.BoxGeometry(280, 8, 3);
  cubeedificio = new THREE.Mesh(edificio, verdeinge);
  scene.add(cubeedificio);
  cubeedificio.position.set(-100, 141, -98);

  //14 palos horizontales

  var count = 38;
  for (let i = 0; i < 13; i++) {
    edificio = new THREE.BoxGeometry(2, 100, 3);
    cubeedificio = new THREE.Mesh(edificio, rojop);
    scene.add(cubeedificio);
    cubeedificio.position.set(count, 85, -99);
    count -= 23;
  }

  //palos verticales
  count = 135;
  for (let i = 0; i < 6; i++) {
    edificio = new THREE.BoxGeometry(280, 5, 3);
    cubeedificio = new THREE.Mesh(edificio, verdeinge);
    scene.add(cubeedificio);
    cubeedificio.position.set(-100, count, -98);
    count -= 20;
  }

  count = 38;
  // BARRAS DE ABAJO
  for (let i = 0; i < 10; i++) {
    edificio = new THREE.BoxGeometry(4, 50, 3);
    cubeedificio = new THREE.Mesh(edificio, verdeinge);
    scene.add(cubeedificio);
    cubeedificio.position.set(count, 10, -98);
    count -= 30.6;
  }
  // ventanas de abajo
  count = 22;
  for (let i = 0; i < 9; i++) {
    edificio = new THREE.BoxGeometry(18, 5, 3);
    cubeedificio = new THREE.Mesh(edificio, blanco);
    if (i == 3 || i == 4) {
    } else {
      scene.add(cubeedificio);
    }

    cubeedificio.position.set(count, 15, -98);
    count -= 30.6;
  }
  //auto  uno
  edificio = new THREE.BoxGeometry(30, 14, 16);
  cubeedificio = new THREE.Mesh(edificio, azulm);
  cubeedificio.receiveShadow = true;
  cubeedificio.castShadow = true;
  scene.add(cubeedificio);
  cubeedificio.position.set(-100, 9, 40);
  cubeedificio.rotation.set(0, -0.1 * Math.PI, 0);
  //nariz
  edificio = new THREE.BoxGeometry(10, 6.5, 16);
  cubeedificio = new THREE.Mesh(edificio, azulm);
  cubeedificio.receiveShadow = true;
  cubeedificio.castShadow = true;
  scene.add(cubeedificio);
  cubeedificio.position.set(-117, 5, 35);
  cubeedificio.rotation.set(0, -0.1 * Math.PI, 0);
  //ruedas
  // delanteras
  geometry = new THREE.CylinderGeometry(3, 3, 3, 20);
  cylinder = new THREE.Mesh(geometry, oscuro);
  cylinder.receiveShadow = true;
  cylinder.castShadow = true;
  scene.add(cylinder);
  cylinder.position.set(-118, 2.5, 43);
  cylinder.rotation.set(-0.5 * Math.PI, -0.3 * Math.PI, 0);

  geometry = new THREE.CylinderGeometry(3, 3, 3, 20);
  cylinder = new THREE.Mesh(geometry, oscuro);
  cylinder.receiveShadow = true;
  cylinder.castShadow = true;
  scene.add(cylinder);
  cylinder.position.set(-95, 2.5, 50);
  cylinder.rotation.set(-0.5 * Math.PI, -0.3 * Math.PI, 0);

  //traseras
  geometry = new THREE.CylinderGeometry(3, 3, 3, 20);
  cylinder = new THREE.Mesh(geometry, oscuro);
  cylinder.receiveShadow = true;
  cylinder.castShadow = true;
  scene.add(cylinder);
  cylinder.position.set(-90, 2.5, 35);
  cylinder.rotation.set(-0.5 * Math.PI, -0.3 * Math.PI, 0);

  geometry = new THREE.CylinderGeometry(3, 3, 3, 20);
  cylinder = new THREE.Mesh(geometry, oscuro);
  cylinder.receiveShadow = true;
  cylinder.castShadow = true;
  scene.add(cylinder);
  cylinder.position.set(-110, 2.5, 27);
  cylinder.rotation.set(-0.5 * Math.PI, -0.3 * Math.PI, 0);

  //auto
  edificio = new THREE.BoxGeometry(30, 14, 16);
  cubeedificio = new THREE.Mesh(edificio, azulm);
  cubeedificio.receiveShadow = true;
  cubeedificio.castShadow = true;
  scene.add(cubeedificio);
  cubeedificio.position.set(10, 9, 80);
  //nariz
  edificio = new THREE.BoxGeometry(10, 6.5, 16);
  cubeedificio = new THREE.Mesh(edificio, azulm);
  cubeedificio.receiveShadow = true;
  cubeedificio.castShadow = true;
  scene.add(cubeedificio);
  cubeedificio.position.set(-10, 5.2, 80);

  //ruedas
  // delanteras
  geometry = new THREE.CylinderGeometry(3, 3, 3, 20);
  cylinder = new THREE.Mesh(geometry, oscuro);
  cylinder.receiveShadow = true;
  cylinder.castShadow = true;
  scene.add(cylinder);
  cylinder.position.set(0, 2.5, 87);
  cylinder.rotation.set(0, 1.5, 1.5);

  geometry = new THREE.CylinderGeometry(3, 3, 3, 20);
  cylinder = new THREE.Mesh(geometry, oscuro);
  cylinder.receiveShadow = true;
  cylinder.castShadow = true;
  scene.add(cylinder);
  cylinder.position.set(0, 2.5, 73);
  cylinder.rotation.set(0, 1.5, 1.5);
  //traseras
  geometry = new THREE.CylinderGeometry(3, 3, 3, 20);
  cylinder = new THREE.Mesh(geometry, oscuro);
  cylinder.receiveShadow = true;
  cylinder.castShadow = true;
  scene.add(cylinder);
  cylinder.position.set(20, 2.5, 87);
  cylinder.rotation.set(0, 1.5, 1.5);

  geometry = new THREE.CylinderGeometry(3, 3, 3, 20);
  cylinder = new THREE.Mesh(geometry, oscuro);
  cylinder.receiveShadow = true;
  cylinder.castShadow = true;
  scene.add(cylinder);
  cylinder.position.set(20, 2.5, 73);
  cylinder.rotation.set(0, 1.5, 1.5);

  //MINIBUS
  edificio = new THREE.BoxGeometry(30, 14, 16);
  cubeedificio = new THREE.Mesh(edificio, azulm);
  cubeedificio.receiveShadow = true;
  cubeedificio.castShadow = true;
  scene.add(cubeedificio);
  cubeedificio.position.set(-89, 9, 162);
  cubeedificio.rotation.set(0, -0.08 * Math.PI, 0);
  //nariz
  basesoldado = new THREE.CylinderGeometry(7, 9, 7, 4);
  cbasesoldado = new THREE.Mesh(basesoldado, blancosu);
  cbasesoldado.receiveShadow = true;
  cbasesoldado.castShadow = true;
  scene.add(cbasesoldado);
  cbasesoldado.position.set(-100, 11, 159);
  cbasesoldado.rotation.set(0, 0.2 * Math.PI, 0);
  //traseras
  geometry = new THREE.CylinderGeometry(3, 3, 3, 20);
  cylinder = new THREE.Mesh(geometry, oscuro);
  cylinder.receiveShadow = true;
  cylinder.castShadow = true;
  scene.add(cylinder);
  cylinder.position.set(-80, 2.5, 172);
  cylinder.rotation.set(0, 1.5, 1.5);

  geometry = new THREE.CylinderGeometry(3, 3, 3, 20);
  cylinder = new THREE.Mesh(geometry, oscuro);
  cylinder.receiveShadow = true;
  cylinder.castShadow = true;
  scene.add(cylinder);
  cylinder.position.set(-80, 2.5, 157);
  cylinder.rotation.set(0, 1.5, 1.5);
  //delanteras
  geometry = new THREE.CylinderGeometry(3, 3, 3, 20);
  cylinder = new THREE.Mesh(geometry, oscuro);
  cylinder.receiveShadow = true;
  cylinder.castShadow = true;
  scene.add(cylinder);
  cylinder.position.set(-100, 2.5, 168);
  cylinder.rotation.set(0, 1.5, 1.5);

  geometry = new THREE.CylinderGeometry(3, 3, 3, 20);
  cylinder = new THREE.Mesh(geometry, oscuro);
  cylinder.receiveShadow = true;
  cylinder.castShadow = true;
  scene.add(cylinder);
  cylinder.position.set(-95, 2.5, 152);
  cylinder.rotation.set(0, 1.5, 1.5);

  // avenida mariscal santa cruz
  //piso de las dos vias el prado
  plano(800, 120, plomoraton, 0, 0.05, 125, -0.5 * Math.PI, 0, 0);

  // plano inclinado despues de la plaza
  plano(700, 80, plomoraton, -100, 0.05, 65, -0.5 * Math.PI, 0, -0.1 * Math.PI);

  //mariscal
  plano(500, 40, plomoraton, 0, 0.05, 85, -0.5 * Math.PI, 0, 0);
  count = 250;
  for (let i = 0; i < 3; i++) {
    plano(20, 2, blanco, count, 0.06, 85, -0.5 * Math.PI, 0, 0);
    count -= 50;
  }
  // calle para arriba izq
  plano(60, 300, plomoraton, 60, 0.05, 85, -0.5 * Math.PI, 0, -0.05 * Math.PI);

  // calle para la camacho
  plano(900, 35, plomoraton, 0, 0.05, -65, -0.5 * Math.PI, 0, 0);
  count = 240;
  for (let i = 0; i < 12; i++) {
    plano(20, 2, blanco, count, 0.06, -65, -0.5 * Math.PI, 0, 0);
    count -= 50;
  }

  count = 130;
  //paso de zebra
  for (let i = 0; i < 7; i++) {
    plano(20, 4, blanco, 10, 0.1, count, -0.5 * Math.PI, 0, 0);
    count -= 10;
  }

  //piso de jardinera
  plano(500, 40, veisclaro, -250, 0.1, 79, -0.5 * Math.PI, 0, -0.1 * Math.PI);
  // plano inclinado DERECHA
  plano(
    700,
    80,
    plomoraton,
    -100,
    0.06,
    190,
    -0.5 * Math.PI,
    0,
    -0.1 * Math.PI
  );

  //Plaza
  geometry = new THREE.CylinderGeometry(20, 20, 4, 3);
  cylinder = new THREE.Mesh(geometry, verde);
  scene.add(cylinder);
  cylinder.position.set(-205, -1.4, -27.5);
  cylinder.rotation.set(0, Math.PI / 2 + 0.8, 0);

  var geometry5 = new THREE.BoxGeometry(80, 2, 80);
  var pasto = new THREE.Mesh(geometry5, verde);
  scene.add(pasto);
  pasto.position.set(-13, -0.8, -1.5);
  pasto.rotation.set(0, 1.4, 0);

  var geometry6 = new THREE.BoxGeometry(65, 2, 60);
  var pasto2 = new THREE.Mesh(geometry6, verde);
  scene.add(pasto2);
  pasto2.position.set(-78, -0.8, -11.5);
  pasto2.rotation.set(0, 1.58, 0);

  var geometry7 = new THREE.BoxGeometry(45, 2, 70);
  var pasto3 = new THREE.Mesh(geometry7, verde);
  scene.add(pasto3);
  pasto3.position.set(-140, -0.8, -21.5);
  pasto3.rotation.set(0, 1.45, 0);

  //acera
  var coloracera = new THREE.MeshBasicMaterial({ color: 0x808080 });
  var acera = new THREE.BoxGeometry(15, 2, 100);
  var ace1 = new THREE.Mesh(acera, coloracera);
  scene.add(ace1);
  ace1.position.set(34, 0, 2);
  ace1.rotation.set(0, -0.15, 0);
  var acera2 = new THREE.BoxGeometry(15, 2, 298);
  var ace2 = new THREE.Mesh(acera2, coloracera);
  scene.add(ace2);
  ace2.position.set(-100, 0, -40);
  ace2.rotation.set(0, Math.PI / 2, 0);
  var ace3 = new THREE.Mesh(acera2, coloracera);
  scene.add(ace3);
  ace3.position.set(-108, 0, 13);
  ace3.rotation.set(0, 1.26, 0);
  var aceraF = new THREE.BoxGeometry(25, 2, 80);
  var ace4 = new THREE.Mesh(aceraF, coloracera);
  scene.add(ace4);
  ace4.position.set(-278, -0.99, -43);
  ace4.rotation.set(0, 1.35, 0);

  // luces
  var poste = new THREE.CylinderGeometry(0.2, 0.2, 40, 4);
  var poste1 = new THREE.Mesh(poste, verdeoscuro);
  scene.add(poste1);
  poste1.position.set(-85, 3, -33);
  var poste2 = new THREE.Mesh(poste, verdeoscuro);
  scene.add(poste2);
  poste2.position.set(-175, 3, -33);
  var poste3 = new THREE.Mesh(poste, verdeoscuro);
  scene.add(poste3);
  poste3.position.set(-85, 3, 13);
  var poste4 = new THREE.Mesh(poste, verdeoscuro);
  scene.add(poste4);
  poste4.position.set(-175, 3, -16);
  var poste5 = new THREE.Mesh(poste, verdeoscuro);
  scene.add(poste5);
  poste5.position.set(-230, 3, -33.5);
  var poste6 = new THREE.Mesh(poste, verdeoscuro);
  scene.add(poste6);
  poste6.position.set(25, 3, -33);
  var poste7 = new THREE.Mesh(poste, verdeoscuro);
  scene.add(poste7);
  poste7.position.set(14, 3, 46);

  var foco = new THREE.SphereGeometry(1, 50, 5, 0, Math.PI * 2, 0, Math.PI * 2);
  var foco1 = new THREE.Mesh(foco, luz);
  scene.add(foco1);
  foco1.position.set(-85, 22.5, -33.5);
  var foco2 = new THREE.Mesh(foco, luz);
  scene.add(foco2);
  foco2.position.set(-175, 22.5, -33.5);
  var foco3 = new THREE.Mesh(foco, luz);
  scene.add(foco3);
  foco3.position.set(-85, 22.5, 13.5);
  var foco4 = new THREE.Mesh(foco, luz);
  scene.add(foco4);
  foco4.position.set(-175, 22.5, -15.5);
  var foco5 = new THREE.Mesh(foco, luz);
  scene.add(foco5);
  foco5.position.set(-230.5, 22, -33.5);
  var foco6 = new THREE.Mesh(foco, luz);
  scene.add(foco6);
  foco6.position.set(25, 22.5, -33.5);
  var foco7 = new THREE.Mesh(foco, luz);
  scene.add(foco7);
  foco7.position.set(14, 22.5, 46.5);
  // fin luces
  //fin plaza

  // jardinera
  var jardin = new THREE.BoxGeometry(14, 7, 398);
  var centro = new THREE.Mesh(jardin, coloracera);
  scene.add(centro);
  centro.position.set(-220, 0, 87);
  centro.rotation.set(0, 1.248, 0);
  var tierra = new THREE.BoxGeometry(10, 7.2, 394);
  var centrot = new THREE.Mesh(tierra, colortierra);
  scene.add(centrot);
  centrot.position.set(-220, 0, 87);
  centrot.rotation.set(0, 1.248, 0);
  // plantas
  var planta = new THREE.SphereGeometry(
    6,
    50,
    9,
    0,
    Math.PI * 2,
    0,
    Math.PI * 2
  );
  for (let i = 0; i < 14; i++) {
    var planta1 = new THREE.Mesh(planta, verdeclaro);
    scene.add(planta1);
    planta1.position.set(-384 + i * 26, 6.4, 31.2 + i * 8.8);
  }
  // fin plantas
  // luces
  var posteh = new THREE.CylinderGeometry(0.2, 0.2, 16, 4);
  for (let i = 0; i < 4; i++) {
    var postev = new THREE.Mesh(poste, verdeoscuro);
    scene.add(postev);
    postev.position.set(-385 + i * 110, 15, 34 + i * 35.6);
    var posteh1 = new THREE.Mesh(posteh, verdeoscuro);
    scene.add(posteh1);
    posteh1.position.set(-385 + i * 110, 35, 34 + i * 35.6);
    posteh1.rotation.set(Math.PI / 2, 0, 0.55 + Math.PI * 2);
    var focoj1 = new THREE.Mesh(foco, luz);
    scene.add(focoj1);
    focoj1.position.set(-381 + i * 110, 34.2, 27 + i * 35.6);
    var focoj2 = new THREE.Mesh(foco, luz);
    scene.add(focoj2);
    focoj2.position.set(-389 + i * 110, 34.2, 41 + i * 35.6);
  }
  // fin luces
  // fin jardinera

  // semaforo
  var semVertical = new THREE.Mesh(poste, verdeoscuro);
  scene.add(semVertical);
  semVertical.position.set(25, 13, 60);
  var semVertical2 = new THREE.Mesh(poste, verdeoscuro);
  scene.add(semVertical2);
  semVertical2.position.set(45, 13, -40);
  var posteS = new THREE.CylinderGeometry(0.2, 0.2, 20, 4);
  var semHorizontal = new THREE.Mesh(posteS, verdeoscuro);
  scene.add(semHorizontal);
  semHorizontal.position.set(25, 33, 70);
  semHorizontal.rotation.set(Math.PI / 2, 0, 0);
  var semHorizontal2 = new THREE.Mesh(posteS, verdeoscuro);
  scene.add(semHorizontal2);
  semHorizontal2.position.set(45, 33, -50);
  semHorizontal2.rotation.set(Math.PI / 2, 0, 0);

  var negroS = new THREE.MeshBasicMaterial({ color: 0x000000 });
  var caja = new THREE.BoxGeometry(0.5, 3.2, 7);
  var caja1 = new THREE.Mesh(caja, coloramarillo);
  scene.add(caja1);
  caja1.position.set(25, 32, 80);
  var caja3 = new THREE.Mesh(caja, coloramarillo);
  scene.add(caja3);
  caja3.position.set(45, 32, -60);
  var cajan = new THREE.BoxGeometry(0.5, 3.4, 7.5);
  var caja2 = new THREE.Mesh(cajan, negroS);
  scene.add(caja2);
  caja2.position.set(24.5, 32, 80);
  // caja1.rotation.set(0, 1.248, 0);

  var luzs = new THREE.SphereGeometry(
    1,
    10,
    10,
    0,
    Math.PI * 2,
    0,
    Math.PI * 2
  );
  var rojoS = new THREE.MeshBasicMaterial({ color: 0xff0000 });
  var amarilloS = new THREE.MeshBasicMaterial({ color: 0xffff00 });
  var luzSemaforo1 = new THREE.Mesh(luzs, rojoS);
  scene.add(luzSemaforo1);
  luzSemaforo1.position.set(26, 32, 82);
  var luzSemaforo2 = new THREE.Mesh(luzs, amarilloS);
  scene.add(luzSemaforo2);
  luzSemaforo2.position.set(26, 32, 80);
  var luzSemaforo3 = new THREE.Mesh(luzs, verdeclaro);
  scene.add(luzSemaforo3);
  luzSemaforo3.position.set(26, 32, 78);

  var luzSemaforo4 = new THREE.Mesh(luzs, rojoS);
  scene.add(luzSemaforo4);
  luzSemaforo4.position.set(46, 32, -58);
  var luzSemaforo5 = new THREE.Mesh(luzs, amarilloS);
  scene.add(luzSemaforo5);
  luzSemaforo5.position.set(46, 32, -60);
  var luzSemaforo6 = new THREE.Mesh(luzs, verdeclaro);
  scene.add(luzSemaforo6);
  luzSemaforo6.position.set(46, 32, -62);

  // fin semaforo

  // fin bloques de henry

  //86,15, 2
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
  requestAnimationFrame(animate);

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

function plano(ancho, alto, color, x, y, z, xx, yy, zz) {
  let planeGeo = new THREE.PlaneGeometry(ancho, alto);
  let plane = new THREE.Mesh(planeGeo, color);
  plane.receiveShadow = true;
  plane.castShadow = true;
  scene.add(plane);
  plane.position.set(x, y, z);
  plane.rotation.set(xx, yy, zz);
}

window.addEventListener('keydown', keyDown);
window.addEventListener('keyup', keyUp);

window.onload = init;
