let i
let camiseta = prompt("Ingrese si quiere la camiseta de Boca o de Argentina")

for(let i = 0; i <= 10; i++) {
    if((camiseta === "Boca") || (camiseta === "Argentina")){
        console.log(`La camiseta que usted eligio es de ${camiseta}`)
    } else {
            console.log("Ingresar Boca o Argentina, con sus respectivas mayusculas y minusculas.")
        }
}