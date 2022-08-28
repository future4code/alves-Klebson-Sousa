import connection from "../connection";

const createTask = async (
  id: string,
  title: string,
  description: string,
  deadline: string,
  authorTaskId: string
): Promise<any> => {
  const result = await connection("to_do_list_tasks").insert({
    id,
    title,
    description,
    deadline,
    author_task_id: authorTaskId,
  });
  return result;
};

export default createTask;
