export namespace store {
	
	export class Story {
	    title: string;
	    description: string;
	    link: string;
	    pub_date: string;
	    source: string;
	
	    static createFrom(source: any = {}) {
	        return new Story(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.title = source["title"];
	        this.description = source["description"];
	        this.link = source["link"];
	        this.pub_date = source["pub_date"];
	        this.source = source["source"];
	    }
	}
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

