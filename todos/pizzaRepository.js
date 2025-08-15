import { conectionPizza } from './conection.js';

export async function listarPizza() {
  const [registros] = await conectionPizza.query(`
    SELECT *
     FROM pizza`);
  return registros;
}

export async function consultarPizza(id) {
  const comando = (`
  
  SELECT * FROM 
  pizza WHERE id = ?`
  );
  const [registro] = await conectionPizza.query(comando, [id]);
  return registro[0];
}

export async function filtraPorNome(nome) {
  const comando = (`
    SELECT * FROM 
    pizza WHERE nome LIKE ?`);
  const [registros] = await conectionPizza.query(comando, [`%${nome}%`]);
  return registros;
}

export async function inserirPizza(pizza) {
  const comando = `
  insert into pizza(nm_pizzaria,nm_estado,bt_ativa,qtd_pizza,vl_preco)
values(?,?,?,?,?)
    `;
  const [resposta] = await conectionPizza.query(comando, [
    pizza.nm_pizzaria, 
    pizza.nm_estado, 
    pizza.bt_ativa, 
    pizza.qtd_pizza, 
    pizza.vl_preco]);
  return resposta.insertId;
}

export async function atualizarPizza(id, pizza) {
  const comando = 'UPDATE pizza SET nome = ? /*, outros campos */ WHERE id = ?';
  await conectionPizza.query(comando, [pizza.nome , id]);
}

export async function removerPizza(id) {
  await conectionPizza.query('DELETE FROM pizza WHERE id = ?', [id]);
}