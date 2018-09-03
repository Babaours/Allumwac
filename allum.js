let allum = -1;

function drawAllum(size)
{
	let i=0;
	while (i < allum)
	{
		$("#container").append('<div class="allum"></div>');
		i++;
	}

}

function playerTurn()
{
	$("#validate").click(function()
	{
		let allumValue = parseInt($("#monselect option:selected").val());
		removeAllum(allumValue);

		if(endGame(0))
			return;
		
		computerTurn();
		
		if(endGame(1))
			return;
		
	});


}

function computerTurn()
{
	
	var mathRandom = Math.floor(Math.random() * 3) + 1;
	removeAllum(mathRandom);
}

function removeAllum(remove)
{
	let j = 0;
	while(j < remove)
	{
		$('.allum').first().remove();
		j++;
	}
}



function endGame(value)
{
	if($(".allum").length == 0 && value == 0)
	{
		alert("you lose");
		$("#replay").show();
		$("#validate").prop("disabled", true);
		return true;
	}

	else if($(".allum").length == 0 && value == 1)
	{
		alert("you win");
		$("#replay").show();
		$("#validate").prop("disabled", true);
		return true;
	} 

	return false;
}

function replay()
{
	$("#replay").click(function()
	{
		location.reload();
	});
}

$(document).ready(function()
	{
		//$('button').prop('disabled', true);
		while(allum < 15 || allum > 95)
		{

			let tmp = prompt("Entrez un nombre entre 15 et 95 siouplait :)");
			allum=parseInt(tmp);

			if(isNaN(allum))
				allum = -1;
		}


		drawAllum();
		playerTurn();
		replay();
	});