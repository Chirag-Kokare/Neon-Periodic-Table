const elements = [
    [1, "H", "Hydrogen", 1.008, "1s¹", [1], 1, 1, "nonmetal", "The most abundant element in the universe. It is the fuel for stars and a key part of water."],
    [2, "He", "Helium", 4.002, "1s²", [2], 18, 1, "noble", "A colorless, odorless noble gas. It is the second lightest element and is used in balloons and lasers."],
    [6, "C", "Carbon", 12.011, "2s² 2p²", [2, 4], 14, 2, "nonmetal", "The basis of all known life. It exists as graphite, diamond, and coal."],
    [8, "O", "Oxygen", 15.999, "2s² 2p⁴", [2, 6], 16, 2, "nonmetal", "Essential for human respiration. It makes up 21% of the Earth's atmosphere."]
];

const table = document.getElementById('periodic-table');

elements.forEach(el => {
    const div = document.createElement('div');
    div.className = 'element-cell';
    div.style.gridColumn = el[6];
    div.style.gridRow = el[7];
    div.innerHTML = `<strong>${el[1]}</strong><small>${el[0]}</small>`;
    div.onclick = () => showElement(el);
    table.appendChild(div);
});

function showElement(data) {
    document.getElementById('el-name').innerText = data[2];
    document.getElementById('el-z').innerText = data[0];
    document.getElementById('el-mass').innerText = data[3];
    document.getElementById('el-p').innerText = data[0];
    document.getElementById('el-e').innerText = data[0];
    document.getElementById('el-n').innerText = Math.round(data[3]) - data[0];
    document.getElementById('el-config').innerText = data[4];
    document.getElementById('el-desc').innerText = data[9];
    
    animateAtom(data[5]);
    document.getElementById('detail-modal').style.display = 'flex';
}

function animateAtom(shells) {
    const container = document.getElementById('atom-view');
    container.innerHTML = '<div class="nucleus"></div>';
    
    shells.forEach((count, index) => {
        const size = 60 + (index * 40);
        const shell = document.createElement('div');
        shell.className = 'shell';
        shell.style.width = `${size}px`;
        shell.style.height = `${size}px`;
        shell.style.animationDuration = `${4 + index}s`;

        for(let i=0; i<count; i++) {
            const e = document.createElement('div');
            e.className = 'electron';
            const angle = (360 / count) * i;
            e.style.transform = `rotate(${angle}deg) translate(${size/2}px)`;
            shell.appendChild(e);
        }
        container.appendChild(shell);
    });
}

document.getElementById('close-modal').onclick = () => {
    document.getElementById('detail-modal').style.display = 'none';
};
