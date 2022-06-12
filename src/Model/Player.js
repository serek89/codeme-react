class Player {
    constructor (id, name) {
        this.id = id;
        this.name = name;
        this.wins = 0;
    }

    addWin() {
        this.wins += 1;
    }
}

export default Player;
