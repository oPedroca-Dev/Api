import { conectionApple } from "./conection.js";


export async function listarApple() {
  const comando = `
    SELECT *
      FROM produtos_apple
  `

  const [registros] = await conectionApple.query(comando)
  return registros;
}


export async function consultarApple(id_produto) {
  const comando = `
    SELECT *
      FROM produtos_apple
     WHERE id_produto = ? 
  `

  const [registros] = await conectionApple.query(comando, [id_produto])
  return registros[0];
}


export async function filtrarApplePorNome(nome) {
  const comando = `
    SELECT *
      FROM produtos_apple
     WHERE nome like ? 
  `

  const [registros] = await conectionApple.query(comando, ['%'+nome+'%'])
  return registros;
}


export async function inserirApple(novoApple) {
  const comando = `
    INSERT INTO produtos_apple (nome, categoria, modelo, capacidade_armazenamento,cor,preco,data_lancamento,status,descricao,criado_em,atualizado_em)
               values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);
  `

  const [info] = await conectionApple.query(comando, [
    novoApple.nome, 
    novoApple.categoria, 
    novoApple.modelo, 
    novoApple.capacidade_armazenamento,
    novoApple.cor,
    novoApple.preco,
    novoApple.data_lancamento,
    novoApple.status,
    novoApple.descricao,
    novoApple.criado_em,
    novoApple.atualizado_em
  ])
  return info.insertId;
}


export async function alterarApple(id_produto, novosDados) {
  const comando = `
    UPDATE produtos_apple
       SET nome = ?,
           categoria = ?,
           cor = ?
     WHERE id_produto = ?
  `

  const [info] = await conectionApple.query(comando, [
    novosDados.nome,
    novosDados.categoria,
    novosDados.cor,
    id_produto
  ])
}


export async function removerApple(id_produto) {
  const comando = `
    DELETE FROM produtos_apple
          WHERE id_produto = ?
  `

  const [info] = await conectionApple.query(comando, [id_produto]);
}