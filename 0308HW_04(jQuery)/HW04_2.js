var str ="";
var count = 0;

$('.btn').click(function(){
    if(count==6){           // 이미 전에 실행을 했다면 초기화
        str="";
        count=0;
    }
    let id = setInterval(lotto, 1000);
    setTimeout(function () {
        clearInterval(id);
    }, 6000);
});

function lotto(){    
    var num = Math.floor(Math.random()*45)+1;
    count++;
    
    str += `<div class="t">${num}</div>`;
    $('.main').html(str);

    // 하나하나씩 추가해보기
    // $('<div></div>').attr("class","t").text(num).appendTo($('.main'));
}
