import connection from "../connection";

const updateUser = async (id: string, name: string, nickname: string): Promise<any> => {
    const result = await connection("to_do_list_users")
    .update({
        name,
        nickname        
    })
    .where('id', id)
    return result
}
export default updateUser