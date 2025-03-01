import connection from "../connection";

const getTaskById = async (id: string): Promise<any> => {
  const [result] = await connection
    .select(
      "to_do_list_tasks.id as task_id",
      "to_do_list_tasks.title",
      "to_do_list_tasks.description",
      "to_do_list_tasks.deadline",
      "to_do_list_tasks.status",
      "to_do_list_tasks.author_task_id",
      "to_do_list_users.nickname"
    )
    .from("to_do_list_tasks")
    .join(
      "to_do_list_users",
      "to_do_list_users.id",
      "to_do_list_tasks.author_task_id"
    )

    .where("to_do_list_tasks.id", id);
  return result;
};

export default getTaskById;
// select tasks.*, nickname from to_do_list_tasks AS tasks
// JOIN to_do_list_users AS users
// ON author_task_id = users.id;
