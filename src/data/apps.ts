export interface App {
  id: string;
  name: string;
  imageUrl: string;
  rating: number; // 1-5
  updated: boolean;
  category?: string; // Optional category field
  downloads?: string; // Optional downloads count
}

export const apps: App[] = [
  {
    id: "com.firsttouchgames.dls7",
    name: "DLS 25",
    imageUrl: "https://ext.same-assets.com/506874205/399734387.png",
    rating: 5,
    updated: true,
    category: "Sports",
    downloads: "100M+"
  },
  {
    id: "com.ea.gp.fifamobile",
    name: "FC Mobile",
    imageUrl: "https://ext.same-assets.com/506874205/2782660479.png",
    rating: 4,
    updated: true,
    category: "Sports",
    downloads: "50M+"
  },
  {
    id: "jp.konami.pesam",
    name: "eFootball™",
    imageUrl: "https://ext.same-assets.com/506874205/55681624.png",
    rating: 4,
    updated: true,
    category: "Sports",
    downloads: "100M+"
  },
  {
    id: "com.roblox.client",
    name: "Roblox",
    imageUrl: "https://ext.same-assets.com/506874205/122905215.png",
    rating: 4,
    updated: true,
    category: "Gaming",
    downloads: "500M+"
  },
  {
    id: "delta.executor",
    name: "Delta Executor",
    imageUrl: "https://ext.same-assets.com/506874205/2830871027.png",
    rating: 5,
    updated: true,
    category: "Utilities",
    downloads: "10M+"
  },
  {
    id: "com.nianticlabs.pokemongo",
    name: "Pokémon GO",
    imageUrl: "https://ext.same-assets.com/506874205/211384060.png",
    rating: 4,
    updated: true,
    category: "Adventure",
    downloads: "1B+"
  },
  {
    id: "com.instagram.android",
    name: "Instagram",
    imageUrl: "https://ext.same-assets.com/506874205/1217883192.png",
    rating: 5,
    updated: true,
    category: "Social",
    downloads: "5B+"
  },
  {
    id: "com.storymatrix.drama",
    name: "DramaBox",
    imageUrl: "https://ext.same-assets.com/506874205/2024328811.png",
    rating: 5,
    updated: true,
    category: "Entertainment",
    downloads: "10M+"
  },
  {
    id: "com.scopely.monopolygo",
    name: "Monopoly GO",
    imageUrl: "https://ext.same-assets.com/506874205/1026864708.png",
    rating: 5,
    updated: true,
    category: "Board",
    downloads: "100M+"
  },
  {
    id: "com.radio.pocketfm",
    name: "Pocket FM",
    imageUrl: "https://ext.same-assets.com/506874205/1854605848.png",
    rating: 5,
    updated: true,
    category: "Entertainment",
    downloads: "50M+"
  },
  {
    id: "com.newleaf.app.android.victor",
    name: "ReelShort",
    imageUrl: "https://ext.same-assets.com/506874205/2673937479.png",
    rating: 5,
    updated: true,
    category: "Entertainment",
    downloads: "50M+"
  },
  {
    id: "com.olzhas.carparking.multyplayer",
    name: "Car Parking Multiplayer",
    imageUrl: "https://ext.same-assets.com/506874205/2115017008.png",
    rating: 4,
    updated: true,
    category: "Simulation",
    downloads: "100M+"
  },
  {
    id: "com.zhiliaoapp.musically",
    name: "TikTok",
    imageUrl: "https://ext.same-assets.com/506874205/726317169.png",
    rating: 4,
    updated: true,
    category: "Social",
    downloads: "3B+"
  },
  {
    id: "com.microsoft.rewards",
    name: "Microsoft Rewards",
    imageUrl: "https://ext.same-assets.com/506874205/1104110206.png",
    rating: 5,
    updated: true,
    category: "Utilities",
    downloads: "10M+"
  },
  {
    id: "com.activision.callofduty.shooter",
    name: "Call of Duty: Mobile",
    imageUrl: "https://ext.same-assets.com/506874205/697168958.png",
    rating: 4,
    updated: true,
    category: "Action",
    downloads: "500M+"
  },
  {
    id: "es.socialpoint.DragonCity",
    name: "Dragon City",
    imageUrl: "https://ext.same-assets.com/506874205/1323370885.png",
    rating: 5,
    updated: true,
    category: "Simulation",
    downloads: "100M+"
  },
  {
    id: "com.gameloft.android.ANMP.GloftDOHM",
    name: "Dragon Mania Legends",
    imageUrl: "https://ext.same-assets.com/506874205/2178730353.png",
    rating: 5,
    updated: true,
    category: "Simulation",
    downloads: "100M+"
  },
  {
    id: "com.kiloo.subwaysurf",
    name: "Subway Surfers",
    imageUrl: "https://ext.same-assets.com/506874205/438058075.png",
    rating: 5,
    updated: true,
    category: "Arcade",
    downloads: "1B+"
  },
  {
    id: "com.nordcurrent.canteenhd",
    name: "Cooking Fever",
    imageUrl: "https://ext.same-assets.com/506874205/4041918490.png",
    rating: 5,
    updated: true,
    category: "Casual",
    downloads: "500M+"
  },
  {
    id: "com.ea.game.simcitymobile_row",
    name: "SimCity BuildIt",
    imageUrl: "https://ext.same-assets.com/506874205/2976229485.png",
    rating: 5,
    updated: true,
    category: "Simulation",
    downloads: "100M+"
  },
  {
    id: "com.fun.lastwar.gp",
    name: "Last War",
    imageUrl: "https://ext.same-assets.com/506874205/3342216287.png",
    rating: 4,
    updated: true,
    category: "Strategy",
    downloads: "10M+"
  },
  // Additional apps
  {
    id: "com.nekki.shadowfight3",
    name: "Shadow Fight 3",
    imageUrl: "https://ext.same-assets.com/506874205/4110888077.png",
    rating: 5,
    updated: true,
    category: "Action",
    downloads: "100M+"
  },
  {
    id: "com.moonactive.coinmaster",
    name: "Coin Master",
    imageUrl: "https://ext.same-assets.com/506874205/3845935017.png",
    rating: 5,
    updated: true,
    category: "Casual",
    downloads: "100M+"
  },
  {
    id: "eu.nordeus.topeleven.android",
    name: "Top Eleven",
    imageUrl: "https://ext.same-assets.com/506874205/3216908551.png",
    rating: 4,
    updated: true,
    category: "Sports",
    downloads: "100M+"
  },
  {
    id: "us.kr.baseballnine",
    name: "Baseball 9",
    imageUrl: "https://ext.same-assets.com/506874205/1990962477.png",
    rating: 5,
    updated: true,
    category: "Sports",
    downloads: "10M+"
  },
  {
    id: "com.king.candycrushsaga",
    name: "Candy Crush Saga",
    imageUrl: "https://ext.same-assets.com/506874205/3060683935.png",
    rating: 5,
    updated: true,
    category: "Puzzle",
    downloads: "1B+"
  },
  {
    id: "com.block.juggle",
    name: "Block Blast",
    imageUrl: "https://ext.same-assets.com/506874205/3421152506.png",
    rating: 5,
    updated: true,
    category: "Puzzle",
    downloads: "100M+"
  },
  {
    id: "com.playrix.homescapes",
    name: "Homescapes",
    imageUrl: "https://ext.same-assets.com/506874205/1890393960.png",
    rating: 5,
    updated: true,
    category: "Puzzle",
    downloads: "500M+"
  },
  {
    id: "com.playrix.gardenscapes",
    name: "Gardenscapes",
    imageUrl: "https://ext.same-assets.com/506874205/607515736.png",
    rating: 5,
    updated: true,
    category: "Puzzle",
    downloads: "500M+"
  },
  {
    id: "com.playrix.township",
    name: "Township",
    imageUrl: "https://ext.same-assets.com/506874205/95745643.png",
    rating: 5,
    updated: true,
    category: "Simulation",
    downloads: "100M+"
  },
  {
    id: "com.dreamgames.royalmatch",
    name: "Royal Match",
    imageUrl: "https://ext.same-assets.com/506874205/875299679.png",
    rating: 4,
    updated: true,
    category: "Puzzle",
    downloads: "100M+"
  },
  {
    id: "com.gof.global",
    name: "Whiteout Survival",
    imageUrl: "https://ext.same-assets.com/506874205/322160286.png",
    rating: 4,
    updated: true,
    category: "Survival",
    downloads: "10M+"
  },
  {
    id: "com.ea.games.r3_row",
    name: "Real Racing 3",
    imageUrl: "https://ext.same-assets.com/506874205/3219632455.png",
    rating: 5,
    updated: true,
    category: "Racing",
    downloads: "100M+"
  },
  {
    id: "com.ea.games.simsfreeplay_row",
    name: "The Sims FreePlay",
    imageUrl: "https://ext.same-assets.com/506874205/1169704049.png",
    rating: 5,
    updated: true,
    category: "Simulation",
    downloads: "100M+"
  },
  {
    id: "jp.pokemon.pokemontcgp",
    name: "Pokémon TCG Pocket",
    imageUrl: "https://ext.same-assets.com/506874205/779717306.png",
    rating: 5,
    updated: true,
    category: "Card",
    downloads: "10M+"
  },
  {
    id: "com.candywriter.bitlife",
    name: "BitLife",
    imageUrl: "https://ext.same-assets.com/506874205/3851784222.png",
    rating: 4,
    updated: true,
    category: "Simulation",
    downloads: "100M+"
  },
  {
    id: "com.xq.archeroii",
    name: "Archero 2",
    imageUrl: "https://ext.same-assets.com/506874205/2926019877.png",
    rating: 5,
    updated: true,
    category: "Action",
    downloads: "10M+"
  },
];
