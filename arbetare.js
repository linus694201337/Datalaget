const arbetareData = [
        { namn: "Anton Kronqvist", datum: "28/03 2026 -"},
        { namn: "Linus Wohrne", datum: "14/12 2025 -"},
        { namn: "Kasper Wieser", datum: "14/12 2025 -"},
        { namn: "Emma Edh", datum: "14/12 2025 -"},
        { namn: "Erik ”Bosse” Boson", datum: "04/04 2019 -", roll: "LC: 2019 -", gamling : true },
        { namn: "Gustav ”Militär” Törnqvist", datum: "02/09 2022 -", roll: "VLC" },
        { namn: "Jesper", datum: "06/12 2023 -", gamling : true },
        { namn: "Ture Bergqvist", datum: "06/12 2023 -" },
        { namn: "Gustav Juul", datum: "06/12 2023 -" },
        { namn: "Gustav ”Ryan” Hammarström", datum: "06/12 2023 -" },
        { namn: "Gustav ”Gurkan” Lundström", datum: "14/01 2023 -", gamling : true },
        { namn: "Gustav ”Svep” Järnum", datum: "04/06 2022 -", gamling : true },
        { namn: "Edvin ”MrMr” Norrman", datum: "18/12 2021 -", gamling : true },
        { namn: "Hampus ”Gustav Kempinem” Kämppi", datum: "06/11 2021 -", gamling : true },
        { namn: "Leo ”kexet” Man", datum: "30/10 2021 -", gamling : true },
        { namn: "Felicia ”Flipp” Katmuk", datum: "10/10 2021 -", roll: "vLC: 2022 -", gamling : true },
        { namn: "Gustav ”Gurra” Segerlind", datum: "08/06 2019 -", gamling : true },
        { namn: "Gustav ”rosa” Pantén", datum: "25/03 2023 -", gamling : true },
        { namn: "Elin ”Lilul” Lindberg", datum: "01/02 2016 - 04/06 2022", roll: "LC: 2017 - 2018 vLC: 2016 - 2017" },
        { namn: "Isak ”Eke” Ekman", datum: "10/12 2018 - 04/06 2022",  },
        { namn: "Marcus ”∬” Songsong", datum: "27/02 2018 - 18/12 2021" },
        { namn: "Mathias ”Tapa” Tapani", datum: "16/12 2017 - 18/12 2021" },
        { namn: "Oscar ”Bossbar” ”Boppe” Rosberg", datum: "16/12 2017 -", gamling : true },
        { namn: "Linus ”Lanken” Landström", datum: "16/12 2017 -", roll: "vLC: 2018 - 2020", gamling : true },
        { namn: "Fredrik ”fkboi” Pettersson", datum: "", gamling : true },
        { namn: "Ali ”Babben” Nouri", datum: "06/12 2016 -", gamling : true },
        { namn: "Erik ”Pleb” Johansson", datum: "02/06 2016 - 08/06 2019", roll: "LC: 2018-2019 vLC: 2017-2018" },
        { namn: "Patrik Wall", datum: "15/01 2016 - 16/12 2017" },
        { namn: "Christoffer ”Tanken” Börje Forsberg", datum: "04/05 2015 - 10/10 2020" },
        { namn: "Hannes ”Ansvarig” Logeke", datum: "18/03 2015 -", gamling : true },
        { namn: "Elias Yacoub", datum: "22/10 2014 -", gamling : true },
        { namn: "Jesper Jarwander", datum: "22/10 2014 - 16/12 2017" },
        { namn: "Simon Ranefjärd", datum: "22/10 2014 - 16/12 2017" },
        { namn: "Carl Bäck", datum: "20/10 2014 - 16/12 2017" },
        { namn: "Stefan Lif", datum: "28/02 2014 - 26/10 2015" },
        { namn: "Tova Becker", datum: "02/12 2013 - 06/10 2014" },
        { namn: "Dennis Petterson", datum: "13/11 2012 -", gamling : true },
        { namn: "Johan ”Jake” Arvidsson", datum: "26/10 2012 - 31/08 2016" },
        { namn: "Martin Persson", datum: "23/09 2012 - 08/04 2015" },
        { namn: "Erika Andersson", datum: "21/09 2012 - 19/10 2012" },
        { namn: "Johan ”Luxxor” Burström", datum: "02/06 2012 - 29/03 2014" },
        { namn: "Jesper Ericson", datum: "05/04 2012 - 03/03 2015" },
        { namn: "Andreas Lundman", datum: "28/04 2011 - 30/11 2015" },
        { namn: "Fhilip Veeborn", datum: "28/02 2011 - 11/04 2012" },
        { namn: "Andreas Andersson", datum: "28/02 2011 - 02/09 2011" },
        { namn: "Maria Aldenlöv", datum: "23/11 2010 - 24/11 2013" },
        { namn: "Eva Roth", datum: "23/11 2010 - 07/09 2012" },
        { namn: "Jesper Bergeskans", datum: "23/11 2010 - 28/01 2012" },
        { namn: "Marcus Hall", datum: "09/11 2010 - 09/09 2014" },
        { namn: "Trolle Geuna", datum: "04/11 2010 - 06/11 2013" },
        { namn: "Jens Modig", datum: "21/10 2009 - 12/02 2016" },
        { namn: "Victor Björklund", datum: "21/10 2009 - 27/01 2010" },
        { namn: "Magda Ljunggren", datum: "30/09 2009 - 22/01 2011" },
        { namn: "Sandra Lindqvist", datum: "01/09 2009 - 30/09 2009" },
        { namn: "Max Wisten", datum: "16/01 2009 - 30/01 2012" },
        { namn: "Jekaterina Jonsson", datum: "14/02 2008 - 21/03 2012" },
        { namn: "Oskar ”Alfa-Provis” Tjärnström", datum: "23/09 2019 - 23/09 2022", roll: "vLC: 2020 - 2022" },
        { namn: "Anton Svensson", datum: "19/10 2007 - 23/03 2011" },
        { namn: "Sebastian Själin", datum: "23/05 2006 - 23/03 2011" },
        { namn: "Henrik Westman", datum: "23/05 2006 - 31/12 2006" },
        { namn: "Maria Willhans", datum: "23/09 2005 - 11/04 2010" },
        { namn: "Anders From", datum: "12/05 2004 - 31/08 2010" },
        { namn: "Mats Hamberg", datum: "21/02 2004 - 31/08 2010" },
        { namn: "Måns Malmberg", datum: "04/10 2002 - 19/10 2010" },
        { namn: "Rickard Nilsson", datum: "07/10 2001 - 01/07 2006" },
        { namn: "Johan Forsblom", datum: "14/09 2000 - 15/09 2010" }
];

document.addEventListener("DOMContentLoaded", () => {
    const contentContainer = document.getElementById("arbetare-content");

    if (!contentContainer) return;

    const parseDate = (dateText) => {
        const match = dateText.trim().match(/^(\d{2})\/(\d{2}) (\d{4})$/);

        if (!match) return null;

        const [, day, month, yearText] = match;
        return new Date(Number(yearText), Number(month) - 1, Number(day));
    };

    const getDate = (datum, part) => {
        const [startdatum = "", slutdatum = ""] = datum.split("-");
        return parseDate(part === "start" ? startdatum : slutdatum);
    };

    const getCompletedYears = (datum) => {
        const startDate = getDate(datum, "start");
        const endDate = getDate(datum, "slut") || new Date();

        if (!startDate || endDate < startDate) return 0;

        let years = endDate.getFullYear() - startDate.getFullYear();
        const anniversary = new Date(
            endDate.getFullYear(),
            startDate.getMonth(),
            startDate.getDate()
        );

        if (endDate < anniversary) years -= 1;

        return Math.max(0, years);
    };

    const getMilestone = (datum) => {
        const completedYears = Math.min(getCompletedYears(datum), 5);

        if (completedYears === 0) return null;

        const imageName = completedYears === 5
            ? "5-1-1024x1024.png"
            : `${completedYears}år-1024x1024.png`;

        return {
            years: completedYears,
            imagePath: `bilder/${imageName}`
        };
    };

    const sortByDate = (arbetare, part, fallbackPart = null) => arbetare
        .map((person, index) => ({
            person,
            index,
            date: getDate(person.datum, part) || (fallbackPart ? getDate(person.datum, fallbackPart) : null)
        }))
        .sort((a, b) => {
            if (!a.date && !b.date) return a.index - b.index;
            if (!a.date) return 1;
            if (!b.date) return -1;
            return b.date - a.date;
        })
        .map(({ person }) => person);

    const harSlutdatum = (datum) => {
        return Boolean(getDate(datum, "slut"));
    };

    const grupperadeArbetare = {
        "Ordinarie Datalagare": sortByDate(
            arbetareData.filter(({ datum, gamling }) => !gamling && !harSlutdatum(datum)),
            "start"
        ),
        "Gamlingar": sortByDate(
            arbetareData.filter(({ datum, gamling }) => gamling || harSlutdatum(datum)),
            "slut",
            "start"
        )
    };

    for (const [groupName, arbetare] of Object.entries(grupperadeArbetare)) {
        const group = document.createElement("section");
        group.className = "arbetare-group";
        group.innerHTML = `<h2>${groupName}</h2><div class="arbetare-list"></div>`;

        const list = group.querySelector(".arbetare-list");

        arbetare.forEach(({ namn, datum, roll }) => {
            const card = document.createElement("article");
            card.className = "arbetare-card";
            const milestone = getMilestone(datum);
            card.innerHTML = `
                <div class="arbetare-card-header">
                    <h3>${namn}</h3>
                    ${milestone ? `<img class="arbetare-milestone" src="${milestone.imagePath}" alt="${milestone.years} år som arbetare">` : ""}
                </div>
                <p>${datum}</p>
                ${roll ? `<p class="arbetare-roll">${roll}</p>` : ""}
            `;
            list.appendChild(card);
        });

        contentContainer.appendChild(group);
    }
});