const http = require('http');
 
const Server = http.createServer((req, res) => {
console.log(req.url, req.method);
 



//definindo o tipo de coonteúdo do cabeçalho
res.setHeader('Tipo-Conteudo', 'texto/simples');
 
//escrevendo a resposta
res.write('Ola Pessoal');
res.end();
 
});
 
Server.listen(3000, 'localhost', () => {
console.log("Ouvindo requisição na porta 3000")
});