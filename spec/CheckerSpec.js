describe("Checker", function(){
	var checker, board;
	beforeEach(function(){
		checker = Sudoku.Checker(3);
		board = [[5,3,0,0,7,0,0,0,0],
				[6,0,0,1,9,5,0,0,0],
				[0,9,8,0,0,0,0,6,0],
				[8,0,0,0,6,0,0,0,3],
				[4,0,0,8,0,3,0,0,1],
				[7,0,0,0,2,0,0,0,6],
				[0,6,0,0,0,0,2,8,0],
				[0,0,0,4,1,9,0,0,5],
				[0,0,0,0,8,0,0,7,9]],
		invalidBoard = [[5,3,3,0,7,0,0,0,0],
				[6,0,0,1,9,5,0,0,0],
				[0,9,8,0,0,0,0,6,0],
				[8,0,0,0,6,0,0,0,3],
				[4,0,0,8,0,3,0,0,1],
				[7,0,0,0,2,0,0,0,6],
				[0,6,0,0,0,0,2,8,0],
				[0,0,0,4,1,9,0,0,5],
				[0,0,0,0,8,0,0,7,9]],
		result = [[5,3,4,6,7,8,9,1,2],
				[6,7,2,1,9,5,3,4,8],
				[1,9,8,3,4,2,5,6,7],
				[8,5,9,7,6,1,4,2,3],
				[4,2,6,8,5,3,7,9,1],
				[7,1,3,9,2,4,8,5,6],
				[9,6,1,5,3,7,2,8,4],
				[2,8,7,4,1,9,6,3,5],
				[3,4,5,2,8,6,1,7,9]];
	});
	
	it("should check if entry into row is possible", function(){
		expect(checker.checkRow(board, 0, 1)).toBe(true);
		expect(checker.checkRow(board, 0, 5)).toBe(false);
		expect(checker.checkRow(board, 0, 7)).toBe(false);
		expect(checker.checkRow(board, 2, 7)).toBe(true);
	});
	
	it("should check if entry into column is possible", function(){
		expect(checker.checkColumn(board, 0, 1)).toBe(true);
		expect(checker.checkColumn(board, 0, 9)).toBe(true);
		expect(checker.checkColumn(board, 0, 8)).toBe(false);
		expect(checker.checkColumn(board, 8, 8)).toBe(true);
	});
	
	it("should check if entry into the block is possible", function(){
		expect(checker.checkBlock(board, 2, 6, 1)).toBe(true);
		expect(checker.checkBlock(board, 6, 0, 1)).toBe(true);
		expect(checker.checkBlock(board, 8, 6, 9)).toBe(false);
	});
	
	it("should check if entry value to the board is possible", function(){
		expect(checker.checkValue(board, 2, 1, 1)).toBe(true);
		expect(checker.checkValue(board, 1, 1, 1)).toBe(false);
		expect(checker.checkValue(board, 1, 1, 1)).toBe(false);
		expect(checker.checkValue(board, 7, 6, 1)).toBe(false);
		expect(checker.checkValue(board, 7, 7, 4)).toBe(false);
		expect(checker.checkValue(board, 8, 6, 4)).toBe(true);
	});
	
	it("should be able to replicate a board with an empty cell in place of the value", function(){
		var newBoard = checker.withoutCell(board,4,3),
			value = board[4][3];
		expect(newBoard[4][3]).toEqual(0);
		newBoard[4][3] = value;
		expect(newBoard).toEqual(board);
	});
	
	it("should check if a given solved board is valid", function(){
		expect(checker.checkBoard(result)).toBe(true);
	});
	
	it("should check if a given solved board is valid", function(){
		expect(checker.checkBoard(invalidBoard)).toBe(false);
	});
	
	
});