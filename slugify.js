function convertToSlug(Text) {
    return Text
               .toLowerCase()
               .replace(/[^\w ]+/g, '')
               .replace(/ +/g, '-');
}


const textToSlug = "hello world! It's a slug number- ---123123123"
console.log(textToSlug)
console.log(convertToSlug(textToSlug))