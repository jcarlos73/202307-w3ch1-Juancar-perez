import { type CharacterData } from "../../types.js";
import { Character } from "../Character/Character.js";

export class Advisor extends Character {
  advises;

  constructor(characterData: CharacterData, advises: any) {
    super(characterData);

    if (advises instanceof Character) {
      this.advises = advises;
    }
  }

  communicate() {
    return `${super.communicate()}I have a funny feeling that I'm going to die`;
  }
}
