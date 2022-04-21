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
		ObjectEl = document.createElement('a-gltf-model');
		ObjectEl.setAttribute('src','#untitled-obj');
		ObjectEl.setAttribute('id','Object');
		ObjectEl.setAttribute('animation-mixer','');
		ObjectEl.setAttribute('visible',false);
		ObjectEl.object3D.position.set(0, 0, 0);
		ObjectEl.object3D.rotation.set(0, 0, 0);
		markerzero.appendChild(ObjectEl);
		console.log(ObjectEl.object3D);
		
	},
	tick:function(){
		//  if(markerVisible["m0"]||markerVisible["m1"]||markerVisible["m2"]||markerVisible["m3"]){
		// 	ObjectEl.object3D.el.visible = true;
		// 	console.log("true");
		//  }
		//  else{
		// 	ObjectEl.object3D.el.visible = false;
		//  }
		 if(markerVisible["Marker_0"]&&markerVisible["Marker_1"]){
			console.log("true");
		 }
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
				var markerId = marker.id;
				markerVisible[markerId] = false;
				console.log('Marker Lost: ', markerId);
			});
		},
});

