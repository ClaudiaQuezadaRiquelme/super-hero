$( document ).ready(function() {
    console.log('hola');
    let endpoint = 'https://superheroapi.com/api.php/';
    let apiKey = '10227467647539287/';

    $( '#heroBtn' ).click(function() {
        setTimeout(() => {
            if($('#heroSearch').hasClass('valid')) {
                $( '#heroInfoTitle' ).css('display', 'block');
                $.ajax({
                    type: "GET",
                    url: endpoint + apiKey + $( "#heroSearch" ).val(),
                    contentType: "application/json",
                    dataType: 'json',
                    success: function (response) {
                        console.log('API response:');
                        console.log(JSON.stringify(response));
                        showCard(response);
                        statistics('heroStatistics', response);
                    },
                    error: function (xhr, status) {
                        // handle errors
                    }
                });
            } 
        }, 10);
    });
});