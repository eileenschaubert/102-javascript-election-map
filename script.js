//factory function for politicians
var createPolitician = function(name, partyColor){

  //create politician object
  var politician = {};

  //give the object properties
  politician.name = name;// set name property to the value of the name parameter
  politician.electionResults = null;
  politician.totalVotes = 0;

  //give the politician a party color
  politician.partyColor = partyColor;

  //test the code - can be removed
  // politician.announcePolitician = function()
  // {
  //   console.log("Candidate "+ name + " is on the campaign trail!")
  // };
  //end test

  // politician.announcePolitician();
   //loop through electionResults array and total up the votes
  politician.tallyUpTotalVotes = function(){
    this.totalVotes = 0;
    for (var i = 0; i < this.electionResults.length; i++){
        this.totalVotes = this.totalVotes + this.electionResults[i];
    }
  };

  return politician;

}; //end factory function

//name property is set to "name parameter" and partyColor  property which is an array is set to "partyColor" parameter
var tracy = createPolitician("Tracy Smith", [132, 17, 11]);
var billie = createPolitician("Billie Eilish", [245, 141, 136]);

//assign the arrays to each candidate
tracy.electionResults = [5, 1, 7, 2, 33, 6, 4, 2, 1, 14, 8, 3, 1, 11, 11, 0, 5, 3, 3, 3, 7, 4, 8, 9, 3, 7, 2, 2, 4, 2, 8, 3, 15, 15, 2, 12, 0, 4, 13, 1, 3, 2, 8, 21, 3, 2, 11, 1, 3, 7, 2];
billie.electionResults = [4, 2, 4, 4, 22, 3, 3, 1, 2, 15, 8, 1, 3, 9, 0, 6, 1, 5, 5, 1, 3, 7, 8, 1, 3, 3, 1, 3, 2, 2, 6, 2, 14, 0, 1, 6, 7, 3, 7, 3, 6, 1, 3, 17, 3, 1, 2, 11, 2, 3, 1];

//show the original array contents - can be removed
// console.log(tracy.electionResults);
// console.log(billie.electionResults);

//swap out with recount info variable.arrayName[position]
tracy.electionResults[9] = 1;
billie.electionResults[9] = 28;

tracy.electionResults[4] = 17;
billie.electionResults[4] = 38;

tracy.electionResults[43] = 11;
billie.electionResults[43] = 27;

//show the updated array contents - can be removed
// console.log(tracy.electionResults);
// console.log(billie.electionResults);

// set the state results
var setStateResults = function(state){
    theStates[state].winner = null;
    if (tracy.electionResults[state] > billie.electionResults[state]){
      theStates[state].winner = tracy; //set winner to the candidate object, not the candidate's name this time
    } else if (tracy.electionResults[state] < billie.electionResults[state]){
      theStates[state].winner = billie;
    }

  //First, create a new variable called stateWinner and make it equal to the state's winner property.
  var stateWinner = theStates[state].winner;

  if (stateWinner !== null){
    theStates[state].rgbColor = stateWinner.partyColor;
  } else {
    theStates[state].rgbColor = [11,32,57];
  }

  var stateInfoTable = document.getElementById('stateResults');
  var header = stateInfoTable.children[0];
  var body = stateInfoTable.children[1];
  var stateName = header.children[0].children[0];
  var abbrev = header.children[0].children[1];
  var candidate1Name = body.children[0].children[0];
  var candidate2Name = body.children[1].children[0];
  var candidate1Results = body.children[0].children[1];
  var candidate2Results = body.children[1].children[1];
  var winnersName = body.children[2].children[1];

  stateName.innerText = theStates[state].nameFull;
  abbrev.innerText = "(" +theStates[state].nameAbbrev + ")";

  candidate1Name.innerText = tracy.name;
  candidate2Name.innerText = billie.name;

  candidate1Results.innerText = tracy.electionResults[state];
  candidate2Results.innerText = billie.electionResults[state];

  if (theStates[state].winner === null){
    winnersName.innerText = "DRAW";
  } else {
    winnersName.innerText = theStates[state].winner.name;
  }

}; // end setStateResults

//call the method to add up votes
tracy.tallyUpTotalVotes();
billie.tallyUpTotalVotes();

//show the total votes for each candidate - can be removed
// console.log(tracy.totalVotes);
// console.log(billie.totalVotes);

// console messages to make sure the property is assigned correctly - can be removed
// console.log("Tracy's color is: " + tracy.partyColor);
// console.log("Billie's color is: " + billie.partyColor);

//compare totals and declare a winner
var winner = "I'm not sure yet...";

if (tracy.totalVotes > billie.totalVotes){
  winner = tracy.name;
}else if (tracy.totalVotes < billie.totalVotes){
  winner = billie.name;
}else{
  winner = "It's a Draw!"
}

// check the assignment to winner - can be removed
// console.log("AND THE WINNER IS..." + winner + "!!!");

// populating the Total Result Banner
var countryInfoTable = document.getElementById('countryResults');
//shorten the code
var row = countryInfoTable.children[0].children[0];

row.children[0].innerText = tracy.name;
row.children[1].innerText = tracy.totalVotes;
row.children[2].innerText = billie.name;
row.children[3].innerText = billie.totalVotes;
row.children[5].innerText = winner;
