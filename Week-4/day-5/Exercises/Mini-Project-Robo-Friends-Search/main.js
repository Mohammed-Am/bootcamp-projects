      const robots = [
          {
            id: 1,
            name: 'Leanne Graham',
            username: 'Bret',
            email: 'Sincere@april.biz',
            image: 'https://robohash.org/1?200x200'
          },
          {
            id: 2,
            name: 'Ervin Howell',
            username: 'Antonette',
            email: 'Shanna@melissa.tv',
            image: 'https://robohash.org/2?200x200'
          },
          {
            id: 3,
            name: 'Clementine Bauch',
            username: 'Samantha',
            email: 'Nathan@yesenia.net',
            image: 'https://robohash.org/3?200x200'
          },
          {
            id: 4,
            name: 'Patricia Lebsack',
            username: 'Karianne',
            email: 'Julianne.OConner@kory.org',
            image: 'https://robohash.org/4?200x200'
          },
          {
            id: 5,
            name: 'Chelsey Dietrich',
            username: 'Kamren',
            email: 'Lucio_Hettinger@annie.ca',
            image: 'https://robohash.org/5?200x200'
          },
          {
            id: 6,
            name: 'Mrs. Dennis Schulist',
            username: 'Leopoldo_Corkery',
            email: 'Karley_Dach@jasper.info',
            image: 'https://robohash.org/6?200x200'
          },
          {
            id: 7,
            name: 'Kurtis Weissnat',
            username: 'Elwyn.Skiles',
            email: 'Telly.Hoeger@billy.biz',
            image: 'https://robohash.org/7?200x200'
          },
          {
            id: 8,
            name: 'Nicholas Runolfsdottir V',
            username: 'Maxime_Nienow',
            email: 'Sherwood@rosamond.me',
            image: 'https://robohash.org/8?200x200'
          },
          {
            id: 9,
            name: 'Glenna Reichert',
            username: 'Delphine',
            email: 'Chaim_McDermott@dana.io',
            image:'https://robohash.org/9?200x200'
          },
          {
            id: 10,
            name: 'Clementina DuBuque',
            username: 'Moriah.Stanton',
            email: 'Rey.Padberg@karina.biz',
            image:'https://robohash.org/10?200x200'
          }
          ];

          

let root = document.getElementById('root');
let input_search = document.getElementById('search-robot')

/*
   
robots.forEach(robot => {


      let cards = document.createElement('div')
          cards.className = 'card';
         cards.innerHTML += `  
                            <div>
                                    <div>
                                        <img src="${robot.image}" alt="">
                                    </div>
                                    <div>
                                        <h3>${robot.username}</h3>
                                        <p>${robot.email}</p>
                                    </div>
                            </div>
                        `
             
          root.appendChild(cards)             

    })
*/



function dispalyUser(robotArray){
        root.innerHTML = ''; // Clear existing content
            robotArray.forEach(robot => {
                const card = document.createElement('div');
                card.className = 'card'; // Set class directly
                card.innerHTML = `
                    <div>
                        <img src="${robot.image}" alt="${robot.name}">
                    </div>
                    <div>
                        <h3>${robot.name}</h3>
                        <p>${robot.email}</p>
                    </div>
                `;
                root.appendChild(card);
            });
}
dispalyUser(robots);
  

  input_search.addEventListener('input' , (e) =>{
         const serchType = e.target.value.toLowerCase();
         const filteredRobots = robots.filter(robot => 
            robot.username.toLowerCase().includes(serchType) ||
            robot.email.toLowerCase().includes(serchType) ||
            robot.name.toLowerCase().includes(serchType)
         );
         
         dispalyUser(filteredRobots)


  })  



    

                        

        
        
                   