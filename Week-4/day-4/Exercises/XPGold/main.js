        let  firstName = document.getElementById('name')
        let lastName = document.getElementById('lastname')

        let form = document.getElementById('form')


        form.addEventListener('submit' , (e) =>{
            e.preventDefault();

            const firstNameValue = firstName.value;
            const lastNameValue = lastName.value;


            localStorage.setItem('first-name',firstNameValue)
            localStorage.setItem('last-name',lastNameValue)


            window.location.href = "index2.html"
        })