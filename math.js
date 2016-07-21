define(['moment'],function(moment){
    var add = function(x,y){
        var date = moment(new Date()).format('YYYY-MM-DD');        
        return x+y+"<br>"+date;
    }
    return{
        add:add
    };
});