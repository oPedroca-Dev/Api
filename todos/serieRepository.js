import { conectionSerie } from "./conection.js";

export async function listarSerie() {
  const comando = `
    SELECT *
      FROM serie
  `
  const [registros] = await conectionSerie.query(comando)
  return registros;
}

export async function consultarSerie(id) {
  const comando = `
    SELECT *
      FROM serie
     WHERE id = ?
  `
  const [registros] = await conectionSerie.query(comando, [id]);
  return registros[0];
}

export async function filtrarSeriePorNome(nome) {
  const comando = `
    SELECT *
      FROM serie
     WHERE titulo like ?
  `
  const [registros] = await conectionSerie.query(comando, [`%${nome}%`]);
  return registros;
}

export async function inserirSerie(Serie) {
  const comando = `
    INSERT INTO serie (titulo, ano_lancamento, genero, temporadas, criador, avaliacao) 
    values(?,?,?,?,?,?)
  `
  const [info] = await conectionSerie.query(comando, [
    Serie.titulo, 
    Serie.ano_lancamento, 
    Serie.genero, 
    Serie.temporadas, 
    Serie.criador, 
    Serie.avaliacao
  ])
  return info.insertId;
}

export async function atualizarSerie(id, Serie) {
  const comando = `
    UPDATE serie
       SET titulo = ?,
           ano_lancamento = ?,
           genero = ?,
           temporadas = ?,
           criador = ?,
           avaliacao = ?
     WHERE id = ?
  `
  const [info] = await conectionSerie.query(comando, [
    Serie.titulo, 
    Serie.ano_lancamento, 
    Serie.genero, 
    Serie.temporadas, 
    Serie.criador, 
    Serie.avaliacao,
    id
  ]);
  return info.affectedRows;
}

export async function removerSerie(id) {
  const comando = `
    DELETE FROM serie
     WHERE id = ?
  `
  const [info] = await conectionSerie.query(comando, [id]);
  return info.affectedRows;
}