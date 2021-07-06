function carregar(){
    var mgs = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
  
    mgs.innerHTML = `Agora são ${hora} horas.`
    
    

    if (hora >= 0 && hora < 12){
        //BOM DIA!
        img.src = 'dia.png'
        document.body.style.background = '#aac5ee'
    } else if (hora >= 12 && hora <18){
        //BOA TARDE!
        img.src = 'tarde.png'
        document.body.style.background = '#df9426cc'
    } else {
        //BOA NOITE!
        img.src = 'noite.png'
        document.body.style.background = '#01093f9e'
    }
}