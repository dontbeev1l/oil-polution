
const TEXTURE_PACK_1 = {
    background: {
        size: [1000, 800],
        url: '/resources/textures/river-1.jpg'
    }
}

function random(to, from) {
    if (!from) { from = 0; }
    v =  Math.round(Math.random() * (to - from) + from);
    return v;
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
    }

    scaleCoef() {
        return this.containerWidth() / this.currentTextures.background.size[0]
    }

    renderMenu() {
        const text = new PIXI.Text('PLAY', {fontFamily : 'Arial', fontSize: 24, fill : 0x000000, align : 'center'});
        this.pixiApp.stage.addChild(text)
        text.interactive = true;
        text.on('click', () => { 
            this.pixiApp.stage.removeChild(text); this.startGame() 
        });
    }


    startGame() {
        const addOil = () => {
            const oil = PIXI.Sprite.from(PIXI.Texture.WHITE);
            oil.x = random(this.currentTextures.background.size[0] - 100 / 2, 100 / 2) * this.scaleCoef();
            oil.y = random(this.currentTextures.background.size[1] - 100 / 2, 100 / 2) * this.scaleCoef();
            oil.width = 100
            oil.height = 100
            oil.interactive = true;
            oil.on('click', () => {
                oil.destroy({ children: true, texture: true, baseTexture: true})
            })
            this.pixiApp.stage.addChild(oil);
        }

        addOil();

        setInterval(() => {
            addOil();
        }, 1000);
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

new OilGame(document.getElementsByClassName('container')[0], document.getElementById('oilGame'));