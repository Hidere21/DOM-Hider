// DOM
// Document object Model
// modele de objeto de documento
// manipulacion de elemtons en HTML

// console.log("Hello Hider")


// validar usuario o email y contraseña al hacer login
let bd = [
  {
    email: "hider@hotmail.com",
    password: "contraseña1",
    username: "hider21",
    active: true,
  },
  {
    email: "erazo@hotmail.com",
    password: "contraseña2",
    username: "erazo21",
    active: true,
  },
  {
    email: "rosero@hotmail.com",
    password: "contraseña3",
    username: "rosero21",
    active: false,
  },
];

function login() {
  // para extraer informacion
  let = username = document.querySelector("#username").value;
  let = password = document.querySelector("#password").value;

  for (let i = 0; i < bd.length; i++) {
    if (username === bd[i].username || username === bd[i].email) {
      if (password === bd[i].password) {
        if(bd[i].active == true){
            return alert("Ha iniciado sesion correctamente");
        }else
            return alert("el usuario esta inactivo");
      } else {
        return alert("usuario o contraseña incorrectas");
      }
    }
  }
  return alert("usuario o contraseña incorrectas");
}

// console.log(username)
// console.log(password)

// let json = {
//     llave valor
// }

// let persona = {
//     nombre: "Hider",
//     apellido: "Rosero",
//     edad: 34,
//     id: 2,
//     tel: 1223
// }
// console.log(persona.name)

// }
