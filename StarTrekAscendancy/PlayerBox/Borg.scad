
DIM = [
	107,
	230,
	29*2
];

WALL  = 2;
FLOOR = 2;



union(){
	difference(){
		cube(DIM);
	
		// Lid Opening
		Lid = [ 0,0,3 ];
		translate([ WALL , WALL , DIM.z-Lid.z ]) cube([ DIM.x-WALL+0.1 , DIM.y-2*WALL , Lid.z+0.1 ]);
		translate([ WALL-1 , WALL-1 , DIM.z-Lid.z ]) cube([ DIM.x-1+0.1 , DIM.y-2 , 2 ]);
		
		// Console
		Console = [0,0,3];
		translate([ WALL , WALL , DIM.z-Lid.z-Console.z ]) cube([ DIM.x-2*WALL , DIM.y-2*WALL , Lid.z+0.1 ]);
		
		// CubeConsole
		CubeConsole = [ DIM.x-2*WALL , DIM.x-2*WALL , 3 ];
		translate([ WALL , DIM.y-WALL-CubeConsole.y , DIM.z-Lid.z-Console.z-CubeConsole.z ]) cube(CubeConsole);
		
		// CARDS
		// Cmd Cards Stand
		CardsCMDStand = [ 15 , 68 , 0 ];
		translate([ WALL , DIM.y-WALL-CardsCMDStand.y , FLOOR ]) cube([ CardsCMDStand.x , CardsCMDStand.y , DIM.z ]);
		// Tec Cards Stand
		CardsTECStand = [ 11 , 54 , 0 ];
		translate([ DIM.x-WALL-CardsTECStand.x , DIM.y-WALL-CardsTECStand.y-0.5*(CardsCMDStand.y-CardsTECStand.y), FLOOR ]){
			cube([ CardsTECStand.x , CardsTECStand.y , DIM.z ]);};
		// Cmd Cards Storage
		CardsCMDStorage = [ 95 , 68 , 15.1 ];
		translate([ WALL , DIM.y-WALL-CardsCMDStand.y , DIM.z-Lid.z-Console.z-CubeConsole.z-CardsCMDStorage.z+0.1 ]) cube(CardsCMDStorage);
		// Tec Cards Storage
		CardsTECStorage = [ 79 , 54 , 11.1 ];
			translate([ WALL+10 , DIM.y-WALL-CardsTECStand.y-0.5*(CardsCMDStand.y-CardsTECStand.y), DIM.z-Lid.z-Console.z-CubeConsole.z-CardsCMDStorage.z-CardsTECStorage.z+0.2 ]){
			cube(CardsTECStorage);};
		
		// Dice Storage
		Dice = [ 72 , 46 , DIM.z ];
		translate([ WALL+CardsCMDStand.x+2 , DIM.y-WALL-CardsTECStand.y-0.5*(CardsCMDStand.y-CardsTECStand.y)+4 , FLOOR ]){
		cube(Dice);};
		
		// Spires
		Spire = [ DIM.x-2*WALL , 65 , DIM.z ];
		translate([ WALL , WALL , FLOOR ]) cube(Spire);
		
		// Cubes
		Cubes = [ 0.5*(DIM.x-2*WALL)-2 , DIM.y-4*WALL-Spire.y-CardsCMDStand.y , DIM.z ];
		translate([ WALL , WALL+Spire.y+WALL , FLOOR ]) cube(Cubes);
		translate([ WALL+Cubes.x+2 , WALL+Spire.y+WALL , FLOOR ]) cube(Cubes);
		echo(Cubes.x,Cubes.y);
	}
	
	// Lid Opening Cylinder
	translate([ 0 , 1 , DIM.z-1 ]) rotate([0,90,0]) cylinder(DIM.x,r=1,$fn=50);
	translate([ 0 , DIM.y-1 , DIM.z-1 ]) rotate([0,90,0]) cylinder(DIM.x,r=1,$fn=50);

}



