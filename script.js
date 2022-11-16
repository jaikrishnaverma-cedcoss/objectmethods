let arr = []
function submitted(event) {
    if (event.id.value && event.name.value && event.price.value && event.quantity.value)
        arr.push({ id: event.id.value, name: event.name.value, price: event.price.value, quantity: parseInt(event.quantity.value) })
    else
        alert("fill all details.")
    console.log(arr)
    populate()
}
function populate() {
    document.getElementById('tbody').innerHTML = ''
    arr.map((x, i) => {
        document.getElementById('tbody').innerHTML += '<tr><td>' + x.id + '</td><td>' + x.name + '</td><td>' + x.price + '</td><td><div class="row flexAIC flexSA"><button class="p3 dbg brd" onclick="quantity(false,' + i + ')">-</button>' + x.quantity + '<button  class="p3 dbg brd" onclick="quantity(true,' + i + ')">+</button><div></td><td class="dbg center" onclick="deletor(' + i + ')">DELETE</td></tr>'
    })

}
function deletor(i) {
    arr.splice(parseInt(i), 1)
    populate()
}
function quantity(sign, i) {
    if (sign) {
        arr[i].quantity += 1
    } else {
        arr[i].quantity -= 1
    }
    populate()
}