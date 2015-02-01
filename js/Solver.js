var Sudoku = Sudoku || {};
Sudoku.Solver = function(checker, boardSize){
	var solver = {},
		chk = checker, 
		valueCap = boardSize;
	
	solver.solve = function(board, emptySpots){
		var row, column, value, valueFound;
				
		for(var i = 0; i< emptySpots.length; ){
			row = emptySpots[i][0];
			column = emptySpots[i][1];
			value = board[row][column] + 1;
			valueFound = false;
			while(!valueFound && value <= valueCap){
				if(chk.checkValue(board, row, column, value)) {
					valueFound = true;
					board[row][column] = value;
					i++;
				} else {
					value++;
				}
			}

			if(!valueFound){
				board[row][column] = 0;
				i--;
				if(i<0){
					i=0;
				}
			}
		}
		
		_.each(board, function(row){
			console.log(row.join());
		});
		
		return board;
	}
	
	return solver;
};