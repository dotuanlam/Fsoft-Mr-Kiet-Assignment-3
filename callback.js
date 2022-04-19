const gioBatDauDi = 19;

function hanhDongCuaConTho(MocthoiGian) {
    setTimeout(() => {
        console.log(`con tho di an co luc ${MocthoiGian}h`);
        console.log(`con tho an xong luc ${MocthoiGian + 1}h`);
        setTimeout(() => {
            console.log(`con tho an xong luc ${MocthoiGian + 3}h`);
            setTimeout(() => {
                console.log(`con tho di dao luc ${MocthoiGian+4}h`);
            }, 1000);
        }, 2000);
    }, 1000);
}
hanhDongCuaConTho(gioBatDauDi)