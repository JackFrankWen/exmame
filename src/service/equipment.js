import api from 'modules/http';
const preFix = 'http://localhost:3000';

export async function createEquipment(data) {
  return api.post(preFix + '/repos/equipments', data);
}

export async function getEquipment(data) {
  return api.get(`${preFix}/repos/equipments/${data}`);
}

export async function getEquipmentListInfo() {
  return api.get(`http://localhost:3000/repos/equipments`);
}
