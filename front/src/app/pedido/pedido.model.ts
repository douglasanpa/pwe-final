export class PedidoModel 
{
	id:Number;
	mesa:Number;
	status:String;
}

export class NovoPedidoModel 
{
	mesa:Number;
	status:String;
	items;
	constructor()
	{
		this.mesa=0;
		this.status="indefinido";
		this.items=[];
	}

}