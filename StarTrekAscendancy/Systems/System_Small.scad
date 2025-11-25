
Sys_r = 90/2;
Sys_height = 37;

Floor_power = 2;
Wall_power = 1;

Hold_z = 21;

Finger = 20;

difference(){
	cube([ 2*Sys_r+2*Wall_power , 2*Sys_r+2*Wall_power , Floor_power+Sys_height+Hold_z ]);
	#translate([ Wall_power+Sys_r , Wall_power+Sys_r , Floor_power+Hold_z ]) cylinder(Sys_height+0.1,r=Sys_r,$fn=250);
	
	translate([ Wall_power+Sys_r , 0 , Hold_z-1 ]) cylinder(Sys_height+Floor_power+3,r=Finger , $fn=100);
	translate([ 0 , Wall_power+Sys_r , Hold_z-1 ]) cylinder(Sys_height+Floor_power+3,r=Finger , $fn=100);
	translate([ Wall_power+Sys_r , 2*Wall_power+2*Sys_r , Hold_z-1 ]) cylinder(Sys_height+Floor_power+3,r=Finger , $fn=100);
	translate([ 2*Wall_power+2*Sys_r , Wall_power+Sys_r , Hold_z-1 ]) cylinder(Sys_height+Floor_power+3,r=Finger , $fn=100);
	
	translate([ Wall_power+Sys_r , 0 , -1 ]) scale([1,0.5,1]) cylinder(Sys_height+Floor_power+3,r=Finger , $fn=100);
	translate([ 0 , Wall_power+Sys_r , -1 ]) scale([0.5,1,1]) cylinder(Sys_height+Floor_power+3,r=Finger , $fn=100);
	translate([ Wall_power+Sys_r , 2*Wall_power+2*Sys_r , -1 ]) scale([1,0.5,1]) cylinder(Sys_height+Floor_power+3,r=Finger , $fn=100);
	translate([ 2*Wall_power+2*Sys_r , Wall_power+Sys_r , -1 ]) scale([0.5,1,1]) cylinder(Sys_height+Floor_power+3,r=Finger , $fn=100);
	
	SMOOTH = 15;
	PATH = 2*Sys_r+2*Wall_power;
	translate([ 0 , 0 , -1 ]) cylinder(Sys_height+Floor_power+Hold_z+3 , r=SMOOTH , $fn=100);
	translate([ PATH , 0 , -1 ]) cylinder(Sys_height+Hold_z+Floor_power+3 , r=SMOOTH , $fn=100);
	translate([ 0 , PATH , -1 ]) cylinder(Sys_height+Hold_z+Floor_power+3 , r=SMOOTH , $fn=100);
	translate([ PATH , PATH , -1 ]) cylinder(Sys_height+Hold_z+Floor_power+3 , r=SMOOTH , $fn=100);
	
	translate([ Wall_power+Sys_r , Wall_power+Sys_r , Floor_power ]) cylinder(Hold_z+1 , r=27, $fn=100);
};