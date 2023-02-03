function todo(){
    let u = document.getElementById("u")
    let elem = document.querySelector('input').value
    let new_elem_li = document.createElement('li')
    new_elem_li.innerHTML = `${elem}`
    u.append(new_elem_li)

}