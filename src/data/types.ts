type terrainBase =
    "Flat Desert" | "Rough Desert" | "Vegetated Desert (Sagebrush Steppe)" | "Wet Desert (Oasis)" | 
    "Flat Grassland" | "Rough Grassland" | "Vegetated Grassland (Forest)" | "Wet Grassland (Marsh)" | 
    "Flat Plains" | "Rough Plains" | "Vegetated Plains (Savanna Woodland)" | "Wet Plains (Watering Hole)" | 
    "Flat Tropical" | "Rough Tropical" | "Vegetated Tropical (Rainforest)" | "Wet Tropical (Mangrove)" | 
    "Flat Tundra" | "Rough Tundra" | "Vegetated Tundra (Taiga)" | "Wet Tundra (Tundra Bog)" |
    "Flat" | "Rough" | "Vegetated" | "Wet" | "Desert" | "Grassland" | "Plains" | "Tropical" | "Tundra" | "Coast" | "Navigable River" | "River" | null

type terrain = 
    terrainBase | `Adjacent ${terrainBase}`

type unitTypes = 
    "Infantry" | "Ranged" | "Cavalry" | "Siege" | "Naval" | "Air" | 
    "Merchant" | "Settler" | "Migrant" | "Scout" | "Missionary" | "Great Person" | "Treasure fleet" | "Physician" | "Great banker" | "Prospector" | "Zamindar"

type adjacency = 
    "Resource" | "Natural Wonders" | "Wonders" | "Mountain" | "Coastal" | "Navigable River" | "Hawilt" | "Urban district" | "Desert" | "Quarters" | "Great Wall" | null


type Type =
    "Cultural" | "Scientific" | "Economic" | "Diplomatic" | "Militaristic" | "Expansionist" | "Wildcard"

type startingBias = 
    "Desert" | "Navigable River" | "Grassland" | "Rough" | "Tropical" | "Floodplain" | "Hill" | 
    "Coast" | "Flat" | "River" | "Vegetated" | "Plains" | "Tundra" | "Mountain" | "Natural Wonder" | "None"

type unlocksExploration =
    "Abbasid" | "Chola" | "Hawai'i" | "Inca" | "Majapahit" | "Ming" | "Mongolia" | "Norman" | "Shawnee" | "Songhai" | "Spain" | null

type unlocksModern =
    "America" | "Buganda" | "French Empire" | "Great Britain" | "Meiji Japan" | "Mexico" | "Mughal" | "Prussia" | "Qing" | "Russia" | "Siam" | null

type buildingTypes = 
    "Warehouse" | "Food" | "Gold" | "Happiness" | "Culture" | "Military and Production" | "Science" | "Improvement" | "Quarter"

export interface Civ {
    id: number,
    age: "Antiquity" | "Exploration" | "Modern",
    name: string,
    type1: Type,
    type2: Type,
    attribute: string[],
    uniqueUnits: {
        type:unitTypes,
        name:string, 
        unlocks:string,
        abillity:string[],
        }[],
    uniqueBuildings: {
        type: buildingTypes,
        ageless: "Ageless" | "Not Ageless",
        name:string,
        attribute:string[],
        Adjacency:adjacency[],
        placement: terrain[],
        unlocks:string,
        }[],
    wonderBonus: {
        name:string,
        placement:terrain[],
        attribute:string[],
        unlocks: string
        },
    civics: {
        tier: "First-Tier" | "Second-Tier" | "Third-Tier",
        name: string,
        unlocks?:string[],
        bonus?:string[],
        tradition?: {
            name?:string,
            attribute?: string
        }[],
        settlementCap?:string,
        mastery?: {
            unlocks?: string[],
            bonus?: string[],
            tradition?: {
                name?:string,
                attribute?: string
            }[],
            settlementCap?:string
        },
    }[],
    startBias?:startingBias[],
    unlocksExploration?: unlocksExploration[],
    unlocksModern?: unlocksModern[],
}

export interface Leader {
    id: number,
    name: string,
    type1: Type,
    type2: Type,
    attribute: string[],
    agenda: {
        name:string, 
        effect:string,
        },
    startBias: startingBias[],
    unlocksExplorationCiv: unlocksExploration[],
    unlocksModernCiv: unlocksModern[]
}