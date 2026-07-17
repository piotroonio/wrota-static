document.addEventListener(
    'DOMContentLoaded',
    () => {

        const mapElement =
            document.getElementById('map');

        if (!mapElement) return;

        const map = L.map('map').setView(
            [51.114759, 17.042969],
            15
        );

        L.tileLayer(
            'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
            {
                attribution:
                    '&copy; OpenStreetMap'
            }
        ).addTo(map);

        L.marker(
            [51.114759, 17.042969]
        ).addTo(map);
    }
);