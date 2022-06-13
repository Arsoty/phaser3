
// You can write more code here

/* START OF COMPILED CODE */

class Level1 extends Phaser.Scene {

	constructor() {
		super("Level1");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {
		this.cameras.main.fadeIn(500, 0, 0, 0)

		// room
		const room = this.add.image(402, 311, "room");
		room.scaleX = 1.45;
		room.scaleY = 1.35;
		room.tintTopLeft = 5723991;
		room.tintTopRight = 5723991;
		room.tintBottomLeft = 5723991;
		room.tintBottomRight = 5723991;

		// girl
		// const girl = this.add.image(422, 261, "girl");
		// girl.scaleX = 0.26;
		// girl.scaleY = 0.26;

		this.load.image('1girl', '1girl.png');
        this.load.image('2girl', '2girl.png');
        this.load.image('3girl', '3girl.png');

		this.anims.create({
            key: 'anim_gd',
            frames: [
                { key: '1girl' },
                { key: '2girl' },
                { key: '3girl' }
            ],
            frameRate: 15,
            repeat: 0
        });

        const sprite = this.add.sprite(420, 300, '1girl')
		sprite.setDepth(2)
		sprite.scaleX = 0.4
		sprite.scaleY = 0.4
		sprite.play('anim_gd');

		this.load.image('girl', 'girl.png');
        this.load.image('girl1', 'girl1.png');
        this.load.image('girl2', 'girl2.png');

		this.anims.create({
            key: 'anim_girl',
            frames: [
                { key: 'girl' },
                { key: 'girl1' },
                { key: 'girl2' }
            ],
            frameRate: 5,
            repeat: 0
        });

        const sprite1 = this.add.sprite(422, 261, 'girl')
		sprite1.scaleX = 0.26
		sprite1.scaleY = 0.26
		sprite1.play('anim_girl');


		this.events.emit("scene-awake");
	}

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();

		setTimeout(() => {
			this.cameras.main.fadeOut(500, 0, 0, 0)
			this.cameras.main.once(Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, (cam, effect) => {
			this.scene.start("Tutorial")
	})
			}, 1500)
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
