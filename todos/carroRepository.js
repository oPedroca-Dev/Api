import { connectionCarro } from "../connection.js";

export async function listarCarro() {
  const comando = `
    SELECT *
      FROM carro
  `

  const [registros] = await connectionCarro.query(comando)
  return registros;
}

export async function consultarCarro(id) {
  const comando = `
    SELECT *
      FROM carro
     WHERE id = ?
  `;
  const [registros] = await connectionCarro.query(comando, [id]);
  return registros[0];
}

export async function filtrarCarroPorNome(nome) {
  const comando = `
    SELECT *
      FROM carro
     WHERE modelo like ?
  `;
  const [registros] = await connectionCarro.query(comando, [`%${nome}%`]);
  return registros;
}

export async function inserirCarro(Carro) {
  const comando = `
    INSERT INTO carro (id, Valor, Placa, modelo, ano_fabricacao, cor, ar_condicionado)
      values(?,?,?,?,?,?,?)
  `

  const [info] = await connectionCarro.query(comando, [
    Carro.id, 
    Carro.Valor, 
    Carro.Placa, 
    Carro.modelo, 
    Carro.ano_fabricacao, 
    Carro.cor, 
    Carro.ar_condicionado
  ]);

  return info.insertId;
}

export async function atualizarCarro(id, Carro) {
  const comando = `
    UPDATE carro
       SET Valor = ?,
           Placa = ?,
           modelo = ?,
           ano_fabricacao = ?,
           cor = ?,
           ar_condicionado = ?
     WHERE id = ?
  `;

  const [info] = await connectionCarro.query(comando, [
    Carro.Valor, 
    Carro.Placa, 
    Carro.modelo, 
    Carro.ano_fabricacao, 
    Carro.cor, 
    Carro.ar_condicionado,
    id
  ]);

  return info.affectedRows;
}

export async function removerCarro(id) {
  const comando = `
    DELETE FROM carro
     WHERE id = ?
  `;

  const [info] = await connectionCarro.query(comando, [id]);
  return info.affectedRows;
}