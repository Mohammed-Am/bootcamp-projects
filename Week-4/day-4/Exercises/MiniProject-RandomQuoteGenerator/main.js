let quotes = [
        {
            id : 0,
            author: 'Tahar Ben Jelloun',
            quote:'The power of the word in Morocco beloged to men and to the authorities. No one asked the point of view of poor people or women'
        },
        {
            id : 1,
            author: 'AMouzoun',
            quote:'JS ou Madir'
        },
        {
            id : 2,
            author: 'AMouzoun',
            quote:'diha frasek'
        },
        {
            id : 3,
            author: 'King Hassan II',
            quote:"I wish Casablanca to be endowed with a large, fine building of witch it can be proud until the end of time. I want to build this mosque on the water, because God's throne is on the water"
        }

];



let btn = document.getElementById('btn')
let section  = document.querySelector('section')
let currentIndex = 0;



btn.addEventListener('click', (e) => {
  e.preventDefault();
  section.innerHTML = '';
  const { quote, author } = quotes[currentIndex];
  const p = document.createElement('p');
  p.textContent = `${quote} — ${author}`;
  section.appendChild(p);
  currentIndex = (currentIndex + 1) % quotes.length; // Loop back to 0
});