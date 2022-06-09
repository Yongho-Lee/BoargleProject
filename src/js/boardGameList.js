let boardGameList = [{
    page: 1,
    data: [
        {
            id: 817054010004,
            shortName: "twilight-struggle",
            name: "Twilight Struggle: Deluxe Edition (8th Printing)",
            publisher: "GMT GAMES",             
            price: "$50.00 CAD", 
            desc: "Relive the Cold War and rewrite history in an epic clash between the USA and USSR.",
            stock: 12, 
            imgSrc: "", 
            weight: "3.60 / 5", 
            player: [2],
            bestPlayer: 2,
            lastStock: '2022-03-14',
            type: ["strategy", "war"]
        },
        {
            id: 655132001953,
            shortName: "puerto-rico",
            name: "Puerto Rico Board Game", 
            publisher: "Ravensburger",            
            price: "$37.99 CAD", 
            desc: "Ship goods, construct buildings, and choose roles that benefit you more than others.",
            stock: 6, 
            imgSrc: "", 
            weight: "3.28 / 5",
            player: [2, 3, 4, 5],
            bestPlayer: 3,
            lastStock: '2022-03-07',
            type: ["strategy", "action-drafting", "follow", "economic", "city-building"]
        },
        {
            id: 4005556269259,
            shortName: "castles-burgundy",
            name: "The Castles of Burgundy",
            publisher: "Ravensburger",             
            price: "$34.99 CAD", 
            desc: "Plan, trade, and build your Burgundian estate to prosperity and prominence.",
            stock: 4, 
            imgSrc: "", 
            weight: "3.00 / 5",
            player: [2, 3, 4], 
            bestPlayer: 3,
            lastStock: '2022-02-08',
            type: ["strategy", "dice-rolling", "pattern-building", "medieval"]
        },
        {
            id: 655132004404,
            shortName: "navegador",
            name: "Navegador",
            publisher: "Rio Grande Games",   
            price: "$65.99 CAD", 
            desc: "Sail to unexplored lands while managing your trade in the Portuguese Colonial Empire.",
            stock: 8, 
            imgSrc: "", 
            weight: "3.09 / 5",
            player: [3, 4, 5], 
            bestPlayer: 4,
            lastStock: '2022-01-24',
            type: ["strategy","economic", "exploration"]
        },
        {
            id: 29877030712,
            shortName: "catan",
            name: "Settlers of Catan",
            publisher: "Mayfair Games ",   
            price: "$47.97 CAD", 
            desc: " Collect and trade resources to build up the island of Catan in this modern classic.",
            stock: 3, 
            imgSrc: "", 
            weight: "2.31 / 5",
            player: [3, 4], 
            bestPlayer: 3,
            lastStock: '2022-04-24',
            type: ["family", "economic", "hexagon", "dice-rolling"]
        },
        {
            id: 599038365576,
            shortName: "wallenstein",
            name: "Wallenstein (Second Edition)",
            publisher: "Queen Games",   
            price: "$84.95 CAD", 
            desc: " Plan your strategy to control central Europe, but don't forget to feed your armies!",
            stock: 1, 
            imgSrc: "", 
            weight: "3.31 / 5",
            player: [3, 4, 5], 
            bestPlayer: 5,
            lastStock: '2022-05-24',
            type: ["strategy", "war", "economic", "area-movement", "influence"]
        },
        {
            id: 8594156310325,
            shortName: "through-the-age",
            name: "Through the Ages: A New Story of Civilization",
            publisher: "Czech Games",   
            price: "$66.45 CAD", 
            desc: " Rewrite history as you build up your civilization in this epic card drafting game!",
            stock: 0, 
            imgSrc: "", 
            weight: "4.42 / 5",
            player: [3, 4], 
            bestPlayer: 3,
            lastStock: '2022-05-03',
            type: ["strategy", "war", "action-points"]
        },
        {
            id: 681706711713,
            shortName: "pandemic-legacy-1",
            name: "Pandemic Legacy: Season 1",
            publisher: "Z-Man Games",   
            price: "$79.99 CAD", 
            desc: "Mutating diseases are spreading around the world - can your team save humanity?",
            stock: 2, 
            imgSrc: "", 
            weight: "2.83 / 5",
            player: [2, 3, 4], 
            bestPlayer: 4,
            lastStock: '2022-02-28',
            type: ["cooperative", "point-to-point", "medical", "legacy"]
        },
        {
            id: 655132004923,
            shortName: "roll-for-gall",
            name: "Roll for the Galaxy",
            publisher: " Rio Grande Games",   
            price: "$54.95 CAD", 
            desc: " Utilize your dice populace to develop technologies, settle worlds, and ship goods.",
            stock: 5, 
            imgSrc: "", 
            weight: "2.78 / 5", 
            player: [2,3,4,5],
            bestPlayer: 3,
            lastStock: '2022-04-03',
            type: ["strategy", "dice-rolling", "simultaneous-action"]
        },
        {
            id: 644216627721,
            shortName: "wingspan",
            name: "Wingspan",
            publisher: "Stonemaier Games ",   
            price: "$55.00 CAD", 
            desc: " Attract a beautiful and diverse collection of birds to your wildlife reserve.",
            stock: 0, 
            imgSrc: "", 
            weight: "2.44 / 5",
            player: [1,2,3,4], 
            bestPlayer: 3,
            lastStock: '2022-04-05',
            type: ["family", "dice-rolling", "hand-management"]
        }

    ]    
    
}, 
{
    page: 2,
    data: [
        {
            id: 892884000241,
            shortName: "quacks-of-quedlin",
            name: "The Quacks of Quedlinburg",
            publisher: "North Star Games",   
            price: "$63.55 CAD", 
            desc: "Pull ingredients from your stock to make your pot bubble, but hopefully not explode!",
            stock: 1, 
            imgSrc: "", 
            weight: "1.95 / 5", 
            player: [2,3,4],
            bestPlayer: 4,
            lastStock: '2022-05-24',
            type: ["family", "medieval", "bagBuilding"]
        },
        {
            id: 29877018307,
            shortName: "1830",
            name: "1830 Railways And Robber Barons",
            publisher: "Mayfair Games",   
            price: "$69.95 CAD", 
            desc: "A classic game of managing railroads and investing wisely. ",
            stock: 5,
            imgSrc: "", 
            weight: "4.16 / 5",
            player: [3, 4, 5, 6],
            bestPlayer: 4,
            lastStock: '2022-05-24',
            type: ["stock", "economic", "investment"]
        },
        {
            id: 8594156310592,
            shortName: "arnak",
            name: "Lost Ruins of Arnak",
            publisher: "Czech Games",   
            price: "$52.95 CAD", 
            desc: "Explore an island to find resources and discover the lost ruins of Arnak. ",
            stock: 10,
            imgSrc: "", 
            weight: "2.88 / 5",
            player: [1, 2, 3, 4],
            bestPlayer: 3,
            lastStock: '2022-05-24',
            type: ["family", "strategy", "deckBuilding", "bagBuilding"]
        },
        {
            id: 3558380021537,
            shortName: "splendor",
            name: "Splendor",
            publisher: "Asmodee Editions",   
            price: "$49.95 CAD", 
            desc: "Renaissance merchants race to grab gems, acquire property, and please nobility. ",
            stock: 17,
            imgSrc: "", 
            weight: "1.79 / 5",
            player: [2, 3, 4],
            bestPlayer: 3,
            lastStock: '2022-04-05',
            type: ["family", "cardGame", "economic", "setCollection"]
        },
        {
            id: 798304339291,
            shortName: "spirit",
            name: "Spirit Island",
            publisher: "Fabled Nexus",   
            price: "$77.95 CAD", 
            desc: "Island Spirits join forces using elemental powers to defend their home from invaders. ",
            stock: 8,
            imgSrc: "", 
            weight: "4.05 / 5",
            player: [1, 2, 3, 4],
            bestPlayer: 1,
            lastStock: '2022-04-05',
            type: ["strategy", "cooperative", "cardDriven", "fantasy"]
        },
        {
            id: 751354140859,
            shortName: "stockpile",
            name: "Stockpile",
            publisher: "Nauvoo Games",   
            price: "$44.95 CAD", 
            desc: "Bid, buy and sell stocks in this hidden-information game. ",
            stock: 3,
            imgSrc: "", 
            weight: "2.11 / 5",
            player: [2, 3, 4, 5],
            bestPlayer: 4,
            lastStock: '2022-05-03',
            type: ["strategy", "economic", "constrainedBidding", "investment"]
        },
        {
            id: 19962194719,
            shortName: "gloom",
            name: "Gloomhaven",
            publisher: "Cephalofair Games",   
            price: "$153.95 CAD", 
            desc: "Vanquish monsters with strategic cardplay. Fulfill your quest to leave your legacy! ",
            stock: 3,
            imgSrc: "", 
            weight: "3.88 / 5",
            player: [1, 2, 3, 4],
            bestPlayer: 3,
            lastStock: '2022-05-23',
            type: ["strategy", "thematic", "adventure", "cardDriven"]
        },
        {
            id: 814743015005,
            shortName: "thecrew",
            name: "The Crew: The Quest for Planet Nine",
            publisher: "Thames & Kosmos",   
            price: "$14.95 CAD", 
            desc: "Go on a planet-discovering space mission in this cooperative trick-taking game. ",
            stock: 16,
            imgSrc: "", 
            weight: "1.98 / 5",
            player: [2, 3, 4, 5],
            bestPlayer: 4,
            lastStock: '2022-02-28',
            type: ["family", "cardGame", "cooperative", "trick-taking"]
        },
        {
            id: 934957533406,
            shortName: "brass-b",
            name: "Brass: Birmingham",
            publisher: "Roxley",   
            price: "$74.95 CAD", 
            desc: "Build networks, grow industries, and navigate the world of the Industrial Revolution. ",
            stock: 6,
            imgSrc: "", 
            weight: "3.91 / 5",
            player: [2, 3, 4],
            bestPlayer: 3,
            lastStock: '2022-05-23',
            type: ["strategy", "economic", "handManagement", "turnOrder"]
        },
        {
            id: 824968200315,
            shortName: "t-to-r",
            name: "Ticket to Ride: Europe - 15th Anniversary",
            publisher: "Days of Wonder",   
            price: "$130.95 CAD", 
            desc: "Ride the rails across Europe to reach valuable cities with deluxe components. ",
            stock: 9,
            imgSrc: "", 
            weight: "1.81 / 5",
            player: [2, 3, 4, 5],
            bestPlayer: 4,
            lastStock: '2022-05-13',
            type: ["family", "train", "openDrafting", "setCollection"]
        }
    ]

},
{
    page: 3,
    data: [
        {
            id: 696859265808,
            shortName: "te-fo-ma",
            name: "Terraforming Mars",
            publisher: "Stronghold Games",   
            price: "$67.95 CAD", 
            desc: "Compete with rival CEOs to make Mars habitable and build your corporate empire.",
            stock: 0, 
            imgSrc: "", 
            weight: "3.25 / 5",
            player: [1, 2, 3, 4, 5], 
            bestPlayer: 3,
            lastStock: '2022-02-08',
            type: ["strategy", "environmental", "closedDrafting", "handManagement"]
        },
        {
            id: 5425016925560,
            shortName: "7-architects",
            name: "7 Wonders: Architects",
            publisher: "Repos Production",   
            price: "$53.95 CAD", 
            desc: "Race against others to assemble your wonder, but speed won't guarantee victory.",
            stock: 12, 
            imgSrc: "", 
            weight: "1.41 / 5",
            player: [2, 3, 4, 5, 6, 7], 
            bestPlayer: 4,
            lastStock: '2022-05-13',
            type: ["family", "encient", "openDrafting", "setCollection"]
        },
        {
            id: 681706100005,
            shortName: "de-o-win",
            name: "Dead of Winter: A Crossroads Game",
            publisher: "Plaid Hat Games",   
            price: "$66.95 CAD", 
            desc: "As you struggle to keep survivors alive, how will you value group vs. personal needs?",
            stock: 4, 
            imgSrc: "", 
            weight: "3.01 / 5",
            player: [2, 3, 4, 5], 
            bestPlayer: 4,
            lastStock: '2022-05-08',
            type: ["thematic", "bluffing", "horror", "diceRolling"]
        },
        {
            id: 841333101633,
            shortName: "arkham-card",
            name: "Arkham Horror: The Card Game",
            publisher: "Fantasy Flight Games",   
            price: "$59.95 CAD", 
            desc: "Investigate the horrors of Arkham while courting cosmic doom.",
            stock: 4, 
            imgSrc: "", 
            weight: "3.49 / 5",
            player: [1, 2, 3, 4], 
            bestPlayer: 2,
            lastStock: '2022-05-13',
            type: ["thematic", "customizable", "horror", "actiionPoints"]
        },
        {
            id: 4005556267545,
            shortName: "eldorado",
            name: "The Quest for El Dorado: The Golden Temples",
            publisher: "Ravensburger",   
            price: "$36.95 CAD", 
            desc: "You've made it to El Dorado, now the jewels and riches are almost in your grasp.",
            stock: 19, 
            imgSrc: "", 
            weight: "1.86 / 5",
            player: [2, 3, 4], 
            bestPlayer: 2,
            lastStock: '2022-02-13',
            type: ["family", "adventure", "openDrafting", "deckBuilding"]
        },
        {
            id: 722301926192,
            shortName: "avalon",
            name: "The Resistance: Avalon",
            publisher: "Indie Boards and Cards",   
            price: "$18.95 CAD", 
            desc: "Who can you trust? A game of social deduction set in King Arthur’s legendary realm.",
            stock: 33, 
            imgSrc: "", 
            weight: "1.76 / 5",
            player: [5, 6, 7, 8, 9, 10], 
            bestPlayer: 7,
            lastStock: '2022-02-13',
            type: ["party", "bluffing", "hiddenRoles", "team-basedGame"]
        },
        {
            id: 696749083765,
            shortName: "cockroach",
            name: "Cockroach Poker",
            publisher: "Schmidt",   
            price: "$11.95 CAD", 
            desc: "It's a cockroach. It's a fly. Will you call the bluff or pass on a trick of your own?",
            stock: 21, 
            imgSrc: "", 
            weight: "1.11 / 5",
            player: [2, 3, 4, 5, 6], 
            bestPlayer: 5,
            lastStock: '2022-05-03',
            type: ["party", "bluffing", "setCollection", "handManagement"]
        },
        {
            id: 681706712208,
            shortName: "cha-ta",
            name: "Chinatown",
            publisher: "Z-Man Games",   
            price: "$49.95 CAD", 
            desc: "Negotiate and build the most successful business in all of Chinatown! ",
            stock: 6, 
            imgSrc: "", 
            weight: "2.26 / 5",
            player: [3, 4, 5], 
            bestPlayer: 5,
            lastStock: '2022-02-23',
            type: ["strategy", "cityBuilding", "negotiation", "setCollection"]
        },
        {
            id: 655132002400,
            shortName: "pa-g",
            name: "Power Grid",
            publisher: "Rio Grande Games",   
            price: "$45.95 CAD", 
            desc: "Bid, network, and manage resources in a race to supply the most cities with power. ",
            stock: 1, 
            imgSrc: "", 
            weight: "3.26 / 5",
            player: [2, 3, 4, 5, 6], 
            bestPlayer: 4,
            lastStock: '2022-02-03',
            type: ["strategy", "economic", "market", "turnOrderUntilPass"]
        },
        {
            id: 681706070261,
            shortName: "a-col-re",
            name: "Agricola (Revised Edition)",
            publisher: "Lookout Games",   
            price: "$66.95 CAD", 
            desc: "Help your farm to prosper in this updated, streamlined edition of the acclaimed game.  ",
            stock: 6, 
            imgSrc: "", 
            weight: "3.50 / 5",
            player: [1, 2, 3, 4], 
            bestPlayer: 4,
            lastStock: '2022-02-18',
            type: ["strategy", "economic", "farming", "workerPlacement"]
        }

    ]
}

]

export default boardGameList;