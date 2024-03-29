import { AppState } from "../AppState.js";
import { Jumble } from "../models/Jungle.js";

class JungleService {


  createJumble(jumbleFormData) {
    console.log('Service creating jumble', jumbleFormData);
    const newJumble = new Jumble(jumbleFormData)
    AppState.jumbles.push(newJumble)
    console.log(AppState.jumbles);
  }

  setActiveJumble(jumbleId) {
    const foundJumble = AppState.jumbles.find(jumble => jumble.id == jumbleId)
    foundJumble.start = new Date()
    AppState.activeJumble = foundJumble

    console.log('set active jumble service ', AppState.activeJumble);
  }


  checkGame(submittedJumble) {
    const activeJumble = AppState.activeJumble
    if (submittedJumble.gameSubmit != AppState.activeJumble.body) throw new console.error('incorrect response');
    activeJumble.stop = new Date()

    let elapsedTime = (activeJumble.stop - activeJumble.start)

    if (activeJumble.fastest > elapsedTime) {
      activeJumble.fastest = elapsedTime
    }

    AppState.emit('activeJumble')
    AppState.emit('jumble')


  }

  // gameStart() {
  //   AppState.activeJumble.start = new Date()
  //   console.log('game started');
  // }

  // gameStop() {
  //   AppState.activeJumble.stop = new Date()
  //   // console.log(, 'ended at', jumbleTitle.stop);
  // }


}

export const jungleService = new JungleService