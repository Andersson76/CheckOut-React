/* import kort from "/src/assets/kort.jpg"
import swish from "/src/assets/swish.png"
import resurs from "/src/assets/resurs.png"
 */

export interface Payment {
    id: number,
    title: string,
    desctiption: string,
    price: number,
   /*  image: string */
}

export const paymentList: Payment[] = [
    {
        id: 1,
        title: "Swish",
        desctiption: "",
        price: 0,
    /*     image: swish  */
    }, 
    {
        id: 2,
        title: "Kort",
        desctiption: "",
        price: 0,
     /*    image: kort  */
    }, 
    {
        id: 3,
        title: "Resurs Bank", 
        desctiption: "Räntefri delbetalning i upp till 12 månader.",
        price: 29, 
  /*       image: resurs  */
    }
]