var nav;    // 一级菜单
var subNav = [];  // 二级菜单
var dht = [];  // 导航图
var list = []; // 搜索列表的内容(商易)

var m=0;
var arr =['#fc9a15','#ff8601','#6bc211','#3bc71e','#3dbe85','#51b2ef','#53b0ff'];   

$(function(){
 	Layout();
    Change();
})
$(window).on('resize scroll',function(){	
	// Layout();
    Change();
});	
function Layout(){
    // $('.btn-rotate').rotate({angle:90});
    // $('.btn-rotate').rotate({angle:45});
	$('.wrap').css('width',$(document).width());
    $('.wrap').css('height',$(window).height());
    $('.content').css('width',$(document).width());
    $('.content').css('height',($(window).height()-$('.header').height() -$('.menu').height()));
    $('.navBar').css('height',$('.content').height());
    $('.navBar').find('ul').css('height',$('.content').height());

	$('.pageWrap').css('height',$('.content').height());
    $('.page').css('height',$('.content').height()-40+'px');

    // $('.dht').css('height',$('.content').height()-80+'px')

    $('.statistics').css('width',$('.page').width());
    $('.statistics').css('height',$('.content').height());

    $('.fastCon').css('width',$('.page').width());
    $('.fastCon').css('height',$('.content').height()-40+'px');

    $('.features').css('height',$('.content').height()+'px');
    $('.features-con').css('height',$('.content').height()+'px');

    $('.lc').css('width',$('.page').width()+'px')

    // 初始化右侧更多功能的序号
    features(0);

    // 右侧第一个页面显示
    $('.page').eq(0).show('fade',1000);

    // 一级菜单的数量
    nav = $('.navBar').find('ul').children('li').length;   

    // 一级菜单下的二级菜单数量
    for (var i = 0; i < nav; i++) {
        // 二级菜单下的第一个默认显示
        $('.page').eq(i).children('.list').eq(0).show();
        subNav.push($('.page').eq(i).children('.subNav').find('ul').children('li').length);
    }

    // 思维导图的颜色
    // $('.dht-btn').each(function(i,elem){
    //     if ($(elem).children('span').length>=2) {
    //         $(elem).children('a').addClass('dht-btn-bg');
    //     }
    // })

    var fw=0;
    // 二级菜单的左边距
    for (var i = 0; i < nav; i++) {
        $('.page').eq(i).children('.subNav').find('ul').css('marginLeft', $('.subNav').width()/2-subNav[i]*100/2);
    }

     // 右侧三级菜单的样式
    for (var i = 0; i < $('.list').length; i++) {
        for (var j = 0; j < $('.list').eq(i).find('ul').children('li').length; j++) {
            $('.list').eq(i).find('ul').children('li').eq(j).css('border-left-color',arr[j%arr.length]);
        }
    }   

    $('.fastCon').children('.list').find('ul').children('li').each(function(i,elem){
        $(elem).css('border-left-width','4px');
        $(elem).css('border-left-color',arr[i%arr.length]);
    })

    if (IEVersion()==8) {
        $('.navBar').css('border-right','1px solid #00adff');
    }
    
    // 导航图的位置
    $('.dht').each(function(i,elem){
        $(elem).hide();
        $(elem).show();
        if ($(elem).parent().parent().children('.subNav').height()) {
            $(elem).css('marginTop',($('.content').height()-36-$(this).height())/2-40+'px')
            $(elem).css('marginTop','20px')
        } else {
            $(elem).css('marginTop',($('.content').height()-36-$(this).height())/2+'px')   
        }      
    })    
}

function Change() {



    $('#fast').click(function(){
        // $('#admin').removeClass('active-admin');
        $(this).siblings().removeClass('active-menu');
        $(this).siblings().removeClass('active-admin');
        $(this).addClass('active-menu');
        
        if (IEVersion()<=8&&IEVersion()>0) {
            $('.statistics').hide();
            $('.fastCon').show();         
        } else {
            $('.statistics').hide('fade',800);
            $('.fastCon').show('fade',800);
        }         
        $('.navBar').find('ul').children('li').removeClass('active-nav');
    }); 
    // 我的桌面 end

    // 快捷菜单 start
    $('#admin').click(function(){
        $(this).siblings().removeClass('active-menu');
        $(this).addClass('active-admin');        
        $('.navBar').find('ul').children('li').removeClass('active-nav');
        $('.navBar').find('ul').children('li').eq(0).addClass('active-nav');
        $('.page').hide();
        $('.page').eq(0).show(); 
        if (IEVersion()<=8&&IEVersion()>0) {
            $('.fastCon').hide();
            $('.statistics').hide();
        } else {
            $('.fastCon').hide('fade',800);
            $('.statistics').hide('fade',800);
        }              
    });
    // 快捷菜单 end

    // 我的桌面 start
    $('#desktop').click(function(){
        $('#admin').removeClass('active-admin');
        $(this).siblings().removeClass('active-menu');
        $(this).addClass('active-menu');
        
        if (IEVersion()<=8&&IEVersion()>0) {
            $('.fastCon').hide();
            $('.statistics').show();
        } else {
            $('.fastCon').hide('fade',800);
            $('.statistics').show('fade',800);
        }         
        $('.navBar').find('ul').children('li').removeClass('active-nav');
    }); 
    // 我的桌面 end

    // 退出 start
    $('#exit').click(function(){
        $('#admin').removeClass('active-admin');
        $(this).siblings().removeClass('active-menu');
        $(this).addClass('active-menu');
        alert("退出系统");     
    }); 
    // 退出 end     

    // 一级菜单的点击效果
    $('.navBar').find('ul').children('li').each(function(j,elem){
        $(elem).click(function(){
             $('#admin').addClass('active-admin');
             $('#desktop').removeClass('active-menu');
            // 我的桌面隐藏
            
            if (IEVersion()<=8&&IEVersion()>0) {
                $('.fastCon').hide();
                $('.statistics').hide();
            } else {
                $('.fastCon').hide('fade',800);
                $('.statistics').hide('fade',800);
            }
            $('.navBar').find('ul').children('li').removeClass('active-nav');
            $('.page').hide()

            $(this).addClass('active-nav');
            $('.page').eq(j).show();
            $('.page').eq(j).children('.list').hide();
            $('.page').eq(j).children('.list').eq(0).show();
            $('.page').eq(j).children('.subNav').find('ul').children('li').eq(0).addClass('subNav-on').siblings().removeClass('subNav-on');
            sL(2);
            // 右侧更多功能重置
            $('.features').css('right','-230px');
            features(0);
            ss=true;
            $('.features-sort').eq(j).find('ul').children('li').eq(0).addClass('features-sort-on').siblings().removeClass('features-sort-on');   
            $('.features-con').eq(j).find('ol').show();  
        })
    })

    // 二级菜单点击效果
    for (var i = 0; i < nav; i++) {
        $('.page').eq(i).children('.subNav').find('ul').children('li').each(function(j,elem){
            $(elem).click(function(){
                $(this).siblings().removeClass('subNav-on');
                $(this).addClass('subNav-on');
                $(this).parents().parents().parents().children('.list').hide();
                $(this).parents().parents().parents().children('.list').eq(j).show();
            })
        })
    }

    // 商易超市 start
    var ss=true;
    // 商易超市更多功能展示
    for (var i = 0; i < nav; i++) {
        $('.features-sort').eq(i).find('ul').children('li').each(function(j,elem){
            $(elem).click(function(){
                $(elem).parent().parent().parent().css('right','0px');
                $(elem).parent().parent().siblings().show();
                sB(2);
                $(this).siblings().removeClass('features-sort-on');
                $(this).addClass('features-sort-on');
                features(j);
                if (j==0) {
                    $(this).parent().children('li').eq(4).find('a').text('收缩');
                    ss=false;
                    $(this).parent().parent().siblings().children('ol').find('li:last').css('borderBottom','1px dashed #d6d6d6');
                    $(this).parent().parent().siblings().children('ol:last').find('li:last').css('border','none');
                    $(this).parent().parent().siblings().children('ol').show();
                } else if(j==4){
                    if (ss) {
                        $(elem).find('a').text('收缩');
                        $(elem).parent().parent().parent().css('right','0px');
                        sB(2);
                        ss=false;
                    } else {
                        $(elem).find('a').text('展开');
                        $(elem).parent().parent().parent().css('right','-230px');
                        sL(2);
                        ss=true;
                    }                    
                } else {
                    ss=false;
                    $(this).parent().children('li').eq(4).find('a').text('收缩')
                    $(this).parent().parent().siblings().children('ol').hide();
                    $(this).parent().parent().siblings().children('ol').eq(j-1).find('li:last').css('border','none');
                    $(this).parent().parent().siblings().children('ol').eq(j-1).show();
                    // sL(2);
                }
            })
        })
    }

    // 商易超市 end

    // 选择时间
    $('.statistics-date').find('ul').children('li').click(function(){
        $('.statistics-date').find('ul').children('li').removeClass('date-active');
        $('.statistics-date').find('ul').children('li').eq($(this).index()).addClass('date-active')
    })
}

$(function(){
    // 选择门店 start

    // 选择门店下拉列表
    $('.filter-box').selectFilter({
        callBack : function (val){
            //返回选择的值
            // window.open('https://www.baidu.com/');
        }
    });

    // 选择门店 end 

    // 搜索 start

    // 搜索下拉列表的内容（其它页面更多功能）
    for (var i = 0; i < $('.list').length; i++) {
        $('.list').eq(i).children('ul').children('li').each(function(i,elem){
            m++;
            $(elem).attr('id',m);
            list.push({label:$(elem).text(),id:$(elem).attr('id')})
        })
    }

    // 搜索下拉列表的内容（更多功能）
    for (var i = 0; i < $('.features-con').length; i++) {
        for (var j = 0; j < $('.features-con').eq(i).find('ol').length; j++) {
            $('.features-con').eq(i).find('ol').eq(j).children('li').each(function(k,elem){
                m++;
                $(elem).attr('id',m);
                list.push({label:$(elem).find('a').children('span').text(),id:$(elem).attr('id')})
            })
        }
    } 

    // 搜索下拉列表的内容（思维导图）
    for (var i = 0; i < $('.dht-btn').length; i++) {
        for (var j = 0; j < $('.dht-btn').eq(i).find('a').length; j++) {
            $('.dht-btn').eq(i).children('a').each(function(k,elem){
                m++;
                $(elem).attr('id',m);
                list.push({label:$(elem).text(),id:$(elem).attr('id')})
            })
        }
    }       
    // 搜索框中的内容 
    $('#nope').focus(function(){
        $(this).addClass('nope-active');
        if($(this).val() == "搜索商易"){
            $(this).val("");
        }
    });
    $('#nope').blur(function(){
        $(this).removeClass('nope-active');
        if($(this).val() == ""){
            $(this).val("搜索商易")
        }
    });
    // 搜索自动完成
    $('#nope').autocompleter({
        source: list,

        template: '{{ label }} ',

        empty: false,

        callback: function (value, index, selected) {
            if (selected) {
                $('#nope').attr('name',selected.id);
                $('#nope').attr('value',selected.label);

                $('#search').click(function(){
                    // 此处修改搜索点击事件
                   alert( $('#nope').attr('name'))
                   return false;
                })
            }
        }
    });
    // 搜索 end

    // 思维导图 start
    for (var i = 0; i < nav; i++) {
        dht.push($('.dht').eq(i).find('.lc').length)
    }

    for (var i = 0; i < nav; i++) {
        for (var j = 0; j < dht[i]; j++) {
           dhtSite(i,j);
        }
    }
    // 思维导图的箭头的位置
    for (var i = 0; i < $('.arrow').length; i++) {
        $('.arrow').eq(i).css('top',parseInt($('.arrow').eq(i).parent().css('height'))/2 -20+'px')
    }
    if (IEVersion()==8) {
        $('.fa-long-arrow-up').each(function(i,elem){
            if($(elem).hasClass('btn-rotate')){
                $(this).removeClass('fa-long-arrow-up')
                $(this).addClass('fa-long-arrow-down');
                $(this).css('top','-36px');
            }
        })
        $('.fa-long-arrow-left').each(function(i,elem){
            if($(elem).hasClass('btn-rotate')){
                $(this).removeClass('fa-long-arrow-left')
                $(this).addClass('fa-long-arrow-right');
                $(this).css('left','-36px');
            }
        })
    }
    // 思维导图 end

    // 报表 start

    // 报表的位置
    $('.report').find('table').eq(0).css('width',$('.report').width()*0.98/8*5)
    $('.report').find('table').eq(1).css('width',$('.report').width()*0.98/8*3) 
    // 报表 end 

})

// 思维导图的位置
function dhtSite(i,j){
    for (var k = 0; k < 10; k++) {
        $('.dht').eq(i).find('.lc').eq(j).children('.area').eq(k).css('top',$('.dht').eq(i).find('.lc').eq(j).height()/2-$('.dht').eq(i).find('.lc').eq(j).children('.area').eq(k).height()/2);
    }       
}
// 右侧更多功能的序号
function features(m){
    for (var i = 0; i < $('.features').length; i++) {
        $('.features-con').eq(i).children('ol:last').find('li:last').css('border','none');
        if (m==0) {
            $('.features-con').eq(i).find('ol').eq(0).children('li').each(function(k,elem){
                $(elem).children('a').find('i').text(k+1)
            })
            $('.features-con').eq(i).find('ol').eq(1).children('li').each(function(k,elem){
                $(elem).children('a').find('i').text($('.features-con').eq(i).find('ol').eq(0).children('li').length+k+1)
            })
            $('.features-con').eq(i).find('ol').eq(2).children('li').each(function(k,elem){
                $(elem).children('a').find('i').text($('.features-con').eq(i).find('ol').eq(0).children('li').length+$('.features-con').eq(i).find('ol').eq(1).children('li').length+k+1)
            })
        } else {
            $('.features-con').eq(i).find('ol').eq(m-1).children('li').each(function(k,elem){
                $(elem).children('a').find('i').text(k+1);
            })            
        }
    }
}
function sL(i){
    $('.page').eq(i).children('.subNav').find('ul').css('marginLeft', $('.subNav').width()/2-subNav[i]*100/2);    
}
function sB(i){
    $('.page').eq(i).children('.subNav').find('ul').css('marginLeft', ($('.subNav').width()-250)/2-subNav[i]*100/2);    
}
function IEVersion() {
    var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串 
    var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1; //判断是否IE<11浏览器 
    var isEdge = userAgent.indexOf("Edge") > -1 && !isIE; //判断是否IE的Edge浏览器 
    var isIE11 = userAgent.indexOf('Trident') > -1 && userAgent.indexOf("rv:11.0") > -1;
    if(isIE) {
        var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
        reIE.test(userAgent);
        var fIEVersion = parseFloat(RegExp["$1"]);
        if(fIEVersion == 7) {
            return 7;
        } else if(fIEVersion == 8) {
            return 8;
        } else if(fIEVersion == 9) {
            return 9;
        } else if(fIEVersion == 10) {
            return 10;
        } else {
            return 6;//IE版本<=7
        }  
    } else if(isEdge) {
        return 'edge';//edge
    } else if(isIE11) {
        return 11; //IE11 
    }else{
        return -1;//不是ie浏览器
    }
}








