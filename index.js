// Получаем значения таблицы и проверяем их на корректность ввода
function rzone() {
    let ush1, ush2, ush3, uh1, uh2, uh3, u11, u21, u12, u22, u13, u23;
    ush1 = parseInt(document.getElementById("ucsh1").value); 
    ush2 = parseInt(document.getElementById("ucsh2").value);
    ush3 = parseInt(document.getElementById("ucsh3").value);
    uh1 = parseInt(document.getElementById("ush1").value);
    uh2 = parseInt(document.getElementById("ush2").value);
    uh3 = parseInt(document.getElementById("ush3").value);
    u11 = parseInt(document.getElementById("u11").value);
    u21 = parseInt(document.getElementById("u21").value);
    u12 = parseInt(document.getElementById("u12").value);
    u22 = parseInt(document.getElementById("u22").value);
    u13 = parseInt(document.getElementById("u13").value);
    u23 = parseInt(document.getElementById("u23").value); 
    if (isNaN(ush1) || isNaN(ush2) || isNaN(ush3) || isNaN(uh1) || isNaN(uh2) || isNaN(uh3) || isNaN(u11) || isNaN(u12) ||isNaN(u13) || isNaN(u21) || isNaN(u22) || isNaN(u23)){
        alert("Ошибка ввода");
    } else {
        let ci1 = calcUci(ush1, uh1);
        let ci2 = calcUci(ush2, uh2);
        let ci3 = calcUci(ush3, uh3);
        document.getElementById('uc1').innerText = ci1.toFixed(2); 
        document.getElementById('uc2').innerText = ci2.toFixed(2); 
        document.getElementById('uc3').innerText = ci3.toFixed(2); 
        
        // Вычисляем Пi
        let calcpi = (ci, ch) => ci - ch;
        let pi1 = calcpi(ci1, uh1);
        let pi2 = calcpi(ci2, uh2);
        let pi3 = calcpi(ci3, uh3);

        // Вычисляем Ki
        let ki1 = calcki(u11, u21);
        let ki2 = calcki(u12, u22);
        let ki3 = calcki(u13, u23);
        document.getElementById('k1').innerText = ki1.toFixed(2); 
        document.getElementById('k2').innerText = ki2.toFixed(2); 
        document.getElementById('k3').innerText = ki3.toFixed(2);

        // Рассчитаем R
        let calcr = (pi, ki) => (pi + 10)/ki;
        let ri1 = calcr(pi1, ki1);   
        let ri2 = calcr(pi2, ki2);
        let ri3 = calcr(pi3, ki3);
        document.getElementById('r1').innerText = ri1.toFixed(2); 
        document.getElementById('r2').innerText = ri2.toFixed(2); 
        document.getElementById('r3').innerText = ri3.toFixed(2);

        // Итог
        let maxr = Math.max(ri1, ri2, ri3);
        kzr = parseFloat(document.getElementById('kz').value.replace(",",'.'));
        if (isNaN(kzr)){
            alert("Введите расстояние до границы");
        } else {
            if (kzr > maxr) {
                document.getElementById("rezult").innerText = "Защищено";
                document.getElementById("rezult").style.backgroundColor = 'green';
            } else {
                document.getElementById("rezult").innerText = "Необходимы дополнительные меры";
                document.getElementById("rezult").style.backgroundColor = 'red';
            }
        }

    }
}

// Рассчитали Uci
function calcUci(ucsh, ush) {
    let ci;
    ci = 20*(Math.log10(Math.sqrt((10**(ucsh/10)) - (10**(ush/10)))));
    return ci;
}

// Вычисляем Ki
function calcki(u1, u2) {
    l = parseFloat(document.getElementById('l').value.replace(",",'.'));
    if (isNaN(l)){
        alert("Введите расстояние L");
    } else {
        let k = ((u1 - u2)/l);
        return k;
    }
}
