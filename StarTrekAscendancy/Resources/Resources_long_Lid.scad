
DIM = [
	76.5, // Spielerinnenablage richtung
	160.5, // Links-Rechts
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
	
	Z = 2;
	translate([0,0,0.5*Z]) cube([5,5,Z],center=true);
	
}
