var descendants = [];
var dataObject = [{ 
	id :   272822514,
	  firstName: "Billy",
	  lastName: "Bob",
	  gender: "male",
	  dob: "1/18/1949",
	  height: 71,
	  weight: 175,
	  eyeColor: "brown",
	  occupation: "programmer",
	  parents: [],
	  currentSpouse: 401222887 
	},
	{id :   401222887,
	  firstName: "Uma",
	  lastName: "Bob",
	  gender: "female",
	  dob: "4/1/1947",
	  height: 65,
	  weight: 162,
	  eyeColor: "brown",
	  occupation: "assistant",
	  parents: [],
	  currentSpouse: 272822514 
	},
	{id :   409574486, 
	  firstName: "Michael",
	  lastName: "Walkens",
	  gender: "male",
	  dob: "5/9/1951",
	  height: 76,
	  weight: 250,
	  eyeColor: "brown",
	  occupation: "landscaper",
	  parents: [],
	  currentSpouse: 260451248 
	},
	{id :   260451248,
	  firstName: "Jon",
	  lastName: "Walkens",
	  gender: "male",
	  dob: "9/6/1945",
	  height: 62,
	  weight: 115,
	  eyeColor: "brown",
	  occupation: "assistant",
	  parents: [],
	  currentSpouse: 409574486 
	},
	{id :   629807187,
	  firstName: "Jack",
	  lastName: "Pafoy",
	  gender: "male",
	  dob: "3/16/1938",
	  height: 70,
	  weight: 207,
	  eyeColor: "black",
	  occupation: "nurse",
	  parents: [],
	  currentSpouse: 464142841 
	},
	{id :   464142841,
	  firstName: "Jen",
	  lastName: "Pafoy",
	  gender: "female",
	  dob: "4/10/1940",
	  height: 72,
	  weight: 256,
	  eyeColor: "black",
	  occupation: "student",
	  parents: [],
	  currentSpouse: 629807187 
	},
	{id :   982411429,
	  firstName: "Mister",
	  lastName: "Potatoo",
	  gender: "male",
	  dob: "12/18/1952",
	  height: 66,
	  weight: 170,
	  eyeColor: "hazel",
	  occupation: "architect",
	  parents: [],
	  currentSpouse: 595767575 
	},
	{id :   595767575,
	  firstName: "Missuz",
	  lastName: "Potatoo",
	  gender: "female",
	  dob: "10/28/1948",
	  height: 59,
	  weight: 137,
	  eyeColor: "blue",
	  occupation: "architect",
	  parents: [],
	  currentSpouse: 982411429 
	},
	{id :   693243224,
	  firstName: "Joy",
	  lastName: "Madden",
	  gender: "female",
	  dob: "4/20/1939",
	  height: 69,
	  weight: 199,
	  eyeColor: "hazel",
	  occupation: "doctor",
	  parents: [],
	  currentSpouse: 888201200
	},
	{id :   888201200,
	  firstName: "Mader",
	  lastName: "Madden",
	  gender: "male",
	  dob: "5/6/1937",
	  height: 76,
	  weight: 205,
	  eyeColor: "black",
	  occupation: "landscaper",
	  parents: [],
	  currentSpouse: 693243224 
	},
	{id :   878013758,
	  firstName: "Jill",
	  lastName: "Pafoy",
	  gender: "female",
	  dob: "2/8/1972",
	  height: 74,
	  weight: 118,
	  eyeColor: "brown",
	  occupation: "programmer",
	  parents: [401222887,272822514],
	  currentSpouse: 294874671 
	},
	{id :   951747547,
	  firstName: "Ralph",
	  lastName: "Bob",
	  gender: "male",
	  dob: "12/23/1969",
	  height: 66,
	  weight: 179,
	  eyeColor: "blue",
	  occupation: "nurse",
	  parents: [401222887,272822514],
	  currentSpouse: 159819275 
	},
	{id :   159819275,
	  firstName: "Jasmine",
	  lastName: "Bob",
	  gender: "female",
	  dob: "12/18/1969",
	  height: 58,
	  weight: 156,
	  eyeColor: "blue",
	  occupation: "assistant",
	  parents: [409574486,260451248],
	  currentSpouse: 951747547 
	},
	{id :   348457184,
	  firstName: "Annie",
	  lastName: "Pafoy",
	  gender: "female",
	  dob: "11/4/1970",
	  height: 62,
	  weight: 235,
	  eyeColor: "hazel",
	  occupation: "landscaper",
	  parents: [629807187,464142841],
	  currentSpouse: null 
	},
	{id :   294874671,
	  firstName: "Dave",
	  lastName: "Pafoy",
	  gender: "male",
	  dob: "8/5/1967",
	  height: 61,
	  weight: 112,
	  eyeColor: "green",
	  occupation: "doctor",
	  parents: [629807187,464142841],
	  currentSpouse: 878013758 
	},
	{id :   931247228,
	  firstName: "Amii",
	  lastName: "Pafoy",
	  gender: "female",
	  dob: "3/13/1963",
	  height: 74,
	  weight: 184,
	  eyeColor: "brown",
	  occupation: "landscaper",
	  parents: [629807187,464142841],
	  currentSpouse: null 
	},
	{id :   822843554,
	  firstName: "Regina",
	  lastName: "Madden",
	  gender: "female",
	  dob: "7/26/1959",
	  height: 71,
	  weight: 249,
	  eyeColor: "brown",
	  occupation: "nurse",
	  parents: [693243224, 888201200],
	  currentSpouse: null 
	},
	{id :   819168108,
	  firstName: "Hana",
	  lastName: "Madden",
	  gender: "female",
	  dob: "10/7/1953",
	  height: 70,
	  weight: 187,
	  eyeColor: "brown",
	  occupation: "politician",
	  parents: [693243224, 888201200],
	  currentSpouse: null 
	},
	{id :   969837479,
	  firstName: "Eloise",
	  lastName: "Madden",
	  gender: "female",
	  dob: "12/11/1961",
	  height: 63,
	  weight: 241,
	  eyeColor: "brown",
	  occupation: "assistant",
	  parents: [693243224, 888201200],
	  currentSpouse: null 
	},
	{id :   313207561,
	  firstName: "Mattias",
	  lastName: "Madden",
	  gender: "male",
	  dob: "2/19/1966",
	  height: 70,
	  weight: 110,
	  eyeColor: "blue",
	  occupation: "assistant",
	  parents: [693243224, 888201200],
	  currentSpouse: 313997561 
	},
	{id :   313997561,
	  firstName: "Ellen",
	  lastName: "Madden",
	  gender: "female",
	  dob: "2/19/1970",
	  height: 67,
	  weight: 100,
	  eyeColor: "blue",
	  occupation: "doctor",
	  parents: [],
	  currentSpouse: 313207561 
	},
	{id :   313998000,
	  firstName: "Joey",
	  lastName: "Madden",
	  gender: "female",
	  dob: "2/02/1987",
	  height: 67,
	  weight: 100,
	  eyeColor: "blue",
	  occupation: "doctor",
	  parents: [313207561,313997561],
	  currentSpouse: null 
	}];

function initSearch(){
	alert("Welcome to the top secret government agency most wanted database search tool.  If you have accessed this site without proper clearance, a drone is en route to your location to deliver your immediate termination.");
	selectMode(0);


}
function selectMode(){
	var modeChoice = prompt("What would you like to search for?\n Type 'lookup' to inquire info by name \n Type 'search' to query database by various attributes \n Type 'kin' to get next of kin by name \n Type 'descendants' to get a list of descendant for a given name \n Type 'family' for a list of immediate family members for a given name");
	if (modeChoice == "lookup"){
		searchName();
	}
	else if (modeChoice == "search"){
		searchAttributes();
	}
	else if (modeChoice == "kin"){
		getKin();
	}
	else if (modeChoice == "descendants"){
		searchDescendants();
	}
	else if (modeChoice == "family"){
		searchFamily();
	} else {
		selectMode();
	}
}
function searchName(){
	var yourName = prompt("Who would you like to search for? \n Enter name in format 'John Doe' without the quotations.");
	var result = splitAndSearchName(yourName);
	if (result.length != 0){
	result.forEach(function(person){
		printPersonInfo(person);
	});
	} else {
		alert("No results for given name.")
	}
}
function getKin(){
	var yourName = prompt("Who would you like to obtain next of kin for? \n Enter name in format 'John Doe' without the quotations.");
	var result = splitAndSearchName(yourName);
	if (result.length != 0){
	result.forEach(function(person){
		var nextOfKin = getNextOfKin(person);
		if (nextOfKin != null){
		responder("Next of kin for " + getName(person) + " is " + getName(nextOfKin));
		} else{
			Alert("No suitable next of kin found.");
		}
	});
	} else {
		Alert("No results for given name.")
	}
}
function searchDescendants(){
	var yourName = prompt("Who would you to find descendants of? \n Enter name in format 'John Doe' without the quotations.");
	var result = splitAndSearchName(yourName);
	if (result.length != 0){
	result.forEach(function(person){
		descendants = [];
		getDescendants(person);
		if (descendants.length != 0){
		responder("Descendants of " + getName(person) + " are: \n" + getNames(descendants));
		} else {
			alert("No descendants found");
		}

	});
	} else{
		alert("No results for given name.");
	}

}
function searchFamily(){
	var yourName = prompt("Who would you to find family of? \n Enter name in format 'John Doe' without the quotations.");
	var result = splitAndSearchName(yourName);
	if (result.length != 0){
	result.forEach(function(person){
		var family = getFamily(person);
		if (family.length != 0){
		responder("Family of " + getName(person) + " are: \n" + getNames(family));
		} else {
			alert("No family found");
		}
	});
	} else{
		alert("No results for given name.");
	}
}
function splitAndSearchName(name){
	var splitName = name.split(" ");
	var result = getPersonInfo(splitName[0], splitName[1]);
	return result;
}
function searchAttributes(){
	var query = prompt("Enter desired search querys separated by commas.\n Choices: \n Age: in format # \n Age Range: in format #-# \n Height: in format #'#\" \n Weight: in format #lbs \n Occupation: single word \n Eye Color: single word \n Occupation and Eye Color are interchangeable");
	query = query.replace(/\s+/g, '');
	var querys = query.split(",");
	var results = querys.map(parseAndSearch);
	results = results.reduce(function(a,b){
		var matchedValues = [];
		if (a != "noMatchedPattern" && b != "noMatchedPattern"){
		for (var indexa = 0; indexa < a.length; indexa++){
			for (var indexb = 0; indexb < b.length; indexb++){
				if (a[indexa] === b[indexb]){
					matchedValues.push(b[indexb]);
				};
			};
		};
		return matchedValues;
		} else if (a === "noMatchedPattern" && b != "noMatchedPattern"){
			return b;
		} else if (a != "noMatchedPattern" && b === "noMatchedPattern"){
			return a;
		} else{
			return a;
		}
	});
	responder(getNames(results));
}

function parseAndSearch(value){
	var heightPattern = /\d*\d*\d*\d'|\d*\d"/;
	var agePattern = /\d*\d*\d*\d/;
	var ageRangePattern = /\d*\d*\d*\d-\d*\d*\d*\d/;
	var weightPattern = /\d*\d*\d*\dlbs/i;
	var occupationOrEyeColorPattern = /\w/i;
	if (heightPattern.test(value)){
		var unsplitHeight = value.replace(/"/, '');
		var splitHeight = unsplitHeight.split("'");
		var height = splitHeight[0] * 12 + splitHeight[1];
		var matches = dataObject.filter(function (person){
			return person.height == height;
		});
		return matches;
	}
	else if (ageRangePattern.test(value)){
		
		var splitAges = value.split("-");
		var matches = dataObject.filter(function (person){
			return getAge(person.dob) >= parseInt(splitAges[0]) &&
			getAge(person.dob) <= parseInt(splitAges[1]);
		});
		return matches;
	}
	else if (agePattern.test(value)){
		var matches = dataObject.filter(function (person){
			return getAge(person.dob) == value;
		});
		return matches;
	}
	else if (weightPattern.test(value)){
		var weight = value.replace(/lbs/i, '');
		var matches = dataObject.filter(function (person){
			return person.weight == weight;
		});
		return matches;
	}
	else if (occupationOrEyeColorPattern.test(value)){
		var matches = dataObject.filter(function (person){
			return person.occupation == value ||
			person.eyeColor == value;
		});
		return matches;
	} else{
		var reprompt = prompt(value + " is an invalid format.  Reenter a new query for " + value + " or leave blank to skip.")
		if (reprompt === ""){
			return "noMatchedPattern";
		} else {
			parseAndSearch(reprompt);
		};
	}
	
}

function getAge(dob){
	var birthday = Date.parse(dob);
    var ageDifference = Date.now() - birthday;
    var ageDate = new Date(ageDifference);
    var age = ageDate.getUTCFullYear() - 1970;
	return age;
}

function printPersonInfo(person){
	var result = JSON.stringify(person, null, 2);
	alert(result);
}

function responder(result){
	alert(result);
}

function getPersonInfo(firstname, lastname){
	var matches = dataObject.filter(function (value){
		return value.firstName === firstname &&
		value.lastName === lastname
	});
	var result = matches;
	return result;
}

function getDescendants(person){
	var children = dataObject.filter(function (x){
	return x.parents[0] === person.id ||
		x.parents[1] === person.id
	});
	for (var x = 0; x < children.length; x++){
		descendants.push(children[x]);
		getDescendants(children[x]);
	};	
}

function getFamily(person){
	var familyMembers = [];
	dataObject.forEach(function(item){
		if ((item.parents[0] === person.id ||
		item.parents[1] === person.id ||
		person.parents[0] === item.id ||
		person.parents[1] === item.id ||
		person.currentSpouse === item.id) ||
		(person.parents.length != 0 && 
		person.parents[0] === item.parents[0]) &&
		person.id != item.id)
		{
			familyMembers.push(item);		
		};
		
		
	});
	return familyMembers;
}


function getEldest(people)
{
	var lowest = Number.POSITIVE_INFINITY;
	var eldest;
	people.forEach(function(person)
	{
		var birthDate = Date.parse(person.dob);
		if (birthDate < lowest){ 
		lowest = birthDate; 
		eldest = person;
		};
	});
	return eldest;
}
function getNextOfKin(person)
{
	var spouse = dataObject.filter(function (value){
		return value.currentSpouse === person.id;
	});
	if (spouse.length != 0)
	{
		return getEldest(spouse);
	};
	var children = dataObject.filter(function (value){
		return value.parents[0] === person.id ||
		value.parents[1] === person.id;
	});
	if (children.length != 0)
	{
		return getEldest(children);
	};
	var parent = dataObject.filter(function (value){
		return person.parents[0] === value.id ||
		person.parents[1] === value.id;
	});
	if (parent.length != 0)
	{
		return getEldest(parent);
	};
	var siblings = dataObject.filter(function (value){
		return value.parents[0] === person.parents[0] &&
		value.id != person.id && 
		person.parents.length != 0;
	});
	if (siblings.length != 0)
	{
		return getEldest(siblings);
	};
	var grandChildren = [];
	var children = dataObject.filter(function (value){
		return value.parents[0] === person.id ||
		value.parents[1] === person.id;
	});
	if (children.length != 0){
	children.forEach(function(child){
		var grandChild = dataObject.filter(function (value){
			return value.parents[0] === child.id ||
			value.parents[1] === child.id;
		});
		grandChild.forEach(function(kid){
		grandChildren.push(kid);	
		});
	});
	}
	if (grandChildren.length != 0)
	{
		return getEldest(grandChildren);
	};
	var grandParents = [];
	var parent = dataObject.filter(function (value){
		return person.parents[0] === value.id ||
		person.parents[1] === value.id;
	});
	if (parent.length != 0){
	var grandParents = dataObject.filter(function (value){
		return value.id === parent[0].parents[0] ||
		value.id === parent[0].parents[1] ||
		value.id === parent[1].parents[0] ||
		value.id === parent[1].parents[1]
	});
	}
	if (grandParents.length != 0){
		return getEldest(grandParents);
	};
	var nebling = [];
	var siblings = dataObject.filter(function (value){
		return value.parents[0] === person.parents[0] &&
		value.id != person.id && 
		person.parents.length != 0;
	});
	if (siblings.length != 0){
	siblings.forEach(function(sibling){
		var neblings = dataObject.filter(function (value){
			return value.parents[0] === sibling.id ||
			value.parents[1] === sibling.id;
		});
		neblings.forEach(function(kid){
		nebling.push(kid);	
		});
	});
	}
	
	if (nebling.length != 0){
		return getEldest(nebling);
	}
	
	var auncle = [];
	var parent = dataObject.filter(function (value){
		return person.parents[0] === value.id ||
		person.parents[1] === value.id;
	});
	if (parent.length != 0){
	var auncle = dataObject.filter(function (value){
		return value.parents[0] === parent[0].parents[0] &&
		value.id != parent[0].id && 
		parent[0].parents.length != 0 ||
		value.parents[0] === parent[1].parents[0] &&
		value.id != parent[1].id &&
		parent[1].parents.length != 0
	});
	}
	if (auncle.length != 0){
		return getEldest(auncle);
	};
	var grandChildren = [];
	var greatGrandChild = [];
	var children = dataObject.filter(function (value){
		return value.parents[0] === person.id ||
		value.parents[1] === person.id;
	});
	if (children.length != 0){
	children.forEach(function(child){
		var grandChild = dataObject.filter(function (value){
			return value.parents[0] === child.id ||
			value.parents[1] === child.id;
		});
		grandChild.forEach(function(kid){
		grandChildren.push(kid);	
		});
	});
	if (grandChildren.length != 0){
	grandChildren.forEach(function(grandChild){
		var greatGrandChildren = dataObject.filter(function (value){
			return value.parents[0] === grandChild.id ||
			value.parents[1] === grandChild.id
		});
		greatGrandChildren.forEach(function(grandKid){
			greatGrandChild.push(grandKid);
		});
	});
	}
	}
	if (greatGrandChild.length != 0){
		return getEldest(greatGrandChild);
	};
	
	var greatGrandParents = [];
	var grandParent = [];
	var parent = dataObject.filter(function (value){
		return person.parents[0] === value.id ||
		person.parents[1] === value.id;
	});
	if (parent.length != 0){
	var grandParent = dataObject.filter(function (value){
		return value.id === parent[0].parents[0] ||
		value.id === parent[0].parents[1] ||
		value.id === parent[1].parents[0] ||
		value.id === parent[1].parents[1]
	});
	if (grandParent.length != 0){
	var greatGrandParents = dataObject.filter(function(value){
		return value.id === grandParent[0].parents[0] ||
		value.id === grandParent[0].parents[1] ||
		value.id === grandParent[1].parents[0] ||
		value.id === grandParent[1].parents[1] ||
		value.id === grandParent[2].parents[0] ||
		value.id === grandParent[2].parents[1] ||
		value.id === grandParent[3].parents[0] ||
		value.id === grandParent[3].parents[1]
	});
	}
	}
	if (greatGrandParents.length != 0){
		return getEldest(greatGrandParents);
	};
}


function getNames(people){
	var names = "";
	people.forEach(function(person){
		names = names + person.firstName + " " + person.lastName + "\n";		
	});
	return names;
}
function getName(person){
	return (person.firstName + " " + person.lastName);
}

initSearch();