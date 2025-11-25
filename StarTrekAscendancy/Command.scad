
module Command ( n=5 , x=16 , y=32 , z=2 , f=1 , w=1 , support=5 , finger=5 ) {
	difference() {
		cube([ 2*w+x , 2*w+y , f+(n*z) ]);
		
		translate([w,w,f]) cube([ x,y,f+(n*z) ]); // Token
		
		translate([-0.1 , w+support , f]) cube([2*w+x+0.2 , y-2*support , f+(n*z)]); // Finger
		
		translate([ 0 , w+0.5*y , -0.1 ]) scale([1,2,1]) cylinder(f+0.2,r=finger,$fn=250);
		translate([ 2*w+x , w+0.5*y , -0.1 ]) scale([1,2,1]) cylinder(f+0.2,r=finger,$fn=250);
		
	}	
}

l=1+32; //w+y
for ( i = [ 0 : 0 ] ) translate([ 0 , i*l , 0 ]) Command();
