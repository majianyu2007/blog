var _yShang = {
    resetPlatformLi: function(){
        $("#__youshang_popup ul.platform li").each(function(){
            $(this).removeClass("active");
        });
    },
    resetQrcode: function(){
        $("#__youshang_popup div.qrcode .qrcode-li").each(function(){
            $(this).hide();
        });
    }
};

(function ($) {
    $("#__youshang_btn").click(function(){
        var ePopup = $("#__youshang_popup");
        var eButton = $("#__youshang_btn");
        if(ePopup.hasClass("__youshang-show")){
            ePopup.hide().removeClass("__youshang-show");
            eButton.html("赏");
        }else{
            ePopup.show().addClass("__youshang-show");
            eButton.html("✕");
        }
    });
    $("#__youshang_popup ul.platform li").each(function(index){
        $(this).click(function(){
            _yShang.resetPlatformLi();
            _yShang.resetQrcode();
            console.log(index);
            $(this).addClass("active");
            var bgColor = $(this).attr("data-bg-color");
            var thanks = $(this).attr("data-thanks");
            $("#__youshang_popup").css("background-color", bgColor);
            $("#__youshang_popup .head").html(thanks);
            $("#__youshang_popup div.qrcode div:eq(" + index + ")").each(function(){
                $(this).show();
            });
        });
    });
})( jQuery );