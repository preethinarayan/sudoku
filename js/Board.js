var Sudoku = Sudoku || {};
Sudoku.Board = function(generator, checker, boardId, bSize){
	var board = {},
		IN_PROGRESS = true, 
		startBoard = generator,
		boardChecker = checker,
		blockSize = bSize,
		boardUI = boardId;
		
	var NUM_1 = 49,
		NUM_2 = 50,
		NUM_3 = 51,
		NUM_4 = 52,
		NUM_5 = 53,
		NUM_6 = 54,
		NUM_7 = 55,
		NUM_8 = 56,
		NUM_9 = 57;
	
	var NUMPAD_1 = 97,
		NUMPAD_2 = 98,
		NUMPAD_3 = 99,
		NUMPAD_4 = 10,
		NUMPAD_5 = 101,
		NUMPAD_6 = 102,
		NUMPAD_7 = 103,
		NUMPAD_8 = 104,
		NUMPAD_9 = 105;
		
	var BACKSPACE = 8,
		DELETE = 46;

	
	board.resetBoard = function(){
		IN_PROGRESS = false;
		boardUI.empty();
		board.create();
		board.setActionHandlers();
	}
	
	board.inProgress = function(){
		return IN_PROGRESS;
	}
	
	board.create = function(){
		draw(startBoard);
	}
	
	function draw(board){
		var row, column, section, block, row, cell, inp, value, x, y;
		for(var i=0; i<blockSize; i++){
			section = $("<div />").addClass("section");
			for(var j=0; j<blockSize; j++){
				block = $("<div />").addClass("block");
				for(var l=0; l<blockSize; l++){
					row = $("<div />").addClass("row");
					for(var m=0; m<blockSize; m++){
						cell = $("<div />").addClass("cell");
						inp = $("<input />").attr("type", "number");					
						x = (i*blockSize) + l;
						y = (j*blockSize) + m;
						value = board[x][y];
						if(value != 0){
							inp.val(value);
							inp.attr("readonly", "true");
							inp.addClass("given");
						}	
						inp.attr("data-row", x);
						inp.attr("data-col", y);
						inp.appendTo(cell);
						cell.appendTo(row);
					}
					row.appendTo(block);
				}
			block.appendTo(section);	
			}
		section.appendTo(boardUI);	
		}		
	}
	
	board.emptyPostions = function(board){
		var result = [];
		_.each(board, function(row, i){
			_.each(row, function(value, j){
				if(value === 0){
					result.push([i,j]);
				}
			})
		});
		return result;
	}
	
	function solved(board){
		var spotsWithZero = 0, val;
		$("input").each(function(){
			val = $(this).val();
			if(val == "") {
				spotsWithZero = spotsWithZero + 1;
			}
		});
		console.log("Spots with zero "+spotsWithZero);
		if(spotsWithZero > 0){
			return false;
		} else {
			return true;
		}
	}
	
	function getBoard() {
		var boardSize = blockSize * blockSize,
			resultBoard = new Array([]), x, y, val, value;
		while(resultBoard.push([]) < boardSize);
		$("input").each(function(){
			x = $(this).data("row");
			y = $(this).data("col");
			val = $(this).val();
			if (val === ""){
				value = 0;
			} else {
				value = parseInt(val);
			}
			resultBoard[x][y] = value;
		});
		return resultBoard;
	}
	
	function checkBoard(){
		var validBoard = false, existingBoard = getBoard();
		validBoard = boardChecker.checkBoard(existingBoard);
		if(validBoard && solved(existingBoard)) {
			alert("Good job! You've solved the board.")
		} else if(validBoard) {
			alert("Good job! Keep going and complete the puzzle.")
		} else {
			alert("The board had incorrect values in it. Try checking the board after modifying values.")	
		}
	}
	
	function solveBoard(){
		var solver = Sudoku.Solver(boardChecker, blockSize*blockSize),
			solvedBoard = [], validBoard = false;
		var flag = confirm("Are you sure you want to solve the board when still working on it? We will solve the board as it was to begin with.");
		if(flag === true) {
			solvedBoard = solver.solve(startBoard, board.emptyPostions(startBoard));
			boardUI.empty();
			draw(solvedBoard);							
		}
	}
	
	function validateInput(e){
		var input = $(this),
			value = e.keyCode,
			error = $("#error");
		error.empty();
		
		switch(value) {
			case BACKSPACE:
			case DELETE:
				input.val("");
				break;
			case NUM_1:
			case NUMPAD_1: 
				input.val(1);
				break
			case NUM_2:
			case NUMPAD_2: 
				input.val(2);
				break;	
			case NUM_3:
			case NUMPAD_3: 
				input.val(3);
				break;
			case NUM_4:
			case NUMPAD_4: 
				input.val(4);
				break;
			case NUM_5:
			case NUMPAD_5: 
				input.val(5);
				break;
			case NUM_6:
			case NUMPAD_6: 
				input.val(6);
				break;
			case NUM_7:
			case NUMPAD_7: 
				input.val(7);
				break;
			case NUM_8:
			case NUMPAD_8: 
				input.val(8);
				break;
			case NUM_9:
			case NUMPAD_9: 
				input.val(9);
				break;
			default:
				input.val("");
				error.addClass("error");
				error.text("Please enter a number within the range of 1-9");
				break;
		}
		e.preventDefault();
	}
	
	function setFocus(){
		
	}
	
	board.setActionHandlers = function(){
		$("#actions #check-board").click(checkBoard);
		$("#actions #solve-board").click(solveBoard);
		$("#actions #reset-board").click(this.resetBoard);
		$("#sudoku-grid :input:not([readonly])").keydown(validateInput);
		$("#sudoku-grid :input:not([readonly])").focus(setFocus);
	}
	
	return board;
	
};