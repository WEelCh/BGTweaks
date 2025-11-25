
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
	
	translate([0,0,1]) hexagon(10,2);
	difference(){
		cylinder(h=2 , r=23 , $fn=1000);
		cylinder(h=2 , r=20 , $fn=1000);
	}
	
}

module hexagon(side, height) {
  length = sqrt(3) * side;
  
  for (r = [-60, 0, 60])
      rotate([0, 0, r])
        cube([side, length, height], center=true);
}