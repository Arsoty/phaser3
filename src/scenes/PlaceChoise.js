
// You can write more code here

/* START OF COMPILED CODE */

class PlaceChoise extends Phaser.Scene {

	constructor() {
		super("PlaceChoise");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	init(data) {

   		this.variant = data.choise;

	}

	/** @returns {void} */
	editorCreate() {
		this.cameras.main.fadeIn(500, 0, 0, 0)

		this.text = this.add.text(310, 30, "Choose your place", {fontFamily: "Nunito Sans", fontSize: "24px"})
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

		this.hotel = this.add.image(190, 460, "hotel");
		this.hotel.setDepth(3)

		this.beach = this.add.image(610, 460, "beach");
		this.beach.setDepth(3)

		this.hotel.scaleX = 0.60
		this.hotel.scaleY = 0.60

		this.beach.scaleX = 0.85
		this.beach.scaleY = 0.85

		if (this.variant === 1) {
			const girl = this.add.image(396, 308, "last3_glasses");
			girl.scaleX = 0.26;
			girl.scaleY = 0.26;

			this.hotel.setInteractive().on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {this.choise = 1})
			this.beach.setInteractive().on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {this.choise = 2})

			this.hotel.setDepth(3)
			this.beach.setDepth(3)

			this.look = "last3_glasses";
		} else if (this.variant === 2) {
			const girl = this.add.image(396, 308, "last3_choker");
			girl.scaleX = 0.26;
			girl.scaleY = 0.26;

			this.hotel.setInteractive().on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {this.choise = 3})
			this.beach.setInteractive().on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {this.choise = 4})

			this.look = "last3_choker";
		} else if (this.variant === 3) {
			const girl = this.add.image(396, 308, "last2_glasses");
			girl.scaleX = 0.26;
			girl.scaleY = 0.26;

			this.hotel.setInteractive().on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {this.choise = 5})
			this.beach.setInteractive().on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {this.choise = 6})

			this.look = "last2_glasses";
		} else if (this.variant === 4) {
			const girl = this.add.image(396, 308, "last2_choker");
			girl.scaleX = 0.26;
			girl.scaleY = 0.26;

			this.hotel.setInteractive().on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {this.choise = 7})
			this.beach.setInteractive().on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {this.choise = 8})

			this.look = "last2_choker";
		} else if (this.variant === 5) {
			const girl = this.add.image(396, 308, "last1_glasses");
			girl.scaleX = 0.26;
			girl.scaleY = 0.26;

			this.hotel.setInteractive().on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {this.choise = 9})
			this.beach.setInteractive().on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {this.choise = 10})

			this.look = "last1_glasses";
		} else if (this.variant === 6) {
			const girl = this.add.image(396, 308, "last1_gold_necklace");
			girl.scaleX = 0.26;
			girl.scaleY = 0.26;

			this.hotel.setInteractive().on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {this.choise = 11})
			this.beach.setInteractive().on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {this.choise = 12})

			this.look = "last1_gold_necklace";
		} else if (this.variant === 7) {
			const girl = this.add.image(396, 308, "last_glasses");
			girl.scaleX = 0.26;
			girl.scaleY = 0.26;

			this.hotel.setInteractive().on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {this.choise = 13})
			this.beach.setInteractive().on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {this.choise = 14})

			this.look = "last_glasses";
		} else if (this.variant === 8) {
			const girl = this.add.image(396, 308, "last_gold_necklace");
			girl.scaleX = 0.26;
			girl.scaleY = 0.26;

			this.hotel.setInteractive().on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {this.choise = 15})
			this.beach.setInteractive().on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {this.choise = 16})

			this.look = "last_gold_necklace";
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
			this.userPickPlace(this.choise)
		}
	}

	userPickPlace(variant) {
		this.hint1.destroy()
		this.hint2.destroy()
		this.text.destroy()
		this.beach.destroy()
		this.hotel.destroy()
		setTimeout(() => {this.scene.start(`Final`, {choise: variant, look: this.look})}, 1000)
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
