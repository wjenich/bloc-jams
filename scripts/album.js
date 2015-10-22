var albumPicasso = {
     name: 'The Colors',
     artist: 'Pablo Picasso',
     label: 'Cubism',
     year: '1881',
     albumArtUrl: 'assets/images/album_covers/01.png',
     songs: [
         { name: 'Blue', length: '4:26' },
         { name: 'Green', length: '3:14' },
         { name: 'Red', length: '5:01' },
         { name: 'Pink', length: '3:21'},
         { name: 'Magenta', length: '2:15'}
     ]
 };
 
 // Another Example Album
 var albumMarconi = {
     name: 'The Telephone',
     artist: 'Guglielmo Marconi',
     label: 'EM',
     year: '1909',
     albumArtUrl: 'assets/images/album_covers/20.png',
     songs: [
         { name: 'Hello, Operator?', length: '1:01' },
         { name: 'Ring, ring, ring', length: '5:01' },
         { name: 'Fits in your pocket', length: '3:21'},
         { name: 'Can you hear me now?', length: '3:14' },
         { name: 'Wrong phone number', length: '2:15'}
     ]
 };

var albumDoHo = {
    name: 'Seoul Home/L.A. Home',
    artist: 'Do Ho Suh',
    label: 'sculpture',
    year: '2002',
    albumArtUrl:'assets/images/album_covers/18.png',
    songs: [
        {name: 'Seoul', length: '3:42' },
        {name: 'Flying High', length: '2:27' },
        {name: 'L.A. Shakes', length: '4:22' },
        {name: 'House', length: '1:42' },
        {name: 'Home', length: '3:15' },
    ]
    
};

var createSongRow = function(songNumber, songName, songLength) {
    var template =
        '<tr class="album-view-song-item">'
      + '  <td class="song-item-number" data-song-number="' + songNumber + '">' + songNumber + '</td>'
      + '  <td class="song-item-title">' + songName + '</td>'
      + '  <td class="song-item-duration">' + songLength + '</td>'
      + '</tr>'
      ;
 
    var $row = $(template);
    
    var clickHandler = function() {
         // clickHandler logic
     };
    
    var onHover = function(event) {
         // Placeholder for function logic
     };
    var offHover = function(event) {
         // Placeholder for function logic
     };
    
    $row.find('.song-item-number').click(clickHandler);
    $row.hover(onHover, offHover);
    return $row; 
 };

var setCurrentAlbum = function(album) {
     var $albumTitle = $('.album-view-title');
     var $albumArtist = $('.album-view-artist');
     var $albumReleaseInfo = $('.album-view-release-info');
     var $albumImage = $('.album-cover-art');
     var $albumSongList = $('.album-view-song-list')[0];
 
     $albumTitle.text(album.name);
     $albumArtist.text(album.artist);
     $albumReleaseInfo.text(album.year + ' ' + album.label);
     $albumImage.attr('src', album.albumArtUrl);
 
     albumSongList.empty();
    
     for (i = 0; i < album.songs.length; i++) {
         var $newRow = createSongRow( i + 1, albums.songs[i].name, album.songs[i].length);
         $albumSongList.append($newRow);
     }
 };

 
var playButtonTemplate = '<a class="album-song-button"><span class="ion-play"></span></a>';
var pauseButtonTemplate = '<a class="album-song-button"><span class="ion-pause"></span></a>';
var currentlyPlayingSong = null;
 
 $(document).ready(function() {
     setCurrentAlbum(albumPicasso);
     
 });