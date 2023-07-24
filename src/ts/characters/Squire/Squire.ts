import { type CharacterData } from "../../types.js";
import { Character } from "../Character/Character.js";
import { Fighter } from "../Fighter/Fighter.js";

export class Squire extends Character {
  kissAssLevel: number;
  serves;

  constructor(characterData: CharacterData, kissAssLevel: number, serves: any) {
    super(characterData);
    this.kissAssLevel = this.#kissAssLevelFilter(kissAssLevel);

    if (serves instanceof Fighter) {
      this.serves = serves;
    }
  }

  communicate() {
    return `${super.communicate()}I'm a loser`;
  }

  #kissAssLevelFilter(kissAssLevel: number) {
    if (kissAssLevel < 0) {
      return 0;
    }

    if (kissAssLevel > 10) {
      return 10;
    }

    return kissAssLevel;
  }
}
