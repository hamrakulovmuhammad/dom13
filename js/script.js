let tbody = document.querySelector('tbody')
let form = document.querySelector('form')
let inputName = document.querySelector('.names')
let inputAge = document.querySelector('.ages')
let bg = document.querySelector('.bg')
let model_name = document.querySelector('.model_name')
let form_edit = document.querySelector('.form_edit')
let back = document.querySelector('.back')


console.log(inputName);
let date = new Date
date = date.getFullYear()
let data = []

function reload(params) {
    let tr = document.createElement('tr')
    let num = document.createElement('td')
    let names = document.createElement('td')
    let year = document.createElement('td')
    let icons = document.createElement('td')
    let edit = document.createElement('img')
    let delet = document.createElement('img')

    tr.classList.add('tr')
    num.classList.add('num')
    names.classList.add('names')
    year.classList.add('year')
    icons.classList.add('icons')
    edit.classList.add('edit')
    delet.classList.add('delet')

    for (let item of data) {
        num.innerHTML = item.num
        names.innerHTML = item.name
        year.innerHTML = item.age
        edit.src = "img/edit.png"
        delet.src = "img/delete.png"

        tbody.append(tr)
        tr.append(num, names, year, icons)
        icons.append(edit, delet)

        edit.onclick = () => {
            bg.style.display = 'block'
        }

        back.onclick = () => {
            bg.style.display = 'none'
        }

        delet.onclick = () => {
            data = data.filter(el => el.id !== item.id)
            tr.remove()
        }
    }

}

form.onsubmit = (event) => {
    event.preventDefault();
    let list = {
        id: Math.floor(Math.random() * 100) + 1,
        num: data.length + 1,
        name: inputName.value,
        age: inputAge.value
    }

    if (inputName.value.length !== 0 && inputAge.value.length !== 0) {
        data.push(list)
    }
    reload()
}

let list
form_edit.onsubmit = (event) => {
    event.preventDefault();
    let list = {
        id: Math.floor(Math.random() * 100) + 1,
        num: data.length + 1,
        name: model_name.value,
    }
}
