const aluno01 = "lucas"
const nota01 = 3.7

const aluno02 = "andson"
const nota02 = 4.5

const aluno03 = "roberto"
const nota03 = 6.0

const aluno04 = "matheus"
const nota04 = 5.5

const aluno05 = "bela"
const nota05 = 4.7

const aluno06 = "thiago"
const nota06 = 3.7

const media = (nota01 + nota02 + nota03 + nota04 + nota05 + nota06) / 6;

if(media > 6) {
    console.log(`A media foi de ${media}. parabens`)
} else {
    console.log(`A media foi de ${media}. precisa-se melhorar`)
}