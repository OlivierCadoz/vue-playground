import { ref, reactive } from 'vue';

export function useTask() {
  const tasks = reactive([]);
  const showTaskForm = ref(false);

  const addTask = (event) => {
    tasks.push({ task: event });
  }

  const toggleTaskForm = () => {
    showTaskForm.value = !showTaskForm.value;
  }

  return {
    tasks,
    showTaskForm,
    addTask,
    toggleTaskForm
  }
}