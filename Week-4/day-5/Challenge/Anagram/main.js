function anagram(str1 , str2){
    if (!str1 || !str2) {
          console.log('Please enter both words')
    return;
  }
   const formattedW1 = str1
        .toLowerCase()
        .replace(/\s/g, '') 
        .split('')
        .sort()
        .join('');

    const formattedW2 = str2
           .toLowerCase()
            .replace(/\s/g, '') 
            .split('')
            .sort()
            .join('');

  if (formattedW1 === formattedW2) {
    console.log(`${str1} is an angram of ${str2}`)
  } else {
    console.log(`${str1} is not angram of ${str2}`)
  }

}


anagram("Astronomer","Moon starer")

