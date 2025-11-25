
// +++ CONFIG +++
X_CARD = 145-4-1;
Y_CARD = 98-4-1; 
Z_CARD = 25-4-1;

R_FINGERHELP =10;

PW_FLOOR = 2; // PoWer
PW_WALL = 1.5;
X_LEN_WALL = len_wall(15); // LENght
Y_LEN_WALL = len_wall(7);
function len_wall(len_wall) = len_wall+PW_WALL;



// +++ MAKE +++
difference() {
	cube([ X_CARD , Y_CARD , Z_CARD ]);
	// Deckel
	translate([ 2 , 2 , Z_CARD-1 ]) cube([ X_CARD , Y_CARD-4 , 1.1 ]);
	translate([ 2 , 1 , Z_CARD-2 ]) cube([ X_CARD , Y_CARD-2 , 1.1 ]);
	// Bauch
	translate([ 2 , 2 , 2 ]) cube([ X_CARD-4 , Y_CARD-4 , Z_CARD ]);
};

