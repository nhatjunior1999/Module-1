// Danh sách thú cưng
let pets = [];

// DOM
const addPetForm = document.getElementById("addPetForm");
const addVaccinationForm = document.getElementById("addVaccinationForm");
const petListDiv = document.getElementById("petList");

// Thêm thú cưng
addPetForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const species = document.getElementById("species").value;
    const age = parseFloat(document.getElementById("age").value);
    const weight = parseFloat(document.getElementById("weight").value);

    const newPet = {
        name,
        species,
        age,
        weight,
        vaccinations: [],
    };

    pets.push(newPet);
    addPetForm.reset();
    renderPetList();
});

// Thêm lịch tiêm phòng
addVaccinationForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const index = parseInt(document.getElementById("petIndex").value);
    const date = document.getElementById("vaccinationDate").value;

    if (pets[index]) {
        pets[index].vaccinations.push(date);
        renderPetList();
        addVaccinationForm.reset();
    } else {
        alert("Không tìm thấy thú cưng với chỉ số đã nhập.");
    }
});

// Hiển thị danh sách thú cưng
function renderPetList() {
    petListDiv.innerHTML = "";

    pets.forEach((pet, index) => {
        const card = document.createElement("div");
        card.className = "pet-card";

        card.innerHTML = `
      <h3>#${index} - ${pet.name} (${pet.species})</h3>
      <p>Age: ${pet.age} months</p>
      <p>Weight: ${pet.weight} kg</p>
      <div class="vaccination-list">
        <strong>Vaccinations:</strong>
        <ul>
          ${pet.vaccinations.map(date => `<li>${date}</li>`).join("") || "<li>None</li>"}
        </ul>
      </div>
      <div class="action-buttons">
        <button class="edit-btn" onclick="editPetName(${index})">Edit Name</button>
        <button class="delete-btn" onclick="deletePet(${index})">Delete</button>
      </div>
    `;

        petListDiv.appendChild(card);
    });
}

// Sửa tên thú cưng
function editPetName(index) {
    const newName = prompt("Enter new name:");
    if (newName) {
        pets[index].name = newName;
        renderPetList();
    }
}

// Xoá thú cưng
function deletePet(index) {
    if (confirm(`Delete pet "${pets[index].name}"?`)) {
        pets.splice(index, 1);
        renderPetList();
    }
}
