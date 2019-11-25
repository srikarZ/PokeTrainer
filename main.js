pokeList= [6,250,146,123,142,25]

queryPokeApi = (id)=>{
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

    }

  }

  srikar = new Trainer("Srikar")

  class Pokemon{
    constructor(data, abilities){
      this.name=data.name
      this.hp=data.stats[5].base_stat
      this.attack=data.stats[4].base_stat
      this.defense=data.stats[3].base_stat
      this.abilities= abilities
    }

  }
