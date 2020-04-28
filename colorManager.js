class ColorManager {
    #difficulty = 'easy'
    #easyColors = [
        'red',
        'orange',
        'yellow',
        'green',
        'blue',
        'indigo',
        'violet'
    ];
    #mediumColors = [
        'black',
        'white',
        'brown'
    ];
    #hardColors = [
        'gray',
        'cyan',
        'olive'
    ];
    #colors = [];
    constructor(difficulty) {
        this.#difficulty = difficulty
        if (this.#difficulty == 'easy') {
            this.#colors = this.#easyColors;
        }
        else if (this.#difficulty == 'medium') {
            this.#colors = this.#easyColors.concat(this.#mediumColors);
        }
        else if (this.#difficulty == 'hard') {
            this.#colors = this.#easyColors.concat(this.#mediumColors, this.#hardColors);
        }
    }

    colors() {
        return this.#colors;
    }

    random() {
        return this.#colors[Math.floor(Math.random() * this.#colors.length)];
    }
}

export default ColorManager;