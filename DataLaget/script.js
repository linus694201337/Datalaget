document.addEventListener("DOMContentLoaded", () => {
    const tabsContainer = document.getElementById("year-tabs");
    const contentContainer = document.getElementById("pass-content");

    const years = Object.keys(arbetspassData).sort((first, second) => {
        if (first === "Trad") return 1;
        if (second === "Trad") return -1;
        return Number(second.slice(0, 2)) - Number(first.slice(0, 2));
    });

    years.forEach((year, index) => {
        const isFirst = index === 0;
        const button = document.createElement("button");
        button.className = `tab-button${isFirst ? " active" : ""}`;
        button.textContent = year;

        const content = document.createElement("div");
        content.className = `year-content${isFirst ? " active" : ""}`;
        content.innerHTML = Object.entries(arbetspassData[year])
            .map(([period, passes]) => `
                <div class="lp-section">
                    <h3>${period}</h3>
                    <ul>${passes.map(pass => `<li>${pass}</li>`).join("")}</ul>
                </div>
            `)
            .join("");

        button.addEventListener("click", () => {
            document.querySelectorAll(".tab-button").forEach(tab => tab.classList.remove("active"));
            document.querySelectorAll(".year-content").forEach(section => section.classList.remove("active"));
            button.classList.add("active");
            content.classList.add("active");
        });

        tabsContainer.appendChild(button);
        contentContainer.appendChild(content);
    });
});
