import { Civ } from "./types"

export const antiquityCivs:Civ [] = [
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
            attribute:[
                "+2 Gold. +1 adjacent bonus",
                "Does not remove Warehouse bonuses on a tile."
            ],
            Adjacency:["Hawilt", "Wonders"],
            placement: ["Flat"],
            unlocks:"Civ Civic-Tree - First Tier",
            },
        ], 
        wonderBonus: {
            name:"Great Stele",
            placement:["Flat"],
            attribute:[
                "Gain 200 Gold when you construct a Wonder in this Settlement, uncluding this one."
            ],
            unlocks: "Civ Civic-Tree - First Tier and Sience tree - Writing."
        },
        civics: [
            {
                tier:"First-Tier",
                name:"Periplus of the erytheraean sea",
                unlocks:[
                    "Hawilt (Unique improvement).",
                    "Great Stele (Wonder)."
                ],
                bonus:["+1 Resource capacity in settlements on coast or Navigable Rivers."],
                mastery: {
                    bonus:["+1 Gold on Quarters adjacent to coast."],
                    tradition:[
                        {
                            name: "Port of Nations",
                            attribute: "+2 Culture and gold for every active Trade Route"
                        },
                    ],
                }, 
            },
            {
                tier:"Second-Tier",
                name:"Monumentum Adulitanum",
                bonus: ["The altar and monument gain a +1 culture adjancency with Hawilti."],
                tradition:[
                    {
                    name: "Throne of my Fathers",
                    attribute: "+15% Gold in Cities adjacent to coast",
                    },
                ],
            },
            {
                tier:"Second-Tier",
                name:"Book of the Himyarites",
                bonus:["The dhow ignores zone of control.",],
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
        age: "Antiquity",
        name: "Carthage",
        type1: "Militaristic",
        type2: "Economic",
        attribute: [
            "Can only have 1 City.Towns cannot use Convert to City.",
            "Recive a second Merchant or Colonist (Settler) each time you create one.",
            "+30% Production towards constructing Byrsa."
        ],
        uniqueUnits: [
            {
                type:"Cavalry",
                name:"Numidian Cavalry",
                unlocks:"Science tree - The wheel",
                abillity:[
                    "Can only be purchased and are more expensive.",
                    "+1 Combat Strength for each Unique City Resource assigned to your capital.",
                    "Ignores Zone of Control."
                ],
            },
            {
                type:"Settler",
                name:"Colonist",
                unlocks:"From start (Capital 5 population)",
                abillity:[
                    "+1 Embarked Movement.",
                    "+1 Population if settled adjacent to a Resource."
                ],
            }
        ],
        uniqueBuildings: [
            {
            type: "Quarter",
            ageless: "Ageless",
            name: "Punic Port",
            attribute: [
                "Created by constructing the Cothon and Dockyard in the same District.",
                "Increase the number of Resources that may be assigned to this settlement by 2."
            ],
            Adjacency:[null],
            placement: ["Coast"],
            unlocks: "Civ Civic-tree - First-Tier",
            },
            {
            type: "Gold",
            ageless: "Ageless",
            name: "Dockyard",
            attribute: [
                "Base yeild +2 Gold",
                "Can be purchased in towns.",
                "+1 Food Adjacency"
            ],
            Adjacency:["Resource", "Wonders", "Urban district"],
            placement: ["Coast"],
            unlocks: "Civ Civic-tree - First-Tier",
            },
            {
            type: "Military and Production",
            ageless: "Ageless",
            name: "Cothon",
            attribute: [
                "Base yeild: +2 Production",
                "Can be purchased in towns.",
                "+1 Production adjacency"
            ],
            Adjacency:["Coastal", "Navigable River", "Wonders"],
            placement: ["Coast"],
            unlocks: "Civ Civic-tree - First-Tier",
            },

        ], 
        wonderBonus: {
            name: "Byrsa",
            placement: ["Adjacent Coast"],
            attribute:[
                "Base yeild: +2 Gold.",
                "Trade routes from this settlement cannot be plundered.",
                "All tiles in this City that are adjacent to Coast and eligible for Walls receive a Wall."
            ],
            unlocks: "Civ Civic-Tree - First-Tier and Science tree - Sailing"
        },
        civics: [
            {
                tier: "First-Tier",
                name: "Wisom of Tanit",
                unlocks: ["Dockyard (Unique Building"],
                bonus: ["+15 Sea Trade Route Range. +3 Gold in the Capital for every trade route from the Capital."], 
                mastery:{
                    bonus:["Increase the number of Resources that may be assigned to the Capital by 3."],
                    tradition: [
                        {
                            name: "Gaulos",
                            attribute: "+25% Gold towards purchasing Buildings on Coast or Navigable Rivers."
                        }
                    ]
                }
            },
            {
                tier: "First-Tier",
                name: "Shipsheds",
                unlocks: [
                    "Cothon (Unique Building).",
                    "Byrsa (Wonder)"
                ],
                bonus:["+1 Movement to Naval Units"],
                mastery:{
                    bonus:["+1 Range to naval units."],
                    tradition:[
                        {
                            name: "Quinquereme",
                            attribute: "+25% Gold towards purchasing Naval units. -1 Gold maintenance for naval units."
                        }
                    ]
                }
            },
            {
                tier: "Second-Tier",
                name: "Sicilian Wars",
                settlementCap: "+2 settlement cap",
                tradition:[
                    {
                        name: "Suffetes",
                        attribute: "+20% Gold from mining towns. +20% Food from fishing or farming towns."
                    }
                ],
                mastery: {
                    bonus:[
                        "+1 Movement and sight to numidian Cavalry units.",
                        "+1 Codex slot in City Halls in Towns with the Trade outpost focus."
                    ]
                }
            },
        ],
        startBias:["Coast", "Grassland"],
        unlocksExploration: ["Spain"],
        unlocksModern: [null],
    },
    {
        id: 2,
        age: "Antiquity",
        name: "Egypt",
        type1: "Cultural",
        type2: "Economic",
        attribute: [
            "+1 Production on Navigable Rivers",
            "+30% Production towards constructing the Pyramids"
        ],
        uniqueUnits: [
            {
                type:"Infantry",
                name:"Medjay",
                unlocks:"",
                abillity:[
                    "Has no maintenance.",
                    "+3 Combat Strength in friendly territory, doubled when stationed in a settlement you own."
                ],
            },
            {
                type: "Great Person",
                name:"Tjaty",
                unlocks: "",
                abillity:[
                    "A Great person with one charge.",
                    "Can only be trained in Cities with a necropolis, and the specific Tjaty received is random.",
                    "Each Tjaty can only be received once.",
                    "Cost increases per Tjaty trained."
                ]
            },
        ],
        uniqueBuildings: [
            {
                type: "Quarter",
                ageless: "Ageless",
                name: "Necropolis",
                attribute: [
                    "Created by constructing the Mastaba and Mortuary Temple in the same District.",
                    "Grants 100 Gold (on standard speed) when any Wonder is completed in this City."
                ],
                Adjacency:[null],
                placement: [null],
                unlocks: "Civ Civic-Tree - First-Tier",
            },
            {
                type: "Gold",
                ageless: "Ageless",
                name: "Mortuary Temple",
                attribute:[
                    "Base Yeild: +4 Gold.",
                    "+1 Happiness adjacency."
                ],
                Adjacency:["Navigable River", "Wonders"],
                placement: [null],
                unlocks: "Civ Civic-Tree - First-Tier"
            },
            {
               type: "Culture",
               ageless: "Ageless",
               name: "Mastaba",
               attribute: [
                "Base Yeild: +3 Culture",
                "+1 Gold adjecency"
               ],
               Adjacency: ["Wonders", "Desert"], 
               placement: [null],
               unlocks: "Civ Civic-Tree - First-Tier"
            },
        ], 
        wonderBonus: {
            name: "Pyramids",
            placement: ["Adjacent Navigable River", "Desert"],
            attribute:["+1 Gold and Production on River and Navigable River tiles in this Settlement."],
            unlocks: "Civ Civics-Tree - Second-Tier and Sience Tree - Masonry"
        },
        civics: [
            {
                tier: "First-Tier",
                name: "Arrival of Hapi",
                unlocks: ["Mortuary Temple (Unique Building)"],
                bonus: ["Minor RIvers do not end Unit movement."], 
                tradition: [
                    {
                        name:"Akhet",
                        attribute:"+1 Food on Navigable Rivers",
                    },
                ],
            },
            {
                tier: "First-Tier",
                name: "Scales of Anubis",
                unlocks: ["Mastaba (Unique Building)"],
                bonus: ["Medjay generate +1 Gold when stationed in a settlement you own."], 
                tradition: [
                    {
                        name:"Riches of the Duat",
                        attribute:"+15% Production towards constructing Wonders",
                    },
                ],
            },
            {
                tier: "Second-Tier",
                name: "Light of Amun-Ra",
                unlocks: ["Pyramids (Wonder)"],
                bonus: ["+5 Gold on the palace."], 
                tradition: [
                    {
                        name:"Kemet",
                        attribute:"+1 Culture on Navigable Rivers",
                    },
                ],
                settlementCap:"+1 Settlement cap",
            },
        ],
        startBias:["Navigable River", "Desert"],
        unlocksExploration: ["Abbasid", "Songhai"],
        unlocksModern: [null],
    },
    {
        id: 3,
        age: "Antiquity",
        name: "Greek",
        type1: "Cultural",
        type2: "Diplomatic",
        attribute: [
            "+3 Influence per turn on the Palace.",
            "+30% Production towards constructing the Oracle."
        ],
        uniqueUnits: [
            {
                type:"Infantry",
                name:"Hoplite",
                unlocks:"Bronze working",
                abillity:["+2 Combat Strength if adjacent to another Hoplite."],
            },
            {
                type:"Great Person",
                name:"Logios",
                unlocks:"When first Acroplois is built.",
                abillity:["Can only be trained in Cities with an Acropolis, and the specific Logios received is random. Each Logios Can only be received once. Cost increases per Logios trained"],
            },
        ],
        uniqueBuildings: [
            {
                type: "Quarter",
                ageless: "Ageless",
                name: "Acropolis",
                attribute: [
                    "Created by constructing the Odeon and Parthenon in the same District.",
                    "+2 Gold on the Parthenon for each City-State you are Suzerain of.",
                    "Unlocks Logios."
                ],
                Adjacency:[null],
                placement: [null],
                unlocks: "Civ Civics-Tree - First-Tier",
            },
            {
                type: "Happiness",
                ageless: "Ageless",
                name: "Odeon",
                attribute: [
                    "+3 Happiness.",
                    "+1 Culture Adjacency"
                ],
                Adjacency:["Quarters","Wonders"],
                placement: [null],
                unlocks: "Civ Civics-Tree - First-Tier",
            },
            {
                type: "Culture",
                ageless: "Ageless",
                name: "Parthenon",
                attribute: [
                    "+4 Culture.",
                    "+2 Influence if placed on Rough Terrain.",
                    "+1 Culture adjacency"
                ],
                Adjacency:["Wonders"],
                placement: [null],
                unlocks: "Civ Civics-Tree - First-Tier",
            },

        ], 
        wonderBonus: {
            name: "Oracle",
            placement: ["Rough"],
            attribute:[
                "+2 Culture.",
                "When gaining rewards from a Narrative Event. Gain an additional 10 Culture per Age."
            ],
            unlocks: "Civ Civics-Tree - Second-Tier(Mastery) and Civic Tree - Public Life"
        },
        civics: [
            {
                tier: "First-Tier",
                name: "Ekklesia",
                unlocks: ["Odeon (Unique Building)"], 
                tradition: [
                    {
                        name:"Xenia",
                        attribute:"+50% Influence towards the initiating and progressing the Befriend Independent Project.",
                    },
                ],
                mastery:{
                    bonus:["+2 Culture for active Endeavors, Sanctions and Projects you started or supported."],
                }
            },
            {
                tier: "First-Tier",
                name: "Agoge",
                unlocks: ["Parthenon (Unique Building)"],
                tradition: [
                    {
                        name:"Strategoi",
                        attribute:"+25% Army Commander experience.",
                    },
                ],
                mastery:{
                    bonus:["Hoplite gain +1 Combat strength for each City-State you are Suzerain of."],
                }
            },
            {
                tier: "Second-Tier",
                name: "Symmachia",
                bonus: ["+2 Culture for each City-State you are Suzerain of."], 
                settlementCap:"+1 Settlement cap",
                mastery:{
                    unlocks:["Oracle (Wonder)",],
                    tradition: [
                        {
                            name: "Delian League",
                            attribute: "+30% Influence towards initiating Endeavors."
                        },
                        {
                            name: "Peloponnesian League",
                            attribute: "+30% Influence towards initiating Sanctions"
                        }
                    ],
                }
            },
        ],
        startBias:["Rough", "Grassland"],
        unlocksExploration: ["Norman", "Spain"],
        unlocksModern: ["Russia"],
    },
    {
        id: 4,
        age: "Antiquity",
        name: "Han",
        type1: "Diplomatic",
        type2: "Scientific",
        attribute: [
            "The Capital and new Towns gain an additional Population with their first growth event.",
            "+30% Production towards constructing Weiyang Palace."
        ],
        uniqueUnits: [
            {
                type:"Ranged",
                name:"Chu-Ko-Nu",
                unlocks:"Science tree - Animal Husbandry",
                abillity:[
                    "Hans Zone of Control and a higher Defense Strength.",
                    "+5 Combat Strength when attacking adjacent Units."
                ],
            },
        ],
        uniqueBuildings: [
            {
            type: "Improvement",
            ageless: "Ageless",
            name: "Great Wall",
            attribute: [
                "+2 Culture.",
                "+1 Happiness adjacency.",
                "Count as fortification, +6 Combat Strength when defending.",
                "Does not remove Warehouse bonuses on a tile.",
                "Can only be built in a Tier. Cannot branch or fork."
            ],
            Adjacency:["Great Wall"],
            placement: [null],
            unlocks: "Civ Civics-Tree - First-Tier",
            },
        ], 
        wonderBonus: {
            name: "Weiyang Palace",
            placement: ["Grassland"],
            attribute:["+6 Influence"],
            unlocks: "Civ Civics-Tree - Third-Tier and Civ Tree - Citizenship"
        },
        civics: [
            {
                tier: "First-Tier",
                name: "Zhi",
                unlocks: ["Great Wall(Unique Improvement)"],
                bonus: ["Sience Buildings gain a +1 Science Adjacency for Quarters."], 
                settlementCap:"+1 Settlement cap",
            },
            {
                tier: "Second-Tier",
                name: "Li",
                bonus: ["+2 Influence on the Palace"], 
                tradition: [
                    {
                        name:"Guanxi",
                        attribute:"+1 Influence on Science Buildings",
                    },
                ],
            },
            {
                tier: "Second-Tier",
                name: "Yi",
                bonus: ["The Chu-Ko-Nu gains +5 Combat Strength when defending."], 
                tradition: [
                    {
                        name:"Jiu Qing",
                        attribute:"+1 Influence on Happiness Buildings",
                    },
                ],
            },
            {
                tier: "Third-Tier",
                name: "Junzi",
                unlocks: ["Weiyang Palace (Wonder)"],
                bonus: ["+10% Science in the capital"], 
                tradition: [
                    {
                        name:"Tianxia",
                        attribute:"+1 Science from Specialists",
                    },
                ],
            },
        ],
        startBias:["Grassland"],
        unlocksExploration: ["Ming", "Mongolia"],
        unlocksModern: ["Qing"],
    },
    {
        id: 5,
        age: "Antiquity",
        name: "Khmer",
        type1: "Expansionist",
        type2: "Scientific",
        attribute: [
            "Districts on Rivers do not remove the Natural yield of the tile.",
            "+30% Production towards constructing Angkor Wat."
        ],
        uniqueUnits: [
            {
                type:"Cavalry",
                name:"Yuthahathi",
                unlocks:"",
                abillity:[
                    "Higher Combat Strength, but slower Movement.",
                    "Immune to flood damage.",
                    "Ignores Zone of Control."
                ],
            },
            {
                type:"Merchant",
                name:"Vaishya",
                unlocks:"Code of Law",
                abillity:[
                    "Immune to flood damage.",
                    "Ignores movement penalties from wet terrain."
                ],
            },
        ],
        uniqueBuildings: [
            {
            type: "Improvement",
            ageless: "Ageless",
            name: "Baray",
            attribute: [
                "+3 Food.",
                "+1 Food on all Floodplains in this Settlement.",
                "Does not remove Warehouse bonuses on a tile.",
                "One per Settlement."
            ],
            Adjacency:[null],
            placement: ["Flat"],
            unlocks: "",
            },
        ], 
        wonderBonus: {
            name: "Angkor Wat",
            placement: ["Adjacent River"],
            attribute:[
                "+3 Happiness.",
                "+1 Specialist limit in this Settlement."
            ],
            unlocks: "Civ Civics-Tree - Second-Tier and Civics Tree - Philosophy"
        },
        civics: [
            {
                tier: "First-Tier",
                name: "Mousong",
                unlocks: ["Baray (Unique Improvement)"],
                bonus: ["Improvements, Buildings and Districts do not get pillaged by floods"], 
                tradition: [
                    {
                        name:"Pithi Chrat",
                        attribute:"+4 Combat Strength for units on Floodplains.",
                    },
                ],
            },
            {
                tier: "Second-Tier",
                name: "Amnach",
                unlocks: ["Angkor Wat (Wonder)"],
                bonus: ["The Yuthahathi gets +1 Movement."], 
                tradition: [
                    {
                        name:"Varna",
                        attribute:"+1 Gold from Specialists.",
                    },
                ],
            },
            {
                tier: "Third-Tier",
                name: "Chakravarti",
                bonus: ["+50% Growth rate in the Capital. -5 Happiness in every other City."], 
                tradition: [
                    {
                        name:"Kambu-Mera",
                        attribute:"+100% Food and Hapiness towards maintaining Specialists.",
                    },
                ],
                mastery:{
                    bonus:["+3 Codex Slots in the Palace."],
                }
            },
        ],
        startBias:["Grassland"],
        unlocksExploration: ["Chola", "Majapahit"],
        unlocksModern: ["Siam"],
    },
    {
        id: 6,
        age: "Antiquity",
        name: "Maurya",
        type1: "Militaristic",
        type2: "Scientific",
        attribute: [
            "You can choose an additional Pantheon after unlocking Mysticism.",
            "+30% Production towards Constructing Sanchi Stupa."
        ],
        uniqueUnits: [
            {
                type:"Cavalry",
                name:"Purabhettarah",
                unlocks:"Science Tree - The Wheel",
                abillity:[
                    "+5 Combat Strength against Fortified Districts",
                    "Ignores Zone of Control."
                ],
            },
        ],
        uniqueBuildings: [
            {
                type: "Quarter",
                ageless: "Ageless",
                name: "Matha",
                attribute: [
                    "Created by Constructing the Dharamshala and Vihara in the same District.",
                    "+10% Happiness in this Settlement."
                ],
                Adjacency:[null],
                placement: [null],
                unlocks: "Civ Civics-Tree - First-Tier",
            },
            {
                type: "Happiness",
                ageless: "Ageless",
                name: "Dharamshala",
                attribute: [
                    "Base Yield: +3 Happiness",
                    "+1 sience adjacency."
                ],
                Adjacency:["Quarters", "Wonders"],
                placement: [null],
                unlocks: "Civ Civics-Tree - First-Tier",
            },
            {
                type: "Happiness",
                ageless: "Ageless",
                name: "Vihara",
                attribute: [
                    "Base Yield: +3 Happiness",
                    "+1 Culture adjacency."
                ],
                Adjacency:["Mountain", "Wonders"],
                placement: [null],
                unlocks: "Civ Civics-Tree - First-Tier",
            },
        ], 
        wonderBonus: {
            name: "Sanchi Stupa",
            placement:   ["Plains"],
            attribute:[
                "+2 Happiness.",
                "+1 Culture for every 5 excess Happiness in this Settlement."
            ],
            unlocks: "Civ Civics-Tree - Third-Tier and Civics Tree - Citizenship (Mastery)"
        },
        civics: [
            {
                tier: "First-Tier",
                name: "Acharya",
                unlocks: [
                    "Dharamshala (Unique Building)",
                    "Vihara (Unique Building)"
                ], 
                tradition: [
                    {
                        name:"Charvaka",
                        attribute:"+3 Happiness on Science Buildings.",
                    },
                ],
            },
            {
                tier: "Second-Tier",
                name: "Ayurveda",
                bonus: ["Units adjacent to the Purabhettarah heal 5hp per turn."], 
                tradition: [
                    {
                        name:"Shreni",
                        attribute:"+1 gold for every 5 surplus Happiness in Cities",
                    },
                ],
            },
            {
                tier: "Second-Tier",
                name: "Vyuham",
                bonus: ["Infantry and Cavalry Units gain +3 Combat Strength when adjacent to each other."], 
                tradition: [
                    {
                        name:"Kshatriya",
                        attribute:"+4 Happiness on Military Buildings.",
                    },
                ],
            },
            {
                tier: "Third-Tier",
                name: "Mantriparishad",
                unlocks: ["Sanchi Stupa (Wonder)"],
                bonus: ["+10% to all yields in Settlements not founded by you."], 
                tradition: [
                    {
                        name:"Arthashastra",
                        attribute:"+10 Science for every 5 surplus Happiness in Cities",
                    },
                ],
                settlementCap:"+1 Settlement cap",
            },
        ],
        startBias:["Vegetated"],
        unlocksExploration: ["Chola", "Majapahit"],
        unlocksModern: [],
    },
    {
        id: 7,
        age: "Antiquity",
        name: "Maya",
        type1: "Diplomatic",
        type2: "Scientific",
        attribute: [
            "The palace gains +0,5 Science for adjacent Vegetated Terrain.",
            "+30% Production towards constructing Mundo Perdido."
        ],
        uniqueUnits: [
            {
                type:"Ranged",
                name:"Hul'Che",
                unlocks:"Animal Husbandry",
                abillity:["Can see through Vegetation and ignores movement penalties from Vegetated Terrain."],
            },
            {
                type:"Scout",
                name:"Jaguar Slayer",
                unlocks:"Start of game",
                abillity:[
                    "Can initiate combat.",
                    "Has 1 charge to place a Jaguar Trap that is invisible to enemy Units, dealing 25 damage and ending movement. This ability recharges 5 turns after placing a trap."
                ],
            },
        ],
        uniqueBuildings: [
            {
                type: "Quarter",
                ageless: "Ageless",
                name: "Uwaybil K'uh",
                attribute: [
                    "Created by constructing the Jalaw and K'uh Nah in the same District.",
                    "Every time you research a Technology, this Settlement gains Production equal to 15% of its cost."
                ],
                Adjacency:[null],
                placement: [null],
                unlocks: "Civ Civics-Tree - First-Tier",
            },
            {
                type: "Happiness",
                ageless: "Ageless",
                name: "Jalaw",
                attribute: [
                    "Base Yield: +3 Happiness.",
                    "+1 Culture adjancy"
                ],
                Adjacency:["Quarters", "Wonders"],
                placement: [null],
                unlocks: "Civ Civics-Tree - First-Tier",
            },
            {
                type: "Science",
                ageless: "Ageless",
                name: "K'uh Nah",
                attribute: [
                    "Base Yield: +4 Sience.",
                    "+2 Sience if placed on Vegetation.",
                    "+1 Sience adjancy."
                ],
                Adjacency:["Wonders"],
                placement: [null],
                unlocks: "Civ Civics-Tree - First-Tier",
            },
        ], 
        wonderBonus: {
            name: "Mundo Perdido",
            placement: ["Tropical"],
            attribute:["+1 Happiness and Science on Tropical terrain in this Settlement."],
            unlocks: "Civ Civics-Tree - Third-Tier(Mastery) and Civics Tree - Mysticism (Mastery)"
        },
        civics: [
            {
                tier: "First-Tier",
                name: "Lords of Xibalba",
                unlocks: ["Jalaw (Unique Building)"],
                bonus: ["Hul'Che and Jaguar Slayers gain Stealth in Vegetated Terrain."], 
                tradition: [
                    {
                        name:"Miracles of the Twins",
                        attribute:"All units gain the Poison ability, +3 Combat Strength against wounded Units.",
                    },
                ],
            },
            {
                tier: "First-Tier",
                name: "Rain of Chaac",
                unlocks: ["K'uh Nah (Unique Building)"],
                bonus: ["The Altar gains a +1 Science Adjacency from Vegetated Terrain."], 
                tradition: [
                    {
                        name:"Pet kot",
                        attribute:"+1 Science on Vegetated Terrain in Cities",
                    },
                ],
            },
            {
                tier: "Third-Tier",
                name: "Calender Round",
                bonus: [
                    "After researching a Technology, gain Culture equal to 10% of its cost.",
                    "After studying a Civic, gain Science equal to 10% of its cost."
                ], 
                mastery:{
                    unlocks:["Mundo Perdido (Wonder)",],
                    tradition: [
                        {
                            name: "Tzolk'in",
                            attribute: "+2 Science on Happiness Buildings"
                        },
                        {
                            name: "Haab'",
                            attribute: "+2 Culture on Happiness Buildings"
                        }
                    ],
                    settlementCap:"+1 Settlement Cap",
                }
            },
        ],
        startBias:["Vegetated", "Tropical"],
        unlocksExploration: ["Hawai'i", "Inca"],
        unlocksModern: ["Mexico"],
    },
    {
        id: 8,
        age: "Antiquity",
        name: "Mississippian",
        type1: "Economic",
        type2: "Expansionist",
        attribute: [
            "All Buildings receive a +1 Food Adjacency for Resources.",
            "+30% Production towards constructing Monks mound."
        ],
        uniqueUnits: [
            {
                type:"Ranged",
                name:"Burning Arrow",
                unlocks:"Sience tree - Animal Husbandry",
                abillity:[
                    "Increased bombard strngth.",
                    "+3 Combat strength against siege units.",
                    "Applies the Burning status to tiles for 2 turns."
                ],
            },
            {
                type:"Merchant",
                name:"Watonathi",
                unlocks:"Civics tree - Code of laws",
                abillity:["Gain 25 gold per REsource acquired when creating a trade route."],
            },
        ],
        uniqueBuildings: [
            {
                type: "Improvement",
                ageless: "Ageless",
                name: "Potkop",
                attribute: [
                    "+1 gold.",
                    "+1 Food adjacency",
                    "Does not remove Warehouse bonuses on a tile."
                ],
                Adjacency:["Resource"],
                placement: ["Flat"],
                unlocks: "Civ Civics-Tree - First-Tier",
            },
        ], 
        wonderBonus: {
            name: "Monks Mound",
            placement: ["Adjacent River"],
            attribute:[
                "+3 Food",
                "+4 Resource capacity in this Settlement"    
            ],
            unlocks: "Civ Civics-Tree - (First-Tier Mastery) and Civics Tree - Commerce"
        },
        civics: [
            {
                tier: "First-Tier",
                name: "Earthworks",
                unlocks: ["Potkop (Unique Building)"],
                bonus: ["+10% Production towards constructing buildings"], 
                mastery:{
                    unlocks:["Monks Mound (Wonder)",],
                    tradition: [
                        {
                            name: "Shell-Tempered Pottery",
                            attribute: "All Buildings receive a +1 Gold adjacency for Resources."
                        }
                    ],
                    settlementCap:"+1 Settlement cap",
                }
            },
            {
                tier: "Second-Tier",
                name: "Waahih",
                bonus: ["Burning Arrows can pillage within 2 tiles for 1 movement."], 
                tradition: [
                    {
                        name:"Atassa",
                        attribute:"+4 Combat Strength for Ranged units when defending.",
                    },
                ],
            },
            {
                tier: "Second-Tier",
                name: "Cah-Nah-Ha",
                bonus: ["+2 Resource capacity in the Capital."], 
                tradition: [
                    {
                        name:"Gift Economy",
                        attribute:"+1 Gold and Happiness for every imported Resource.",
                    },
                ],
            },
        ],
        startBias:["Flat", "River"],
        unlocksExploration: ["Shawnee", "Hawai'i", "Inca"],
        unlocksModern: [null],
    },
    {
        id: 9,
        age: "Antiquity",
        name: "Persia",
        type1: "Economic",
        type2: "Militaristic",
        attribute: [
            "Infantry Units receive +3 Combat Strength when attacking.",
            "+30% Production towards constructing the Gate of All Nations."
        ],
        uniqueUnits: [
            {
                type:"Infantry",
                name:"Immortal",
                unlocks:"Science tree - Bronze Working",
                abillity:["Heals 15 HP after defeating an enemy Unit."],
            },
            {
                type:"Army Commander",
                name:"Hazarapatis",
                unlocks:"Dicipline",
                abillity:["Starts with the initiative promotion."],
            },
        ],
        uniqueBuildings: [
            {
                type: "Improvement",
                ageless: "Ageless",
                name: "Pairidaeza",
                attribute: [
                    "+1 Culture and gold.",
                    "+1 Happiness adjacency. (Unlocked in Civ Civic-Tree).",
                    "Does not remove Warehouse bonuses on a tile.",
                    "Cannout be placed adjacent to another Pairidaeza."
                ],
                Adjacency:["Quarters"],
                placement: [null],
                unlocks: "Civ civics-Tree - Second-Tier",
            },
        ], 
        wonderBonus: {
            name: "Gate of All Nations",
            placement: ["Adjacent District"],
            attribute:["+2 war support on all wars"],
            unlocks: "Civ Civics-tree - Second-Tier and Civic tree - Dicipline (Mastery)"
        },
        civics: [
            {
                tier: "First-Tier",
                name: "Spada",
                bonus: ["-1 GOld maintenance for units"], 
                tradition: [
                    {
                        name:"Kara",
                        attribute:"+50% Production towards training infantry units",
                    },
                ],
            },
            {
                tier: "Second-Tier",
                name: "Satrapies",
                unlocks: [
                    "Pairidaeza (Unique building)",
                    "Gate of All Nations (Wonder)"
                ], 
                tradition: [
                    {
                        name:"Angarium",
                        attribute:"+3 Gold for every town.",
                    },
                ],
                mastery:{
                    bonus:["The Pairidaeza gains +1 Happiness from adjacent Quarters."],
                    settlementCap:"+1 Settlement cap",
                }
            },
            {
                tier: "Third-Tier",
                name: "Achaemenid Empire",
                bonus: ["+5 Gold for every different Civilization you have captured a Settlement from."], 
                mastery:{
                    tradition: [
                        {
                            name: "Shahanshah",
                            attribute: "+3 Combat Strength for units in enemy territory."
                        }
                    ],
                    settlementCap:"+1 Settlement cap",
                }
            },
        ],
        startBias:["Desert", "Plains"],
        unlocksExploration: ["Abbasid", "Mongolia"],
        unlocksModern: ["Mughal"],
    },
    {
        id: 10,
        age: "Antiquity",
        name: "Rome",
        type1: "Cultural",
        type2: "Militaristic",
        attribute: [
            "+1 Culture on Districts in the Capital City and City Centers in towns.",
            "+30% Production towards Constructing the Colosseum."
        ],
        uniqueUnits: [
            {
                type:"Infantry",
                name:"Legion",
                unlocks:"Bronze Working",
                abillity:["+2 Combat Strength for every Tradition in the Government"],
            },
            {
                type:"Army Commander",
                name:"Legatus",
                unlocks:"Dicipline",
                abillity:["Gains 1 charge to create a new Settlement for every 3 Levels it has."],
            },
        ],
        uniqueBuildings: [
            {
                type: "Quarter",
                ageless: "Ageless",
                name: "Forum",
                attribute: [
                    "Created by constructing the Basilica and Temple of Jupiter in the same District.",
                    "+1 Culture and Gold for every Unique Tradition in the Government."
                ],
                Adjacency:[null],
                placement: [null],
                unlocks: "Civ Civics-Tree - First-Tier",
            },
            {
                type: "Gold",
                ageless: "Ageless",
                name: "Basilica",
                attribute: [
                    "Base yeild: +4 Gold",
                    "+1 influence adjacency."
                ],
                Adjacency:["Culture Buildings", "Wonders"],
                placement: [null],
                unlocks: "Civ Civics-Tree - First-Tier",
            },
            {
                type: "Happiness",
                ageless: "Ageless",
                name: "Temple of Jupiter",
                attribute: [
                    "Base Yeild: +3 Happiness.",
                    "+1 Culture Adjacency"
                ],
                Adjacency:["Happiness Buildings", "Wonders"],
                placement: [null],
                unlocks: "Civ Civics-Tree - First-Tier",
            },
        ], 
        wonderBonus: {
            name: "Colosseum",
            placement: ["Adjacent District"],
            attribute:[
                "+3 Culture.",
                "+2 Happiness on Quarters in this Settlement."
            ],
            unlocks: "Civ Civics-tree - Third-Tier and Civics tree - Entertainment"
        },
        civics: [
            {
                tier: "First-Tier",
                name: "Exercitus",
                unlocks: ["Temple of Jupiter (Unqiue Building)"], 
                tradition: [
                    {
                        name:"Auxilia",
                        attribute:"+5% Production towards Military Units in the Capital for every town.",
                    },
                ],
                mastery:{
                    bonus:["The Legatus gains the Bulwark Promotion for free."],
                }
            },
            {
                tier: "First-Tier",
                name: "Civis Romanus",
                unlocks: ["Basilica (Unique Building"], 
                tradition: [
                    {
                        name:"Cursus Honorum",
                        attribute:"Training an infantry Unit grants Culture equal to 25+% of its Production cost.",
                    },
                ],
                mastery:{
                    bonus:["+2 Gold in the Capital for every Town you own."],
                }
            },
            {
                tier: "Second-Tier",
                name: "Legatus Pro Praetore",
                bonus: ["Gain a free Infantry Unit in new Settlements that you found."], 
                tradition: [
                    {
                        name:"Latinitas",
                        attribute:"+10% Food, Gold and Culture in towns with a Specialization.",
                    },
                ],
                settlementCap:"+1 Settlement Cap",
            },
            {
                tier: "Third-Tier",
                name: "Senatus Populusque Romanus",
                unlocks: ["Colosseum (Wonder)"],
                bonus: ["+1 Social Policy slot."], 
                tradition: [
                    {
                        name:"Priceps Civitatis",
                        attribute:"+1 Production on Urban DIstricts in your Capital",
                    },
                ],
                settlementCap:"+1 Settlement cap",
            },
        ],
        startBias:["Grassland"],
        unlocksExploration: ["Norman", "Spain"],
        unlocksModern: ["Great Britain", "America", "French Empire", "Prussia"],
    },
]