import postnord from "/src/assets/postnord.png"
import instabox from "/src/assets/instabox.jpg"
import logotext from "/src/assets/logotext.jpg"

export interface Shipping {
    id: number,
    title: string,
    desctiption: string,
    price: number,
    shippingDate: number,
    image: string,
}

export const shippings: Shipping[] = [
    {
        id: 1,
        title: "Postnord",
        desctiption: "",
        price: 29,
        shippingDate: 48,
        image: postnord
    }, 
    {
        id: 2,
        title: "Instabox",
        desctiption: "",
        price: 19,
        shippingDate: 24,
        image: instabox
    }, 
    {
        id: 3,
        title: "Hämta i butik",
        desctiption: "",
        price: 0,
        shippingDate: 48,
        image: logotext
    }
]