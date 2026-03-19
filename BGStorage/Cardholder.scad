
$fn=50; 



// === BASE PLATE ======================================================================================= //
module rcube ( d , r=1 , c="" ) {
	/*
	d  : [ x , y , z ]
	r  : radius of spheres for rounding
	c  : rounded dimensions
	*/
	R = 2*r;
	if( c == "" ) {
		if( d.x<=R || d.y<=R || d.z<=R )
			assert(false, "r to big for rcube!");
		minkowski(){ translate([r,r,r])
			cube([ d.x-R , d.y-R , d.z-R ]); sphere(r); }
	} else if( c == "xy" ) {
		if( d.x<=R || d.y<=R )
			assert(false, "r to big for rcube!");
		minkowski(){ translate([r,r,0])
			cube([ d.x-R , d.y-R , d.z ]); cylinder(r=r,h=0.0001); }
	} else if( c == "yz" ) {
		if( d.y<=R || d.z<=R )
			assert(false, "r to big for rcube!");
		minkowski(){ translate([0,r,r])
			cube([ d.x , d.y-R , d.z-R ]); rotate([0,90,0]) cylinder(r=r,h=0.0001); }
	} else if( c == "xz" ) {
		if( d.x<=R || d.z<=R )
			assert(false, "r to big for rcube!");
		minkowski(){ translate([r,0,r])
			cube([ d.x-R , d.y , d.z-R ]); rotate([90,0,0]) cylinder(r=r,h=0.0001); }
	} else
		assert(false, "Wrong coordinates for rcube!"); }
module base_plate ( d , w , f1 , f2 , yoff , xoff ) {
	/*
	d  : [ x , y ]
	w  : wall thickness
	f1 : thickness of base
	f2 : thickness of lower finger openings
	*/
	rcube([ d.x , d.y , f1 ] , c="xy" );
	difference(){
		translate([0,0,f1]) 		  rcube([ d.x , d.y , f2 ] , c="xy" );
		translate([w,w,f1]) 		  rcube([ d.x-2*w , d.y-2*w , 1.1*f2 ] , r=f2 , c="xy" );
		translate([0 , 0.3*d.y , f1]) rcube([ d.x , 0.4*d.y , 3*f2 ] , r=f2 , c="yz" );
		translate([0.3*d.x , 0 , f1]) rcube([ 0.4*d.x , d.y , 3*f2 ] , r=f2 , c="xz" ); } }
//base_plate(d = [50,80] , w=1.2 , f1=2.5 , f2=1.5 , yoff=15 , xoff=12);
module nops ( d , w , f1 , f2 ) {
	translate([ 0,0,d.z+w-(8-f1-f2) ]) union(){
		translate([ w , 2*(w+.2)+7 , -5 ]) 				scale([0.25,1,1])rotate([0,90,0])sphere(2.5);
		translate([ d.x-w , 2*(w+.2)+7 , -5 ]) 			scale([0.25,1,1])rotate([0,90,0])sphere(2.5);
		translate([ d.x-w , d.y-(2*(w+.2)+7) , -5 ])	scale([0.25,1,1])rotate([0,90,0])sphere(2.5);
		translate([ w , d.y-(2*(w+.2)+7) , -5 ]) 		scale([0.25,1,1])rotate([0,90,0])sphere(2.5); } }
module nop_holes ( d , w , f1 , f2 ) {
	translate([ w , 2*w+7 , f1+f2+5 ]) 	       	 scale([0.25,1,1])rotate([0,90,0])sphere(2.5);
	translate([ d.x-w , 2*w+7 , f1+f2+5 ]) 	   	 scale([0.25,1,1])rotate([0,90,0])sphere(2.5);
	translate([ d.x-w , d.y-(2*w+7) , f1+f2+5 ]) scale([0.25,1,1])rotate([0,90,0])sphere(2.5);
	translate([ w , d.y-(2*w+7) , f1+f2+5 ]) 	 scale([0.25,1,1])rotate([0,90,0])sphere(2.5); }



// === CARD HOLDER ===================================================================================== //
module card_holder ( d , w=1.2 , f1=2.5 , f2=1.5 , yoff=15 , xoff=12 ) {
	difference(){
		union(){
			base_plate( d , w , f1 , f2 , yoff , xoff );
			// HOLDER
			difference(){
				translate([w,w,f1]) 	rcube([ d.x-2*w , d.y-2*w , d.z-f1 ] , c="xy" );
				translate([2*w,2*w,f1])	cube([ d.x-4*w , d.y-4*w , 2*d.z ]);
				translate([2*w+14,w,f1])	cube([ d.x-4*w-28 , d.y-2*w , 2*d.z ]);
				translate([w,2*w+14,f1])	cube([ d.x-2*w , d.y-4*w-28 , 2*d.z ]); } }
	nop_holes( d , w , f1 , f2 ); } }
module card_holder_topper ( d , w=1.0 , f1=2.5 , f2=1.5 ) { 
	// PLATE
	difference(){
		rcube([ d.x , d.y , f2 ] , c="xy" );
		translate([ w+7 , w+7 , 0]) rcube([ d.x-2*w-14 , d.y-2*w-14 , f2 ] , c="xy" ); }
	// WALL
	difference(){
		translate([0,0,f2]) rcube([ d.x , d.y , d.z-f1-f2 ] , c="xy");
		translate([w,w,f2]) rcube([ d.x-2*w , d.y-2*w , d.z ] , c="xy");
		translate([0 , 0.3*d.y , d.z-f1-f2]) rcube([ d.x , 0.4*d.y , 3*f2 ] , r=f2 , c="yz" );
		translate([0.3*d.x , 0 , d.z-f1-f2]) rcube([ 0.4*d.x , d.y , 3*f2 ] , r=f2 , c="xz" ); }
	nops( d , w , f1 , f2 ); }



// === TOKEN HOLDER ==================================================================================== //
module token_holder ( d , w=1.2 , f1=2.5 , f2=1.5 , yoff=15 , xoff=12 ) {
	difference(){
		union(){
			base_plate( d , w , f1 , f2 , yoff , xoff );
			// HOLDER
			difference(){
				translate([w,w,f1]) rcube([d.x-2*w,d.y-2*w,d.z] , c="xy" );
				translate([2*w,2*w,f1]) rcube([d.x-4*w,d.y-4*w,2*d.z] , r=3 , c="" ); } }
	nop_holes( d , w , f1 , f2 ); } }
module token_holder_topper ( d , w=1.0 , f1=2.5 , f2=1.5 ) { 
	// Calculate number of grid cells based on topper dimensions
	// Cell size is 5mm, gap is 2mm, margin is 4mm.
	// Formula derived from: nx*5 + (nx-1)*2 <= d.x - (2*4)
	nx = floor((d.x - 6) / 7)    ;  ny = floor((d.y - 6) / 7);
	// Calculate total size of the grid to center it
	grid_w = nx * 7 - 2          ;   grid_h = ny * 7 - 2;
	// Calculate starting position for centering
	x_offset = (d.x - grid_w)/2  ;  y_offset = (d.y - grid_h)/2;
	// GRID
	difference(){
		rcube([ d.x , d.y , f2 ] , c="xy" );
		for ( i = [0:1:nx-1] ) { for ( j = [0:1:ny-1] ) {
			translate([ x_offset + i*7, y_offset + j*7, 0]) rcube([ 5 , 5 , f2 ] , c="xy" ); } } }
	// WALL
	difference(){
		translate([0,0,f2]) rcube([ d.x , d.y , d.z-f1-f2 ] , c="xy");
		translate([w,w,f2]) rcube([ d.x-2*w , d.y-2*w , d.z ] , c="xy");
		translate([0 , 0.3*d.y , d.z-f1-f2]) rcube([ d.x , 0.4*d.y , 3*f2 ] , r=f2 , c="yz" );
		translate([0.3*d.x , 0 , d.z-f1-f2]) rcube([ 0.4*d.x , d.y , 3*f2 ] , r=f2 , c="xz" ); }
	nops( d , w , f1 , f2 ); }



// === MAIN =========================================================================================== //
D = [ 55 , 80 , 25 ];
// CARD HOLDER
	//card_holder( d=D );
	//translate([-D.x,0,5]) card_holder_topper( d=D );
// TOKEN HOLDER
	token_holder(d = D);
	translate([-D.x,0,5]) token_holder_topper( d=D );
