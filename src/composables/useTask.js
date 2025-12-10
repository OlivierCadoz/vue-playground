import { ref, reactive, computed } from 'vue';

const tasks = reactive([]);

const filterTaskByStatus = (status) =>
  tasks.filter((task) => task.status === status);

export function useTask() {
  const showTaskForm = ref(false);

  const todos = computed(() => filterTaskByStatus('todo'));

  const doings = computed(() => filterTaskByStatus('doing'));

  const dones = computed(() => filterTaskByStatus('done'));

  const addTask = (event) => {
    tasks.push({ todo: event, status: 'todo' });
  };

  const toggleTaskForm = () => {
    showTaskForm.value = !showTaskForm.value;
  };

  return {
    tasks,
    showTaskForm,
    todos,
    doings,
    dones,
    addTask,
    toggleTaskForm,
  };
}
