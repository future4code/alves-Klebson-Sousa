import axios from "axios";
import BASE_URL from "../data/baseUrl";


const selectAddress = async (cep: string, bairroPessoa: string) => {
  try {
    const res = await axios.get(`${BASE_URL}/${cep}/json`);
    // const { logradouro, bairro, localidade, uf } = res.data;

    // const address = `${logradouro}, 
    // ${bairro? bairro: bairroPessoa},
    // ${localidade}, ${uf}`;
    
    return res.data
  } catch (error) {
    throw new Error();
  }
};

export default selectAddress;