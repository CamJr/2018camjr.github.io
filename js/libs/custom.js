$(document).ready(function() {


    var userFeed = new Instafeed({
        get: 'user',
        userId: '1697317359',
        limit: 8,
        resolution: 'low_resolution',
        accessToken: '1697317359.1677ed0.035030b365cf49769bb3f7f3099469e8',
        sortBy: 'most-recent',
        template: '<div class="center col s3"><a href="{{link}}" title="{{caption}}" target="_blank"><img src="{{image}}" alt="{{caption}}" class="img-fluid"/></a></div>',
    });

    userFeed.run();



});
