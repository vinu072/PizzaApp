import { Toppings } from "./toppinginterface";

export interface pizza{
    id: number;
    name: string;
    price: string;
    qty:number;
    toppings:Toppings[];
}