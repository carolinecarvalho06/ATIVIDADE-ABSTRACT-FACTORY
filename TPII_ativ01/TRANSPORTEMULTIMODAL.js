// PRODUTOS ABSTRATOS - CARRO, ONIBUS, HELICOPTERO, AVIAO
class Carro {
    transportar() {
        throw new Error("transportar() deve ser implementado");
    }
}

class Onibus {
    transportar() {
        throw new Error("transportar() deve ser implementado");
    }
}

class Helicoptero {
    transportar() {
        throw new Error("transportar() deve ser implementado");
    }
}

class Aviao {
    transportar() {
        throw new Error("transportar() deve ser implementado");
    }
}

// PRODUTOS CONCRETOS - TERRESTRE
class CarroTerrestre extends Carro {
    transportar() {
        return "O carro está andando"
    }
}

class OnibusTerrestre extends Onibus {
    transportar() {
        return "O onibus está andando"
    }
}

// PRODUTOS CONCRETOS - AEREO
class HelicopteroAereo extends Helicoptero {
    transportar() {
        return "O helicoptero está voando"
    }
}

class AviaoAereo extends Aviao {
    transportar() {
        return "O avião está voando"
    }
}

// FABRICA ABSTRATA
class FabricaTransporte {
    criarTerrestre() {
        throw new Error("criarTerrestre() deve ser implementado");
    }

    criarAereo() {
        throw new Error("criarAereo() deve ser implementado");
    }
}

// FABRICA CONCRETA - TERRESTRE
class FabricaTerrestre extends FabricaTransporte {
    criarTerrestre() {
        return new CarroTerrestre();
    }

    criarAereo() {
        return new OnibusTerrestre();
    }
}

// FABRICA CONCRETA - AEREO
class FabricaAereo extends FabricaTransporte {
    criarTerrestre() {
        return new HelicopteroAereo();
    }

    criarAereo() {
        return new AviaoAereo();
    }
}

// CLIENTE
function cliente(fabrica) {
    const transporteTerrestre = fabrica.criarTerrestre();
    const transporteAereo = fabrica.criarAereo();

    console.log(transporteTerrestre.transportar());
    console.log(transporteAereo.transportar());
}

// USO
cliente(new FabricaTerrestre());
console.log("----------------------------");
cliente(new FabricaAereo());
console.log("============================");