Sudoku Puzzle
-------------

This is a simple sudoku solver purely based on Javascript. Once the html page is loaded up you have the option to - 

a) Try solving the puzzle by putting in inputs 
b) Try the solver on the page which solves the puzzle
c) Check your input that you entered
d) Reset the board if things go wrong

Algorithm used to solve the puzzle 
----------------------------------

I've used a simple Sudoku solving algorithm by checking the row, column and block for the prior presence of the number being entered. I've used backtracking here to solve the puzzle. In terms of checking whether an input would lead to a valid solution a number of other techniques can be used as well (https://www.sudokuoftheday.com/techniques/)

Generator used in the puzzle
----------------------------

I've used a hard coded puzzle here. If time had permitted I would have plugged in an implementation of a puzzle generator for Sudoku.(https://www.sudokuoftheday.com/techniques/)

Visual cues used in the puzzle
------------------------------

I've highlighted the row, column and cells with the same input value when a value is entered to help solve the puzzle. I've also limited the input to numbers.

Browsers supported
------------------

I've tested this solution on webkit browsers and firefox. Mobile Safari and Android browsers are supported as well.

Technologies used
-----------------

JQuery
Underscore
Jasmine
SASS gem to convert SCSS to CSS
CSS
HTML

I've used JQuery for DOM parsing and underscore for helper functions. I've tested the core algorithm using Jasmine. The tests can be run and the results can be seen on the SpecRunner.html page. I've used SASS gem to watch and convert index.cscc to index.css. 

The reason I chose JQuery and Underscore is because they are good stable libraries which I've used in the past. I chose Jasmine for testing primarily because I've used it in the past. If time permitted I would have tried using other libraries like mocha. I've also used SASS to generate CSS and found it simple to use.  

Running the puzzle
-------------------

Assuming all the dependencies libs and files are present as in the folder structure, launching index.html should be enough to get to the page.  

