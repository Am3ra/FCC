/*jshint esversion: 6 */

// Setup
var collection = {
    "2548": {
      "album": "Slippery When Wet",
      "artist": "Bon Jovi",
      "tracks": [
        "Let It Rock",
        "You Give Love a Bad Name"
      ]
    },
    "2468": {
      "album": "1999",
      "artist": "Prince",
      "tracks": [
        "1999",
        "Little Red Corvette"
      ]
    },
    "1245": {
      "artist": "Robert Palmer",
      "tracks": [ ]
    },
    "5439": {
      "album": "ABBA Gold"
    }
};
// If prop isn't "tracks" and value isn't empty (""), update or set the value for that record album's property.
//cool, may i start?
//I thought it would be true unless undefined since it's a strin js is weird. I think empty string would be undefined
// Your function must always return the entire collection object.
// What are you thinking? maybe the delete line can be the last? else we can put true; as a last statement i think that would kinda work. do it.
// what is missing? I cant run the tests. lol
//I'll try testing on fcc
// There are several rules for handling incomplete data:
//
// If prop is "tracks" but the album doesn't have a "tracks" property, create an empty array before adding the new value to the album's corresponding property.
//
// If prop is "tracks" and value isn't empty (""), push the value onto the end of the album's existing tracks array.
//
// If value is empty (""), delete the given prop property from the album.
// Keep a copy of the collection for tests

var collectionCopy = JSON.parse(JSON.stringify(collection));//Hello! Go for it !

function updateRecords(id, prop, value) {
  value && prop !== "tracks" ?
  collection[id][prop] = value :
  prop === "tracks" && !collection[id].tracks ?
  collection[id].tracks = [value] :
  prop === "tracks" && value !== ""? //??
  collection[id].tracks.push(value) :
  value === "" ?
  delete collection[id][prop] :
  true;
  return collection;
}
//DONE All tests passed
// Alter values below to test your code
//let me try also
//WO
console.log(updateRecords(5439, "artist", "ABBA"));
