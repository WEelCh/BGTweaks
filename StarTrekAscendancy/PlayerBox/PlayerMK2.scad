

OUT_X = 107;
OUT_Y = 230;
OUT_Z = 29;

FLOOR_PW = 2;
WALL_PW  = 2;

LID_PW = 3;
LID_SLIT = 1;

PAPER_PW = 2;


union(){
	difference(){
	
		cube([ OUT_X , OUT_Y , OUT_Z ]);
		
		// Lid Opening with opening on x axis
		translate([ WALL_PW , WALL_PW , OUT_Z-LID_PW ]) cube([ OUT_X , OUT_Y-2*WALL_PW , LID_PW+1 ]); 
		translate([ WALL_PW-LID_SLIT , WALL_PW-LID_SLIT , OUT_Z-LID_PW ]) 
			cube([ OUT_X , OUT_Y-2*(WALL_PW-LID_SLIT) , 2*LID_SLIT ]);
		
		// Console
		translate([ WALL_PW , WALL_PW , OUT_Z-LID_PW-PAPER_PW ]) cube([ OUT_X-2*WALL_PW , OUT_Y-2*WALL_PW , PAPER_PW+1 ]);
		
		// Trade Agreement
		TA_SLIT_Z = 8;
		TA_SLIT_X = 3;
		translate([ WALL_PW , WALL_PW , OUT_Z-LID_PW-PAPER_PW-TA_SLIT_Z ]) cube([ TA_SLIT_X, OUT_Y-2*WALL_PW , TA_SLIT_Z+1 ]);
		
		// Trade Agreement Side
		TAS_SLIT_Y = 3;
		translate([ WALL_PW+TA_SLIT_X+1 , WALL_PW , FLOOR_PW ]) cube([ S_X , TAS_SLIT_Y , OUT_Z ]);
		
		// Ascendancy
		A_SLIT_Z = 6;
		A_SLIT_X = 3;
		translate([ OUT_X-WALL_PW-A_SLIT_X , WALL_PW , OUT_Z-LID_PW-PAPER_PW-A_SLIT_Z ]) 
			cube([ A_SLIT_X, OUT_Y-2*WALL_PW-1-AC_Y , A_SLIT_Z+1 ]);
		
		// Advancements Cards
		AC_Y = 54;
		AC_X = 79;
		AC_Z = 10;
		translate([ OUT_X-AC_X-WALL_PW , OUT_Y-WALL_PW-AC_Y , OUT_Z-LID_PW-PAPER_PW-AC_Z ]) cube([ AC_X , AC_Y , AC_Z+1 ]);
		translate([ OUT_X , OUT_Y-WALL_PW-0.5*AC_Y , -1 ]) scale([1,2,1]) cylinder(OUT_Z+1,r=8,$fn=50);
		// SpaceStations
		translate([ OUT_X-AC_X-WALL_PW+5 , OUT_Y-WALL_PW-AC_Y , FLOOR_PW ]) cube([ AC_X-15 , AC_Y , OUT_Z ]);
		echo(str("Dice Bay X: ",AC_X-15));
		
		// Ships
		S_X = OUT_X-2*WALL_PW-TA_SLIT_X-A_SLIT_X-2;
		S_Y = 50;
		translate([ WALL_PW+TA_SLIT_X+1 , WALL_PW+TAS_SLIT_Y+1 , FLOOR_PW ]) 
			cube([ OUT_X-2*WALL_PW-TA_SLIT_X-A_SLIT_X-F_X-3 , S_Y , OUT_Z ]);
		translate([ WALL_PW+TA_SLIT_X+1+OUT_X-2*WALL_PW-TA_SLIT_X-A_SLIT_X-F_X-3+1 , WALL_PW+TAS_SLIT_Y+1 , FLOOR_PW ])
			cube([ F_X , S_Y , OUT_Z ]);
		
		// Fleets
		F_X = 40;
		translate([ OUT_X-WALL_PW-A_SLIT_X-1-F_X , WALL_PW+TAS_SLIT_Y+1+S_Y+1 , FLOOR_PW ]) 
			cube([ F_X , OUT_Y-2*WALL_PW-S_Y-AC_Y-2-TAS_SLIT_Y-1 , OUT_Z ]);
		
		// Nodes
		translate([ WALL_PW+TA_SLIT_X+1 , WALL_PW+TAS_SLIT_Y+1+S_Y+1 , FLOOR_PW ]) 
			cube([ OUT_X-2*WALL_PW-TA_SLIT_X-A_SLIT_X-F_X-3 , OUT_Y-2*WALL_PW-S_Y-AC_Y-2-TAS_SLIT_Y-1 , OUT_Z ]);
			
		// Cards
		CS_X = 68;
		CS_Y = 95;
		CS_Z = 1.6;
		
		CB_X = 78;
		CB_Y = 108;
		CB_Z = 1.6;
		translate([ 0.5*OUT_X-0.5*CS_X , WALL_PW , OUT_Z-LID_PW-PAPER_PW-CS_Z-CB_Z ]) cube([ CS_X , CS_Y , OUT_Z ]);
		translate([ 0.5*OUT_X-0.5*CB_X , WALL_PW , OUT_Z-LID_PW-PAPER_PW-CB_Z ]) cube([ CB_X , CB_Y , OUT_Z ]);
		
		// Bonus
		B_Z = 10;
		translate([ WALL_PW+TA_SLIT_X+1 , OUT_Y-WALL_PW-AC_Y , FLOOR_PW ]) 
			cube([ OUT_X-2*WALL_PW-AC_X-2-TA_SLIT_X , AC_Y , OUT_Z ]);
		
	};
	translate([ 0 , 1 , OUT_Z-1 ]) rotate([0,90,0]) cylinder(OUT_X,r=1,$fn=50);
	translate([ 0 , OUT_Y-1 , OUT_Z-1 ]) rotate([0,90,0]) cylinder(OUT_X,r=1,$fn=50);
	
	translate([ 1 , 1 , OUT_Z-1 ]) rotate([-90,0,0]) cylinder(OUT_Y-1,r=1,$fn=50);
};






















