let n1 = parseFloat(prompt('digite sua primeira nota'))
    let n2 = parseFloat(prompt('digite sua segunda nota'))
        let n3 = parseFloat(prompt('digite sua terceira nota'))
let n4 = parseFloat(prompt('digite sua quarta nota'))
    let n5 = parseFloat(prompt('digite sua quinta nota'))
        let n6 = parseFloat(prompt('digite sua sexta nota'))

const media = (n1 + n2 + n3 + n4 + n5 + n6) / 6
if(media > 6) {
    alert(`A media foi de ${media}. parabens`)
} else {
    alert(`A media foi de ${media}. precisa-se melhorar`);
}