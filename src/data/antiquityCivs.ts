import { Civ } from "./types"

const antiquityCivs:Civ [] = [
    {
        id: 0,
        age: "Antiquity",
        name: "Aksum",
        type1: "Cultural",
        type2: "Economic",
        attribute: [
            "+2 Gold on Resources",
            "+30% Production towards constructing the Great Stele"
        ],
        uniqueUnits: [
            {
                type:"Naval",
                name:"Dhow",
                unlocks:"Tech tree - Sailing",
                abillity:[
                    "+4 Combat Strength on Coast",
                    "Has 1 charge to create a naval Trade Route"
                ],
            },
            {
                type:"Merchant",
                name:"Tankwa",
                unlocks:"",
                abillity:[
                    "Cannot be pillaged",
                    "+10 Trade Route range",
                    "Note - this is the unit the merchant becomes."
                ],
            }
        ],
        uniqueBuildings: [
            {
            type:"Improvement",
            ageless: "Ageless",
            name:"Hawilt",
            attribute:"+2 Gold. +1 adjacent bonus",
            Adjacency:["Hawilt", "Wonders"],
            placement: ["Flat"],
            unlocks:"Civ Civic-Tree - First line",
            },
        ], 
        wonderBonus: {
            name:"Great Stele",
            placement:"Flat",
            attribute:"Gain 200 Gold when you construct a Wonder in this Settlement, uncluding this one.",
            unlocks: "Civ Civic-Tree - First line and Sience tree - Writing."
        },
        civics: [
            {
                line:"First-Line",
                name:"Periplus of the erytheraean sea",
                unlocks:[
                    "Hawilt - Unique improvement.",
                    "Wonder Great Stele (Bonus production towards)."
                ],
                bonus:[
                    "+1 Resource capacity in settlements on coast or Navigable Rivers."
                ],
                mastery: {
                    bonus:[
                        "+1 Gold on Quarters adjacent to coast."
                    ],
                    tradition:[
                        {
                            name: "Port of Nations",
                            attribute: "+2 Culture and gold for every active Trade Route"
                        },
                    ],
                }, 
            },
            {
                line:"Second-Line",
                name:"Monumentum Adulitanum",
                bonus: [
                    "The altar and monument gain a +1 culture adjancency with Hawilti."
                ],
                tradition:[
                    {
                    name: "Throne of my Fathers",
                    attribute: "+15% Gold in Cities adjacent to coast",
                    },
                ],
            },
            {
                line:"Second-Line",
                name:"Book of the Himyarites",
                bonus:[
                    "The dhow ignores zone of control.",
                ],
                tradition:[
                    {
                    name:"May this please the people",
                    attribute:"+2 Culture on resources on or adjacent to coast."
                    },
                ],
            },
        ],
        startBias:["Coast", "Rough"],
        unlocksExploration: ["Songhai"],
        unlocksModern: [null],
    },
    {
        id: 1,
        age: ,
        name: ,
        type1: ,
        type2: ,
        attribute: [
        ],
        uniqueUnits: [
            {
                type:,
                name:,
                unlocks:,
                abillity:[
                ],
            },
            {
                type:,
                name:,
                unlocks:,
                abillity:[
                ],
            }
        ],
        uniqueBuildings: [
            {
            type:,
            ageless: ,
            name:,
            attribute:,
            Adjacency:[],
            placement: [],
            unlocks:,
            },
        ], 
        wonderBonus: {
            name:,
            placement:,
            attribute:,
            unlocks: 
        },
        civics: [
            {
                line:,
                name:, 
            },
        ],
        startBias:[],
        unlocksExploration: [],
        unlocksModern: [],
    },
]