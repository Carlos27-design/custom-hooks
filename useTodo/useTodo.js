import { useEffect, useReducer } from 'react';
import { todoReducer } from './todoReducer';

export const useTodo = () => {
  const init = () => {
    return JSON.parse(localStorage.getItem('todos'));
  };

  const [todos, dispatch] = useReducer(todoReducer, [], init);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleNewTodo = (todo) => {
    const action = {
      type: 'Add Todo',
      payload: todo,
    };

    dispatch(action);
  };

  const handleDeleteTodo = (id) => {
    dispatch({
      type: 'Delete Todo',
      payload: id,
    });
  };

  const handleToggleTodo = (id) => {
    dispatch({
      type: 'Toggle Todo',
      payload: id,
    });
  };

  return {
    todos,
    todosCounter: todos.length,
    todosPending: todos.filter((todo) => !todo.done).length,
    handleNewTodo,
    handleDeleteTodo,
    handleToggleTodo,
  };
};
