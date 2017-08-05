import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const Musics = new Mongo.Collection('musics');
if (Meteor.isServer) {
  
}

