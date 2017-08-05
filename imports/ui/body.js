import { Template } from 'meteor/templating';
import { ReactiveDict } from 'meteor/reactive-dict';
import './body.html';

Template.body.onCreated(function () {
  this.getSongs = new ReactiveVar();
  this.Keyword = new ReactiveVar();

  var self = this;
  Meteor.call('getApiSong', 'despacito', function (error, result) {
      if (error) {
        console.log(error);
        throw new Meteor.Error(500, "Couldn't get invoices");
      }
      //console.log(self.getSongs.set(JSON.parse(result)));
      console.log(result);
      self.getSongs.set(result);
  });
});

Template.body.helpers({   
    songs() {
        const instance = Template.instance();
        //console.log(instance.getSongs.get());
        return instance.getSongs.get();
    },
    keyword(){
        const instance = Template.instance();
        //console.log(instance.getSongs.get());
        return instance.Keyword.get();
    },
    isTrack(kind){
        if(kind == 'track'){
            return true;
        }else{
            return false;
        }
    }
});

Template.body.events({
  'submit .search-song'(event, t) {
    // Prevent default browser form submit
    event.preventDefault();
 
    // Get value from form element
    const target = event.target;
    const text = target.text.value;    
    // Insert a task into the collection
    Meteor.call('getApiSong', text, function (error, result) {
      if (error) {
        console.log(error);
        throw new Meteor.Error(500, "Couldn't get invoices");
      }
      //console.log(self.getSongs.set(JSON.parse(result)));
     
      t.getSongs.set(result);
    });
    t.Keyword.set(text);
   
    // Clear form
    target.text.value = '';
  },
});