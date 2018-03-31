$l(()=>{

  $l('.to-do-form').on('submit', (e)=>{
    e.preventDefault();
    addTodoItem();
  });

  $l('.add-to-do-button').on('click', (e)=> {
    e.preventDefault();
    addTodoItem();
  })

  const addTodoItem = () => {
    if($l('.to-do-input').val()){
      const toDo = $l('.to-do-input').val();
      $l('.to-do-list').append(
        `<li class="to-do-item">
          <span>${toDo}</span>
          <i class="fas fa-pencil-alt"></i>
          <i class="fas fa-check"></i>
          <i class="fas fa-trash-alt"></i>
        </li>`
      );
      $l('.to-do-input').val('');
      addToggleComplete();
      addDeleteToItems();
      addEditToItems();
    }
  }

  const addToggleComplete = () => {
    $l('.fa-check').on('click', (e) => {
      const toDoClass = $l(e.target).parent().attr('class');
      if (toDoClass.includes("green")) {
        $l(e.target).parent().removeClass("green");
      } else {
        $l(e.target).parent().addClass("green");
      }
    });
  };

  const addDeleteToItems = () => {
    $l('.fa-trash-alt').on('click', (e) => {
      $l(e.target).parent().remove();
    });
  };

  const saveToEditCb = e => {
    const todoValue = $l(e.target).parent().find('input').val();
    $l(e.target).parent().html(
      `<span class="todo-task">${todoValue}</span>
      <i class="fas fa-pencil-alt"></i>
      <i class="fas fa-check"></i>
      <i class="fas fa-trash-alt"></i>`
    );
    addToggleComplete();
    addDeleteToItems();
    addEditToItems();
  };

  const addSaveToEdit = () => {
    $l('.fa-save').on('click', saveToEditCb);
    $l('.edit-todo').on('keydown', e => {
      if(e.keyCode === 13){
        saveToEditCb(e);
      }
    });
  };

  const addEditToItems = () => {
    $l('.fa-pencil-alt').on('click', (e)=> {
      const todoValue = $l(e.target).parent().find('span').html();
      $l(e.target).parent().html(
        `<input class='edit-todo' placeholder='${todoValue}' value='${todoValue}'/>
        <i class="fas fa-save"></i>`
      );
      addSaveToEdit();
    });
  }

});
