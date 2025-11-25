
// +++ CONFIG +++
X_CARD = 145;
Y_CARD = 98; 
Z_CARD = 25;

R_FINGERHELP =10;

PW_FLOOR = 2; // PoWer
PW_WALL = 1.5;
X_LEN_WALL = len_wall(15); // LENght
Y_LEN_WALL = len_wall(7);
function len_wall(len_wall) = len_wall+PW_WALL;


// +++ MODULES +++

module Baseplate (){
	X = 2*PW_WALL + X_CARD;
	Y = 2*PW_WALL +  Y_CARD;
	Z = PW_FLOOR;
	
	difference(){
		cube([X,Y,Z]);
		translate([0 , PW_WALL+0.5*Y_CARD , -0.01]) cylinder(h=PW_FLOOR+0.02, r=R_FINGERHELP);
		translate([X , PW_WALL+0.5*Y_CARD , -0.01]) cylinder(h=PW_FLOOR+0.02, r=R_FINGERHELP);
		
		translate([0.5*X , 0 , -0.01]) scale([2,1,1]) cylinder(h=PW_FLOOR+0.02, r=R_FINGERHELP);
		translate([0.5*X , 2*PW_WALL+Y_CARD , -0.01]) scale([2,1,1]) cylinder(h=PW_FLOOR+0.02, r=R_FINGERHELP);
		
	}
}


module Walls (){
	translate([0,0,PW_FLOOR]){
		translate([0,0,0]){
			cube([PW_WALL , Y_LEN_WALL , Z_CARD]);
			cube([X_LEN_WALL , PW_WALL , Z_CARD]);
		}
		
		translate([0,Y_CARD+2*PW_WALL-Y_LEN_WALL,0]){
			cube([PW_WALL , Y_LEN_WALL , Z_CARD]);
		}
		translate([0,Y_CARD+PW_WALL,0]){
			cube([X_LEN_WALL , PW_WALL , Z_CARD]);
		}
		
		translate([2*PW_WALL+X_CARD-X_LEN_WALL,0,0]){
			cube([X_LEN_WALL , PW_WALL , Z_CARD]);
		}
		
		translate([2*PW_WALL+X_CARD-X_LEN_WALL,PW_WALL+Y_CARD,0]){
			cube([X_LEN_WALL , PW_WALL , Z_CARD]);
		}
	}
}



// +++ MAKE +++

cube([ X_CARD , Y_CARD , Z_CARD ]);

