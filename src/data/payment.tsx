import kort from "/src/assets/kort.jpg"
import swish from "/src/assets/swish.png"
import bankid from "/src/assets/bankid.png"

export interface Payment {
    id: number,
    title: string,
    desctiption: string,
    image: string
}

export const payments: Payment[] = [
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
        title: "BankId",
        desctiption: "",
        image: bankid
    }
]