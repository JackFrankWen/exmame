import api from 'modules/http';

export async function createEquipment(data) {
  return api.post('http://localhost:3000/repos/equipments', data);
}

export async function getEquipment(data) {
  return api.get(`http://localhost:3000/repos/equipments/${data}`);
}