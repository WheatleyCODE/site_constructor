
import { Sidebar } from "./sideBar"
import { Site } from "./site"

export class App {
  constructor(model) {
    this.model = model
  }

  itit() {
    const site = new Site('#site')
  
    site.render(this.model)
    this.model = []
    new Sidebar('#panel', newBlock => {
      this.model.push(newBlock)
      site.render(this.model)
    })
  }
}
