# Terv-ipc

Terv-ipc é uma ferramenta especialmente criada para o projeto Terv.js (https://github.com/paulo-leo/terv). Este pacote facilita a comunicação via IPC diretamente de sua aplicação ReactJS ou qualquer outra interface de usuário. O IPC é um conceito amplamente difundido em projetos com Electron, permitindo o acesso à lógica do aplicativo NodeJS em execução com Electron para uma integração mais sólida com o sistema operacional. 


## Para instalar o `Terv-ipc`, use o seguinte comando:

```bash
npm i terv-ipc

```

## Para importar o `Terv-ipc`, use o seguinte código dentro do seu projeto ReactJS entre outros:

```javascript
import ipc from 'terv-ipc';

```


## void close()
Fecha o aplicativo
```javascript
   
   ipc.close();
   
```

## void hide()
Esconde a janela do aplicativo e mantém ativo na barra de tarefas
```javascript
   
   ipc.close();
   
```

## void toggle()
Alternar entre minimizar e maximizar a janela do aplicativo
```javascript
   
  ipc.toggle();
   
```

## void event(string eventName)
Envia uma mensagem indicando que um evento ocorreu
```javascript
   
   ipc.event('user-send-data');
   
```

## async route(string className, string methodName, object request = {})
Defina uma rota para uma classe controladora localizada no diretório app/Controllers
```javascript
   
   await ipc.route('HelloWorld', 'print').then((response)=>{
    
	   console.log(response);
      
   });
   
   //Enviando dados na request
   
    let data = {
	   userId:10,
	   email:"pauloleo@teste22.com"
	};
	
    await ipc.route('HelloWorld', 'print',data).then((response)=>{
    
	   console.log(response);
      
   });
   
   
```

## ipc controller(string className)
Este método retorna uma instância da classe IPC, com a vantagem de permitir que você defina a classe controladora apenas uma vez e, posteriormente, chame os métodos dessa classe usando o método method(). O method() é semelhante ao método route(), com a distinção de que aceita até dois parâmetros: o primeiro é o nome do método que você deseja acessar e o segundo são os dados que você deseja enviar na solicitação, sendo este último opcional.
```javascript

   const myClass = ipc.controller('Hello');
   const myClass2 = ipc.controller('Hello2');
   
   await myClass.method('print').then((response)=>{
    
	   console.log(response);
      
   });
   
   await myClass2.method('write').then((response)=>{
    
	   console.log(response);
      
   });
   
   //Enviando dados na request
   
    let data = {
	   userId:10,
	   email:"pauloleo@teste22.com"
	};
	
    await myClass.method('print',data).then((response)=>{
    
	   console.log(response);
      
   });
   
   
```

## Controler de processos 
Confira abaixo um exemplo de código para a classe controladora, localizada no diretório /app/Controllers. Ao implementar sua classe, assegure-se de seguir uma estrutura similar ao código exemplificado abaixo em sua aplicação Terv.js (https://github.com/paulo-leo/terv). Lembre-se de que o nome da sua classe deve corresponder exatamente ao nome do arquivo, adotando o estilo camelCase. Importante ressaltar que não é permitido criar novas pastas dentro do diretório Controllers.
```javascript
export default class Hello {

    print(request) {
        // O parâmetro 'request' corresponde aos dados enviados pelo usuário.
        return "Hello World!!!";
    }

}
```

Vale lembrar que uma classe controladora oferece uma abordagem simplificada para criar um processo no Electron utilizando o modelo fornecido pelo Terv.js."

## Desenvolvido por: Paulo Leonardo da S. Cassimiro
