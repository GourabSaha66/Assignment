function submitForm() {
    const form = document.getElementById('surveyForm');
    if (form.checkValidity()) {
        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const dob = document.getElementById('dob').value;
        const country = document.getElementById('country').value;
        const gender = Array.from(document.getElementsByName('gender'))
            .filter(input => input.checked)
            .map(input => input.value);
        const profession = document.getElementById('profession').value;
        const email = document.getElementById('email').value;
        const mobile = document.getElementById('mobile').value;

        const details = {
            'First Name': firstName,
            'Last Name': lastName,
            'Date of Birth': dob,
            'Country': country,
            'Gender': gender.join(', '),
            'Profession': profession,
            'Email': email,
            'Mobile Number': mobile
        };

        displayPopup(details);
        form.reset();
    } else {
        alert('Please fill out all required fields.');
    }
}

function displayPopup(details) {
    const popup = document.getElementById('popup');
    const content = document.getElementById('popup-content');
    content.innerHTML = '';
    for (const [label, value] of Object.entries(details)) {
        const detailItem = document.createElement('p');
        detailItem.innerHTML = `<strong>${label}:</strong> ${value}`;
        content.appendChild(detailItem);
    }
    popup.style.display = 'block';
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}

function resetForm() {
    document.getElementById('surveyForm').reset();
}