function Calculadora() {
    //O Input
    this.display = document.querySelector('.display');

    //o início
    this.inicia = () => {
        this.capturaCliques();
        this.capturaEnter();
    };



    //Captura1-Enter
    this.capturaEnter = () => {
        this.display.addEventListener('keyup', e => {
            if (e.keyCode !== 13) return;
            this.result();
        });
    };

    //Captura2-Clique
    this.capturaCliques = () => {
        document.addEventListener('click', event => {
            const el = event.target;

            if (el.classList.contains('btn-num')) this.addNumDisplay(el);
            if (el.classList.contains('btn-clear')) this.clearNumDisplay();
            if (el.classList.contains('btn-del')) this.del();
            if (el.classList.contains('btn-eq')) this.result();
        });
    };


    //Eventos1 -> Foco
    this.addNumDisplay = el => {
        this.display.value += el.innerText;
        this.display.focus();
    };

    //Eventos2 -> Limpa a tela
    this.clearNumDisplay = () => this.display.value = "";

    //Eventos3 -> Apagar
    this.del = () => this.display.value = this.display.value.slice(0, -1);

    //Eventos4 -> resultado
    this.result = () => {
        try {
            const conta = eval(this.display.value);
            if (!conta) {
                alert('Conta inválida');
                return
            }
            this.display.value = conta;
        } catch (e) {
            alert('Conta inválida');
            return;
        }
    };

}

//criei um objeto
const calculadora = new Calculadora();
calculadora.inicia();