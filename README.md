// Fecha o aplicativo
ipc.close();

// Esconde a janela do aplicativo e mantém ativo na barra de tarefas
ipc.hide();

// Envia uma mensagem indicando que um evento ocorreu
ipc.event('nomeDoEvento');

// Alternar entre minimizar e maximizar a janela do aplicativo
ipc.toggle();

// Defina uma rota para uma classe controladora localizada no diretório app/Controllers
ipc.route('NomeDaClasse', 'meuMétodo', { /* objeto de solicitação opcional */ });

// Importe uma classe controladora e execute um método específico com o método method. Esta é uma função encadeada.
ipc.controller('MinhaClasse');

// Executa um método controlado a partir do método controller
ipc.method('meuMétodo', { /* objeto de solicitação opcional */ });

// OBS: os métodos route e method são assíncronos, ou seja, eles retornam uma promessa com a resposta do processamento.
