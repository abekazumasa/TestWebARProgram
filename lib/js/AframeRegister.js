var markersURLArray=[];
var markersNameArray=[];
console.log('OK');
let markerVisible = { m0: false, m1: false,m2:false,m3:false };
AFRAME.registerComponent('markers_start',{
	init:function(){
		console.log('Add markers to the scene');

		var sceneEl = document.querySelector('a-scene');
		
		//list of the markers
		for(var i=0; i<3; i++)
		{
			var url="./Marker/pattern-"+i+".patt";
      console.log(url);
			markersURLArray.push(url);
			markersNameArray.push('Marker_'+i);
			//console.log(url);
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
			var textEl = document.createElement('a-entity');
			
			textEl.setAttribute('id','text');
			textEl.setAttribute('text',{color: 'red', align: 'center', value:markersNameArray[k], width: '5.5'});
			textEl.object3D.position.set(0, 0.7, 0);
			textEl.object3D.rotation.set(-90, 0, 0);

			markerEl.appendChild(textEl);
		}
	}
});


//Detect marker found and lost
AFRAME.registerComponent('registerevents', {
		init: function () {
			const marker = this.el;

			marker.addEventListener("markerFound", ()=> {
				var markerId = marker.id;
				markerVisible[ marker.id ] = true;
				console.log('Marker Found: ', markerId);
				console.log(el.data.marker.pos);
			});

			marker.addEventListener("markerLost",() =>{
				var markerId = marker.id;
				markerVisible[ marker.id ] = false;
				console.log('Marker Lost: ', markerId);
			});
		},
	});