import { ref } from 'vue';

const showTaskForm = ref(false);

export function useTaskForm() {
  const toggleTaskForm = () => {
    console.log('toggling form');
    showTaskForm.value = !showTaskForm.value;
  };

  return {
    showTaskForm,
    toggleTaskForm,
  };
}
