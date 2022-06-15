import kort from "/src/assets/kort.jpg"
import swish from "/src/assets/swish.png"
import bankid from "/src/assets/bankid.png"

export interface Payment {
    id: number,
    title: string,
    desctiption: string,
    image: string
}

/* Varje betalsätt ska innehålla ett formulär för nödvändig information. Fälten i formuläret ska gå att automatisk fyllas i. */

export const payments: Payment[] = [
    {
        id: 1,
        title: "Swish",
        desctiption: "",
        image: swish // Telefonnummer
    }, 
    {
        id: 2,
        title: "Kort",
        desctiption: "",
        image: kort // Kortnummer, Giltighetsdatum, kortinnehavare, CVV2-Säkerhetskod
    }, 
    {
        id: 3,
        title: "Resurs Bank", // Faktura - legitemera sig med BankId
        desctiption: "",
        image: bankid // Byt bild
    }
]