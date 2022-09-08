import connection from "../connection";

const getUserById = async (id: string): Promise<any> => {
  const result = await connection
    .select("*")
    .from("to_do_list_users")
    .where("id", id);
  return result;
};
export default getUserById;
