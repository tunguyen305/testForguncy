$(document).on("keydown", function (e) {
    // Alt + S の検出
    if (e.altKey && e.key.toLowerCase() === "s") {
        e.preventDefault();   // 必要ならブラウザの標準動作を無効化
        console.log("Alt + S detected!");

        // ボタン「btnAlt_s」のコマンドを実行する
        Forguncy.CommandHelper.executeCellCommand("btnAlt_s", function(){
            console.log("Execute Completed(btnAlt_s)"); 
        });
    }
    
    // Alt + I の検出
    if (e.altKey && e.key.toLowerCase() === "i") {
        e.preventDefault();   // 必要ならブラウザの標準動作を無効化
        console.log("Alt + I detected!");

        // ボタン「btnAlt_i」のコマンドを実行する
        Forguncy.CommandHelper.executeCellCommand("btnAlt_i", function(){
            console.log("Execute Completed(btnAlt_i)"); 
        });
    }

});