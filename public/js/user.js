const url = "http://localhost:5000";

window.addEventListener("load", () => {
  const modal = document.getElementById("modal");
  const cancelButton = document.getElementById("cancel-button");
  const assignBtn = document.getElementById("add-user");
  const toggleModal = () => {
    modal.classList.toggle("show");
    modal.classList.toggle("hidden");
  };
  assignBtn.addEventListener("click", toggleModal);
  cancelButton.addEventListener("click", toggleModal);
});

// Add to table logic
const allRows = (data) => {
  const { id, firstName, lastName } = data;
  const table = document.getElementById("user-table");
  const row = table.insertRow(-1);
  row.insertCell(
    0
  ).innerHTML = `<td><p class="userId pl-10 py-2">${id}</p></td>`;
  row.insertCell(1).textContent = firstName;
  row.insertCell(2).textContent = lastName;
};

// Data to send to the server
const data = () => {
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  return { firstName, lastName };
};

// Add new user
const addUser = async () => {
  try {
    const response = await fetch(`${url}/add-user`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data: data() }),
    });
    const { status } = await response.json();
    console.log(status);
  } catch (error) {
    return error.message;
  }
};

// fetch all users
const fetchUsers = async () => {
  const response = await fetch(`${url}/get-users`, { method: "GET" });
  const { data } = await response.json();
  data.forEach((user) => {
    allRows(user);
  });
};

fetchUsers();

// Add user
const userBtn = document.getElementById("save-btn");
userBtn.addEventListener("click", async () => {
  await addUser();
  location.reload();
});
