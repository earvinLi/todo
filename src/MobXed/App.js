// External Dependencies
import React from 'react';

// Internal Dependencies
import ObservableTodoStore from './ObservableTodoStore';
import TodoList from './TodoList';

// Component Definition
const App = () => <TodoList store={ObservableTodoStore} />;

export default App;
