// External Dependencies
import {
  autorun,
  computed,
  decorate,
  observable,
} from 'mobx';

// Internal Dependencies
import ObservablePeopleStore from './ObservablePeopleStore';

// Store Definition
class ObservableTodoStore {
	todos = [
    { task: 'Buy Milk', completed: false, assignee: ObservablePeopleStore[0] },
    { task: 'Buy Beer', completed: false, assignee: ObservablePeopleStore[1] }
  ];
  pendingRequests = 0;

  constructor() {
    autorun(() => console.log(this.report));
  }

	get completedTodosCount() {
    return this.todos.filter(todo => todo.completed === true).length;
  }

	get report() {
		if (this.todos.length === 0) return "<none>";
		return `
      Next todo: "${this.todos[0].task}".
      Progress: ${this.completedTodosCount}/${this.todos.length}
    `;
	}

	addTodo(task) {
		if (task) this.todos.push({ task, completed: false, assignee: null });
	}
}

decorate(ObservableTodoStore, {
  todos: observable,
  pendingRequests: observable,
  completedTodosCount: computed,
  report: computed,
});

export default new ObservableTodoStore();
