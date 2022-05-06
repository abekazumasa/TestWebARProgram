var ObjectEl;
let markerVisible = { Marker_0: false, Marker_1: false,Marker_2:false,Marker_3:false };
var worldPosition;
var worldQuaternion; 
var currentMarker;
var Object_1;
var Object_2;
var Object_3;
var Object_4;

// AFRAME.registerComponent('markers_start',{
// 	init:function(){
//         var scene = document.querySelector('a-scene');
//         ObjectEl = document.createElement('a-entity');
//         ObjectEl.setAttribute('gltf-model','#untitled-obj');
//         ObjectEl.setAttribute('id','Object');
//         ObjectEl.setAttribute('animation-mixer','');
//         ObjectEl.setAttribute('visible',false);
// 		ObjectEl.setAttribute('rotation', {x: 0, y: 0, z: 0});
//         ObjectEl.object3D.position.set(0, 0, 0);
//         ObjectEl.object3D.rotation.set(0, 0, 0);
//         scene.appendChild(ObjectEl);
// 	},
// });
//Detect marker found and lost
AFRAME.registerComponent('registerevents', {
		init: function () {
			const marker = this.el;
            	worldPosition= new THREE.Vector3();
            	worldQuaternion= new THREE.Quaternion();
				
			marker.addEventListener("markerFound", ()=> {
				var markerId = marker.id;
				markerVisible[markerId] = true;
				currentMarker = marker;
				console.log('Marker Found: ', markerId);
				console.log(currentMarker);

				
			});
			marker.addEventListener("markerLost",() =>{
				var markerId = marker.id;
				markerVisible[markerId] = false;
				console.log('Marker Lost: ', markerId);
			});
		},
        // tick:function(){
        //     if(markerVisible["Marker_0"]||markerVisible["Marker_1"]||markerVisible["Marker_2"]||markerVisible["Marker_3"]){
		// 		if(markerVisible["Marker_0"]){
		// 			 currentMarker.object3D.getWorldPosition(worldPosition);
		// 			 var rotate = currentMarker.getAttribute('rotation');
		// 			 ObjectEl.object3D.position.set(worldPosition.x, worldPosition.y, worldPosition.z);
		// 			 ObjectEl.object3D.rotation.set( THREE.Math.degToRad(rotate.x), THREE.Math.degToRad(rotate.y), THREE.Math.degToRad(rotate.z));
		// 		}
		// 		if(markerVisible["Marker_1"]){
		// 			currentMarker.object3D.getWorldPosition(worldPosition);
		// 			var rotate = currentMarker.getAttribute('rotation');
		// 			console.log(rotate);
		// 			//currentMarker.object3D.getWorldQuaternion(worldQuaternion);
		// 		   ObjectEl.object3D.position.set(worldPosition.x, worldPosition.y, worldPosition.z);
		// 		 //  ObjectEl.object3D.quaternion.set(worldQuaternion.x,worldQuaternion.y,worldQuaternion.z,worldQuaternion.w);
		// 		   ObjectEl.object3D.rotation.set(
		// 			THREE.Math.degToRad((rotate.x+90)),
		// 		   	THREE.Math.degToRad(rotate.y+90),
		// 		   	THREE.Math.degToRad(rotate.z));
					
		// 		}

        //     }
        // },
});

AFRAME.registerComponent('run', {
	init: function () {
		 Object_1 = document.querySelector("#Object_1");
		 Object_2 = document.querySelector("#Object_2");
		 Object_3 = document.querySelector("#Object_3");
		 Object_4 = document.querySelector("#Object_4");
	},
	tick:function(){
		// if(markerVisible["Marker_0"]||markerVisible["Marker_1"]||markerVisible["Marker_2"]||markerVisible["Marker_3"]){
		//   ObjectEl.setAttribute('visible',true);
		// }
		// else{
		//   ObjectEl.setAttribute('visible',false);
		// }
		if(currentMarker==Marker_0){
			Object_1.setAttribute('visible',true);
			Object_2.setAttribute('visible',false);
			Object_3.setAttribute('visible',false);
			Object_4.setAttribute('visible',false);
		}
		if(currentMarker==Marker_1){
			Object_1.setAttribute('visible',false);
			Object_2.setAttribute('visible',true);
			Object_3.setAttribute('visible',false);
			Object_4.setAttribute('visible',false);
		}
		if(currentMarker==Marker_2){
			Object_1.setAttribute('visible',false);
			Object_2.setAttribute('visible',false);
			Object_3.setAttribute('visible',true);
			Object_4.setAttribute('visible',false);
		}
		if(currentMarker==Marker_3){
			Object_1.setAttribute('visible',false);
			Object_2.setAttribute('visible',false);
			Object_3.setAttribute('visible',false);
			Object_4.setAttribute('visible',true);
		}
  },
});


