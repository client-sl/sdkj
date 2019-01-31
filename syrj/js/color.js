var color1 = ['#00a8ef','#3588cb','#33CCFF','#00CCCC','#00CC33'];
var color = ['images/1.png','images/2.png','images/3.png','images/4.png','images/5.png'];
var border = ['1px solid #00adff','none','1px solid #00adff','1px solid #00B3B3','1px solid #009933'];
$(function(){
    if (IEVersion()<=8&&IEVersion()>0) {
    	// $('.target').find('span').css('left','-180px');
     //    $('.color').children('span').each(function(i,elem){
     //    	$(elem).css('left','-180px');
     //    })
    } else {
        
    }
	$('.target').find('span').css('background','url('+color[1]+')');
	$('.target').click(function(){
		$('.color').slideToggle();
	})
	$('.color').children('span').each(function(i,elem){
		$(elem).css('background','url('+color[i]+')');
		$(elem).click(function(){
			$('.target').find('span').css('background','url('+color[i]+')');
			$('.skin').attr("disabled","disabled");
			$('.skin').eq(i).removeAttr("disabled");
			$('.logo').find('a').children('img').attr('src','images/sy'+(i+1)+'.png')
	        if (IEVersion()<=8&&IEVersion()>0) {
	            $('.color').hide();
	        } else {
	            $('.color').hide('fade',800);
	        }

		    if (IEVersion()==8) {
		        $('.navBar').css('border-right',border[i])
		        
		    }


		})
	})
})
