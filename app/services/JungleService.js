import { AppState } from "../AppState.js";
import { Jumble } from "../models/Jungle.js";

class JungleService {
  createJumble(jumbleFormData) {
    console.log('Service creating jumble', jumbleFormData);
    const newJumble = new Jumble(jumbleFormData)
    AppState.jumbles.push(newJumble)
    console.log(AppState.jumbles);
  }


}

export const jungleService = new JungleService