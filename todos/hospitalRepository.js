import { conectionHospital } from "./conection.js";

export async function listarHospital() {
  const comando = `
    SELECT *
      FROM sus
  `
  const [registros] = await conectionHospital.query(comando)
  return registros;
}

export async function consultarHospital(id) {
  const comando = `
    SELECT *
      FROM sus
     WHERE id_hospital = ?
  `
  const [registros] = await conectionHospital.query(comando, [id]);
  return registros[0];
}

export async function filtrarHospitalPorNome(nome) {
  const comando = `
    SELECT *
      FROM sus
     WHERE nm_hospital like ?
  `
  const [registros] = await conectionHospital.query(comando, [`%${nome}%`]);
  return registros;
}

export async function inserirHospital(Hospital) {
  const comando = `
    insert into sus(nm_hospital,nm_medico,ds_cargo,bt_ativo,hr_espediente)
        values(?,?,?,?,?)
  `
  const [info] = await conectionHospital.query(comando, [
    Hospital.nm_hospital, 
    Hospital.nm_medico, 
    Hospital.ds_cargo, 
    Hospital.bt_ativo, 
    Hospital.hr_espediente
  ])
  return info.insertId;
}

export async function atualizarHospital(id, hospital) {
  const comando = `
    update sus
       set nm_hospital = ?,
           nm_medico = ?,
           ds_cargo = ?,
           bt_ativo = ?,
           hr_espediente = ?
     where id_hospital = ?
  `
  const [info] = await conectionHospital.query(comando, [
    hospital.nm_hospital,
    hospital.nm_medico,
    hospital.ds_cargo,
    hospital.bt_ativo,
    hospital.hr_espediente,
    id
  ]);
  return info.affectedRows;
}

export async function removerHospital(id) {
  const comando = `
    delete from sus
     where id_hospital = ?
  `
  const [info] = await conectionHospital.query(comando, [id]);
  return info.affectedRows;
}