// this is somthing we can do, but it better for typescript to infer types
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
;
// const person:{
//     name:string;
//     age: number;
//     hobbies:string[];
//     role:[number,string];
// } 
var person = {
    name: "Sumith",
    age: 42,
    hobbies: ['Sports', 'Cooking'],
    role: Role.AUTHOR
    // role:[2,'author']
};
// person.role.push('admin');
var favoriteActivities;
favoriteActivities = ['Sprots'];
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
if (person.role === Role.AUTHOR) {
    console.log('is Author');
}
// Of course object types can also be created for nested objects.
// Let's say you have this JavaScript object:
var product = {
    id: 'abc1',
    price: 12.99,
    tags: ['great-offer', 'hot-and-new'],
    details: {
        title: 'Red Carpet',
        description: 'A great carpet - almost brand-new!'
    }
};
// This would be the type of such an object:
// {
//   id: string;
//   price: number;
//   tags: string[],
//   details: {
//     title: string;
//     description: string;
//   }
// }
// So you have an object type in an object type so to say.
