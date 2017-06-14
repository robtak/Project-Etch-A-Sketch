$(document).ready(function(){
// All functions are below

	//The default grid function that draws the grid presented
	//to the user after page load
	function drawGrid(gridS){
		var $tempRow = $('<div class="row"></div>');
		var $rowContainer = $('#grid-container');
		for (var i=0; i < initGrid; i++){
			$tempRow.clone().appendTo($rowContainer);
		}

		var $tempSquare = $('<div class="square-grid"></div>');
		var $squareContainer = $('.row');
		for (var i=0; i < initGrid; i++){
			$tempSquare.clone().appendTo($squareContainer);
		}

		var squareSize = $('#grid-container').width()/ initGrid;
		$('.square-grid').css({
			'width':squareSize + 'px',
			'height':squareSize + 'px',
		});

		$('.square-grid').hover(function(){
			$(this).addClass('hovered');
		});
	}

	//The user defined grid function that draws a grid base on user grid size
	function newGrid(gridS){

		var $tempRow = $('<div class="row"></div>');
		var $rowContainer = $('#grid-container');
		for (var i=0; i < userDefinedGridSize; i++){
			$tempRow.clone().appendTo($rowContainer);
		}

		var $tempSquare = $('<div class="square-grid"></div>');
		var $squareContainer = $('.row');
		for (var i=0; i < userDefinedGridSize; i++){
			$tempSquare.clone().appendTo($squareContainer);
		}

		var squareSize = $('#grid-container').width()/ userDefinedGridSize;
		$('.square-grid').css({
			'width':squareSize + 'px',
			'height':squareSize + 'px',
		});

		$('.square-grid').hover(function(){
			$(this).addClass('hovered');
		});
	}
	
	//Function to enable user continue a sketch 
	//after the ereaser is used when the pencil
	//icon is click.
	function defaultGrid(){
		$('#draw').click(function(){
			$('.square-grid').hover(function(){
				$(this).addClass('hovered');
			});
		});
	}

	//Function to erease a selected grid square
	// when the erease is clicked and user hover
	// on the required square grid.
	function ereaser(){
		$('#erease').click(function(){
			$('.square-grid').hover(function(){
				$(this).removeClass('hovered');
			});
		})
	}
	
	//Function for clearing all selected square grid on the grid
	function gridClear(){
		$('#clear-grid').click(function(){
			$('.square-grid').removeClass('hovered');
		})
	}

	//User defined gride size function
	function userDefineGrid(){
		$('#new-grid').on('click',function(){
			$('#grid-container').empty();
			userDefinedGridSize = prompt('Enter a valid grid size between 16 and 64');
			while (userDefinedGridSize == null || userDefinedGridSize < 16 || userDefinedGridSize > 64){
				userDefinedGridSize = prompt('Enter a valid grid size between 16 and 64');
				}
			newGrid(userDefinedGridSize);
		});
	}

	//Variable decleration
	var initGrid = 16; //Initial grid size
	var userDefinedGridSize = null; //User defined grid size

	//Function calls for all required actions
	drawGrid(initGrid);
	defaultGrid();
	userDefineGrid();
	ereaser();
	gridClear();
});