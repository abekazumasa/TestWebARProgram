var markersURLArray=[];
var markersNameArray=[];
var ObjectEl;
let markerVisible = { Marker_0: false, Marker_1: false,Marker_2:false,Marker_3:false };
var worldPosition ;
var worldQuaternion ; 
var test;
var markerzero;
var CameraPosition;
var CameraQuaternion;
AFRAME.registerComponent('markers_start',{
	init:function(){
        var scene = document.querySelector('a-scene');
        ObjectEl = document.createElement('a-entity');
        ObjectEl.setAttribute('gltf-model','#untitled-obj');
        ObjectEl.setAttribute('id','Object');
        ObjectEl.setAttribute('animation-mixer','');
        ObjectEl.setAttribute('visible',false);
        ObjectEl.object3D.position.set(0, 0, 0);
        ObjectEl.object3D.rotation.set(0, 0, 0);
        scene.appendChild(ObjectEl );
	},
});
//Detect marker found and lost
AFRAME.registerComponent('registerevents', {
		init: function () {
			const marker = this.el;
            	worldPosition= new THREE.Vector3();
            	worldQuaternion= new THREE.Quaternion();
			marker.addEventListener("markerFound", ()=> {
				var markerId = marker.id;
				markerVisible[markerId] = true;
				console.log('Marker Found: ', markerId);
				markerzero = document.querySelector('#'+this.el.id).object3D;
				test=document.querySelector('#Object');
                // if(markerId=="Marker_0"){
                //     
                //     markerzero = document.querySelector('#Marker_0').object3D;
                // }
			});

			marker.addEventListener("markerLost",() =>{
				var markerId = marker.id;
				markerVisible[markerId] = false;
				console.log('Marker Lost: ', markerId);
			});
		},
        tick:function(){
            if(markerVisible["Marker_0"]||markerVisible["Marker_1"]||markerVisible["Marker_2"]||markerVisible["Marker_3"]){
                // if(markerVisible["Marker_0"]==false){
				// 	markerzero.getWorldPosition(worldPosition);
				// 	markerzero.getWorldQuaternion(worldQuaternion);
				// 	markerzero.getWorldPosition(CameraPosition);
				// 	markerzero.getWorldQuaternion(CameraQuaternion);
				// 	console.log(worldPosition);
				// 	test.object3D.position.set(worldPosition.x, worldPosition.y, worldPosition.z);
				// 	test.object3D.quaternion.set(worldQuaternion.x, worldQuaternion.y, worldQuaternion.z,worldQuaternion.w);
                // }else{

                //     markerzero.getWorldPosition(worldPosition);
                //     markerzero.getWorldQuaternion(worldQuaternion);
                //     test.object3D.position.x +=worldPosition.x;
				// 	test.object3D.position.y +=worldPosition.y;
				// 	test.object3D.position.z +=worldPosition.z;
                //     test.object3D.quaternion.set(worldQuaternion.x, worldQuaternion.y, worldQuaternion.z,worldQuaternion.w);
                // }
				
				 console.log(markerzero);
				 markerzero.getWorldPosition(worldPosition);
				 markerzero.getWorldQuaternion(worldQuaternion);
					
				test.object3D.position.set(worldPosition.x, worldPosition.y, worldPosition.z);
				test.object3D.quaternion.set(worldQuaternion.x, worldQuaternion.y, worldQuaternion.z,worldQuaternion.w);
            }
        },
});
AFRAME.registerComponent('run', {
	tick:function(){
		if(markerVisible["Marker_0"]||markerVisible["Marker_1"]||markerVisible["Marker_2"]||markerVisible["Marker_3"]){
		  ObjectEl.setAttribute('visible',true);
		}
		else{
		  ObjectEl.setAttribute('visible',false);
		}
  },
});

// AFRAME.registerComponent('cameraController', {
//     init: function () {
//         CameraPosition = new THREE.Vector3();
//         CameraQuaternion = new THREE.Quaternion();
// 	},
//     tick:function(){
//         this.el.object3D.getWorldPosition(worldPosition);
//         this.el.object3D.getWorldQuaternion(worldQuaternion);
//         console.log(CameraPosition);
//         console.log(CameraQuaternion);
//     },
// });



