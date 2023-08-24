//================================================ =============================
// fs.js
//================================================ =============================

/*:
 * @plugindesc Beta Error
 * @author HsiaoChoco
 *
 * @help 腳本
 */

/*:ja
 * @plugindesc Beta Error
 * @author HsiaoChoco
 *
 * @help Eeeeeee
 */
(function() {
    var fs = require('fs');
    var path = require('path');

    var _Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
    Game_Interpreter.prototype.pluginCommand = function(command, args) {
        // 檢查插件命令
        if (command === 'www') {
            // 獲取文件路徑
            var filePath = args[0];

            // 構建要寫入的文本內容
            var number = $gameVariables.value(30);
            var content = `座號: ${number}\n\n`;
            // 遍歷遊戲變量
            for (var i = 17; i < $dataSystem.variables.length; i++) {
                if(i <= 27){
                    var variableName = $dataSystem.variables[i];
                    var variableValue = $gameVariables.value(i);
    
                    // 添加變量名和值到文本內容
                    content += `項目: ${variableName}\n`;
                    content += `參數: ${variableValue}\n\n`;
                }
            }

            // 獲取當前日期時間
            var currentDate = new Date();
            var dateTime = currentDate.toLocaleString();

            // 添加日期時間到文本內容
            content += `擷取當下: ${dateTime}`;

            // 寫入到txt文件
            var fullPath = path.join('save', filePath);
            fs.writeFileSync(fullPath, content);

            console.log('寫入成功！');
        }

        // 調用原始的插件命令函數
        _Game_Interpreter_pluginCommand.call(this, command, args);
    }
})();