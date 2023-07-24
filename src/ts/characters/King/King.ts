import { type CharacterData } from "../../types.js";
import { Character } from "../Character/Character.js";

export class King extends Character {
  yearsOfReign;

  constructor(characterData: CharacterData, yearsOfReign: number) {
    super(characterData);
    this.yearsOfReign = yearsOfReign;
  }

  communicate() {
    return `${super.communicate()}Everybody will die`;
  }
}
