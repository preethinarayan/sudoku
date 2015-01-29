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
				[0,0,0,0,8,0,0,7,9]];
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
		expect(checker.checkBlock(board, 6, 1, 1)).toBe(true);
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
	
	
});