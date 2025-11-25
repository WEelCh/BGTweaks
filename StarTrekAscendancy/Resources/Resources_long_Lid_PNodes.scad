
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
	
	cylinder(h=50 , r=10 , $fn=1000);
	difference(){
		cylinder(h=2 , r=23 , $fn=1000);
		cylinder(h=2 , r=20 , $fn=1000);
	}
	
}
