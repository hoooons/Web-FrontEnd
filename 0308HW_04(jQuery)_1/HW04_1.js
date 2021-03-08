$(document).ready(function (){
    
    var count = 0;
    var res = "";
    $('.btn').on('click',function(){
        $('.input').text($('.input').text()+this.innerText);
    });
    
    $('.clear').on('click',function(){
        $('.input').text("");
    });
    
    $('.result').on('click',function(){
        $('.output').text(eval($('.input').text()));
        $('.input').text("");
    });
});

