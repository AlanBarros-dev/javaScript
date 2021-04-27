//let diasemana = 2

/*if(diasemana === 0){
    console.log(`hoje e Domingo`)
}else if(diasemana === 1){
    console.log(`hoje e segunda`)
}else if(diasemana === 2){
    console.log(`Hoje e terca`)
}else if(diasemana === 3){
    console.log(`Hoje e quarta`)
}else if (diasemana === 4){
    console.log(`Hoje e quinta`)
}else if (diasemana === 5){
    console.log(`Hoje e sexta`)
}else if(diasemana === 6){console.log(`Hoje e sabado`)
}*/

let diasemana = 2

let dia = ``

switch(diasemana){
    case 0:
        dia = `domingo`
        break
    case 1:
        dia = `segunda`
        break
    case 2:
        dia = `terca`
        break
    case 3:
        dia = `quarta`
        break    
    case 4:
        dia = `quinta`
        break
    case 5:
        dia = `sexta`
        break
    case 6:
        dia = `sabado`
        break
    default:
        dia = ` -- `    
}



console.log(`Hoje e ${dia}`)