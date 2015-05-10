Template.post.helpers({
	setAuthor: function(){
		return '<b>tutu</b>';
	}
});

Template.post.events({
    'click .post': function(e){
        alert("Vous avez cliqué")
    }
});