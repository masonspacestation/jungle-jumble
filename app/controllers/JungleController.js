import { AppState } from "../AppState.js";
import { Jumble } from "../models/Jungle.js";
import { jungleService } from "../services/JungleService.js";
import { getFormData } from "../utils/FormHandler.js";
import { setHTML } from "../utils/Writer.js";

export class JungleController {

  constructor() {
    console.log('JungleController is loaded');
    AppState.on('jumbles', this.drawJumbleList)
    AppState.on('activeJumble', this.drawActiveJumble)
    this.drawJumbleList()
  }


  drawJumbleList() {
    const jumbles = AppState.jumbles
    let jumbleContent = ''
    jumbles.forEach(jumble => jumbleContent += jumble.jumbleItemTemplate)
    setHTML('jumble-list', jumbleContent)
  }


  drawActiveJumble() {
    const jumble = AppState.activeJumble

    if (jumble == null) {
      setHTML('active-jumble', '')

    } else {
      setHTML('active-jumble', AppState.activeJumble.activeJumbleTemplate)
    }

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

  setActiveJumble(jumbleTitle) {
    jungleService.setActiveJumble(jumbleTitle)
    jungleService.gameStart()

  }


  checkGame() {

    try {
      event.preventDefault()
      console.log('checking submission')
      const gameSubmit = event.target
      const submitData = getFormData(gameSubmit)
      console.log('submitted', submitData)


      submitData.gameSubmit == AppState.activeJumble.body ? console.log('woop') : console.log('lose');

    } catch {
      console.error('[SUBMIT BROKEN]');
    }
  }







}