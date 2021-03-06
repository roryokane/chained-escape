ChainedEscape.Preloader = function(game) {};
ChainedEscape.Preloader.prototype = (function() {
	
	function preload() {
		var loadInfoText = this.add.text(200, 300, "Loading...", {font: "48px Arial", fill: "#ffffff", align: "center"});
		var preloadBarBackground = this.add.sprite(100, 375, 'preload-bar-background');
		var preloadBarFill = this.add.sprite(100, 375, 'preload-bar-fill');
		this.load.setPreloadSprite(preloadBarFill);
		
		game.load.image('backgroundCountry', 'images/road-country.png');
		game.load.image('backgroundPrison', 'images/road-prison.png');
		game.load.image('backgroundHighway', 'images/road-highway.png');
		game.load.image('bike-1', 'images/biker_dude1.png');
		game.load.image('bike-2', 'images/biker_dude2.png');
		game.load.image('chain-link-1', 'images/chainLink1.png');
		game.load.image('chain-link-2', 'images/chainLink2.png');
		game.load.image('spikes', 'images/spikes2.png');
		game.load.image('barrier', 'images/roadBlock2.png');
		game.load.image('brokenBarrier', 'images/roadBlock2broken.png');
		game.load.image('pole', 'images/metalpole.png');
		game.load.image('police', 'images/police.png');
		game.load.image('bullet', 'images/bullet.png');
		game.load.image('start-game-button', 'images/start-game-button.png');
		game.load.image('instructions', 'images/instructions with old pole.png');
		game.load.image('instructions-button', 'images/instructions-button.png');
		game.load.image('instructions-back-button', 'images/instructions-back-button.png');
		game.load.image('opening-comic-1', 'images/ChainedEscapeComic_001.jpg');
		game.load.image('opening-comic-2', 'images/ChainedEscapeComic_002.jpg');
		game.load.image('opening-comic-3', 'images/ChainedEscapeComic_003.jpg');
		game.load.image('opening-comic-4', 'images/ChainedEscapeComic_004.jpg');
		
		game.load.audio('gunshot', 'sounds/Gun shot.mp3');
		game.load.audio('clink-1', 'sounds/clink-1.mp3');
		game.load.audio('clink-2', 'sounds/clink-2.mp3');
		game.load.audio('clink-3', 'sounds/clink-3.mp3');
		game.load.audio('player-hurt', 'sounds/player-hurt.mp3');
		game.load.audio('police-hurt', 'sounds/police-hurt.mp3');
		game.load.audio('cops-coming', 'sounds/Cops.mp3');
		game.load.audio('defeat', 'sounds/defeat.mp3');
		game.load.audio('victory', 'sounds/victory.mp3');
		game.load.audio('gameplay-start', 'sounds/gameplay music, before looping part.mp3');
		game.load.audio('gameplay-loop', 'sounds/gameplay music, looping part.mp3');
	}
	
	function create() {
		this.game.state.start('MainMenu');
	}
	
	return {
		preload: preload,
		create: create
	};
})();
