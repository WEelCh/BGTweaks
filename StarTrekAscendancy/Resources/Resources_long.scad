
DIM = [
	76.5, // Spielerinnenablage richtung
	160.5, // Links-Rechts
	29
];

WALL  = 2;
FLOOR = 2;
LID   = 3;



union(){
	difference(){
		cube(DIM);
	
		// Lid Opening
		translate([ WALL , WALL , DIM.z-LID ]) cube([ DIM.x-WALL+0.1 , DIM.y-2*WALL , LID+0.1 ]);
		translate([ WALL-1 , WALL-1 , DIM.z-LID ]) cube([ DIM.x-1+0.1 , DIM.y-2 , 2 ]);
		
		// Storage
		translate([ WALL , WALL , FLOOR ]) cube([ DIM.x-2*WALL , DIM.y-2*WALL , DIM.z ]);
	
	}
	
	// Lid Opening Thingies
	translate([ 0 , 1 , DIM.z-1 ]) rotate([0,90,0]) cylinder(DIM.x,r=1,$fn=50);
	translate([ 0 , DIM.y-1 , DIM.z-1 ]) rotate([0,90,0]) cylinder(DIM.x,r=1,$fn=50);
	
	//translate([ 1 , 1 , OUT_Z-1 ]) rotate([-90,0,0]) cylinder(OUT_Y-1,r=1,$fn=50);
}



