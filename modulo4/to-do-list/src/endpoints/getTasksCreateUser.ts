import connection from "../connection";

const getTaskCreateUser = async (authorTaskId: string): Promise<any> => {
  const result = await connection
    .select(
      "to_do_list_tasks.id ",
      "to_do_list_tasks.title",
      "to_do_list_tasks.description",
      "to_do_list_tasks.deadline",
      "to_do_list_tasks.status",
      "to_do_list_users.id",
      "to_do_list_users.nickname"
    )
    .from("to_do_list_tasks")
    .join(
      "to_do_list_users",
      "to_do_list_users.id",
      "to_do_list_tasks.author_task_id"
    )
    .where("author_task_id", authorTaskId);
  return result;
};
export default getTaskCreateUser;
