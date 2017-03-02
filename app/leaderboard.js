/**
 * Created by koday on 2/28/2017.
 */
PlayersList = new Mongo.Collection('players');

if(Meteor.isClient){
  console.log("Hello Client");
  Template.leaderboard.events({
    'click .player': function(){
      var playerId = this._id;
      Session.set('selectedPlayer', playerId);

    }
  });
  Template.leaderboard.helpers({
    'player': function(){
      return PlayersList.find();
    },
    'selectedClass': function(){
      var playerId = this._id;
      var selectedPlayer = Session.get('selectedPlayer');
      if(playerId == selectedPlayer){
        return "selected"
      }
    }
  });
}

if(Meteor.isServer){
  console.log("Hello Server");
}