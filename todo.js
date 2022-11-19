/* eslint-disable no-undef */
const todoList = () => {
  all = [];
  const add = (todoItem) => {
    all.push(todoItem);
  };
  const markAsComplete = (index) => {
    all[index].completed = true;
  };

  const overdue = () => {
    return all.filter(
      (item) => item.dueDate < new Date().toLocaleDateString("en-CA")
    );
  };

  const dueToday = () => {
    return all.filter(
      (item) => item.dueDate === new Date().toLocaleDateString("en-CA")
    );
  };

  const dueLater = () => {
    return all.filter(
      (item) => item.dueDate > new Date().toLocaleDateString("en-CA")
    );
  };

  const toDisplayableList = (list) => {
    // Format the To-Do list here, and return the output string as per the format given above.
    let doList = [];
    list.forEach((data) => {
      if (data.dueDate === today) {
        if (data.completed === true) {
          doList.push("[x] " + data.title);
        } else {
          doList.push("[ ] " + data.title);
        }
      } else {
        if (data.completed === true) {
          doList.push("[x] " + data.title + " " + data.dueDate);
        } else {
          doList.push("[ ] " + data.title + " " + data.dueDate);
        }
      }
    });
    return doList.join("\n");
    // return OUTPUT_STRING
  };

  return {
    all,
    add,
    markAsComplete,
    overdue,
    dueToday,
    dueLater,
    toDisplayableList,
  };
};

module.exports = todoList;
