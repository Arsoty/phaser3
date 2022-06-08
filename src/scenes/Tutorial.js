
// You can write more code here

/* START OF COMPILED CODE */

class Tutorial extends Phaser.Scene {

	constructor() {
		super("Tutorial");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// room
		const room = this.add.image(402, 311, "room");
		room.scaleX = 1.45;
		room.scaleY = 1.35;
		room.tintTopLeft = 5723991;
		room.tintTopRight = 5723991;
		room.tintBottomLeft = 5723991;
		room.tintBottomRight = 5723991;

		// girl
		const girl = this.add.image(396, 308, "girl");
		girl.scaleX = 0.26;
		girl.scaleY = 0.26;

		this.events.emit("scene-awake");
	}

	/* START-USER-CODE */

	// Write your code here

	create() {
		const graphics = this.add.graphics();

    	graphics.fillStyle(0x000000, 1);
		graphics.lineGradientStyle(2, 0xFFBC43, 0xEE6A2F, 1);

    	graphics.fillRoundedRect(240, 20, 300, 50, 20);
		graphics.strokeRoundedRect(240, 20, 300, 50, 20);

		const text = this.add.text(310, 30, 'Choose your dress', {font: "20px Nunito Sans", stroke: "#000000", strokeThickness: "6",});

		text.setDepth(2)
		graphics.setDepth(2)

		this.editorCreate();
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
