const taskInput = document.getElementById('taskInput');
    const timeSelect = document.getElementById('timeSelect');
    const taskContainer = document.getElementById('taskContainer');
    const emptyState = document.getElementById('emptyState');

    let tasks = [];

    function addTask() {
      const text = taskInput.value.trim();
      const time = timeSelect.value;

      if (!text || !time) {
        alert("Please enter both task and time.");
        return;
      }

      const task = { text, time };
      tasks.push(task);
      tasks.sort((a, b) => parseInt(a.time) - parseInt(b.time));
      renderTasks();

      taskInput.value = '';
      timeSelect.value = '';
    }

    function renderTasks() {
      taskContainer.innerHTML = '';
      if (tasks.length === 0) {
        taskContainer.innerHTML = '<p class="empty-state" id="emptyState">No tasks yet. Add something to get started!</p>';
        return;
      }
      tasks.forEach((task, index) => {
        const item = document.createElement('div');
        item.className = 'task-item';
        item.innerHTML = `
          <div><span class="time">${task.time}</span> - ${task.text}</div>
          <button class="complete-btn" onclick="removeTask(${index})">Complete</button>
        `;
        taskContainer.appendChild(item);
      });
    }
    function removeTask(index) {
      tasks.splice(index, 1);
      renderTasks();
    }