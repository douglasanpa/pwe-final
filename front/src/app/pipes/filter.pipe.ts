import { Pipe, PipeTransform } from '@angular/core';

@Pipe(
{
	name: 'filter'
})
export class FilterPipe implements PipeTransform 
{
	transform(value, filterQuery: string, prop:any=null, isNot:boolean=false): any 
	{
		if(value.length===0||filterQuery==='')
		{
			return value;
		}
		const resultArray=[];
		for(const item of value)
		{
			if(prop!=null)
			{
				var hasQuery = this.hasQuery(String(item[prop]), filterQuery)
				hasQuery=isNot?!hasQuery:hasQuery;
				if(hasQuery)
				{
					resultArray.push(item);
				}
			}
			else
			{
				for(let p in item)
				{
					if(this.hasQuery(String(item[p]), filterQuery))
					{
						resultArray.push(item);
						break;
					}
				}
			}
		}
		return resultArray;
	}
	hasQuery(s1:string, s2:string):boolean
	{
		return s1.toLowerCase().includes(s2.toLowerCase());
	}
}
