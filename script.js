let existing_id = null;

function showData() {
    let contact_data = JSON.parse(localStorage.getItem('contacts')) || [];
    let query = document.getElementById('queryBox').value;

    let filtered_data = contact_data.filter(contact => {
        return contact.name.includes(query) || contact.phone.includes(query);
    });

    let all_data = "";
    filtered_data.forEach(contact => {
        all_data +=
            `<div class = "data" id = "contactInfo">
                Name: ${contact.name} <br> 
                Phone: ${contact.phone} <br> 
                Email: ${contact.email} <br> 
                Address: ${contact.address} <br><br>
                <div class = "Buttons">
                    <button class = "editButton" onclick = "edit('${contact.id}')"> Edit </button>
                    <button class = "deleteButton" onclick = "dlt('${contact.id}')"> Delete </button>
                </div>
            </div>`
    });
    document.getElementById('showData').innerHTML = all_data;
};

const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', function (event) {
    let contact_data = JSON.parse(localStorage.getItem('contacts')) || [];
    event.preventDefault();

    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;
    if (existing_id) {
        const index = contact_data.findIndex(contact => contact.id == existing_id);
        if (index !== -1) {
            contact_data[index] = { id: existing_id, name, phone, email, address };
        }
    }
    else {
        const new_id = contact_data.length + 1;
        contact_data.push({ id: new_id, name, phone, email, address });
    }
    localStorage.setItem('contacts', JSON.stringify(contact_data));
    contactForm.reset();
    existing_id = null;
    showData();
});

function dlt(user_id) {
    let user_data = JSON.parse(localStorage.getItem('contacts'));
    user_data = user_data.filter(contact => contact.id != user_id);
    localStorage.setItem('contacts', JSON.stringify(user_data));
    showData();
}

function edit(user_id) {
    let user_data = JSON.parse(localStorage.getItem('contacts'));
    let contact = user_data.find(contact => contact.id == user_id);
    if (contact) {
        existing_id = user_id;
        document.getElementById('name').value = contact.name;
        document.getElementById('phone').value = contact.phone;
        document.getElementById('email').value = contact.email;
        document.getElementById('address').value = contact.address;
    }
}

showData();