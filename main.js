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
        math: 'math',
        underscore: 'node_modules/underscore/underscore',
        
    }
});
 
require(['jquery','moment','math','underscore'], function($,moment,math,_) {
    // alert($().jquery);
    var date =  moment(new Date()).format('YYYY-MM-DD');
    var sum = math.add(3,5);
    var ary =_.map([1,2,3], function(num){ return num * 3; });
    $('body').append(date).append('<p>'+sum+'</p>').append('<p>'+ary+'</p>');
});