var $ = $ || {};

var projects = ['pugg', 'sc', 'ips', 'keyboard', 'ludum', 'kitchensupport'];
var modal = {isOpen: false, current: ''};

// Initalize all projects.
projects.forEach(function(project) {
  $("#" + project).parent().click(function () {
    openModal(project);
  });
});

// Hide all modals by default.
$("#modalContainer>div").hide();

function openModal (id) {
  if(!modal.isOpen) {
    modal.current = id;
    $("#modal").show();
    $("#modalContainer").show();
    $("#" + id + '-modal').show();
    setTimeout( function() {
      $("#modal").css("opacity", 1);
      $("#modalContainer").css("opacity", 1);
    }, 150);
    modal.isOpen = true;
    $('#modal').addClass('active');

    setTimeout(function() {
        $('#modal').click(function() {
          closeModal();
        });
      }, 500);
  }
}



function closeModal() {
  if(modal.isOpen) {
    $("#modal").css("opacity", 0);
    $("#modalContainer").css("opacity", 0);
    setTimeout(function() {
      $("#modal").hide();
      $("#modalContainer").hide();

      $("#modalContainer>div").hide();
    }, 500);
    modal = {isOpen: false, current: ''};
    $('#modal').removeClass('active');
    $('body').unbind('click');
  }
}
