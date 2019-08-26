
import api from 'modules/http';

export async function createEquipment() {
    return api.post('http://localhost:3000/repos/equipments');
}
export async function getEquipment() {
    return api.get('http://localhost:3000/repos/equipments');
  }