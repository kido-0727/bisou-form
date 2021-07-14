$(function () {
    // カレンダー
    $(function () {
        $('input[name="date"]').datepicker({
            dateFormat: 'yy/mm/dd',
        });
    });

    // 参加人数分の氏名欄を生成
    $('#form-number').click(function () {
        $('#form-name').empty();
        var num = $('input[name="number"]:checked').val();
        for (i = 0; i < num; i++) {
            $('#form-name').append(
                `<input class="form-control w-100 mt-1" name="name" maxlength="10">`
            );
        }
    });

    // 送信
    $('form').submit(function () {
        var detail = $('input[name="detail"]').val();
        var date = $('input[name="date"]').val();
        var names = '';
        $('#form-name').children().each(function (i, elm) {
            names += $(elm).val() + '、';
        })
        names = names.slice(0, -1);

        var kana = '';
        $('#form-names').children().each(function (i, elm) {
            kana += $(elm).val() + '、';
        })
        kana = kana.slice(0, -1);


        var msg = `詳細：${detail}\n希望日：${date}\nお名前：${names}\nおなまえ：${kana}`;
        sendText(msg);

        return false;
    });
});
