# oil-polution
Как добавить на сайт:
* Скопировать index.js - файл с ихдным кодом игры 
* Скопировать pixi.min.js - файл с библиотекой для работы с графикой (можно подключить через cdn)
* Копируем папку ./textures/
* Копируем на страницу сожержимое из index.html, которое находется между `<!-- START: DATA FOR INSERTING -->` и `<!-- END: DATA FOR INSERTING -->`
    * При необходимости меняем ссылки на файлы index.js, pixi.js
    * При необходимости меняем путь к папке с текстурами в строчке `const oilGame = OILGame(SETTINGS, './textures/', oilGameMaxHeight);`
    * `oilGameMaxHeight` - функция которая должна возвращать максимальную высоту исходя из высоты дисплея 
    * Если нужно поменять настройки игры, меняем объект`SETTINGS`
    * Меняем функцию `oilGame.onShare = (system, data) => {` в соответсвии с тем, какие действия должны выполняться при нажатии на кнопки соц сетей 
        * Аргумент system - какая соц сеть нажата (либо `'vk'` либо `'fb'`)
        * Аргумент data - объект данных из игры
            * data.badcount - количество пропущенных плохих элементов
            * data.badCountToLose - количество пропущенных плохих для поражения (то что задано в настройках)
            * data.fishCount - колчество выловленной рыбы 
            * data.fishCountToLose - количество выловленной рыбы для поражения (то что задано в настройках)