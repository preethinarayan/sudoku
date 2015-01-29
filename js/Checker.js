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
			rowEnd = 0, colEnd = 0, flag = false,
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
			if(i >= rowStart && i <= rowEnd){
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
	
	checker.checkValue = function(board, row, column, value){
		if(this.checkRow(board, row, value) && this.checkColumn(board, column, value) && this.checkBlock(board, row, column, value)){
			return true;
		}
		return false;
	}
	
	return checker;
	
};