
// You can write more code here

/* START OF COMPILED CODE */

class Final extends Phaser.Scene {

	constructor() {
		super("Final");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	init(data) {
		this.variant = data.choise

		this.look = data.look
	}

	/** @returns {void} */
	editorCreate() {
		this.cameras.main.fadeIn(500, 0, 0, 0)

		if(this.variant % 2 !== 0) {
				this.hotel = this.add.image(402, 311, "hotel");
				this.hotel.scaleX = 2.2;
				this.hotel.scaleY = 2.2;
			} else {
				this.beach = this.add.image(402, 311, "beach");
				this.beach.scaleX = 3;
				this.beach.scaleY = 2.4;
			}

		if(this.variant <= 8) {
			const girl = this.add.image(375, 308, this.look);
			girl.scaleX = 0.26;
			girl.scaleY = 0.26;
			girl.setDepth(3)

			this.man_default = this.add.image(411, 267, "man_default");
		this.man_default.scaleX = 0.7;
		this.man_default.scaleY = 0.7;
			this.man_default.setDepth(4);

			this.add.text(260, 270, "You are looking so beatiful!").setDepth(5).setColor("black").setFontSize(18)


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
            repeat: 0
       		 });

        	const sprite1 = this.add.sprite(475, 267, 'man')
			sprite1.scaleX = 0.4
			sprite1.scaleY = 0.4
			sprite1.flipX = true
			sprite1.play('anim_man');


		} else if(this.variant >= 9) {
			const girl = this.add.image(375, 308, this.look);
			girl.scaleX = 0.26;
			girl.scaleY = 0.26;
			girl.setDepth(3)

		this.man_default = this.add.image(411, 300, "man_default");
		this.man_default.scaleX = 0.7;
		this.man_default.scaleY = 0.7;
		this.man_default.setDepth(4);

		this.add.text(280, 300, "What a weird appereance!").setDepth(5).setColor("black").setFontSize(18)

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
            repeat: 0
       		 });

        	const sprite1 = this.add.sprite(475, 267, 'man')
			sprite1.scaleX = 0.4
			sprite1.scaleY = 0.4
			sprite1.flipX = true
			sprite1.play('anim_man');

		}

		this.events.emit("scene-awake");
	}

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();

		setTimeout(() => {this.gameFinished()}, 2500)
	}

	gameFinished() {
		this.btn = this.add.image(400, 500, "btn");
		this.btn.setDepth(4)

		this.btn.setInteractive().on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {this.openLink()})
	}

	openLink() {
		const url = 'https://apps.apple.com/us/app/id1491717191'

		console.log(222)

		let s = window.open(url, '_blank');

		if (s && s.focus)
		{
			s.focus();
		}
		else if (!s)
		{
			window.location.href = url;
		}
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
