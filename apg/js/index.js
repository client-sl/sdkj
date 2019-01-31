var a=[]; //菜单和id
var arr =['#fc9a15','#ff8601','#6bc211','#3bc71e','#3dbe85','#51b2ef','#53b0ff'];
var arr3 = ['url(images/1.png)','url(images/2.png)','url(images/3.png)','url(images/4.png)','url(images/5.png)','url(images/6.png)','url(images/7.png)'];	
var mr = 10; //右侧底部菜单右边距
var lw = 50; //右侧底部菜单宽度

var len1; //一级菜单的数量
var arr1 = []; //二级菜单数量的集合
var arr2=[];
var w = [];
var w1;

$(function(){
	Layout();
	Menu();
	init();
	Tool();
})
$(window).on('resize scroll',function(){		
	Layout();
	init();
});		
function Layout(){

	$('.wrap').css('height', $(document).height() - 40);
	$('.myDesk_wrap').css('height', $(document).height() - 40);
	// 左侧栏目
	$('.tab-l').css('height',$(document).height() - $('.logo').height() - 134);
	// 中间
	$('.line').css('height',$('.tab-l').height() + 190);
	$('.center').css('height',$('.tab-l').height());
	// 右侧内容
	$('.tab-r').css('width',$('.wrap').width() - 330);
	$('.tab-r').css('height',$('.wrap').height() -44);
	// 右侧顶部按钮
	$('.btn').css('width',$('.tab-r').width()-76);

	$('.tab-bottom').css('width',$('.tab-r').width()-76);
	$('.tab-bottom').css('height',$('.tab-l').height()+60);

	$('.myDesk').css('width',$('.tab-r').width()-76);
	$('.myDesk').css('height',$('.tab-l').height()+60);

	$('.tab-item').css('width',$('.tab-r').width()-76);
	$('.tab-item').css('height',$('.tab-l').height()+60);
	$('.tab-list').css('height',$('.tab-l').height() -206);
	$('.box').show('blind',1000)
}
function Menu(){
	var a = $("<a></a>").text("展开");
	a.addClass('more');
	$('.tab-h').append(a);
	
	var div1 = $("<div></div>");
	div1.addClass('shelf');

	var div2 = $("<div></div>");
	div2.addClass('shelf-l');
	var div3 = $("<div></div>");
	div3.addClass('shelf-c');
	var div4 = $("<div></div>");
	div4.addClass('shelf-r');

	div1.append(div2);
	div1.append(div3);
	div1.append(div4);

	$('.tab-h').append(div1);

	$('.shelf-info').css('width', $('.tab-h').width() - 90 -96);

	$('.shelf').css('width', $('.tab-h').width()-90);
	$('.shelf-c').css('width', $('.shelf').width()-96-96);

	// 菜单中间的宽度
	$('.menu-bg').css('width',$('.menu').width());
	$('.menu-c').css('width',$('.menu').width()-84);	
}

function init(){	
	len1 = $('.tab-item').length;  
	
	for (var i = 0; i < len1; i++) {
		arr1[i] = $('.tab-item').eq(i).children('.tab-list').length;
	}

	// 菜单按钮的位置（左边距）
	w1=parseInt($('.menu').css('width'));

	for (var i = 0; i < len1; i++) {
		arr2[i] = arr1[i] * lw + ( arr1[i]-1 ) * mr;
	}
	for (var i = 0; i < len1; i++) {
		w[i] = (w1-arr2[i])/2;
	}
	for (var i = 0; i < len1; i++) {
		$('.menu').eq(i).children('ul').css('marginLeft',w[i]);
	}

	$('.menu').css('height',86);

	for (var i = 0; i < len1; i++) {
		$('.tab-item').eq(i).children('.tab-list').hide();
		$('.tab-item').eq(i).children('.tab-list').eq(0).show();

		// $('.tab-item').eq(i).children('.menu').children('ul').children('li').eq(0).find('span').css({
		// 	'background-color': '#2b6da4',
		// 	'background-position': 'center 12px',
		// 	'border': '2px solid #fff'
		// });				
		for (var j = 0; j < arr1[i]; j++) {
			for (var k = 0; k < $('.tab-item').eq(i).children('.tab-list').eq(j).children('.tab-h').length; k++) {
				// console.log($('.tab-item').eq(i).children('.tab-list').eq(j).children('.tab-h').eq(k).children('.shelf-info').children('ul').children('li').length);
				//展开参数控制
				if($('.tab-item').eq(i).children('.tab-list').eq(j).children('.tab-h').eq(k).children('.shelf-info').children('ul').children('li').length<5){
					$('.tab-item').eq(i).children('.tab-list').eq(j).children('.tab-h').eq(k).children('.more').remove();
				}
				// $('.tab-item').eq(i).children('.tab-list').eq(j).children('.tab-h').eq(k).find('span').css('background',arr[k]);
				$('.tab-item').eq(i).children('.tab-list').eq(j).children('.tab-h').eq(k).find('span').css('background',arr3[k]);
				$('.tab-item').eq(i).children('.tab-list').eq(j).children('.tab-h').eq(k).find('ul li').each(function(i,elem){

					a.push({label:$(elem).text(),id:$(elem).children('a').attr('id')});

					// b.push($(elem).children('a').attr('id'));
					// $(elem).on('click',function(){
					// 	box($(elem));
					// })
				})
			}
		}	
	}
		
}	


function Tool(){

	$('#nope').focus(function(){
		if($(this).val() == "搜索亚讯"){
			$(this).val("");
		}
	});
	$('#nope').blur(function(){
		if($(this).val() == ""){
			$(this).val("搜索亚讯")
		}
	});

	// 关闭右下角提示框
	$('.box').children('.box-title').children('.close').click(function(){
		$(this).parent().parent().hide('blind',400);
	})

	// 打开快捷桌面
	$('.fast').click(function(){
		$('#containment-wrapper').show('blind',1000)
	})

	// 关闭快捷桌面
	$('#containment-wrapper').children('#draggable4').children('.myDesk-title').children('.close').click(function(){
		$(this).parent().parent().parent().hide('blind',1000);
		alert(document.getElementById("close").tagName)
	})

	// 左侧菜单点击事件
	for (var i = 0; i < len1; i++) {
		$('.tab-btn').children('li').eq(i).click(function(){
			$('#containment-wrapper').hide('blind',700);
			$('.tab-item').hide();
			
			$('.tab-item').eq($(this).index()).show();

			$('.tab-btn li').removeClass('active');
			$(this).addClass('active');					
		})
	}

	// 右侧底部菜单点击事件
	for (var i = 0; i < len1; i++) {
		for (var j = 0; j < arr1[i]; j++) {
			$('.tab-item').eq(i).children('.menu').children('ul').children('li').eq(j).click(function(){

				$(this).siblings().find('div').removeClass('menu-b');
				$(this).siblings().find('div').children('span').removeClass('menu-active');	

				$(this).find('div').addClass('menu-b');
				$(this).find('div').children('span').addClass('menu-active');	

				$(this).parent().parent().parent().children('.tab-list').hide();
				$(this).parent().parent().parent().children('.tab-list').eq($(this).index()).show();
			})
		}
	}

	// 右侧展开和收缩菜单事件
	$('.more').on('click',function(){
		if($(this).text()=='展开'){			
			$('.more').text("展开");
			$('.more').parent().removeClass('mb');	
			$('.more').parent().removeClass('ot');	
			$('.more').css('background','url(images/moreGrey.png)');	
			$('.shelf-info').css('height', 20);

			$(this).text("收缩");
			$(this).css('background','url(images/moreBlue.png)');
			$(this).parent().removeClass('mt');	
			$(this).parent().next().addClass('ot');	
			$(this).parent().addClass('mb',1000,'easeOutBounce');
			$(this).prev().css('height','auto');
		}else{
			$('.more').text("展开");
			$('.more').parent().removeClass('mb');	
			$('.more').parent().removeClass('ot');	
			$('.more').css('background','url(images/moreGrey.png)');

			$(this).parent().removeClass('mb');	
			$(this).parent().next().removeClass('ot');	

			
			$(this).text("展开");	
			$('.shelf-info').css('height', 20);
			$(this).parent().addClass('mt');	
		}		
	})	

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


$(function() {
	$( "#draggable3" ).draggable({ containment: "#containment-wrapper", scroll: false });
	$( "#draggable5" ).draggable({ containment: "parent" });
});




