$(function () {
  $('#nope').autocompleter({
        source: a,

        template: '{{ label }} ',

        empty: false,

        callback: function (value, index, selected) {
            if (selected) {
                $('#nope').attr('name',selected.id);
                $('#nope').attr('value',selected.label);

                $('#search').click(function(){
                    // 此处修改搜索点击事件
                   alert( $('#nope').attr('name'))
                })
            }
        }
    });
});