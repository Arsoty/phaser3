
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
		this.cameras.main.fadeIn(500, 0, 0, 0)

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
		this.room = this.add.image(402, 311, "room");
		this.room.scaleX = 1.45;
		this.room.scaleY = 1.35;
		this.room.tintTopLeft = 5723991;
		this.room.tintTopRight = 5723991;
		this.room.tintBottomLeft = 5723991;
		this.room.tintBottomRight = 5723991;

		// girl
		this.girl = this.add.image(396, 308, "girl");
		this.girl.scaleX = 0.26;
		this.girl.scaleY = 0.26;

		//dress_btn
		this.dress_btn = this.add.image(280, 460, "dress_btn");

		//skirt_btn
		this.skirt_btn = this.add.image(520, 460, "skirt_btn");

		this.dress_btn.setInteractive().on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {this.choise = 1})
		this.skirt_btn.setInteractive().on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {this.choise = 2})

		//hint_pointer
		this.hint_pointer = this.add.image(250, 520, "hint_pointer")
		this.hint_pointer.scaleX = 0.6;
		this.hint_pointer.scaleY = 0.6;

		this.choise = 0

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
		if (this.choise) {
			this.userPickDress(this.choise)
		}
	}

	userPickDress(variant) {
			this.room.tintTopLeft = 0xffffff;
			this.room.tintTopRight = 0xffffff;
			this.room.tintBottomLeft = 0xffffff;
			this.room.tintBottomRight = 0xffffff;
			this.hint_pointer.destroy()
			this.hint1.destroy()
			this.hint2.destroy()
			this.text.destroy()
			this.girl.destroy()
			this.skirt_btn.destroy()
			this.dress_btn.destroy()
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
            let y = Phaser.Math.Between(100, 500);

            const sprite = this.add.sprite(x, y, 'anima')
			sprite.scaleX = 0.05
			sprite.scaleY = 0.05
			sprite.setDepth(2)
            sprite.play('anim');
		}
			if (variant === 1) {
				this.girl = this.add.image(396, 308, "girl_dress")
				this.girl.scaleX = 0.26;
				this.girl.scaleY = 0.26;
			} else if(variant === 2) {
				this.girl = this.add.image(396, 308, "girl_skirt")
				this.girl.scaleX = 0.26;
				this.girl.scaleY = 0.26;
			}	
			this.hint_pointer.x = 100
			setTimeout(() => {this.scene.start(`Choise1`, {choise: variant})}, 1000)
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
		if (hintPointer.x >= 260 && hintPointer.x <= 450) {
			choise1.scaleX = 1.2
			choise1.scaleY = 1.2
		} else if (hintPointer.x >= 500 && hintPointer.x <= 720) {
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
