function getAllInstitutions() {
    fetch('/educational-institutions/all')
        .then(response => response.json())
        .then(data => {
            const list = document.getElementById('institutionsList');
            list.innerHTML = '';
            data.forEach(institution => {
                const listItem = document.createElement('li');
                listItem.textContent = `${institution.nameOfTheInstitution} - ${institution.address}`;
                list.appendChild(listItem);
            });
        })
        .catch(error => console.error('Error:', error));
}

function addInstitution(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = {
        nameOfTheInstitution: formData.get('nameOfTheInstitution'),
        address: formData.get('address')
    };

    fetch('/educational-institutions/add', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(() => {
        getAllInstitutions();
        event.target.reset();
    })
    .catch(error => console.error('Error:', error));
}

function deleteInstitution(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = {
        id: formData.get('id')
    };

    fetch('/educational-institutions/delete', {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(() => {
        getAllInstitutions();
        event.target.reset();
    })
    .catch(error => console.error('Error:', error));
}

document.getElementById('addForm').addEventListener('submit', addInstitution);
document.getElementById('deleteForm').addEventListener('submit', deleteInstitution);

getAllInstitutions();