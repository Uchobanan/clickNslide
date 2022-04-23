window.onload = (function () {

    ilosc_klikniec = 0

    document.getElementById('batonik1').onclick = f_batonik1
    function f_batonik1() {
        p = 3
        przycinanie(p)
    }
    document.getElementById('batonik2').onclick = f_batonik2
    function f_batonik2() {
        p = 4
        przycinanie(p)
    }
    document.getElementById('batonik3').onclick = f_batonik3
    function f_batonik3() {
        p = 5
        przycinanie(p)
    }
    document.getElementById('batonik4').onclick = f_batonik4
    function f_batonik4() {
        p = 6
        przycinanie(p)
    }

    function przycinanie() {


        let parametry = {
            bok_divka: 600 / p,
            pozycja: 'absolute',
            nadanie_id: 0
        }

        ilosc_klikniec += 1
        if (ilosc_klikniec > 1) {
            document.body.removeChild(divcior)
            divcior.removeChild(divek)
        }
        divcior = document.createElement('div')
        divcior.classList.add('plansza_parent')
        document.body.appendChild(divcior)

        for (i = 0; i < p; i++) {
            for (j = 0; j < p; j++) {
                divek = document.createElement('div')
                if (i == p - 1 && j == p - 1) {
                    divek.style.width = parametry.bok_divka + 'px'
                    divek.style.height = parametry.bok_divka + 'px'
                    divek.style.position = parametry.pozycja
                    divek.style.left = parametry.bok_divka * j + 'px'
                    divek.style.top = parametry.bok_divka * i + 'px'

                    dane_left = divek.style.left
                    dane_top = divek.style.top
                    // console.log('pusty_left = ' + dane_left + ', pusty_top = ' + dane_top)



                    divek.style.backgroundImage = 'url("puste.png")'
                    divek.style.backgroundSize = parametry.bok_divka + 'px'

                    divek.classList.add('pustak')
                    divek.id = p * p - 1
                    chwycenie_pustaka = document.getElementsByClassName('pustak')
                    // console.log(chwycenie_pustaka)
                }
                else {
                    divek.classList.add('plansza')
                    divek.style.width = parametry.bok_divka + 'px'
                    divek.style.height = parametry.bok_divka + 'px'
                    divek.style.position = parametry.pozycja
                    divek.style.left = parametry.bok_divka * j + 'px'
                    divek.style.top = parametry.bok_divka * i + 'px'

                    dane_left = divek.style.left
                    dane_top = divek.style.top

                    // divek.style.border = '1px solid black'
                    divek.style.backgroundPosition = -parametry.bok_divka * j + 'px' + ' ' + -parametry.bok_divka * i + 'px'
                    divek.id = parametry.nadanie_id
                    parametry.nadanie_id += 1
                }
                divcior.appendChild(divek)
            }
        }

        // losowanie_nowej_pozycji
        interwal = setInterval(nazwa_funkcji, 7)
        interwal_i = 0
        function nazwa_funkcji() {

            console.log(interwal_i)
            interwal_i++
            tab = document.getElementsByClassName('plansza')
            if (interwal_i >= p * p * 10) {
                console.log('zakończenie interwału')
                clearInterval(interwal)
            }
            var kierunek = Math.floor(Math.random() * 4) //0 - lewo, 1 - góra, 2 - prawo, 3 - dół
            switch (kierunek) {
                case 0:
                    if (chwycenie_pustaka[0].style.left != '0px') {
                        for (var j = 0; j < tab.length; j++) {
                            if (tab[j].style.left == parseInt(chwycenie_pustaka[0].style.left) - parametry.bok_divka + 'px') {
                                if (tab[j].style.top == parseInt(chwycenie_pustaka[0].style.top) + 'px') {
                                    zmiana_top_left_obrazek(j)
                                }
                            }
                        }
                    }
                    else {
                    }
                    break
                case 1:
                    if (chwycenie_pustaka[0].style.top != '0px') {
                        for (var j = 0; j < tab.length; j++) {
                            if (tab[j].style.top == parseInt(chwycenie_pustaka[0].style.top) - parametry.bok_divka + 'px') {
                                if (tab[j].style.left == parseInt(chwycenie_pustaka[0].style.left) + 'px') {

                                    zmiana_top_left_obrazek(j)
                                }
                            }
                        }
                    }
                    else {
                    }
                    break
                case 2:

                    if (chwycenie_pustaka[0].style.left != 600 - parametry.bok_divka + 'px') {
                        for (var j = 0; j < tab.length; j++) {
                            if (tab[j].style.left == parseInt(chwycenie_pustaka[0].style.left) + parametry.bok_divka + 'px') {
                                if (tab[j].style.top == parseInt(chwycenie_pustaka[0].style.top) + 'px') {
                                    zmiana_top_left_obrazek(j)
                                }
                            }
                        }
                    }
                    else {
                    }
                    break
                case 3:
                    if (chwycenie_pustaka[0].style.top != 600 - parametry.bok_divka + 'px') {
                        for (var j = 0; j < tab.length; j++) {
                            if (tab[j].style.top == parseInt(chwycenie_pustaka[0].style.top) + parametry.bok_divka + 'px') {
                                if (tab[j].style.left == parseInt(chwycenie_pustaka[0].style.left) + 'px') {
                                    // console.log(tab[j])
                                    zmiana_top_left_obrazek(j)
                                }
                            }
                        }
                    }
                    else {
                    }
                    break
            }
        }
    }

    function sasiad_pustaka() {
        if (kierunek == 1 || kierunek == 3) {

            for (j = 0; j < tab.length; j++) {
                console.log(chwycenie_pustaka[0].style.left)
                if (tab[j].style.top == parseInt(chwycenie_pustaka[0].style.top) - parametry.bok_divka + 'px') {
                    if (tab[j].style.left == parseInt(chwycenie_pustaka[0].style.left) + 'px')
                        console.log(tab[j])
                }
            }
        }

        for (j = 0; j < tab.length; j++) {
            console.log(chwycenie_pustaka[0].style.left)
            if (tab[j].style.left == parseInt(chwycenie_pustaka[0].style.left) - parametry.bok_divka + 'px') {
                if (tab[j].style.top == parseInt(chwycenie_pustaka[0].style.top) + 'px')
                    console.log(tab[j])
            }
        }
    }


    this.onclick = function przesuwanie(e) {
        let parametry = {
            bok_divka: 600 / p
        }
        if (e.target.tagName == 'DIV') {

            if (e.target.style.top == chwycenie_pustaka[0].style.top && parseInt(e.target.style.left) == parseInt(chwycenie_pustaka[0].style.left) - parametry.bok_divka) {
                zmiana_top_left_pustak(e)
            }
            else if (e.target.style.top == chwycenie_pustaka[0].style.top && parseInt(e.target.style.left) == parseInt(chwycenie_pustaka[0].style.left) + parametry.bok_divka) {
                zmiana_top_left_pustak(e)
            }
            else if (e.target.style.left == chwycenie_pustaka[0].style.left && parseInt(e.target.style.top) == parseInt(chwycenie_pustaka[0].style.top) - parametry.bok_divka) {
                zmiana_top_left_pustak(e)
            }
            else if (e.target.style.left == chwycenie_pustaka[0].style.left && parseInt(e.target.style.top) == parseInt(chwycenie_pustaka[0].style.top) + parametry.bok_divka) {
                zmiana_top_left_pustak(e)
            }
        }

    }


    function zmiana_top_left_pustak(e) {

        left_pustaka = chwycenie_pustaka[0].style.left
        chwycenie_pustaka[0].style.left = e.target.style.left
        e.target.style.left = left_pustaka

        top_pustaka = chwycenie_pustaka[0].style.top
        chwycenie_pustaka[0].style.top = e.target.style.top
        e.target.style.top = top_pustaka

        // let parametry = {
        //     bok_divka: 600 / p
        // }
        // for (i = 0; i <= p; i++) {
        //     for (j = 0; j <= p; j++) {
        //         wycinek = document.getElementById(i)
        //         if (wycinek.id == i) {
        //             if (wycinek.style.left == parametry.bok_divka * j + 'px' && wycinek.style.top == parametry.bok_divka * i + 'px') {
        //                 console.log(parametry.bok_divka)
        //                 console.log('id' + i + j + ' = git')
        //             }
        //         }
        //     }
        // }
    }


    function zmiana_top_left_obrazek(j) {
        left_pustaka = chwycenie_pustaka[0].style.left
        chwycenie_pustaka[0].style.left = tab[j].style.left
        tab[j].style.left = left_pustaka

        top_pustaka = chwycenie_pustaka[0].style.top
        chwycenie_pustaka[0].style.top = tab[j].style.top
        tab[j].style.top = top_pustaka
    }

    // console.log(document.body.querySelector('.plansza_parent'))
    // console.log(document.getElementsByClassName('plansza_parent'))
    // console.log(document.getElementsByClassName('plansza_parent:first-child')) SPYTAĆ SIĘ KOGOŚ O CO CHODZI
})