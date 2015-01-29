var Sudoku = Sudoku || {};
Sudoku.Board = function(generator, checker, boardId){
	var board = {},
		IN_PROGRESS = true, 
		startBoard = generator,
		boardChecker = checker,
		boardUI = boardId;
	
	board.reset = function(){
		IN_PROGRESS = false;
	}
	
	board.create = function(){
		// Do all the UI setup here
	}
	
	board.emptyPostions = function(){
		var result = [];
		_.each(startBoard, function(row, i){
			_.each(row, function(value, j){
				if(value === 0){
					result.push([i,j]);
				}
			})
		});
		return result;
	}
	
	board.inProgress = function(){
		return IN_PROGRESS;
	}
	
	return board;
	
};