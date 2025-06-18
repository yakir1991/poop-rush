import config from './config/config.js';
import GameScene from './scenes/game.js';
import BootScene from './scenes/boot.js';
import PreloaderScene from './scenes/preloader.js';
import TitleScene from './scenes/title.js';
import OptionsScene from './scenes/options.js';
import HelpScene from './scenes/help.js';
import Model from './model.js';
import { GameOverScene } from './scenes/gameOver.js';
import { ScoresScene } from './scenes/scores.js';

class Game extends Phaser.Game {
  constructor() {
    super(config);


    const model = new Model();
    this.globals = {
      model,
      bgMusic: null,
    };

    this.scene.add('Boot', BootScene);
    this.scene.add('Preloader', PreloaderScene);
    this.scene.add('Title', TitleScene);
    this.scene.add('Options', OptionsScene);
    this.scene.add('Help', HelpScene);
    this.scene.add('Game', GameScene);
    this.scene.add('GameOver', GameOverScene);
    this.scene.add('Scores', ScoresScene);

    this.scene.start('Boot');
  }
}

window.game = new Game();


window.addEventListener('resize', () => {
  game.scale.resize(window.innerWidth, window.innerHeight);
});
