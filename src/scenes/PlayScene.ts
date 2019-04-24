import{CST} from "../CST";

export class PlayScene extends Phaser.Scene{
  
    anna! : Phaser.GameObjects.Sprite;
    hooded!: Phaser.GameObjects.Sprite;
    keyboard!: {[index: string]: Phaser.Input.Keyboard.Key};
    constructor(){
        super({key:CST.SCENES.PLAY})
    }

    preload(){

        this.anims.create({
            key:"left",
            frameRate:10,
            frames: this.anims.generateFrameNumbers("anna",{
                start: 9,
                end: 17
            })
        });
        this.anims.create({
            key:"down",
            frameRate:10,
            frames: this.anims.generateFrameNumbers("anna",{
                start: 18,
                end:26
            })
        });
        this.anims.create({
            key:"up",
            frameRate:10,
            frames: this.anims.generateFrameNumbers("anna",{
                start: 0,
                end: 8
            })
        });
        this.anims.create({
            key:"right",
            frameRate:10,
            frames: this.anims.generateFrameNumbers("anna",{
                start: 27,
                end: 35
            })
        });
        this.anims.create({
            key:"blaze",
            duration: 50,
            frames: this.anims.generateFrameNames("daze",{
                prefix: "fire0",
                suffix: ".png",
                end: 55
            }),
            showOnStart:true,
            hideOnComplete: true,
        });
        this.textures.addSpriteSheetFromAtlas("hooded",{frameHeight:64, frameWidth: 64, atlas: "characters", frame: "hooded"})
    }
    create(){
        let anna: Phaser.GameObjects.Sprite = this.add.sprite(400,400,"anna",26).setScale(2);
        let hooded: Phaser.GameObjects.Sprite = this.add.sprite(200,200, "hooded",26).setScale(2);
        window.hooded = this.hooded;
        window.anna = this.anna;

        this.keyboard = this.input.keyboard.addKeys("W, A, S, D");
    }

    update(time:number, delta: number){
        if(this.keyboard.D.isDown === true){
            this.anna.x = this.anna.x +  64 * (delta/1000);
            this.anna.play("right", true);
        }

        if(this.keyboard.A.isDown === true){
            this.anna.x += -64 * (delta/1000);
            this.anna.play("left",true);
        }
    }
}