function convertToSlug(Text) {
    return Text
               .toLowerCase()
               .replace(/[^\w ]+/g, '')
               .replace(/ +/g, '-');
}
  
console.log(convertToSlug("hello world! It's a slug"))