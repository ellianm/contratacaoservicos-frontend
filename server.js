const express = require('express');
const app = express();

const port = process.env.PORT || 8080;

app.use(express.static(__dirname + '/dist/ContratacaoServicosFrontend' ));


app.get('/*', (req,res) => {
    res.sendfile(__dirname + '/dist/ContratacaoServicosFrontend/index.html')
})

app.listen(port, () => {
    console.log('Servidor iniciado na porta ' + port);
})