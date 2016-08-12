/*-------------------------------------------------
///////////////////////////////////////////////////
vk.com/lalka_karo4
///////////////////////////////////////////////////
-----------------------End-----------------------*/

var DenyBloodStoneCheck = function () {
    if (!DenyBloodStone.checked) {
        Game.ScriptLogMsg('Script disabled: DenyBloodStone', '#ff0000')
        return
    }

    Game.ScriptLogMsg('Script enabled: DenyBloodStone', '#00ff00')
    GameEvents.SendEventClientSide('antiaddiction_toast', { "message": "Скрипт диактивирован в связи с обновлением!\nОбновление 15 августа", "duration": "15" })
}


//
var DenyBloodStone = Game.AddScript(1, "DenyBloodStone", DenyBloodStoneCheck)
