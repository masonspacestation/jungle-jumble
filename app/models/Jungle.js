import { generateId } from "../utils/GenerateId.js"

export class Jumble {
  constructor(data) {
    this.id = generateId()
    this.title = data.title
    this.difficulty = data.difficulty
    this.body = data.body
    this.fastest = Infinity
    this.start = null
    this.stop = null
    // this.start = data.start == undefined ? new Date() : new Date(data.start)
    // this.stop = data.stop == undefined ? new Date() : new Date(data.stop)
  }


  get jumbleItemTemplate() {
    return `
  
            <button class="btn border-dark w-75 m-1 p-2" onclick="app.JungleController.setActiveJumble('${this.id}')">${this.title}</button>
          
          `
    //   <span class="m-1 p-1">${this.fastest}</span>
    //   <span class="m-1 p-1">wpm</span></button>
    // </div>
  }

  // <div class="m-1">
  //           <button class="d-inline" onclick="app.JungleController.setActiveJumble()">Start</button>
  //           <span class="m-1 p-1">${this.title}</span>
  //           <span class="m-1 p-1">${this.fastest}</span>
  //           <span class="m-1 p-1">wpm</span>
  //         </div>

  get activeJumbleTemplate() {
    return `
    <div class="row justify-content-between">
        <div class="col-12 m-1">
          <span class=" my-2 text-start w-50">${this.title}</span>
          <span class=" my-2 text-end w-50">${this.fastest}</span>
  
          <p>${this.body}</p>
  
          <form onsubmit="app.JungleController.checkGame('${this.id}')">
          <input type="text-area" name="gameSubmit" id="gameSubmit" class="w-75"></input>
          <button type="submit">Submit</button>
          </form>
          </div>
        </div>
    `
  }











  // _____________________________________>>>>>>>>

}



