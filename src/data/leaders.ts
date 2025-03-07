import { Leader } from "./types"

const leaders:Leader [] = [
    {
        id: 0,
        name: "Ada Lovelace",
        type1: "Cultural",
        type2: "Scientific",
        attribute: [
            "Cities recive +2 Science per Age when you complete a Civic Mastery. This resets at the start of each age.", 
            "Gain Culture equal to 50% of your total Science per turn when you complete a Tech Mastery."
        ],
        agenda:{
                name:"Analytical Engine",
                effect:"Increase Relationship by a Small Amount for the leader with the most Masteries. Decrease Relationship by a Small Amount for the leader with the fewest Masteries."
            },    
        startBias: ["None"],
        unlocksExplorationCiv: [null],
        unlocksModernCiv: ["Great Britain"]
    },
    {
        id: 1,
        name: "Amina",
        type1: "Economic",
        type2: "Militaristic",
        attribute: [
            "+1 Resource Capacity in Cities.", "+1 Gold per Age for Each Resource assigned to Cities.", 
            "+5 Combat Stregth on all Units in Plains and Desert."
        ],
        agenda: {
                name:"Desert of the Warrior Queen",
                effect:"If the player has more Settlements on Plains or Desert tiles than Amina, Decrease Relationship by a Medium Amount. If the player has no Settlements on Plains or Desert tiles, Increase Relationship by a Small Amount."
            },
        startBias: ["Plains", "Desert"],
        unlocksExplorationCiv: ["Songhai"],
        unlocksModernCiv: ["Buganda"]
    },
    {
        id: 2,
        name: "Ashoka, World Conqueror",
        type1: "Diplomatic",
        type2: "Militaristic",
        attribute: [
            "+1 Production in Cities for every 5 excess Happiness.", 
            "+10% Production in Settlements not founded by you.", 
            "Declaring a Formal War grants a Celebration.",
            "+10 Combat strength against Districts for all Units during a Celebration"
        ],
        agenda: {
                name:"Without Regret",
                effect:"Decrease Relationship by a Medium Amount with the Leader whose lands cover the most tiles and Increase Relationship by a Medium Amount for the one with the least."
            },
        startBias: ["None"],
        unlocksExplorationCiv: ["Chola"],
        unlocksModernCiv: [null]
    },
    {
        id: 3,
        name: "Ashoka, World Renouncer",
        type1: "Diplomatic",
        type2: "Expansionist",
        attribute: [
            "+1 Food in Cities for every 5 excess Happiness.", 
            "+10% Food in all Settlements during a Celebration.", 
            "All buildings gain a +1 Happiness Adjacency for all Improvements."
        ],
        agenda: {
                name:"Without Sorrow ",
                effect:"Increase Relationship by a Medium Amount with the player with the highest Happiness yield. Decrease Relationship by a Medium Amount with the player that has the lowest Happiness yield."
            },
        startBias: ["None"],
        unlocksExplorationCiv: ["Chola"],
        unlocksModernCiv: [null]
    },
    {
        id: 4,
        name: "Augustus",
        type1: "Cultural",
        type2: "Expansionist",
        attribute: [
            "+2 Production in the Capital for every Town.", 
            "Can purchase Culture Buildings in towns.", 
            "+50% Gold towards purchasing buildings in towns."
        ],
        agenda: {
                name:"Restitutor Orbis",
                effect:"Decrease Relationship by a Medium Amount for each Town in other players' empires. Increase Relationship by a Medium Amount for each City (excluding Capital) in other players' empires."
            },
        startBias: ["None"],
        unlocksExplorationCiv: [null],
        unlocksModernCiv: [null]
    },
    {
        id: 5,
        name: "Benjamin Franklin",
        type1: "Diplomatic",
        type2: "Scientific",
        attribute: [
            "+1 Science per Age on Production Buildings in Cities.", 
            "50% Production towards constructing Production Buildings.", 
            "+1 Science per Age from active Endeavors you started or supported.", 
            "Can have two Endeavors of the same type active at a time."
        ],
        agenda: {
                name:"Civic Virtue",
                effect:"Increase Relationship gains with players that share a Government with him. Decrease Relationship with players that don't share a Government with him."
            },
        startBias: ["None"],
        unlocksExplorationCiv: [null],
        unlocksModernCiv: ["America"]
    },
    {
        id: 6,
        name: "Catherine the Great",
        type1: "Cultural",
        type2: "Scientific",
        attribute: [
            "+2 Culture per age on displayed Great Works.", 
            "Buildings with Great Work slots gain 1 additional slot.", 
            "Cities settled in Tundra gain Science equal to 25% of their Culture per turn."
        ],
        agenda: {
                name:"Dusha",
                effect:"Decrease Relationship by a Medium Amount with player who has the most Great Works. Increase Relationship by a Medium Amount with the player with the least. Catherine the Great must have a Great Work for this to take effect."
            },
        startBias: ["Tundra"],
        unlocksExplorationCiv: [null],
        unlocksModernCiv: ["Russia"]
    },
    {
        id: 7,
        name: "Charlemagne",
        type1: "Militaristic",
        type2: "Scientific",
        attribute: [
            "Military and Science Buildings recive a Happiness adjacency for quarters.", 
            "Gain 2 free Cavalry Units, once unlocked, when entering a Celebration.", 
            "+5 Combat Strength for Cavalry Units during a Celebration."
        ],
        agenda: {
                name:"The Golden Shepherd ",
                effect:"Increase Relationship by Medium Amount with whichever player has triggered the most Celebrations. If there is a tie, Increase Relationship by Small Amount to tieholders. Decrease Relationship by a Medium Amount with whoever has triggered the fewest Celebrations. If there's a tie, Decrease Relationship by Small Amount to tieholders.",
            },
        startBias: ["River"],
        unlocksExplorationCiv: ["Norman"],
        unlocksModernCiv: [null]
    },
    {
        id: 8,
        name: "Confucius",
        type1: "Expansionist",
        type2: "Scientific",
        attribute: [
            "+25% Growth Rate in Cities.",
            "+2 Science from Specialists."
        ],
        agenda: {
                name:"Guanxi",
                effect:"Increase Relationship by a Medium Amount for having the most Specialists in an empire. Decrease Relationship by a Small Amount for the leader with the least amount of Specialists in an empire. Only triggers if Confucius has at least one Specialist."
            },
        startBias: ["Grassland"],
        unlocksExplorationCiv: ["Ming"],
        unlocksModernCiv: ["Qing"]
    },
    {
        id: 9,
        name: "Friedrich, Baroque",
        type1: "Cultural",
        type2: "Militaristic",
        attribute: [
            "Gain a Great Work when you capture a Settlement for the first time.",
            "Gain an infantry Unit when you construct a Culture Building"
        ],
        agenda: {
                name:"Parisian Sensibilities ",
                effect:"Increase Relationship per built Wonder in the Capital by a Medium Amount. Decrease Relationship per Building in the Capital by a Small Amount."
            },
        startBias: ["None"],
        unlocksExplorationCiv: [null],
        unlocksModernCiv: ["Prussia"]
    },
    {
        id: 10,
        name: "Friedrich, Oblique",
        type1: "Militaristic",
        type2: "Scientific",
        attribute: [
            "Army Commanders start with the Merit commendation.",
            "Gain a free Infantry Unit when you construct a Science building."
        ],
        agenda: {
                name:"To Arms! ",
                effect:"Decrease Relationship by a Medium Amount with the empire that has the least amount of Military Units on the map. Increase Relationship by a Small Amount with the empire that has the most amount of Military Units on the map."
            },
        startBias: ["None"],
        unlocksExplorationCiv: [null],
        unlocksModernCiv: ["Prussia"]
    },
    {
        id: 11,
        name: "Harriet Tubman",
        type1: "Diplomatic",
        type2: "Militaristic",
        attribute: [
            "+100% Influence towards initiating Espionage Actions.",
            "Gain 5 War Support on all wars declared against you.",
            "Units ignore movement penalties from vegetation."
        ],
        agenda: {
                name:"Veracity",
                effect:"Increase Relationship by a Medium Amount once for each formal war the player declared. Decrease Relationship by a Medium Amount once for each surprise war the player declared."
            },
        startBias: ["Vegetated"],
        unlocksExplorationCiv: [null],
        unlocksModernCiv: ["America"]
    },
    {
        id: 12,
        name: "Hatshepsut",
        type1: "Cultural",
        type2: "Economic",
        attribute: [
            "+1 Culture for every imported Resource.",
            "+15% Production towards constructing Buildings and Wonders in Cities adjacent to Navigable Rivers."
        ],
        agenda: {
                name:"Wonders of Iteru ",
                effect:"Decrease Relationship by a Small Amount if you have more Wonders than Hatshepsut. Increase Relationship by a Medium Amount if you have less Wonders."
            },
        startBias: ["Navigable River", "Desert"],
        unlocksExplorationCiv: [null],
        unlocksModernCiv: [null]
    },
    {
        id: 13,
        name: "Himiko, High Shaman",
        type1: "Cultural",
        type2: "Diplomatic",
        attribute: [
            "+2 Happiness per Age on Happiness buildings.",
            "+50% Production towards constructing Happiness buildings.",
            "+20% Culture but -10% Science. Theese effects are doubled during a celebration."
        ],
        agenda: {
                name:"Shaman Queen ",
                effect:"Decrease Relationship by a Small Amount per Settlement with constructed Science and Gold Buildings. Increase Relationship by a Small Amount per Settlement with Culture and Happiness Buildings."
            },
        startBias: ["None"],
        unlocksExplorationCiv: [null],
        unlocksModernCiv: ["Meiji Japan"]
    },
    {
        id: 14,
        name: "Himiko, Queen of Wa",
        type1: "Diplomatic",
        type2: "Scientific",
        attribute: [
            "Gain a unique Endeavor called Friend of Wei that can be performed in an Alliance to grant you and your ally +25% Science.",
            "+4 Science per Age for every Leader you are Friendly or Helpful with.",
            "Can support Endeavors for free."
        ],
        agenda: {
                name:"Yamatai",
                effect:"Decrease Relationship by a Small Amount per Settlement with constructed Culture and Happiness Buildings. Increase Relationship by a Small Amount per Settlement with constructed Science and Gold Buildings."
            },
        startBias: ["None"],
        unlocksExplorationCiv: [null],
        unlocksModernCiv: ["Meiji Japan"]
    },
    {
        id: 15,
        name: "Ibn Battuta",
        type1: "Expansionist",
        type2: "Wildcard",
        attribute: [
            "Gains 2 Wildcard Attribute Points after the first Civic in every age.",
            "+1 Sight for all Units.",
            "Gain a unique Endeavor called Trade Maps that allows you to gradually see other Leaders claimed territory."
        ],
        agenda: {
                name:"Far and Wide ",
                effect:"Increase Relationship by a Large Amount with the player who has uncovered the most Fog of War tiles. If there is a tie, Increase Relationship by a Medium Amount to tieholders. Decrease Relationship by a Small Amount with the player who has uncovered the fewest Fog of War tiles."
            },
        startBias: ["Flat"],
        unlocksExplorationCiv: ["Abbasid"],
        unlocksModernCiv: [null]
    },
    {
        id: 16,
        name: "Isabella",
        type1: "Economic",
        type2: "Expansionist",
        attribute: [
            "Gain 300 Gold every time you discover a Natural Wonder. This is doubled if the Natural Wonder is in Distant Lands.",
            "+100% tile yields from Natural Wonders.",
            "+50% Gold towards purchasing Naval units.",
            "-1 Gold Maintenance for Nava Units."
        ],
        agenda: {
                name:"Wonderlust",
                effect:"Decrease Relationship by a Large Amount per Natural Wonder in the player's borders. If no Natural Wonders are possessed by the player, Increase Relationship by a Small Amount."
            },
        startBias: ["Coast", "Natural Wonder"],
        unlocksExplorationCiv: ["Spain"],
        unlocksModernCiv: ["Mexico"]
    },
    {
        id: 17,
        name: "Jose Rizal",
        type1: "Cultural",
        type2: "Diplomatic",
        attribute: [
            "When gaining rewards from a Narrative Event, gain an additional 20 Culture and Gold per age.",
            "Has additional Narrative Events.",
            "50% Celebration duration.",
            "+50% Happiness towards Celebrations."
        ],
        agenda: {
                name:"Kapwa",
                effect:"Increase Relationship by a Medium Amount for the player with the most active Endeavors started. Decrease Relationship by a Medium Amount for the player with the most active Sanctions started. If there is a tie between the players with the most active Endeavors or Sanctions, then Increase or Decrease Relationship by a Small Amount accordingly."
            },
        startBias: ["Tropical"],
        unlocksExplorationCiv: ["Hawai'i"],
        unlocksModernCiv: [null]
    },
    {
        id: 18,
        name: "Lafayette",
        type1: "Cultural",
        type2: "Diplomatic",
        attribute: [
            "Gains a unique Endeavor called Reform, which grants an additional Social Policy slot. Supporting this Endeavor also grants the other Leader an additional Social Policy slot.",
            "+1 Combat Strength for every Tradition, but not Policy, slotted in the Government.",
            "+2 Culture and Happiness per Age in settlements. These effects are doubled in distant Lands."
        ],
        agenda: {
                name:"French Quarters ",
                effect:"Increase Relationship by a Small Amount for the player with the most Urban Districts with all Building slots filled. Decrease Relationship by a Small Amount for the player with the least Urban Districts."
            },
        startBias: ["Coast"],
        unlocksExplorationCiv: [null],
        unlocksModernCiv: ["French Empire"]
    },
    {
        id: 19,
        name: "Machiavelli",
        type1: "Diplomatic",
        type2: "Economic",
        attribute: [
            "+3 Influence per Age.",
            "Gains 50 Gold per Age when your Dimplomatic Action proposals are accepted, or 100 Gold when they are rejected.",
            "Ignores Relationship requirements for declaring Formal Wars.",
            "Can Levy Troops from City-states you are not Suzerain of."
        ],
        agenda: {
                name:"The Spider ",
                effect:"If not at war with Machiavelli, increase Relationship by Medium Amount for each other war."
            },
        startBias: ["None"],
        unlocksExplorationCiv: [null],
        unlocksModernCiv: [null]
    },
    {
        id: 20,
        name: "Napoleon, Emperor",
        type1: "Economic",
        type2: "Diplomatic",
        attribute: [
            "Gain a unique Sanction called Continental System that reduce the Trade Route limit of the targeted Leader to All other Leaders by 2. Causes a massive Relationship penalty, and costs more to reject.",
            "+8 Gold per Age for every Leader you are Unfriendly or Hostile with.",
            "Can reject Endeavors for free."
        ],
        agenda: {
                name:"Napoleonic Code",
                effect:"Increase Relationship by a Medium Amount with the player that has the smallest standing army. Decrease Relationship by a Medium Amount for the player that has the largest standing navy."
            },
        startBias: ["None"],
        unlocksExplorationCiv: [null],
        unlocksModernCiv: ["French Empire"]
    },
    {
        id: 21,
        name: "Napol, Revolutionary",
        type1: "Militaristic",
        type2: "Cultural",
        attribute: [
            "+1 Movement for all Land Units.",
            "Defeating an enemy Unit provides Culture equal to 50% of its Combat Strength."
        ],
        agenda: {
                name:"Culture from Conquest ",
                effect:"Decrease Relationship by Small Amount for every Alliance made between other players. Increase Relationship by a Medium Amount for the player with the highest Culture Per Turn score."
            },
        startBias: ["None"],
        unlocksExplorationCiv: [null],
        unlocksModernCiv: ["French Empire"]
    },
    {
        id: 22,
        name: "Pachacuti",
        type1: "Economic",
        type2: "Expansionist",
        attribute: [
            "All Buildings receive a +1 Food Adjacency for Mountains.",
            "Specialists adjacent to Mountains pay no Happiness maintenance."
        ],
        agenda: {
                name:"Mountain King ",
                effect:"Increase Relationship by a Medium Amount for the player with the least Mountains in their territory. Decrease Relationship by a Medium Amount for the player with the most Mountains in their territory."
            },
        startBias: ["Mountain"],
        unlocksExplorationCiv: ["Inca"],
        unlocksModernCiv: [null]
    },
    {
        id: 23,
        name: "Simón Bolívar",
        type1: "Militaristic",
        type2: "Expansionist",
        attribute: [
            "Gain 1 War support on all wars.",
            "Upon conquering a settlement for the first time, can purchase 1 Constructible for free. Unrest does not prevent purchasing."            
        ],
        agenda: {
                name:"Cornerstone of Freedom",
                effect:"Likes the leader with the least Unhappy Settlements. Dislikes the leader with the most Unhappy Settlements."
            },
        startBias: ["None"],
        unlocksExplorationCiv: [null],
        unlocksModernCiv: ["Mexico"]
    },
    {
        id: 24,
        name: "Tecumseh",
        type1: "Militaristic",
        type2: "Diplomatic",
        attribute: [
            "+1 Food and Production per Age in Settlements for ever city-state you are Suzerain of.",
            "+1 Combat Strength for all units for every City-State you are Suzerain of."
        ],
        agenda: {
                name:"Suzerain of the World",
                effect:"Decrease Relationship by a Large Amount when a player disperses an Independent, and Increase Relationship by a Small Amount if player does not have an active Befriend Independent Project active."
            },
        startBias: ["Grassland", "Plains"],
        unlocksExplorationCiv: ["Shawnee"],
        unlocksModernCiv: ["America", "Mexico"]
    },
    {
        id: 25,
        name: "Trung Trac",
        type1: "Militaristic",
        type2: "Scientific",
        attribute: [
            "Gain 3 free levels on your first Army Commander.",
            "+20% Commander experience.",
            "+10% Science in cities in Tropical. This is doubled while in a Formal War you declare."           
        ],
        agenda: {
                name:"Van Minh",
                effect:"Decrease Relationship by Medium Amount with the player who has the greatest amount of Promotions across all Commanders. If tied, Decrease Relationship a Small Amount with tie holders. Increase Relationship by Medium Amount with the player who has the least amount of Promotions across all Commanders. If tied, Increase Relationship a Small Amount with tie holders."
            },
        startBias: ["Vegetated", "Tropical"],
        unlocksExplorationCiv: ["Majapahit"],
        unlocksModernCiv: [null]
    },
    {
        id: 26,
        name: "Xerxes, King Of Kings",
        type1: "Economic",
        type2: "Militaristic",
        attribute: [
            "+3 Combat Strength for units that are attacking i neutral or enemy territory.",
            "Gain 100 culture and Gold per Age when you capture a Settlement for the first time.",
            "+10% Gold in all Settlements. This is doubled in Settlements not founded by you.",
            "+1 Settlement Limit per age."
        ],
        agenda: {
                name:"Lord of Fire",
                effect:"Decrease Relationship by a Medium Amount when a player is not at war. Increase Relationship by a Small Amount when a player is at war."
            },
        startBias: ["Desert"],
        unlocksExplorationCiv: [null],
        unlocksModernCiv: [null]
    },
    {
        id: 27,
        name: "Xerxes, The Achaemenid",
        type1: "Cultural",
        type2: "Economic",
        attribute: [
            "+1 Trade route limit with all other Leaders.",
            "Gain 50 Culture and 100 Gold per Age when you create a Trade Route or Road.",
            "+1 Culture and Gold per Age on Unique Buildings and Improvements."
            
        ],
        agenda: {
                name:"Lord of Coin",
                effect:"Decrease Relationship by a Medium Amount if player has a greater or equal number of Trade Routes compared to Xerxes. Increase Relationship by a Small Amount if player has fewer Trade Routes than Xerxes."
            },
        startBias: ["Desert"],
        unlocksExplorationCiv: [null],
        unlocksModernCiv: [null]
    },
]
