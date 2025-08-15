import { conectionMoto } from "./conection.js";

export async function listarMoto() {
    const comando = `
    SELECT *
      FROM trabalhos_moto
  `
    const [registros] = await conectionMoto.query(comando)
    return registros;
}

export async function inserirMoto(Moto) {
    const comando = `
   INSERT INTO trabalhos_moto (placa_moto, modelo, descricao_trabalho, data_entrada, status, valor)
    values(?,?,?,?,?,?)
  `
    const [info] = await conectionMoto.query(comando, [
        Moto.placa_moto,
        Moto.modelo,
        Moto.descricao_trabalho,
        Moto.data_entrada,
        Moto.status,
        Moto.valor
    ])
    return info.insertId;
}

export async function consultarMoto(id) {
    const comando = `
      SELECT *
        FROM trabalhos_moto
       WHERE id = ?
    `
    const [registros] = await conectionMoto.query(comando, [id]);
    return registros[0];
}


export async function filtrarMotoPorNome(modelo) {
    const comando = `
      SELECT *
        FROM trabalhos_moto
       WHERE modelo like ?
    `
    const [registros] = await conectionMoto.query(comando, [`%${modelo}%`]);
    return registros;
}


export async function atualizarMoto(id, Moto) {
    const comando = `
      UPDATE trabalhos_moto
         SET placa_moto = ?,
             modelo = ?,
             descricao_trabalho = ?,
             data_entrada = ?,
             status = ?,
             valor = ?
       WHERE id = ?
    `
    const [info] = await conectionMoto.query(comando, [
        Moto.placa_moto,
        Moto.modelo,
        Moto.descricao_trabalho,
        Moto.data_entrada,
        Moto.status,
        Moto.valor,
        id
    ]);
    return info.affectedRows;
}


export async function removerMoto(id) {
    const comando = `
      DELETE FROM trabalhos_moto
       WHERE id = ?
    `
    const [info] = await conectionMoto.query(comando, [id]);
    return info.affectedRows;
}