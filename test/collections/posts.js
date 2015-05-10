Posts = new Mongo.Collection("posts");

Posts.allow({
    insert: function(userId, doc){
		
		if(doc.author !== "Bibi"){
			throw new Meteor.Error(403, "Vous n'avez pas l'autorisation d'insérer un nouveau post !");
		}
		
		return true;
	}
});