// PRODUTOS ABSTRATOS - ROBO MONTADOR, ROBO INSPETOR
class RoboMontador {
    montar() {
        throw new Error("montar() deve ser implementado");
    }
}

class RoboInspetor {
    inspecionar() {
        throw new Error("inspecionar() deve ser implementado");
    }
}

// PRODUTOS CONCRETOS - AUTOMOTIVA
class RoboMontadorAutomotivo extends RoboMontador {
    montar() {
        return "O robô montador automotivo está montando um carro";
    }
}

class RoboInspetorAutomotivo extends RoboInspetor {
    inspecionar() {
        return "O robô inspetor automotivo está inspecionando peças automotivas";
    }
}

// PRODUTOS CONCRETOS - ELETRONICOS
class RoboMontadorEletronico extends RoboMontador {
    montar() {
        return "O robô montador eletrônico está montando um circuito";
    }
}

class RoboInspetorEletronico extends RoboInspetor {
    inspecionar() {
        return "O robô inspetor eletrônico está inspecionando chips";
    }
}

// FABRICA ABSTRATA
class FabricaRobo {
    criarRoboMontador() {
        throw new Error("criarRoboMontador() deve ser implementado");
    }

    criarRoboInspetor() {
        throw new Error("criarRoboInspetor() deve ser implementado");
    }
}

// FABRICA CONCRETA - AUTOMOTIVA
class FabricaAutomotiva extends FabricaRobo {
    criarRoboMontador() {
        return new RoboMontadorAutomotivo();
    }

    criarRoboInspetor() {
        return new RoboInspetorAutomotivo();
    }
}

// FABRICA CONCRETA - ELETRONICOS
class FabricaEletronicos extends FabricaRobo {
    criarRoboMontador() {
        return new RoboMontadorEletronico();
    }

    criarRoboInspetor() {
        return new RoboInspetorEletronico();
    }
}

// CLIENTE
function cliente(fabrica) {
    const roboMontador = fabrica.criarRoboMontador();
    const roboInspetor = fabrica.criarRoboInspetor();

    console.log(roboMontador.montar());
    console.log(roboInspetor.inspecionar());
}

// USO
cliente(new FabricaAutomotiva());
console.log("----------------------------");
cliente(new FabricaEletronicos());
console.log("----------------------------");