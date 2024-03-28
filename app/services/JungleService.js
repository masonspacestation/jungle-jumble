import { AppState } from "../AppState.js";
import { Jumble } from "../models/Jungle.js";

class JungleService {
  gameStart() {
    AppState.activeJumble.start = new Date()
    console.log('game started');
  }

  gameStop() {
    AppState.activeJumble.stop = new Date()
    // console.log(, 'ended at', jumbleTitle.stop);
  }


  setActiveJumble(jumbleTitle) {
    const foundJumble = AppState.jumbles.find(jumble => jumble.title == jumbleTitle)
    AppState.activeJumble = foundJumble

    // console.log(AppState.activeJumble);


  }




  createJumble(jumbleFormData) {
    console.log('Service creating jumble', jumbleFormData);
    const newJumble = new Jumble(jumbleFormData)
    AppState.jumbles.push(newJumble)
    console.log(AppState.jumbles);
  }




}

export const jungleService = new JungleService