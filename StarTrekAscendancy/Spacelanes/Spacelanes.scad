

SL_width  = 32;
//SL_length = 65; // Short
//SL_length = 97; // Medium
SL_length = 126; // Long
SL_height = 28;

//Finger support -> short:6 else:8
FINGER = 8;	

Wall_power  = 1;
Floor_power = 2;
Holder_power = 10;


difference(){
	cube([ SL_width+2*Wall_power , SL_length+2*Wall_power , SL_height+Floor_power ]);
	translate([ Wall_power , Wall_power , Floor_power ]) cube([ SL_width , SL_length , SL_height+1 ]); // MAIN STORAGE
	translate([ -1 , Wall_power+Holder_power , Floor_power ]) cube([ 2*SL_width , SL_length-2*Holder_power , SL_height+1 ]); // WALL BREAK
	
	translate([  0 , Wall_power+0.5*SL_length , -1 ]) scale([1,3,1]) cylinder( Floor_power+2, r=FINGER ); // Finger support
	translate([  2*Wall_power+SL_width , Wall_power+0.5*SL_length , -1 ]) scale([1,3,1]) cylinder( Floor_power+2, r=FINGER );
};




