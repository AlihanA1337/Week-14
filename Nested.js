const artists = [
  { name: "Michael Jackson", songs: ["Smooth Criminal", "Billie Jean", "Beat it", "Earth Song"] },
  { name: "Billie Eilish", songs: ["Bad Guy", "Lovely", "Lunch", "Chihiro"] },
  { name: "Kairat Nurtas", songs: ["Auyrmaydy Zhurek", "Ol sen emes"] }
];
artists[2].songs[1] = "Baika";

let MJlastSong = artists[0].songs[artists[0].songs.length - 1];
console.log(`Michael Jackson's last song is: ${MJlastSong}`);

let shortAn = artists[1].songs.filter(song => song.length <= 6);
console.log(`Billie Eilish's songs with 6 letters or less: ${shortAn.join(", ")}`);
