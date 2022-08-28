import connection from "../connection";
import { ids } from "../data/ids";

const createUsers = async (  
  name: string,
  nickname: string,
  email: string
): Promise<any> => {
    const result = await connection("to_do_list_users")
    .insert({
        ids,
        name,
        nickname,
        email
    })
    return result
};

export default createUsers