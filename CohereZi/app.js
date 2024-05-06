const app = require('express')();
const express = require('express');
const serveur = require('http').createServer(app);
const toto = import('arabize');

app.get('/message', async (req, res) => {
    try {
        var { query } = req;
        const { arabize } = await toto;
        console.log((await toto));
        const result = await arabize(query.msg);
        console.log(result);
        res.send(result);
    } catch (err) {
        res.status(404).send({ code: 404, errors: [err.errors] });
    }
})

app.all('*', (req, res) => {
    res.status(404).send({ code: 404, errors: ['url non valide !'] });
});

serveur.listen(3000, () => {
    console.log('Node js ecoute au port 3000 ');
});