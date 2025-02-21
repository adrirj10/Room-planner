import interact from 'interactjs';
import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css';

document.addEventListener('DOMContentLoaded', () => {
    const lienzo = document.getElementById('lienzo');
    const botonCrear = document.getElementById('crear-rectangulo');
    const toggleEliminar = document.getElementById('modo-eliminar');

    toggleEliminar.addEventListener('click', (event) => {
        event.preventDefault();
        const botonesEliminar = document.querySelectorAll('.boton-eliminar');
        botonesEliminar.forEach(boton => {
            boton.style.display = boton.style.display === 'none' ? 'block' : 'none';
        });
        console.log('Toggle eliminar clicked');
    });

    botonCrear.addEventListener('click', () => {
        const ancho = parseInt(document.getElementById('ancho').value);
        const alto = parseInt(document.getElementById('alto').value);
        const color = document.getElementById('color').value;

        if (!ancho || !alto || ancho <= 0 || alto <= 0) {
            alert("Por favor, introduce valores válidos para el ancho y el alto.");
            return;
        }

        const rectangulo = document.createElement('div');
        rectangulo.className = 'rectangulo';
        rectangulo.style.width = `${ancho}px`;
        rectangulo.style.height = `${alto}px`;
        rectangulo.style.backgroundColor = color;
        rectangulo.style.left = `${Math.random() * (lienzo.offsetWidth - ancho)}px`;
        rectangulo.style.top = `${Math.random() * (lienzo.offsetHeight - alto)}px`;

        añadirBotonEliminar(rectangulo);
        añadirTooltip(rectangulo, ancho, alto);
        lienzo.appendChild(rectangulo);

        interact(rectangulo)
            .draggable({
                onmove: dragMoveListener
            })
            .resizable({
                edges: { right: true, bottom: true, bottomRight: true },
                listeners: {
                    move(event) {
                        const { target, rect, deltaRect } = event;
                        let x = (parseFloat(target.getAttribute('data-x')) || 0) + deltaRect.left;
                        let y = (parseFloat(target.getAttribute('data-y')) || 0) + deltaRect.top;

                        target.style.width = `${rect.width}px`;
                        target.style.height = `${rect.height}px`;

                        target.style.transform = `translate(${x}px, ${y}px)`;

                        target.setAttribute('data-x', x);
                        target.setAttribute('data-y', y);

                        if (target._tippy) {
                            target._tippy.setContent(`${Math.round(rect.width)} cm x ${Math.round(rect.height)} cm`);
                        }
                    }
                },
                margin: 5
            });
    });

    function dragMoveListener(event) {
        const target = event.target;
        const x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx;
        const y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

        target.style.transform = `translate(${x}px, ${y}px)`;

        target.setAttribute('data-x', x);
        target.setAttribute('data-y', y);
    }

    function añadirTooltip(elemento, ancho, alto) {
        tippy(elemento, {
            content: `${ancho} cm x ${alto} cm`,
            placement: 'top',
            arrow: true,
            theme: 'light',
            offset: [0, 5] // Offset the tooltip by a couple of pixels
        });
    }

    function añadirBotonEliminar(elemento) {
        const botonEliminar = document.createElement('div');
        botonEliminar.className = 'boton-eliminar';
        botonEliminar.textContent = 'X';
        botonEliminar.style.display = 'none';

        botonEliminar.addEventListener('click', () => {
            if (elemento._tippy) {
                elemento._tippy.destroy();
            }
            elemento.remove();
            console.log('Rectángulo eliminado');
        });

        elemento.appendChild(botonEliminar);
    }
});