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

