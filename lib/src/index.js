var markersURLArray=[];
var markersNameArray=[];
var ObjectEl;
let markerVisible = { Marker_0: false, Marker_1: false,Marker_2:false,Marker_3:false };
var worldPosition ;
var worldQuaternion ; 
var testObject;
var markerzero;
var oldPosition;
var oldQuaternion;
var test;  
var offsetRotation;

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
        scene.appendChild(ObjectEl);
	},
});
//Detect marker found and lost
AFRAME.registerComponent('registerevents', {
		init: function () {
			const marker = this.el;
            	worldPosition= new THREE.Vector3();
            	worldQuaternion= new THREE.Quaternion();
				offsetRotation= new THREE.Quaternion();
				
				oldQuaternion = new THREE.Quaternion();
			marker.addEventListener("markerFound", ()=> {
				console.log(offsetRotation);
				var markerId = marker.id;
				markerVisible[markerId] = true;
				console.log('Marker Found: ', markerId);
				markerzero = document.querySelector('#'+this.el.id).object3D;
				testObject=document.querySelector('#Object');
				markerzero.getWorldQuaternion(worldQuaternion);
				//console.log(markerzero);
				offsetRotation =worldQuaternion;
				//console.log(offsetRotation);
				offsetRotation.x *= -1;
				offsetRotation.y *= -1;
				offsetRotation.z *= -1;
				
				offsetRotation.x = offsetRotation.x*oldQuaternion.x;
				offsetRotation.y = offsetRotation.y*oldQuaternion.y;
				offsetRotation.z = offsetRotation.z*oldQuaternion.z;
				offsetRotation.w = offsetRotation.w*oldQuaternion.w;
					 //offsetRotation = offsetRotation*testObject.object3D.quaternion;


			});

			marker.addEventListener("markerLost",() =>{
				var markerId = marker.id;
				markerVisible[markerId] = false;
				console.log('Marker Lost: ', markerId);
			});
		},
        tick:function(){
            if(markerVisible["Marker_0"]||markerVisible["Marker_1"]||markerVisible["Marker_2"]||markerVisible["Marker_3"]){
				if(markerVisible["Marker_0"]){
					markerzero.getWorldPosition(worldPosition);
					markerzero.getWorldQuaternion(worldQuaternion);
					testObject.object3D.position.set(worldPosition.x, worldPosition.y, worldPosition.z);
				   testObject.object3D.quaternion.set(worldQuaternion.x, worldQuaternion.y, worldQuaternion.z,worldQuaternion.w);
				   
				   oldPosition = testObject.object3D.position;
				   oldQuaternion =testObject.object3D.quaternion;
				}
				if(markerVisible["Marker_1"]){
					markerzero.getWorldPosition(worldPosition);
					markerzero.getWorldQuaternion(worldQuaternion);
				    testObject.object3D.position.set(worldPosition.x, worldPosition.y, worldPosition.z);
					testObject.object3D.quaternion.set(
						worldQuaternion.x*offsetRotation.x,
						worldQuaternion.y*offsetRotation.y,
						worldQuaternion.z*offsetRotation.z,
						worldQuaternion.w*offsetRotation.w);
				}

			// 	markerzero.getWorldPosition(worldPosition);
			// 	markerzero.getWorldQuaternion(worldQuaternion);
			//    testObject.object3D.position.set(worldPosition.x, worldPosition.y, worldPosition.z);
			//    testObject.object3D.quaternion.set(worldQuaternion.x, worldQuaternion.y, worldQuaternion.z,worldQuaternion.w);
            }
        },

});


function ChangPos(a,b){

test.x = a.x - b.x;
test.y = a.y - b.y;
test.z = a.z - b.z;

	return test;
}

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


