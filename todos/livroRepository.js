import { connectionLivro } from "../connection.js";

export async function listarLivro() {
  const comando = `
    SELECT *
      FROM livro
  `
  const [registros] = await connectionLivro.query(comando)
  return registros;
}

export async function inserirLivro(Livro) {
  const comando = `
   INSERT INTO livro (titulo, autor, ano_publicacao, genero, editora, preco) 
      values(?,?,?,?,?, ?)
  `
  const [info] = await connectionLivro.query(comando, [Livro.titulo, Livro.autor, Livro.ano_publicacao, Livro.genero, Livro.editora, Livro.preco])
  return info.insertId;
}


export async function consultarLivro(id) {
  const comando = `
    SELECT *
      FROM livro
     WHERE id = ?
  `
  const [registros] = await connectionLivro.query(comando, [id]);
  return registros[0];
}

export async function filtrarLivroPorNome(nome) {
  const comando = `
    SELECT *
      FROM livro
     WHERE titulo like ?
  `
  const [registros] = await connectionLivro.query(comando, [`%${nome}%`]);
  return registros;
}


export async function atualizarLivro(id, livro) {
  const comando = `
    UPDATE livro
       SET titulo = ?,
           autor = ?,
           ano_publicacao = ?,
           genero = ?,
           editora = ?,
           preco = ?
     WHERE id = ?
  `
  const [info] = await connectionLivro.query(comando, [
    livro.titulo,
    livro.autor,
    livro.ano_publicacao,
    livro.genero,
    livro.editora,
    livro.preco,
    id
  ]);
  return info.affectedRows;
}


export async function removerLivro(id) {
  const comando = `
    DELETE FROM livro
     WHERE id = ?
  `
  const [info] = await connectionLivro.query(comando, [id]);
  return info.affectedRows;
}