class Language {
  constructor(name) {
    this.name = name;
  }

  setName(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }
}

module.exports = new Language('JavaScript');
