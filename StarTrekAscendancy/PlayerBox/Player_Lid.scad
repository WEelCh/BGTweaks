
OUT_X = 107;
OUT_Y = 230;
OUT_Z = 29;

FLOOR_PW = 2;
WALL_PW  = 2;

LID_PW = 3;
LID_SLIT = 1;

PAPER_PW = 2;



difference(){
	union(){
		// Verschließteil
		cube([ OUT_X-WALL_PW , OUT_Y-2 , 1 ]);
		// Deckelteil
		translate([1,1,1]) cube([ OUT_X-WALL_PW-1 , OUT_Y-2*WALL_PW , 2 ]);
	};

	// Window
	translate([0.5*OUT_X , 0.5*OUT_Y , -1]) cylinder(5,r=35,$fn=100);
	// Planet Place
	translate([0.5*OUT_X , 0.5*OUT_Y , -1]) cylinder(2.2+1,r=90*0.5,$fn=100);
};


