describe("Solver", function(){
	var solver = {},
		startBoard9 = [[5,3,0,0,7,0,0,0,0],
				[6,0,0,1,9,5,0,0,0],
				[0,9,8,0,0,0,0,6,0],
				[8,0,0,0,6,0,0,0,3],
				[4,0,0,8,0,3,0,0,1],
				[7,0,0,0,2,0,0,0,6],
				[0,6,0,0,0,0,2,8,0],
				[0,0,0,4,1,9,0,0,5],
				[0,0,0,0,8,0,0,7,9]],
		emptyPositions9 = [[0,2],[0,3],[0,5],[0,6],[0,7],[0,8],
				[1,1],[1,2],[1,6],[1,7],[1,8],
				[2,0],[2,3],[2,4],[2,5],[2,6],[2,8],
				[3,1],[3,2],[3,3],[3,5],[3,6],[3,7],
				[4,1],[4,2],[4,4],[4,6],[4,7],
				[5,1],[5,2],[5,3],[5,5],[5,6],[5,7],
				[6,0],[6,2],[6,3],[6,4],[6,5],[6,8],
				[7,0],[7,1],[7,2],[7,6],[7,7],
				[8,0],[8,1],[8,2],[8,3],[8,5],[8,6]],
		result9 = [[5,3,4,6,7,8,9,1,2],
				[6,7,2,1,9,5,3,4,8],
				[1,9,8,3,4,2,5,6,7],
				[8,5,9,7,6,1,4,2,3],
				[4,2,6,8,5,3,7,9,1],
				[7,1,3,9,2,4,8,5,6],
				[9,6,1,5,3,7,2,8,4],
				[2,8,7,4,1,9,6,3,5],
				[3,4,5,2,8,6,1,7,9]],
		startBoard4 = [[1,0,0,4],
				[3,0,0,2],
				[0,1,4,0],
				[0,3,0,1]],
		emptyPositions4 = [[0,1],[0,2],
						[1,1],[1,2],
						[2,0],[2,3],
						[3,0],[3,2]],
		result4 = [[1,2,3,4],
				[3,4,1,2],
				[2,1,4,3],
				[4,3,2,1]],
		startBoard91 = [[0,9,0,0,0,0,0,0,6],
				[0,0,0,9,6,0,4,8,5],
				[0,0,0,5,8,1,0,0,0],
				[0,0,4,0,0,0,0,0,0],
				[5,1,7,2,0,0,9,0,0],
				[6,0,2,0,0,0,3,7,0],
				[1,0,0,8,0,4,0,2,0],
				[7,0,6,0,0,0,8,1,0],
				[3,0,0,0,9,0,0,0,0]],
		emptyPositions91 = [
				[0,0],[0,2],[0,3],[0,4],[0,5],[0,6],[0,7],
				[1,0],[1,1],[1,2],[1,5],
				[2,0],[2,1],[2,2],[2,6],[2,7],[2,8],
				[3,0],[3,1],[3,3],[3,4],[3,5],[3,6],[3,7],[3,8],
				[4,4],[4,5],[4,7],[4,8],
				[5,1],[5,3],[5,4],[5,5],[5,8],
				[6,1],[6,2],[6,4],[6,6],[6,8],
				[7,1],[7,3],[7,4],[7,5],[7,8],
				[8,1],[8,2],[8,3],[8,5],[8,6],[8,7],[8,8]],
		result91 = [[8,9,5,7,4,2,1,3,6],
				 [2,7,1,9,6,3,4,8,5],
				 [4,6,3,5,8,1,7,9,2],
				 [9,3,4,6,1,7,2,5,8],
				 [5,1,7,2,3,8,9,6,4],
				 [6,8,2,4,5,9,3,7,1],
				 [1,5,9,8,7,4,6,2,3],
				 [7,4,6,3,2,5,8,1,9],
				 [3,2,8,1,9,6,5,4,7]];			
	
	it("should solve a size 9 puzzle", function(){
		var checker = Sudoku.Checker(3);
		var solver = Sudoku.Solver(checker, 9);
		var expResult = solver.solve(startBoard9, emptyPositions9);
		expect(expResult).toEqual(result9);
	});
	
	it("should solve a another size 9 puzzle", function(){
		var checker = Sudoku.Checker(3);
		var solver = Sudoku.Solver(checker, 9);
		var expResult = solver.solve(startBoard91, emptyPositions91);
		expect(expResult).toEqual(result91);
		
	});
	
	it("should solve a size 4 puzzle", function(){
		var checker = Sudoku.Checker(2);
		var solver = Sudoku.Solver(checker, 4);
		var expResult = solver.solve(startBoard4, emptyPositions4);
		expect(expResult).toEqual(result4);
	});
	
});