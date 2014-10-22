// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require bootstrap
//= require_tree .

$(function () {
	var $form = $("form.contact");
	var $email = $('#email');
	var $msg = $('textarea');

	$form.on("submit", function (event) {
		event.preventDefault();

		$('div.alert').remove();
		$msg.removeClass('alert alert-danger alert-success')
		$email.removeClass('alert alert-danger alert-success')

		if ($msg.val() === "" ) {
			$msg.addClass('alert alert-danger');

			$('form.contact')
			.prepend($('<div class="alert alert-danger">\
			What is your question....?</div>'))
		} else {
			$msg.addClass('alert alert-success');
		}

		if ($email.val() === "") {
			$email.addClass('alert alert-danger');

			$('form.contact')
			.prepend($('<div class="alert alert-danger">\
			Can\'t have blank email!!!!</div>'))
		} else {
			$email.addClass('alert alert-success');
		}
	});
});
