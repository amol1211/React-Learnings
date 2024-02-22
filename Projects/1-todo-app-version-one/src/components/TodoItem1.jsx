function TodoItem1() {
  let todoName = "Buy Milk";
  let todoDate = "12/03/2023";

  return (
    <div class="container">
      <div class="row am-row">
        <div class="col-6">{todoName}</div>
        <div class="col-4">{todoDate}</div>
        <div class="col-2">
          <button type="button" class="btn btn-danger am-button">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem1;
