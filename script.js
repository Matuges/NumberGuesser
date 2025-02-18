

// Menu de regras
    const botão = document.querySelector("button#rulesbtn")
    const modal = document.querySelector("dialog")
    const fechar = document.querySelector("button#closerules")
    function show() {
        modal.showModal()
    }

    fechar.onclick = function () {
        modal.close()
    }

// Menu
    const play = document.querySelector("button#play")
    function p() {
        window.location.href = "client.html"
    }

// Jogo
    
    let n = document.querySelector("input#numero")
    const start = document.querySelector("button#começar")
    const advinhar = document.querySelector("button#advinhar")
    const alerta = document.querySelector("p#alerta")
    let chances = document.getElementById("chances")
    let nchances = 8
    chances.innerHTML = nchances
    let number = ''
    function gerar() {
        number = Math.floor(Math.random() * 100) + 1
        console.log (number)
        alerta.innerHTML = ("Numero gerado!")
     }

    advinhar.onclick = function() {
        
        if (number != '') {
            if (n.value == number) {
                alerta.innerHTML = ("Você acertou!")
            } else if (n.value < 1 || n.value > 100 && number) {
                alerta.innerHTML = ("Insira um numero entre 1 e 100!")
            } else if (nchances > 0) { 
                    if (number > n.value) {
                       alerta.innerHTML = ("Muito baixo, tente novamente")
                    } else {
                        alerta.innerHTML = ("Muito alto, tente novamente")
                    }
                nchances --
                chances.innerHTML = nchances
                }  
        }  else if (number == '') {
            alerta.innerHTML = ("Gere um numero antes de tentar advinhar!")
            }
        for (c = nchances; c == 0 ; c=10){
            window.alert("Suas chances acabaram! Vamos gerar outro numero e recomeçar o jogo!")
            nchances = 8    
            chances.innerHTML = nchances
            gerar() 
     }
     n.value = ''
        n.focus()
    }
    

  