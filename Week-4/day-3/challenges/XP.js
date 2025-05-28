class Video {
    constructor(title , uploader , time){
        this.title = title
        this.uploader = uploader
        this.time = time
    }
    watch(){
        console.log(`${this.uploader} watched all ${this.time} of ${this.title}!`)
    }

}

let newVideo = new Video('how to find your purpose in life',"Mohammed Amouzoun",300)
let secondVideo = new Video('learn how to learn in the TIME of AI',"Mohammed Amouzoun",600)
newVideo.watch()
secondVideo.watch()

//Bonus
// array to stor data 


