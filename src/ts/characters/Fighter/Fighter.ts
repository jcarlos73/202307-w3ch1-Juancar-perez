import { type CharacterData } from "../../types";
import { Character } from "../Character/Character";

export class Fighter extends Character {
  weapon;
  dexterity;

  constructor(characterData: CharacterData, weapon: string, dexterity: number) {
    super(characterData);
    this.weapon = weapon;
    this.dexterity = this.#filterDexterity(dexterity);
  }

  communicate() {
    return `${super.communicate()}First I hit and then I ask`;
  }

  #filterDexterity(dexterity: number) {
    if (dexterity < 0) {
      return 0;
    }

    if (dexterity > 10) {
      return 10;
    }

    return dexterity;
  }
}
