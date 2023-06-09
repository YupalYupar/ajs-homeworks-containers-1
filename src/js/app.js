export default class Character {
    constructor(type) {
        this.type = type;
    }
}

export class Team {
    constructor() {
        this.members = new Set();
    }

    add(member) {
        if (this.members.has(member)) {
            throw new Error('Повторное добавление персонажа не возможно');
        }
        this.members.add(member);
    }

    addAll(...members) {
        members.forEach((member) => {
            this.members.add(member);
        })
    }

    toArrey() {
        this.members = Array.from(this.members);
    }
}