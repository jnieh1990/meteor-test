Router.configure({
    layoutTemplate: 'mainLayout'
});// JavaScript Document

Router.route('/', {
	name: "home",
    data: function(){
        var posts = Posts.find();
        
        return {
            posts: posts
        };
    },
    waitOn: function(){
        return Meteor.subscribe("allPostHeaders");
    }
});

Router.route('/insert', {
	name: "insert",
    data: function(){
        var posts = Posts.find();
        
        return {
            posts: posts
        };
    },
    waitOn: function(){
        return Meteor.subscribe("allPostHeaders");
    }
});

Router.route('/post/:_id', {
    name: "post",
	data: function(){
		return {
			id: this.params._id
		}
	}
});

Router.route('/posts', {
    name: "posts",
    data: function(){
		return {
            posts: [
                {
                    title: "Premier post",
					hide: true
                },
                {
                    title: "Second post",
					hide: false
                },
                {
                    title: "Troisième post",
					hide: true
                },
            ]
        };
	}
});

Router.route('/add/:n1/:n2', {
    name: "add",
	template: "calc",
	data: function(){
		var n1 = parseInt(this.params.n1);
		var n2 = parseInt(this.params.n2);
		
		return {
			res: n1 + n2
		}
	}
});

Router.route('/sub/:n1/:n2', {
    name: "sub",
	template: "calc",
	data: function(){
		var n1 = parseInt(this.params.n1);
		var n2 = parseInt(this.params.n2);
		
		return {
			res: n1 - n2
		}
	}
});

Router.route('/mul/:n1/:n2', {
    name: "mul",
	template: "calc",
	data: function(){
		var n1 = parseInt(this.params.n1);
		var n2 = parseInt(this.params.n2);
		
		return {
			res: n1 * n2
		}
	}
});

Router.route('/div/:n1/:n2', {
    name: "div",
	template: "calc",
	data: function(){
		var n1 = parseInt(this.params.n1);
		var n2 = parseInt(this.params.n2);
		
		return {
			res: n1 / n2
		}
	}
});