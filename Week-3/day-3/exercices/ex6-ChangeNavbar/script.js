//1

const div = document.getElementById('navBar')

div.setAttribute("id","socialNetworkNavigation")


let li = document.createElement('li');

let text = document.createTextNode('Logout')

li.appendChild(text)



const ul = div.querySelector('ul');
ul.appendChild(li);

const firstLi = ul.firstElementChild;
const lastLi = ul.lastElementChild;

console.log(firstLi.textContent);
console.log(lastLi.textContent);


//7

const allBooks = [
    {
        title: "Learning How to Learn",
        author: "Barbara Oakley",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_zG90vTi40_cOPXLFFGlew_5lQFKbvPPkiPzlKxU1iGmgp_3s",
        alreadyRead: true
    },
    {
        title: "HarryPotter ",
        author: "JKRolling",
        image: "https://m.media-amazon.com/images/I/91wKDODkgWL._AC_UF1000,1000_QL80_DpWeblab_.jpg",
        alreadyRead: false
    }
];

const container = document.querySelector(".listBooks")

allBooks.forEach(book => {
    const bookDiv = document.createElement('div');

    const bookInfo = document.createElement('p');



    bookInfo.textContent = `${book.title} written by ${book.author}`;


    if (book.alreadyRead) {
        bookInfo.style.color = 'red';
    }

    const bookImg = document.createElement('img');


    bookImg.src = book.image;
    bookImg.style.width = '100px';

    bookDiv.appendChild(bookInfo);
    
    bookDiv.appendChild(bookImg);

    container.appendChild(bookDiv);
});
