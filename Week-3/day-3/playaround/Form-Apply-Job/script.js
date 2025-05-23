const form = document.querySelector('form')
document.getElementById('preview').style.display  = "none";



function doThis(e){

    e.preventDefault();

    const formData = new FormData(form);

    for(item of formData) {
        console.log(item[0], item[1])
    }




document.getElementById('preview').style.display  = "";

}


