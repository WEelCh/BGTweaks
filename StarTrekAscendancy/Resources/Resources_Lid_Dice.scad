
DIM = [
	76.5, // Spielerinnenablage richtung
	138, // Links-Rechts
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
	
	
	
	difference(){
		cylinder(h=10,r=10,$fn=10) ;
		translate ([-5,0,1]) cube([ 10 , 1 , 2 ],center=true);
		rotate([ 0 , 0 , 72 ]) translate ([-5,0,1]) cube([ 10 , 1 , 2 ],center=true);
		rotate([ 0 , 0 , 144 ]) translate ([-5,0,1]) cube([ 10 , 1 , 2 ],center=true);
		rotate([ 0 , 0 , 216 ]) translate ([-5,0,1]) cube([ 10 , 1 , 2 ],center=true);
		rotate([ 0 , 0 , 288 ]) translate ([-5,0,1]) cube([ 10 , 1 , 2 ],center=true);
		rotate([ 0 , 0 , 180 ]) cylinder(h=10,r=6,$fn=5);
	} rotate([ 0 , 0 , 180 ]) cylinder(h=10,r=5,$fn=5);
	
}

