document.addEventListener('deviceready', function(){
    listSparks()
});

function listSparks() {
    $.getJSON('http://sparks.burntheflash.com/v1/sparks', {}, function(data) {
        var $sparksContainer = $('.sparks-feed__item');
        $.each(data, function(i, item){
            $sparksContainer.append(`<img src="${item.midia}" class="unseen" />`);
        })
    });
}

function createSpark() {
    navigator.camera.getPicture(onSuccess, onFail, { quality: 20,
        destinationType: Camera.DestinationType.FILE_URL 
    });
}
