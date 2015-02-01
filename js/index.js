var Sudoku = Sudoku || {}
$(document).ready(function(){
	var generator = Sudoku.Generator,
		checker = Sudoku.Checker(3),
		solver = Sudoku.Solver(checker, 9),
		board = Sudoku.Board(generator, checker, $("#sudoku-grid"), 3);
	
	board.create();
	board.setActionHandlers();
})


