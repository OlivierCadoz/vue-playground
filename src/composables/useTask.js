import { shallowReactive, computed } from 'vue';

const tasks = shallowReactive([
  {
    id: 0,
    title: 'ok',
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
      title: event,
      status: 'todo',
    });
  };

  const updateTask = (taskId, status) => {
    const task = tasks.find((task) => task.id === taskId);

    if (task) task.status = status;
  };

  return {
    tasks,
    todos,
    doings,
    dones,
    addTask,
    updateTask,
  };
}
