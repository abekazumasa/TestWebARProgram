var markersURLArray=[];
var markersNameArray=[];
var testObject;
let markerVisible = { m0: false, m1: false,m2:false,m3:false };
AFRAME.registerComponent('markers_start',{
	init:function(){
		console.log('Add markers to the scene');

		var sceneEl = document.querySelector('a-scene');
		//list of the markers
		for(var i=0; i<3; i++)
		{
			var url="./Marker/pattern-"+i+".patt";
			markersURLArray.push(url);
			markersNameArray.push('Marker_'+i);

		}

		for(var k=0; k<3; k++)
		{
			var markerEl = document.createElement('a-marker');
			markerEl.setAttribute('type','pattern');
			markerEl.setAttribute('url',markersURLArray[k]);
			markerEl.setAttribute('id',markersNameArray[k]);

			markerEl.setAttribute('registerevents','');
			sceneEl.appendChild(markerEl);

		//Adding text to each marker	
		}
		var markerzero = document.querySelector('#Marker_0');
		var textEl = document.createElement('a-entity');
		textEl.setAttribute('id','text');
		textEl.setAttribute('text',{color: 'red', align: 'center', value:markersNameArray[0], width: '5.5'});
		textEl.object3D.position.set(0, 0.7, 0);
		textEl.object3D.rotation.set(-90, 0, 0);
		markerzero.appendChild(textEl);
		console.log(textEl.object3D);
	}
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

AFRAME.registerComponent('run',{
	init: function () {
		testObject= document.querySelector('#text').object3D;
	  console.log(testObject);
	},
	tick: function (){
		
		// if(markerVisible["m0"]&&markerVisible["m1"]){
		// 	testObject.object3D.el.visible = true;
		// }
		// else{
		// 	testObject.object3D.el.visible = false;
		// }
		// if(m0||m2||m3){
		// 	markerText.object3D.visible = false ; 

		// }else{
		// 	markerText.object3D.visible = true;
		// }
	},
});