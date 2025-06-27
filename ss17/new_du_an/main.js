// petManager.js

// Lớp quản lý danh sách thú cưng
class PetManager {
    constructor() {
        this.pets = []; // Mảng lưu các đối tượng Pet
        this.petId = 1; // ID tự tăng
        this.petListDiv = document.getElementById("petList");
        this.petSelect = document.getElementById("petSelect");
        this.initEvents();
    }

    // Khởi tạo sự kiện
    initEvents() {
        document.getElementById("addPetBtn").addEventListener("click", () => this.addPet());
        document.getElementById("addVaccineBtn").addEventListener("click", () => this.addVaccine());
    }

    // Thêm thú cưng mới
    addPet() {
        const name = document.getElementById("petName").value.trim();
        const species = document.getElementById("petSpecies").value.trim();
        const age = parseFloat(document.getElementById("petAge").value);
        const weight = parseFloat(document.getElementById("petWeight").value);

        if (!name || !species || isNaN(age) || isNaN(weight)) {
            alert("Please fill in all pet details correctly.");
            return;
        }

        const newPet = new Pet(this.petId++, name, species, age, weight);
        this.pets.push(newPet);

        this.renderPets();
        this.updatePetSelect();
        this.clearPetForm();
    }

    // Hiển thị danh sách thú cưng
    renderPets() {
        this.petListDiv.innerHTML = "";

        if (this.pets.length === 0) {
            this.petListDiv.innerHTML = '<div class="no-pets">No pets added yet.</div>';
            return;
        }

        this.pets.forEach(pet => {
            const div = document.createElement("div");
            div.className = "pet-item";
            div.innerHTML = `
                <h3>${pet.name}</h3>
                ${pet.getPetInfoHTML()}
                <div class="vaccine-list">
                    <h4>Vaccinations:</h4>
                    ${pet.getVaccinesHTML()}
                </div>
            `;
            this.petListDiv.appendChild(div);
        });
    }

    // Cập nhật danh sách chọn thú trong phần tiêm vaccine
    updatePetSelect() {
        this.petSelect.innerHTML = '<option value="">Choose a pet...</option>';
        this.pets.forEach(pet => {
            const option = document.createElement("option");
            option.value = pet.id;
            option.textContent = pet.name;
            this.petSelect.appendChild(option);
        });
    }

    // Thêm vaccine vào thú được chọn
    addVaccine() {
        const petId = parseInt(this.petSelect.value);
        const name = document.getElementById("vaccineName").value.trim();
        const date = document.getElementById("vaccineDate").value;
        const note = document.getElementById("vaccineNote").value.trim();

        if (!petId || !name || !date) {
            alert("Please select a pet and fill in vaccine name and date.");
            return;
        }

        const pet = this.pets.find(p => p.id === petId);
        if (!pet) return;

        pet.addVaccine({ name, date, note });
        this.renderPets();
        this.clearVaccineForm();
    }

    clearPetForm() {
        document.getElementById("petName").value = "";
        document.getElementById("petSpecies").value = "";
        document.getElementById("petAge").value = "";
        document.getElementById("petWeight").value = "";
    }

    clearVaccineForm() {
        document.getElementById("vaccineName").value = "";
        document.getElementById("vaccineDate").value = "";
        document.getElementById("vaccineNote").value = "";
    }
}
