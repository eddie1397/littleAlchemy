console.log('Little Alchemy Clone');

const createdElements = [];
const itemsLeft = ["Steam", "Stone", "Mud", 'Mist', 'Smoke', 'Dust', 'Metal', 'Land', 'Chimney', 'Clay', 'Brick', "Sand" ];

//Class for all the elements
class Element {
  constructor(name) {
    this.name = name;

  }

  combine(event){
    event.preventDefault()
    console.log(event.target.firstelement.value);
  }

  createNewElement(element){
    console.log(`Hello welcome to the world, ${element}`);

  }

}

// The instantiation of the main elements.
const water = new Element('Water');
const fire = new Element('Fire');
const earth = new Element('Earth');
const air = new Element('Air');

// DISPLAYS FOR THE NAVBAR
//Instructions
const instructions = document.querySelector('.hover_nav');
instructions.addEventListener("mouseover", () => {
  const instructionsText = document.querySelector('#instructions-text');
  instructionsText.style.opacity = "100%";

})
instructions.addEventListener("mouseleave", () => {
  const instructionsText = document.querySelector('#instructions-text');
  instructionsText.style.opacity = "0%";

})



//IDEAS
const ideas = document.querySelector('#ideas');
ideas.addEventListener("mouseover", () => {
  const ideaslist = document.querySelector('#ideaslist');
  ideaslist.style.opacity = '100%';
})
ideas.addEventListener("mouseleave", () => {
  const ideaslist = document.querySelector('#ideaslist');
  ideaslist.style.opacity = '0%';

})




//HINTS
const hints = document.querySelector('#hints');
hints.addEventListener("mouseover", () => {

  const oldItems = document.querySelectorAll('.hintItems');
  console.log(oldItems);
  for (let item of oldItems){
    item.remove();
  }
    itemsLeft.forEach((element, i) => {
      console.log(itemsLeft[i]);
        const listItem = document.createElement('li');
        listItem.innerText = itemsLeft[i];
        listItem.className = "hintItems"
        const hintUnorderedList = document.querySelector('#hintlist');
        hintUnorderedList.append(listItem);
        hintUnorderedList.style.opacity = "100%";
        console.log(hintUnorderedList);
  });
})

hints.addEventListener("mouseleave", () => {
  const hints = document.querySelector('#hintlist');
  hints.style.opacity = '0%';
})




const combine = (event) => {
  event.preventDefault()
  //console.log(event.target)
  // console.log(event.target.firstelement.value);
  // console.log(event.target.secondelement.value);

  //Water Combinations
  if (event.target.firstelement.value === "Water"){
    if (event.target.secondelement.value === "Fire") {
      console.log('Steam');

      // Test to place images on the screen then change them using the display through the DOM.
      // const steamElem = document.querySelector('#Steam');
      // steamElem.style.display = "inline-block"
      // const targetDom = document.querySelector("#created-elements");
      // const steamP = document.createElement('p');
      // targetDom.append(steamElem);
      alchemy('Steam')
      updateLists("Steam")
      // if (!createdElements.includes('Steam')) {
      //     createdElements.push('Steam')
      // }
      //
      // if (itemsLeft.includes("Steam")) {
      //   const index = itemsLeft.indexOf("Steam");
      //   itemsLeft.splice(index,1);
      //   console.log(itemsLeft);
      // }



      return new Element('Steam');


      //AT SOME POINT WE ARE GOING TO WANT TO PUT A PUSH HERE THAT WILL PUSH THE CREATED ELEMENT TO THE CURRENT
      // ELEMENTS TAB AND POPULATE AN IMAGE THERE REPRESENTING THE ELEMENT.
    }
    if (event.target.secondelement.value === "Earth") {
      console.log('Mud');
      // const mudElem = document.querySelector('#mud-image');
      // mudElem.style.display = "inline-block"
      // const targetDom = document.querySelector("#created-elements");
      // targetDom.append(mudElem);
      alchemy('Mud')
      updateLists("Mud")
      return new Element('Mud');
    }
    if (event.target.secondelement.value === "Air") {
      console.log('Mist');
      // const mistElem = document.querySelector('#mist-image');
      // mistElem.style.display = "inline-block"
      // const targetDom = document.querySelector("#created-elements");
      // targetDom.append(mistElem);
      alchemy('Mist')
      updateLists("Mist")
      return new Element('Mist');
      }

    //Should be the final comparison for each element
    if (event.target.secondelement.value === "Water") {
      alert(`You have already created a(n) ${event.target.secondelement.value} element!`);
    }
  }



  //Fire Combinations
  if (event.target.firstelement.value === "Fire"){
    if (event.target.secondelement.value === "Earth") {
      console.log('Stone');
      // const stoneElem = document.querySelector('#stone-image');
      // stoneElem.style.display = "inline-block"
      // const targetDom = document.querySelector("#created-elements");
      // targetDom.append(stoneElem);
      alchemy('Stone')
      updateLists("Stone")
      return new Element('Stone');
    }
    if (event.target.secondelement.value === "Air") {
      console.log('Smoke');
      // const smokeElem = document.querySelector('#smoke-image');
      // smokeElem.style.display = "inline-block"
      // const targetDom = document.querySelector("#created-elements");
      // targetDom.append(smokeElem);
      alchemy('Smoke')
      updateLists("Smoke")
      return new Element('Smoke');
    }
    if (event.target.secondelement.value === "Water") {
      console.log('Steam');
      // const steamElem = document.querySelector('#steam-image');
      // steamElem.style.display = "inline-block"
      // const targetDom = document.querySelector("#created-elements");
      // targetDom.append(steamElem);
      alchemy('Steam')
      updateLists("Steam")
      return new Element('Steam')

    }
    if (event.target.secondelement.value === "Stone") {
      console.log('Metal');
      // const metalElem = document.querySelector('#metal-image');
      // metalElem.style.display = "inline-block"
      // const targetDom = document.querySelector("#created-elements");
      // targetDom.append(metalElem);
      alchemy('Metal')
      updateLists("Metal")
      return new Element('Metal');

      //AT SOME POINT WE ARE GOING TO WANT TO PUT A PUSH HERE THAT WILL PUSH THE CREATED ELEMENT TO THE CURRENT
      // ELEMENTS TAB AND POPULATE AN IMAGE THERE REPRESENTING THE ELEMENT.
    }
    if (event.target.secondelement.value === "Mud") {
      console.log('Brick');
      // const brickElem = document.querySelector('#brick-image');
      // brickElem.style.display = "inline-block"
      // const targetDom = document.querySelector("#created-elements");
      // targetDom.append(brickElem);
      alchemy('Brick')
      updateLists("Brick")
      return new Element('Brick');
    }

    if (event.target.secondelement.value === "Clay") {
      console.log('Brick');
      // const brickElem = document.querySelector('#brick-image');
      // brickElem.style.display = "inline-block"
      // const targetDom = document.querySelector("#created-elements");
      // targetDom.append(brickElem);
      alchemy('Brick')
      updateLists("Brick")
      return new Element('Brick');
    }
    //Should be the final comparison for each element
    if (event.target.secondelement.value === "Fire") {
      console.log(`You have already created a(n) ${event.target.secondelement.value} element!`);
    }
  }




  //Earth Combinations
  if (event.target.firstelement.value === "Earth"){
    if (event.target.secondelement.value === "Fire") {
      console.log('Stone');
      // const stoneElem = document.querySelector('#stone-image');
      // stoneElem.style.display = "inline-block"
      // const targetDom = document.querySelector("#created-elements");
      // targetDom.append(stoneElem);
      alchemy('Stone')
      updateLists("Stone")
      return new Element('Stone');
    }
    if (event.target.secondelement.value === "Water") {
      console.log('Mud');
      // const mudElem = document.querySelector('#mud-image');
      // mudElem.style.display = "inline-block"
      // const targetDom = document.querySelector("#created-elements");
      // targetDom.append(mudElem);
      alchemy('Mud')
      updateLists("Mud")
      return new Element('Mud');
    }
    if (event.target.secondelement.value === "Stone") {
      console.log('Land');
      // const landElem = document.querySelector('#land-image');
      // landElem.style.display = "inline-block"
      // const targetDom = document.querySelector("#created-elements");
      // targetDom.append(landElem);
      alchemy('Land')
      updateLists("Land")
      return new Element('Land');
    }
    if (event.target.secondelement.value === "Air") {
      console.log('Dust');
      // const dustElem = document.querySelector('#dust-image');
      // dustElem.style.display = "inline-block"
      // const targetDom = document.querySelector("#created-elements");
      // targetDom.append(dustElem);
      alchemy('Dust')
      updateLists("Dust")
      return new Element('Dust');
    }
    //Should be the final comparison for each element
    if (event.target.secondelement.value === "Earth") {
      console.log(`You have already created a(n) ${event.target.secondelement.value} element!`);
    }
  }




  //AIR COMBINATIONS
  if (event.target.firstelement.value === "Air"){
    if (event.target.secondelement.value === "Fire") {
      // console.log('Smoke');
      // const smokeElem = document.querySelector('#smoke-image');
      // smokeElem.style.display = "inline-block"
      // const targetDom = document.querySelector("#created-elements");
      // targetDom.append(smokeElem);
      alchemy('Smoke')
      updateLists("Smoke")
      return new Element('Smoke');
    }
    if (event.target.secondelement.value === "Water") {
      console.log('Mist');
      // const mistElem = document.querySelector('#mist-image');
      // mistElem.style.display = "inline-block"
      // const targetDom = document.querySelector("#created-elements");
      // targetDom.append(mistElem);
      alchemy('Mist')
      updateLists("Mist")
      return new Element('Mist');
    }
    if (event.target.secondelement.value === "Earth") {
      console.log('Dust');
      // const dustElem = document.querySelector('#dust-image');
      // dustElem.style.display = "inline-block"
      // const targetDom = document.querySelector("#created-elements");
      // targetDom.append(dustElem);
      alchemy('Dust')
      updateLists("Dust")
      return new Element('Dust');
    }
    if (event.target.secondelement.value === "Stone") {
      console.log('Sand');
      // const sandElem = document.querySelector('#sand-image');
      // sandElem.style.display = "inline-block"
      // const targetDom = document.querySelector("#created-elements");
      // targetDom.append(sandElem);
      alchemy('Sand')
      updateLists("Sand")
      return new Element('Sand');
    }
    //Should be the final comparison for each element
    if (event.target.secondelement.value === "Air") {
      console.log(`You have already created a(n) ${event.target.secondelement.value} element!`);
    }
  }


  //STONE COMBINATIONS
  if (event.target.firstelement.value === "Stone"){
    if (event.target.secondelement.value === "Fire") {
      console.log('Metal');
      // const metalElem = document.querySelector('#metal-image');
      // metalElem.style.display = "inline-block"
      // const targetDom = document.querySelector("#created-elements");
      // targetDom.append(metalElem);
      alchemy('Metal')
      updateLists("Metal")
      return new Element('Metal');
    }
    if (event.target.secondelement.value === "Earth") {
      console.log('Land');
      // const landElem = document.querySelector('#land-image');
      // landElem.style.display = "inline-block"
      // const targetDom = document.querySelector("#created-elements");
      // targetDom.append(landElem);
      alchemy('Land')
      updateLists("Land")
      return new Element('Land');
    }
    if (event.target.secondelement.value === "Air") {
      console.log('Sand');
      // const sandElem = document.querySelector('#sand-image');
      // sandElem.style.display = "inline-block"
      // const targetDom = document.querySelector("#created-elements");
      // targetDom.append(sandElem);
      alchemy('Sand')
      updateLists("Sand")
      return new Element('Sand');
    }
    if (event.target.secondelement.value === "Smoke") {
      console.log('Chimney');
      // const chimneyElem = document.querySelector('#chimney-image');
      // chimneyElem.style.display = "inline-block"
      // const targetDom = document.querySelector("#created-elements");
      // targetDom.append(chimneyElem);
      alchemy('Chimney')
      updateLists("Chimney")
      return new Element('Chimney');
    }
    if (event.target.secondelement.value === "Mud") {
      console.log('Clay');
      // const clayElem = document.querySelector('#clay-image');
      // clayElem.style.display = "inline-block"
      // const targetDom = document.querySelector("#created-elements");
      // targetDom.append(clayElem);
      alchemy('Clay')
      updateLists("Clay")
      return new Element('Clay');
    }
    //Should be the final comparison for each element
    if (event.target.secondelement.value === "Stone") {
      console.log(`You have already created a(n) ${event.target.secondelement.value} element!`);
    }
  }


  //CLAY COMBINATIONS
  if (event.target.firstelement.value === "Clay"){
    if (event.target.secondelement.value === "Stone") {
      console.log('Brick');
      // const brickElem = document.querySelector('#brick-image');
      // brickElem.style.display = "inline-block"
      // const targetDom = document.querySelector("#created-elements");
      // targetDom.append(brickElem);
      alchemy('Brick')
      updateLists("Brick")
      return new Element('Brick');
    }
    if (event.target.secondelement.value === "Fire") {
      console.log('Brick');
      // const brickElem = document.querySelector('#brick-image');
      // brickElem.style.display = "inline-block"
      // const targetDom = document.querySelector("#created-elements");
      // targetDom.append(brickElem);
      alchemy('Brick')
      updateLists("Brick")
      return new Element('Brick');
    }
  }


  //SMOKE COMBINATIONS
  if (event.target.firstelement.value === "Smoke"){
    if (event.target.secondelement.value === "Stone") {
      console.log('Chimney');
      // const chimneyElem = document.querySelector('#chimney-image');
      // chimneyElem.style.display = "inline-block"
      // const targetDom = document.querySelector("#created-elements");
      // targetDom.append(chimneyElem);
      alchemy('Chimney')
      updateLists("Chimney")
      return new Element('Chimney');
    }
  }


  //MUD COMBINATIONS
  if (event.target.firstelement.value === "Mud"){
    if (event.target.secondelement.value === "Stone") {
      console.log('Clay');
      // const clayElem = document.querySelector('#clay-image');
      // clayElem.style.display = "inline-block"
      // const targetDom = document.querySelector("#created-elements");
      // targetDom.append(clayElem);
      alchemy('Clay')
      updateLists("Clay")
      return new Element('Clay');
    }
    if (event.target.secondelement.value === "Fire") {
      console.log('Brick');
      // const brickElem = document.querySelector('#brick-image');
      // brickElem.style.display = "inline-block"
      // const targetDom = document.querySelector("#created-elements");
      // targetDom.append(brickElem);
      alchemy('Brick')
      updateLists("Brick")
      return new Element('Brick');
    }
  }

}


function updateLists(element_str){
  if (!createdElements.includes(element_str)) {
      createdElements.push(element_str)
  }

  if (itemsLeft.includes(element_str)) {
    const index = itemsLeft.indexOf(element_str);
    itemsLeft.splice(index,1);
    console.log(itemsLeft);
  }
}



function alchemy(elementName) {
  const elem = document.querySelector(`#${elementName}`);
  elem.style.display = "inline-block"
  const targetDom = document.querySelector("#created-elements");
  targetDom.append(elem);

}
