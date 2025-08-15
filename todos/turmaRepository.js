import { conectionTurma } from "./conection.js";

export async function listarTurma() {
  const comando = `
    SELECT *
      FROM turma
  `
  const [registros] = await conectionTurma.query(comando)
  return registros;
}

export async function inserirTurma(Turma) {
  const comando = `
   insert into turma (nm_turma,ds_curso,nr_ano_letivo,qtd_capacidade,bt_ativo,dt_inclusao)
        values(?,?,?,?,?,?)
  `
  const [info] = await conectionTurma.query(comando, [
    Turma.nm_turma, 
    Turma.ds_curso, 
    Turma.nr_ano_letivo, 
    Turma.qtd_capacidade, 
    Turma.bt_ativo, 
    Turma.dt_inclusao
  ])
  return info.insertId;
}


export async function consultarTurma(id) {
  const comando = `
    SELECT *
      FROM turma
     WHERE id_turma = ?
  `
  const [registros] = await conectionTurma.query(comando, [id]);
  return registros[0];
}


export async function filtrarTurmaPorNome(nome) {
  const comando = `
    SELECT *
      FROM turma
     WHERE nm_turma like ?
  `
  const [registros] = await conectionTurma.query(comando, [`%${nome}%`]);
  return registros;
}


export async function atualizarTurma(id, turma) {
  const comando = `
    UPDATE turma
       SET nm_turma = ?,
           ds_curso = ?,
           nr_ano_letivo = ?,
           qtd_capacidade = ?,
           bt_ativo = ?,
           dt_inclusao = ?
     WHERE id_turma = ?
  `
  const [info] = await conectionTurma.query(comando, [
    turma.nm_turma,
    turma.ds_curso,
    turma.nr_ano_letivo,
    turma.qtd_capacidade,
    turma.bt_ativo,
    turma.dt_inclusao,
    id
  ]);
  return info.affectedRows;
}


export async function removerTurma(id) {
  const comando = `
    DELETE FROM turma
     WHERE id_turma = ?
  `
  const [info] = await conectionTurma.query(comando, [id]);
  return info.affectedRows;
}