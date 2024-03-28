

export class Jumble {
  constructor(data) {
    this.title = data.title
    this.difficulty = data.difficulty
    this.body = data.body
    this.start = data.start == undefined ? new Date() : new Date(data.start)
    this.stop = data.stop == undefined ? new Date() : new Date(data.stop)
    this.fastest = ''
  }


  get jumbleItemTemplate() {
    return `
  <div class="m-1">
            <button class="d-inline">Start</button>
            <span class="m-1 p-1">${this.title}</span>
            <span class="m-1 p-1">${this.fastest}</span>
            <span class="m-1 p-1">wpm</span>
          </div>
  
  `
  }










  // _____________________________________>>>>>>>>

}



