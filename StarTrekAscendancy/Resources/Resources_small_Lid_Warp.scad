
DIM = [
	76.5, // Spielerinnenablage richtung
	69, // Links-Rechts
	29
];



difference(){

	union(){
		cube([ DIM.x-2 , DIM.y-2 , 1 ]);
		translate([ 0 , 1 , 1 ]) cube([ DIM.x-2 , DIM.y-4 , 2 ]);
	}
	
	// Symbol
	translate([ 0.5*(DIM.x-2) , 0.5*(DIM.y-2) , 2 ]) Symbol();
}

module Symbol () {
	
	translate([ -3 , 0 , 0 ]) scale([ 1.5 , 1 , 1 ]) cylinder( h=10 , r=8 , $fn=3 );
	
}
