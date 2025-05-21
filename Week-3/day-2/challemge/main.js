let sentence = "This dinner is not that bad ! You cook well"
    console.log(sentence)

    
    const word = "not";
    const indexNot = sentence.indexOf(word);
    const newSentence = sentence.substring(indexNot);
    console.log(newSentence); 


    const word2 = "bad";
    const indexBad = sentence.indexOf(word2);
    const newSentence2 = sentence.substring(indexBad);
    console.log(newSentence2); 


    if(indexBad > indexNot ){
        result = sentence.replace('not that bad' , 'good')
        console.log(result)
    }

    if(indexBad > indexNot || word2 != sentence){
        console.log(sentence)
    }
    

 



 