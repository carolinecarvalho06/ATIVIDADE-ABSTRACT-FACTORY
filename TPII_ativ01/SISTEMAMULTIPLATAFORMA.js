// PRODUTOS ABSTRATOS - BOTAO, JANELA
class Botao {
    renderizar() {
        throw new Error("renderizar() deve ser implementado");
    }
}

class Janela {
    renderizar() {
        throw new Error("renderizar() deve ser implementado");
    }
}

// PRODUTOS CONCRETOS - WINDOWS
class BotaoWindows extends Botao {
    renderizar() {
        return "Botão no estilo Windows";
    }
}

class JanelaWindows extends Janela {
    renderizar() {
        return "Janela no estilo Windows";
    }
}

// PRODUTOS CONCRETOS - MAC
class BotaoMac extends Botao {
    renderizar() {
        return "Botão no estilo Mac";
    }
}

class JanelaMac extends Janela {
    renderizar() {
        return "Janela no estilo Mac";
    }
}

// PRODUTOS CONCRETOS - LINUX
class BotaoLinux extends Botao {
    renderizar() {
        return "Botão no estilo Linux";
    }
}

class JanelaLinux extends Janela {
    renderizar() {
        return "Janela no estilo Linux";
    }
}

// FABRICA ABSTRATA
class FabricaGUI {
    criarBotao() {
        throw new Error("criarBotao() deve ser implementado");
    }

    criarJanela() {
        throw new Error("criarJanela() deve ser implementado");
    }
}

// FABRICA CONCRETA - WINDOWS
class FabricaWindows extends FabricaGUI {
    criarBotao() {
        return new BotaoWindows();
    }

    criarJanela() {
        return new JanelaWindows();
    }
}

// FABRICA CONCRETA - MAC
class FabricaMac extends FabricaGUI {
    criarBotao() {
        return new BotaoMac();
    }

    criarJanela() {
        return new JanelaMac();
    }
}

// FABRICA CONCRETA - LINUX
class FabricaLinux extends FabricaGUI {
    criarBotao() {
        return new BotaoLinux();
    }

    criarJanela() {
        return new JanelaLinux();
    }
}

// CLIENTE
function criarInterfaceGrafica(fabrica) {
    const botao = fabrica.criarBotao();
    const janela = fabrica.criarJanela();

    console.log(botao.renderizar());
    console.log(janela.renderizar());
}

// USO
criarInterfaceGrafica(new FabricaWindows());
console.log("----------------------------");
criarInterfaceGrafica(new FabricaMac());
console.log("----------------------------");
criarInterfaceGrafica(new FabricaLinux());
console.log("----------------------------");