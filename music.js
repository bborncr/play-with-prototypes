"use strict"

function Library(name, creator) {
	this.name = name;
	this.creator = creator;
	this.playlists = [];
}

Library.prototype.addPlaylist = function (Playlist) {
	this.playlists.push(Playlist);
}

function Playlist(name) {
	this.name = name;
	this.tracks = [];
	this.total = 0;
	this.avg = 0;
	this.totalLength = 0;
}

Playlist.prototype.addTrack = function (Track) {
	this.tracks.push(Track);
}

Playlist.prototype.overallRating = function () {
	for (let i = 0; i < this.tracks.length; i++) {
		this.total = this.total + this.tracks[i].rating;
	}
	this.avg = this.total / this.tracks.length;
	return this.avg;
}

Playlist.prototype.totalDuration = function () {
	for (let i = 0; i < this.tracks.length; i++) {
		this.totalLength = this.totalLength + this.tracks[i].duration;
	}
	return this.totalLength;
}

function Track(title, rating, duration) {
	this.title = title;
	this.rating = rating;
	this.duration = duration;
}

let track1 = new Track("Song1", 3, 3.1);
let track2 = new Track("Song2", 4, 4.2);
let track3 = new Track("Song3", 3, 3.1);
let track4 = new Track("Song4", 4, 4.2);
let track5 = new Track("Song5", 3, 3.1);
let track6 = new Track("Song6", 4, 4.2);

let playlist1 = new Playlist("Playlist1");
let playlist2 = new Playlist("Playlist2");

let myLibrary = new Library("Country Music", "Joe Bumpkin");

playlist1.addTrack(track1);
playlist1.addTrack(track2);
playlist1.addTrack(track3);
playlist2.addTrack(track4);
playlist2.addTrack(track5);
playlist2.addTrack(track6);

myLibrary.addPlaylist(playlist1);
myLibrary.addPlaylist(playlist2);

console.log(myLibrary.playlists[0].overallRating());
console.log(myLibrary.playlists[0].totalDuration());
console.log(myLibrary.playlists[0].avg);
console.log(myLibrary.playlists[0].totalLength);
console.log(myLibrary);