import axios from "axios";
import BASE_URL from "../data/baseUrl";



const getAddressInfo = async (cep: string): Promise<string> => {
  try {
    const res = await axios.get(`${BASE_URL}/${cep}/json`);
    const { logradouro, bairro, localidade, uf } = res.data;

    const address = `${logradouro}, 
    ${bairro},
    ${localidade}, ${uf}`;
    return address;
  } catch (error) {
    throw new Error();
  }
};

export default getAddressInfo;
