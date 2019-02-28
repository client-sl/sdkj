

$(function(){
  var num = parseFloat($('.change_num').children('input').eq(1).val());
  var price = parseFloat($('.new').children('i').eq(0).text());
  // 增加
  $('.change_num').children('input').eq(2).click(function(){
    var j = 1;
    num = parseFloat($('.change_num').children('input').eq(1).val());
    num+=1;
    $('.change_num').children('input').eq(1).val(num);
    $('.money').text('￥'+num*price);
  })

  // 减少
  $('.change_num').children('input').eq(0).click(function(){
    num = parseFloat($('.change_num').children('input').eq(1).val());
    num-=1;
    if (num<0) {
      num=0;
    }
    $('.change_num').children('input').eq(1).val(num);
    $('.money').text('￥'+num*price);    
  })
  // 输入框
  $('.change_num').children('input').eq(1).focus(function(){
    var that = $(this).val();
    $(this).val('');
    $(this).blur(function(){
      if ($(this).val()=='') {
        $(this).val(that);
        num = parseFloat(that);
         $('.money').text('￥'+num*price);
      } else{
         num = parseFloat($('.change_num').children('input').eq(1).val());
        $('.money').text('￥'+num*price);
      }
    })

  })
  $('.return').click(function(){
    window.history.go(-1);
  })
  $('.refresh').click(function(){
    window.location.reload();
  })
  $('select').change(function(){
    // alert($(this).val())
  })
  $('.buy').click(function(){
    show_confirm();
  })

})
function show_confirm()
{
  var r=confirm("是否提交");
  if (r==true)
  {
    $('form').attr('action','index.html')
  }
  else
  {
    $('form').attr('action','')
    alert("重新选择");
  }
}