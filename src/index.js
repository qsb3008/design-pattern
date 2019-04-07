function loadImg(src) {
  let promise = new Promise(function (resolve, resject) {
    let img = document.createElement('img')
    img.onload = function () {
      resolve(img)
    }
    img.onerror = function () {
      resject('图片加载失败')
    }
    img.src= src
  })
  return promise
}

let src = 'https://img2.mukewang.com/5a9fc8070001a82402060220-160-160.jpg'
let result = loadImg(src)

result.then(function (img) {
  document.body.appendChild(img)
  console.log(`width: ${img.width}`)
  return img
}).catch(function (ex) {
  console.log(ex, ' : ex')
})

