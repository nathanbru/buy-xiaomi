$(document).ready(function() {
	$('#buy-now-btn').click(function() {
		openModal();
	});

	function openModal() {
		$("#buy-now-modal").modal();
	}
});