const elements = [
    // [Z, Symbol, Name, Mass, Config, [Shells], Col, Row, Category, Description]
    [1, "H", "Hydrogen", 1.008, "1s¹", [1], 1, 1, "nonmetal", "Hydrogen is the most abundant chemical substance in the universe, constituting roughly 75% of all baryonic mass. It is the primary fuel for stars like our Sun. On Earth, it is found in water and all organic molecules."],
    [2, "He", "Helium", 4.0026, "1s²", [2], 18, 1, "noble", "Helium is an inert gas and the second most common element in the universe. It is created by nuclear fusion in stars. It is used in cryogenics, deep-sea diving, and for lifting balloons due to its low density."],
    [3, "Li", "Lithium", 6.94, "[He] 2s¹", [2, 1], 1, 2, "alkali", "Lithium is a soft, silvery-white alkali metal and the lightest solid element. It is highly reactive and flammable. Today, it is essential for the production of rechargeable batteries used in phones and cars."],
    [4, "Be", "Beryllium", 9.0122, "[He] 2s²", [2, 2], 2, 2, "alkaline", "Beryllium is a steel-gray, strong, lightweight metal. It has a high melting point and is used as an alloying agent in aerospace and defense. It is also transparent to X-rays, making it useful for X-ray windows."],
    [5, "B", "Boron", 10.81, "[He] 2s² 2p¹", [2, 3], 13, 2, "metalloid", "Boron is a metalloid found in minerals like borax. It is used in fiberglass insulation, ceramics, and high-strength materials. In agriculture, it is a micronutrient required for plant growth and cell wall stability."],
    [6, "C", "Carbon", 12.011, "[He] 2s² 2p²", [2, 4], 14, 2, "nonmetal", "Carbon is the 'element of life' because it can form four covalent bonds with other atoms. It exists in nature as graphite, diamonds, and coal. It is a fundamental component of all organic chemistry and proteins."],
    [7, "N", "Nitrogen", 14.007, "[He] 2s² 2p³", [2, 5], 15, 2, "nonmetal", "Nitrogen makes up 78% of Earth's atmosphere by volume. It is a colorless, odorless gas that is essential for DNA and proteins. Industrially, it is used to make ammonia for fertilizers and as a liquid refrigerant."],
    [8, "O", "Oxygen", 15.999, "[He] 2s² 2p⁴", [2, 6], 16, 2, "nonmetal", "Oxygen is a highly reactive gas that forms oxides with almost all other elements. It is vital for respiration in humans and animals. It also forms the ozone layer, protecting the Earth from harmful ultraviolet radiation."],
    [9, "F", "Fluorine", 18.998, "[He] 2s² 2p⁵", [2, 7], 17, 2, "halogen", "Fluorine is the most electronegative and reactive of all elements. It is a pale yellow, toxic gas at room temperature. Its compounds are widely used in toothpaste, refrigeration gases, and non-stick cookware coatings."],
    [10, "Ne", "Neon", 20.180, "[He] 2s² 2p⁶", [2, 8], 18, 2, "noble", "Neon is a noble gas that is chemically inactive. It is famous for its use in advertising signs, where it glows reddish-orange when electrified. It is the fifth most abundant element in the universe by mass."],
    [11, "Na", "Sodium", 22.990, "[Ne] 3s¹", [2, 8, 1], 1, 3, "alkali", "Sodium is a soft metal that reacts violently with water. It is an essential mineral for humans, helping to maintain fluid balance and nerve impulses. It is most commonly found as sodium chloride, also known as table salt."],
    [12, "Mg", "Magnesium", 24.305, "[Ne] 3s²", [2, 8, 2], 2, 3, "alkaline", "Magnesium is a lightweight, silvery-white metal. It is essential for over 300 biochemical reactions in the human body. It is also used in aluminum alloys for cars and airplanes to reduce weight and improve strength."],
    [13, "Al", "Aluminum", 26.982, "[Ne] 3s² 3p¹", [2, 8, 3], 13, 3, "post-transition", "Aluminum is the most abundant metal in Earth's crust. It is lightweight, non-magnetic, and highly resistant to corrosion. It is used in everything from kitchen foil and soda cans to airplane parts and high-rise buildings."],
    [14, "Si", "Silicon", 28.085, "[Ne] 3s² 3p²", [2, 8, 4], 14, 3, "metalloid", "Silicon is a semi-metal that is the backbone of the electronics industry. It is used to create computer chips and solar cells. It is also the main ingredient in sand, glass, and many types of geological rocks."],
    [15, "P", "Phosphorus", 30.974, "[Ne] 3s² 3p³", [2, 8, 5], 15, 3, "nonmetal", "Phosphorus exists in several forms, including white, red, and black phosphorus. It is a key component of DNA, RNA, and ATP, which provides energy to cells. It is also used heavily in safety matches and agricultural fertilizers."],
    [16, "S", "Sulfur", 32.06, "[Ne] 3s² 3p⁴", [2, 8, 6], 16, 3, "nonmetal", "Sulfur is a bright yellow, brittle solid at room temperature. It is essential for life and is found in amino acids. Industrially, it is used to make sulfuric acid, which is one of the most produced chemicals in the world."],
    [17, "Cl", "Chlorine", 35.45, "[Ne] 3s² 3p⁵", [2, 8, 7], 17, 3, "halogen", "Chlorine is a yellow-green gas with a distinct, suffocating smell. It is used to disinfect drinking water and swimming pools. It is also a vital component in the production of PVC plastic and various cleaning supplies."],
    [18, "Ar", "Argon", 39.948, "[Ne] 3s² 3p⁶", [2, 8, 8], 18, 3, "noble", "Argon is the third most abundant gas in the atmosphere. Being a noble gas, it is chemically inert. It is used to fill light bulbs to prevent the filament from burning and as a shielding gas for arc welding."],
    [19, "K", "Potassium", 39.098, "[Ar] 4s¹", [2, 8, 8, 1], 1, 4, "alkali", "Potassium is a silvery-white alkali metal that reacts rapidly with air and water. It is a critical electrolyte for heart function and muscle contraction. It is found in high amounts in bananas, potatoes, and spinach."],
    [20, "Ca", "Calcium", 40.078, "[Ar] 4s²", [2, 8, 8, 2], 2, 4, "alkaline", "Calcium is an alkaline earth metal that is the fifth most abundant element in the crust. It is essential for the growth and maintenance of strong bones and teeth. It is also used in making cement and cheese."],
    
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
