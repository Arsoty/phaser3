
window.addEventListener('load', function () {

	var game = new Phaser.Game({
		width: 800,
		height: 600,
		type: Phaser.AUTO,
        backgroundColor: "#242424",
		physics: {
        	default: 'arcade',
        	arcade: { debug: true }
    	},
		scale: {
			mode: Phaser.Scale.FIT,
			autoCenter: Phaser.Scale.CENTER_BOTH
		}
	});
	
	game.scene.add("Preload", Preload);
	game.scene.add("Level", Level);
	game.scene.add("Level1", Level1);
	game.scene.add("Tutorial", Tutorial);
	game.scene.add("Choise1", Choise1);
	game.scene.add("BagChoise1", BagChoise1)
	game.scene.add("PlaceChoise", PlaceChoise)
	game.scene.add("Final", Final)
	game.scene.add("Boot", Boot, true);
});

class Boot extends Phaser.Scene {

	preload() {
		
		this.load.pack("pack", "assets/preload-asset-pack.json");

		this.load.on(Phaser.Loader.Events.COMPLETE, () => this.scene.start("Preload"));
	}
}