import { ref } from 'vue';

const showTaskForm = ref(false);

export function useTaskForm() {
  const toggleTaskForm = () => {
    showTaskForm.value = !showTaskForm.value;
  };

  return {
    showTaskForm,
    toggleTaskForm,
  };
}
