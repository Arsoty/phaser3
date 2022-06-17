
// You can write more code here

/* START OF COMPILED CODE */

class Choise1 extends Phaser.Scene {

	constructor() {
		super("Choise1");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	init(data) {
		this.variant = data.choise
	}

	/** @returns {void} */
	editorCreate() {

		this.text = this.add.text(310, 30, "Choose your bag", {fontFamily: "Nunito Sans", fontSize: "24px"})
		this.text.setDepth(3)

		this.hint1 = this.add.graphics();
    	this.hint1.fillStyle(0x000000, 1);
   		this.hint1.fillRoundedRect(250, 20, 300, 50, 32);
		this.hint1.setDepth(2)

		this.hint2 = this.add.graphics();
    	this.hint2.lineGradientStyle(2, 0xFFBC43, 0xEE6A2F, 1);
   		this.hint2.strokeRoundedRect(250, 20, 300, 50, 25);
		this.hint2.setDepth(2)

		this.cameras.main.fadeIn(500, 0, 0, 0)
		// room
		this.room = this.add.image(402, 311, "room");
		this.room.scaleX = 1.45;
		this.room.scaleY = 1.35;
		this.room.tintTopLeft = 0xffffff;
			this.room.tintTopRight = 0xffffff;
			this.room.tintBottomLeft = 0xffffff;
			this.room.tintBottomRight = 0xffffff;

			//bag1
		this.bag1 = this.add.image(190, 460, "bag1");
		this.bag1.scaleX = 1.25
		this.bag1.scaleY = 1.25

		//bag2
		this.bag2 = this.add.image(610, 460, "bag2");
		this.bag2.scaleX = 0.8
		this.bag2.scaleY = 0.8

			if (this.variant === 1) {
				// girl
				this.girl = this.add.image(396, 308, "girl_dress");
				this.girl.scaleX = 0.26;
				this.girl.scaleY = 0.26;
				this.bag1.setInteractive().on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {this.choise = 1})
				this.bag2.setInteractive().on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {this.choise = 2})
			} else if(this.variant === 2) {
				// girl
				this.girl = this.add.image(396, 308, "girl_skirt");
				this.girl.scaleX = 0.26;
				this.girl.scaleY = 0.26;
				this.bag1.setInteractive().on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {this.choise = 3})
				this.bag2.setInteractive().on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {this.choise = 4})
			}

		this.events.emit("scene-awake");
	}

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();
	}

	update() {
		if (this.choise) {
			this.userPickBag(this.choise)
		}
	}

	userPickBag(variant) {
		this.girl.destroy()

		this.hint1.destroy()
		this.hint2.destroy()
		this.text.destroy()
		this.bag1.destroy()
		this.bag2.destroy()

		if (variant === 1) {
			this.girl = this.add.image(396, 308, "Girl_bag4");
			this.girl.scaleX = 0.26;
			this.girl.scaleY = 0.26;
		} else if(variant === 2) {
			this.girl = this.add.image(396, 308, "Girl_bag3");
			this.girl.scaleX = 0.26;
			this.girl.scaleY = 0.26;
		} else if(variant === 3) {
			this.girl = this.add.image(396, 308, "Girl_bag2");
			this.girl.scaleX = 0.26;
			this.girl.scaleY = 0.26;
		} else if(variant === 4) {
			this.girl = this.add.image(396, 308, "Girl_bag1");
			this.girl.scaleX = 0.26;
			this.girl.scaleY = 0.26;
		}

			setTimeout(() => {this.scene.start(`BagChoise1`, {choise: variant})}, 1000)
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
