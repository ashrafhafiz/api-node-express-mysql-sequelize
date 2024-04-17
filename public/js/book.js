const url = "http://localhost:5000";

// const addBookBtn = document.getElementById("add-book");
const modal = document.getElementById("modal");
const cancelButton = document.getElementById("cancel-button");
const assignBtn = document.getElementById("add-book");
const successModal = document.getElementById("success-modal");
// const saveCancelData = document.getElementById("save-cancel-button");
// const successBtn = document.getElementById("success");

// Modal logic
window.addEventListener("load", () => {
  const toggleModal = () => {
    modal.classList.toggle("show");
    modal.classList.toggle("hidden");
  };
  const toggleSaveModal = () => {
    successModal.classList.toggle("show");
    successModal.classList.toggle("hidden");
  };
  assignBtn.addEventListener("click", toggleModal);
  cancelButton.addEventListener("click", toggleModal);
  // saveCancelData.addEventListener("click", toggleSaveModal);
  // successBtn.addEventListener("click", toggleSaveModal);
});

// Table Logic
const allRows = (data) => {
  const table = document.getElementById("book-table");
  const row = table.insertRow(-1);
  const { id, title, author, description } = data;
  row.insertCell(
    0
  ).innerHTML = `<td><p class="userId pl-10 py-2">${id}</p></td>`;
  row.insertCell(1).textContent = title;
  row.insertCell(2).textContent = author;
  row.insertCell(3).textContent = description;
};

// get all books
const getAllBooks = async () => {
  const response = await fetch(`${url}/inventory`);
  const { data } = await response.json();
  data.forEach((book) => {
    allRows(book);
  });
};
getAllBooks();

// Data to send to the server
const data = () => {
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const description = document.getElementById("description").value;
  return { title, author, description };
};

// Logic for adding new book
const addBook = async () => {
  try {
    const response = await fetch(`${url}/add-book`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data: data() }),
    });
    const { status } = await response.json();
    console.log(status);
  } catch (error) {
    alert(error.message);
  }
};

// Save button logic
const saveBtn = document.getElementById("save-btn");
saveBtn.addEventListener("click", async () => {
  await addBook();
  location.reload();
});
