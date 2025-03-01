import connection from "../connection";

const updateUser = async (id: string, name?: string, nickname?: string, email?: string): Promise<any> => {

    if (name){
        await connection("to_do_list_users").update({
            name
        })
        .where("id", id)
    }
    if (nickname){
        await connection("to_do_list_users").update({
            nickname
        })
        .where("id", id)
    }
    if (email){
        await connection("to_do_list_users").update({
            email
        })
        .where("id", id)
    }
    // const result = await connection("to_do_list_users")
    // .update({
    //     name: name,
    //     nickname:  nickname      
    // })
    // .where('id', id)    
    // return result
}
export default updateUser
