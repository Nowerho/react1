import React, { useEffect, useRef } from "react";
import * as THREE from "three";
 
const World = () => {
 const cubeRef = useRef(null);
 const controls = useRef(null);
 useEffect(() => {
   var scene = new THREE.Scene();
   var camera = new THREE.PerspectiveCamera(
     75,
     window.innerWidth / window.innerHeight,
     0.1,
     1000
   );
 
   var renderer = new THREE.WebGLRenderer();
   renderer.setSize(window.innerWidth, window.innerHeight);
   cubeRef.current.appendChild(renderer.domElement);
 
   var geometry = new THREE.BoxGeometry();
   var material = new THREE.MeshBasicMaterial({ color: '#8B73BF' });
   var cube = new THREE.Mesh(geometry, material);
   scene.background = new THREE.Color('skyblue');
   scene.add(cube);
 
   camera.position.z = 5;
 
   var animate = function () {
     requestAnimationFrame(animate);
 
     cube.rotation.x += 0.01;
     cube.rotation.y += 0.01;
 
     renderer.render(scene, camera);
   };
 
   animate();
 
   var increaseCubeSize = (incrementValue) => {
     cube.scale.x += incrementValue;
     cube.scale.y += incrementValue;
     cube.scale.z += incrementValue;
   };
 
   var decreaseCubeSize = (decrementValue) => {
     cube.scale.x -= decrementValue;
     cube.scale.y -= decrementValue;
     cube.scale.z -= decrementValue;
   };
 
   controls.current = { increaseCubeSize, decreaseCubeSize };
 }, []);
 
 return (
   <>
     <button
        onClick={() => {
          controls.current.increaseCubeSize(1);
        }}
      >
        Increase Size
      </button>
      <button
        onClick={() => {
          controls.current.decreaseCubeSize(1);
        }}
      >
        Decrease Size
      </button>
      <div ref={cubeRef}></div>
   </>
 );
};
 
export default World;