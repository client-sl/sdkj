$(function(){

    time($('#time'))
    setInterval(function(){
        time($('#time'))
    },1000)
    //几月几号+星期几
    function time(obj) {
        // var obj = window.document.getElementById(id);
        var date = new Date();
        var year = date.getFullYear(); //年
        var month = date.getMonth()+1; //月
        var day = date.getDate(); //日
        var hour=date.getHours();
        var str = '';

        var minute=date.getMinutes();
        var second=date.getSeconds();    
        var data = date.getDay(); //星期几

        switch(data){
            case 0:
                weeks="星期日";
                break;
            case 1:
                weeks="星期一";
                break;
            case 2:
                weeks="星期二";
                break;
            case 3:
                weeks="星期三";
                break;
            case 4:
                weeks="星期四";
                break;
            case 5:
                weeks="星期五";
                break;
            case 6:
                weeks="星期六";
                break;
        }

        if(hour>=0&&hour<=7){
            str="凌晨好。"
        }else if(hour>7&&hour<=9){
            str="早上好。"
        }else if(hour>9&&hour<12){
            str="上午好。"
        }else if(hour==12){
            str="中午好。"
        }else if(hour>12&&hour<=18){
            str="下午好。"
        }else if(hour>18&&hour<24){
            str="晚上好。"
        }

        obj.text(str);
        // obj.text('管理员，' + str + '现在是：' + year + '年' + two(month) + '月' + two(day) + '日' + ' ' + weeks + ' ' + two(hour)+':' + two(minute) +':'+ two(second));
    }
    function two(num) {
        if (num<10) {
            num='0'+num;
        }
        return num;
    }
})