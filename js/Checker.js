var Sudoku = Sudoku || {}
Sudoku.Checker = function(blockSize){
	var checker = {},
		bSize = blockSize;
	
	checker.checkRow = function(board, row, value){
		return !_.contains(board[row], value);
	}
	
	checker.checkColumn = function(board, column, value){
		var columns = _.zip.apply(_, board);
		return !_.contains(columns[column], value);
	}
	
	function getBlock(board, row, column){
		var rowStart = 0, colStart = 0,
			rowEnd = 0, colEnd = 0,
			block = [];
		while(row >= rowStart+bSize){
			rowStart += bSize;
		}
		while(column >= colStart+bSize){
			colStart += bSize;
		}
		rowEnd = rowStart + bSize;
		colEnd = colStart + bSize;
		_.each(board, function(row, i){
			if(i >= rowStart && i < rowEnd){
				block.push(row.slice(colStart, colEnd));
			}
		});
		return block;
	}
	
	checker.checkBlock = function(board, row, column, value){
		var block = getBlock(board, row, column);
		value = _.find(block, function(row){
			return _.contains(row, value);
		})
		return _.isUndefined(value) ? true : false;
	}
	
	// checker.checkBlock = function(board, row, column, value){
	// 	var colStart = 0, rowStart = 0, squareSize = bSize;
	// 	while(column >= colStart + squareSize){
	// 		colStart += squareSize;
	// 	}
	// 	while(row >= rowStart + squareSize){
	// 		rowStart += squareSize;
	// 	}
	// 	console.log("Row start is " + rowStart);
	// 	console.log("Col start is " + colStart);
	// 	for(var i=rowStart; i<rowStart+squareSize; i++){
	// 		for(var j=colStart; j<colStart+squareSize; j++){
	// 			if(board[i][j] === value){
	// 				console.log("input value " + value);
	// 				return false;
	// 			}
	// 		}
	// 	}
	// 	return true;
	// }
	
	checker.withoutCell = function(board, row, column){
		var newBoard = _.map(board, _.clone);
		newBoard[row][column] = 0;
		return newBoard;
	}
	
	checker.checkValue = function(board, row, column, value){
		if(this.checkRow(board, row, value) && this.checkColumn(board, column, value) && this.checkBlock(board, row, column, value)){
			return true;
		}
		return false;
	}
	
	checker.checkBoard = function(board){
		var flag, chk = this;
		for(var i=0; i<board.length; i++){
			for(var j=0; j<board.length; j++){
				boardWithoutValue = chk.withoutCell(board, i, j);
				boardValue = board[i][j];
				if(boardValue <=9 && boardValue >=1) {
					if(!chk.checkValue(boardWithoutValue, i, j, board[i][j])){
						return false;
					}
				}
			}
		}
		return true;
	}
	
	return checker;
	
};