const productos = [
    {
    id: 1,
    nombre: "bulbasaur",
    tipo: "planta",
    img: "",
    },
    {
      id: 2,
      nombre: "ivysaur",
      tipo: "planta",
      img: "",
    },
    {
      id: 3,
      nombre: "venusaur",
      tipo: "planta",
      img: "",
    },
    {
      id: 4,
      nombre: "charmander",
      tipo: "fuego",
      img: "",
    },
    {
      id: 5,
      nombre: "charmeleon",
      tipo: "fuego",
      img: "",
    },
    {
      id: 6,
      nombre: "charizard",
      tipo: "fuego",
      img: "",
    },
    {
      id: 7,
      nombre: "squirtle",
      tipo: "agua",
      img: "",
    },
    {
      id: 8,
      nombre: "wartortle",
      tipo: "agua",
      img: "",
    },
    {
      id: 9,
      nombre: "blastoise",
      tipo: "agua",
      img: "",
    },
    {
      id: 10,
      nombre: "caterpie",
      tipo: "bicho",
      img: "",
    },
    {
      id: 11,
      nombre: "metapod",
      tipo: "bicho",
      img: "",
    },
    {
      id: 12,
      nombre: "butterfree",
      tipo: "bicho",
      img: "",
    },
  ]
  
  export const gFetch = (nro) => {
    return new Promise ( (res, rej) => {
      const condicion = true
      if (condicion){
          setTimeout(() => {
          res(productos)
          },2000)
        }else {
            rej('Nnv.')
          }
      })
  } 
  