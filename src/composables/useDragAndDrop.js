import { onMounted, onUpdated } from 'vue';

let tasks = [];

const initColumnDragAndDrop = () => {
  const columns = document.querySelectorAll('.task-column');
  columns.forEach((column) => {
    column.addEventListener('dragover', (event) => {
      if (event.dataTransfer.types.includes('task')) {
        event.preventDefault();
      }
    });

    column.addEventListener('drop', (event) => {
      event.preventDefault();

      const draggedTask = document.getElementById('dragged-task');
      draggedTask.remove();
      column.children[1].appendChild(draggedTask);
    });
  });
};

const initTaskDragAndDrop = () => {
  tasks = document.querySelectorAll('.task-item');
  tasks.forEach((task) => {
    task.addEventListener('dragstart', (event) => {
      task.id = 'dragged-task';
      event.dataTransfer.effectAllowed = 'move';
      event.dataTransfer.setData('task', '');
    });

    task.addEventListener('dragend', () => task.removeAttribute('id'));
  });
};

export function useDragAndDrop(taskList) {
  onMounted(() => {
    initColumnDragAndDrop();
    initTaskDragAndDrop();
  });

  onUpdated(() => {
    if (taskList.length !== tasks.length) {
      tasks.forEach((task) => task.removeEventListener('dragstart', () => {}));
      initTaskDragAndDrop();
    }
  });
}
