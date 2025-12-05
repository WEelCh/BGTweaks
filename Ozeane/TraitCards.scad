
$fn=50; 



module rcube ( d , r=1 , c="" ) {
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



module base_plate ( d , w , f1 , f2 ) {
	rcube([ d.x , d.y , f1 ] , c="xy" );
	difference(){
		translate([0,0,f1]) 			rcube([ d.x , d.y , f2 ] , 			 		c="xy" );
		translate([w,w,f1]) 			rcube([ d.x-2*w , d.y-2*w , 2*f2 ] ,r=f2 , c="xy" );
		translate([0.3*d.x,0,f1]) rcube([ 0.4*d.x , d.y , 2*d.z ] ,	 	r=f2 , c="xz" );
		translate([0,0.3*d.y,f1]) rcube([ d.x , 0.4*d.y , 2*d.z ] ,	 	r=f2 , c="yz" ); } }



module nops ( d , w , f1 , f2 ) {
	translate([ 0,0,d.z+w-(8-f1-f2) ]) union(){
		translate([ w , w+6 , 0 ]) 				scale([0.25,1,1])rotate([0,90,0])sphere(2.5);
		translate([ d.x-w , w+6 , 0 ]) 		scale([0.25,1,1])rotate([0,90,0])sphere(2.5);
		translate([ d.x-w , d.y-(w+6) , 0 ])scale([0.25,1,1])rotate([0,90,0])sphere(2.5);
		translate([ w , d.y-(w+6) , 0 ]) 		scale([0.25,1,1])rotate([0,90,0])sphere(2.5); } }



module nop_holes ( d , w , f1 , f2 ) {
	translate([ w , w+6 , 8 ]) 					scale([0.25,1,1])rotate([0,90,0])sphere(2.5);
	translate([ d.x-w , w+6 , 8 ]) 			scale([0.25,1,1])rotate([0,90,0])sphere(2.5);
	translate([ d.x-w , d.y-(w+6) , 8 ])scale([0.25,1,1])rotate([0,90,0])sphere(2.5);
	translate([ w , d.y-(w+6) , 8 ]) 		scale([0.25,1,1])rotate([0,90,0])sphere(2.5); }



// =========================================================================================== //



module card_holder ( d , w , f1 , f2 ) {
	difference(){
		union(){
			base_plate( d , w , f1 , f2 );
			// HOLDER
			difference(){
				translate([w,w,f1]) 			rcube([ d.x-2*w , d.y-2*w , d.z ] , c="xy" );
				translate([2*w,2*w,f1])		cube([ d.x-4*w , d.y-4*w , 2*d.z ]);
				translate([w+15,w,f1])	cube([ d.x-2*w-30 , d.y-2*w , 2*d.z ]);
				//translate([w,w+12,f1])	cube([ d.x-2*w , d.y-2*w-24 , 2*d.z ]); 
				} }
	//nop_holes( d , w , f1 , f2 ); 
				} }



module card_holder_topper ( d , w , f1 , f2 ) { 
	// PLATE
	difference(){
		rcube([ d.x , d.y , w ] , c="xy" );
		#translate([8*w,8*w,0]) rcube([ d.x-16*w , d.y-16*w , w ] , c="xy" , r=5 ); }
	// WALL
	difference(){
		translate([0,0,w]) rcube([ d.x , d.y , d.z ] , c="xy");
		translate([w,w,w]) rcube([ d.x-2*w , d.y-2*w , d.z ] , c="xy");
		translate([0.3*d.x,0,d.z+w-f2]) rcube([0.4*d.x,d.y,2*d.z] , c="xz");
		translate([0,0.3*d.y,d.z+w-f2]) rcube([d.x,0.4*d.y,2*d.z] , c="yz"); }
	//nops( d , w , f1 , f2 ); 
		}



module token_holder ( d , w , f1 , f2 ) {
	difference(){
		union(){
			base_plate( d , w , f1 , f2 );
			difference(){
				#translate([w+0.5,w+0.5,f1]) rcube([d.x-2*w-1,d.y-2*w-1,d.z] , c="xy" );
				translate([2*w+0.5,2*w+0.5,f1]) rcube([d.x-4*w-1,d.y-4*w-1,2*d.z] , r=3 , c="" ); } }
		//nop_holes( d , w , f1 , f2 ); 
				} }



module token_holder_topper ( d , w , f1 , f2 ) {
	// GRID
	difference(){
		rcube([ d.x , d.y , w ] , c="xy" );
		for ( i = [0:1:10]) {
			for ( j = [0:1:12]) {
				translate([ 3.5+2*i+5*i , 4.5+2*j+5*j , 0 ]) rcube([ 5 , 5 , w ] , c="xy" ); } } }
	// WALL
	difference(){
		translate([ 0 , 0 , w ]) rcube([ d.x , d.y , d.z ] , c="xy" );
		#translate([ w , w , w ]) rcube([ d.x-2*w , d.y-2*w , d.z ] , c="xy" );
		translate([ 0.3*d.x , 0 , d.z+w-f2 ]) rcube([ 0.4*d.x , d.y , 2*d.z ] , c="xz" );
		translate([ 0 , 0.3*d.y , d.z+w-f2 ]) rcube([ d.x , 0.4*d.y , 2*d.z ] , c="yz" ); }
	//nops( d , w , f1 , f2 );
}


// TRAIT CARDS OZEANE
// Höhe 76 + 2.5 = 78.5
//translate([5,0,0])   card_holder( d=[ 71 , 98 , 76 ] , w=1 , f1=2.5 , f2=2.0 );
//translate([-75,0,0]) card_holder_topper( d=[ 71 , 98 , 76 ] , w=1 , f1=2.5 , f2=2.0 );

// TRAIT CARDS EVOLUTION
//translate([0,0,0]) card_holder( d=[ 64 , 98 , 46 ] , w=1 , f1=2.5 , f2=2.0 );
//translate([-64,0,2.5+2]) card_holder_topper( d=[ 64 , 98 , 46 ] , w=1 , f1=2.5 , f2=2.0 );

// TOKENS EVOLUTION
//token_holder( d=[ 82 , 98 , 46 ] , w=1 , f1=2.5 , f2=2.0 );
//token_holder_topper( d=[ 82 , 98 , 46-2.5 ] , w=1.25 , f1=2.5 , f2=2.0 );

// EVOLUTION PLAYER BOARDS
card_holder( d=[ 139 , 50 , 64 ] , w=1 , f1=2.5 , f2=2.0 );
//token_holder_topper( d=[ 82 , 98 , 47-2.5 ] , w=1.25 , f1=2.5 , f2=2.0 );


// BEDENKE: 4 mm walls und 2 mm margin













