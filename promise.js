const gioBatDauDi = 19;
const ConThoDiAn = function DiAn(times) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Gio bat dau di an la ${times}h \nCon tho an xong luc ${times+1}`)
        }, 1000);

    });
}

function coiPhim() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
            console.log('Con tho coi phim xong luc 22h');
        }, 2000);

    });
}

function Didao() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
            console.log('Con tho di dao xong luc 23h');
        }, 1000);

    });
}





ConThoDiAn(gioBatDauDi)
    .then((dian) => console.log(dian))
    .then(coiPhim)
    .then(Didao)