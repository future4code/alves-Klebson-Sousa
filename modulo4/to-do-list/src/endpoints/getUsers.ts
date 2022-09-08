import connection from "../connection";

const getUsers =async (): Promise<any> => {
    const result = await connection("to_do_list_users")
    .select("id", "nickname")
    return result
}
export default getUsers