webiopi().ready(function(){
    var callBack = function(macro, args, response){
        }
    var BtnTS = webiopi().createButton("tank-s", "停止", function(){
        webiopi().callMacro("tstop",[], callBack);
    });
    $("#tank-s").append(BtnTS);

    var BtnTR = webiopi().createButton("tank-r", "右折", function(){
        webiopi().callMacro("tright",[], callBack);
    });
    $("#tank-r").append(BtnTR);

    var BtnTL = webiopi().createButton("tank-l", "左折", function(){
        webiopi().callMacro("tleft",[], callBack);
    });
    $("#tank-l").append(BtnTL);

    var BtnTF = webiopi().createButton("tank-f", "前進", function(){
        webiopi().callMacro("tfront",[], callBack);
    });
    $("#tank-f").append(BtnTF);

    var BtnTB = webiopi().createButton("tank-b", "後退", function(){
        webiopi().callMacro("tback",[],callBack);
    });
    $("#tank-b").append(BtnTB);
    webiopi().refreshGPIO(true);
});