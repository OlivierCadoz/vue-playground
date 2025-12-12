import { reactive, computed } from 'vue';

const tasks = reactive([
  {
    id: 0,
    todo: 'ok',
    status: 'todo',
  },
]);

const filterTaskByStatus = (status) =>
  tasks.filter((task) => task.status === status);

export function useTask() {
  const todos = computed(() => filterTaskByStatus('todo'));

  const doings = computed(() => filterTaskByStatus('doing'));

  const dones = computed(() => filterTaskByStatus('done'));

  const addTask = (event) => {
    tasks.push({
      id: tasks.length,
      todo: event,
      status: 'todo',
    });
  };

  return {
    tasks,
    todos,
    doings,
    dones,
    addTask,
  };
}
