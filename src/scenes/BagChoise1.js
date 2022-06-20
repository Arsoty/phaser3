
// You can write more code here

/* START OF COMPILED CODE */

class BagChoise1 extends Phaser.Scene {

	constructor() {
		super("BagChoise1");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	init(data) {
		this.variant = data.choise
	}

	/** @returns {void} */
	editorCreate() {
		this.cameras.main.fadeIn(500, 0, 0, 0)

		this.text = this.add.text(290, 30, "Choose your accessory", {fontFamily: "Nunito Sans", fontSize: "24px"})
		this.text.setDepth(3)

		this.hint1 = this.add.graphics();
    	this.hint1.fillStyle(0x000000, 1);
   		this.hint1.fillRoundedRect(250, 20, 300, 50, 32);
		this.hint1.setDepth(2)

		this.hint2 = this.add.graphics();
    	this.hint2.lineGradientStyle(2, 0xFFBC43, 0xEE6A2F, 1);
   		this.hint2.strokeRoundedRect(250, 20, 300, 50, 25);
		this.hint2.setDepth(2)

			// room
		this.room = this.add.image(402, 311, "room");
		this.room.scaleX = 1.45;
		this.room.scaleY = 1.35;

		if (this.variant === 1) {

			// girl
		this.girl = this.add.image(396, 308, "Girl_bag4");
		this.girl.scaleX = 0.26;
		this.girl.scaleY = 0.26;

		this.glasses = this.add.image(280, 460, "glasses").setDepth(3);

		this.blue_necklace = this.add.image(520, 460, "blue_necklace").setDepth(3);

		this.glasses.scaleX = 0.65
		this.glasses.scaleY = 0.65

		this.blue_necklace.scaleX = 0.65
		this.blue_necklace.scaleY = 0.65

		this.glasses.setInteractive().on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {this.choise = 1})
		this.blue_necklace.setInteractive().on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {this.choise = 2})

		} else if(this.variant === 2) {
			// girl
		this.girl = this.add.image(396, 308, "Girl_bag3");
		this.girl.scaleX = 0.26;
		this.girl.scaleY = 0.26;

		this.glasses = this.add.image(280, 460, "glasses").setDepth(3);

		this.blue_necklace = this.add.image(520, 460, "blue_necklace").setDepth(3);

		this.glasses.scaleX = 0.65
		this.glasses.scaleY = 0.65

		this.blue_necklace.scaleX = 0.65
		this.blue_necklace.scaleY = 0.65

		this.glasses.setInteractive().on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {this.choise = 3})
		this.blue_necklace.setInteractive().on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {this.choise = 4})

		} else if(this.variant === 3) {

				// girl
		this.girl = this.add.image(396, 308, "Girl_bag2");
		this.girl.scaleX = 0.26;
		this.girl.scaleY = 0.26;

		this.glasses = this.add.image(280, 460, "glasses").setDepth(3);

		this.gold_necklace = this.add.image(520, 460, "gold_necklace").setDepth(3);

		this.glasses.scaleX = 0.65
		this.glasses.scaleY = 0.65

		this.gold_necklace.scaleX = 0.65
		this.gold_necklace.scaleY = 0.65

		this.glasses.setInteractive().on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {this.choise = 5})
		this.gold_necklace.setInteractive().on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {this.choise = 6})

		} else if(this.variant === 4) {
				// girl
		this.girl = this.add.image(396, 308, "Girl_bag1");
		this.girl.scaleX = 0.26;
		this.girl.scaleY = 0.26;


		this.glasses = this.add.image(280, 460, "glasses").setDepth(3);

		this.gold_necklace = this.add.image(520, 460, "gold_necklace").setDepth(3);

		this.glasses.scaleX = 0.65
		this.glasses.scaleY = 0.65

		this.gold_necklace.scaleX = 0.65
		this.gold_necklace.scaleY = 0.65

		this.glasses.setInteractive().on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {this.choise = 7})
		this.gold_necklace.setInteractive().on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {this.choise = 8})
		}

		this.events.emit("scene-awake");
	}

	// START-USER
	// Write your code here

	create() {

		this.editorCreate();
	}

	update() {
		if (this.choise) {
			this.userPickAccessories(this.choise)
		}
	}

	userPickAccessories(variant) {
		this.girl.destroy()

		this.hint1.destroy()
		this.hint2.destroy()
		this.text.destroy()
		this.glasses.destroy()
		if (this.variant <= 2) {
			this.blue_necklace.destroy()
		} else if(this.variant >= 3) {
			this.gold_necklace.destroy()
		}

			this.load.image('anima', 'anima.png');

			this.anims.create({
            key: 'anim',
            frames: [
                { key: 'anima' },
            ],
            frameRate: 120,
            repeat: -1,
			repeatDelay: 1000
       		});
			 for (let i = 0; i < 1; i++)
        {
            let x = Phaser.Math.Between(300, 500);
            let y = Phaser.Math.Between(100, 600);

            const sprite = this.add.sprite(x, y, 'anima')
			sprite.scaleX = 0.05
			sprite.scaleY = 0.05
			sprite.setDepth(2)
            sprite.play('anim');
		}

		if (variant === 1) {
			this.girl = this.add.image(396, 308, "last3_glasses");
			this.girl.scaleX = 0.26;
			this.girl.scaleY = 0.26;
		} else if (variant === 2) {
			this.girl = this.add.image(396, 308, "last3_choker");
			this.girl.scaleX = 0.26;
			this.girl.scaleY = 0.26;
		} else if (variant === 3) {
			this.girl = this.add.image(396, 308, "last2_glasses");
			this.girl.scaleX = 0.26;
			this.girl.scaleY = 0.26;
		} else if (variant === 4) {
			this.girl = this.add.image(396, 308, "last2_choker");
			this.girl.scaleX = 0.26;
			this.girl.scaleY = 0.26;
		} else if (variant === 5) {
			this.girl = this.add.image(396, 308, "last1_glasses");
			this.girl.scaleX = 0.26;
			this.girl.scaleY = 0.26;
		} else if (variant === 6) {
			this.girl = this.add.image(396, 308, "last1_gold_necklace");
			this.girl.scaleX = 0.26;
			this.girl.scaleY = 0.26;
		} else if (variant === 7) {
			this.girl = this.add.image(396, 308, "last_glasses");
			this.girl.scaleX = 0.26;
			this.girl.scaleY = 0.26;
		} else if (variant === 8) {
			this.girl = this.add.image(396, 308, "last_gold_necklace");
			this.girl.scaleX = 0.26;
			this.girl.scaleY = 0.26;
		}


		setTimeout(() => {this.scene.start(`PlaceChoise`, {choise: variant})}, 1000)
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
