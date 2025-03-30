const oxidationNumbers = {
    "hydrogen": "+1, -1",
    "helium": "0",
    "lithium": "+1",
    "beryllium": "+2",
    "boron": "-3, +3",
    "carbon": "-4, -3, -2, -1, 0, +1, +2, +3, +4",
    "nitrogen": "-3, -2, -1, 0, +1, +2, +3, +4, +5",
    "oxygen": "-2, -1, 0, +1, +2",
    "fluorine": "-1",
    "neon": "0",
    "sodium": "+1",
    "magnesium": "+2",
    "aluminium": "+3",
    "silicon": "-4, -3, -2, -1, 0, +1, +2, +3, +4",
    "phosphorus": "-3, -2, -1, 0, +1, +2, +3, +4, +5",
    "sulfur": "-2, -1, 0, +1, +2, +3, +4, +5, +6",
    "chlorine": "-1, 0, +1, +2, +3, +4, +5, +6, +7",
    "argon": "0",
    "potassium": "+1",
    "calcium": "+2",
    "scandium": "+3",
    "titanium": "-2, -1, 0, +1, +2, +3, +4",
    "vanadium": "-3, -1, 0, +1, +2, +3, +4, +5",
    "chromium": "-2, 0, +1, +2, +3, +4, +5, +6",
    "manganese": "-3, -2, -1, 0, +1, +2, +3, +4, +5, +6, +7",
    "iron": "-4, -2, -1, 0, +1, +2, +3, +4, +5, +6",
    "cobalt": "-3, -1, 0, +1, +2, +3, +4, +5",
    "nickel": "-2, 0, +1, +2, +3, +4",
    "copper": "-2, 0, +1, +2, +3, +4",
    "zinc": "+2",
    "gallium": "-5, -4, -2, +1, +2, +3",
    "germanium": "-4, -3, -2, -1, 0, +1, +2, +3, +4",
    "arsenic": "-3, -2, -1, 0, +1, +2, +3, +4, +5",
    "selenium": "-2, 0, +1, +2, +3, +4, +5, +6",
    "bromine": "-1, 0, +1, +3, +4, +5",
    "krypton": "0, +2",
    "rubidium": "+1",
    "strontium": "+2",
    "yttrium": "+3",
    "zirconium": "-2, 0, +1, +2, +3, +4",
    "niobium": "-3, -1, 0, +1, +2, +3, +4, +5",
    "molybdenum": "-4, -2, 0, +1, +2, +3, +4, +5, +6",
    "technetium": "-3, -1, 0, +1, +2, +3, +4, +5, +6, +7",
    "ruthenium": "-4, -2, 0, +1, +2, +3, +4, +5, +6, +7, +8",
    "rhodium": "-3, 0, +1, +2, +3, +4, +5, +6",
    "palladium": "-2, 0, +1, +2, +3, +4",
    "silver": "+1, +2, +3",
    "cadmium": "+2",
    "indium": "-5, -2, +1, +2, +3",
    "tin": "-4, -2, +1, +2, +3, +4",
    "antimony": "-3, -2, -1, 0, +1, +2, +3, +4, +5",
    "tellurium": "-2, 0, +2, +4, +6",
    "iodine": "-1, 0, +1, +3, +4, +5, +7",
    "xenon": "0, +2, +4, +6, +8",
    "cesium": "+1",
    "barium": "+2",
    "lanthanum": "+3",
    "cerium": "+3, +4",
    "thorium": "+4",
    "uranium": "+3, +4, +5, +6",
    "neptunium": "+3, +4, +5, +6, +7",
    "plutonium": "+3, +4, +5, +6",
    "americium": "+2, +3, +4, +5, +6",
    "curium": "+3, +4",
    "berkelium": "+3, +4",
    "californium": "+3",
    "einsteinium": "+3",
    "fermium": "+3",
    "mendelevium": "+2, +3",
    "nobelium": "+2, +3",
    "lawrencium": "+3",
    "rutherfordium": "+4",
    "dubnium": "+5",
    "seaborgium": "+6",
    "bohrium": "+7",
    "hassium": "+8",
    "meitnerium": "unknown",
    "darmstadtium": "unknown",
    "roentgenium": "unknown",
    "copernicium": "+2, +4",
    "nihonium": "+1, +3",
    "flerovium": "+2, +4",
    "moscovium": "+1, +3",
    "livermorium": "+2, +4",
    "tennessine": "-1, +1, +3, +5",
    "oganesson": "0, +2, +4"
};

function getOxidationNumber(element) {
    element = element.toLowerCase();
    return oxidationNumbers[element] || "Μή γνωστό";
}
function getNumberLength(num) {
    return num.toString().length;
}
function getAtomicNumber(elementName) {
    // Define a mapping of element names to their atomic numbers
    const elements = {
        Hydrogen: 1,
        Helium: 2,
        Lithium: 3,
        Beryllium: 4,
        Boron: 5,
        Carbon: 6,
        Nitrogen: 7,
        Oxygen: 8,
        fluorine: 9,
        Neon: 10,
        Sodium: 11,
        Magnesium: 12,
        Aluminium: 13,
        Silicon: 14,
        Phosphorus: 15,
        Sulfur: 16,
        Chlorine: 17,
        Argon: 18,
        Potassium: 19,
        Calcium: 20,
        Scandium: 21,
        Titanium: 22,
        Vanadium: 23,
        Chromium: 24,
        Manganese: 25,
        Iron: 26,
        Cobalt: 27,
        Nickel: 28,
        Copper: 29,
        Zinc: 30,
        Gallium: 31,
        Germanium: 32,
        Arsenic: 33,
        Selenium: 34,
        Bromine: 35,
        Krypton: 36,
        Rubidium: 37,
        Strontium: 38,
        Yttrium: 39,
        Zirconium: 40,
        Niobium: 41,
        Molybdenum: 42,
        Technetium: 43,
        Ruthenium: 44,
        Rhodium: 45,
        Palladium: 46,
        Silver: 47,
        Cadmium: 48,
        Indium: 49,
        Tin: 50,
        Antimony: 51,
        Tellurium: 52,
        Iodine: 53,
        Xenon: 54,
        Caesium: 55,
        Barium: 56,
        Lanthanum: 57,
        Cerium: 58,
        Praseodymium: 59,
        Neodymium: 60,
        Promethium: 61,
        Samarium: 62,
        Europium: 63,
        Gadolinium: 64,
        Terbium: 65,
        Dysprosium: 66,
        Holmium: 67,
        Erbium: 68,
        Thulium: 69,
        Ytterbium: 70,
        Lutetium: 71,
        Hafnium: 72,
        Tantalum: 73,
        Tungsten: 74,
        Rhenium: 75,
        Osmium: 76,
        Iridium: 77,
        Platinum: 78,
        Gold: 79,
        Mercury: 80,
        Thallium: 81,
        Lead: 82,
        Bismuth: 83,
        Polonium: 84,
        Astatine: 85,
        Radon: 86,
        Francium: 87,
        Radium: 88,
        Actinium: 89,
        Thorium: 90,
        Protactinium: 91,
        Uranium: 92,
        Neptunium: 93,
        Plutonium: 94,
        Americium: 95,
        Curium: 96,
        Berkelium: 97,
        Californium: 98,
        Einsteinium: 99,
        Fermium: 100,
        Mendelevium: 101,
        Nobelium: 102,
        Lawrencium: 103,
        Rutherfordium: 104,
        Dubnium: 105,
        Seaborgium: 106,
        Bohrium: 107,
        Hassium: 108,
        Meitnerium: 109,
        Darmstadtium: 110,
        Roentgenium: 111,
        Copernicium: 112,
        Nihonium: 113,
        Flerovium: 114,
        Moscovium: 115,
        Livermorium: 116,
        Tennessine: 117,
        Oganesson: 118
    };

    // Normalize the input to match the keys in the object
    const normalizedElementName = elementName.charAt(0).toUpperCase() + elementName.slice(1).toLowerCase();

    // Return the atomic number or a message if the element is not found
    return elements[normalizedElementName] || 'Element not found';
}
"use strict";
// Dependencies: none required in JavaScript for regex operations

// Define the multi-line string using template literals
let olomazi = `
    </div>
    <div class="element other-nonmetal c1 r1" data-stoixeio="Hydrogen">
    <div class="square">
        <div class="atomic-number">1</div>
        <div class="label">
        <div class="symbol">H</div>
        <div class="name">Hydrogen</div>
        </div>
        <div class="atomic-mass">1.008</div>
        <div class="atomic-weight">
        <p>1s<sup>1</sup></p>
        </div>
    </div>
    </div>
    <div class="element noble-gas c18 r1" data-stoixeio="Helium">
    <div class="square">
        <div class="atomic-number">2</div>
        <div class="label">
        <div class="symbol">He</div>
        <div class="name">Helium</div>
        </div>
        <div class="atomic-mass">4.0026</div>
        <div class="atomic-weight">
        <p>1s<sup>2</sup></p>
        </div>
    </div>
    </div>
    <div class="element alkali-metal c1 r2" data-stoixeio="Lithium">
    <div class="square">
        <div class="atomic-number">3</div>
        <div class="label">
        <div class="symbol">Li</div>
        <div class="name">Lithium</div>
        </div>
        <div class="atomic-mass">6.94</div>
        <div class="atomic-weight">
        <p>[He] 2s<sup>1</sup></p>
        </div>
    </div>
    </div>
    <div class="element alkaline-earth-metal c2 r2" data-stoixeio="Beryllium">
    <div class="square">
        <div class="atomic-number">4</div>
        <div class="label">
        <div class="symbol">Be</div>
        <div class="name">Beryllium</div>
        </div>
        <div class="atomic-mass">9.0122</div>
        <div class="atomic-weight">
        <p>[He] 2s<sup>2</sup></p>
        </div>
    </div>
    </div>
    <div class="element metalloid c13 r2" data-stoixeio="Boron">
    <div class="square">
        <div class="atomic-number">5</div>
        <div class="label">
        <div class="symbol">B</div>
        <div class="name">Boron</div>
        </div>
        <div class="atomic-mass">10.81</div>
        <div class="atomic-weight">
        <p>[He] 2s<sup>2</sup>2p<sup>1</sup></p>
        </div>
    </div>
    </div>
    <div class="element other-nonmetal c14 r2" data-stoixeio="Carbon">
    <div class="square">
        <div class="atomic-number">6</div>
        <div class="label">
        <div class="symbol">C</div>
        <div class="name">Carbon</div>
        </div>
        <div class="atomic-mass">12.011</div>
        <div class="atomic-weight">
        <p>[He] 2s<sup>2</sup>2p<sup>2</sup></p>
        </div>
    </div>
    </div>
    <div class="element other-nonmetal c15 r2" data-stoixeio="Nitrogen">
    <div class="square">
        <div class="atomic-number">7</div>
        <div class="label">
        <div class="symbol">N</div>
        <div class="name">Nitrogen</div>
        </div>
        <div class="atomic-mass">14.007</div>
        <div class="atomic-weight">
        <p>[He] 2s<sup>2</sup>2p<sup>3</sup></p>
        </div>
    </div>
    </div>
    <div class="element other-nonmetal c16 r2" data-stoixeio="Oxygen">
    <div class="square">
        <div class="atomic-number">8</div>
        <div class="label">
        <div class="symbol">O</div>
        <div class="name">Oxygen</div>
        </div>
        <div class="atomic-mass">15.999</div>
        <div class="atomic-weight">
        <p>[He] 2s<sup>2</sup>2p<sup>4</sup></p>
        </div>
    </div>
    </div>
    <div class="element other-nonmetal c17 r2" data-stoixeio="fluorine">
    <div class="square">
        <div class="atomic-number">9</div>
        <div class="label">
        <div class="symbol">F</div>
        <div class="name">fluorine</div>
        </div>
        <div class="atomic-mass">18.998</div>
        <div class="atomic-weight">
        <p>[He] 2s<sup>2</sup>2p<sup>5</sup></p>
        </div>
    </div>
    </div>
    <div class="element noble-gas c18 r2" data-stoixeio="Neon">
    <div class="square">
        <div class="atomic-number">10</div>
        <div class="label">
        <div class="symbol">Ne</div>
        <div class="name">Neon</div>
        </div>
        <div class="atomic-mass">20.18</div>
        <div class="atomic-weight">
        <p>[He] 2s<sup>2</sup>2p<sup>6</sup></p>
        </div>
    </div>
    </div>
    <div class="element alkali-metal c1 r3" data-stoixeio="Sodium">
    <div class="square">
        <div class="atomic-number">11</div>
        <div class="label">
        <div class="symbol">Na</div>
        <div class="name">Sodium</div>
        </div>
        <div class="atomic-mass">22.99</div>
        <div class="atomic-weight">
        <p>[Ne] 3s<sup>1</sup></p>
        </div>
    </div>
    </div>
    <div class="element alkaline-earth-metal c2 r3" data-stoixeio="Magnesium">
    <div class="square">
        <div class="atomic-number">12</div>
        <div class="label">
        <div class="symbol">Mg</div>
        <div class="name">Magnesium</div>
        </div>
        <div class="atomic-mass">24.305</div>
        <div class="atomic-weight">
        <p>[Ne] 3s<sup>2</sup></p>
        </div>
    </div>
    </div>
    <div class="element post-transition-metal c13 r3" data-stoixeio="Aluminium">
    <div class="square">
        <div class="atomic-number">13</div>
        <div class="label">
        <div class="symbol">Al</div>
        <div class="name">Aluminium</div>
        </div>
        <div class="atomic-mass">26.982</div>
        <div class="atomic-weight">
        <p>[Ne] 3s<sup>2</sup>3p<sup>1</sup></p>
        </div>
    </div>
    </div>
    <div class="element metalloid c14 r3" data-stoixeio="Silicon">
    <div class="square">
        <div class="atomic-number">14</div>
        <div class="label">
        <div class="symbol">Si</div>
        <div class="name">Silicon</div>
        </div>
        <div class="atomic-mass">28.085</div>
        <div class="atomic-weight">
        <p>[Ne] 3s<sup>2</sup>3p<sup>2</sup></p>
        </div>
    </div>
    </div>
    <div class="element other-nonmetal c15 r3" data-stoixeio="Phosphorus">
    <div class="square">
        <div class="atomic-number">15</div>
        <div class="label">
        <div class="symbol">P</div>
        <div class="name">Phosphorus</div>
        </div>
        <div class="atomic-mass">30.974</div>
        <div class="atomic-weight">
        <p>[Ne] 3s<sup>2</sup>3p<sup>3</sup></p>
        </div>
    </div>
    </div>
    <div class="element other-nonmetal c16 r3" data-stoixeio="Sulfur">
    <div class="square">
        <div class="atomic-number">16</div>
        <div class="label">
        <div class="symbol">S</div>
        <div class="name">Sulfur</div>
        </div>
        <div class="atomic-mass">32.06</div>
        <div class="atomic-weight">
        <p>[Ne] 3s<sup>2</sup>3p<sup>4</sup></p>
        </div>
    </div>
    </div>
    <div class="element other-nonmetal c17 r3" data-stoixeio="Chlorine">
    <div class="square">
        <div class="atomic-number">17</div>
        <div class="label">
        <div class="symbol">Cl</div>
        <div class="name">Chlorine</div>
        </div>
        <div class="atomic-mass">35.45</div>
        <div class="atomic-weight">
        <p>[Ne] 3s<sup>2</sup>3p<sup>5</sup></p>
        </div>
    </div>
    </div>
    <div class="element noble-gas c18 r3" data-stoixeio="Argon">
    <div class="square">
        <div class="atomic-number">18</div>
        <div class="label">
        <div class="symbol">Ar</div>
        <div class="name">Argon</div>
        </div>
        <div class="atomic-mass">39.948</div>
        <div class="atomic-weight">
        <p>[Ne] 3s<sup>2</sup>3p<sup>6</sup></p>
        </div>
    </div>
    </div>
    <div class="element alkali-metal c1 r4" data-stoixeio="Potassium">
    <div class="square">
        <div class="atomic-number">19</div>
        <div class="label">
        <div class="symbol">K</div>
        <div class="name">Potassium</div>
        </div>
        <div class="atomic-mass">39.098</div>
        <div class="atomic-weight">
        <p>[Ar] 4s<sup>1</sup></p>
        </div>
    </div>
    </div>
    <div class="element alkaline-earth-metal c2 r4" data-stoixeio="Calcium">
    <div class="square">
        <div class="atomic-number">20</div>
        <div class="label">
        <div class="symbol">Ca</div>
        <div class="name">Calcium</div>
        </div>
        <div class="atomic-mass">40.078</div>
        <div class="atomic-weight">
        <p>[Ar] 4s<sup>2</sup></p>
        </div>
    </div>
    </div>
    <div class="element transition-metal c3 r4" data-stoixeio="Scandium">
    <div class="square">
        <div class="atomic-number">21</div>
        <div class="label">
        <div class="symbol">Sc</div>
        <div class="name">Scandium</div>
        </div>
        <div class="atomic-mass">44.956</div>
        <div class="atomic-weight">
        <p>[Ar] 3d<sup>1</sup>4s<sup>2</sup></p>
        </div>
    </div>
    </div>
    <div class="element transition-metal c4 r4" data-stoixeio="Titanium">
    <div class="square">
        <div class="atomic-number">22</div>
        <div class="label">
        <div class="symbol">Ti</div>
        <div class="name">Titanium</div>
        </div>
        <div class="atomic-mass">47.867</div>
        <div class="atomic-weight">
        <p>[Ar] 3d<sup>2</sup>4s<sup>2</sup></p>
        </div>
    </div>
    </div>
    <div class="element transition-metal c5 r4" data-stoixeio="Vanadium">
    <div class="square">
        <div class="atomic-number">23</div>
        <div class="label">
        <div class="symbol">V</div>
        <div class="name">Vanadium</div>
        </div>
        <div class="atomic-mass">50.942</div>
        <div class="atomic-weight">
        <p>[Ar] 3d<sup>3</sup>4s<sup>2</sup></p>
        </div>
    </div>
    </div>
    <div class="element transition-metal c6 r4" data-stoixeio="Chromium">
    <div class="square">
        <div class="atomic-number">24</div>
        <div class="label">
        <div class="symbol">Cr</div>
        <div class="name">Chromium</div>
        </div>
        <div class="atomic-mass">51.996</div>
        <div class="atomic-weight">
        <p>[Ar] 3d<sup>5</sup>4s<sup>1</sup></p>
        </div>
    </div>
    </div>
    <div class="element transition-metal c7 r4" data-stoixeio="Manganese">
    <div class="square">
        <div class="atomic-number">25</div>
        <div class="label">
        <div class="symbol">Mn</div>
        <div class="name">Manganese</div>
        </div>
        <div class="atomic-mass">54.938</div>
        <div class="atomic-weight">
        <p>[Ar] 3d<sup>5</sup>4s<sup>2</sup></p>
        </div>
    </div>
    </div>
    <div class="element transition-metal c8 r4" data-stoixeio="Iron">
    <div class="square">
        <div class="atomic-number">26</div>
        <div class="label">
        <div class="symbol">Fe</div>
        <div class="name">Iron</div>
        </div>
        <div class="atomic-mass">55.845</div>
        <div class="atomic-weight">
        <p>[Ar] 3d<sup>6</sup>4s<sup>2</sup></p>
        </div>
    </div>
    </div>
    <div class="element transition-metal c9 r4" data-stoixeio="Cobalt">
    <div class="square">
        <div class="atomic-number">27</div>
        <div class="label">
        <div class="symbol">Co</div>
        <div class="name">Cobalt</div>
        </div>
        <div class="atomic-mass">58.933</div>
        <div class="atomic-weight">
        <p>[Ar] 3d<sup>7</sup>4s<sup>2</sup></p>
        </div>
    </div>
    </div>
    <div class="element transition-metal c10 r4" data-stoixeio="Nickel">
    <div class="square">
        <div class="atomic-number">28</div>
        <div class="label">
        <div class="symbol">Ni</div>
        <div class="name">Nickel</div>
        </div>
        <div class="atomic-mass">58.693</div>
        <div class="atomic-weight">
        <p>[Ar] 3d<sup>8</sup>4s<sup>2</sup></p>
        </div>
    </div>
    </div>
    <div class="element transition-metal c11 r4" data-stoixeio="Copper">
    <div class="square">
        <div class="atomic-number">29</div>
        <div class="label">
        <div class="symbol">Cu</div>
        <div class="name">Copper</div>
        </div>
        <div class="atomic-mass">63.546</div>
        <div class="atomic-weight">
        <p>[Ar] 3d<sup>10</sup>4s<sup>1</sup></p>
        </div>
    </div>
    </div>
    <div class="element transition-metal c12 r4" data-stoixeio="Zinc">
    <div class="square">
        <div class="atomic-number">30</div>
        <div class="label">
        <div class="symbol">Zn</div>
        <div class="name">Zinc</div>
        </div>
        <div class="atomic-mass">65.38</div>
        <div class="atomic-weight">
        <p>[Ar] 3d<sup>10</sup>4s<sup>2</sup></p>
        </div>
    </div>
    </div>
    <div class="element post-transition-metal c13 r4" data-stoixeio="Gallium">
    <div class="square">
        <div class="atomic-number">31</div>
        <div class="label">
        <div class="symbol">Ga</div>
        <div class="name">Gallium</div>
        </div>
        <div class="atomic-mass">69.723</div>
        <div class="atomic-weight">
        <p>[Ar] 3d<sup>10</sup>4s<sup>2</sup>4p<sup>1</sup></p>
        </div>
    </div>
    </div>
    <div class="element metalloid c14 r4" data-stoixeio="Germanium">
    <div class="square">
        <div class="atomic-number">32</div>
        <div class="label">
        <div class="symbol">Ge</div>
        <div class="name">Germanium</div>
        </div>
        <div class="atomic-mass">72.63</div>
        <div class="atomic-weight">
        <p>[Ar] 3d<sup>10</sup>4s<sup>2</sup>4p<sup>2</sup></p>
        </div>
    </div>
    </div>
    <div class="element metalloid c15 r4" data-stoixeio="Arsenic">
    <div class="square">
        <div class="atomic-number">33</div>
        <div class="label">
        <div class="symbol">As</div>
        <div class="name">Arsenic</div>
        </div>
        <div class="atomic-mass">74.922</div>
        <div class="atomic-weight">
        <p>[Ar] 3d<sup>10</sup>4s<sup>2</sup>4p<sup>3</sup></p>
        </div>
    </div>
    </div>
    <div class="element other-nonmetal c16 r4" data-stoixeio="Selenium">
    <div class="square">
        <div class="atomic-number">34</div>
        <div class="label">
        <div class="symbol">Se</div>
        <div class="name">Selenium</div>
        </div>
        <div class="atomic-mass">78.971</div>
        <div class="atomic-weight">
        <p>[Ar] 3d<sup>10</sup>4s<sup>2</sup>4p<sup>4</sup></p>
        </div>
    </div>
    </div>
    <div class="element other-nonmetal c17 r4" data-stoixeio="Bromine">
    <div class="square">
        <div class="atomic-number">35</div>
        <div class="label">
        <div class="symbol">Br</div>
        <div class="name">Bromine</div>
        </div>
        <div class="atomic-weight">
        <p>[Ar] 3d<sup>10</sup>4s<sup>2</sup>4p<sup>5</sup></p>
        </div>
    </div>
    </div>
    <div class="element noble-gas c18 r4" data-stoixeio="Krypton">
    <div class="square">
        <div class="atomic-number">36</div>
        <div class="label">
        <div class="symbol">Kr</div>
        <div class="name">Krypton</div>
        </div>
        <div class="atomic-mass">83.798</div>
        <div class="atomic-weight">
        <p>[Ar] 3d<sup>10</sup>4s<sup>2</sup>4p<sup>6</sup></p>
        </div>
    </div>
    </div>
    <div class="element alkali-metal c1 r5" data-stoixeio="Rubidium">
    <div class="square">
        <div class="atomic-number">37</div>
        <div class="label">
        <div class="symbol">Rb</div>
        <div class="name">Rubidium</div>
        </div>
        <div class="atomic-mass">85.468</div>
        <div class="atomic-weight">
        <p>[Kr] 5s<sup>1</sup></p>
        </div>
    </div>
    </div>
    <div class="element alkaline-earth-metal c2 r5" data-stoixeio="Strontium">
    <div class="square">
        <div class="atomic-number">38</div>
        <div class="label">
        <div class="symbol">Sr</div>
        <div class="name">Strontium</div>
        </div>
        <div class="atomic-mass">87.62</div>
        <div class="atomic-weight">
        <p>[Kr] 5s<sup>2</sup></p>
        </div>
    </div>
    </div>
    <div class="element transition-metal c3 r5" data-stoixeio="Yttrium">
    <div class="square">
        <div class="atomic-number">39</div>
        <div class="label">
        <div class="symbol">Y</div>
        <div class="name">Yttrium</div>
        </div>
        <div class="atomic-mass">88.906</div>
        <div class="atomic-weight">
        <p>[Kr] 4d<sup>1</sup>5s<sup>2</sup></p>
        </div>
    </div>
    </div>
    <div class="element transition-metal c4 r5" data-stoixeio="Zirconium">
    <div class="square">
        <div class="atomic-number">40</div>
        <div class="label">
        <div class="symbol">Zr</div>
        <div class="name">Zirconium</div>
        </div>
        <div class="atomic-mass">91.224</div>
        <div class="atomic-weight">
        <p>[Kr] 4d<sup>2</sup>5s<sup>2</sup></p>
        </div>
    </div>
    </div>
    <div class="element transition-metal c5 r5" data-stoixeio="Niobium">
    <div class="square">
        <div class="atomic-number">41</div>
        <div class="label">
        <div class="symbol">Nb</div>
        <div class="name">Niobium</div>
        </div>
        <div class="atomic-mass">92.906</div>
        <div class="atomic-weight">
        <p>[Kr] 4d<sup>4</sup>5s<sup>1</sup></p>
        </div>
    </div>
    </div>
    <div class="element transition-metal c6 r5" data-stoixeio="Molybdenum">
    <div class="square">
        <div class="atomic-number">42</div>
        <div class="label">
        <div class="symbol">Mo</div>
        <div class="name">Molybdenum</div>
        </div>
        <div class="atomic-mass">95.95</div>
        <div class="atomic-weight">
        <p>[Kr] 4d<sup>5</sup>5s<sup>1</sup></p>
        </div>
    </div>
    </div>
    <div class="element transition-metal c7 r5" data-stoixeio="Technetium">
    <div class="square">
        <div class="atomic-number">43</div>
        <div class="label">
        <div class="symbol">Tc</div>
        <div class="name">Technetium</div>
        </div>
        <div class="atomic-mass">(98)</div>
        <div class="atomic-weight">
        <p>[Kr] 4d<sup>5</sup>5s<sup>2</sup></p>
        </div>
    </div>
    </div>
    <div class="element transition-metal c8 r5" data-stoixeio="Ruthenium">
    <div class="square">
        <div class="atomic-number">44</div>
        <div class="label">
        <div class="symbol">Ru</div>
        <div class="name">Ruthenium</div>
        </div>
        <div class="atomic-mass">101.07</div>
        <div class="atomic-weight">
        <p>[Kr] 4d<sup>7</sup>5s<sup>1</sup></p>
        </div>
    </div>
    </div>
    <div class="element transition-metal c9 r5" data-stoixeio="Rhodium">
    <div class="square">
        <div class="atomic-number">45</div>
        <div class="label">
        <div class="symbol">Rh</div>
        <div class="name">Rhodium</div>
        </div>
        <div class="atomic-mass">102.91</div>
        <div class="atomic-weight">
        <p>[Kr] 4d<sup>8</sup>5s<sup>1</sup></p>
        </div>
    </div>
    </div>
    <div class="element transition-metal c10 r5" data-stoixeio="Palladium">
    <div class="square">
        <div class="atomic-number">46</div>
        <div class="label">
        <div class="symbol">Pd</div>
        <div class="name">Palladium</div>
        </div>
        <div class="atomic-mass">106.42</div>
        <div class="atomic-weight">
        <p>[Kr] 4d<sup>10</sup></p>
        </div>
    </div>
    </div>
    <div class="element transition-metal c11 r5" data-stoixeio="Silver">
    <div class="square">
        <div class="atomic-number">47</div>
        <div class="label">
        <div class="symbol">Ag</div>
        <div class="name">Silver</div>
        </div>
        <div class="atomic-mass">107.87</div>
        <div class="atomic-weight">
        <p>[Kr] 4d<sup>10</sup>5s<sup>1</sup></p>
        </div>
    </div>
    </div>
    <div class="element transition-metal c12 r5" data-stoixeio="Cadmium">
    <div class="square">
        <div class="atomic-number">48</div>
        <div class="label">
        <div class="symbol">Cd</div>
        <div class="name">Cadmium</div>
        </div>
        <div class="atomic-mass">112.41</div>
        <div class="atomic-weight">
        <p>[Kr] 4d<sup>10</sup>5s<sup>2</sup></p>
        </div>
    </div>
    </div>
    <div class="element post-transition-metal c13 r5" data-stoixeio="Indium">
    <div class="square">
        <div class="atomic-number">49</div>
        <div class="label">
        <div class="symbol">In</div>
        <div class="name">Indium</div>
        </div>
        <div class="atomic-mass">114.82</div>
        <div class="atomic-weight">
        <p>[Kr] 4d<sup>10</sup>5s<sup>2</sup>5p<sup>1</sup></p>
        </div>
    </div>
    </div>
    <div class="element post-transition-metal c14 r5" data-stoixeio="Tin">
    <div class="square">

        <div class="atomic-number">50</div>
        <div class="label">
        <div class="symbol">Sn</div>
        <div class="name">Tin</div>
        </div>
        <div class="atomic-mass">204.38</div>
        <div class="atomic-weight">
        <p>[Kr] 4d<sup>10</sup>5s<sup>2</sup>5p<sup>2</sup></p>
        </div>
    </div>
    </div>
    <div class="element metalloid c15 r5" data-stoixeio="Antimony">
    <div class="square">
        <div class="atomic-number">51</div>
        <div class="label">
        <div class="symbol">Sb</div>
        <div class="name">Antimony</div>
        </div>
        <div class="atomic-mass">121.76</div>
        <div class="atomic-weight">
        <p>[Kr] 4d<sup>10</sup>5s<sup>2</sup>5p<sup>3</sup></p>
        </div>
    </div>
    </div>
    <div class="element metalloid c16 r5" data-stoixeio="Tellurium">
    <div class="square">
        <div class="atomic-number">52</div>
        <div class="label">
        <div class="symbol">Te</div>
        <div class="name">Tellurium</div>
        </div>
        <div class="atomic-mass">127.6</div>
        <div class="atomic-weight">
        <p>[Kr] 4d<sup>10</sup>5s<sup>2</sup>5p<sup>4</sup></p>
        </div>
    </div>
    </div>
    <div class="element other-nonmetal c17 r5" data-stoixeio="Iodine">
    <div class="square">
        <div class="atomic-number">53</div>
        <div class="label">
        <div class="symbol">I</div>
        <div class="name">Iodine</div>
        </div>
        <div class="atomic-mass">126.9</div>
        <div class="atomic-weight">
        <p>[Kr] 4d<sup>10</sup>5s<sup>2</sup>5p<sup>5</sup></p>
        </div>
    </div>
    </div>
    <div class="element noble-gas c18 r5" data-stoixeio="Xenon">
    <div class="square">
        <div class="atomic-number">54</div>
        <div class="label">
        <div class="symbol">Xe</div>
        <div class="name">Xenon</div>
        </div>
        <div class="atomic-mass">131.29</div>
        <div class="atomic-weight">
        <p>[Kr] 4d<sup>10</sup>5s<sup>2</sup>5p<sup>6</sup></p>
        </div>
    </div>
    </div>
    <div class="element alkali-metal c1 r6" data-stoixeio="Caesium">
    <div class="square">
        <div class="atomic-number">55</div>
        <div class="label">
        <div class="symbol">Cs</div>
        <div class="name">Caesium</div>
        </div>
        <div class="atomic-mass">132.91</div>
        <div class="atomic-weight">
        <p>[Xe] 6s<sup>1</sup></p>
        </div>
    </div>
    </div>
    <div class="element alkaline-earth-metal c2 r6" data-stoixeio="Barium">
    <div class="square">
        <div class="atomic-number">56</div>
        <div class="label">
        <div class="symbol">Ba</div>
        <div class="name">Barium</div>
        </div>
        <div class="atomic-mass">137.33</div>
        <div class="atomic-weight">
        <p>[Xe] 6s<sup>2</sup></p>
        </div>
    </div>
    </div>
    <div class="element lanthanoid c4 r9" data-stoixeio="Lanthanum">
    <div class="square">
        <div class="atomic-number">57</div>
        <div class="label">
        <div class="symbol">La</div>
        <div class="name">Lanthanum</div>
        </div>
        <div class="atomic-mass">138.91</div>
        <div class="atomic-weight">
        <p>[Xe] 5d<sup>1</sup>6s<sup>2</sup></p>
        </div>
    </div>
    </div>
    <div class="element lanthanoid c5 r9" data-stoixeio="Cerium">
    <div class="square">
        <div class="atomic-number">58</div>
        <div class="label">
        <div class="symbol">Ce</div>
        <div class="name">Cerium</div>
        </div>
        <div class="atomic-mass">140.12</div>
        <div class="atomic-weight">
        <p>[Xe] 4f<sup>1</sup>5d<sup>1</sup>6s<sup>2</sup></p>
        </div>
    </div>
    </div>
    <div class="element lanthanoid c6 r9" data-stoixeio="Praseodymium">
    <div class="square">
        <div class="atomic-number">59</div>
        <div class="label">
        <div class="symbol">Pr</div>
        <div class="name">Praseodymium</div>
        </div>
        <div class="atomic-mass">140.91</div>
        <div class="atomic-weight">
        <p>[Xe] 4f<sup>3</sup>6s<sup>2</sup></p>
        </div>
    </div>
    </div>
    <div class="element lanthanoid c7 r9" data-stoixeio="Neodymium">
    <div class="square">
        <div class="atomic-number">60</div>
        <div class="label">
        <div class="symbol">Nd</div>
        <div class="name">Neodymium</div>
        </div>
        <div class="atomic-mass">144.24</div>
        <div class="atomic-weight">
        <p>[Xe] 4f<sup>4</sup>6s<sup>2</sup></p>
        </div>
    </div>
    </div>
    <div class="element lanthanoid c8 r9" data-stoixeio="Promethium">
    <div class="square">
        <div class="atomic-number">61</div>
        <div class="label">
        <div class="symbol">Pm</div>
        <div class="name">Promethium</div>
        </div>
        <div class="atomic-mass">144.24</div>
        <div class="atomic-weight">
        <p>[Xe] 4f<sup>5</sup>6s<sup>2</sup></p>
        </div>
    </div>
    </div>
    <div class="element lanthanoid c9 r9" data-stoixeio="Samarium">
    <div class="square">
        <div class="atomic-number">62</div>
        <div class="label">
        <div class="symbol">Sm</div>
        <div class="name">Samarium</div>
        </div>
        <div class="atomic-mass">150.36</div>
        <div class="atomic-weight">
        <p>[Xe] 4f<sup>6</sup>6s<sup>2</sup></p>
        </div>
    </div>
    </div>
    <div class="element lanthanoid c10 r9" data-stoixeio="Europium">
    <div class="square">
        <div class="atomic-number">63</div>
        <div class="label">
        <div class="symbol">Eu</div>
        <div class="name">Europium</div>
        </div>
        <div class="atomic-mass">151.96</div>
        <div class="atomic-weight">
        <p>[Xe] 4f<sup>7</sup>6s<sup>2</sup></p>
        </div>
    </div>
    </div>
    <div class="element lanthanoid c11 r9" data-stoixeio="Gadolinium">
    <div class="square">
        <div class="atomic-number">64</div>
        <div class="label">
        <div class="symbol">Gd</div>
        <div class="name">Gadolinium</div>
        </div>
        <div class="atomic-mass">157.25</div>
        <div class="atomic-weight">
        <p>[Xe] 4f<sup>7</sup>5d<sup>1</sup>6s<sup>2</sup></p>
        </div>
    </div>
    </div>
    <div class="element lanthanoid c12 r9" data-stoixeio="Terbium">
    <div class="square">
        <div class="atomic-number">65</div>
        <div class="label">
        <div class="symbol">Tb</div>
        <div class="name">Terbium</div>
        </div>
        <div class="atomic-mass">158.93</div>
        <div class="atomic-weight">
        <p>[Xe] 4f<sup>9</sup>6s<sup>2</sup></p>
        </div>
    </div>
    </div>
    <div class="element lanthanoid c13 r9" data-stoixeio="Dysprosium">
    <div class="square">
        <div class="atomic-number">66</div>
        <div class="label">
        <div class="symbol">Dy</div>
        <div class="name">Dysprosium</div>
        </div>
        <div class="atomic-mass">162.5</div>
        <div class="atomic-weight">
        <p>[Xe] 4f<sup>10</sup>6s<sup>2</sup></p>
        </div>
    </div>
    </div>
    <div class="element lanthanoid c14 r9" data-stoixeio="Holmium">
    <div class="square">
        <div class="atomic-number">67</div>
        <div class="label">
        <div class="symbol">Ho</div>
        <div class="name">Holmium</div>
        </div>
        <div class="atomic-mass">164.93</div>
        <div class="atomic-weight">
        <p>[Xe] 4f<sup>11</sup>6s<sup>2</sup></p>
        </div>
    </div>
    </div>
    <div class="element lanthanoid c15 r9" data-stoixeio="Erbium">
    <div class="square">
        <div class="atomic-number">68</div>
        <div class="label">
        <div class="symbol">Er</div>
        <div class="name">Erbium</div>
        </div>
        <div class="atomic-mass">167.26</div>
        <div class="atomic-weight">
        <p>[Xe] 4f<sup>12</sup>6s<sup>2</sup></p>
        </div>
    </div>
    </div>
    <div class="element lanthanoid c16 r9" data-stoixeio="Thulium">
    <div class="square">
        <div class="atomic-number">69</div>
        <div class="label">
        <div class="symbol">Tm</div>
        <div class="name">Thulium</div>
        </div>
        <div class="atomic-mass">168.93</div>
        <div class="atomic-weight">
        <p>[Xe] 4f<sup>13</sup>6s<sup>2</sup></p>
        </div>
    </div>
    </div>
    <div class="element lanthanoid c17 r9" data-stoixeio="Ytterbium">
    <div class="square">
        <div class="atomic-number">70</div>
        <div class="label">
        <div class="symbol">Yb</div>
        <div class="name">Ytterbium</div>
        </div>
        <div class="atomic-mass">173.05</div>
        <div class="atomic-weight">
        <p>[Xe] 4f<sup>14</sup>6s<sup>2</sup></p>
        </div>
    </div>
    </div>
    <div class="element lanthanoid c18 r9" data-stoixeio="Lutetium">
    <div class="square">
        <div class="atomic-number">71</div>
        <div class="label">
        <div class="symbol">Lu</div>
        <div class="name">Lutetium</div>
        </div>
        <div class="atomic-mass">174.97</div>
        <div class="atomic-weight">
        <p>[Xe] 4f<sup>14</sup>5d<sup>1</sup>6s<sup>2</sup></p>
        </div>
    </div>
    </div>
    <div class="element transition-metal c4 r6" data-stoixeio="Hafnium">
    <div class="square">
        <div class="atomic-number">72</div>
        <div class="label">
        <div class="symbol">Hf</div>
        <div class="name">Hafnium</div>
        </div>
        <div class="atomic-mass">178.49</div>
        <div class="atomic-weight">
        <p>[Xe] 4f<sup>14</sup>5d<sup>2</sup>6s<sup>2</sup></p>
        </div>
    </div>
    </div>
    <div class="element transition-metal c5 r6" data-stoixeio="Tantalum">
    <div class="square">

        <div class="atomic-number">73</div>
        <div class="label">
        <div class="symbol">Ta</div>
        <div class="name">Tantalum</div>
        </div>
        <div class="atomic-mass">180.95</div>
        <div class="atomic-weight">
        <p>[Xe] 4f<sup>14</sup>5d<sup>3</sup>6s<sup>2</sup></p>
        </div>
    </div>
    </div>
    <div class="element transition-metal c6 r6" data-stoixeio="Tungsten">
    <div class="square">
        <div class="atomic-number">74</div>
        <div class="label">
        <div class="symbol">W</div>
        <div class="name">Tungsten</div>
        </div>
        <div class="atomic-mass">183.84</div>
        <div class="atomic-weight">
        <p>[Xe] 4f<sup>14</sup>5d<sup>4</sup>6s<sup>2</sup></p>
        </div>
    </div>
    </div>
    <div class="element transition-metal c7 r6" data-stoixeio="Rhenium">
    <div class="square">
        <div class="atomic-number">75</div>
        <div class="label">
        <div class="symbol">Re</div>
        <div class="name">Rhenium</div>
        </div>
        <div class="atomic-mass">186.21</div>
        <div class="atomic-weight">
        <p>[Xe] 4f<sup>14</sup>5d<sup>5</sup>6s<sup>2</sup></p>
        </div>
    </div>
    </div>
    <div class="element transition-metal c8 r6" data-stoixeio="Osmium">
    <div class="square">
        <div class="atomic-number">76</div>
        <div class="label">
        <div class="symbol">Os</div>
        <div class="name">Osmium</div>
        </div>
        <div class="atomic-mass">190.23</div>
        <div class="atomic-weight">
        <p>[Xe] 4f<sup>14</sup>5d<sup>6</sup>6s<sup>2</sup></p>
        </div>
    </div>
    </div>
    <div class="element transition-metal c9 r6" data-stoixeio="Iridium">
    <div class="square">
        <div class="atomic-number">77</div>
        <div class="label">
        <div class="symbol">Ir</div>
        <div class="name">Iridium</div>
        </div>
        <div class="atomic-mass">192.22</div>
        <div class="atomic-weight">
        <p>[Xe] 4f<sup>14</sup>5d<sup>7</sup>6s<sup>2</sup></p>
        </div>
    </div>
    </div>
    <div class="element transition-metal c10 r6" data-stoixeio="Platinum">
    <div class="square">
        <div class="atomic-number">78</div>
        <div class="label">
        <div class="symbol">Pt</div>
        <div class="name">Platinum</div>
        </div>
        <div class="atomic-mass">195.08</div>
        <div class="atomic-weight">
        <p>[Xe] 4f<sup>14</sup>5d<sup>9</sup>6s<sup>1</sup></p>
        </div>
    </div>
    </div>
    <div class="element transition-metal c11 r6" data-stoixeio="Gold">
    <div class="square">
        <div class="atomic-number">79</div>
        <div class="label">
        <div class="symbol">Au</div>
        <div class="name">Gold</div>
        </div>
        <div class="atomic-mass">196.97</div>
        <div class="atomic-weight">
        <p>[Xe] 4f<sup>14</sup>5d<sup>10</sup>6s<sup>1</sup></p>
        </div>
    </div>
    </div>
    <div class="element transition-metal c12 r6" data-stoixeio="Mercury_(element)">
    <div class="square">
        <div class="atomic-number">80</div>
        <div class="label">
        <div class="symbol">Hg</div>
        <div class="name">Mercury</div>
        </div>
        <div class="atomic-mass">200.59</div>
        <div class="atomic-weight">
        <p>[Xe] 4f<sup>14</sup>5d<sup>10</sup>6s<sup>2</sup></p>
        </div>
    </div>
    </div>
    <div class="element post-transition-metal c13 r6" data-stoixeio="Thallium">
    <div class="square">
        <div class="atomic-number">81</div>
        <div class="label">
        <div class="symbol">Tl</div>
        <div class="name">Thallium</div>
        </div>
        <div class="atomic-mass">204.38</div>
        <div class="atomic-weight">
        <p>[Xe] 4f<sup>14</sup>5d<sup>10</sup>6s<sup>2</sup>6p<sup>1</sup></p>
        </div>
    </div>
    </div>
    <div class="element post-transition-metal c14 r6" data-stoixeio="Lead">
    <div class="square">
        <div class="atomic-number">82</div>
        <div class="label">
        <div class="symbol">Pb</div>
        <div class="name">Lead</div>
        </div>
        <div class="atomic-mass">207.2</div>
        <div class="atomic-weight">
        <p>[Xe] 4f<sup>14</sup>5d<sup>10</sup>6s<sup>2</sup>6p<sup>2</sup></p>
        </div>
    </div>
    </div>
    <div class="element post-transition-metal c15 r6" data-stoixeio="Bismuth">
    <div class="square">
        <div class="atomic-number">83</div>
        <div class="label">
        <div class="symbol">Bi</div>
        <div class="name">Bismuth</div>
        </div>
        <div class="atomic-mass">208.98</div>
        <div class="atomic-weight">
        <p>[Xe] 4f<sup>14</sup>5d<sup>10</sup>6s<sup>2</sup>6p<sup>3</sup></p>
        </div>
    </div>
    </div>
    <div class="element post-transition-metal c16 r6" data-stoixeio="Polonium">
    <div class="square">
        <div class="atomic-number">84</div>
        <div class="label">
        <div class="symbol">Po</div>
        <div class="name">Polonium</div>
        </div>
        <div class="atomic-mass">(209)</div>
        <div class="atomic-weight">
        <p>[Xe] 4f<sup>14</sup>5d<sup>10</sup>6s<sup>2</sup>6p<sup>4</sup></p>
        </div>
    </div>
    </div>
    <div class="element metalloid c17 r6" data-stoixeio="Astatine">
    <div class="square">
        <div class="atomic-number">85</div>
        <div class="label">
        <div class="symbol">At</div>
        <div class="name">Astatine</div>
        </div>
        <div class="atomic-mass">(210)</div>
        <div class="atomic-weight">
        <p>[Xe] 4f<sup>14</sup>5d<sup>10</sup>6s<sup>2</sup>6p<sup>5</sup></p>
        </div>
    </div>
    </div>
    <div class="element noble-gas c18 r6" data-stoixeio="Radon">
    <div class="square">
        <div class="atomic-number">86</div>
        <div class="label">
        <div class="symbol">Rn</div>
        <div class="name">Radon</div>
        </div>
        <div class="atomic-mass">(222)</div>
        <div class="atomic-weight">
        <p>[Xe] 4f<sup>14</sup>5d<sup>10</sup>6s<sup>2</sup>6p<sup>6</sup></p>
        </div>
    </div>
    </div>
    <div class="element alkali-metal c1 r7" data-stoixeio="Francium">
    <div class="square">
        <div class="atomic-number">87</div>
        <div class="label">
        <div class="symbol">Fr</div>
        <div class="name">Francium</div>
        </div>
        <div class="atomic-mass">(223)</div>
        <div class="atomic-weight">
        <p>[Rn] 7s<sup>1</sup></p>
        </div>
    </div>
    </div>
    <div class="element alkaline-earth-metal c2 r7" data-stoixeio="Radium">
    <div class="square">
        <div class="atomic-number">88</div>
        <div class="label">
        <div class="symbol">Ra</div>
        <div class="name">Radium</div>
        </div>
        <div class="atomic-mass">(226)</div>
        <div class="atomic-weight">
        <p>[Rn] 7s<sup>2</sup></p>
        </div>
    </div>
    </div>
    <div class="element actinoid c4 r10" data-stoixeio="Actinium">
    <div class="square">
        <div class="atomic-number">89</div>
        <div class="label">
        <div class="symbol">Ac</div>
        <div class="name">Actinium</div>
        </div>
        <div class="atomic-mass">(227)</div>
        <div class="atomic-weight">
        <p>[Rn] 6d<sup>1</sup>7s<sup>2</sup></p>
        </div>
    </div>
    </div>
    <div class="element actinoid c5 r10" data-stoixeio="Thorium">
    <div class="square">
        <div class="atomic-number">90</div>
        <div class="label">
        <div class="symbol">Th</div>
        <div class="name">Thorium</div>
        </div>
        <div class="atomic-mass">232.04</div>
        <div class="atomic-weight">
        <p>[Rn] 6d<sup>2</sup>7s<sup>2</sup></p>
        </div>
    </div>
    </div>
    <div class="element actinoid c6 r10" data-stoixeio="Protactinium">
    <div class="square">
        <div class="atomic-number">91</div>
        <div class="label">
        <div class="symbol">Pa</div>
        <div class="name">Protactinium</div>
        </div>
        <div class="atomic-mass">231.04</div>
        <div class="atomic-weight">
        <p>[Rn] 5f<sup>2</sup>6d<sup>1</sup>7s<sup>2</sup></p>
        </div>
    </div>
    </div>
    <div class="element actinoid c7 r10" data-stoixeio="Uranium">
    <div class="square">
        <div class="atomic-number">92</div>
        <div class="label">
        <div class="symbol">U</div>
        <div class="name">Uranium</div>
        </div>
        <div class="atomic-mass">238.03</div>
        <div class="atomic-weight">
        <p>[Rn] 5f<sup>3</sup>6d<sup>1</sup>7s<sup>2</sup></p>
        </div>
    </div>
    </div>
    <div class="element actinoid c8 r10" data-stoixeio="Neptunium">
    <div class="square">
        <div class="atomic-number">93</div>
        <div class="label">
        <div class="symbol">Np</div>
        <div class="name">Neptunium</div>
        </div>
        <div class="atomic-mass">(237)</div>
        <div class="atomic-weight">
        <p>[Rn] 5f<sup>4</sup>6d<sup>1</sup>7s<sup>2</sup></p>
        </div>
    </div>
    </div>
    <div class="element actinoid c9 r10" data-stoixeio="Plutonium">
    <div class="square">
        <div class="atomic-number">94</div>
        <div class="label">
        <div class="symbol">Pu</div>
        <div class="name">Plutonium</div>
        </div>
        <div class="atomic-mass">(244)</div>
        <div class="atomic-weight">
        <p>[Rn] 5f<sup>6</sup>7s<sup>2</sup></p>
        </div>
    </div>
    </div>
    <div class="element actinoid c10 r10" data-stoixeio="Americium">
    <div class="square">
        <div class="atomic-number">95</div>
        <div class="label">
        <div class="symbol">Am</div>
        <div class="name">Americium</div>
        </div>
        <div class="atomic-mass">(243)</div>
        <div class="atomic-weight">
        <p>[Rn] 5f<sup>7</sup>7s<sup>2</sup></p>
        </div>
    </div>
    </div>
    <div class="element actinoid c11 r10" data-stoixeio="Curium">
    <div class="square">
        <div class="atomic-number">96</div>
        <div class="label">
        <div class="symbol">Cm</div>
        <div class="name">Curium</div>
        </div>
        <div class="atomic-mass">(247)</div>
        <div class="atomic-weight">
        <p>[Rn] 5f<sup>7</sup>6d<sup>1</sup>7s<sup>2</sup></p>
        </div>
    </div>
    </div>
    <div class="element actinoid c12 r10" data-stoixeio="Berkelium">
    <div class="square">
        <div class="atomic-number">97</div>
        <div class="label">
        <div class="symbol">Bk</div>
        <div class="name">Berkelium</div>
        </div>
        <div class="atomic-mass">(247)</div>
        <div class="atomic-weight">
        <p>[Rn] 5f<sup>9</sup>>7s<sup>2</sup></p>
        </div>
    </div>
    </div>
    <div class="element actinoid c13 r10" data-stoixeio="Californium">
    <div class="square">
        <div class="atomic-number">98</div>
        <div class="label">
        <div class="symbol">Cf</div>
        <div class="name">Californium</div>
        </div>
        <div class="atomic-mass">(251)</div>
        <div class="atomic-weight">
        <p>[Rn] 5f<sup>10</sup>7s<sup>2</sup></p>
        </div>
    </div>
    </div>
    <div class="element actinoid c14 r10" data-stoixeio="Einsteinium">
    <div class="square">
        <div class="atomic-number">99</div>
        <div class="label">
        <div class="symbol">Es</div>
        <div class="name">Einsteinium</div>
        </div>
        <div class="atomic-mass">(252)</div>
        <div class="atomic-weight">
        <p>[Rn] 5f<sup>11</sup>7s<sup>2</sup></p>
        </div>
    </div>
    </div>
    <div class="element actinoid c15 r10" data-stoixeio="Fermium">
    <div class="square">
        <div class="atomic-number">100</div>
        <div class="label">
        <div class="symbol">Fm</div>
        <div class="name">Fermium</div>
        </div>
        <div class="atomic-mass">(257)</div>
        <div class="atomic-weight">
        <p>[Rn] 5f<sup>12</sup>7s<sup>2</sup></p>
        </div>
    </div>
    </div>
    <div class="element actinoid c16 r10" data-stoixeio="Mendelevium">
    <div class="square">
        <div class="atomic-number">101</div>
        <div class="label">
        <div class="symbol">Md</div>
        <div class="name">Mendelevium</div>
        </div>
        <div class="atomic-mass">(258)</div>
        <div class="atomic-weight">
        <p>[Rn] 5f<sup>13</sup>7s<sup>2</sup></p>
        </div>
    </div>
    </div>
    <div class="element actinoid c17 r10" data-stoixeio="Nobelium">
    <div class="square">
        <div class="atomic-number">102</div>
        <div class="label">
        <div class="symbol">No</div>
        <div class="name">Nobelium</div>
        </div>
        <div class="atomic-mass">(259)</div>
        <div class="atomic-weight">
        <p>[Rn] 5f<sup>14</sup>7s<sup>2</sup></p>
        </div>
    </div>
    </div>
    <div class="element actinoid c18 r10" data-stoixeio="Lawrencium">
    <div class="square">
        <div class="atomic-number">103</div>
        <div class="label">
        <div class="symbol">Lr</div>
        <div class="name">Lawrencium</div>
        </div>
        <div class="atomic-mass">(266)</div>
        <div class="atomic-weight">
        <p>[Rn] 5f<sup>14</sup>7s<sup>2</sup>7p<sup>1</sup></p>
        </div>
    </div>
    </div>
    <div class="element transition-metal c4 r7" data-stoixeio="Rutherfordium">
    <div class="square">
        <div class="atomic-number">104</div>
        <div class="label">
        <div class="symbol">Rf</div>
        <div class="name">Rutherfordium</div>
        </div>
        <div class="atomic-mass">(267)</div>
        <div class="atomic-weight">
        <p>[Rn] 5f<sup>14</sup>6d<sup>2</sup>7s<sup>2</sup></p>
        </div>
    </div>
    </div>
    <div class="element transition-metal c5 r7" data-stoixeio="Dubnium">
    <div class="square">
        <div class="atomic-number">105</div>
        <div class="label">
        <div class="symbol">Db</div>
        <div class="name">Dubnium</div>
        </div>
        <div class="atomic-mass">(268)</div>
        <div class="atomic-weight">
        <p>[Rn] 5f<sup>14</sup>6d<sup>3</sup>7s<sup>2</sup></p>
        </div>
    </div>
    </div>
    <div class="element transition-metal c6 r7" data-stoixeio="Seaborgium">
    <div class="square">
        <div class="atomic-number">106</div>
        <div class="label">
        <div class="symbol">Sg</div>
        <div class="name">Seaborgium</div>
        </div>
        <div class="atomic-mass">(269)</div>
        <div class="atomic-weight">
        <p>[Rn] 5f<sup>14</sup>6d<sup>4</sup>7s<sup>2</sup></p>
        </div>
    </div>
    </div>
    <div class="element transition-metal c7 r7" data-stoixeio="Bohrium">
    <div class="square">
        <div class="atomic-number">107</div>
        <div class="label">
        <div class="symbol">Bh</div>
        <div class="name">Bohrium</div>
        </div>
        <div class="atomic-mass">(270)</div>
        <div class="atomic-weight">
        <p>[Rn] 5f<sup>14</sup>6d<sup>5</sup>7s<sup>2</sup></p>
        </div>
    </div>
    </div>
    <div class="element transition-metal c8 r7" data-stoixeio="Hassium">
    <div class="square">
        <div class="atomic-number">108</div>
        <div class="label">
        <div class="symbol">Hs</div>
        <div class="name">Hassium</div>
        </div>
        <div class="atomic-mass">(277)</div>
        <div class="atomic-weight">
        <p>[Rn] 5f<sup>14</sup>6d<sup>6</sup>7s<sup>2</sup></p>
        </div>
    </div>
    </div>
    <div class="element unknown c9 r7" data-stoixeio="Meitnerium">
    <div class="square">
        <div class="atomic-number">109</div>
        <div class="label">
        <div class="symbol">Mt</div>
        <div class="name">Meitnerium</div>
        </div>
        <div class="atomic-mass">(278)</div>
        <div class="atomic-weight">
        <p>[Rn] 5f<sup>14</sup>6d<sup>7</sup>7s<sup>2</sup></p>
        </div>
    </div>
    </div>
    <div class="element unknown c10 r7" data-stoixeio="Darmstadtium">
    <div class="square">
        <div class="atomic-number">110</div>
        <div class="label">
        <div class="symbol">Ds</div>
        <div class="name">Darmstadtium</div>
        </div>
        <div class="atomic-mass">(281)</div>
        <div class="atomic-weight">
        <p>[Rn] 5f<sup>14</sup>6d<sup>8</sup>7s<sup>2</sup></p>
        </div>
    </div>
    </div>
    <div class="element unknown c11 r7" data-stoixeio="Roentgenium">
    <div class="square">
        <div class="atomic-number">111</div>
        <div class="label">
        <div class="symbol">Rg</div>
        <div class="name">Roentgenium</div>
        </div>
        <div class="atomic-mass">(282)</div>
        <div class="atomic-weight">
        <p>[Rn] 5f<sup>14</sup>6d<sup>9</sup>7s<sup>2</sup></p>
        </div>
    </div>
    </div>
    <div class="element transition-metal c12 r7" data-stoixeio="Copernicium">
    <div class="square">
        <div class="atomic-number">112</div>
        <div class="label">
        <div class="symbol">Cn</div>
        <div class="name">Copernicium</div>
        </div>
        <div class="atomic-mass">(282)</div>
        <div class="atomic-weight">
        <p>[Rn] 5f<sup>14</sup>6d<sup>10</sup>7s<sup>2</sup></p>
        </div>
    </div>
    </div>
    <div class="element unknown c13 r7" data-stoixeio="Nihonium">
    <div class="square">
        <div class="atomic-number">113</div>
        <div class="label">
        <div class="symbol">Nh</div>
        <div class="name">Nihonium</div>
        </div>
        <div class="atomic-mass">(286)</div>
        <div class="atomic-weight">
        <p>[Rn] 5f<sup>14</sup>6d<sup>10</sup>7s<sup>2</sup>7p<sup>1</sup></p>
        </div>
    </div>
    </div>
    <div class="element post-transition-metal c14 r7" data-stoixeio="Flerovium">
    <div class="square">
        <div class="atomic-number">114</div>
        <div class="label">
        <div class="symbol">Fl</div>
        <div class="name">Flerovium</div>
        </div>
        <div class="atomic-mass">(289)</div>
        <div class="atomic-weight">
        <p>[Rn] 5f<sup>14</sup>6d<sup>10</sup>7s<sup>2</sup>7p<sup>2</sup></p>
        </div>
    </div>
    </div>
    <div class="element unknown c15 r7" data-stoixeio="Moscovium">
    <div class="square">
        <div class="atomic-number">115</div>
        <div class="label">
        <div class="symbol">Mc</div>
        <div class="name">Moscovium</div>
        </div>
        <div class="atomic-mass">(290)</div>
        <div class="atomic-weight">
        <p>[Rn] 5f<sup>14</sup>6d<sup>10</sup>7s<sup>2</sup>7p<sup>3</sup></p>
        </div>
    </div>
    </div>
    <div class="element unknown c16 r7" data-stoixeio="Livermorium">
    <div class="square">
        <div class="atomic-number">116</div>
        <div class="label">
        <div class="symbol">Lv</div>
        <div class="name">Livermorium</div>
        </div>
        <div class="atomic-mass">(293)</div>
        <div class="atomic-weight">
        <p>[Rn] 5f<sup>14</sup>6d<sup>10</sup>7s<sup>2</sup>7p<sup>4</sup></p>
        </div>
    </div>
    </div>
    <div class="element unknown c17 r7" data-stoixeio="Tennessine">
    <div class="square">
        <div class="atomic-number">117</div>
        <div class="label">
        <div class="symbol">Ts</div>
        <div class="name">Tennessine</div>
        </div>
        <div class="atomic-mass">(294)</div>
        <div class="atomic-weight">
        <p>[Rn] 5f<sup>14</sup>6d<sup>10</sup>7s<sup>2</sup>7p<sup>5</sup></p>
        </div>
    </div>
    </div>
    <div class="element unknown c18 r7" data-stoixeio="Oganesson">
    <div class="square">
        <div class="atomic-number">118</div>
        <div class="label">
        <div class="symbol">Og</div>
        <div class="name">Oganesson</div>
        </div>
        <div class="atomic-mass">(294)</div>
        <div class="atomic-weight">
        <p>[Rn] 5f<sup>14</sup>6d<sup>10</sup>7s<sup>2</sup>7p<sup>6</sup></p>
        </div>
    </div>
    </div>
    <div class="placeholder lanthanoid c3 r6">
    <div class="square">57-71</div>
    </div>
    <div class="placeholder actinoid c3 r7">
    <div class="square">89-103</div>
    </div>`;

let a = [];
//for i in range(olomazi.count("\n")):
//for i in range(5):
   // if (i)%14==0:
//        print(olomazi.splitlines()[i*12])
//       print(i)

let kodstoix = [];
// Replicating the list comprehension from Python with a for loop
let splitted = olomazi.split("    </div>\n    </div>");
for (let i = 0; i < 118; i++) {
    kodstoix.push(String(splitted[i]) + String("    </div>\n    </div>"));
}
//console.log((kodstoix[23]));

function stoapokod(txt) {
    // Splitting the text using a regex and returning a modified string
    let x = txt.split(/<div class=".+?(?=")" data-stoixeio="/);
    return String(x[1]).slice(0, -2);
    //return x
}
//console.log(kodstoix[87]);
//for i in range(19):
//    print(stoapokod(String(kodstoix[i]).splitlines()[2]))

function dosekod(i) {
    return kodstoix[i-1];
}
function realdosekod(onoma) {
    return dosekod(getAtomicNumber(onoma))
}
console.log(dosekod(getAtomicNumber("Hydrogen")));
//console.log(stoapokod((kodstoix[23])));
function makestoixeioplhr(tsex, typos) {
    if(tsex == "Hydrogen") {
        if(typos==0){
        return(`            <li>Το υδρογόνο είναι το πιο ελαφρύ και άφθονο στοιχείο στο σύμπαν. Είναι το πρώτο στοιχείο στον περιοδικό πίνακα και έχει χημικό σύμβολο H. Το υδρογόνο παίζει σημαντικό ρόλο στη διαδικασία της πυρηνικής σύντηξης στον ήλιο.</li>
            <li>Το υδρογόνο βρίσκεται κυρίως στα αστέρια, συμπεριλαμβανομένου του ήλιου, όπου συμμετέχει στη διαδικασία της πυρηνικής σύντηξης. Επίσης, είναι παρόν σε πολλές ενώσεις, όπως το νερό (H₂O) και οι οργανικές ενώσεις.</li>
            <li>Το υδρογόνο ανακαλύφθηκε το 1766 από τον Άγγλο χημικό Χένρι Καβεντίς, ο οποίος το ονόμασε "φλογερό αέριο". Αργότερα, το 1783, ο Γάλλος επιστήμονας Αντουάν Λαβοαζιέ το ονόμασε "υδρογόνο", που σημαίνει "γεννήτορας νερού".</li>`)}
        else{
            return("Υδρογόνο")
        }
    }
    if(tsex == "Iron") {
        if(typos==0){
            return(`            <li>Ο σίδηρος είναι ένα μέταλλο με χημικό σύμβολο Fe και ατομικό αριθμό 26. Είναι ένα από τα πιο άφθονα μέταλλα στη Γη και βασικό συστατικό του χάλυβα.</li>
                <li>Ο σίδηρος είναι απαραίτητος για τη ζωή, καθώς αποτελεί βασικό στοιχείο της αιμοσφαιρίνης, της πρωτεΐνης που μεταφέρει οξυγόνο στο αίμα.</li>
                <li>Ο σίδηρος χρησιμοποιείται από την αρχαιότητα, με τους πρώτους πολιτισμούς να τον αξιοποιούν για την κατασκευή εργαλείων και όπλων, σηματοδοτώντας την Εποχή του Σιδήρου.</li>`)
        }
        else{
            return("Σίδηρος")
        }
    }
    if(tsex == "Lithium") {
        if(typos==0){
            return(`            <li>Το λίθιο είναι ένα αλκαλικό μέταλλο με χημικό σύμβολο Li και ατομικό αριθμό 3. Είναι το ελαφρύτερο μέταλλο και αντιδρά έντονα με το νερό.</li>
                <li>Το λίθιο χρησιμοποιείται σε μπαταρίες ιόντων λιθίου, που τροφοδοτούν κινητά τηλέφωνα, φορητούς υπολογιστές και ηλεκτρικά οχήματα.</li>
                <li>Ανακαλύφθηκε το 1817 από τον Σουηδό χημικό Γιόχαν Αρφβέντσον, ενώ μερικές από τις μεγαλύτερες φυσικές αποθέσεις του βρίσκονται στη Νότια Αμερική.</li>`)
        }
        else{
            return("Λίθιο")
        }
    }
    
    if(tsex == "Oxygen") {
        if(typos==0){
            return(`            <li>Το οξυγόνο είναι ένα αέριο στοιχείο με χημικό σύμβολο O και ατομικό αριθμό 8. Είναι απαραίτητο για τη ζωή, καθώς χρησιμοποιείται στην αναπνοή των οργανισμών.</li>
                <li>Αποτελεί περίπου το 21% της ατμόσφαιρας της Γης και είναι βασικό συστατικό του νερού (H₂O) και πολλών άλλων χημικών ενώσεων.</li>
                <li>Το οξυγόνο ανακαλύφθηκε ανεξάρτητα από τον Σουηδό Καρλ Σέελε το 1772 και τον Άγγλο Τζόζεφ Πρίστλεϊ το 1774, και αργότερα ο Αντουάν Λαβουαζιέ του έδωσε το όνομα "οξυγόνο".</li>`)
        }
        else{
            return("Οξυγόνο")
        }
    }
    
    if(tsex == "Sodium") {
        if(typos==0){
            return(`            <li>Το νάτριο είναι ένα αλκαλικό μέταλλο με χημικό σύμβολο Na και ατομικό αριθμό 11. Είναι μαλακό, ασημί και αντιδρά έντονα με το νερό.</li>
                <li>Το νάτριο είναι απαραίτητο για τη ζωή, καθώς βοηθά στη ρύθμιση της αρτηριακής πίεσης και στη μετάδοση των νευρικών σημάτων.</li>
                <li>Ανακαλύφθηκε από τον Άγγλο χημικό Χάμφρι Ντέιβι το 1807 μέσω ηλεκτρόλυσης, και είναι κύριο συστατικό του επιτραπέζιου αλατιού (NaCl).</li>`)
        }
        else{
            return("Νάτριο")
        }
    }
    if(tsex == "Potassium") {
        if(typos==0){
            return(`            <li>Το κάλιο είναι ένα αλκαλικό μέταλλο με χημικό σύμβολο K και ατομικό αριθμό 19. Είναι απαραίτητο για τη λειτουργία των κυττάρων και των μυών.</li>
                <li>Το κάλιο παίζει σημαντικό ρόλο στη ρύθμιση της ισορροπίας των υγρών στο σώμα και στη μετάδοση των νευρικών σημάτων.</li>
                <li>Ανακαλύφθηκε από τον Άγγλο χημικό Χάμφρι Ντέιβι το 1807 μέσω ηλεκτρόλυσης της ποτάσσας (K₂CO₃), και είναι ένα από τα πιο άφθονα στοιχεία στη φύση.</li>`)
        }
        else{
            return("Κάλιο")
        }
    }
    
    if(tsex == "Chlorine") {
        if(typos==0){
            return(`            <li>Το χλώριο είναι ένα αλογόνο με χημικό σύμβολο Cl και ατομικό αριθμό 17. Είναι ένα κίτρινο-πράσινο αέριο με έντονη οσμή.</li>
                <li>Χρησιμοποιείται ευρέως στην απολύμανση του νερού, στις πισίνες και στην παραγωγή λευκαντικών και πλαστικών όπως το PVC.</li>
                <li>Το χλώριο ανακαλύφθηκε το 1774 από τον Σουηδό χημικό Καρλ Βίλχελμ Σέελε, αλλά το 1810 ο σερ Χάμφρι Ντέιβι απέδειξε ότι είναι στοιχείο.</li>`)
        }
        else{
            return("Χλώριο")
        }
    }
    
    if(tsex == "Magnesium") {
        if(typos==0){
            return(`            <li>Το μαγνήσιο είναι ένα αλκαλικογήινο μέταλλο με χημικό σύμβολο Mg και ατομικό αριθμό 12. Είναι ελαφρύ, ανθεκτικό και χρησιμοποιείται σε κράματα.</li>
                <li>Το μαγνήσιο είναι ζωτικής σημασίας για τον ανθρώπινο οργανισμό, καθώς συμμετέχει στη λειτουργία των μυών, των νεύρων και στην παραγωγή ενέργειας.</li>
                <li>Ανακαλύφθηκε το 1755 από τον Σκωτσέζο χημικό Τζόζεφ Μπλάκ και απομονώθηκε ως καθαρό μέταλλο το 1808 από τον Χάμφρι Ντέιβι μέσω ηλεκτρόλυσης.</li>`)
        }
        else{
            return("Μαγνήσιο")
        }
    }
    if(tsex == "Phosphorus") {
        if(typos==0){
            return(`            <li>Ο φώσφορος είναι ένα μη μεταλλικό στοιχείο με χημικό σύμβολο P και ατομικό αριθμό 15. Είναι απαραίτητος για τη ζωή, καθώς αποτελεί βασικό συστατικό του DNA και της ATP.</li>
                <li>Ο φώσφορος υπάρχει σε διάφορες μορφές, όπως ο λευκός, ο κόκκινος και ο μαύρος φώσφορος, με τον λευκό να είναι εξαιρετικά εύφλεκτος.</li>
                <li>Ανακαλύφθηκε το 1669 από τον Γερμανό αλχημιστή Χένιγκ Μπραντ, ο οποίος το εξήγαγε από ανθρώπινα ούρα σε μια προσπάθεια να βρει τη φιλοσοφική λίθο.</li>`)
        }
        else{
            return("Φώσφορος")
        }
    }
    
    if(tsex == "Helium") {
        if(typos==0){
            return(`            <li>Το ήλιο είναι ένα ευγενές αέριο με χημικό σύμβολο He και ατομικό αριθμό 2. Είναι το δεύτερο ελαφρύτερο στοιχείο και το δεύτερο πιο άφθονο στο σύμπαν.</li>
                <li>Χρησιμοποιείται σε μπαλόνια, αερόστατα και στη βιομηχανία κρυογονικής, καθώς έχει το χαμηλότερο σημείο βρασμού από όλα τα στοιχεία.</li>
                <li>Το ήλιο ανακαλύφθηκε το 1868 από τον Πιέρ Ζανσέν κατά τη διάρκεια μιας ηλιακής έκλειψης, όταν εντόπισε μια άγνωστη γραμμή στο ηλιακό φάσμα.</li>`)
        }
        else{
            return("Ηλιο")
        }
    }
    
    if(tsex == "Aluminium") {
        if(typos==0){
            return(`            <li>Το αλουμίνιο είναι ένα ελαφρύ μέταλλο με χημικό σύμβολο Al και ατομικό αριθμό 13. Είναι γνωστό για την αντοχή του στη διάβρωση και τη χρήση του σε κατασκευές.</li>
                <li>Είναι το πιο άφθονο μέταλλο στον φλοιό της Γης και χρησιμοποιείται ευρέως σε αεροσκάφη, αυτοκίνητα και συσκευασίες, όπως τα αλουμινένια κουτάκια.</li>
                <li>Απομονώθηκε για πρώτη φορά το 1825 από τον Δανό φυσικό Χανς Κρίστιαν Έρστεντ, αλλά η βιομηχανική παραγωγή του έγινε εφικτή στα τέλη του 19ου αιώνα.</li>`)
        }
        else{
            return("Αλουμίνιο")
        }
    }
    
    if(tsex == "Sulfur") {
        if(typos==0){
            return(`            <li>Το θείο είναι ένα μη μέταλλο με χημικό σύμβολο S και ατομικό αριθμό 16. Είναι κίτρινο στερεό και συναντάται φυσικά σε ηφαιστειακές περιοχές.</li>
                <li>Το θείο χρησιμοποιείται στην παραγωγή λιπασμάτων, πυρίτιδας και καουτσούκ, καθώς και στην επεξεργασία πετρελαίου.</li>
                <li>Γνωστό από την αρχαιότητα, το θείο αναφερόταν ως «θειάφι» και χρησιμοποιήθηκε σε θρησκευτικές τελετές και στην παρασκευή φαρμάκων.</li>`)
        }
        else{
            return("Θείο")
        }
    }
    if(tsex == "Nitrogen") {
        if(typos==0){
            return(`            <li>Το άζωτο είναι ένα αέριο στοιχείο με χημικό σύμβολο N και ατομικό αριθμό 7. Αποτελεί περίπου το 78% της ατμόσφαιρας της Γης.</li>
                <li>Το άζωτο είναι απαραίτητο για τη ζωή, καθώς αποτελεί βασικό συστατικό των αμινοξέων, των πρωτεϊνών και του DNA.</li>
                <li>Ανακαλύφθηκε το 1772 από τον Σκωτσέζο χημικό Ντάνιελ Ράδερφορντ, ο οποίος το ονόμασε "καπνώδες αέρα" επειδή δεν υποστήριζε την καύση.</li>`)
        }
        else{
            return("Άζωτο")
        }
    }
    
    if(tsex == "Carbon") {
        if(typos==0){
            return(`            <li>Ο άνθρακας είναι ένα μη μεταλλικό στοιχείο με χημικό σύμβολο C και ατομικό αριθμό 6. Είναι το θεμελιώδες στοιχείο της ζωής, καθώς αποτελεί τη βάση όλων των οργανικών ενώσεων.</li>
                <li>Υπάρχει σε διάφορες μορφές, όπως ο γραφίτης, το διαμάντι και ο άνθρακας, και χρησιμοποιείται ευρέως στη βιομηχανία και την τεχνολογία.</li>
                <li>Ο άνθρακας είναι γνωστός από την αρχαιότητα και το όνομά του προέρχεται από τη λατινική λέξη "carbo", που σημαίνει κάρβουνο.</li>`)
        }
        else{
            return("Άνθρακας")
        }
    }
    
    if(tsex == "fluorine") {
        if(typos==0){
            return(`            <li>Το φθόριο είναι ένα αλογόνο με χημικό σύμβολο F και ατομικό αριθμό 9. Είναι το πιο ηλεκτραρνητικό στοιχείο και ένα από τα πιο δραστικά χημικά στοιχεία.</li>
                <li>Χρησιμοποιείται στην παρασκευή τεφλόν, στα φθοριούχα προϊόντα για την προστασία των δοντιών και στην επεξεργασία εμπλουσμένου ουρανίου.</li>
                <li>Απομονώθηκε το 1886 από τον Γάλλο χημικό Ανρί Μουασάν, ο οποίος κέρδισε το Νόμπελ Χημείας το 1906 για την εργασία του.</li>`)
        }
        else{
            return("Φθόριο")
        }
    }
    if(tsex == "Rubidium") {
        if(typos==0){
            return(`            <li>Το ρουβίδιο είναι ένα αλκαλικό μέταλλο με χημικό σύμβολο Rb και ατομικό αριθμό 37. Είναι ένα μαλακό, ασημί-λευκό μέταλλο που αντιδρά γρήγορα με το νερό.</li>
                <li>Το ρουβίδιο χρησιμοποιείται σε ειδικές εφαρμογές, όπως στην πυρηνική έρευνα και στην κατασκευή αλκαλικών μπαταριών.</li>
                <li>Ανακαλύφθηκε το 1861 από τους Γερμανούς χημικούς Γκούσταβ Κίρκχοφ και Ρόμπερτ Βάιν, που το ονόμασαν από τη χαρακτηριστική κόκκινη γραμμή του φάσματος.</li>`)
        }
        else{
            return("Ρουβίδιο")
        }
    }
    
    if(tsex == "Caesium") {
        if(typos==0){
            return(`            <li>Το καίσιο είναι ένα αλκαλικό μέταλλο με χημικό σύμβολο Cs και ατομικό αριθμό 55. Είναι το πρώτο αλκαλικό μέταλλο που ανακαλύφθηκε να έχει εφαρμογές στην πυρηνική τεχνολογία.</li>
                <li>Το καίσιο χρησιμοποιείται σε ατομικούς ρολόγια και στη μέτρηση του χρόνου, καθώς διαθέτει την πιο ακριβή και σταθερή συχνότητα από όλα τα στοιχεία.</li>
                <li>Ανακαλύφθηκε το 1860 από τους Γερμανούς χημικούς Γκούσταβ Κίρκχοφ και Ρόμπερτ Βάιν, με την ονομασία του να προέρχεται από την μπλε-πράσινη γραμμή στο φάσμα του.</li>`)
        }
        else{
            return("Καίσιο")
        }
    }
    
    if(tsex == "Francium") {
        if(typos==0){
            return(`            <li>Το φράνκιο είναι ένα αλκαλικό μέταλλο με χημικό σύμβολο Fr και ατομικό αριθμό 87. Είναι το πιο σπάνιο από τα αλκαλικά μέταλλα και το πιο ραδιενεργό από όλα τα στοιχεία.</li>
                <li>Το φράνκιο παράγεται σε πολύ μικρές ποσότητες και έχει εφαρμογές στη μελέτη της πυρηνικής φυσικής και στη χημεία της ραδιενέργειας.</li>
                <li>Ανακαλύφθηκε το 1939 από τους Γάλλους χημικούς Μπενζέ και Οσμάν, και το όνομά του προέρχεται από τη Γαλλία, τη χώρα όπου ανακαλύφθηκε.</li>`)
        }
        else{
            return("Φράνκιο")
        }
    }
    if(tsex == "Radium") {
        if(typos==0){
            return(`            <li>Το ράδιο είναι ένα ραδιενεργό μέταλλο με χημικό σύμβολο Ra και ατομικό αριθμό 88. Είναι γνωστό για την έντονη ραδιενέργεια του και τη χρήση του σε ιατρικές θεραπείες στο παρελθόν.</li>
                <li>Το ράδιο είναι εξαιρετικά επικίνδυνο λόγω της ακτινοβολίας του και σήμερα χρησιμοποιείται κυρίως για ερευνητικούς σκοπούς και στην πυρηνική φυσική.</li>
                <li>Ανακαλύφθηκε το 1898 από τη Μαρί και τον Πιερ Κιουρί, οι οποίοι το ονόμασαν από τη λέξη "ράδιο", που σημαίνει "ακτινοβολία".</li>`)
        }
        else{
            return("Ράδιο")
        }
    }
    
    if(tsex == "Boron") {
        if(typos==0){
            return(`            <li>Το βόριο είναι ένα μη μεταλλικό στοιχείο με χημικό σύμβολο B και ατομικό αριθμό 5. Χρησιμοποιείται σε βιομηχανικές εφαρμογές και σε αντιδραστήρες πυρηνικής ενέργειας.</li>
                <li>Το βόριο χρησιμοποιείται στη βιομηχανία της γυαλίσεως, καθώς και στην κατασκευή ελαφρών και ανθεκτικών υλικών, όπως το αλεξίσφαιρο γυαλί.</li>
                <li>Ανακαλύφθηκε το 1808 από τον Σουηδό χημικό Γιοχάνς Άλβιν, και το όνομά του προέρχεται από την αραβική λέξη "buraq", που σημαίνει "ορυχείο".</li>`)
        }
        else{
            return("Βόριο")
        }
    }
    
    if(tsex == "Silicon") {
        if(typos==0){
            return(`            <li>Ο πυρίτιο είναι ένα μη μεταλλικό στοιχείο με χημικό σύμβολο Si και ατομικό αριθμό 14. Είναι το δεύτερο πιο άφθονο στοιχείο στη Γη και χρησιμοποιείται ευρέως στη βιομηχανία των ηλεκτρονικών.</li>
                <li>Ο πυρίτιο είναι βασικό συστατικό στα ημιαγωγά, που χρησιμοποιούνται για την κατασκευή μικροτσίπ, τα οποία είναι θεμελιώδη για υπολογιστές και κινητά τηλέφωνα.</li>
                <li>Ανακαλύφθηκε το 1824 από τον Σουηδό χημικό Φρίντριχ Βίλχελμ, και το όνομά του προέρχεται από τη λατινική λέξη "silex", που σημαίνει πέτρα ή βράχος.</li>`)
        }
        else{
            return("Πυρίτιο")
        }
    }
    if(tsex == "Neon") {
        if(typos==0){
            return(`            <li>Το νέον είναι ένα ευγενές αέριο με χημικό σύμβολο Ne και ατομικό αριθμό 10. Είναι γνωστό για τη φωτεινότητά του και τη χρήση του σε νέον φωτισμό, όπως τα φώτα νέον στις πινακίδες.</li>
                <li>Το νέον χρησιμοποιείται σε φωτεινές διαφημίσεις, χρωματιστούς φωτισμούς και άλλα διακοσμητικά στοιχεία, καθώς όταν ενισχύεται με ηλεκτρισμό, εκπέμπει έντονο κόκκινο-πορτοκαλί φως.</li>
                <li>Ανακαλύφθηκε το 1898 από τους Βρετανούς χημικούς Σερ Γουίλιαμ Ράμσεϊ και Μόρισον, οι οποίοι το εντόπισαν στα αέρια του αέρα, μετά την απομάκρυνση των αερίων του οξυγόνου και του αζώτου.</li>`)
        }
        else{
            return("Νέον")
        }
    }
    
    if(tsex == "Argon") {
        if(typos==0){
            return(`            <li>Ο αργόνος είναι ένα ευγενές αέριο με χημικό σύμβολο Ar και ατομικό αριθμό 18. Είναι το τρίτο πιο άφθονο αέριο στην ατμόσφαιρα και χρησιμοποιείται κυρίως για να δημιουργεί αδρανές περιβάλλον.</li>
                <li>Ο αργόνος χρησιμοποιείται σε λαμπτήρες φωτισμού, σε συγκολλήσεις και σε διάφορες βιομηχανικές διαδικασίες, καθώς είναι αδρανές και δεν αντιδρά με άλλες ουσίες.</li>
                <li>Ανακαλύφθηκε το 1894 από τους Βρετανούς χημικούς Σερ Γουίλιαμ Ράμσεϊ και Μόρισον, κατά τη διάρκεια μελέτης των αερίων που παραμένουν μετά την απομάκρυνση του οξυγόνου και του αζώτου από τον αέρα.</li>`)
        }
        else{
            return("Αργόνος")
        }
    }
    
    if(tsex == "Krypton") {
        if(typos==0){
            return(`            <li>Το κρυπτόν είναι ένα ευγενές αέριο με χημικό σύμβολο Kr και ατομικό αριθμό 36. Είναι σπάνιο στην ατμόσφαιρα και χρησιμοποιείται σε φώτα και λέιζερ.</li>
                <li>Το κρυπτόν χρησιμοποιείται σε φώτα φθορισμού και σε ειδικές λάμπες για φωτογράφος και φιλμ, καθώς και σε λέιζερ υψηλής ενέργειας για ιατρική και βιομηχανική χρήση.</li>
                <li>Ανακαλύφθηκε το 1898 από τους Βρετανούς χημικούς Σερ Γουίλιαμ Ράμσεϊ και Μόρισον, ενώ το όνομά του προέρχεται από την ελληνική λέξη "kryptos", που σημαίνει "κρυμμένο".</li>`)
        }
        else{
            return("Κρυπτόν")
        }
    }
    if(tsex == "Calcium") {
        if(typos==0){
            return(`            <li>Το ασβέστιο είναι ένα αλκαλικό γηινομέταλλο με χημικό σύμβολο Ca και ατομικό αριθμό 20. Είναι το πέμπτο πιο άφθονο στοιχείο στη Γη και παίζει σημαντικό ρόλο στη λειτουργία των οστών και των δοντιών.</li>
                <li>Το ασβέστιο χρησιμοποιείται σε διάφορες βιομηχανικές εφαρμογές, όπως στην παραγωγή τσιμέντου και σκυροδέματος, καθώς και στην παραγωγή μετάλλων όπως το αλουμίνιο.</li>
                <li>Ανακαλύφθηκε το 1808 από τον Σκωτσέζο χημικό Σερ Χάι Ρόμπερτ, και το όνομά του προέρχεται από τη λατινική λέξη "calx", που σημαίνει "ασβέστη".</li>`)
        }
        else{
            return("Ασβέστιο")
        }
    }
    
    if(tsex == "Barium") {
        if(typos==0){
            return(`            <li>Το βάριο είναι ένα αλκαλικό γηινομέταλλο με χημικό σύμβολο Ba και ατομικό αριθμό 56. Είναι ένα μαλακό, ασημί-λευκό μέταλλο που χρησιμοποιείται σε διάφορες βιομηχανικές εφαρμογές.</li>
                <li>Το βάριο χρησιμοποιείται σε εφαρμογές όπως η παραγωγή πυρηνικών αντιδραστήρων, οι φωτεινές χρωστικές και οι ακτινολογικές εξετάσεις, λόγω των χαρακτηριστικών του στην απορρόφηση ακτινοβολίας.</li>
                <li>Ανακαλύφθηκε το 1774 από τον Σουηδό χημικό Καρλ Γουίλιαμ Σίμερμαν, και το όνομά του προέρχεται από τη λατινική λέξη "bary", που σημαίνει "βαρύ".</li>`)
        }
        else{
            return("Βάριο")
        }
    }
    
    if(tsex == "Beryllium") {
        if(typos==0){
            return(`            <li>Το βηρύλλιο είναι ένα αλκαλικό γηινομέταλλο με χημικό σύμβολο Be και ατομικό αριθμό 4. Είναι ένα σκληρό, αλλά εύθραυστο μέταλλο που χρησιμοποιείται σε διάφορες βιομηχανικές εφαρμογές.</li>
                <li>Το βηρύλλιο χρησιμοποιείται στην παραγωγή ελαφρών και ανθεκτικών υλικών, όπως τα αεροπλάνα, και σε ειδικές εφαρμογές στην πυρηνική τεχνολογία.</li>
                <li>Ανακαλύφθηκε το 1798 από τον Γάλλο χημικό Λουί Νικολά Βακελίν, και το όνομά του προέρχεται από τη λέξη "beryl", που είναι μια πολύτιμη πέτρα.</li>`)
        }
        else{
            return("Βηρύλλιο")
        }
    }
    if(tsex == "Strontium") {
        if(typos==0){
            return(`            <li>Το στρόντιο είναι ένα αλκαλικό γηινομέταλλο με χημικό σύμβολο Sr και ατομικό αριθμό 38. Είναι μαλακό και αντιδρά εύκολα με το νερό. Χρησιμοποιείται κυρίως στην παραγωγή πυροτεχνημάτων.</li>
                <li>Το στρόντιο χρησιμοποιείται για την παραγωγή κόκκινου φωτός σε πυροτεχνήματα και φώτα, καθώς και στην κατασκευή ραδιολογικών ανιχνευτών και άλλων ειδικών εφαρμογών.</li>
                <li>Ανακαλύφθηκε το 1790 από τον Σκοτσέζο χημικό Άλαν Ραμσέι, και το όνομά του προέρχεται από την πόλη Στρόντιου στην Σκωτία.</li>`)
        }
        else{
            return("Στρόντιο")
        }
    }
    
    if(tsex == "Uranium") {
        if(typos==0){
            return(`            <li>Το ουράνιο είναι ένα ραδιενεργό μέταλλο με χημικό σύμβολο U και ατομικό αριθμό 92. Είναι γνωστό για τη χρήση του στην παραγωγή πυρηνικής ενέργειας και όπλων.</li>
                <li>Το ουράνιο είναι ραδιενεργό και χρησιμοποιείται για την παραγωγή πυρηνικής ενέργειας σε πυρηνικούς αντιδραστήρες και ως πρώτης ύλης για πυρηνικά όπλα.</li>
                <li>Ανακαλύφθηκε το 1789 από τον Γερμανό χημικό Μάρτιν Χάινριχ Κλ프로τ, και το όνομά του προέρχεται από τον πλανήτη Ουρανό.</li>`)
        }
        else{
            return("Ουράνιο")
        }
    }
    
    if(tsex == "Plutonium") {
        if(typos==0){
            return(`            <li>Το πλουτώνιο είναι ένα ραδιενεργό μέταλλο με χημικό σύμβολο Pu και ατομικό αριθμό 94. Είναι εξαιρετικά ραδιενεργό και χρησιμοποιείται σε πυρηνικά όπλα και πυρηνικούς αντιδραστήρες.</li>
                <li>Το πλουτώνιο είναι ένα από τα πιο επικίνδυνα και ραδιενεργά στοιχεία στον κόσμο, και η ακτινοβολία του είναι τόσο ισχυρή που μπορεί να προκαλέσει σοβαρές βλάβες ακόμα και με μικρές ποσότητες του.</li>
                <li>Ανακαλύφθηκε το 1940 από τους Αμερικανούς επιστήμονες Γκλεν Σιμινς και Εντουαρντ Τζόουνς, και το όνομά του προέρχεται από τον πλανήτη Πλούτωνα.</li>`)
        }
        else{
            return("Πλουτώνιο")
        }
    } 
    else{return("")}}
