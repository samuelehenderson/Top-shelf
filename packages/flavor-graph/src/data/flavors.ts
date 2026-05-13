import type { Flavor } from "../types"

export const flavors: Flavor[] = [
  // sweet
  { id: "f.honey", name: "honey", axis: "sweet" },
  { id: "f.caramel", name: "caramel", axis: "sweet" },
  { id: "f.vanilla", name: "vanilla", axis: "sweet" },
  { id: "f.maple", name: "maple", axis: "sweet" },
  { id: "f.toffee", name: "toffee", axis: "sweet" },
  { id: "f.brown-sugar", name: "brown sugar", axis: "sweet" },

  // bitter
  { id: "f.gentian", name: "gentian", axis: "bitter" },
  { id: "f.cinchona", name: "cinchona", axis: "bitter" },
  { id: "f.wormwood", name: "wormwood", axis: "bitter" },
  { id: "f.orange-peel", name: "orange peel", axis: "bitter" },
  { id: "f.rhubarb-bitter", name: "rhubarb bitterness", axis: "bitter" },
  { id: "f.coffee-bitter", name: "coffee bitterness", axis: "bitter" },

  // sour
  { id: "f.lemon", name: "lemon", axis: "sour" },
  { id: "f.lime", name: "lime", axis: "sour" },
  { id: "f.grapefruit", name: "grapefruit", axis: "sour" },
  { id: "f.tartaric", name: "tartaric acidity", axis: "sour" },
  { id: "f.malic", name: "green apple acidity", axis: "sour" },

  // salty
  { id: "f.brine", name: "brine", axis: "salty" },
  { id: "f.olive-brine", name: "olive brine", axis: "salty" },
  { id: "f.sea-salt", name: "sea salt", axis: "salty" },

  // umami
  { id: "f.savory", name: "savory", axis: "umami" },
  { id: "f.miso", name: "miso", axis: "umami" },

  // aromatic
  { id: "f.juniper", name: "juniper", axis: "aromatic" },
  { id: "f.anise", name: "anise", axis: "aromatic" },
  { id: "f.cardamom", name: "cardamom", axis: "aromatic" },
  { id: "f.clove", name: "clove", axis: "aromatic" },

  // smoke
  { id: "f.peat", name: "peat", axis: "smoke" },
  { id: "f.mezcal-smoke", name: "mesquite smoke", axis: "smoke" },
  { id: "f.charred-wood", name: "charred wood", axis: "smoke" },

  // spice
  { id: "f.black-pepper", name: "black pepper", axis: "spice" },
  { id: "f.cinnamon", name: "cinnamon", axis: "spice" },
  { id: "f.allspice", name: "allspice", axis: "spice" },
  { id: "f.ginger", name: "ginger", axis: "spice" },
  { id: "f.chili", name: "chili heat", axis: "spice" },
  { id: "f.nutmeg", name: "nutmeg", axis: "spice" },

  // earth
  { id: "f.earthy", name: "earthy", axis: "earth" },
  { id: "f.mineral", name: "mineral", axis: "earth" },
  { id: "f.iodine", name: "iodine", axis: "earth" },

  // fruit
  { id: "f.cherry", name: "cherry", axis: "fruit" },
  { id: "f.plum", name: "plum", axis: "fruit" },
  { id: "f.apple", name: "apple", axis: "fruit" },
  { id: "f.pear", name: "pear", axis: "fruit" },
  { id: "f.pineapple", name: "pineapple", axis: "fruit" },
  { id: "f.passion", name: "passion fruit", axis: "fruit" },
  { id: "f.strawberry", name: "strawberry", axis: "fruit" },
  { id: "f.raspberry", name: "raspberry", axis: "fruit" },
  { id: "f.fig", name: "fig", axis: "fruit" },
  { id: "f.banana", name: "banana", axis: "fruit" },
  { id: "f.coconut", name: "coconut", axis: "fruit" },

  // floral
  { id: "f.rose", name: "rose", axis: "floral" },
  { id: "f.elderflower", name: "elderflower", axis: "floral" },
  { id: "f.lavender", name: "lavender", axis: "floral" },
  { id: "f.violet", name: "violet", axis: "floral" },
  { id: "f.orange-blossom", name: "orange blossom", axis: "floral" },

  // herbal
  { id: "f.mint", name: "mint", axis: "herbal" },
  { id: "f.basil", name: "basil", axis: "herbal" },
  { id: "f.thyme", name: "thyme", axis: "herbal" },
  { id: "f.sage", name: "sage", axis: "herbal" },
  { id: "f.rosemary", name: "rosemary", axis: "herbal" },
  { id: "f.eucalyptus", name: "eucalyptus", axis: "herbal" },

  // wood
  { id: "f.oak", name: "oak", axis: "wood" },
  { id: "f.cedar", name: "cedar", axis: "wood" },
  { id: "f.toasted-oak", name: "toasted oak", axis: "wood" },
  { id: "f.sherry-cask", name: "sherry cask", axis: "wood" },

  // nut & cereal (often discussed alongside sweet/earth in spirits)
  { id: "f.almond", name: "almond", axis: "earth" },
  { id: "f.hazelnut", name: "hazelnut", axis: "earth" },
  { id: "f.malt", name: "malt", axis: "earth" },
  { id: "f.cereal", name: "cereal", axis: "earth" },

  // vegetal additions
  { id: "f.cucumber", name: "cucumber", axis: "herbal" },
  { id: "f.fennel", name: "fennel", axis: "aromatic" },
  { id: "f.lychee", name: "lychee", axis: "fruit" },
  { id: "f.pomegranate", name: "pomegranate", axis: "fruit" },
]
