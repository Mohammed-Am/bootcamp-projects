  // Color palette
        const colors = [
            '#FF595E', '#FFCA3A', '#8AC926', '#1982C4', '#6A4C93', '#FFFFFF',
            '#000000', '#F7B801', '#EA3546', '#662E9B', '#43BCCD', '#B2B09B'
        ];

        // Create palette
        const palette = document.getElementById('palette');
        let selectedColor = colors[0];

        colors.forEach((color, idx) => {
            const swatch = document.createElement('div');
            swatch.className = 'color-swatch' + (idx === 0 ? ' selected' : '');
            swatch.style.background = color;
            swatch.addEventListener('click', () => {
                document.querySelectorAll('.color-swatch').forEach(s => s.classList.remove('selected'));
                swatch.classList.add('selected');
                selectedColor = color;
            });
            palette.appendChild(swatch);
        });

        // Create grid
        const grid = document.getElementById('grid');
        const gridSize = 16;
        let isDrawing = false;

        for (let i = 0; i < gridSize * gridSize; i++) {
            const cell = document.createElement('div');
            cell.className = 'cell';
            cell.addEventListener('mousedown', (e) => {
                isDrawing = true;
                cell.style.background = selectedColor;
            });
            cell.addEventListener('mouseover', (e) => {
                if (isDrawing) {
                    cell.style.background = selectedColor;
                }
            });
            cell.addEventListener('mouseup', () => {
                isDrawing = false;
            });
            grid.appendChild(cell);
        }

        // Handle mouseup outside grid
        document.body.addEventListener('mouseup', () => {
            isDrawing = false;
        });