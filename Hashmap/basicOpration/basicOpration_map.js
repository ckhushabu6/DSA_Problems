let map = new Map();
//opration on Map
// map.set(key, value);
// map.get(key);
// map.has(key);
// map.delete(key);
// map.size;
// map.clear();
//_____________________________________________________

//insert
map.set("name" , "shivya");
map.set("age" , 23);
map.set("address" , "Nashik");
console.log(map);
console.log(map.get("age"));
console.log(map.has("age"))
console.log(map.has("colleage"))
map.delete("age");
console.log(map)
console.log(map.size)
map.clear();
console.log(map);