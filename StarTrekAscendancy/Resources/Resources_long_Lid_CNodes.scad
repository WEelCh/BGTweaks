				
DIM = [
	76.5, // Spielerinnenablage richtung
	160.5, // Links-Rechts
	29
];



difference(){

	union(){
		cube([ DIM.x-2 , DIM.y-2 , 1 ]);
		translate([ 0 , 1 , 1 ]) cube([ DIM.x-2 , DIM.y-4 , 2 ]);
	}
	
	// Symbol
	translate([ 0.5*(DIM.x-2) , 0.5*(DIM.y-2) , 2 ]) Symbol();
}

module Symbol () {
	
	difference(){
		cylinder(h=2 , r=23 , $fn=1000);
		cylinder(h=2 , r=20 , $fn=1000);
	}
	
	
	X1 = 13  ; X2 = 13+7 ; 
	Y1 = 9.5 ; Y2 = 9.5+9.5 ; 
	Z  = 5   ;
	CubePoints = [
	  [  0,  Y1,  0 ],  //0
	  [ X1,  0,  0 ],  //1
	  [ X2, Y1,  0 ],  //2
	  [ X1, Y2,  0 ],  //3

	  [  0,  Y1,  Z ],  //4
	  [ X1,  0,  Z ],  //5
	  [ X2,  Y1,  Z ],  //6
	  [ X1,  Y2,  Z ]]; //7
	  
	CubeFaces = [
	  [0,1,2,3],  // bottom
	  [4,5,1,0],  // front
	  [7,6,5,4],  // top
	  [5,6,2,1],  // right
	  [6,7,3,2],  // back
	  [7,4,0,3]]; // left
	  
	translate([ -0.5*(X2) , -Y1 , 0 ]) polyhedron( CubePoints, CubeFaces );
}
