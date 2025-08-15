import { listarPizza, inserirPizza, filtraPorNome, consultarPizza, atualizarPizza, removerPizza} from './todos/pizzaRepository.js';
import { listarCarro, inserirCarro, filtrarCarroPorNome, consultarCarro, atualizarCarro, removerCarro } from './todos/carroRepository.js';
import { listarLivro, inserirLivro, filtrarLivroPorNome, consultarLivro, atualizarLivro, removerLivro } from './todos/livroRepository.js';
import { listarAnime, inserirAnime, filtrarAnimePorNome, consultarAnime, atualizarAnime, removerAnime } from './todos/animeRepository.js';
import { listarMoto, inserirMoto, filtrarMotoPorNome, consultarMoto, atualizarMoto, removerMoto } from './todos/motoRepository.js';
import { listarFilme, inserirFilme, filtrarFilmePorNome, consultarFilme, atualizarFilme, removerFilme } from './todos/filmeRepository.js';
import { listarSerie, inserirSerie, filtrarSeriePorNome, consultarSerie, atualizarSerie, removerSerie } from './todos/serieRepository.js';
import { listarHospital, inserirHospital, filtrarHospitalPorNome, consultarHospital, atualizarHospital, removerHospital } from './todos/hospitalRepository.js';
import { listarTurma, inserirTurma, filtrarTurmaPorNome, consultarTurma, atualizarTurma, removerTurma } from './todos/turmaRepository.js';
import { listarLoja, inserirLoja, filtrarLojaPorNome, consultarLoja, atualizarLoja, removerLoja } from './todos/lojaRepository.js';


import express from 'express'
const api = express();
api.use(express.json()); 


api.get('/pizza', async (req, resp) => {
  let registros = await listarPizza();
  resp.send(registros);
})

api.get('/pizza/filtro', async (req, resp) => {
  let nome = req.query.nome;
  let registros = await filtraPorNome(nome);
  resp.send(registros);
})

api.get('/pizza/:id', async (req, resp) => {
  let id = Number(req.params.id);
  let registros = await consultarPizza(id);
  resp.send(registros);
})

api.put('/pizza/:id', async (req, resp) => {
  let id = Number(req.params.id);
  let Novapizza = req.body;

  await atualizarPizza(id, Novapizza);
  resp.send();
})

api.post('/pizza', async (req, resp) => {
  let novaPizza = req.body;

  let id = await inserirPizza(novaPizza);
  resp.send({ novoId: id });
})

api.delete('/pizza/:id', async (req, resp) => {
  let id = Number(req.params.id);
  
  await removerPizza(id);
  resp.send();

})  

//---------------------------------------------//

api.get('/carro', async (req, resp) => {
  let registros = await listarCarro();
  resp.send(registros);
});
api.get('/carro/:id', async (req, resp) => {
  let id = Number(req.params.id);
  let registro = await consultarCarro(id);
  resp.send(registro);
});
api.get('/carro/filtro', async (req, resp) => {
  let nome = req.query.nome;
  let registros = await filtrarCarroPorNome(nome);
  resp.send(registros);
});
api.put('/carro/:id', async (req, resp) => {
  let id = Number(req.params.id);
  let novoCarro = req.body;
  await atualizarCarro(id, novoCarro);
  resp.send();
});
api.post('/carro', async (req, resp) => {
  let novoCarro = req.body;

  let id = await inserirCarro(novoCarro);
  resp.send({ novoId: id });
})
api.delete('/carro/:id', async (req, resp) => {
  let id = Number(req.params.id);
  await removerCarro(id);
  resp.send();
});

//---------------------------------------------//

api.get('/livro', async (req, resp) => {
  let registros = await listarLivro();
  resp.send(registros);
})
api.get('/livro/:id', async (req, resp) => {
  let id = Number(req.params.id);
  let registro = await consultarLivro(id);
  resp.send(registro);
});
api.get('/livro/filtro', async (req, resp) => {
  let nome = req.query.nome;
  let registros = await filtrarLivroPorNome(nome);
  resp.send(registros);
});
api.put('/livro/:id', async (req, resp) => {
  let id = Number(req.params.id);
  let novoLivro = req.body;
  await atualizarLivro(id, novoLivro);
  resp.send();
});
api.post('/livro', async (req, resp) => {
  let novoLivro = req.body;

  let id = await inserirLivro(novoLivro);
  resp.send({ novoId: id });
})
api.delete('/livro/:id', async (req, resp) => {
  let id = Number(req.params.id);
  await removerLivro(id);
  resp.send();
});

//---------------------------------------------//

api.get('/anime', async (req, resp) => {
  let registros = await listarAnime();
  resp.send(registros);
})
api.get('/anime/:id', async (req, resp) => {
  let id = Number(req.params.id);
  let registro = await consultarAnime(id);
  resp.send(registro);
});
api.get('/anime/filtro', async (req, resp) => {
  let nome = req.query.nome;
  let registros = await filtrarAnimePorNome(nome);
  resp.send(registros);
});
api.put('/anime/:id', async (req, resp) => {
  let id = Number(req.params.id);
  let novoAnime = req.body;
  await atualizarAnime(id, novoAnime);
  resp.send();
});
api.post('/anime', async (req, resp) => {
  let novoAnime = req.body;

  let id = await inserirAnime(novoAnime);
  resp.send({ novoId: id });
})  
api.delete('/anime/:id', async (req, resp) => {
  let id = Number(req.params.id);
  await removerAnime(id);
  resp.send();
});

//---------------------------------------------//

api.get('/moto', async (req, resp) => {
  let registros = await listarMoto();
  resp.send(registros);
});
api.get('/moto/:id', async (req, resp) => {
  let id = Number(req.params.id);
  let registro = await consultarMoto(id);
  resp.send(registro);
});
api.get('/moto/filtro', async (req, resp) => {
  let nome = req.query.nome;
  let registros = await filtrarMotoPorNome(nome);
  resp.send(registros);
});
api.put('/moto/:id', async (req, resp) => {
  let id = Number(req.params.id);
  let novaMoto = req.body;
  await atualizarMoto(id, novaMoto);
  resp.send();
});
api.post('/moto', async (req, resp) => {
  let novaMoto = req.body;
  let id = await inserirMoto(novaMoto);
  resp.send({ novoId: id });
});
api.delete('/moto/:id', async (req, resp) => {
  let id = Number(req.params.id);
  await removerMoto(id);
  resp.send();
});

//---------------------------------------------//

api.get('/filme', async (req, resp) => {
  let registros = await listarFilme();
  resp.send(registros);
});
api.get('/filme/:id', async (req, resp) => {
  let id = Number(req.params.id);
  let registro = await consultarFilme(id);
  resp.send(registro);
});
api.get('/filme/filtro', async (req, resp) => {
  let nome = req.query.nome;
  let registros = await filtrarFilmePorNome(nome);
  resp.send(registros);
});
api.put('/filme/:id', async (req, resp) => {
  let id = Number(req.params.id);
  let novoFilme = req.body;
  await atualizarFilme(id, novoFilme);
  resp.send();
});
api.post('/filme', async (req, resp) => {
  let novoFilme = req.body;
  let id = await inserirFilme(novoFilme);
  resp.send({ novoId: id });
});
api.delete('/filme/:id', async (req, resp) => {
  let id = Number(req.params.id);
  await removerFilme(id);
  resp.send();
});

//---------------------------------------------//

api.get('/serie', async (req, resp) => {
  let registros = await listarSerie(); 
  resp.send(registros);
})
api.get('/serie/:id', async (req, resp) => {
  let id = Number(req.params.id);
  let registro = await consultarSerie(id);
  resp.send(registro);
});
api.get('/serie/filtro', async (req, resp) => {
  let nome = req.query.nome;
  let registros = await filtrarSeriePorNome(nome);
  resp.send(registros);
});
api.put('/serie/:id', async (req, resp) => {
  let id = Number(req.params.id);
  let novaSerie = req.body;
  await atualizarSerie(id, novaSerie);
  resp.send();
});
api.post('/serie', async (req, resp) => {
  let novaSerie = req.body;

  let id = await inserirSerie(novaSerie);
  resp.send({ novoId: id });
})
api.delete('/serie/:id', async (req, resp) => {
  let id = Number(req.params.id);
  await removerSerie(id);
  resp.send();
});

//---------------------------------------------//

api.get('/hospital', async (req, resp) => {
  let hospital = await listarHospital();
  resp.send(hospital);
})
api.get('/hospital/:id', async (req, resp) => {
  let id = Number(req.params.id);
  let registro = await consultarHospital(id);
  resp.send(registro);
});
api.get('/hospital/filtro', async (req, resp) => {
  let nome = req.query.nome;
  let registros = await filtrarHospitalPorNome(nome);
  resp.send(registros);
});
api.put('/hospital/:id', async (req, resp) => {
  let id = Number(req.params.id);
  let novoHospital = req.body;
  await atualizarHospital(id, novoHospital);
  resp.send();
});
api.post('/hospital', async (req, resp) => {
  let novoHospital = req.body;

  let id = await inserirHospital(novoHospital);
  resp.send({ novoId: id });
})
api.delete('/hospital/:id', async (req, resp) => {
  let id = Number(req.params.id);
  await removerHospital(id);
  resp.send();
});

//---------------------------------------------//

api.get('/turma', async(req, resp) => {
  let turma = await listarTurma();
  resp.send(turma);
} )
api.get('/turma/:id', async (req, resp) => {
  let id = Number(req.params.id);
  let registro = await consultarTurma(id);
  resp.send(registro);
});
api.get('/turma/filtro', async (req, resp) => {
  let nome = req.query.nome;
  let registros = await filtrarTurmaPorNome(nome);
  resp.send(registros);
});
api.put('/turma/:id', async (req, resp) => {
  let id = Number(req.params.id);
  let novaTurma = req.body;
  await atualizarTurma(id, novaTurma);
  resp.send();
});
api.post('/turma', async(req, resp) => {
  let novaTurma = req.body;

  let id = await inserirTurma(novaTurma);
  resp.send({ novoId: id });
})
api.delete('/turma/:id', async (req, resp) => {
  let id = Number(req.params.id);
  await removerTurma(id);
  resp.send();
});

//---------------------------------------------//

api.get('/loja', async (req, resp) => {
  let loja = await listarLoja();
  resp.send(loja);
})
api.get('/loja/:id', async (req, resp) => {
  let id = Number(req.params.id);
  let registro = await consultarLoja(id);
  resp.send(registro);
});
api.get('/loja/filtro', async (req, resp) => {
  let nome = req.query.nome;
  let registros = await filtrarLojaPorNome(nome);
  resp.send(registros);
});
api.put('/loja/:id', async (req, resp) => {
  let id = Number(req.params.id);
  let novaLoja = req.body;
  await atualizarLoja(id, novaLoja);
  resp.send();
});
api.post('/loja', async (req, resp) => {
  let novaLoja = req.body;

  let id = await inserirLoja(novaLoja);
  resp.send({ novoId: id });
})
api.delete('/loja/:id', async (req, resp) => {
  let id = Number(req.params.id);
  await removerLoja(id);
  resp.send();
});





api.listen(5010, () => console.log('API subiu com sucesso!'));