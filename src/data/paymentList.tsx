import kort from "/src/assets/kort.jpg"
import swish from "/src/assets/swish.png"
import resurs from "/src/assets/resurs.png"

export interface Payment {
    id: number,
    title: string,
    desctiption: string,
    image: string
}

export const paymentList: Payment[] = [
    {
        id: 1,
        title: "Swish",
        desctiption: "",
        image: swish 
    }, 
    {
        id: 2,
        title: "Kort",
        desctiption: "",
        image: kort 
    }, 
    {
        id: 3,
        title: "Resurs Bank", 
        desctiption: "Faktura",
        image: resurs 
    }
]