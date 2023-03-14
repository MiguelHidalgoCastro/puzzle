
class App {

    constructor() {
        const div1 = document.getElementById('container1')
        const div2 = document.getElementById('container2')
        const rot = ['rot_0', 'rot_90', 'rot_180', 'rot_270']
        let imagenes = []
        let solucion = []

        let dato = {
            img: 'ignacio1.png',
            numPiezas: 4,
            margen: [437, 310]
        }

        const W = 3508;
        const H = 2480;
        const n = Math.sqrt(dato.numPiezas)
        const fila = parseInt(W / n)
        const col = parseInt(H / n)

        for (let i = 0; i < 4; i++) { //variable
            let divinterior1 = document.createElement('div')
            divinterior1.style.width = '200px'
            divinterior1.style.height = '200px'
            divinterior1.style.border = '1px solid black'
            divinterior1.style.float = 'left'
            let img = document.createElement('img')
            let f = i % n
            let c = parseInt(i / n)
            let x = c * fila
            let y = f * col
            img.src = `poc.php?img=${dato.img}&x=${x}&y=${y}&width=${W / Math.sqrt(dato.numPiezas)}&height=${H / Math.sqrt(dato.numPiezas)}`
            img.style.width = '200px'
            img.style.height = '200px'

            img.setAttribute('id', 'imagen' + i)

            img.addEventListener('click', () => {
                this.rotar(img, rot)
            })
            let random = parseInt(Math.random() * 4)
            console.log(random);
            img.setAttribute('class', rot[random])

            divinterior1.appendChild(img)
            imagenes.push(divinterior1)


        }

        imagenes.forEach(img => {
            div1.appendChild(img)

        });

        for (let i = 0; i < 4; i++) { // variable
            let divinterior2 = document.createElement('div')
            divinterior2.style.width = '200px'
            divinterior2.style.height = '200px'
            divinterior2.style.border = '1px solid red'
            divinterior2.style.float = 'left'
            divinterior2.setAttribute('id', 'div' + i)
            solucion.push(divinterior2)
        }

        solucion.forEach(element => {
            div2.appendChild(element)
        })



        div1.addEventListener('dragstart', e => {
            e.dataTransfer.setData('id', e.target.id)
            // console.log(e.target.id);
        })

        div1.addEventListener('dragover', e => {
            e.preventDefault()
            //console.log(e.dataTransfer)
        })

        div1.addEventListener('drop', e => {
            let id = e.dataTransfer.getData('id')
            e.target.appendChild(document.getElementById(id))
        })


        div2.addEventListener('dragstart', e => {
            e.dataTransfer.setData('id', e.target.id)
        })

        div2.addEventListener('dragover', e => {
            e.preventDefault()
        })

        div2.addEventListener('drop', e => {
            let id = e.dataTransfer.getData('id')
            e.target.appendChild(document.getElementById(id))
            this.comprobar(e.target)
        })

    }
    rotar(img, rot) {
        let clase = img.classList.item(0)
        //console.log(clase)
        let indice = rot.indexOf(clase)
        img.classList.remove(clase)
        img.classList.add(rot[(indice + 1) % 4])


    }

    comprobar(target) {
        console.log(target);
    }

}
new App()