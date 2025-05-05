export const skills = {
    mining: {
        name: "Mining",
        frenchName: "Minage",
        actions: {
            Stone: { xp: 10, image: "images/blocks/stone.png" },
            "Coal Ore": { xp: 15, image: "images/blocks/coal_ore.png" },
            "Iron Ore": { xp: 25, image: "images/blocks/iron_ore.png" },
            "Gold Ore": { xp: 35, image: "images/blocks/gold_ore.png" },
            "Diamond Ore": { xp: 75, image: "images/blocks/diamond_ore.png" },
            "Redstone Ore": { xp: 30, image: "images/blocks/redstone_ore.png" },
            "Emerald Ore": { xp: 100, image: "images/blocks/emerald_ore.png" },
            Deepslate: { xp: 12, image: "images/blocks/deepslate.png" },
        },
    },
    woodcutting: {
        name: "Woodcutting",
        frenchName: "Bûcheronnage",
        actions: {
            "Oak Log": { xp: 10, image: "images/blocks/oak_log.png" },
            "Birch Log": { xp: 10, image: "images/blocks/birch_log.png" },
            "Spruce Log": { xp: 10, image: "images/blocks/spruce_log.png" },
            "Jungle Log": { xp: 10, image: "images/blocks/jungle_log.png" },
            "Acacia Log": { xp: 10, image: "images/blocks/acacia_log.png" },
            "Dark Oak Log": { xp: 10, image: "images/blocks/dark_oak_log.png" },
            "Mangrove Log": { xp: 10, image: "images/blocks/mangrove_log.png" },
            "Crimson Stem": { xp: 12, image: "images/blocks/crimson_stem.png" },
            "Warped Stem": { xp: 12, image: "images/blocks/warped_stem.png" },
        },
    },
    excavation: {
        name: "Excavation",
        frenchName: "Fouille",
        actions: {
            Clay: { xp: 40, image: "https://minecraft-api.vercel.app/images/items/clay.png" },
            Dirt: { xp: 40, image: "https://minecraft-api.vercel.app/images/items/dirt.png" },
            Rooted_Dirt: { xp: 60, image: "https://minecraft-api.vercel.app/images/items/rooted_dirt.png" },
            Coarse_Dirt: { xp: 40, image: "https://minecraft-api.vercel.app/images/items/coarse_dirt.png" },
            Podzol: { xp: 40, image: "https://minecraft-api.vercel.app/images/items/podzol.png" },
            Grass_Block: { xp: 40, image: "https://minecraft-api.vercel.app/images/items/grass_block.png" },
            Gravel: { xp: 40, image: "images/blocks/podzol.png" },
            Mycelium: { xp: 40, image: "images/blocks/rooted_dirt.png" },
            Sand: { xp: 40, image: "images/blocks/rooted_dirt.png" },
            Red_Sand: { xp: 40, image: "images/blocks/rooted_dirt.png" },
            Snow: { xp: 20, image: "images/blocks/rooted_dirt.png" },
            Snow_Block: { xp: 40, image: "images/blocks/rooted_dirt.png" },
            Soul_Sand: { xp: 40, image: "images/blocks/rooted_dirt.png" },
            Soul_Soil: { xp: 40, image: "images/blocks/rooted_dirt.png" },
            Mud: { xp: 80, image: "images/blocks/rooted_dirt.png" },
            Muddy_Mangrove_Roots: { xp: 90, image: "assets/images/blocs_items/Muddy_Mangrove_Root.webp" },
        },
    },
    fishing: {
        name: "Fishing",
        frenchName: "Pêche",
        actions: {
            Cod: { xp: 50, image: "images/items/cod.png" },
            Salmon: { xp: 50, image: "images/items/salmon.png" },
            "Tropical Fish": { xp: 50, image: "images/items/tropical_fish.png" },
            Pufferfish: { xp: 50, image: "images/items/pufferfish.png" },
            "Treasure Loot": { xp: 100, image: "images/items/treasure_chest.png" },
        },
    },
    herbalism: {
        name: "Herbalism",
        frenchName: "Herboristerie",
        actions: {
            Wheat: { xp: 15, image: "images/items/wheat.png" },
            Carrots: { xp: 15, image: "images/items/carrot.png" },
            Potatoes: { xp: 15, image: "images/items/potato.png" },
            Beetroots: { xp: 15, image: "images/items/beetroot.png" },
            "Nether Wart": { xp: 15, image: "images/items/nether_wart.png" },
            Melon: { xp: 10, image: "images/items/melon.png" },
            Pumpkin: { xp: 10, image: "images/items/pumpkin.png" },
            "Sugar Cane": { xp: 10, image: "images/items/sugar_cane.png" },
            Cactus: { xp: 10, image: "images/blocks/cactus.png" },
            "Cocoa Beans": { xp: 10, image: "images/items/cocoa_beans.png" },
            Bamboo: { xp: 10, image: "images/blocks/bamboo.png" },
            "Sweet Berries": { xp: 10, image: "images/items/sweet_berries.png" },
        },
    },
    unarmed: {
        name: "Unarmed",
        frenchName: "Poing",
        actions: {
            "Player Hit": { xp: 30, image: "images/icons/player_hit.png" },
            "Mob Hit": { xp: 20, image: "images/icons/mob_hit.png" },
        },
    },
    swords: {
        name: "Swords",
        frenchName: "Épées",
        actions: {
            "Player Hit": { xp: 30, image: "images/items/iron_sword.png" },
            "Mob Hit": { xp: 20, image: "images/items/iron_sword.png" },
        },
    },
    axes: {
        name: "Axes",
        frenchName: "Haches",
        actions: {
            "Player Hit": { xp: 30, image: "images/items/iron_axe.png" },
            "Mob Hit": { xp: 20, image: "images/items/iron_axe.png" },
            "Log Break": { xp: 10, image: "images/blocks/oak_log.png" },
        },
    },
    archery: {
        name: "Archery",
        frenchName: "Archerie",
        actions: {
            "Player Hit": { xp: 30, image: "images/items/bow.png" },
            "Mob Hit": { xp: 20, image: "images/items/bow.png" },
        },
    },
    taming: {
        name: "Taming",
        frenchName: "Apprivoisement",
        actions: {
            "Wolf Tamed": { xp: 100, image: "images/entities/wolf.png" },
            "Horse Tamed": { xp: 100, image: "images/entities/horse.png" },
            "Cat Tamed": { xp: 100, image: "images/entities/cat.png" },
        },
    },
    repair: {
        name: "Repair",
        frenchName: "Réparation",
        actions: {
            "Iron Tool Repair": { xp: 25, image: "images/items/iron_pickaxe.png" },
            "Diamond Tool Repair": { xp: 50, image: "images/items/diamond_pickaxe.png" },
            "Gold Tool Repair": { xp: 30, image: "images/items/golden_pickaxe.png" },
        },
    },
    acrobatics: {
        name: "Acrobatics",
        frenchName: "Acrobatie",
        actions: {
            "Fall Damage Survived": { xp: 50, image: "images/icons/fall_damage.png" },
            "Dodge Attack": { xp: 25, image: "images/icons/dodge.png" },
        },
    },
    alchemy: {
        name: "Alchemy",
        frenchName: "Alchimie",
        actions: {
            "Potion Brewed": { xp: 50, image: "images/items/potion.png" },
            "Extended Potion": { xp: 10, image: "images/items/potion_extended.png" },
            "Upgraded Potion": { xp: 10, image: "images/items/potion_upgraded.png" },
        },
    },
    maces: {
        name: "Maces",
        frenchName: "Maces",
        actions: {
            "Player Hit": { xp: 30, image: "images/items/mace.png" },
            "Mob Hit": { xp: 20, image: "images/items/mace.png" },
        },
    },
    trident: {
        name: "Trident",
        frenchName: "Trident",
        actions: {
            "Player Hit": { xp: 30, image: "images/items/trident.png" },
            "Mob Hit": { xp: 20, image: "images/items/trident.png" },
        },
    },
    crossbows: {
        name: "Crossbows",
        frenchName: "Arbalètes",
        actions: {
            "Player Hit": { xp: 30, image: "images/items/crossbow.png" },
            "Mob Hit": { xp: 20, image: "images/items/crossbow.png" },
        },
    },
};
