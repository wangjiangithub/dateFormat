require.config({
	shim: {  
        'underscore':{
            exprots: '_'
        },
        'backbone':{
            deps: ['underscore','jquery'],
            exprots: 'Backbone'
        }

//         'jquery.scroll': {
// 　　　　　　deps: ['jquery'],
// 　　　　　　exports: 'jQuery.fn.scroll'
// 　　　　}
    },
    paths: {
        jquery: 'jquery-1.7.2',
        moment: 'node_modules/moment/moment',
        math: 'math'
    }
});
 
require(['jquery','moment','math'], function($,moment,math) {

    // alert($().jquery);
    var date =  moment(new Date()).format('YYYY-MM-DD');
    var sum = math.add(3,5);
    $('body').append(date).append('<p>'+sum+'</p>');
});