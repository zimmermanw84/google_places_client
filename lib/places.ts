class Human {
		private name: string;
		private age: number;

		get getAge() { return this.age; }
		get getName() { return this.name; }

		membersToString() {
				let loggedUser: string = `Hey my name is ${this.name} and I'am ${this.age} years old`;
				console.log(loggedUser);
		}

		constructor(age: number, name: string) {
				this.age = age;
				this.name = name;
		}
}

class Webmaster extends Human {
		private skills: string[] = ['Nodejs', 'Typescript', 'MySql'];
		private mainSkill: string;

		skillToString() {
				let loggedSkill: string = `I am really good at ${this.mainSkill}!`;
				console.log(loggedSkill);
		}

		constructor(name: string, age: number, main: number) {
				super(age, name);
				this.mainSkill = this.skills[main];
		}
}

let SomeHuman = new Human(19, 'Billy');
SomeHuman.membersToString();

let Walt = new Webmaster('Walt', 31, 2);
Walt.membersToString();
Walt.skillToString();