let bt = document.getElementsByClassName("btn");
var mainDiv = document.getElementsByClassName('main');

bt=onclick = function(){
    for(var i=0;i<6;i++){
        (function(x){
            setTimeout(lotto,1000*x);
        })(i);
    }
};

function lotto(){
    // var mainDiv = document.getElementsByClassName('main');
    // console.dir(mainDiv);
    
    var num = Math.floor(Math.random()*45)+1;
    
    var header = document.createElement('div');
    var attr = document.createAttribute('class');
    attr.value = "t";
    header.setAttributeNode(attr);

    var textNode = document.createTextNode(num);
    header.appendChild(textNode);

    let divv = document.querySelector('.main');
    divv.appendChild(header);
}
