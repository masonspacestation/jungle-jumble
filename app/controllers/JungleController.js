import { AppState } from "../AppState.js";
import { Jumble } from "../models/Jungle.js";
import { setHTML } from "../utils/Writer.js";

export class JungleController {

  constructor() {
    console.log('JungleController is loaded');
    this.drawJumbleList()
  }


  drawJumbleList() {
    const jumbles = AppState.jumbles
    let jumbleContent = ''
    jumbles.forEach(jumble => jumbleContent += jumble.jumbleItemTemplate)
    setHTML('jumble-list', jumbleContent)
  }














}