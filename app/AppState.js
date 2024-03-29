import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'
import { Jumble } from "./models/Jungle.js"


class ObservableAppState extends EventEmitter {


  jumbles = [
    new Jumble({
      title: 'KPI Jumble',
      difficulty: 'easy',
      body: "Marginalised key performance indicators draw a line in the sand optics, so but what's the real problem we're trying to solve here?, and high-level. Baseline the procedure and samepage your department.",
      fastest: 35,
    }),
    new Jumble({
      title: 'Empty Talk Jumble',
      difficulty: 'easy',
      body: "Cross pollination across our domains we want to empower the team with the right tools and guidance to uplevel our craft and build better, yet we just need to put these last issues to bed.",
      fastest: 35,
    }),
    new Jumble({
      title: 'Impact Jumble',
      difficulty: 'easy',
      body: "Business impact. Peel the onion can you slack it to me?, and rehydrate the team. This is not the hill i want to die on circle back around customer centric.",
      fastest: 35,
    }),
  ]



  /**
   * @type {Jumble}
   */
  activeJumble = null

  submittedJumble = null

}

export const AppState = createObservableProxy(new ObservableAppState())