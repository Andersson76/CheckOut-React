import acedress from "/src/assets/acedress.jpg"
import aceskirt from "/src/assets/aceskirt.jpg"
import acetshirtdam from "/src/assets/acetshirtdam.jpg"
import aceribtank from "/src/assets/aceribtank.jpg"
import ace7shorts from "/src/assets/ace7shorts.jpg"
import acetshirtherr from "/src/assets/acetshirtherr.jpg"
import acepolo from "/src/assets/acepolo.jpg"
import acetrackjacket from "/src/assets/acetrackjacket.jpg"
import acetennisbag from "/src/assets/acetennisbag.jpg"
import aceracketcase from "/src/assets/aceracketcase.jpg"


export interface Product {
    id: number,
    title: string,
    desctiption: string,
    price: number,
    image: string, 
    color: string
}


export const productList: Product[] = [
    {
        id: 1,
        title: "Ace dress",
        desctiption: "Tennisdressen Ace Dress har en ren och snygg design, i en härligt luftig pikékvalitet av återvunnen polyester.",
        price: 699,
        image: acedress,
        color: "Svart"
    }, 
    {
        id: 2,
        title: "Ace Skirt",
        desctiption: "Säsongens tenniskjol är lika snygg som bekväm, tack vare en klassisk look med moderna material. Innershorts i jersey för både komfort och förvaring av tennisbollar när du spelar.",
        price: 499,
        image: aceskirt,
        color: "Vit"
    }, 
    {
        id: 3,
        title: "Ace T-shirt",
        desctiption: "Stilrena Ace T-shirt har en nära passform med v-ringad hals. Luftig pikékvalitet tillverkad av återvunnen polyester med sömmar anpassade för en snyggare siluett.",
        price: 399,
        image: acetshirtdam,
        color: "Vit"
    }, 
    {
        id: 4,
        title: "Ace Rib Tank",
        desctiption: "Säsongens Ace Rib Tank är allt du kan önska dig. I alla fall om du vill ha en ärmlös topp i en mjukt ribbat kvalitet med racerback som ger dig maximal rörelsefrihet.",
        price: 399,
        image: aceribtank,
        color: "Svart"
    }, 
    {
        id: 5,
        title: "Ace 7 shorts",
        desctiption: "Retro shorts i modern tappning med följsamt material och snygga detaljer som ger en bekväm känsla och dressad look.",
        price: 599,
        image: ace7shorts,
        color: "Svart"
    }, 
    {
        id: 6,
        title: "Ace T-shirt",
        desctiption: "Den stilrena träningströjan Ace T-shirt maximerar träningen tack vare passform och följsamt material.",
        price: 399,
        image: acetshirtherr,
        color: "Vit"
    }, 
    {
        id: 7,
        title: "Ace Polo",
        desctiption: "Säsongens Ace Polo uppdaterar den klassiska pikétröjans design med material i 100% återvunnen polyester som är både är följsamt och ventilerande.",
        price: 599,
        image: acepolo,
        color: "Svart"
    }, 
    {
        id: 8,
        title: "Ace Track Jacket",
        desctiption: "Nya Ace Track Jacket är allt en track jacket ska vara - avslappnad, sportig och dressad. Självklart tillverkad i ett lätt glansigt VCT-material av 100% återvunnen polyester.",
        price: 899,
        image: acetrackjacket,
        color: "Night Sky"
    }, 
    {
        id: 9,
        title: "Ace Tennis Bag",
        desctiption: "Packa flera racketar i stilrena Björn Borg Ace Tennis Bag och släng den över axeln. Att äntra banan med en ikon på ryggen är respekt.",
        price: 1299,
        image: acetennisbag,
        color: "Svart"
    }, 
    {
        id: 10,
        title: "Ace Racket Case",
        desctiption: "Med Björn Borg Ace Tennis Racket Cover skyddar du ditt tennisracket extra snyggt. Dessutom bär du det enkelt över axeln.",
        price: 249,
        image: aceracketcase,
        color: "Svart"
    },
]