class Terra {
    constructor(app, playerSheet, player) {
        this.app = app
        this.playerSheet = playerSheet
        this.player
        
    }
    createPlayerSheet() {
        let ssheet = new PIXI.BaseTexture(this.app.loader.resources["sara"].url)
        let ssheet2 = new PIXI.BaseTexture(this.app.loader.resources["sara2"].url)
        let w = 96,
            h = 180,
            m = 25;

        this.playerSheet["standSouth"] = [new PIXI.Texture(ssheet, new PIXI.Rectangle(2 * w, 0, w, h))]
        this.playerSheet["standNorth"] = [new PIXI.Texture(ssheet, new PIXI.Rectangle(8 * w, 0, w, h))]
        this.playerSheet["standEast"] = [new PIXI.Texture(ssheet2, new PIXI.Rectangle(4 * w + m, 0, w, h))]
        this.playerSheet["standWest"] = [new PIXI.Texture(ssheet, new PIXI.Rectangle(14 * w + 5, 0, w + 5, h))]
        
        this.playerSheet["walkSouth"] = [
            new PIXI.Texture(ssheet, new PIXI.Rectangle(0 * w, 0, w, h)),
            new PIXI.Texture(ssheet, new PIXI.Rectangle(2 * w, 0, w, h)),
            new PIXI.Texture(ssheet, new PIXI.Rectangle(4 * w, 0, w, h)),
        ]

        this.playerSheet["walkNorth"] = [
            new PIXI.Texture(ssheet, new PIXI.Rectangle(6 * w, 0, w, h)),
            new PIXI.Texture(ssheet, new PIXI.Rectangle(8 * w, 0, w, h)),
            new PIXI.Texture(ssheet, new PIXI.Rectangle(10 * w, 0, w, h)),
        ]

        this.playerSheet["walkEast"] = [
            new PIXI.Texture(ssheet2, new PIXI.Rectangle(2 * w + m, 0, w, h)),
            new PIXI.Texture(ssheet2, new PIXI.Rectangle(4 * w + m, 0, w, h)),
            new PIXI.Texture(ssheet2, new PIXI.Rectangle(6 * w + m, 0, w, h)),
        ]

        this.playerSheet["walkWest"] = [
            new PIXI.Texture(ssheet, new PIXI.Rectangle(12 * w + 5, 0, w + 5, h)),
            new PIXI.Texture(ssheet, new PIXI.Rectangle(14 * w + 5, 0, w + 5, h)),
            new PIXI.Texture(ssheet, new PIXI.Rectangle(16 * w + 5, 0, w + 5, h)),
        ]

        this.playerSheet["spellCast"] = [
            new PIXI.Texture(ssheet, new PIXI.Rectangle(4 * w, h, w, h)),
            new PIXI.Texture(ssheet, new PIXI.Rectangle(6 * w, h, w, h)),
            new PIXI.Texture(ssheet, new PIXI.Rectangle(8 * w, h, w, h)),
            new PIXI.Texture(ssheet, new PIXI.Rectangle(10 * w, h, w, h)),
            new PIXI.Texture(ssheet, new PIXI.Rectangle(8 * w, h, w, h)),
            new PIXI.Texture(ssheet, new PIXI.Rectangle(6 * w, h, w, h)),
            new PIXI.Texture(ssheet, new PIXI.Rectangle(4 * w, h, w, h)),
        ]
        this.playerSheet["spellPrepare"] = [
            new PIXI.Texture(ssheet, new PIXI.Rectangle(14 * w + 5, h + 10, w + 5, h)),
            new PIXI.Texture(ssheet, new PIXI.Rectangle(12 * w + 5, h + 10, w + 5, h)),
            new PIXI.Texture(ssheet, new PIXI.Rectangle(14 * w + 5, h + 10, w + 5, h)),
            new PIXI.Texture(ssheet, new PIXI.Rectangle(12 * w + 5, h + 10, w + 5, h)),
            new PIXI.Texture(ssheet, new PIXI.Rectangle(14 * w + 5, h + 10, w + 5, h)),
            new PIXI.Texture(ssheet, new PIXI.Rectangle(12 * w + 5, h + 10, w + 5, h)),
            new PIXI.Texture(ssheet, new PIXI.Rectangle(14 * w + 5, h + 10, w + 5, h)),
            new PIXI.Texture(ssheet, new PIXI.Rectangle(12 * w + 5, h + 10, w + 5, h)),
            new PIXI.Texture(ssheet, new PIXI.Rectangle(14 * w + 5, h + 10, w + 5, h)),
            new PIXI.Texture(ssheet, new PIXI.Rectangle(12 * w + 5, h + 10, w + 5, h)),
            new PIXI.Texture(ssheet, new PIXI.Rectangle(14 * w + 5, h + 10, w + 5, h)),
            new PIXI.Texture(ssheet, new PIXI.Rectangle(12 * w + 5, h + 10, w + 5, h)),
            new PIXI.Texture(ssheet, new PIXI.Rectangle(14 * w + 5, h + 10, w + 5, h)),
            new PIXI.Texture(ssheet, new PIXI.Rectangle(4 * w + 5, h + 10, w + 5, h)),
            new PIXI.Texture(ssheet, new PIXI.Rectangle(6 * w + 5, h + 10, w + 5, h)),
            new PIXI.Texture(ssheet, new PIXI.Rectangle(8 * w + 5, h + 10, w + 5, h)),
            new PIXI.Texture(ssheet, new PIXI.Rectangle(10* w - 8, h + 10, w + 5, h)),
            new PIXI.Texture(ssheet, new PIXI.Rectangle(10* w - 8, h + 10, w + 5, h)),
            new PIXI.Texture(ssheet, new PIXI.Rectangle(10* w - 8, h + 10, w + 5, h)),
            new PIXI.Texture(ssheet, new PIXI.Rectangle(4 * w + 5, h + 10, w + 5, h)),
        ]
    }
            
    createPlayer(){
        this.player = new PIXI.AnimatedSprite(this.playerSheet.standSouth);
        this.player.anchor.x = 0.5
        this.player.anchor.y = 0.5
        this.player.scale.y = 0.2
        this.player.scale.x = 0.2
        this.player.animationSpeed = .2
        this.player.loop = false
        this.player.x = this.app.renderer.width / 2;
        this.player.y = this.app.renderer.height / 2;
        this.app.stage.addChild(this.player)
        this.player.play()
    }
}
export default Terra