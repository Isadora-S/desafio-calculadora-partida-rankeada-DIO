function partida(vitoria, derrota) {
    let resultado = vitoria - derrota
    return resultado
 }
 
 function rank(){
    let resultado = partida(89, 30)
    let nivel =''
    if (resultado < 10) {
     nivel = 'ferro'
    } else if (resultado <= 20) {
     nivel = 'bronze'
    } else if (resultado <= 50) {
     nivel = 'prata'
    } else if (resultado <= 80 ) {
     nivel = 'ouro'
    } else if (resultado <= 90) {
     nivel = 'diamante'
    } else if (resultado <= 100) {
     nivel = 'lendário'
    } else if (resultado >= 101) {
     nivel = 'imortal'
    }
 
    return ('O herói tem um saldo de ' + resultado + ' e está no nível de ' + nivel)
 
}
    console.log(rank())