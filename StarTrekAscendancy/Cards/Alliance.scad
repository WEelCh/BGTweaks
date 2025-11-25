
CARD = [
	78,
	53,
	20
];

FLOOR = 2;
WALL = 1;

HOLDER = 10;

FINGER_RAD = 15;
FINGER_SCALE = 1;

DIM = [
	CARD.x+2*WALL,
	CARD.y+2*WALL,
	CARD.z+FLOOR
];


difference(){
	
	cube([ CARD.x+2*WALL , CARD.y+2*WALL , CARD.z+FLOOR	]);
	
	// CARD
	translate([ WALL , WALL , FLOOR ]) cube([ DIM.x , CARD.y , CARD.z+0.1 ]);
	// WALL OPENING
	translate([ -0.1 , WALL+HOLDER , FLOOR ]) cube([ DIM.x+0.2 , CARD.y-2*HOLDER , DIM.z ]);
	
	// FINGER 
	translate([ 0 , 0.5*DIM.y , -0.1 ]) scale([ 1 , FINGER_SCALE , 1 ]) cylinder( h=FLOOR+0.2 , r=FINGER_RAD );
	translate([ DIM.x , 0.5*DIM.y , -0.1 ]) scale([ 1 , FINGER_SCALE , 1 ]) cylinder( h=FLOOR+0.2 , r=FINGER_RAD );
}
