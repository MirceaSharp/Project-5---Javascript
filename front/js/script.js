


fetch("https://jsonplaceholder.typicode.com/users")
.then(res => {
  console.log(res.ok) // true
  console.log(res.status) // 200
  return res.json()
})

fetch("/back/models/Product.js")
  .then(res => res.json())
  .then(data => console.log(data))