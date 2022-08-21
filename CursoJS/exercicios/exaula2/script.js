var agora = document.getElementById('hora')
        var hora = new Date()
        var hora = hora.getHours()
        var minutos = new Date()
        var minutos = minutos.getMinutes()
        var img = document.getElementById('img')
        
        agora.innerHTML = `Agora são ${hora} horas e ${minutos} minutos`

        
        var saudacao = document.getElementById('saudacao')
        var tempo = (saudacao.value)

        if(hora >= 5 && hora < 12){
            saudacao.innerHTML = 'Bom dia!'
        }else if(hora >= 12 && hora < 18){
            saudacao.innerHTML = 'Boa tarde!'
            img.scr = 'boatarde400x266.png' 
        }else{
            saudacao.innerHTML = 'Boa noite!'
}