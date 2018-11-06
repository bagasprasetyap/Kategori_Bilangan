// Kategori Bilangan

var hasil = []
var prima = []

var bilangan = (x) => {
    if (x % 1 == 0) {
        hasil.push('Bulat')
    }
    if (x => 0) {
        hasil.push('Cacah')
    }
    if (x < 0) {
        hasil.push('Negatif')
    }
    if (x == 0) {
        hasil.push('Nol')
    }
    if (x > 0) {
        hasil.push('Asli')
    }
    if (x > 0 && x% 2 == 0) {
        hasil.push('Genap')
    }
    if (x > 0 && x % 2 != 0) {
        hasil.push('Ganjil')
    } 
    if (x == 2 || x == 3) {
        hasil.push('Prima')
    } else if (x>3) {
        for (var i = 2; i < x; i++) {
            prima.push(x%i)
        }
        if (prima.includes(0) == true && x > 1) {
            hasil.push('Komposit')
        } else {
            hasil.push('Prima')
        }    
    }
    
    return hasil
}
console.log(bilangan(7))

