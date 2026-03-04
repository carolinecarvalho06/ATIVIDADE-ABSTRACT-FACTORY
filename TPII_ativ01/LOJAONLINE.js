// PRODUTOS ABSTRATOS - CARTAO DE CREDITO, BOLETO
class CartaoCredito {
    pagar() {
        throw new Error("pagar() deve ser implementado");
    }
}

class Boleto {
    pagar() {
        throw new Error("pagar() deve ser implementado");
    }
}

// PRODUTOS CONCRETOS - BANCO A
class CartaoCreditoBancoA extends CartaoCredito {
    pagar() {
        return "Pagamento com cartão de crédito do Banco A";
    }
}

class BoletoBancoA extends Boleto {
    pagar() {
        return "Pagamento com boleto do Banco A";
    }
}

// PRODUTOS CONCRETOS - BANCO B
class CartaoCreditoBancoB extends CartaoCredito {
    pagar() {
        return "Pagamento com cartão de crédito do Banco B";
    }
}

class BoletoBancoB extends Boleto {
    pagar() {
        return "Pagamento com boleto do Banco B";
    }
}

// FABRICA ABSTRATA
class FabricaPagamento {
    criarCartaoCredito() {
        throw new Error("criarCartaoCredito() deve ser implementado");
    }

    criarBoleto() {
        throw new Error("criarBoleto() deve ser implementado");
    }
}

// FABRICA CONCRETA - BANCO A
class FabricaBancoA extends FabricaPagamento {
    criarCartaoCredito() {
        return new CartaoCreditoBancoA();
    }

    criarBoleto() {
        return new BoletoBancoA();
    }
}

// FABRICA CONCRETA - BANCO B
class FabricaBancoB extends FabricaPagamento {
    criarCartaoCredito() {
        return new CartaoCreditoBancoB();
    }

    criarBoleto() {
        return new BoletoBancoB();
    }
}

// CLIENTE
function processarPagamento(fabrica) {
    const cartao = fabrica.criarCartaoCredito();
    const boleto = fabrica.criarBoleto();

    console.log(cartao.pagar());
    console.log(boleto.pagar());
}

// USO
processarPagamento(new FabricaBancoA());
console.log("----------------------------");
processarPagamento(new FabricaBancoB());
console.log("----------------------------");