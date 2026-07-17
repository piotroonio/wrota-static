document.addEventListener(
    "DOMContentLoaded",
    async () => {

        const lista =
            document.getElementById(
                "terminy-list"
            );

        if (!lista) {
            return;
        }

        try {

            const response =
                await fetch(
                    "data/terminy.json"
                );

            const dane =
                await response.json();

            lista.innerHTML = "";

            dane.terminy.forEach(
                termin => {

                    const li =
                        document.createElement(
                            "li"
                        );

                    li.textContent =
                        termin.opis;

                    lista.appendChild(
                        li
                    );
                }
            );

        }
        catch (error) {

            lista.innerHTML =
                "<li>Nie udało się załadować terminów.</li>";

            console.error(error);

        }

    }
);