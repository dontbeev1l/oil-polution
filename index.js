
const SETTINGS = {
    badCountToLose: 12,
    fishCountToLose: 4,
    itemAnimationDuration: 200,
    badItemActiveTime: 4000,
    fishActiveTime: 1000,

    carComplexityTimeCoef: 2,

    tickTimeBase: 4000,
    tickTimeSubtractPerComplexity: 100,

    factoryClickCount: 5,
    trumpetClickCount: 3,


    reopenFactoryDelayFrom: 4,
    reopenFactoryDelayTo: 10,


    reopenTrumpetDelayFrom: 4,
    reopenTrumpetDelayTo: 10
}


function OILGame() {
    const TEXTURE_PACK_1 = {
        background: {
            size: [798, 1000],
            url: './textures/fon.png'
        },

        rubbishIcon: {
            url: './textures/ikonka_musor.png',
            size: [67, 60]
        },

        fishIcon: {
            url: './textures/ikonka_ryby.png',
            size: [71, 57]
        },

        timerIcon: {
            url: './textures/timer.png',
            size: [60, 60]
        },

        badItems: [
            {
                url_show: './textures/dokhlaya_ryba11.png',
                size: [143, 69],
                coef: 3
            },
            {
                url_show: './textures/sgustok1.png',
                size: [148, 48],
                coef: 3
            },
            {
                url_show: './textures/sgustok2.png',
                size: [153, 35],
                coef: 3
            },
            {
                url_show: './textures/sgustok3.png',
                size: [108, 55],
                coef: 3
            },
            {
                url_show: './textures/musor.png',
                size: [145, 112],
                coef: 3
            },
            {
                url_show: './textures/musor_soda1.png',
                size: [145, 112],
                coef: 1
            }
        ],
        goodItems: [
            {
                url_show: './textures/zhivaya_ryba.png',
                url_default: './textures/zhivaya_ryba1.png',
                size: [128, 60]
            }
        ],

        riverPath: [
            [50, 953],
            [50, 370],
            [355, 275],
            [457, 310],
            [547, 287],
            [775, 130],
            [760, 663],
            [545, 815],
            [340, 825],
            [186, 953]
        ],

        car: {
            texture: './textures/mashina.png',
            size: [147, 112],
            finalPos: [379, 145],
            startPos: [-147, -112],
            trumpet: {
                texture: './textures/truba_mashiny.png',
                size: [62, 82],
                pos: [363, 192]
            }
        },

        factory: [
            {
                url_inactive: './textures/zavod1_ne_rabotaet.png',
                url_active: './textures/zavod1.png',
                size: [235, 181],
                position: [464, 27],
                hit: [13, 82, 14, 32, 77, 17, 104, 25, 152, 13, 222, 32, 222, 127, 90, 173, 30, 149, 30, 135, 57, 129, 57, 103],
                trumpet: {
                    url_fixed: './textures/truba11.png',
                    url_broken: './textures/truba1.png',
                    hit: [2, 15, 3, 2, 23, 1, 49, 12, 66, 28, 70, 36, 70, 82, 79, 87, 75, 95, 56, 99, 36, 95, 31, 90, 36, 84, 42, 82, 42, 41, 32, 27, 20, 18],
                    size: [90, 114],
                    position: [641, 109]
                }
            },
            {
                url_inactive: './textures/zavod2_ne_rabotaet.png',
                url_active: './textures/zavod2.png',
                size: [248, 210],
                hit: [[7, 120], [121, 91], [134, 42], [211, 57], [212, 150], [198, 166], [80, 207], [6, 172]],
                position: [30, 80],
                trumpet: {
                    url_fixed: './textures/truba2.png',
                    url_broken: './textures/truba22.png',
                    hit: [1, 12, 4, 1, 23, 1, 50, 13, 67, 30, 69, 37, 69, 80, 79, 86, 80, 93, 70, 103, 46, 105, 30, 97, 29, 96, 29, 88, 36, 81, 40, 79, 41, 39, 31, 25],
                    size: [112, 117],
                    position: [180, 230]
                }
            },
            {
                url_inactive: './textures/zavod3_ne_rabotaet.png',
                url_active: './textures/zavod3.png',
                size: [233, 266],
                position: [564, 647],
                hit: [16, 223, 16, 174, 70, 159, 77, 68, 108, 68, 113, 124, 161, 112, 220, 135, 219, 211, 163, 230, 144, 220, 145, 236, 85, 256],
                trumpet: {
                    url_fixed: './textures/truba3.png',
                    url_broken: './textures/truba33.png',
                    hit: [26, 121, 34, 113, 36, 113, 36, 64, 48, 47, 68, 39, 94, 40, 118, 54, 126, 69, 128, 114, 110, 116, 108, 83, 103, 70, 91, 65, 74, 65, 65, 70, 65, 112, 73, 118, 64, 128, 43, 128],
                    size: [143, 158],
                    position: [485, 709]
                }
            },
            {
                url_inactive: './textures/zavod4_ne_rabotaet.png',
                url_active: './textures/zavod4.png',
                size: [261, 225],
                position: [308, 783],
                hit: [6, 161, 7, 107, 28, 101, 29, 92, 58, 85, 59, 42, 119, 31, 122, 82, 253, 115, 252, 136, 202, 154, 229, 161, 230, 184, 153, 217, 92, 192, 82, 196],
                trumpet: {
                    url_fixed: './textures/truba4.png',
                    url_broken: './textures/truba44.png',
                    hit: [26, 121, 34, 113, 36, 113, 36, 64, 48, 47, 68, 39, 94, 40, 118, 54, 126, 69, 128, 114, 110, 116, 108, 83, 103, 70, 91, 65, 74, 65, 65, 70, 65, 112, 73, 118, 64, 128, 43, 128],
                    size: [143, 158],
                    position: [210, 777]
                }
            }
        ]
    }

    const RESULT_NO_FISH_NO_SWIM = `Никакой больше рыбы и купаний.\nК реке лучше вообще теперь не подходить.\nПопробуй все исправить еще раз`;
    const RESULT_BAD = `Спасти реку еще можно,\nно стоить это будет очень и очень дорого.\nНужно было стараться больше`;
    const RESULT_NO_BAD = `Купаться в реке больше не стоит\nв ближайшие годы, да и рядом лучше не стоять.\nУ тебя еще есть шанс исправить все`;
    const RESULT_GOOD = `Прекрасно!\nЧерез пару недель тут даже купаться можно будет`;
    const RESULT_EXELENT = 'Профессиональная работа!\nРека спасена!'

    function random(to, from) {
        if (!from) { from = 0; }

        if (to < from) {
            const a = from;
            from = to;
            to = a;
        }

        v = Math.round(Math.random() * (to - from) + from);
        return v;
    }

    class Factory {
        constructor(textures, settings, index, brokeInterval) {
            this.settings = settings;


            this.timeouts = [];
            this.textures = textures;
            this.factoryInactiveTexture = PIXI.Texture.from(textures.url_inactive);
            this.factoryActiveTexture = PIXI.Texture.from(textures.url_active);
            this.trumpetFixedTexture = PIXI.Texture.from(textures.trumpet.url_fixed);
            this.trumpetBrokenTexture = PIXI.Texture.from(textures.trumpet.url_broken);
            this.factory = new PIXI.Sprite(this.factoryInactiveTexture);
            this.factoryActiveLayer = new PIXI.Sprite(this.factoryActiveTexture);
            this.factoryActiveLayer.alpha = 0;


            // this.factoryActiveLayer.filters = [new PIXI.filters.FXAAFilter()]


            this.trumpet = new PIXI.Sprite(this.trumpetFixedTexture);
            this.trumpetActiveLayer = new PIXI.Sprite(this.trumpetBrokenTexture);
            this.trumpetActiveLayer.alpha = 0;

            this.trumpet.zIndex = 10000 + (index || 0);
            this.factory.zIndex = 10000 + (index || 0);
            this.factoryActiveLayer.zIndex = 10000 + (index || 0);
            this.trumpetActiveLayer.zIndex = 10000 + (index || 0);


            this.active = false;
            this.broken = false;
            this.addClickEvents();


            if (this.textures.hit) {
                const hitPoly = new PIXI.Polygon(this.textures.hit.flat());
                this.factory.hitArea = hitPoly;
            }

            if (this.textures.trumpet.hit) {
                const hitPoly = new PIXI.Polygon(this.textures.trumpet.hit.flat());
                this.trumpet.hitArea = hitPoly;
            }

            setTimeout(() => { this.broke() }, random(...brokeInterval) * 1000);
        }


        destroy() {
            this.factory.destroy({ children: true, texture: true, baseTexture: true })
            this.factoryActiveLayer.destroy({ children: true, texture: true, baseTexture: true })
            this.trumpet.destroy({ children: true, texture: true, baseTexture: true })
            this.trumpetActiveLayer.destroy({ children: true, texture: true, baseTexture: true })

            this.timeouts.forEach((t) => clearTimeout(t));
            return this;
        }

        addClickEvents() {
            let factoryClickCount = 0;
            this.factory.interactive = true;
            this.factory.on('pointerdown', () => {
                if (this.active) {
                    factoryClickCount++;
                    this.factoryActiveLayer.alpha = (this.settings.factoryClickCount - factoryClickCount) / this.settings.factoryClickCount;
                    if (factoryClickCount >= this.settings.factoryClickCount) {
                        factoryClickCount = 0;
                        this.deactivate();

                        this.timeouts.push(setTimeout(() => {
                            this.activate()
                        }, random(this.settings.reopenFactoryDelayFrom, this.settings.reopenFactoryDelayTo) * 1000))
                    }
                }
            })


            let trumpetClickCount = 0;
            this.trumpet.interactive = true;
            this.trumpet.on('pointerdown', () => {
                if (this.broken) {
                    trumpetClickCount++;
                    this.trumpetActiveLayer.alpha = (this.settings.trumpetClickCount - trumpetClickCount) / this.settings.trumpetClickCount;;
                    if (trumpetClickCount >= this.settings.trumpetClickCount) {
                        trumpetClickCount = 0;
                        this.fix();

                        this.timeouts.push(setTimeout(() => {
                            this.broke()
                        }, random(this.settings.reopenTrumpetDelayFrom, this.settings.reopenTrumpetDelayTo) * 1000))
                    }
                }
            })

        }

        drow(pixiApp) {
            pixiApp.stage.addChild(this.factory);
            pixiApp.stage.addChild(this.factoryActiveLayer);

            pixiApp.stage.addChild(this.trumpet);
            pixiApp.stage.addChild(this.trumpetActiveLayer);


            return this;
        }

        setPositionAndSize(scaleCoef) {
            const ts /* texture scale */ = (v) => {
                return Math.round(v)
            }

            this.factory.x = this.textures.position[0] * scaleCoef;
            this.factory.y = this.textures.position[1] * scaleCoef;
            this.factory.width = ts(this.textures.size[0] * scaleCoef);
            this.factory.height = ts(this.textures.size[1] * scaleCoef);

            const pos = [0, 0];


            this.factoryActiveLayer.x = this.textures.position[0] * scaleCoef;
            this.factoryActiveLayer.y = this.textures.position[1] * scaleCoef;
            this.factoryActiveLayer.width = ts(this.textures.size[0] * scaleCoef);
            this.factoryActiveLayer.height = ts(this.textures.size[1] * scaleCoef);

            this.trumpet.x = this.textures.trumpet.position[0] * scaleCoef;
            this.trumpet.y = this.textures.trumpet.position[1] * scaleCoef;
            this.trumpet.width = ts(this.textures.trumpet.size[0] * scaleCoef);
            this.trumpet.height = ts(this.textures.trumpet.size[1] * scaleCoef);

            this.trumpetActiveLayer.x = this.textures.trumpet.position[0] * scaleCoef;
            this.trumpetActiveLayer.y = this.textures.trumpet.position[1] * scaleCoef;
            this.trumpetActiveLayer.width = ts(this.textures.trumpet.size[0] * scaleCoef);
            this.trumpetActiveLayer.height = ts(this.textures.trumpet.size[1] * scaleCoef);

            return this;
        }


        activate() {
            this.factoryActiveLayer.alpha = 1;
            this.active = true;
            return this;
        }

        deactivate() {
            this.factoryActiveLayer.alpha = 0;
            this.active = false;
            return this;
        }

        broke() {
            this.trumpetActiveLayer.alpha = 1;
            this.broken = true;
            this.tru
            return this;
        }

        fix() {
            this.trumpetActiveLayer.alpha = 0;
            this.broken = false;
            return this;
        }

    }

    class Car {
        constructor(textures) {
            this.textures = textures;
            this.car = PIXI.Sprite.from(textures.car.texture);
        }

        render(stage, scaleCoef) {
            this.stage = stage;
            this.scaleCoef = scaleCoef;

            stage.addChild(this.car);

            this.car.width = this.textures.car.size[0] * scaleCoef;
            this.car.height = this.textures.car.size[1] * scaleCoef;
            this.car.x = this.textures.car.startPos[0];
            this.car.y = this.textures.car.startPos[1];
            this.car.zIndex = 10000;

            this.run();
        }


        destroy() {
            this.destroyed = true;
            this.car.destroy();
            if (this.trumpet) {
                this.trumpet.destroy();
            }
        }

        run() {
            const animationDuration = 1300;

            const tick = (startTime) => {
                if (this.destroyed) { return; }

                const currentTime = Date.now();
                const time = currentTime - startTime;
                let stop = false;

                let y, x = time / animationDuration * (this.textures.car.finalPos[0] - this.textures.car.startPos[0]) + this.textures.car.startPos[0];

                if (x > this.textures.car.finalPos[0]) {
                    x = this.textures.car.finalPos[0];
                    y = this.textures.car.finalPos[1];
                    stop = true;
                } else {
                    y = this.animationPos(x, ...this.textures.car.startPos, ...this.textures.car.finalPos);
                }

                this.car.x = x * this.scaleCoef;
                this.car.y = y * this.scaleCoef;


                if (!stop) {
                    requestAnimationFrame(() => tick(startTime))
                } else {
                    this.renderTrumpet();
                }
            }

            tick(Date.now())
        }

        renderTrumpet() {
            this.trumpet = PIXI.Sprite.from(this.textures.car.trumpet.texture);
            this.trumpet.zIndex = 10002;
            this.trumpet.width = this.textures.car.trumpet.size[0] * this.scaleCoef;
            this.trumpet.height = this.textures.car.trumpet.size[1] * this.scaleCoef;
            this.trumpet.x = this.textures.car.trumpet.pos[0] * this.scaleCoef;
            this.trumpet.y = this.textures.car.trumpet.pos[1] * this.scaleCoef;
            this.stage.addChild(this.trumpet);
        }

        animationPos(x, x1, y1, x2, y2) {
            const y = (x - x1) * (y2 - y1) / (x2 - x1) + y1;
            return y;
        }
    }

    class OilGame {
        constructor(container, canvas, settings) {
            this.settings = settings;

            this.currentTextures = TEXTURE_PACK_1;

            this._container = container;
            this._canvas = canvas;

            const height = this.calculateByPropotrion(this.containerWidth(), this.currentTextures.background.size[0], this.currentTextures.background.size[1]);

            this.pixiApp = new PIXI.Application({
                view: canvas,
                backgroundColor: 0x6b841a,
                width: this.containerWidth() * 2,
                height: height * 2
            });

            this._container.style.height = `${height}px`

            this.bgSprite = PIXI.Sprite.from(this.currentTextures.background.url);
            this.normilizebgSize();

            this.pixiApp.stage.addChild(this.bgSprite);

            this.pixiApp.stage.sortableChildren = true;


            this.onContainerResize((event) => {
                const height = this.calculateByPropotrion(event.width, this.currentTextures.background.size[0], this.currentTextures.background.size[1])

                this.pixiApp.renderer.resize(
                    event.width,
                    height
                );
                this._container.style.height = `${height}px`
                this.normilizebgSize();
            });
            this.renderMenu();
            // this.debugRiverArea(this.currentTextures.riverPath);
        }

        debugRiverArea(path) {
            const graphics = new PIXI.Graphics();
            graphics.beginFill(0xFF3300);
            graphics.lineStyle(4, 0xffd900, 1);
            graphics.moveTo(...path[0].map(c => c * this.scaleCoef()));
            path.forEach(point => {
                graphics.lineTo(...point.map(c => c * this.scaleCoef()));
            })
            graphics.closePath();
            graphics.endFill();
            this.pixiApp.stage.addChild(graphics);
        }

        scaleCoef() {
            const k = Math.round(this.containerWidth() * 2 / this.currentTextures.background.size[0] * 1000) / 1000;
            return k;
        }

        createDarkLayer() {
            this._darkLayerGraphics = new PIXI.Graphics();
            this._darkLayerGraphics.beginFill(0x000000, 0.6);
            this._darkLayerGraphics.drawRect(0, 0, this.pixiApp.renderer.width, this.pixiApp.renderer.height);
            this._darkLayerGraphics.endFill();
            this.pixiApp.stage.addChild(this._darkLayerGraphics);
        }

        destroyDarkLayer() {
            this.pixiApp.stage.removeChild(this._darkLayerGraphics);
        }

        renderMenu(startButonText, buttonY, callback) {
            if (!startButonText) {
                startButonText = 'НАЧАТЬ УБОРКУ';
            }
            const text = new PIXI.Text(startButonText, { fontFamily: 'Arial', fontSize: 48, fill: 0xffffff, align: 'center', fontWeight: 600 });
            this.pixiApp.stage.addChild(text)
            const graphics = new PIXI.Graphics();
            graphics.interactive = true;

            graphics.zIndex = 2;
            text.zIndex = 3;

            this.createDarkLayer();

            graphics.lineStyle(2, 0xb841a, 1);
            graphics.beginFill(0x98b148, 1);


            const margin = 60;
            const width = text.width + margin * this.scaleCoef();
            const height = text.height + margin * this.scaleCoef();
            const x = (this.pixiApp.renderer.width - width) / 2;
            const y = buttonY || (this.pixiApp.renderer.height - height) / 2;


            text.x = x + margin * this.scaleCoef() / 2;
            text.y = y + margin * this.scaleCoef() / 2;

            graphics.drawRoundedRect(x, y, width, height, 16);
            graphics.endFill();

            graphics.defaultCursor = 'pointer';
            this.pixiApp.stage.addChild(graphics);

            graphics.on('pointerdown', () => {
                this.destroyDarkLayer();
                this.pixiApp.stage.removeChild(graphics);
                this.pixiApp.stage.removeChild(text);
                if (callback) { callback() }
                this.startGame()
            });
        }

        renderEndingView(success, badcount, badCountToLose) {

            let textValue;
            if (badcount > 8) {
                textValue = RESULT_NO_FISH_NO_SWIM
            } else if (badcount > 6) {
                textValue = RESULT_BAD
            } else if (badcount > 3) {
                textValue = RESULT_NO_BAD
            } else if (badcount > 1) {
                textValue = RESULT_GOOD
            } else if (badcount === 0) {
                textValue = RESULT_EXELENT;
            }
            const text = new PIXI.Text(textValue,
                { fontFamily: 'Arial', fontSize: 48, fill: 0xffffff, align: 'center', fontWeight: 600, stroke: 0x000000, strokeThickness: 3 })


            text.zIndex = 4;
            this.pixiApp.stage.addChild(text);

            const maxTextWidth = 900;
            const [width, height] = [text.width, text.height];
            text.width = Math.min(maxTextWidth, this.pixiApp.renderer.width - 20);
            text.height = text.width / width * height;
            text.x = (this.pixiApp.renderer.width - text.width) / 2;
            text.y = (this.pixiApp.renderer.height - text.height - 75) / 2;


            this.renderMenu('ЕЩЕ РАЗ', text.y + text.height + 15, () => { text.destroy({}) })
        }

        startGame() {
            const timeoutsForGameover = [];
            const spritesForClear = [];
            const intervalForGameover = [];
            const fnForGameOver = [];
            let time = 60;

            let fishCount = 0;

            let badcount = 0;

            let tickTimeout;
            let factories = [];

            const gameOver = (success) => {
                clearTimeout(tickTimeout);
                timeoutsForGameover.forEach(t => {
                    clearTimeout(t);
                })

                intervalForGameover.forEach(t => {
                    clearInterval(t);
                })

                spritesForClear.forEach(s => {
                    if (!s._destroyed) {
                        s.destroy({ children: true, texture: true, baseTexture: true });
                    }
                })

                factories.forEach(f => f.destroy());


                fnForGameOver.forEach((fn) => fn());

                this.renderEndingView(success, badcount, this.settings.badCountToLose);
            }

            let carActive = false;
            const car = new Car(this.currentTextures);
            fnForGameOver.push(() => car.destroy());

            timeoutsForGameover.push(setTimeout(() => {
                car.render(this.pixiApp.stage, this.scaleCoef());
                carActive = true;
            }, 50000))

            //  add Stat
            const STAT_POSITION = [10, 10];
            const STAT_MARGIN = 15;

            const rubbishTexture = PIXI.Texture.from(this.currentTextures.rubbishIcon.url);
            const rubbishTextureSize = this.currentTextures.rubbishIcon.size;
            const rubbishSprite = new PIXI.Sprite(rubbishTexture);
            rubbishSprite.zIndex = 20000;
            const textStyle = { fontFamily: 'Arial', fontSize: 48, fill: 0xffffff, align: 'left', fotWeight: '600', stroke: 0x000000, strokeThickness: 3 };

            rubbishSprite.width = rubbishTextureSize[0] * this.scaleCoef();
            rubbishSprite.height = rubbishTextureSize[1] * this.scaleCoef();

            rubbishSprite.x = STAT_POSITION[0] * this.scaleCoef();
            rubbishSprite.y = STAT_POSITION[1] * this.scaleCoef();

            const rubbishText = new PIXI.Text('0%', textStyle);
            rubbishText.zIndex = 20000;

            rubbishText.x = (STAT_POSITION[0] + rubbishTextureSize[0] + STAT_MARGIN) * this.scaleCoef();
            rubbishText.y = STAT_POSITION[1] * this.scaleCoef() + (rubbishTextureSize[1] * this.scaleCoef() - rubbishText.height) / 2;

            this.pixiApp.stage.addChild(rubbishSprite);
            this.pixiApp.stage.addChild(rubbishText);

            const fishTexture = PIXI.Texture.from(this.currentTextures.fishIcon.url);
            const fishTextureSize = this.currentTextures.fishIcon.size;
            const fishSprite = new PIXI.Sprite(fishTexture);
            fishSprite.zIndex = 20000;

            fishSprite.width = fishTextureSize[0] * this.scaleCoef();
            fishSprite.height = fishTextureSize[1] * this.scaleCoef();

            fishSprite.x = rubbishText.x + rubbishText.width + STAT_MARGIN * this.scaleCoef();
            fishSprite.y = STAT_POSITION[1] * this.scaleCoef();


            const fishText = new PIXI.Text('100%', textStyle);
            fishText.zIndex = 20000;

            fishText.x = fishSprite.x + fishSprite.width + STAT_MARGIN * this.scaleCoef();
            fishText.y = STAT_POSITION[1] * this.scaleCoef() + (rubbishTextureSize[1] * this.scaleCoef() - fishText.height) / 2;

            this.pixiApp.stage.addChild(fishSprite);
            this.pixiApp.stage.addChild(fishText);

            spritesForClear.push(rubbishSprite, rubbishText, fishSprite, fishText)



            const timerSprite = PIXI.Sprite.from(this.currentTextures.timerIcon.url);
            const timerTextureSize = this.currentTextures.timerIcon.size;

            timerSprite.width = timerTextureSize[0] * this.scaleCoef();
            timerSprite.height = timerTextureSize[1] * this.scaleCoef();

            const timerText = new PIXI.Text('60', textStyle);

            timerText.y = STAT_POSITION[1] * this.scaleCoef() + (timerSprite.height - timerText.height) / 2;
            timerText.x = (this.currentTextures.background.size[0] - STAT_POSITION[1]) * this.scaleCoef() - timerText.width;

            timerSprite.x = (this.currentTextures.background.size[0] - STAT_POSITION[1]) * this.scaleCoef() - timerText.width
                - timerSprite.width - STAT_MARGIN * this.scaleCoef();
            timerSprite.y = STAT_POSITION[1] * this.scaleCoef();

            this.pixiApp.stage.addChild(timerText);
            this.pixiApp.stage.addChild(timerSprite);
            timerText.zIndex = 20000;
            timerSprite.zIndex = 20000;

            intervalForGameover.push(setInterval(() => {
                time--;
                timerText.text = time;
                timerText.x = (this.currentTextures.background.size[0] - STAT_POSITION[1]) * this.scaleCoef() - timerText.width;
                if (time <= 0) {
                    gameOver(true);
                }
            }, 1000));
            spritesForClear.push(timerText);
            spritesForClear.push(timerSprite);

            const updateStat = () => {
                if (rubbishText._destroyed) { return; }
                rubbishText.text = Math.round(badcount / this.settings.badCountToLose * 100).toString() + '%';
                fishText.text = Math.round((this.settings.fishCountToLose - fishCount) / this.settings.fishCountToLose * 100).toString() + '%';
                fishSprite.x = rubbishText.x + rubbishText.width + STAT_MARGIN * 2 * this.scaleCoef();
                fishText.x = fishSprite.x + fishSprite.width + STAT_MARGIN * this.scaleCoef();

                if (fishCount >= this.settings.fishCountToLose || badcount >= this.settings.badCountToLose) {
                    gameOver()
                }
            }
            // const 
            const RENDERED_POINTS = [];

            const addOil = (point) => {
                // point = [0, 0]
                let OIL_SIZE_SCALE_COEF = random(8, 10) / 10;
                let timeout;
                const indexesByCoef = [];
                this.currentTextures.badItems.forEach((i, index) => indexesByCoef.push(...new Array(i.coef).fill(index)));
                indexesByCoef.sort(() => Math.random() - 0.5)
                // const itemIndex = random(this.currentTextures.badItems.length - 1);
                const itemIndex = indexesByCoef[random(indexesByCoef.length - 1)];
                const textureSize = this.currentTextures.badItems[itemIndex].size;
                const showTexture = PIXI.Texture.from(this.currentTextures.badItems[itemIndex].url_show);

                const oil = new PIXI.Sprite(showTexture);
                oil.anchor.set(0.5);
                spritesForClear.push(oil);

                RENDERED_POINTS.push(point);

                oil.x = point[0] * this.scaleCoef();
                oil.y = point[1] * this.scaleCoef();


                oil.width = textureSize[0] * this.scaleCoef() * OIL_SIZE_SCALE_COEF * 0;
                oil.height = textureSize[1] * this.scaleCoef() * OIL_SIZE_SCALE_COEF * 0;

                const animationTick = (startTime) => {
                    if (oil._destroyed) { return; }
                    let time = Date.now() - startTime;

                    oil.width = textureSize[0] * this.scaleCoef() * OIL_SIZE_SCALE_COEF * time / this.settings.itemAnimationDuration;
                    oil.height = textureSize[1] * this.scaleCoef() * OIL_SIZE_SCALE_COEF * time / this.settings.itemAnimationDuration;

                    if (time > this.settings.itemAnimationDuration) { time = this.settings.itemAnimationDuration; }

                    if (time < this.settings.itemAnimationDuration) {
                        requestAnimationFrame(() => animationTick(startTime))
                    }

                }

                animationTick(Date.now());


                oil.interactive = true;
                oil.on('pointerdown', () => {
                    oil.destroy({ children: true, texture: false, baseTexture: false });
                    RENDERED_POINTS.splice(RENDERED_POINTS.indexOf(point), 1);
                    clearTimeout(timeout)
                })
                this.pixiApp.stage.addChild(oil);

                timeout = setTimeout(() => {
                    if (!oil._destroyed) {
                        oil.interactive = false;
                        badcount++;
                        updateStat();
                        oil.destroy({ children: true, texture: false, baseTexture: false });
                        RENDERED_POINTS.splice(RENDERED_POINTS.indexOf(point), 1);
                    }
                }, this.settings.badItemActiveTime)

                setTimeout(() => {
                    if (oil._destroyed) {
                        return;
                    }

                    const animationTick = (startTime) => {
                        if (oil._destroyed) { return; }
                        let time = Date.now() - startTime;

                        oil.width = textureSize[0] * this.scaleCoef() * OIL_SIZE_SCALE_COEF * (1 - time / this.settings.itemAnimationDuration);
                        oil.height = textureSize[1] * this.scaleCoef() * OIL_SIZE_SCALE_COEF * (1 - time / this.settings.itemAnimationDuration);

                        if (time > this.settings.itemAnimationDuration) { time = this.settings.itemAnimationDuration; }

                        if (time < this.settings.itemAnimationDuration) {
                            requestAnimationFrame(() => animationTick(startTime))
                        }

                    }

                    animationTick(Date.now());

                }, this.settings.badItemActiveTime - this.settings.itemAnimationDuration)
            }

            const addFish = () => {
                let timeout;
                const itemIndex = 0;

                const textureSize = this.currentTextures.goodItems[itemIndex].size;
                const showTexture = PIXI.Texture.from(this.currentTextures.goodItems[itemIndex].url_show);

                const fish = new PIXI.Sprite(showTexture);

                spritesForClear.push(fish);

                fish.anchor.set(0.5);

                const point = Geometry.randomPointInPath(this.currentTextures.riverPath, RENDERED_POINTS, 60);
                RENDERED_POINTS.push(point);

                fish.x = (point[0]) * this.scaleCoef();
                fish.y = (point[1]) * this.scaleCoef();


                fish.width = textureSize[0] * this.scaleCoef() * 0;
                fish.height = textureSize[1] * this.scaleCoef() * 0;

                fish.interactive = true;

                fish.on('pointerdown', () => {
                    fish.destroy({ children: true, texture: false, baseTexture: false });
                    RENDERED_POINTS.splice(RENDERED_POINTS.indexOf(point), 1);
                    fishCount++;
                    clearTimeout(timeout);
                    updateStat();
                });

                this.pixiApp.stage.addChild(fish);

                const animationTick = (startTime) => {
                    if (fish._destroyed) { return; }
                    let time = Date.now() - startTime;

                    fish.width = textureSize[0] * this.scaleCoef() * time / this.settings.itemAnimationDuration;
                    fish.height = textureSize[1] * this.scaleCoef() * time / this.settings.itemAnimationDuration;

                    if (time > this.settings.itemAnimationDuration) { time = this.settings.itemAnimationDuration; }

                    if (time < this.settings.itemAnimationDuration) {
                        requestAnimationFrame(() => animationTick(startTime))
                    }

                }

                animationTick(Date.now());

                timeout = setTimeout(() => {
                    if (fish._destroyed) { return; }
                    fish.destroy({ children: true, texture: false, baseTexture: false });
                    RENDERED_POINTS.splice(RENDERED_POINTS.indexOf(point), 1);
                }, this.settings.fishActiveTime)
            }

            const brokeIntervals = [[0, 10], [0, 10], [10, 20], [10, 20]].sort(() => Math.random() - 0.5);

            factories = this.currentTextures.factory.map((f, i) => new Factory(f, this.settings, i, brokeIntervals[i]));
            const active1 = random(0, 1);
            const active2 = random(2, 3);
            factories[active1].activate();
            factories[active2].activate();

            timeoutsForGameover.push(setTimeout(() => {
                factories[active1 == 0 ? 1 : 0].activate()
            }, random(8, 15) * 1000));

            timeoutsForGameover.push(setTimeout(() => {
                factories[active1 == 2 ? 3 : 2].activate()
            }, random(12, 20) * 1000))

            factories.forEach(f => f.drow(this.pixiApp).setPositionAndSize(this.scaleCoef()));

            const tick = () => {
                let complexity = 1;
                let nextTickDelay = this.settings.tickTimeBase;

                for (let f of factories) {
                    complexity += f.active ? 1 : 0;
                    complexity += f.broken ? 1 : 0;
                }

                nextTickDelay -= complexity * this.settings.tickTimeSubtractPerComplexity;

                if (carActive) {
                    nextTickDelay /= this.settings.carComplexityTimeCoef;
                }

                addOil(Geometry.randomPointInPath(this.currentTextures.riverPath, RENDERED_POINTS, 90));

                if (random(100) < 20) {
                    addFish();
                }


                tickTimeout = setTimeout(() => tick(), nextTickDelay)
            }

            tickTimeout = setTimeout(() => {
                tick()
            }, 1500);

        }

        normilizebgSize() {
            this.bgSprite.width = this.pixiApp.renderer.width;
            this.bgSprite.height = this.pixiApp.renderer.height;
        }

        calculateByPropotrion(value1, scaled1Value, value2) {
            return value1 / scaled1Value * value2;
        }

        containerWidth() {
            return this._containerWidth === undefined ? this._container.getBoundingClientRect().width : this._containerWidth;
        }

        onContainerResize(callback) {
            this._containerWidth = this._container.getBoundingClientRect().width;
            const check = () => {
                const currentWidth = this._container.getBoundingClientRect().width;
                if (currentWidth !== this._containerWidth) {
                    callback({ width: currentWidth, prevWidth: this._containerWidth });
                    this._containerWidth = currentWidth;
                }
                requestAnimationFrame(check);
            }
            check();
        }

    }

    class Geometry {

        static randomPointInPath(path, excludePoints, excludeRadius) {
            if (!Array.isArray(excludePoints)) { excludePoints = [] }

            let point;
            const rect = Geometry.circumscribedRect(path);

            let nearExcludePoints = false;
            let tryCount = 0;

            do {
                tryCount++;
                if (point) {
                    Geometry.isPointInPath(path, point);
                    point = Geometry.randomPointInRect(rect.min, rect.max)
                }
                else {
                    point = Geometry.randomPointInRect(rect.min, rect.max)
                }

                nearExcludePoints = excludePoints.filter(p => Geometry.length(p, point) < excludeRadius).length > 0;
                if (tryCount > 50) {
                    nearExcludePoints = false;
                }

            } while (!(Geometry.isPointInPath(path, point) && !nearExcludePoints));

            if (tryCount > 50) {
                console.warn('Randow point too hard')
            }
            return point;
        }

        static length(point1, point2) {
            const l = Math.sqrt(Math.pow(point1[0] - point2[0], 2) + Math.pow(point1[1] - point2[1], 2));
            return l;
        }

        static randomPointInRect(point1, point2) {
            return [random(point1[0], point2[0]), random(point1[1], point2[1])];
        }

        static isPointInPath(path, point) {
            const rectPoint = Geometry.circumscribedRect(path).min.map(coord => coord - 2); // Random point outside rect
            let crossingCount = 0;
            const crossings = [];


            path.forEach((pathPoint, index) => {
                let endingPoint = index + 1 < path.length ? path[index + 1] : path[0];
                if (Geometry.lineSegmentsCrossing(pathPoint, endingPoint, point, rectPoint)) {
                    crossingCount++;
                }
            });

            return crossingCount % 2 == 1;
        }

        static circumscribedRect(path) {
            let min = [...path[0]];
            let max = [...path[0]];

            path.forEach(point => {
                min[0] = Math.min(min[0], point[0]);
                min[1] = Math.min(min[1], point[1]);
                max[0] = Math.max(max[0], point[0]);
                max[1] = Math.max(max[1], point[1]);
            });

            return { min, max }
        }

        static lineSegmentsCrossing(firstLinePoint1, firstLinePoint2, secondLinePoint1, secondLinePoint2) {

            var lineSegmentsIntersect = (x1, y1, x2, y2, x3, y3, x4, y4) => {
                var a_dx = x2 - x1;
                var a_dy = y2 - y1;
                var b_dx = x4 - x3;
                var b_dy = y4 - y3;
                var s = (-a_dy * (x1 - x3) + a_dx * (y1 - y3)) / (-b_dx * a_dy + a_dx * b_dy);
                var t = (+b_dx * (y1 - y3) - b_dy * (x1 - x3)) / (-b_dx * a_dy + a_dx * b_dy);
                return (s >= 0 && s <= 1 && t >= 0 && t <= 1) ? [x1 + t * a_dx, y1 + t * a_dy] : false;
            }

            // return xProjectionCrossing && yProjectionCrossing;

            return lineSegmentsIntersect(...firstLinePoint1, ...firstLinePoint2, ...secondLinePoint1, ...secondLinePoint2)
        }

        static isNummerInRange(num, rangeFrom, rangeTo) {
            return (num >= rangeFrom && num <= rangeTo) || (num <= rangeFrom && num >= rangeTo)
        }
    }

    return new OilGame(document.getElementsByClassName('container')[0], document.getElementById('oilGame'), SETTINGS);
}

OILGame();

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