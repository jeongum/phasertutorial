import{CST} from "../CST"
export class MenuScene extends Phaser.Scene{
    constructor(){
        super({
            key:CST.SCENES.MENU
        })
    }
    init(){
    }
    create(){
        //setDepth is back or front 1 is always front, 0 is back
        this.add.image(this.game.renderer.width/2, this.game.renderer.height * 0.20, CST.IMAGE.LOGO).setDepth(1);
        this.add.image(0,0,CST.IMAGE.TITLE).setOrigin(0).setDepth(0);
        let playButton = this.add.image(this.game.renderer.width/2, this.game.renderer.height/2, CST.IMAGE.PLAY).setDepth(1);
        let optionButton = this.add.image(this.game.renderer.width/2, this.game.renderer.height/2 + 100, CST.IMAGE.OPTIONS).setDepth(1);
        
        let hoverSprite=this.add.sprite(100,100,CST.SPRITE.CAT);
        hoverSprite.setScale(2);
        hoverSprite.setVisible(false);

        this.sound.play(CST.AUDIO.TITLE,{
            loop : true
        })

        this.anims.create({
            key: "walk",
            frameRate:4,
            repeat: -1, //repeat forever
            frames: this.anims.generateFrameNumbers(CST.SPRITE.CAT,{
                frames: [0,1,2,3]
            })
        })
        playButton.setInteractive();

        playButton.on("pointerover",()=>{
            hoverSprite.setVisible(true);
            hoverSprite.play("walk");
            hoverSprite.x = playButton.x -playButton.width
            hoverSprite.y = playButton.y;
        })

        playButton.on("pointerout",()=>{
            hoverSprite.setVisible(false);
            console.log("OUTAA HERE")
        })

        playButton.on("pointerup",()=>{
            this.scene.start(CST.SCENES.PLAY);
        })

        optionButton.setInteractive();
        optionButton.on("pointerover",()=>{
            hoverSprite.setVisible(true);
            hoverSprite.play("walk");
            hoverSprite.x = optionButton.x -optionButton.width
            hoverSprite.y = optionButton.y;
        })

        optionButton.on("pointerout",()=>{
            hoverSprite.setVisible(false);
            console.log("OUTAA HERE")
        })

        optionButton.on("pointerup",()=>{
            //this.scene.launch();
        })
    }
}