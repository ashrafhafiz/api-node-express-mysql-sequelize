const url = "http://localhost:5000";

window.addEventListener("load", () => {
  const modal = document.getElementById("modal");
  const returnModal = document.getElementById("return-modal");
  const cancelButton = document.getElementById("cancel-button");
  const assignBtn = document.getElementById("assign-book");
  // const returnBtn = document.getElementById("return-book");
  // const returnCancelButton = document.getElementById("return-cancel-button");

  const toggleModal1 = () => {
    modal.classList.toggle("show");
    modal.classList.toggle("hidden");
  };
  const toggleModal2 = () => {
    returnModal.classList.toggle("show");
    returnModal.classList.toggle("hidden");
  };
  assignBtn.addEventListener("click", toggleModal1);
  cancelButton.addEventListener("click", toggleModal1);
  // returnBtn.addEventListener("click", toggleModal2);
  // returnCancelButton.addEventListener("click", toggleModal2);
});

// const returnButton = document.getElementById("return-btn");

// Table Logic
const tbodyEl = document.querySelector("tbody");
const tableEl = document.querySelector("table");

const allRows = (data, index) => {
  const {
    id,
    Book: { title },
    User: { firstName, lastName },
  } = data;
  const table = document.getElementById("assign-table");
  const row = table.insertRow(-1);
  // row.insertCell(0).textContent = `${index}`;
  row.insertCell(
    0
  ).innerHTML = `<td><p class="userId pl-10 py-2">${id}</p></td>`;
  row.insertCell(1).textContent = firstName + " " + lastName;
  row.insertCell(2).textContent = title;
};

// Sending Data
const data = () => {
  const userId = document.getElementById("user-id").value;
  const bookId = document.getElementById("book-id").value;
  return {
    userId,
    bookId,
  };
};

// assign a new book
const assignBook = async () => {
  const response = await fetch(`${url}/assign-book`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ status: 200, data: data() }),
  });
};

// Return book logic
const returnBook = async () => {
  const id = document.getElementById("assigned-id").value;

  await fetch(`${url}/return-book`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ status: 200, id }),
  });
  location.reload();
};

// get all assigned books
const getAllAssignedBook = async () => {
  const response = await fetch(`${url}/assigned-books`, { method: "GET" });
  const { data } = await response.json();
  data.forEach((book, index) => {
    allRows(book, index + 1);
  });
};

getAllAssignedBook();

// Save button logic
const saveBtn = document.getElementById("save-btn");
saveBtn.addEventListener("click", async () => {
  await assignBook();
  location.reload();
});

// returnButton.addEventListener("click", returnBook);
