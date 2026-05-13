import type { FlavorGraphData } from "../types"
import { ingredients } from "./ingredients"
import { flavors } from "./flavors"
import { techniques } from "./techniques"
import { glasses } from "./glasses"
import { edges } from "./edges"

export const data: FlavorGraphData = {
  ingredients,
  flavors,
  techniques,
  glasses,
  edges,
}

export { ingredients, flavors, techniques, glasses, edges }
