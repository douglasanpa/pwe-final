export class Pedido
{
    id:Number;
    
    cliente;

    mesa:Number;

    funcionario;

    datahora:String;
    
    status;

    itens : Array<String>;
}


export let PEDIDOSMOCK: Pedido[] = [
  { id: 1, mesa: 1, cliente:null, funcionario:null, datahora:"1-1-1111 11:11:11", status:{code:0,text:"Na cozinha"}, itens:[] },
  { id: 2, mesa: 3, cliente:null, funcionario:null, datahora:"1-1-1111 11:11:11", status:{code:0,text:"Na cozinha"}, itens:[] },
  { id: 3, mesa: 5, cliente:null, funcionario:null, datahora:"1-1-1111 11:11:11", status:{code:1,text:"Pronto para servir"}, itens:[] },
  { id: 4, mesa: 2, cliente:null, funcionario:null, datahora:"1-1-1111 11:11:11", status:{code:0,text:"Na cozinha"}, itens:[] },
];