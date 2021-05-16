class Movement {
    constructor(player) {
        this.keys;
        this.player = player
    }
    gameloop() {
        //W
            if(this.keys["87"]) {
                lastAction = 'walkNorth'
                if(!this.player.playing){
                    this.player.textures = playerSheet.walkNorth
                    this.player.play()
                }
                this.player.y -= speed
            }
            //A
            if(this.keys["65"]) {
                lastAction = 'walkWest'
                if(!this.player.playing){
                    this.player.textures = playerSheet.walkWest
                    this.player.play()
                }
                this.player.x -= speed
            }
            //S
            if(this.keys["83"]) {
                lastAction = 'walkSouth'
                if(!this.player.playing){
                    this.player.textures = playerSheet.walkSouth
                    this.player.play()
                }
                this.player.y += speed
            }
            //D
            if(this.keys["68"]) {
                lastAction = 'walkEast'
                if(!this.player.playing){
                    this.player.textures = playerSheet.walkEast
                    this.player.play()
                }
                this.player.x += speed
            }
            //Spacebar
            if(this.keys["32"]) {
                
                if(!this.player.playing){
                    this.player.textures = playerSheet.spellPrepare
                    this.player.play()
                }
            }
    }
    keysUp(e){
            if(e.keyCode === '32') return
            this.keys[e.keyCode] = false
            this.player.stop()
            switch (lastAction) {
                case 'walkSouth':
                    this.player.textures = playerSheet.standSouth
                    break;
                case 'walkNorth':
                    this.player.textures = playerSheet.standNorth
                    break;
                case 'walkEast':
                    this.player.textures = playerSheet.standEast
                    break;
                case 'walkWest':
                    this.player.textures = playerSheet.standWest
                    break;
            
                default:
                    break;
            }
        }
    keysDown(e) {
            this.keys[e.keyCode] = true
        }

}
export default Movement