import React from 'react';
import {godArray, itemArray} from './arrays.js';

//C:\Users\Joey\smitesociety\src\images
//TODO
//eliminate duplicates correctly

const randomizerFunctions = {
   
    createBuild: function(){
		//Declare variables for the randomly chosen god
		var randomGod = godArray[Math.floor(Math.random()*godArray.length)]
		var randomGodImg = <img src={process.env.PUBLIC_URL + '/' + randomGod.image} />	

		// Loop for item build
		var i = 0;
		var itemBuild = [];
		let mySet = new Set();
		while(i < 6) {
			var randomItem = itemArray[Math.floor(Math.random()*itemArray.length)];
			if(!mySet.has(randomItem.name)) {
				if(randomGod.type == 'Magic' && randomItem.type != 'Physical') {
					itemBuild[i] = randomItem.name;
					mySet.add(randomItem.name);
					i++;
				} else if(randomGod.type == 'Physical' && randomItem.type != 'Magic') {
					itemBuild[i] = randomItem.name;
					mySet.add(randomItem.name);
					i++;
				}
			}
		}
		return (
			<div className='SingleBuild'>
				<div className='SingleBuildImage'>{randomGodImg}</div>
				<div className='SingleBuildName'><strong>{randomGod.name}</strong></div>
				<div className='SingleBuildList'>
				<p>{itemBuild[0]}</p>
				<p>{itemBuild[1]}</p>
				<p>{itemBuild[2]}</p>
				<p>{itemBuild[3]}</p>
				<p>{itemBuild[4]}</p>
				<p>{itemBuild[5]}</p>
				</div>
			</div>
		)
	},
	printBuild: function(num){
		var numBuilds = num
		var i = 0
		var buildList = []
		let mySet = new Set()
		
		if(!mySet.has(randomizerFunctions.createBuild().name)) {
		 while(i<numBuilds) {
				buildList[i] = randomizerFunctions.createBuild();
				mySet.add(randomizerFunctions.createBuild().name)
					i++
		 }
		}
			return (
				<div className='BuildList'>{buildList}</div>
			)
		
	}
}

export default randomizerFunctions;



