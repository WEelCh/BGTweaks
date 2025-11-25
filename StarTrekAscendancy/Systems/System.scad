
Sys_r = 90/2;
Sys_height = 58;

Floor_power = 2;
Wall_power = 1;

Finger = 20;

difference(){
	cube([ 2*Sys_r+2*Wall_power , 2*Sys_r+2*Wall_power , Floor_power+Sys_height ]);
	#translate([ Wall_power+Sys_r , Wall_power+Sys_r , Floor_power ]) cylinder(Sys_height+0.1,r=Sys_r,$fn=250);
	
	translate([ Wall_power+Sys_r , 0 , -1 ]) cylinder(Sys_height+Floor_power+3,r=Finger , $fn=100);
	translate([ 0 , Wall_power+Sys_r , -1 ]) cylinder(Sys_height+Floor_power+3,r=Finger , $fn=100);
	translate([ Wall_power+Sys_r , 2*Wall_power+2*Sys_r , -1 ]) cylinder(Sys_height+Floor_power+3,r=Finger , $fn=100);
	translate([ 2*Wall_power+2*Sys_r , Wall_power+Sys_r , -1 ]) cylinder(Sys_height+Floor_power+3,r=Finger , $fn=100);
	
	SMOOTH = 15;
	PATH = 2*Sys_r+2*Wall_power;
	translate([ 0 , 0 , -1 ]) cylinder(Sys_height+Floor_power+3 , r=SMOOTH , $fn=100);
	translate([ PATH , 0 , -1 ]) cylinder(Sys_height+Floor_power+3 , r=SMOOTH , $fn=100);
	translate([ 0 , PATH , -1 ]) cylinder(Sys_height+Floor_power+3 , r=SMOOTH , $fn=100);
	translate([ PATH , PATH , -1 ]) cylinder(Sys_height+Floor_power+3 , r=SMOOTH , $fn=100);
};