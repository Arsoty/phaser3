
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

		this.text = this.add.text(310, 30, "Choose your dress", {fontFamily: "Nunito Sans", fontSize: "24px"})
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

		//dress_btn
		this.dress_btn = this.add.image(190, 460, "dress_btn");

		//skirt_btn
		this.skirt_btn = this.add.image(610, 460, "skirt_btn");

		this.dress_btn.setInteractive().on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {console.log(1)})
		this.skirt_btn.setInteractive().on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {console.log(2)})

		//hint_pointer
		this.hint_pointer = this.add.image(250, 520, "hint_pointer")
		this.hint_pointer.scaleX = 0.6;
		this.hint_pointer.scaleY = 0.6;


		this.events.emit("scene-awake");
	}

	/* START-USER-CODE */

	// Write your code here
	create() {
		this.editorCreate();
	}

	update() {
		this.moveHintPointer(this.hint_pointer, 8)
		this.highlightChoise(this.hint_pointer, this.dress_btn, this.skirt_btn)
	}

	moveHintPointer(hintPointer, speed) {
		hintPointer.x += speed;
		if (hintPointer.x >= 680) {
			this.resetHintPointer(hintPointer)
		}
	};

	resetHintPointer(hintPointer) {
		hintPointer.x = 250;
	}
	
	highlightChoise(hintPointer, choise1, choise2) {
		if (hintPointer.x >= 255 && hintPointer.x <= 300) {
			choise1.scaleX = 1.2
			choise1.scaleY = 1.2
		} else if (hintPointer.x >= 620 && hintPointer.x <= 720) {
				choise2.scaleX = 1.2
				choise2.scaleY = 1.2
		} else {
				choise1.scaleX = 1
				choise1.scaleY = 1
				choise2.scaleX = 1
				choise2.scaleY = 1
		}
	}


	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
