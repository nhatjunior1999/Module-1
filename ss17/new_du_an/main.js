class Pet {
    constructor(name, species, age, weight) {
        this.id = Date.now() + Math.random();
        this.name = name;
        this.species = species;
        this.weight = weight;
        this.age = age;
        this.vaccines = [];
    }

    addVaccine(vaccine) {
        this.vaccines.push(vaccine);
    }

    updateInfo(newName, newAge, newSpecies, newWeight) {
        this.name = newName;
        this.age = newAge;
        this.species = newSpecies;
        this.weight = newWeight;
    }
}

class PetManager {
    constructor() {
        this.pets = [];
    }

    addPet(pet) {
        this.pets.push(pet);
    }

    deletePet(id) {
        for (let i = 0; i < this.pets.length; i++) {
            if (this.pets[i].id === id) {
                this.pets.splice(i, 1);
                break;
            }
        }
    }

    updatePet(id, newInfo) {
        for (let i = 0; i < this.pets.length; i++) {
            if (this.pets[i].id === id) {
                this.pets[i].updateInfo(
                    newInfo.name,
                    newInfo.age,
                    newInfo.species,
                    newInfo.weight
                );
                break;
            }
        }
    }

    getAllPets() {
        return this.pets;
    }
}

let manager = new PetManager();
let editingPetId = null;

document.getElementById("addPetBtn").addEventListener("click", () => {
    let name = document.getElementById("name").value;
    let species = document.getElementById("species").value;
    let age = parseInt(document.getElementById("age").value);
    let weight = parseFloat(document.getElementById("weight").value);

    let vaccineName = document.getElementById("vaccineName").value;
    let vaccineDate = document.getElementById("vaccineDate").value;
    if (editingPetId !== null) {

        manager.updatePet(editingPetId, {
            name: name,
            age: age,
            species: species,
            weight: weight
        });


        editingPetId = null;
        document.getElementById("addPetBtn").textContent = "Add Pet";
    } else {

        const newPet = new Pet(name, species, age, weight);


        if (vaccineName && vaccineDate) {
            const vaccine = {
                name: vaccineName,
                date: vaccineDate
            };
            newPet.addVaccine(vaccine);
        }


        manager.addPet(newPet);
    }


    displayPets();

    document.getElementById("name").value = "";
    document.getElementById("species").value = "";
    document.getElementById("age").value = "";
    document.getElementById("weight").value = "";
    document.getElementById("vaccineName").value = "";
    document.getElementById("vaccineDate").value = "";
});

function displayPets() {
    const tbody = document.querySelector("#petTable tbody");
    tbody.innerHTML = "";

    manager.getAllPets().forEach(pet => {
        const tr = document.createElement("tr");
        const vaccinesHTML = pet.vaccines.map(v => `${v.name} (${v.date})`).join("<br>") || "<i>No vaccine</i>";

        tr.innerHTML = `
          <td>${pet.name}</td>
          <td>${pet.species}</td>
          <td>${pet.age}</td>
          <td>${pet.weight}</td>
          <td>${vaccinesHTML}</td>
          <td>
            <button onclick="editPet(${pet.id})">edit</button>
            <button onclick="deletePet(${pet.id})">delete</button>
          </td>
        `;

        tbody.appendChild(tr);
    });
}

function deletePet(id) {
    manager.deletePet(id);
    displayPets();
}

function editPet(id) {
    const pet = manager.getAllPets().find(p => p.id === id);
    if (pet) {
        document.getElementById("name").value = pet.name;
        document.getElementById("species").value = pet.species;
        document.getElementById("age").value = pet.age;
        document.getElementById("weight").value = pet.weight;

        editingPetId = id;
        document.getElementById("addPetBtn").textContent = "Update Pet";
    }
}
