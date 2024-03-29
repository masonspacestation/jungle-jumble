import { AppState } from "../AppState.js";
import { Jumble } from "../models/Jungle.js";
import { jungleService } from "../services/JungleService.js";
import { getFormData } from "../utils/FormHandler.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";


function _focusCursorToGameArea() {
  document.getElementById('gameSubmit').focus()
}


export class JungleController {

  constructor() {
    console.log('JungleController is loaded');
    AppState.on('jumbles', this.drawJumbleList)
    AppState.on('activeJumble', this.drawActiveJumble)
    this.drawJumbleList()
  }

  createJumble() {
    try {
      event.preventDefault()
      console.log('creating jumble')
      const form = event.target
      const jumbleFormData = getFormData(form)
      jungleService.createJumble(jumbleFormData)
    } catch {
      console.error('[JUMBLE CREATE BAD]');
    }
  }

  drawJumbleList() {
    const jumbles = AppState.jumbles
    let jumbleContent = ''
    jumbles.forEach(jumble => jumbleContent += jumble.jumbleItemTemplate)
    setHTML('jumble-list', jumbleContent)
  }


  setActiveJumble(jumbleId) {
    console.log('controller set active', jumbleId);
    jungleService.setActiveJumble(jumbleId)
    // jungleService.gameStart()

  }


  drawActiveJumble() {
    const jumble = AppState.activeJumble
    setHTML('active-jumble', AppState.activeJumble.activeJumbleTemplate)
    _focusCursorToGameArea()
    // if (jumble == null) {
    //   setHTML('active-jumble', '')

    // } else {
    //   setHTML('active-jumble', AppState.activeJumble.activeJumbleTemplate)
    // }

  }




  checkGame() {
    try {
      event.preventDefault()
      console.log('checking submission')
      const form = event.target
      const submittedJumble = getFormData(form)
      console.log('submitted', submittedJumble)
      jungleService.checkGame(submittedJumble)
      Pop.toast('You Win!', 'success', 'center')
    } catch {
      Pop.toast('You Got Jumbled!', 'error', 'center')

    }
  }







}