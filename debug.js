

const SETTINGS_DESCRIPTION = {
    badCountToLose: 'Сколько пропустить плохих, чтобы проиграть',
    fishCountToLose: 'Сколько поймать рыб, чтобы проиграть',
    itemAnimationDuration: 'Время анимации появления элементов в реке',
    badItemActiveTime: 'Сколько времени "плохой" элемент активный для нажания',
    fishActiveTime: 'Сколько времени рыба элемент активный для нажания',

    tickTimeBase: 'Базовый интервал появления элемента',
    tickTimeSubtractPerComplexity: 'На сколько уменьшается интревал, для каждого элемента который поднимает сложность (Завод\\труба\\машина)',

    factoryClickCount: 'Кликов чтобы выключить завод',
    trumpetClickCount: 'Кликов чтобы починить трубу',


    reopenFactoryDelayFrom: 'Время через которое откроется завод (ОТ)',
    reopenFactoryDelayTo: 'Время через которое откроется завод (ДО)',


    reopenTrumpetDelayFrom: 'Время через которое сломается труба (ОТ)',
    reopenTrumpetDelayTo: 'Время через которое сломается труба (ДО)',
    carComplexityTimeCoef: 'Во сколько раз уменьшается время тика (каждый тик появляется грязь)'
};

// DEBUG SEttings = 
(() => {
    try {
        saved = JSON.parse(localStorage.getItem('OIL_GAME_SETTINGS'));

        Object.keys(saved).forEach((k) => {
            SETTINGS[k] = saved[k];
        })
    } catch (e) { console.log(e) }

    Object.keys(SETTINGS).forEach(k => {
        let inp = document.createElement('input')
        let span = document.createElement('span')
        span.innerText = SETTINGS_DESCRIPTION[k] + ` (${k})`
        let div = document.createElement('div');

        div.appendChild(span);
        div.appendChild(inp);

        inp.value = SETTINGS[k];


        inp.addEventListener('input', e => {
            SETTINGS[k] = +inp.value;
            localStorage.setItem('OIL_GAME_SETTINGS', JSON.stringify(SETTINGS))
        })

        debugPlace.appendChild(div);

    })

})();