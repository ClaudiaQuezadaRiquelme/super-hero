$(document).ready(function () { 
    $("#heroForm").submit(function(e) { // avoid form reset after click
        e.preventDefault();
    });

    validateHeroForm();
});

const validateHeroForm = function() {
  console.log('validateHeroForm');
  jQuery.validator.setDefaults({
    debug: true,
    success: "valid"
  });
  $( "#heroForm" ).validate({
    rules: {
      heroSearch: {
        required: true,
        number: true
      }
    }
  });
}