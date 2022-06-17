
// You can write more code here

/* START OF COMPILED CODE */

class Level extends Phaser.Scene {

	constructor() {
		super("Level");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// room
		const room = this.add.image(401, 301, "room");
		room.scaleX = 1.45;
		room.scaleY = 1.35;
		room.tintTopLeft = 5723991;
		room.tintTopRight = 5723991;
		room.tintBottomLeft = 5723991;
		room.tintBottomRight = 5723991;

		// // man
		// const man = this.add.image(411, 267, "man");
		// man.scaleX = 0.4;
		// man.scaleY = 0.4;

		this.load.image('1boy', '1boy.png');
        this.load.image('2boy', '2boy.png');
        this.load.image('3boy', '3boy.png');

		this.anims.create({
            key: 'anim_bd',
            frames: [
                { key: '1boy' },
                { key: '2boy' },
                { key: '3boy' }
            ],
            frameRate: 15,
            repeat: 0
        });

        const sprite = this.add.sprite(400, 300, '1boy')
		sprite.scaleX = 0.6
		sprite.scaleY = 0.6
		sprite.setDepth(2)
		sprite.play('anim_bd');

		this.load.image('man', 'man.png');
        this.load.image('man1', 'man1.png');
        this.load.image('man2', 'man2.png');

		this.anims.create({
            key: 'anim_man',
            frames: [
                { key: 'man' },
                { key: 'man1' },
                { key: 'man2' }
            ],
            frameRate: 5,
            repeat: 0,
			repeatDelay: 200,
        });

        const sprite1 = this.add.sprite(411, 267, 'man')
		sprite1.scaleX = 0.4
		sprite1.scaleY = 0.4

		this.events.emit("scene-awake");
	}

	/* START-USER-CODE */

	// Write more your code here

	create() {
		this.editorCreate();

		setTimeout(() => {
			this.cameras.main.fadeOut(500, 0, 0, 0)
			this.cameras.main.once(Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, (cam, effect) => {
			this.scene.start("Level1")
	})
			}, 1500)
	}

	// dialogShowUp(man_dialog, start = 0, end = 1.4) {
	// 	for (let i = start; i >= end; i+=0.1) {
	// 		man_dialog.scaleX = i;
	// 		man_dialog.scaleY = i;
	// 	}
	// }

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
