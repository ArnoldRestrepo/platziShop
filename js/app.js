var $form 			= $("#suscribeForm"),
	$formGroup 		= $form.find('.form-group'),
	$formControl    = $formGroup.find('.form-control');

$form.submit(function(event) {
	event.preventDefault();
	var error = Math.random() > 0.5;
  $formGroup.removeClass().addClass('form-group');
  $formControl.removeClass().addClass('form-control');
  $formGroup.addClass(error ? 'has-danger' : 'has-success');
  $formControl.addClass(error ? 'form-control-danger' : 'form-control-success');
  $formGroup.find('.form-control-feedback').remove();
	var el;
	if (error) {
		el = $('<div>', { html: 'Ha ocurrido un error' })
	} else {
		 el = $('<div>', { html: 'Te enviaremos todas las novedades!' })
	};

	el.addClass('form-control-feedback');
	$formGroup.append(el);
});

/* Modal 
function mostrarModal() {
  console.log()
  if (!JSON.parse(localStorage.noMostrarModal)) {
    $('#modalOferta').modal()
  }

  $('#btnNoRegistrar').click((ev) => {
    localStorage.noMostrarModal = true
  })
}*/

var $filtrosToggle = $('#filtros-toggle');

$filtrosToggle.click(function(event){
	event.preventDefault();
	var $i = $filtrosToggle.find('i.fa');
	var isDown = $i.hasClass('fa-chevron-down');
	if (isDown) {
	    $i.removeClass('fa-chevron-down').addClass('fa-chevron-up')
	  } else {
	    $i.removeClass('fa-chevron-up').addClass('fa-chevron-down')
	  }
});
