export function ListeHexagone(terrain){
    let listHexagone = [
        "Country",
        "Hills",
        "Mountain",
        "Forest",
        "Hedgerow",
        "RiversRight",
        "RiversCurve",
        "RiverBranchLeft",
        "RiverBranchRight",
        "RiverY",
        "Dam",
        "Pond",
        "LakeA",
        "LakeB",
        "LakeC",
        "RoadRight",
        "RoadCurve",
        "RoadBranchLeft",
        "RoadBranchRight",
        "RoadX",
        "RoadY",
        "RoadHillRight",
        "RoadHillCurve",
        "AirField",
        "AirFieldX",
        "Village",
        "Church",
        "Barracks",
        "Camp",
        "Cemetery",
        "Depot",
        "Factory",
        "Fortress",
        "LightHouse",
        "Marshes",
        "TrainRight",
        "TrainCurve",
        "TrainBranchLeft",
        "TrainBranchRight",
        "TrainX",
        "TrainXRoad",
        "Station"
    
      ]
    let SnowlistHexagone = [
    "Country",
    "SnowHill",
    "SnowMountain",
    "SnowForest",
    "SnowHedgerow",
    "SnowRiversRight",
    "SnowRiversCurve",
    "SnowRiverBranchLeft",
    "SnowRiverBranchRight",
    "SnowRiverY",
    "SnowDam",
    "SnowPond",
    "SnowLakeA",
    "SnowLakeB",
    "SnowLakeC",
    "SnowRoadRight",
    "SnowRoadCurve",
    "SnowRoadBranchLeft",
    "SnowRoadBranchRight",
    "SnowRoadX",
    "SnowRoadY",
    "SnowRoadHillRight",
    "SnowRoadHillCurve",
    "SnowAirField",
    "SnowAirFieldX",
    "SnowVillage",
    "SnowChurch",
    "SnowBarracks",
    "SnowCamp",
    "SnowCemetery",
    "SnowDepot",
    "SnowFactory",
    "SnowFortress",
    "SnowLightHouse",
    "SnowMarshes",
    "SnowTrainRight",
    "SnowTrainCurve",
    "SnowTrainBranchLeft",
    "SnowTrainBranchRight",
    "SnowTrainX",
    "SnowTrainXRoad",
    "SnowStation",

    ]
    if(terrain === 3){ //3 = neige
        return SnowlistHexagone;
    }
    return listHexagone;
}

export function ListeDivers(terrain){
    let listDivers = [
        "Country",
        "Bunker",
        "Casemate",
        "Bridge",
        "Ford",
        "RoadBlock",
        "Pontoon",
        "RailBridge",
        "Loco",
        "Wagon",
        "Mine",
        "Country"
        
    ]
    let SnowlistDivers = [
        "Country",
        "SnowBunker",
        "Casemate",
        "Bridge",
        "Ford",
        "RoadBlock",
        "Pontoon",
        "RailBridge",
        "Loco",
        "Wagon",
        "Mine",
        "SnowDragonTeeth",-
        "Country"
        
    ]
    if(terrain === 3){ //3 = neige
        return SnowlistDivers;
    }
    return listDivers;
}