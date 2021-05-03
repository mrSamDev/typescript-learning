// const product: {
// 	id: string;
// 	price: number;
// 	tags: string[];
// 	details: {
// 		title: string;
// 		description: string;
// 	};
// } = {
// 	id: "abc1",
// 	price: 12.99,
// 	tags: ["great-offer", "hot-and-new"],
// 	details: {
// 		title: "Red Carpet",
// 		description: "A great carpet - almost brand-new!",
// 	},
// };
var Roles;
(function (Roles) {
    Roles["ADMIN"] = "qw";
    Roles[Roles["READ_ONLY"] = 2] = "READ_ONLY";
    Roles["AUTHOR"] = "dsa";
})(Roles || (Roles = {}));
var persons = {
    name: "sijo",
    age: 24,
    hobbies: ["Coding", "Reading"],
    role: Roles.ADMIN
};
