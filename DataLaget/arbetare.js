const arbetareData = [
        { namn: "Linus Wohrne", datum: "14/12 2025 -"},
        { namn: "Kasper Wieser", datum: "14/12 2025 -"},
        { namn: "Emma Edh", datum: "14/12 2025 -"},
        { namn: "Erik ”Bosse” Boson", datum: "4/4 2019 –", roll: "LC: 2019 –", gamling : true },
        { namn: "Gustav ”Militär” Törnqvist", datum: "2/9 2022 –", roll: "VLC" },
        { namn: "Jesper", datum: "6/12/23", gamling : true },
        { namn: "Ture Bergqvist", datum: "6/12/23" },
        { namn: "Gustav Juul", datum: "6/12/23" },
        { namn: "Gustav ”Ryan” Hammarström", datum: "6/12/23" },
        { namn: "Gustav ”Gurkan” Lundström", datum: "14/1 2023 –", gamling : true },
        { namn: "Gustav ”Svep” Järnum", datum: "4/6 2022 –", gamling : true },
        { namn: "Edvin ”MrMr” Norrman", datum: "18/12 2021 –", gamling : true },
        { namn: "Hampus ”Gustav Kempinem” Kämppi", datum: "6/11 2021 –", gamling : true },
        { namn: "Leo ”kexet” Man", datum: "30/10 2021 –", gamling : true },
        { namn: "Felicia ”Flipp” Katmuk", datum: "10/10 2021 –", roll: "vLC: 2022 –", gamling : true },
        { namn: "Gustav ”Gurra” Segerlind", datum: "8/6 2019 –", gamling : true },
        { namn: "Gustav ”rosa” Pantén", datum: "25/3 2023 –", gamling : true },
        { namn: "Elin ”Lilul” Lindberg", datum: "1/2 2016 – 4/6 2022", roll: "LC: 2017 – 2018 vLC: 2016 – 2017" },
        { namn: "Isak ”Eke” Ekman", datum: "10/12 2018 – 4/6 2022",  },
        { namn: "Marcus ”∬” Songsong", datum: "27/2 2018 – 18/12 2021" },
        { namn: "Mathias ”Tapa” Tapani", datum: "16/12 2017 – 18/12 2021" },
        { namn: "Oscar ”Bossbar” ”Boppe” Rosberg", datum: "16/12 2017 –", gamling : true },
        { namn: "Linus ”Lanken” Landström", datum: "16/12 2017 –", roll: "vLC: 2018 – 2020", gamling : true },
        { namn: "Fredrik ”fkboi” Pettersson", datum: "", gamling : true },
        { namn: "Ali ”Babben” Nouri", datum: "6/12 2016 –", gamling : true },
        { namn: "Erik ”Pleb” Johansson", datum: "2/6 2016 – 8/6 2019", roll: "LC: 2018-2019 vLC: 2017-2018" },
        { namn: "Patrik Wall", datum: "15/1 2016 – 16/12 2017" },
        { namn: "Christoffer ”Tanken” Börje Forsberg", datum: "4/5 2015 – 10/10 2020" },
        { namn: "Hannes ”Ansvarig” Logeke", datum: "18/3 2015 –", gamling : true },
        { namn: "Elias Yacoub", datum: "22/10 2014 –", gamling : true },
        { namn: "Jesper Jarwander", datum: "22/10 2014 – 16/12 2017" },
        { namn: "Simon Ranefjärd", datum: "22/10 2014 – 16/12 2017" },
        { namn: "Carl Bäck", datum: "20/10 2014 – 16/12 2017" },
        { namn: "Stefan Lif", datum: "28/2 2014 – 26/10 2015" },
        { namn: "Tova Becker", datum: "2/12 2013 – 6/10 2014" },
        { namn: "Dennis Petterson", datum: "13/11 2012 –", gamling : true },
        { namn: "Johan ”Jake” Arvidsson", datum: "26/10 2012 – 31/8 2016" },
        { namn: "Martin Persson", datum: "23/9 2012 – 8/4 2015" },
        { namn: "Erika Andersson", datum: "21/9 2012 – 19/10 2012" },
        { namn: "Johan ”Luxxor” Burström", datum: "2/6 2012 – 29/3 2014" },
        { namn: "Jesper Ericson", datum: "5/4 2012 – 3/3 2015" },
        { namn: "Andreas Lundman", datum: "28/4 2011 – 30/11 2015" },
        { namn: "Fhilip Veeborn", datum: "28/2 2011 – 11/4 2012" },
        { namn: "Andreas Andersson", datum: "28/2 2011 – 2/9 2011" },
        { namn: "Maria Aldenlöv", datum: "23/11 2010 – 24/11 2013" },
        { namn: "Eva Roth", datum: "23/11 2010 – 7/9 2012" },
        { namn: "Jesper Bergeskans", datum: "23/11 2010 – 28/1 2012" },
        { namn: "Marcus Hall", datum: "9/11 2010 – 9/9 2014" },
        { namn: "Trolle Geuna", datum: "4/11 2010 – 6/11 2013" },
        { namn: "Jens Modig", datum: "21/10 2009 – 12/2 2016" },
        { namn: "Victor Björklund", datum: "21/10 2009 – 27/1 2010" },
        { namn: "Magda Ljunggren", datum: "30/9 2009 – 22/1 2011" },
        { namn: "Sandra Lindqvist", datum: "1/9 2009 – 30/9 2009" },
        { namn: "Max Wisten", datum: "16/1 2009 – 30/1 2012" },
        { namn: "Jekaterina Jonsson", datum: "14/2 2008 – 21/3 2012" },
        { namn: "Oskar ”Alfa-Provis” Tjärnström", datum: "23/9 2019 – 23/9 2022", roll: "vLC: 2020 – 2022" },
        { namn: "Anton Svensson", datum: "19/10 2007 – 23/3 2011" },
        { namn: "Sebastian Själin", datum: "23/5 2006 – 23/3 2011" },
        { namn: "Henrik Westman", datum: "23/5 2006 – 31/12 2006" },
        { namn: "Maria Willhans", datum: "23/9 2005 – 11/4 2010" },
        { namn: "Anders From", datum: "12/5 2004 – 31/8 2010" },
        { namn: "Mats Hamberg", datum: "21/2 2004 – 31/8 2010" },
        { namn: "Måns Malmberg", datum: "4/10 2002 – 19/10 2010" },
        { namn: "Rickard Nilsson", datum: "7/10 2001 – 1/7 2006" },
        { namn: "Johan Forsblom", datum: "14/9 2000 – 15/9 2010" }
];

document.addEventListener("DOMContentLoaded", () => {
    const contentContainer = document.getElementById("arbetare-content");

    if (!contentContainer) return;

    const harSlutdatum = (datum) => {
        const [, slutdatum = ""] = datum.split("–");
        return slutdatum.trim() !== "";
    };

    const grupperadeArbetare = {
        "Ordinarie Datalagare": arbetareData.filter(({ datum, gamling }) => !gamling && !harSlutdatum(datum)),
        "Gamlingar": arbetareData.filter(({ datum, gamling }) => gamling || harSlutdatum(datum))
    };

    for (const [groupName, arbetare] of Object.entries(grupperadeArbetare)) {
        const group = document.createElement("section");
        group.className = "arbetare-group";
        group.innerHTML = `<h2>${groupName}</h2><div class="arbetare-list"></div>`;

        const list = group.querySelector(".arbetare-list");

        arbetare.forEach(({ namn, datum, roll }) => {
            const card = document.createElement("article");
            card.className = "arbetare-card";
            card.innerHTML = `
                <h3>${namn}</h3>
                <p>${datum}</p>
                ${roll ? `<p class="arbetare-roll">${roll}</p>` : ""}
            `;
            list.appendChild(card);
        });

        contentContainer.appendChild(group);
    }
});