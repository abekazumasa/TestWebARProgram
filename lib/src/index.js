import * as AFRAME from 'aframe';


var markersURLArray=[];
var markersNameArray=[];
var ObjectEl;
let markerVisible = { Marker_0: false, Marker_1: false,Marker_2:false,Marker_3:false };
AFRAME.registerComponent('markers_start',{
	init:function(){
		//console.log('Add markers to the scene');

		var sceneEl = document.querySelector('a-scene');
		//list of the markers
		for(var i=0; i<=3; i++)
		{
			var url="./Marker/pattern-"+i+".patt";
			markersURLArray.push(url);
			markersNameArray.push('Marker_'+i);

		}

		for(var k=0; k<=3; k++)
		{
			var markerEl = document.createElement('a-marker');
			markerEl.setAttribute('type','pattern');
			markerEl.setAttribute('url',markersURLArray[k]);
			markerEl.setAttribute('id',markersNameArray[k]);
			markerEl.setAttribute('registerevents','');
			sceneEl.appendChild(markerEl);
		}
		var markerzero = document.querySelector('#Marker_0');
		var MarkerObjet = document.createElement('a-sphere');
		MarkerObjet.setAttribute("material","color: white;");
		MarkerObjet.setAttribute("transparent",true);
		MarkerObjet.setAttribute("opacity",0.10);
		MarkerObjet.setAttribute('id','makerPos');
		MarkerObjet.object3D.position.set(0, 0, 0);
		MarkerObjet.object3D.rotation.set(0, 0, 0);
        markerzero.appendChild(MarkerObjet);
	},
});
//Detect marker found and lost
AFRAME.registerComponent('registerevents', {
		init: function () {
			const marker = this.el;
			marker.addEventListener("markerFound", ()=> {
				var markerId = marker.id;
				markerVisible[markerId] = true;
				console.log('Marker Found: ', markerId);
			});

			marker.addEventListener("markerLost",() =>{
				marker.remove
				var markerId = marker.id;
				markerVisible[markerId] = false;
				console.log('Marker Lost: ', markerId);
			});
		},
		update:function(){
			console.log("test");
		}
});
AFRAME.registerComponent('run', {
	init: function () {
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
	tick:function(){
		if(markerVisible["Marker_0"]||markerVisible["Marker_1"]||markerVisible["Marker_2"]||markerVisible["Marker_3"]){
		//   ObjectEl.setAttribute('visible',true);
		//   var marker_zero = document.querySelector("Marker_0");
		//   var worldPosition = new THREE.Vector3(); 
		//   marker_zero.object3D.getWorldPosition(worldPosition);
		//   console.log(worldPosition);
		//   ObjectEl.object3D.position.set(worldPosition);
		}
		else{
		  ObjectEl.setAttribute('visible',false);
		}
  },
});

