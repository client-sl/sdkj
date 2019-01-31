$(function(){
	var num=0;
	$('.loginWrap').css('width',$(document).width());
	$('.loginWrap').css('height',$(document).height());
	$('.user').focus(function(){
		$(this).css('border','1px solid #0c79a2');
		$(this).parent('p').find('label').children('i').css('color','#0c79a2');
	})
	$('.user').blur(function(){
		$(this).css('border','1px solid #c9c9c9');
		$(this).parent('p').find('label').children('i').css('color','#9e9e9e');
	})
	$('.psd').focus(function(){
		$(this).css('border','1px solid #0c79a2');
		$(this).parent('p').find('label').children('i').css('color','#0c79a2');
	})
	$('.psd').blur(function(){
		$(this).css('border','1px solid #c9c9c9');
		$(this).parent('p').find('label').children('i').css('color','#9e9e9e');
	})


	$('.user2').focus(function(){
		$(this).addClass('foucusInput');
		if ($(this).attr('value')=='用户名') {
		    $(this).attr('value','');
		}
	})
	$('.user2').blur(function(){
		$(this).removeClass('foucusInput');
	})
	$('.psd2').focus(function(){
		$(this).addClass('foucusInput');
		if ($(this).attr('value')=='密码') {
		    $(this).attr('value','');
		}
	})
	$('.psd2').blur(function(){
		$(this).removeClass('foucusInput');
	})

	$('.login').click(function(){
		if ($('.psd').val()=='') {
		    alert('操作口令不能为空')
		} else {
			if ($('.psd').val()!='1001') {
				// 密码错误
				alert('操作口令不对，请重新输入');
			} else {
				// 密码正确跳转
				$('form').attr('action','https://www.baidu.com/');
			}		    
		}
	})

	$('.login2').click(function(){
		if ($('.psd2').val()=='') {
		    alert('操作口令不能为空')
		} else {
			if ($('.psd2').val()!='1001') {
				// 密码错误
				alert('操作口令不对，请重新输入');
			} else {
				// 密码正确跳转
				$('form').attr('action','https://www.baidu.com/');
			}		    
		}
	})
})