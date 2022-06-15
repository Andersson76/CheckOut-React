import kort from "/src/assets/kort.jpg"
import swish from "/src/assets/swish.png"
import resurs from "/src/assets/resurs.png"

export interface Payment {
    id: number,
    title: string,
    desctiption: string,
    image: string
}

// Ska ligga i egen komponent - 
// sparar state i context för alla 3 valen och sen ett state för varje betalsätt 
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
        desctiption: "Faktura",
        image: resurs 
    }
]