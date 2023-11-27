export interface Transaction{
    transactionId?:number;
    transType:string;
    transDate: string;
    amount:number;
    receiverAccount?:number;
}