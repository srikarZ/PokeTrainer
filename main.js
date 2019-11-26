pokeList= [6,250,146,123,142,25]

function queryPokeApi(id){
  fetch(`https://fizal.me/pokeapi/api/v2/id/${id}.json`)
    .then((resp)=>{
      return resp.json()
    })
    .then(data => {
      console.log(data)

      abilitiesList=[]

      for(let i=0;i<data.abilities.length;i++){
        abilitiesList.push(data.abilities[i].ability.name)
      }
      pokeObject= new Pokemon(data, abilitiesList)
      srikar.pokemonList.push(pokeObject)
    })
  }

 for(let i=0;i<pokeList.length;i++){
    queryPokeApi(pokeList[i])
  }

  class Trainer{
    constructor(name){
      this.name= "Srikar"
      this.pokemonList=[]
    }
    all(){
      return this.pokemonList
    }

    get(name){
      return this.pokeObject
    }
  }

  srikar = new Trainer("Srikar")
  //srikar.all()  implementation in console
  //srikar.get()

  class Pokemon{
    constructor(data,abilities){
      this.name=name
      this.hp=data.stats[5].base_stat
      this.attack=data.stats[4].base_stat
      this.defense=data.stats[3].base_stat
      this.abilities= abilities
    }
  }

document.getElementById("pkmn1")
document.getElementById("pkmn2")
document.getElementById("pkmn3")
document.getElementById("pkmn4")
document.getElementById("pkmn5")
document.getElementById("pkmn6")

let charizard= queryPokeApi(6)
let ho-oh= queryPokeApi(250)
let moltres = queryPokeApi(146)
let scyther = queryPokeApi(123)
let aerodactyl = queryPokeApi(142)
let pikachu = queryPokeApi(25)

pkmn1.innerHTML=`hp: ${charizard.stats[5].base_stat}`
pkmn1.innerHTML=`attack: ${charizard.stats[4].base_stat}`
pkmn1.innerHTML=`hp: ${charizard.stats[3].base_stat}`
pkmn1.innerHTML=`hp: ${charizard.abilitiesList}`

pkmn2.innerHTML=`hp: ${ho-oh.stats[5].base_stat}`
pkmn2.innerHTML=`attack: ${ho-oh.stats[4].base_stat}`
pkmn2.innerHTML=`hp: ${ho-oh.stats[3].base_stat}`
pkmn2.innerHTML=`hp: ${ho-oh.abilitiesList}`

pkmn3.innerHTML=`hp: ${moltres.stats[5].base_stat}`
pkmn3.innerHTML=`attack: ${moltres.stats[4].base_stat}`
pkmn3.innerHTML=`hp: ${moltres.stats[3].base_stat}`
pkmn3.innerHTML=`hp: ${moltres.abilitiesList}`

pkmn4.innerHTML=`hp: ${scyther.stats[5].base_stat}`
pkmn4.innerHTML=`attack: ${scyther.stats[4].base_stat}`
pkmn4.innerHTML=`hp: ${scyther.stats[3].base_stat}`
pkmn4.innerHTML=`hp: ${scyther.abilitiesList}`

pkmn5.innerHTML=`hp: ${aerodactyl.stats[5].base_stat}`
pkmn5.innerHTML=`attack: ${aerodactyl.stats[4].base_stat}`
pkmn5.innerHTML=`hp: ${aerodactyl.stats[3].base_stat}`
pkmn5.innerHTML=`hp: ${aerodactyl.abilitiesList}`

pkmn6.innerHTML=`hp: ${pikachu.stats[5].base_stat}`
pkmn6.innerHTML=`attack: ${pikachu.stats[4].base_stat}`
pkmn6.innerHTML=`hp: ${pikachu.stats[3].base_stat}`
pkmn6.innerHTML=`hp: ${pikachu.abilitiesList}`
