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
    
    // Alt + E の検出
    if (e.altKey && e.key.toLowerCase() === "e") {
        e.preventDefault();   // 必要ならブラウザの標準動作を無効化
        console.log("Alt + E detected!");

        // ボタン「btnAlt_s」のコマンドを実行する
        Forguncy.CommandHelper.executeCellCommand("btnAlt_e", function(){
            console.log("Execute Completed(btnAlt_e)"); 
        });
    }
    
});