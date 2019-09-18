function funcBefore(){
	$('#information').text('Ожидание данных...');
}

function funcSuccess(data){
	$('#information').text(data);
}
$(document).ready(function(){
	$('#load').bind('click', function(){
		// пример передачи значения переменной в данные
		var admin = 'admin';
		$.ajax({
			url:'content.php',
			type: 'POST',
			data: ({name:admin,number:5}),
			dataType:'html',
			beforeSend: funcBefore,
			success: funcSuccess
		});
	});

	$('#done').bind('click', function(){
		$.ajax({
			url:'check.php',
			type: 'POST',
			data: ({name: $('#name').val()}),
			dataType:'html',
			beforeSend: function() {
				// тоже самое
				$('#information').text('Ожидание данных...');
			},
			success: function(data){
				if(data == 'fail') alert('Имя занято');
				else $('#information').text(data);
			}
		});
	});

	$("select[name='country']").bind("change", function(){
		// очистка select city от прежних данных
		$("select[name='city']").empty();
		$.get('countryCheck.php',
		 {country: $("select[name='country']").val()},
		 // массивы раскодировали и приняли в js
		 function(data){
		 	data = JSON.parse(data);
		 	// очистка select city от прежних данных
		 	$("select[name='city']").empty();
		 	for (var id in data){
		 		$("select[name='city']").append($("<option value='" + 
		 			id + "'>" + data[id] + "</option>"));
		 	}
		 });
	});
});
