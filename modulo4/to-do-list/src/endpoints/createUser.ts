import connection from "../connection";

const createUsers = async (  
  name: string,
  nickname: string,
  email: string
): Promise<any> => {
    const result = await connection("to_do_list_users")
    .insert({
        id: Date.now() + Math.random().toString(), 
        name,
        nickname,
        email
    })
    return result
};

export default createUsers