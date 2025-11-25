
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
	
	// Insignia
	Logo = [34.96 , 16.64 , 5];
	translate([0.5*OUT_X , 0.5*OUT_Y , 7]){ 
		rotate([180,0,270]){
			mirror([1,0,0]){
				scale([1.5,1.5,1]){
					import("Borg_insignia_2.stl", convexity=10);
				};
			};
		};
	};
	
};


