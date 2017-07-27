"use strict"

class Library {

	constructor(name, creator) {
		this.name = name;
		this.creator = creator;
		this.playlists = [];
	}

	addPlaylist(Playlist) {
		this.playlists.push(Playlist);
	}
}

class Playlist {

	constructor(name) {
		this.name = name;
		this.tracks = [];
		this.total = 0;
		this.avg = 0;
		this.totalLength = 0;
	}

	addTrack(Track) {
		this.tracks.push(Track);
	}

	overallRating() {
		for (let i = 0; i < this.tracks.length; i++) {
			this.total = this.total + this.tracks[i].rating;
		}
		this.avg = this.total / this.tracks.length;
	}

	totalDuration() {
		for (let i = 0; i < this.tracks.length; i++) {
			this.totalLength = this.totalLength + this.tracks[i].duration;
		}
	}

}

class Track {

	constructor(title, rating, duration) {
		this.title = title;
		this.rating = rating;
		this.duration = duration;
	}
}

let track1 = new Track("Song1", 3, 3.1);
let track2 = new Track("Song2", 4, 4.2);
let track3 = new Track("Song3", 3, 3.1);
let track4 = new Track("Song4", 4, 4.2);
let track5 = new Track("Song5", 3, 3.1);
let track6 = new Track("Song6", 4, 4.2);

let playlist1 = new Playlist("Playlist1");
let playlist2 = new Playlist("Playlist2");

playlist1.addTrack(track1);
playlist1.addTrack(track2);
playlist1.addTrack(track3);
playlist2.addTrack(track4);
playlist2.addTrack(track5);
playlist2.addTrack(track6);

let myLibrary = new Library("Country Music", "Joe Bumpkin");

myLibrary.addPlaylist(playlist1);
myLibrary.addPlaylist(playlist2);
myLibrary.playlists[0].overallRating();
myLibrary.playlists[0].totalDuration();
console.log(myLibrary.playlists[0].avg);
console.log(myLibrary.playlists[0].totalLength);
console.log(myLibrary);