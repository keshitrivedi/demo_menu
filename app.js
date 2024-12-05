const menu = [{
    id: 1,
    name: 'Souffle Pancakes',
    category: 'breakfast',
    price: 230,
    img: "images/pancake.png",
    info: 'Flimble woggle draptor, snorple zindle wharves crumblix! Grindlefark twiply frambut scroggle durnish brop. Slunghoom wibber drangloft, prindle floop snarfle tizp. Blinther snootwoggle flapper blonkit gribble thorp',
},
{
    id: 2,
    name: 'Egg Roll',
    category: 'breakfast',
    price: 160,
    img: "images/eggroll.png",
    info: 'Zibberflop gribberwump snortleplunk! Wibbergrove dinglefrotz slimpish tofflark. Plimbulate sporkmash quibblesnoot flarkfob dripnax. Throldwig zibblefart blonky swooshmash, floopdoodle dinkfroft.'
},
{
    id: 3,
    name: 'Aloo Paratha',
    category: 'meals',
    price: 130,
    img: "images/aalooparatha.png",
    info: 'Flibbity flobbity zongle sploosh wibberdink! Grankle floopdoodle snarfblat glunkfuzz whizzle. Plibberjolt drimblick tofflequib snibberflorp grobble. Zunkblip flarptastic gorfwig shlomblet blizzlemash!'
},
{
    id: 4,
    name: 'Dal Makhni',
    category: 'meals',
    price: 150,
    img: "images/dalmakhni.png",
    info: 'Snorklefrap wibblywobble plonkit ziffleblop! Grindlequack drumbleflip wazzlefrang snerfblatt. Tringletorp zibberzot wompify floopnark glibberwump. Blorky zaggletwip snobblefrink jibberblort!'
},
{
    id: 5,
    name: 'Mojito',
    category: 'drinks',
    price: 70,
    img: "images/mojito.png",
    info: 'Flumplewop ziggity zagglesnorf! Plorptangle bloopdoodle fribberwob zibblerflop. Slinkfuzzle dribberzog tronkfart wibblesnack! Glimbletramp snarflot ziggzog glibblefuzz!'
},
{
    id: 6,
    name: 'Sugarcane Juice',
    category: 'drinks',
    price: 50,
    img: "images/sugarcane.png",
    info: 'He promised he would stay forever, but now, the only thing left of him is a faded photograph, and the silence that fills the spaces where his laughter once was.'
},
{
    id:7,
    name: 'Chewy Brownie',
    category: 'deserts',
    price: 100,
    img: "images/brownie.png",
    info: 'The wind whispered through the ancient trees, their leaves dancing in the twilight breeze. Far away, a flickering light in the distance beckoned, but no one dared to follow.'
},
{
    id:8,
    name: 'Vegetable Dosa',
    category: 'breakfast',
    price: 130,
    img: "images/dosa.png",
    info: 'The wind whispered through the ancient trees, their leaves dancing in the twilight breeze. Far away, a flickering light in the distance beckoned, but no one dared to follow.'
},
{
    id:9,
    name: 'Pina Colada',
    category: 'drinks',
    price: 70,
    img: "images/pina.png",
    info: 'The wind whispered through the ancient trees, their leaves dancing in the twilight breeze. Far away, a flickering light in the distance beckoned, but no one dared to follow.'
},
{
    id:10,
    name: 'Paneer Masala',
    category: 'meals',
    price: 180,
    img: "images/paneer.png",
    info: 'The wind whispered through the ancient trees, their leaves dancing in the twilight breeze. Far away, a flickering light in the distance beckoned, but no one dared to follow.'
},
{
    id:11,
    name: 'Ice Cream',
    category: 'deserts',
    price: 70,
    img: "images/icecream.png",
    info: 'The wind whispered through the ancient trees, their leaves dancing in the twilight breeze. Far away, a flickering light in the distance beckoned, but no one dared to follow.'
},
{
    id:12,
    name: 'Mohanthal',
    category: 'deserts',
    price: 80,
    img: "images/mohanthal.png",
    info: 'The wind whispered through the ancient trees, their leaves dancing in the twilight breeze. Far away, a flickering light in the distance beckoned, but no one dared to follow.'
}];

const menuGrid = document.querySelector('.menu-grid');
const container = document.querySelector('.buttonscontainer');

window.addEventListener('DOMContentLoaded',function () {
    displayMenuItems(menu);
    displayMenuButtons ();
});

function displayMenuItems (menu) {
    let displayMenu = menu.map(function (item) {
        return `
            <article class="menu-item">
            <div class="imgdiv">
                <img class="item-photo" src="${item.img}" alt="${item.name}">
            </div>
            <div class="item-deets">
                <header class="main-info">
                    <h4 class="item-name">${item.name}</h4>
                    <h4 class="item-price">${item.price}rs</h4>
                </header>
                <div class="item-desc">
                    ${item.info}
                </div>

            </div>
        </article>
        `;
    });
    displayMenu = displayMenu.join("");
    menuGrid.innerHTML = displayMenu;
}

function displayMenuButtons () {
    const categories = menu.reduce(function(values, item){
        if (!values.includes(item.category)) {
            values.push(item.category);
        }
        return values;
    }, ["all"]);
    const categoryBtns = categories.map(function (category) {
        return `<button class="filter-btn" type="button" data-id=${category}>${category}</button>`;
    }).join("");
    container.innerHTML = categoryBtns;
    const btns = document.querySelectorAll('.filter-btn');

    btns.forEach(function (btn) {
        btn.addEventListener("click", function (e) {
            const category = e.currentTarget.dataset.id;
            const menuCategory = menu.filter(function (menuItem) {
                if (menuItem.category === category) {
                    return menuItem;
                }
            });
            // console.log(category);
            if (category === 'all') {
                displayMenuItems(menu);
            }
            else {
                displayMenuItems(menuCategory);
            }
        });
    });
}