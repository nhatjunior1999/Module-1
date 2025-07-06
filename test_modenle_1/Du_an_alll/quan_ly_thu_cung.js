class Pet {
    constructor(name, species, age, weight, vaccinated, vaccineName, vaccineDate, vaccineNote) {
        this.name = name;
        this.species = species;
        this.age = age;
        this.weight = weight;
        this.vaccinated = vaccinated;
        this.vaccineName = vaccineName;
        this.vaccineDate = vaccineDate;
        this.vaccineNote = vaccineNote;
    }
}

let pets = [];
let selectedPetIndex = null;

function addPet() {
    let name = document.getElementById("petName").value.trim();
    let species = document.getElementById("petSpecies").value.trim();
    let age = +document.getElementById("petAge").value.trim();
    let weight = +document.getElementById("petWeight").value.trim();
    let vaccinated = document.getElementById("petVaccine").value;
    let vaccineName = document.getElementById("vaccineName").value.trim();
    let vaccineDate = document.getElementById("vaccineDate").value;
    let vaccineNote = document.getElementById("vaccineNote").value.trim();
    if (!name || !age || !weight || !species) {
        alert("Please fill in Name, Species, Age and Weight ")
        return;
    }
    let pet = new Pet(name, species, age, weight, vaccinated, vaccineName, vaccineDate, vaccineNote);

    if (selectedPetIndex === null) {
        pets.push(pet);
    } else {
        pets[selectedPetIndex] = pet;
        selectedPetIndex = null;
    }

    clearForm();
    renderPets();

}







function renderPets(){
    let display = document.getElementById("petList");
    display.innerHTML="";
    if(pets.length === 0){
        display.innerHTML=`<p> No pets added yet! </p>`
        return;
    }
    let html = `<table border="1" cellspacing="0" cellpadding="8">
                    <tr>
                    <th>Name</th>
                    <th>Species</th>
                    <th>Age</th>
                    <th>weight</th>
                    <th>Vaccinated</th>
                    <th>Vaccine Name</th>
                    <th>Vaccine Date</th>
                    <th>Note</th>
                    <th>Actions</th>
</tr>
`
    for (let i = 0 ; i < pets.length ; i ++){
        let pet = pets[i]
        html += `<tr>
              <td>${i + 1}</td>      
              <td>${pet.name}</td>      
              <td>${pet.species}</td>      
              <td>${pet.age}</td>      
              <td>${pet.weight}</td>      
              <td>${pet.vaccinated}</td>      
              <td>${pet.vaccineName}</td>      
              <td>${pet.vaccineDate}</td>      
              <td>${pet.vaccineNote || "None"}</td>      
               <td>
               <button onclick="selectPet(${i})">Edit</button>
               <button onclick="deletePet(${i})">Delete</button>

                </td>                     
             </tr>   
`


    }

    html += `</table>`;
    display.innerHTML = html;


}
function deletePet(index) {
    if (index === undefined || index === null) {
        alert("Please select a pet to delete.");
        return;
    }

    let confirmDelete = confirm(`Are you sure you want to delete "${pets[index].name}"?`);
    if (!confirmDelete) return;

    pets.splice(index, 1);
    selectedPetIndex = null;
    clearForm();
    renderPets();
}

function selectPet(index) {
    let pet = pets[index];

    // Gán lại dữ liệu vào form
    document.getElementById("petName").value = pet.name;
    document.getElementById("petSpecies").value = pet.species;
    document.getElementById("petAge").value = pet.age;
    document.getElementById("petWeight").value = pet.weight;
    document.getElementById("petVaccine").value = pet.vaccinated;
    document.getElementById("vaccineName").value = pet.vaccineName;
    document.getElementById("vaccineDate").value = pet.vaccineDate;
    document.getElementById("vaccineNote").value = pet.vaccineNote;

    // Lưu lại vị trí đang được chọn
    selectedIndex = index;
}

// Xóa trắng form
function clearForm() {
    document.getElementById("petName").value = "";
    document.getElementById("petSpecies").value = "";
    document.getElementById("petAge").value = "";
    document.getElementById("petWeight").value = "";
    document.getElementById("petVaccine").value = "";
    document.getElementById("vaccineName").value = "";
    document.getElementById("vaccineDate").value = "";
    document.getElementById("vaccineNote").value = "";
}
renderPets()
deletePet()