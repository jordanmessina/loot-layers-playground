import "./styles.css";

import React, { useState } from 'react';

import mapping from './img/example1/mapping.json'
import layerOrder from './img/example1/layers.json'
import loot from './data/loot.js';
import parseName from './helpers/parseName.js';


export default function App() {
  const [bagNumber, setBagNumber] = useState(1);
  const [layerPack, setLayerPack] = useState("example1");

  let lootCharacter;
  if(bagNumber !== "") {
    let layers = {
      "fg": require(`./img/${layerPack}/character_imgs/fg.png`).default,
      "bg": require(`./img/${layerPack}/character_imgs/bg.png`).default,
      "weaponName": null,
      "weaponPrefix": null,
      "weaponSuffix": null,
      "weaponPlusOne": null,
      "chestName": null,
      "chestPrefix": null,
      "chestSuffix": null,
      "chestPlusOne": null,
      "headName": null,
      "headPrefix": null,
      "headSuffix": null,
      "headPlusOne": null,
      "waistName": null,
      "waistPrefix": null,
      "waistSuffix": null,
      "waistPlusOne": null,
      "footName": null,
      "footPrefix": null,
      "footSuffix": null,
      "footPlusOne": null,
      "handName": null,
      "handPrefix": null,
      "handSuffix": null,
      "handPlusOne": null,
      "neckName": null,
      "neckPrefix": null,
      "neckSuffix": null,
      "neckPlusOne": null,
      "ringName": null,
      "ringPrefix": null,
      "ringSuffix": null,
      "ringPlusOne": null,
    }

    // yikes
    let updateItem = (name, parsedName) => {
      // Main Item
      let filePath = mapping[name]["name"][parsedName.name];
      layers[`${name}Name`] = require(`./img/${layerPack}/character_imgs/${filePath}`).default;

      // Prefix
      if(parsedName.prefix) {
        filePath = mapping[name]["prefix"];
        layers[`${name}Prefix`] = require(`./img/${layerPack}/character_imgs/${filePath}`).default;
      }

      // Pluse One
      if(parsedName.plusOne) {
        filePath = mapping[name]["plus_one"];
        layers[`${name}PlusOne`] = require(`./img/${layerPack}/character_imgs/${filePath}`).default;
      }

      // Suffix
      if(parsedName.suffix) {
        filePath = mapping[name]["suffix"][parsedName.name][parsedName.suffix];
        layers[`${name}Suffix`] = require(`./img/${layerPack}/character_imgs/${filePath}`).default
      }
    }

    let lootBag = loot[bagNumber-1][String(bagNumber)];
    updateItem("weapon", parseName(lootBag.weapon));
    updateItem("chest", parseName(lootBag.chest));
    updateItem("head", parseName(lootBag.head));
    updateItem("waist", parseName(lootBag.waist));
    updateItem("foot", parseName(lootBag.foot));
    updateItem("hand", parseName(lootBag.hand));
    updateItem("neck", parseName(lootBag.neck));
    updateItem("ring", parseName(lootBag.ring));

    let layersImgs = []
    for(let i=0; i < layerOrder.length; i++) {
      if(layers[layerOrder[i]] !== null) {
        layersImgs.push(
          <img style={{height: "100%", position: "absolute", top: "0", "left": 0, zIndex: i}} className={`character-layer-${i+1}`} src={layers[layerOrder[i]]} alt="" />
        )
      }
    }

    lootCharacter = <div>{layersImgs}</div>

  } else {
    lootCharacter = <div></div>
  }

  return (
    <div className="App">
      <h1>Loot Layers Sandbox</h1>
      Bag # <input type="number" size="20" value={bagNumber} onChange={(event) => setBagNumber(event.target.value) } /> <button onClick={() => setBagNumber(Math.floor(Math.random() * 7800))}>Random</button><br />
      Layer Pack: 
      <select onChange={(event) => setLayerPack(event.target.value)} value={layerPack}>
        <option value="example1">Example 1</option>
        <option value="example2">Example 2</option>
        <option value="example3">Example 3</option>
      </select>
      <div style={{position: "relative", width: "500px", height: "500px", marginTop: "30px"}}>
        {lootCharacter}
      </div>
    </div>
  );
}
