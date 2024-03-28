import { ExamplesController } from "./controllers/ExamplesController.js";
import { HomeController } from "./controllers/HomeController.js";
import { JungleController } from "./controllers/JungleController.js";
import { Router } from "./utils/Router.js";


export const router = new Router([
  {
    path: '',
    controllers: [HomeController, ExamplesController],
    view: /*html*/`
    
    `
  },
  {
    path: '#/Jungle',
    view: 'app/views/JungleView.html',
    controllers: [JungleController]
  }
])