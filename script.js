var data = new Date()
var horas = data.getHours()
document.getElementsByTagName("p")[0].innerText = `Agora são ${horas} horas.`

if (horas >= 6 && horas <= 17){
    if (horas >= 6 && horas <= 12) {
        document.getElementById('imagem').src = 'imgs/dia.jpg'                
    } else {
        document.getElementById('imagem').src = 'imgs/tarde.jpg'
        document.body.style.backgroundColor = '#F0E68C'
    }
} else {
    document.getElementById('imagem').src = 'imgs/noite.jpg'
    document.body.style.backgroundColor = '#696969'
    document.getElementsByTagName("h1")[0].style.color = "#fff"
    document.getElementsByTagName("p")[1].style.color = "#fff"
}  