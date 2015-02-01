describe("Board", function(){
	var board, solver = {}, boardId = {},
		generator = [[5,3,0,0,7,0,0,0,0],
					  [6,0,0,1,9,5,0,0,0],
					  [0,9,8,0,0,0,0,6,0],
					  [8,0,0,0,6,0,0,0,3],
					  [4,0,0,8,0,3,0,0,1],
					  [7,0,0,0,2,0,0,0,6],
					  [0,6,0,0,0,0,2,8,0],
					  [0,0,0,4,1,9,0,0,5],
					  [0,0,0,0,8,0,0,7,9]];
	beforeEach(function(){	
		board = Sudoku.Board(generator, solver, boardId, 3);
	});
	
	it("should be able to find empty postions on the board", function(){
		var emptyPositions = board.emptyPostions(generator);
		expect(emptyPositions.length).toEqual(51);
	});
});