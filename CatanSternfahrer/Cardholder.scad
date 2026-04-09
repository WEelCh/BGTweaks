
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



// === BASE PLATE ======================================================================================= //
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



// === NOPS ============================================================================================= //
module nops ( d , w , f1 , f2 , size=.25) {
	translate([ 0,0,d.z+w-(8-f1-f2) ]) union(){
		translate([ w , 2*(w+.2)+7 , -5 ]) 				scale([size,1,1])rotate([0,90,0])sphere(2.5);
		translate([ d.x-w , 2*(w+.2)+7 , -5 ]) 			scale([size,1,1])rotate([0,90,0])sphere(2.5);
		translate([ d.x-w , d.y-(2*(w+.2)+7) , -5 ])	scale([size,1,1])rotate([0,90,0])sphere(2.5);
		translate([ w , d.y-(2*(w+.2)+7) , -5 ]) 		scale([size,1,1])rotate([0,90,0])sphere(2.5); } }
module nop_holes ( d , w , f1 , f2 ) {
	translate([ w , 2*w+7 , f1+f2+5 ]) 	       	 scale([0.25,1,1])rotate([0,90,0])sphere(2.5);
	translate([ d.x-w , 2*w+7 , f1+f2+5 ]) 	   	 scale([0.25,1,1])rotate([0,90,0])sphere(2.5);
	translate([ d.x-w , d.y-(2*w+7) , f1+f2+5 ]) scale([0.25,1,1])rotate([0,90,0])sphere(2.5);
	translate([ w , d.y-(2*w+7) , f1+f2+5 ]) 	 scale([0.25,1,1])rotate([0,90,0])sphere(2.5); }



// === CARD HOLDER ===================================================================================== //
module bgs_card ( d , w=1.2 , f1=2.5 , f2=1.5 , yoff=15 , xoff=12 ) {
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
module bgs_card_cover ( d , w=1.0 , f1=2.5 , f2=1.5 , window=true ) { 
	// PLATE
	difference(){
		rcube([ d.x , d.y , f2 ] , c="xy" );
		if(window){ translate([ w+7 , w+7 , 0]) rcube([ d.x-2*w-14 , d.y-2*w-14 , f2 ] , r=5 , c="xy" ); } }
	// WALL
	difference(){
		translate([0,0,f2]) rcube([ d.x , d.y , d.z-f1-f2 ] , c="xy");
		v = 1;
		translate([v,v,f2]) rcube([ d.x-2*v , d.y-2*v , d.z ] , c="xy");
		translate([0 , 0.3*d.y , d.z-f1-f2]) rcube([ d.x , 0.4*d.y , 3*f2 ] , r=f2 , c="yz" );
		translate([0.3*d.x , 0 , d.z-f1-f2]) rcube([ 0.4*d.x , d.y , 3*f2 ] , r=f2 , c="xz" ); }
	nops( d , w , f1 , f2 , size=.25 ); }



// === TOKEN HOLDER ==================================================================================== //
COVERSIZE = 15;
module bgs_token ( d , w=1.2 , f1=2.5 , f2=1.5 , yoff=15 , xoff=12 ) {
	difference() { union() {
		rcube([ d.x , d.y , d.z-COVERSIZE ] , c="xy" );
		translate([0,0,d.z-COVERSIZE]) difference(){
			union(){
				base_plate( d , w , f1 , f2 , yoff , xoff );
				// HOLDER
				difference(){
					translate([w,w,f1]) rcube([d.x-2*w,d.y-2*w,COVERSIZE-f1] , c="xy" );
					 } }
		nop_holes( d , w , f1 , f2 ); } }
		translate([2*w,2*w,f1]) rcube([d.x-4*w,d.y-4*w,2*d.z] , r=3 , c="" ); } }
module bgs_token_cover ( d , w=1.0 , f1=2.5 , f2=1.5 ) { 
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
		#rcube([ d.x , d.y , f2 ] , c="xy" );
		for ( i = [0:1:nx-1] ) { for ( j = [0:1:ny-1] ) {
			translate([ x_offset + i*7, y_offset + j*7, 0]) rcube([ 5 , 5 , f2 ] , c="xy" ); } } }
	// WALL
	difference(){
		translate([0,0,f2]) rcube([ d.x , d.y , COVERSIZE-f1-f2 ] , c="xy");
		translate([w,w,f2]) rcube([ d.x-2*w , d.y-2*w , COVERSIZE ] , c="xy");
		translate([0 , 0.3*d.y , COVERSIZE-f1-f2]) rcube([ d.x , 0.4*d.y , 3*f2 ] , r=f2 , c="yz" );
		translate([0.3*d.x , 0 , COVERSIZE-f1-f2]) rcube([ 0.4*d.x , d.y , 3*f2 ] , r=f2 , c="xz" ); }
	nops( [d.x,d.y,COVERSIZE] , w , f1 , f2 , size=.25 ); }



// === RAW HOLDER ==================================================================================== //
module bgs_raw ( d , w=1.2 , f1=2.5 , f2=1.5 , yoff=15 , xoff=12 ) {
	difference() { union() {
		rcube([ d.x , d.y , d.z-COVERSIZE ] , c="xy" );
		translate([0,0,d.z-COVERSIZE]) difference(){
			union(){
				base_plate( d , w , f1 , f2 , yoff , xoff );
				// HOLDER
				difference(){
					translate([w,w,f1]) rcube([d.x-2*w,d.y-2*w,COVERSIZE-f1] , c="xy" );
					 } }
		nop_holes( d , w , f1 , f2 ); } } } }
		//translate([2*w,2*w,f1]) rcube([d.x-4*w,d.y-4*w,2*d.z] , r=3 , c="" ); } }
module bgs_raw_cover ( d , w=1.0 , f1=2.5 , f2=1.5 ) { 
	// Calculate number of grid cells based on topper dimensions
	// Cell size is 5mm, gap is 2mm, margin is 4mm.
	// Formula derived from: nx*5 + (nx-1)*2 <= d.x - (2*4)
	nx = floor((d.x - 6) / 7)    ;  ny = floor((d.y - 6) / 7);
	// Calculate total size of the grid to center it
	grid_w = nx * 7 - 2          ;   grid_h = ny * 7 - 2;
	// Calculate starting position for centering
	x_offset = (d.x - grid_w)/2  ;  y_offset = (d.y - grid_h)/2;
	// GRID
	//difference(){
		rcube([ d.x , d.y , f2 ] , c="xy" );
	//	for ( i = [0:1:nx-1] ) { for ( j = [0:1:ny-1] ) {
	//		translate([ x_offset + i*7, y_offset + j*7, 0]) rcube([ 5 , 5 , f2 ] , c="xy" ); } } }
	// WALL
	difference(){
		translate([0,0,f2]) rcube([ d.x , d.y , COVERSIZE-f1-f2 ] , c="xy");
		translate([w,w,f2]) rcube([ d.x-2*w , d.y-2*w , COVERSIZE ] , c="xy");
		translate([0 , 0.3*d.y , COVERSIZE-f1-f2]) rcube([ d.x , 0.4*d.y , 3*f2 ] , r=f2 , c="yz" );
		translate([0.3*d.x , 0 , COVERSIZE-f1-f2]) rcube([ 0.4*d.x , d.y , 3*f2 ] , r=f2 , c="xz" ); }
	nops( [d.x,d.y,COVERSIZE] , w , f1 , f2 , size=.15 ); }



// === MAIN =========================================================================================== //
// z cord is 2.5 mm taller! cause of topper
// internal storage offset for x and y is roughtly 5 mm (plus wiggle room)
// internal storage offset for z is roughtly 2.5 mm (plus wiggle room, mind card "expansion")
$fn=50; 
// ==================================================================================================== //

/* PlayerStorage
difference(){
	D = [95 , 180 , [ 54 , 20 ] ];
	// Base 
	union(){
		rcube([ D.x , D.y , 44+11 ] , c="xy" );
		translate([ 0 , 0 , 44+11 ]) bgs_token([ D.x , D.y , 15 ]);
		translate([ 2.4 , 2.4 , 44 ]) cube([ D.x-2*2.4 , D.y-2*2.4 , 26 ] );
		translate([ 2*1.2 , D.y-2*1.2-40-5 , 2.5 ]) rcube([ D.x-4*1.2 , 40 , 67.5 ] , c="xy"); 
	}
	// Rocket Cutout
	translate([ 0 , 10 , 2.5 ])  union(){
		// lower fin
		translate([ 0.5*D.x-8 , 0 , 0 ])  cube([ 16 , 60 , 30 ]); 
		// body
		translate([ 0.5*D.x , 0 , 28+18 ]) rotate( 270 , [1,0,0] )   cylinder( h=118 , r=18 );
		translate([ 0.5*D.x-18 , 0 , 28+18 ]) cube([ 36 , 118 , 100 ]);
		// head
		translate([ 0.5*D.x , 118 , 28+18 ]) rotate( 270 , [1,0,0] )   cylinder( h=41 , r1=18 , r2=5 );
		translate([ 0.5*D.x , 118 , 28+18 ]) linear_extrude(height = 30) polygon([ [-18,0], [18,0], [5,41], [-5,41] ]);
		// upper fins
		translate([ 10 , 25 , 50 ])  cube([ D.x-20 , 32 , 30 ]); 
	}
	translate([ 0 , 0 , 2.5 ])  union(){
		// LEFT
		// Rings
		translate([ 2*1.2 , 2*1.2+(133-32) , 35.5 ])  		rcube([ 25 , 32 , 32+5 ]); 
		// Tradeposts
		translate([ 2*1.2 , 2*1.2 , 67.5-25 ])  rcube([ 25 , 99 , 100 ]); 

		// RIGHT
		// Rocketfigures
		translate([ D.x-2*1.2-25 , 2*1.2+(133-25) , 32.5 ])  		rcube([ 25 , 25 , 35+5 ]); 
		// Coloniefigures
		translate([ D.x-2*1.2-25 , 2*1.2 , 67.5-40 ])  rcube([ 25 , 105.5 , 100 ]); 
		
		// MIDDLE
		// Rocket Upgrades
		translate([ 2*1.2 , D.y-2*1.2-40 , 12 ])  rcube([ D.x-4*1.2 , 40 , 100 ]); 
		// Medals
		translate([ 0.5*D.x-13 , 75 , 15 ])  rcube([ 26 , 50 , 50 ]); 
	}
}*/
//translate([-95,0,57.5]) 
//rotate([0,0,90]) translate([0,-180,0]) bgs_token_cover([ 95 , 180 , 15+2 ]);


H = 25+2.5;

// ressourcen cards
//bgs_card([ 57 , 79 , H ]);
//translate([ -57 ,0,2.5]) bgs_card_cover([ 57 , 79 , H ]);

// big cards
//bgs_card([ 90 , 129 , H ]);
//translate([ -90 ,0,2.5]) bgs_card_cover([ 90 , 129 , H ]);

// Standees Cockpit
//bgs_token([ 101 , 106 , H ]);
//translate([-101 ,0,0]) bgs_token_cover([ 101 , 106 , H ]);

// Standees Races
//bgs_token([ 101 , 80 , H ]);
//translate([-101 ,0,0]) bgs_token_cover([ 101 , 80 , H ]);

// Chips InGame
//COVERSIZE = 15+10;
//difference() {
//	bgs_raw([ 39 , 101 , H ]);
//	translate([0,0,2.5+H-2.5-10]) cube([39,101,2*H]);
//	#translate([39/2-(6.5) , 8.5+10.5 , H-10]) rotate(a = 90, v = [0,1,0])  cylinder(h = 13, r = 10.5);
//	#translate([39/2-(7.6) , 8.5+21+8.5+10.5 , H-10]) rotate(a = 90, v = [0,1,0])  cylinder(h = 15.2, r = 10.5);
//	#translate([39/2-(7.6) , 8.5+21+8.5+21+8.5+12.5 , H-10]) rotate(a = 90, v = [0,1,0])  cylinder(h = 15.2, r = 12.5);
//}
//translate([-39 ,0,0]) bgs_token_cover([ 39 , 101 , H ]);







// Planets
//COVERSIZE = 15+10;
module planets() {
    // Variables
    h = 24.1;
    r = 44 / 2; // 21.3
    dist = 52.4;
    chord_len = 42;

    // Calculate the half-angle for the chord
    // angle = 2 * asin(chord / (2 * r))
    half_angle = asin(chord_len / (2 * r));

    // Center coordinates for the three circles
    c1 = [0, 0];
    c2 = [dist * cos(60), dist * sin(60)];
    c3 = [dist * cos(120), dist * sin(120)];

    // 1. Draw the Cylinders
    translate(c1) cylinder(h = h, r = r);
    translate(c2) cylinder(h = h, r = r);
    translate(c3) cylinder(h = h, r = r);

    // 2. Draw the connecting Polygon
    // We calculate 2 points per circle based on the vector pointing to the centroid
    linear_extrude(height = h) {
        polygon(points = [
            // Points on Circle 1 (Center at origin, faces roughly 90 deg)
            [r * cos(90 - half_angle), r * sin(90 - half_angle)],
            [r * cos(90 + half_angle), r * sin(90 + half_angle)],

            // Points on Circle 3 (Center at 120 deg, faces roughly 330 deg)
            [c3[0] + r * cos(330 - half_angle), c3[1] + r * sin(330 - half_angle)],
            [c3[0] + r * cos(330 + half_angle), c3[1] + r * sin(330 + half_angle)],

            // Points on Circle 2 (Center at 60 deg, faces roughly 210 deg)
            [c2[0] + r * cos(210 - half_angle), c2[1] + r * sin(210 - half_angle)],
            [c2[0] + r * cos(210 + half_angle), c2[1] + r * sin(210 + half_angle)]
        ]);
    }
}
//difference() {
//	rotate(90, [0,0,1])  bgs_raw([ 99 , 180 , H ]);
	//translate([0,0,10]) rotate(90, [0,0,1]) cube([99,180,1]);
//	#translate([ -125.5 , 5.5 , 3.5 ])  union() {
//		translate([0, 42.6/2 ,0])  planets();
//		translate([ 71 , 66.67 ,0])  rotate(180, [0,0,1])  planets();
//	}
//}
translate([-99 ,0,0]) bgs_token_cover([ 99 , 180 , H ]);




// CARD HOLDER
	//bgs_card( d=D );
	//translate([-D.x,0,2.5]) bgs_card_cover( d=D );
// TOKEN HOLDER
	//bgs_token(d = D);
	//translate([-D.x,0,2.5]) bgs_token_cover( d=D );


