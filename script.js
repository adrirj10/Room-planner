document.addEventListener('DOMContentLoaded', () => {
    const lienzo = document.getElementById('lienzo');
    const botonCrear = document.getElementById('crear-rectangulo');
    const toggleEliminar = document.getElementById('modo-eliminar');
    const botonGuardar = document.getElementById('guardar-lienzo');
    const botonCargar = document.getElementById('cargar-lienzo');

    let redimensionando = false;

    toggleEliminar.addEventListener('click', (event) => {
        event.preventDefault();  // Evitar cualquier comportamiento por defecto, como recargar la página

        const botonesEliminar = document.querySelectorAll('.boton-eliminar');
        botonesEliminar.forEach(boton => {
            // Alternar visibilidad de los botones de eliminación
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

        // Posición inicial aleatoria
        rectangulo.style.left = `${Math.random() * (lienzo.offsetWidth - ancho)}px`;
        rectangulo.style.top = `${Math.random() * (lienzo.offsetHeight - alto)}px`;

        // Añadir botón de eliminación
        añadirBotonEliminar(rectangulo);

        // Hacer que el rectángulo sea arrastrable
        hacerArrastrable(rectangulo);

        // Añadir funcionalidad para mostrar medidas en "cm"
        añadirTooltip(rectangulo, ancho, alto);

        // Hacer que el rectángulo sea redimensionable
        hacerRedimensionable(rectangulo);

        lienzo.appendChild(rectangulo);
        console.log('Rectángulo creado:', { ancho, alto, color });
    });

    botonGuardar.addEventListener('click', () => {
        const rectangulos = document.querySelectorAll('.rectangulo');
        const data = Array.from(rectangulos).map(rect => ({
            width: rect.style.width,
            height: rect.style.height,
            backgroundColor: rect.style.backgroundColor,
            left: rect.style.left,
            top: rect.style.top
        }));
        localStorage.setItem('lienzo', JSON.stringify(data));
        alert('Estado del lienzo guardado.');
        console.log('Estado del lienzo guardado:', data);
    });

    botonCargar.addEventListener('click', () => {
        const data = JSON.parse(localStorage.getItem('lienzo'));
        if (!data) {
            alert('No hay datos guardados.');
            return;
        }
        lienzo.innerHTML = '';
        data.forEach(item => {
            const rectangulo = document.createElement('div');
            rectangulo.className = 'rectangulo';
            rectangulo.style.width = item.width;
            rectangulo.style.height = item.height;
            rectangulo.style.backgroundColor = item.backgroundColor;
            rectangulo.style.left = item.left;
            rectangulo.style.top = item.top;

            añadirBotonEliminar(rectangulo);
            hacerArrastrable(rectangulo);
            añadirTooltip(rectangulo, parseInt(item.width), parseInt(item.height));
            hacerRedimensionable(rectangulo);

            lienzo.appendChild(rectangulo);
        });
        alert('Estado del lienzo cargado.');
        console.log('Estado del lienzo cargado:', data);
    });

    function hacerArrastrable(elemento) {
        let offsetX = 0;
        let offsetY = 0;
        let arrastrando = false;

        elemento.addEventListener('mousedown', (e) => {
            if (e.target.classList.contains('boton-eliminar')) return; // Evitar arrastrar si se hace clic en la "X"
            arrastrando = true;
            offsetX = e.clientX - elemento.offsetLeft;
            offsetY = e.clientY - elemento.offsetTop;
            elemento.style.cursor = 'grabbing';
            console.log('Arrastrar iniciado');
        });

        document.addEventListener('mousemove', (e) => {
            if (!arrastrando || redimensionando) return;
            let x = e.clientX - offsetX;
            let y = e.clientY - offsetY;

            // Restringir los movimientos al área del lienzo
            const maxX = lienzo.offsetWidth - elemento.offsetWidth;
            const maxY = lienzo.offsetHeight - elemento.offsetHeight;
            x = Math.max(0, Math.min(x, maxX));
            y = Math.max(0, Math.min(y, maxY));

            elemento.style.left = `${x}px`;
            elemento.style.top = `${y}px`;
            console.log('Arrastrando:', { x, y });
        });

        document.addEventListener('mouseup', () => {
            arrastrando = false;
            elemento.style.cursor = 'grab';
            console.log('Arrastrar terminado');
        });
    }

    function hacerRedimensionable(elemento) {
        const resizer = document.createElement('div');
        resizer.className = 'resizer';
        elemento.appendChild(resizer);

        resizer.addEventListener('mousedown', (e) => {
            e.preventDefault();
            redimensionando = true;
            document.addEventListener('mousemove', resize);
            document.addEventListener('mouseup', stopResize);
            console.log('Redimensionar iniciado');
        });

        function resize(e) {
            const rect = elemento.getBoundingClientRect();
            const newWidth = e.clientX - rect.left;
            const newHeight = e.clientY - rect.top;

            if (newWidth > 0) {
                elemento.style.width = `${newWidth}px`;
            }
            if (newHeight > 0) {
                elemento.style.height = `${newHeight}px`;
            }

            console.log('Redimensionando:', { width: elemento.style.width, height: elemento.style.height });
        }

        function stopResize() {
            redimensionando = false;
            document.removeEventListener('mousemove', resize);
            document.removeEventListener('mouseup', stopResize);
            console.log('Redimensionar terminado');
        }
    }

    function añadirTooltip(elemento, ancho, alto) {
        const tooltip = document.createElement('div');
        tooltip.className = 'tooltip';
        tooltip.textContent = `${ancho} cm x ${alto} cm`;
        tooltip.style.display = 'none';
        document.body.appendChild(tooltip);

        elemento.addEventListener('mouseenter', (e) => {
            tooltip.style.display = 'block';
            tooltip.style.left = `${e.pageX + 10}px`;
            tooltip.style.top = `${e.pageY + 10}px`;
            console.log('Tooltip mostrado');
        });

        elemento.addEventListener('mousemove', (e) => {
            tooltip.style.left = `${e.pageX + 10}px`;
            tooltip.style.top = `${e.pageY + 10}px`;
            console.log('Tooltip movido');
        });

        elemento.addEventListener('mouseleave', () => {
            tooltip.style.display = 'none';
            console.log('Tooltip ocultado');
        });

        // Guardar una referencia al tooltip dentro del rectángulo para eliminarlo luego
        elemento.tooltip = tooltip;
    }

    function añadirBotonEliminar(elemento) {
        const botonEliminar = document.createElement('div');
        botonEliminar.className = 'boton-eliminar';
        botonEliminar.textContent = 'X';
        botonEliminar.style.display = 'none'; // Ocultar por defecto

        botonEliminar.addEventListener('click', () => {
            // Eliminar el rectángulo y el tooltip asociado
            if (elemento.tooltip) {
                elemento.tooltip.remove();  // Eliminar el tooltip
            }
            elemento.remove();  // Eliminar el rectángulo
            console.log('Rectángulo eliminado');
        });

        elemento.appendChild(botonEliminar);
    }
});
