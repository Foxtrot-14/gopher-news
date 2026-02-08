export namespace store {
	
	export class Topic {
	    centroidID: number;
	    size: number;
	    title: string;
	    createdAt: string;
	
	    static createFrom(source: any = {}) {
	        return new Topic(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.centroidID = source["centroidID"];
	        this.size = source["size"];
	        this.title = source["title"];
	        this.createdAt = source["createdAt"];
	    }
	}

}

