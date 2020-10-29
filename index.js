
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
        size: [67, 60]
    },

    badItems: [
        {
            url_show: './textures/dokhlaya_ryba11.png',
            url_default: './textures/dokhlaya_ryba1.png',
            size: [143, 69]
        },
        {
            url_show: './textures/sgustok1.png',
            url_default: './textures/sgustok11.png',
            size: [148, 48]
        },
        {
            url_show: './textures/sgustok2.png',
            url_default: './textures/sgustok21.png',
            size: [153, 35]
        },
        {
            url_show: './textures/sgustok3.png',
            url_default: './textures/sgustok31.png',
            size: [108, 55]
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
        [375, 323],
        [775, 130],
        [760, 663],
        [545, 815],
        [340, 825],
        [186, 953]
    ],

    factory: [
        {
            url_inactive: './textures/zavod2_ne_rabotaet.png',
            url_active: './textures/zavod2.png',
            size: [239, 216],
            position: [30, 80],
            trumpet: {
                url_fixed: './textures/truba22.png',
                url_broken: './textures/truba2.png',
                size: [112, 117],
                position: [180, 230]
            }
        },
        {
            url_inactive: './textures/zavod1_ne_rabotaet.png',
            url_active: './textures/zavod1.png',
            size: [235, 181],
            position: [464, 27],
            trumpet: {
                url_fixed: './textures/truba11.png',
                url_broken: './textures/truba1.png',
                size: [90, 114],
                position: [641, 109]
            }
        },
        {
            url_inactive: './textures/zavod3_ne_rabotaet.png',
            url_active: './textures/zavod3.png',
            size: [233, 266],
            position: [564, 647],
            trumpet: {
                url_fixed: './textures/truba3.png',
                url_broken: './textures/truba33.png',
                size: [143, 158],
                position: [485, 709]
            }
        },
        {
            url_inactive: './textures/zavod4_ne_rabotaet.png',
            url_active: './textures/zavod4.png',
            size: [261, 225],
            position: [308, 783],
            trumpet: {
                url_fixed: './textures/truba4.png',
                url_broken: './textures/truba44.png',
                size: [143, 158],
                position: [210, 777]
            }
        }
    ]
}

function random(to, from) {
    if (!from) { from = 0; }

    if (to < from) {
        const a = from;
        from = to;
        to = a;
    }

    v =  Math.round(Math.random() * (to - from) + from);
    return v;
}

class Factory {
    constructor(textures) {
        this.timeouts = [];
        this.textures = textures;
        this.factoryInactiveTexture = PIXI.Texture.from(textures.url_inactive);
        this.factoryActiveTexture = PIXI.Texture.from(textures.url_active);
        this.trumpetFixedTexture = PIXI.Texture.from(textures.trumpet.url_fixed);
        this.trumpetBrokenTexture = PIXI.Texture.from(textures.trumpet.url_broken);

        this.factory = new PIXI.Sprite(this.factoryInactiveTexture);
        this.trumpet = new PIXI.Sprite(this.trumpetFixedTexture);

        this.trumpet.zIndex = 10000;
        this.factory.zIndex = 10000;

        this.active = false;
        this.broken = false;
        this.addClickEvents()

        this.activate();
        setTimeout(() => {this.broke() }, random(10, 3) * 1000);
    }


    destroy() {
        this.factory.destroy({ children: true, texture: true, baseTexture: true})
        this.trumpet.destroy({ children: true, texture: true, baseTexture: true})

        this.timeouts.forEach((t) => clearTimeout(t));
        return this;
    }

    addClickEvents() {
        let factorClickCount = 0;
        this.factory.interactive = true;
        this.factory.on('pointerdown', () => {
            if (this.active) {
                factorClickCount ++;
                if (factorClickCount >= 5) {
                    factorClickCount = 0;
                    this.deactivate();

                    this.timeouts.push(setTimeout(() => {
                        this.activate()
                    }, random(4, 10) * 1000))
                }
            }
        })


        let trumpetClickCount = 0;
        this.trumpet.interactive = true;
        this.trumpet.on('pointerdown', () => {
            if (this.broken) {
                trumpetClickCount ++;
                if (trumpetClickCount >= 3) {
                    trumpetClickCount = 0;
                    this.fix();

                    this.timeouts.push(setTimeout(() => {
                        this.broke()
                    }, random(4, 10) * 1000))
                }
            }
        })

    }

    drow(pixiApp) {
        pixiApp.stage.addChild(this.factory);
        pixiApp.stage.addChild(this.trumpet);

        return this;
    }

    setPositionAndSize(scaleCoef) {
        this.factory.x = this.textures.position[0] * scaleCoef;
        this.factory.y = this.textures.position[1] * scaleCoef;
        this.factory.width = this.textures.size[0] * scaleCoef;
        this.factory.height = this.textures.size[1] * scaleCoef;

        this.trumpet.x = this.textures.trumpet.position[0] * scaleCoef;
        this.trumpet.y = this.textures.trumpet.position[1] * scaleCoef;
        this.trumpet.width = this.textures.trumpet.size[0] * scaleCoef;
        this.trumpet.height = this.textures.trumpet.size[1] * scaleCoef;

        return this;
    }


    activate() {
        this.factory.texture = this.factoryActiveTexture;
        this.active = true;
        return this;
    }

    deactivate() {
        this.factory.texture = this.factoryInactiveTexture;
        this.active = false;
        return this;
    }

    broke() {
        this.trumpet.texture = this.trumpetBrokenTexture;
        this.broken = true;
        return this;
    }

    fix() {
        this.trumpet.texture = this.trumpetFixedTexture;
        this.broken = false;
        return this;
    }

}

class OilGame {
    constructor(container, canvas) {
        this.currentTextures = TEXTURE_PACK_1;

        this._container = container;
        this._canvas = canvas;

        this.pixiApp = new PIXI.Application({
            view: canvas,
            backgroundColor: 0xff0000,
            width: this.containerWidth(),
            height: this.calculateByPropotrion(this.containerWidth(), this.currentTextures.background.size[0], this.currentTextures.background.size[1])
        });

        this.bgSprite = PIXI.Sprite.from(this.currentTextures.background.url);
        this.normilizebgSize();

        this.pixiApp.stage.addChild(this.bgSprite); 

        this.pixiApp.stage.sortableChildren = true;


        this.onContainerResize((event) => {
            console.log('RESIZE', event)
            this.pixiApp.renderer.resize(
                event.width,
                this.calculateByPropotrion(event.width, this.currentTextures.background.size[0], this.currentTextures.background.size[1])
                );
            this.normilizebgSize();
        });
        console.log(this);
        this.renderMenu();
        // this.debugRiverArea();
    }

    debugRiverArea() {
        const graphics = new PIXI.Graphics();
        graphics.beginFill(0xFF3300);
        graphics.lineStyle(4, 0xffd900, 1);
        graphics.moveTo(...this.currentTextures.riverPath[0].map(c => c * this.scaleCoef()));
        this.currentTextures.riverPath.forEach(point => {
            graphics.lineTo(...point.map(c => c * this.scaleCoef()));
        })
        graphics.closePath();
        graphics.endFill();
        this.pixiApp.stage.addChild(graphics);
    }

    scaleCoef() {
        return this.containerWidth() / this.currentTextures.background.size[0]
    }

    renderMenu() {
        const text = new PIXI.Text('PLAY', {fontFamily : 'Arial', fontSize: 24, fill : 0x000000, align : 'center'});
        this.pixiApp.stage.addChild(text)
        text.interactive = true;
        text.on('pointerdown', () => { 
            this.pixiApp.stage.removeChild(text); this.startGame() 
        });
    }

    startGame() {
        const maxBadCount = 92;
        const maxFishCount = 3;
        
        const timeoutsForGameover = [];
        const spritesForClear = [];
        const intervalForGameover = [];
        const fnForGameOver = [];
        
        let fishCount = maxFishCount;

        let badcount = 0;

        let tickTimeout;
        let factories = [];

        const gameOver = () => {
            clearTimeout(tickTimeout);
            timeoutsForGameover.forEach(t => {
                clearTimeout(t);
            })

            intervalForGameover.forEach(t => {
                clearInterval(t);
            })

            spritesForClear.forEach(s => {
                if (!s._destroyed) {
                    s.destroy({ children: true, texture: true, baseTexture: true});
                }
            })

            factories.forEach(f => f.destroy());


            fnForGameOver.forEach((fn) => fn());

            this.renderMenu();
        }

        const renderStat = () => {
            
        }

        //  add Stat
        const STAT_POSITION = [50, 30];
        const STAT_MARGIN = 20;

        const rubbishTexture = PIXI.Texture.from(this.currentTextures.rubbishIcon.url);  
        const rubbishTextureSize = this.currentTextures.rubbishIcon.size;
        const rubbishSprite = new PIXI.Sprite(rubbishTexture);


        rubbishSprite.width = rubbishTextureSize[0] * this.scaleCoef();
        rubbishSprite.height = rubbishTextureSize[1] * this.scaleCoef();

        rubbishSprite.x = STAT_POSITION[0] * this.scaleCoef();
        rubbishSprite.y = STAT_POSITION[1] * this.scaleCoef();

        const rubbishText = new PIXI.Text('0%' ,{fontFamily : 'Arial', fontSize: 24, fill : 0x000000, align : 'left', fotWeight: '600'});

        rubbishText.x = (STAT_POSITION[0] + rubbishTextureSize[0] + STAT_MARGIN) * this.scaleCoef();
        rubbishText.y = STAT_POSITION[1] * this.scaleCoef() + (rubbishTextureSize[1] * this.scaleCoef() - rubbishText.height) / 2;

        this.pixiApp.stage.addChild(rubbishSprite);
        this.pixiApp.stage.addChild(rubbishText);

        const fishTexture = PIXI.Texture.from(this.currentTextures.fishIcon.url);  
        const fishTextureSize = this.currentTextures.fishIcon.size;
        const fishSprite = new PIXI.Sprite(fishTexture);


        fishSprite.width = fishTextureSize[0] * this.scaleCoef();
        fishSprite.height = fishTextureSize[1] * this.scaleCoef();

        fishSprite.x = rubbishText.x + rubbishText.width + STAT_MARGIN * this.scaleCoef();
        fishSprite.y = STAT_POSITION[1] * this.scaleCoef();


        const fishText = new PIXI.Text('100%' ,{fontFamily : 'Arial', fontSize: 24, fill : 0x000000, align : 'left', fotWeight: '600'});

        fishText.x = fishSprite.x + fishSprite.width + STAT_MARGIN * this.scaleCoef();
        fishText.y = STAT_POSITION[1] * this.scaleCoef() + (rubbishTextureSize[1] * this.scaleCoef() - fishText.height) / 2;

        this.pixiApp.stage.addChild(fishSprite);
        this.pixiApp.stage.addChild(fishText);

        spritesForClear.push(rubbishSprite, rubbishText, fishSprite, fishText)


        let time = 60;
        const timerText =  new PIXI.Text('60', {fontFamily : 'Arial', fontSize: 24, fill : 0x000000, align : 'left', fotWeight: '600'}); 
        timerText.y = STAT_POSITION[1] * this.scaleCoef()
        timerText.x = (this.currentTextures.background.size[0] - STAT_POSITION[1]) * this.scaleCoef() - timerText.width;
        this.pixiApp.stage.addChild(timerText);

        intervalForGameover.push(setInterval(() => {
            time--;
            timerText.text = time;
            timerText.x = (this.currentTextures.background.size[0] - STAT_POSITION[1]) * this.scaleCoef() - timerText.width;
            if (time <= 0) {
                gameOver(true);
            }
        }, 1000));
        spritesForClear.push(timerText);
        //
        

        const updateStat = () => {
            if (rubbishText._destroyed) { return; }
            rubbishText.text = Math.round(badcount / maxBadCount * 100).toString() + '%';
            fishText.text = Math.round(fishCount / maxFishCount * 100).toString() + '%';
            fishSprite.x = rubbishText.x + rubbishText.width + STAT_MARGIN * 2 * this.scaleCoef();
            fishText.x = fishSprite.x + fishSprite.width + STAT_MARGIN * this.scaleCoef();
            
            if (fishCount <= 0 || badcount >= maxBadCount) {
                gameOver()
            }
        }
        // const 
        const RENDERED_POINTS = [];

        const addOil = (point) => {
            let OIL_SIZE_SCALE_COEF = random(6, 10) / 10;
            let timeout;
            const itemIndex = random(this.currentTextures.badItems.length - 1);
            const textureSize = this.currentTextures.badItems[itemIndex].size;
            const showTexture = PIXI.Texture.from(this.currentTextures.badItems[itemIndex].url_show);
            const defaultTexture = PIXI.Texture.from(this.currentTextures.badItems[itemIndex].url_default);

            const oil = new PIXI.Sprite(showTexture);
            oil.anchor.set(0.5);
            spritesForClear.push(oil);


            RENDERED_POINTS.push(RENDERED_POINTS);

            oil.x = (point[0]  - textureSize[0] / 2) * this.scaleCoef();
            oil.y = (point[1] - textureSize[1] / 2) * this.scaleCoef();


            oil.width =  textureSize[0] * this.scaleCoef() * OIL_SIZE_SCALE_COEF * 0;
            oil.height = textureSize[1] * this.scaleCoef() * OIL_SIZE_SCALE_COEF * 0;

            let animationDuration = 200;
            const animationTick = (startTime) => {
                if (oil._destroyed) { return; }
                let time = Date.now() - startTime;

                oil.width =  textureSize[0] * this.scaleCoef() * OIL_SIZE_SCALE_COEF * time / animationDuration;
                oil.height = textureSize[1] * this.scaleCoef() * OIL_SIZE_SCALE_COEF * time / animationDuration;

                if (time > animationDuration) { time = animationDuration; }

                if (time < animationDuration) {
                    requestAnimationFrame(() => animationTick(startTime))
                }

            }

            animationTick(Date.now());


            oil.interactive = true;
            oil.on('pointerdown', () => {
                oil.destroy({ children: true, texture: false, baseTexture: false});
                clearTimeout(timeout)
            })
            this.pixiApp.stage.addChild(oil);

            timeout = setTimeout(() => {
                oil.interactive = false;
                badcount++;
                // RENDERED_POINTS.splice(RENDERED_POINTS.indexOf(point), 1);
                // oil.destroy({ children: true, texture: false, baseTexture: false});
                updateStat();
            }, 4000)

            setTimeout(() => {
                if (!oil._destroyed) {
                    oil.texture = defaultTexture;
                }
            }, 1700)
        }

        const addFish = () => {
            let timeout;
            const itemIndex = 0;

            const textureSize = this.currentTextures.goodItems[itemIndex].size;
            const showTexture = PIXI.Texture.from(this.currentTextures.goodItems[itemIndex].url_show);
            const defaultTexture = PIXI.Texture.from(this.currentTextures.goodItems[itemIndex].url_default);

            const fish = new PIXI.Sprite(showTexture);

            spritesForClear.push(fish);

            const point = Geometry.randomPointInPath(this.currentTextures.riverPath);

            fish.x = (point[0]  - textureSize[0] / 2) * this.scaleCoef();
            fish.y = (point[1] - textureSize[1] / 2) * this.scaleCoef();


            fish.width =  textureSize[0] * this.scaleCoef()
            fish.height = textureSize[1] * this.scaleCoef()

            fish.interactive = true;

            fish.on('pointerdown', () => {
                fish.destroy({ children: true, texture: false, baseTexture: false});
                fishCount--;
                clearTimeout(timeout);
                updateStat();
            });

            this.pixiApp.stage.addChild(fish);

            timeout = setTimeout(() => {
                fish.destroy({ children: true, texture: false, baseTexture: false});
            }, 1800)

            setTimeout(() => {
                if (!fish._destroyed) {
                    fish.texture = defaultTexture;
                }
            }, 300)
        }

        factories = this.currentTextures.factory.map(f => new Factory(f));
        factories.forEach(f => f.drow(this.pixiApp).setPositionAndSize(this.scaleCoef()));


        const tick = () => {
            let complexity = 1;
            let nextTickDelay = 2000; 

            for (let f of factories) {
                complexity += f.active ? 1 : 0;
                complexity += f.broken ? 1 : 0;
            }

            nextTickDelay -= complexity * 100;

            addOil( Geometry.randomPointInPath(this.currentTextures.riverPath, RENDERED_POINTS, 60));

            if (random(100) < 20) {
                addFish();
            }

            
            tickTimeout = setTimeout(() => tick(), nextTickDelay)
        }

        tickTimeout = setTimeout( () => {
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
            const  currentWidth = this._container.getBoundingClientRect().width;
            if (currentWidth !== this._containerWidth) {
                callback({width: currentWidth, prevWidth: this._containerWidth});
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
            tryCount ++;
            if (point) {
                Geometry.isPointInPath(path, point);
                point = Geometry.randomPointInRect(rect.min, rect.max)
            }
            else {
                point = Geometry.randomPointInRect(rect.min, rect.max)
            }

            nearExcludePoints = excludePoints.filter(p => Geometry.length(p, point) < excludeRadius).length > 0;
            if (tryCount > 100) {
                nearExcludePoints = false;
            }

        } while (!Geometry.isPointInPath(path, point) && !nearExcludePoints && tryCount < 100);
        if (tryCount > 100) {
            console.warn('Randow point too hard')
        }
        return point; 
    }

    static length(point1, point2) {
        return Math.sqrt(Math.pow(point1[0] - point2[0], 2) + Math.pow(point1[1] - point2[1], 2));
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

        return {min, max}
    }

    static lineSegmentsCrossing(firstLinePoint1, firstLinePoint2, secondLinePoint1, secondLinePoint2) {

         var lineSegmentsIntersect = (x1, y1, x2, y2, x3, y3, x4, y4)=> {
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
        return (num >= rangeFrom && num <= rangeTo) ||  (num <= rangeFrom &&  num >= rangeTo)
    }
}

new OilGame(document.getElementsByClassName('container')[0], document.getElementById('oilGame'));


// [522, 190]
// [600, 150]
// [715, 20]

// [13, 18]

// [793, 109]

// console.log(Geometry.lineSegmentsCrossing([522, 190], [600, 150], [13, 18], [793, 109] ))
// console.log(Geometry.lineSegmentsCrossing([715, 20], [600, 150], [13, 18], [793, 109] ))