import ColorManager from './colorManager';
import GameDifficulty from './gameDifficulty';

export default class MasterMindGame {
    constructor(difficulty) {
        switch (difficulty) {
            case GameDifficulty.EASY:
                this.colorManager = new ColorManager(difficulty);
                break;
            case GameDifficulty.MEDIUM:
                this.colorManager = new ColorManager(difficulty);
                break;
            case GameDifficulty.HARD:
                this.colorManager = new ColorManager(difficulty);
                break;
            default:
                throw new Error(`-- ${difficulty} -- is not a valid difficulty `);
        }

        this.secret = [];
        var i = 0;
        const size = 6;
        while (i < size) {
            this.secret.push(this.colorManager.random());
            i++;
        }
    }
}