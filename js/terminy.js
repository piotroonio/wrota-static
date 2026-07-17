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

                    let html =
                        `<span class="termin-data">${termin.opis}</span>`;

                    if (
                        termin.uwaga &&
                        termin.uwaga.trim() !== ""
                    ) {

                        html += `
                            <div class="termin-uwaga">
                                ${termin.uwaga}
                            </div>
                        `;
                    }

                    li.innerHTML = html;

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