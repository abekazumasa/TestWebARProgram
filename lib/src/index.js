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

function playSound() {
	const audio = document.getElementById("arjs-video");
	audio.play().catch((err) => alert(err));
  }
  document.getElementById("start").addEventListener("click", function() {
	playSound();
  });

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
			});

			marker.addEventListener("markerLost",() =>{
				var markerId = marker.id;
				markerVisible[markerId] = false;
				console.log('Marker Lost: ', markerId);
			});
		},
        tick:function(){
            if(markerVisible["Marker_0"]||markerVisible["Marker_1"]||markerVisible["Marker_2"]||markerVisible["Marker_3"]){
				markerzero.getWorldPosition(worldPosition);
				markerzero.getWorldQuaternion(worldQuaternion);
				//markerzero.quaternion.set(0,0,0);
                // if(markerVisible["Marker_0"]==false){

				// 	markerzero.getWorldPosition(CameraPosition);
				// 	markerzero.getWorldQuaternion(CameraQuaternion);
				// 	console.log(worldPosition);
				// 	test.object3D.position.set(worldPosition.x, worldPosition.y, worldPosition.z);
				// 	test.object3D.quaternion.set(worldQuaternion.x, worldQuaternion.y, worldQuaternion.z,worldQuaternion.w);
                // }else{
                //     markerzero.getWorldPosition(worldPosition);
				// 	test.object3D.position.set(worldPosition.x, worldPosition.y, worldPosition.z);
                // }
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


