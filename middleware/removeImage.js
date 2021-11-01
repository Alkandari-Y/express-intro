const fs = require('fs');
const path = require('path');

const removeImage = (previousImage) => {
    const dir = __dirname.replace('middleware', 'media')
    const imageUrl = previousImage.split('/')
    const imageName = imageUrl[imageUrl.length - 1]
    const location = path.join(dir, imageName)
    try {
        fs.unlinkSync(location)
        console.log('Image Removed')
        return true
    } catch (err) {
        console.log(err)
    }
    next()
}

module.exports = removeImage