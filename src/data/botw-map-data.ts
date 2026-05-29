export type BotwMarkerCategory = {
  id: string;
  name: string;
  label: string;
  parentId: string | null;
  parentName: string | null;
  color: string;
  icon: string;
  count: number;
};

export type BotwMapMarker = {
  id: string;
  categoryId: string;
  name: string;
  description: string;
  x: number;
  y: number;
};

export const defaultBotwCategoryIds = ["1925"] as const;

export const botwMarkerCategories = [
  {
    "id": "1901",
    "name": "兴趣点",
    "label": "兴趣点",
    "parentId": null,
    "parentName": null,
    "color": "#4bc5ee",
    "icon": "BotW_Points-of-Interest",
    "count": 83
  },
  {
    "id": "1934",
    "name": "Memories",
    "label": "回忆点",
    "parentId": "1901",
    "parentName": "兴趣点",
    "color": "#4bc5ee",
    "icon": "film",
    "count": 10
  },
  {
    "id": "1935",
    "name": "Side-Quests",
    "label": "支线任务",
    "parentId": "1901",
    "parentName": "兴趣点",
    "color": "#4bc5ee",
    "icon": "bubble2",
    "count": 58
  },
  {
    "id": "1936",
    "name": "Cracked Walls",
    "label": "可炸墙",
    "parentId": "1901",
    "parentName": "兴趣点",
    "color": "#4bc5ee",
    "icon": "bomb",
    "count": 16
  },
  {
    "id": "1902",
    "name": "Equipment",
    "label": "装备",
    "parentId": null,
    "parentName": null,
    "color": "#ffad48",
    "icon": "BotW_Equipment",
    "count": 0
  },
  {
    "id": "1903",
    "name": "Weapons",
    "label": "武器",
    "parentId": "1902",
    "parentName": "装备",
    "color": "#ffad48",
    "icon": "BotW_Weapons",
    "count": 16
  },
  {
    "id": "1904",
    "name": "Bows & Arrows",
    "label": "弓箭",
    "parentId": "1902",
    "parentName": "装备",
    "color": "#ffad48",
    "icon": "BotW_Bow-n-Arrows",
    "count": 12
  },
  {
    "id": "1905",
    "name": "Shields",
    "label": "盾牌",
    "parentId": "1902",
    "parentName": "装备",
    "color": "#ffad48",
    "icon": "BotW_Shields",
    "count": 4
  },
  {
    "id": "1906",
    "name": "Armor",
    "label": "盔甲",
    "parentId": "1902",
    "parentName": "装备",
    "color": "#ffad48",
    "icon": "BotW_Armor",
    "count": 2
  },
  {
    "id": "1910",
    "name": "Items",
    "label": "物品",
    "parentId": null,
    "parentName": null,
    "color": "#3cbc75",
    "icon": "BotW_Items",
    "count": 6
  },
  {
    "id": "1911",
    "name": "Food (Beef)",
    "label": "肉类",
    "parentId": "1910",
    "parentName": "物品",
    "color": "#3cbc75",
    "icon": "BotW_Meat",
    "count": 3
  },
  {
    "id": "1912",
    "name": "Food (Fish)",
    "label": "鱼类",
    "parentId": "1910",
    "parentName": "物品",
    "color": "#3cbc75",
    "icon": "BotW_Fish",
    "count": 0
  },
  {
    "id": "1913",
    "name": "Herbs",
    "label": "草药",
    "parentId": "1910",
    "parentName": "物品",
    "color": "#3cbc75",
    "icon": "BotW_Herb",
    "count": 5
  },
  {
    "id": "1914",
    "name": "Mushrooms",
    "label": "蘑菇",
    "parentId": "1910",
    "parentName": "物品",
    "color": "#3cbc75",
    "icon": "BotW_Mushroom",
    "count": 17
  },
  {
    "id": "1915",
    "name": "Materials",
    "label": "材料",
    "parentId": "1910",
    "parentName": "物品",
    "color": "#3cbc75",
    "icon": "BotW_Materials",
    "count": 18
  },
  {
    "id": "1916",
    "name": "Korok Seeds",
    "label": "呀哈哈",
    "parentId": "1910",
    "parentName": "物品",
    "color": "#3cbc75",
    "icon": "BotW_Korok-Seeds",
    "count": 900
  },
  {
    "id": "1920",
    "name": "Locations",
    "label": "地点",
    "parentId": null,
    "parentName": null,
    "color": "#8e72b9",
    "icon": "BotW_Locations",
    "count": 2
  },
  {
    "id": "1921",
    "name": "Town (House)",
    "label": "村镇",
    "parentId": "1920",
    "parentName": "地点",
    "color": "#8e72b9",
    "icon": "BotW_Village",
    "count": 9
  },
  {
    "id": "1922",
    "name": "Town (House)",
    "label": "村镇",
    "parentId": "1920",
    "parentName": "地点",
    "color": "#8e72b9",
    "icon": "BotW_Farm",
    "count": 0
  },
  {
    "id": "1923",
    "name": "Sheikah Tower",
    "label": "希卡塔",
    "parentId": "1920",
    "parentName": "地点",
    "color": "#8e72b9",
    "icon": "BotW_Tower-of-Resurrection",
    "count": 15
  },
  {
    "id": "1924",
    "name": "Shrine of Resurrection",
    "label": "复苏神庙",
    "parentId": "1920",
    "parentName": "地点",
    "color": "#8e72b9",
    "icon": "BotW_Shrine-of-Resurrection",
    "count": 1
  },
  {
    "id": "1925",
    "name": "Shrine of Trials",
    "label": "试炼神庙",
    "parentId": "1920",
    "parentName": "地点",
    "color": "#8e72b9",
    "icon": "BotW_Shrines",
    "count": 120
  },
  {
    "id": "1926",
    "name": "Dungeon",
    "label": "迷宫",
    "parentId": "1920",
    "parentName": "地点",
    "color": "#8e72b9",
    "icon": "BotW_Dungeon",
    "count": 1
  },
  {
    "id": "1927",
    "name": "Temple of Time",
    "label": "时之神殿",
    "parentId": "1920",
    "parentName": "地点",
    "color": "#8e72b9",
    "icon": "BotW_The-Temple-of-Time",
    "count": 2
  },
  {
    "id": "1937",
    "name": "Great Fairy",
    "label": "大精灵",
    "parentId": "1920",
    "parentName": "地点",
    "color": "#8e72b9",
    "icon": "BotW_Great-Fairy",
    "count": 5
  },
  {
    "id": "1938",
    "name": "Stables",
    "label": "驿站",
    "parentId": "1920",
    "parentName": "地点",
    "color": "#8e72b9",
    "icon": "BotW_Stables",
    "count": 15
  },
  {
    "id": "1930",
    "name": "Enemies",
    "label": "敌人",
    "parentId": null,
    "parentName": null,
    "color": "#ff422e",
    "icon": "BotW_Enemies",
    "count": 30
  },
  {
    "id": "1931",
    "name": "Enemy Camp",
    "label": "敌营",
    "parentId": "1930",
    "parentName": "敌人",
    "color": "#ff422e",
    "icon": "BotW_Enemy-Camp",
    "count": 26
  },
  {
    "id": "1932",
    "name": "Guardian",
    "label": "守护者",
    "parentId": "1930",
    "parentName": "敌人",
    "color": "#ff422e",
    "icon": "BotW_Guardian",
    "count": 5
  },
  {
    "id": "1933",
    "name": "Boss",
    "label": "头目",
    "parentId": "1930",
    "parentName": "敌人",
    "color": "#ff422e",
    "icon": "BotW_Boss",
    "count": 19
  }
] satisfies BotwMarkerCategory[];

export const botwMapMarkers = [
  {
    "id": "2952",
    "categoryId": "1925",
    "name": "Korgu Chideh Shrine",
    "description": "",
    "x": 202.00965625,
    "y": -186.931125
  },
  {
    "id": "2951",
    "categoryId": "1925",
    "name": "Chaas Qeta Shrine",
    "description": "",
    "x": 190.679421875,
    "y": -174.716109375
  },
  {
    "id": "2950",
    "categoryId": "1925",
    "name": "Tahno O'ah Shrine",
    "description": "",
    "x": 193.355703125,
    "y": -154.35246875
  },
  {
    "id": "2949",
    "categoryId": "1925",
    "name": "Shai Yota Shrine",
    "description": "",
    "x": 194.33196875,
    "y": -131.96730625
  },
  {
    "id": "2948",
    "categoryId": "1925",
    "name": "Ke'nai Shakah Shrine",
    "description": "",
    "x": 193.54240625,
    "y": -114.6264375
  },
  {
    "id": "2947",
    "categoryId": "1925",
    "name": "Kah Mael Shrine",
    "description": "",
    "x": 201.5713125,
    "y": -107.538890625
  },
  {
    "id": "2946",
    "categoryId": "1925",
    "name": "Ritaag Zumo Shrine",
    "description": "",
    "x": 198.70375,
    "y": -94.743859375
  },
  {
    "id": "2945",
    "categoryId": "1925",
    "name": "Katosa Aug Shrine",
    "description": "",
    "x": 195.107828125,
    "y": -85.345703125
  },
  {
    "id": "2944",
    "categoryId": "1938",
    "name": "East Akkala Stable",
    "description": "",
    "x": 194.0596875,
    "y": -85.066109375
  },
  {
    "id": "2943",
    "categoryId": "1925",
    "name": "Tu Ka'loh Shrine",
    "description": "",
    "x": 200.734375,
    "y": -70.046875
  },
  {
    "id": "2942",
    "categoryId": "1925",
    "name": "Kah Yah Shrine",
    "description": "",
    "x": 181.707578125,
    "y": -179.8311875
  },
  {
    "id": "2941",
    "categoryId": "1925",
    "name": "Muwo Jeem Shrine",
    "description": "",
    "x": 185.143234375,
    "y": -179.687390625
  },
  {
    "id": "2940",
    "categoryId": "1921",
    "name": "Lurelin Village",
    "description": "",
    "x": 175.02295312500002,
    "y": -182.341765625
  },
  {
    "id": "2939",
    "categoryId": "1925",
    "name": "Myahm Agana Shrine",
    "description": "",
    "x": 180.932921875,
    "y": -162.61140625000002
  },
  {
    "id": "2938",
    "categoryId": "1921",
    "name": "Hateno Village",
    "description": "",
    "x": 184.136609375,
    "y": -161.15393749999998
  },
  {
    "id": "2937",
    "categoryId": "1925",
    "name": "Jitan Sa'mi Shrine",
    "description": "",
    "x": 188.6723125,
    "y": -148.552515625
  },
  {
    "id": "2936",
    "categoryId": "1925",
    "name": "Rucco Maag Shrine",
    "description": "",
    "x": 180.0859375,
    "y": -134.2890625
  },
  {
    "id": "2935",
    "categoryId": "1925",
    "name": "Dagah Keek Shrine",
    "description": "",
    "x": 177.20081249999998,
    "y": -121.4792203125
  },
  {
    "id": "2934",
    "categoryId": "1925",
    "name": "Ne'ez Yohma Shrine",
    "description": "",
    "x": 179.924515625,
    "y": -119.90751875
  },
  {
    "id": "2933",
    "categoryId": "1921",
    "name": "Zora's Domain",
    "description": "",
    "x": 179.122890625,
    "y": -121.7267453125
  },
  {
    "id": "2932",
    "categoryId": "1921",
    "name": "Tarrey Town",
    "description": "",
    "x": 189.9515,
    "y": -102.765359375
  },
  {
    "id": "2931",
    "categoryId": "1925",
    "name": "Ze Kasho Shrine",
    "description": "Ze Kasho Apparatus",
    "x": 175.31715624999998,
    "y": -101.937265625
  },
  {
    "id": "2930",
    "categoryId": "1925",
    "name": "Dah Hesho Shrine",
    "description": "",
    "x": 188.93267187499998,
    "y": -107.62821875
  },
  {
    "id": "2929",
    "categoryId": "1923",
    "name": "Akkala Tower",
    "description": "",
    "x": 179.6875,
    "y": -104.5609375
  },
  {
    "id": "2928",
    "categoryId": "1938",
    "name": "South Akkala Stable",
    "description": "",
    "x": 177.216125,
    "y": -101.552390625
  },
  {
    "id": "2927",
    "categoryId": "1925",
    "name": "Tutsuwa Nima Shrine",
    "description": "",
    "x": 187.01960937500002,
    "y": -85.74892187500001
  },
  {
    "id": "2926",
    "categoryId": "1925",
    "name": "Zuna Kai Shrine",
    "description": "",
    "x": 179.938828125,
    "y": -74.54110937499999
  },
  {
    "id": "2925",
    "categoryId": "1925",
    "name": "Qukah Nata Shrine",
    "description": "",
    "x": 159.373453125,
    "y": -179.32134374999998
  },
  {
    "id": "2924",
    "categoryId": "1925",
    "name": "Yah Rin Shrine",
    "description": "",
    "x": 172.273953125,
    "y": -179.74934375
  },
  {
    "id": "2923",
    "categoryId": "1925",
    "name": "Tawa Jinn Shrine",
    "description": "",
    "x": 169.19829687499998,
    "y": -172.27896875
  },
  {
    "id": "2922",
    "categoryId": "1923",
    "name": "Hateno Tower",
    "description": "",
    "x": 170.7421875,
    "y": -161.3359375
  },
  {
    "id": "2921",
    "categoryId": "1925",
    "name": "Kam Urog Shrine",
    "description": "",
    "x": 167.0890625,
    "y": -151.36846875
  },
  {
    "id": "2920",
    "categoryId": "1925",
    "name": "Dow Na'eh Shrine",
    "description": "",
    "x": 170.137,
    "y": -148.828390625
  },
  {
    "id": "2919",
    "categoryId": "1925",
    "name": "Mezza Lo Shrine",
    "description": "",
    "x": 168.96281249999998,
    "y": -133.92553437499998
  },
  {
    "id": "2918",
    "categoryId": "1925",
    "name": "Lakna Rokee Shrine",
    "description": "",
    "x": 159.869265625,
    "y": -143.18288124999998
  },
  {
    "id": "2917",
    "categoryId": "1923",
    "name": "Lanayru Tower",
    "description": "",
    "x": 163.28125,
    "y": -126.296875
  },
  {
    "id": "2916",
    "categoryId": "1925",
    "name": "Soh Kofi Shrine",
    "description": "",
    "x": 162.987703125,
    "y": -123.43078125
  },
  {
    "id": "2915",
    "categoryId": "1925",
    "name": "Tah Muhl Shrine",
    "description": "",
    "x": 163.96034375,
    "y": -113.301159375
  },
  {
    "id": "2914",
    "categoryId": "1925",
    "name": "Sah Dahaj Shrine",
    "description": "",
    "x": 169.65812499999998,
    "y": -103.30737500000001
  },
  {
    "id": "2913",
    "categoryId": "1925",
    "name": "Mo'a Keet Shrine",
    "description": "",
    "x": 170.54809375,
    "y": -109.79425
  },
  {
    "id": "2912",
    "categoryId": "1923",
    "name": "Eldin Tower",
    "description": "",
    "x": 161.971109375,
    "y": -103.675296875
  },
  {
    "id": "2911",
    "categoryId": "1938",
    "name": "Foothill Stable",
    "description": "",
    "x": 168.8333125,
    "y": -110.132609375
  },
  {
    "id": "2910",
    "categoryId": "1925",
    "name": "Kayra Mah Shrine",
    "description": "",
    "x": 160.434734375,
    "y": -96.12940625
  },
  {
    "id": "2909",
    "categoryId": "1925",
    "name": "Daqa Koh Shrine",
    "description": "",
    "x": 160.265203125,
    "y": -91.62696875
  },
  {
    "id": "2908",
    "categoryId": "1925",
    "name": "Gorae Torr Shrine",
    "description": "",
    "x": 169.604796875,
    "y": -73.981140625
  },
  {
    "id": "2907",
    "categoryId": "1923",
    "name": "Faron Tower",
    "description": "",
    "x": 148.80004687500002,
    "y": -179.151921875
  },
  {
    "id": "2906",
    "categoryId": "1925",
    "name": "Shai Utoh Shrine",
    "description": "",
    "x": 152.787109375,
    "y": -184.468625
  },
  {
    "id": "2905",
    "categoryId": "1938",
    "name": "Lakeside Stable",
    "description": "",
    "x": 152.25035937500002,
    "y": -183.278734375
  },
  {
    "id": "2904",
    "categoryId": "1925",
    "name": "Shoda Sah Shrine",
    "description": "",
    "x": 155.972765625,
    "y": -174.7635
  },
  {
    "id": "2903",
    "categoryId": "1925",
    "name": "Toto Sah Shrine",
    "description": "",
    "x": 156.852515625,
    "y": -166.65196874999998
  },
  {
    "id": "2902",
    "categoryId": "1938",
    "name": "Dueling Peaks Stable",
    "description": "",
    "x": 155.52053125,
    "y": -158.09756249999998
  },
  {
    "id": "2901",
    "categoryId": "1925",
    "name": "Ree Dahee Shrine",
    "description": "",
    "x": 147.88932812500002,
    "y": -156.81109375
  },
  {
    "id": "2900",
    "categoryId": "1925",
    "name": "Ha Dahamar Shrine",
    "description": "",
    "x": 153.983859375,
    "y": -158.0374375
  },
  {
    "id": "2899",
    "categoryId": "1925",
    "name": "Shee Vaneer Shrine",
    "description": "",
    "x": 147.785453125,
    "y": -158.2921875
  },
  {
    "id": "2898",
    "categoryId": "1925",
    "name": "Shee Venath Shrine",
    "description": "",
    "x": 147.45496875,
    "y": -156.91314062499998
  },
  {
    "id": "2897",
    "categoryId": "1923",
    "name": "Dueling Peaks Tower",
    "description": "",
    "x": 143.887140625,
    "y": -154.78253125
  },
  {
    "id": "2896",
    "categoryId": "1921",
    "name": "Kakariko Village",
    "description": "",
    "x": 156.218796875,
    "y": -143.38686875000002
  },
  {
    "id": "2895",
    "categoryId": "1925",
    "name": "Ta'loh Naeg Shrine",
    "description": "",
    "x": 156.769140625,
    "y": -141.9236328125
  },
  {
    "id": "2894",
    "categoryId": "1925",
    "name": "Daka Tuss Shrine",
    "description": "",
    "x": 153.02864062499998,
    "y": -135.230528125
  },
  {
    "id": "2893",
    "categoryId": "1925",
    "name": "Sheh Rata Shrine",
    "description": "",
    "x": 151.585625,
    "y": -122.105953125
  },
  {
    "id": "2892",
    "categoryId": "1925",
    "name": "Qua Raym Shrine",
    "description": "",
    "x": 156.441265625,
    "y": -104.282765625
  },
  {
    "id": "2891",
    "categoryId": "1925",
    "name": "Mirro Shaz Shrine",
    "description": "",
    "x": 147.234328125,
    "y": -109.051125
  },
  {
    "id": "2890",
    "categoryId": "1938",
    "name": "Woodland Stable",
    "description": "",
    "x": 144.65109375,
    "y": -110.16276562499999
  },
  {
    "id": "2889",
    "categoryId": "1925",
    "name": "Shae Mo'sah Shrine",
    "description": "",
    "x": 155.446421875,
    "y": -87.973421875
  },
  {
    "id": "2888",
    "categoryId": "1921",
    "name": "Goron City",
    "description": "",
    "x": 154.3305,
    "y": -89.445390625
  },
  {
    "id": "2887",
    "categoryId": "1925",
    "name": "Shora Hah Shrine",
    "description": "",
    "x": 152.00326562499998,
    "y": -79.2895625
  },
  {
    "id": "2886",
    "categoryId": "1925",
    "name": "Shoqa Tatone Shrine",
    "description": "",
    "x": 129.4843496875,
    "y": -188.014734375
  },
  {
    "id": "2885",
    "categoryId": "1925",
    "name": "Ka'o Makagh Shrine",
    "description": "",
    "x": 136.171159375,
    "y": -183.0831875
  },
  {
    "id": "2884",
    "categoryId": "1938",
    "name": "Highland Stable",
    "description": "",
    "x": 136.2750015625,
    "y": -181.920046875
  },
  {
    "id": "2883",
    "categoryId": "1925",
    "name": "Shae Katha Shrine",
    "description": "",
    "x": 141.6014796875,
    "y": -164.398875
  },
  {
    "id": "2882",
    "categoryId": "1925",
    "name": "Pumaag Nitae Shrine",
    "description": "",
    "x": 136.7400625,
    "y": -174.73715625
  },
  {
    "id": "2881",
    "categoryId": "1925",
    "name": "Bosh Kala Shrine",
    "description": "",
    "x": 129.35963296875002,
    "y": -153.90165625
  },
  {
    "id": "2880",
    "categoryId": "1925",
    "name": "Wahgo Katta Shrine",
    "description": "",
    "x": 133.399803125,
    "y": -143.746390625
  },
  {
    "id": "2879",
    "categoryId": "1938",
    "name": "Riverside Stable",
    "description": "",
    "x": 133.30050625,
    "y": -145.114015625
  },
  {
    "id": "2878",
    "categoryId": "1925",
    "name": "Hila Rao Shrine",
    "description": "",
    "x": 141.3437984375,
    "y": -141.105284375
  },
  {
    "id": "2877",
    "categoryId": "1925",
    "name": "Kaya Wan Shrine",
    "description": "",
    "x": 140.893209375,
    "y": -130.929828125
  },
  {
    "id": "2876",
    "categoryId": "1938",
    "name": "Wetland Stable",
    "description": "",
    "x": 141.8759625,
    "y": -130.7136296875
  },
  {
    "id": "2875",
    "categoryId": "1925",
    "name": "Namika Ozz Shrine",
    "description": "",
    "x": 139.8795390625,
    "y": -115.1658265625
  },
  {
    "id": "2874",
    "categoryId": "1925",
    "name": "Kuhn Sidajj Shrine",
    "description": "",
    "x": 128.288195625,
    "y": -97.629625
  },
  {
    "id": "2873",
    "categoryId": "1923",
    "name": "Woodland Tower",
    "description": "",
    "x": 141.8106921875,
    "y": -102.91078125
  },
  {
    "id": "2872",
    "categoryId": "1925",
    "name": "Maag Halan Shrine",
    "description": "",
    "x": 141.072403125,
    "y": -90.206078125
  },
  {
    "id": "2871",
    "categoryId": "1925",
    "name": "Keo Ruug Shrine",
    "description": "",
    "x": 135.3586703125,
    "y": -94.127859375
  },
  {
    "id": "2870",
    "categoryId": "1921",
    "name": "Korok Forest",
    "description": "",
    "x": 134.6873609375,
    "y": -94.602015625
  },
  {
    "id": "2869",
    "categoryId": "1925",
    "name": "Ketoh Wawai Shrine",
    "description": "",
    "x": 132.44375,
    "y": -79.25625
  },
  {
    "id": "2868",
    "categoryId": "1925",
    "name": "Ishto Soh Shrine",
    "description": "",
    "x": 112.5970453125,
    "y": -183.70278125
  },
  {
    "id": "2867",
    "categoryId": "1925",
    "name": "Ya Naga Shrine",
    "description": "",
    "x": 122.85677187499999,
    "y": -168.62685937499998
  },
  {
    "id": "2866",
    "categoryId": "1925",
    "name": "Owa Daim Shrine",
    "description": "",
    "x": 113.5464015625,
    "y": -164.253578125
  },
  {
    "id": "2865",
    "categoryId": "1923",
    "name": "Lake Tower",
    "description": "",
    "x": 127.50288203124998,
    "y": -174.27501562499998
  },
  {
    "id": "2864",
    "categoryId": "1923",
    "name": "Great Plateau Tower",
    "description": "",
    "x": 119.24945,
    "y": -154.48223437500002
  },
  {
    "id": "2863",
    "categoryId": "1925",
    "name": "Oman Au Shrine",
    "description": "",
    "x": 117.4927765625,
    "y": -151.65046875000002
  },
  {
    "id": "2862",
    "categoryId": "1925",
    "name": "Ja Baij Shrine",
    "description": "",
    "x": 121.0047640625,
    "y": -159.09659375
  },
  {
    "id": "2861",
    "categoryId": "1923",
    "name": "Central Tower",
    "description": "",
    "x": 115.677421875,
    "y": -134.906728125
  },
  {
    "id": "2860",
    "categoryId": "1925",
    "name": "Kaam Ya'tak Shrine",
    "description": "",
    "x": 112.880634375,
    "y": -139.2012390625
  },
  {
    "id": "2859",
    "categoryId": "1925",
    "name": "Katah Chuki Shrine",
    "description": "",
    "x": 118.0611890625,
    "y": -122.6224234375
  },
  {
    "id": "2858",
    "categoryId": "1925",
    "name": "Noya Neha Shrine",
    "description": "",
    "x": 113.1222921875,
    "y": -118.251803125
  },
  {
    "id": "2857",
    "categoryId": "1925",
    "name": "Saas Ko'sah Shrine",
    "description": "",
    "x": 125.68132499999999,
    "y": -109.88521875
  },
  {
    "id": "2856",
    "categoryId": "1925",
    "name": "Daag Chokah Shrine",
    "description": "",
    "x": 127.59249453125,
    "y": -89.598625
  },
  {
    "id": "2855",
    "categoryId": "1925",
    "name": "Qaza Tokki Shrine",
    "description": "",
    "x": 115.1640625,
    "y": -72.765625
  },
  {
    "id": "2854",
    "categoryId": "1925",
    "name": "Dila Maag Shrine",
    "description": "",
    "x": 99.953125,
    "y": -182.131109375
  },
  {
    "id": "2853",
    "categoryId": "1925",
    "name": "Suma Sahma Shrine",
    "description": "",
    "x": 105.847234375,
    "y": -181.89384375
  },
  {
    "id": "2852",
    "categoryId": "1925",
    "name": "Jee Noh Shrine",
    "description": "",
    "x": 99.980390625,
    "y": -165.85134375
  },
  {
    "id": "2851",
    "categoryId": "1925",
    "name": "Keh Namut Shrine",
    "description": "",
    "x": 105.572078125,
    "y": -159.10478125
  },
  {
    "id": "2850",
    "categoryId": "1925",
    "name": "Dah Kaso Shrine",
    "description": "",
    "x": 101.50446875,
    "y": -154.57853125
  },
  {
    "id": "2849",
    "categoryId": "1925",
    "name": "Rota Ooh Shrine",
    "description": "",
    "x": 103.589171875,
    "y": -148.465359375
  },
  {
    "id": "2848",
    "categoryId": "1938",
    "name": "Outskirt Stable",
    "description": "",
    "x": 105.351671875,
    "y": -147.828296875
  },
  {
    "id": "2847",
    "categoryId": "1924",
    "name": "Shrine of Resurrection",
    "description": "",
    "x": 110.777609375,
    "y": -157.37704687500002
  },
  {
    "id": "2846",
    "categoryId": "1925",
    "name": "Sheem Dagoze Shrine",
    "description": "",
    "x": 98.43098437500001,
    "y": -129.422351875
  },
  {
    "id": "2845",
    "categoryId": "1923",
    "name": "Ridgeland Tower",
    "description": "",
    "x": 100.5734375,
    "y": -115.9015625
  },
  {
    "id": "2844",
    "categoryId": "1925",
    "name": "Zalta Wa Shrine",
    "description": "",
    "x": 105.615390625,
    "y": -118.73053125
  },
  {
    "id": "2843",
    "categoryId": "1925",
    "name": "Monya Toma Shrine",
    "description": "",
    "x": 104.730625,
    "y": -104.971828125
  },
  {
    "id": "2842",
    "categoryId": "1925",
    "name": "Maag No'rah Shrine",
    "description": "",
    "x": 97.68009375,
    "y": -105.202828125
  },
  {
    "id": "2841",
    "categoryId": "1938",
    "name": "Serenne Stable",
    "description": "",
    "x": 103.634765625,
    "y": -99.889796875
  },
  {
    "id": "2840",
    "categoryId": "1925",
    "name": "Rona Kachta Shrine",
    "description": "",
    "x": 110.9875,
    "y": -86.42587499999999
  },
  {
    "id": "2839",
    "categoryId": "1925",
    "name": "Rin Oyaa Shrine",
    "description": "",
    "x": 101.118921875,
    "y": -88.08396875
  },
  {
    "id": "2838",
    "categoryId": "1938",
    "name": "Snowfield Stable",
    "description": "",
    "x": 102.142453125,
    "y": -87.8100625
  },
  {
    "id": "2837",
    "categoryId": "1925",
    "name": "Sha Gehma Shrine",
    "description": "",
    "x": 101.8694375,
    "y": -69.2651875
  },
  {
    "id": "2836",
    "categoryId": "1925",
    "name": "Misae Suma Shrine",
    "description": "",
    "x": 81.596875,
    "y": -187.07240625
  },
  {
    "id": "2835",
    "categoryId": "1925",
    "name": "Korsh O'hu Shrine",
    "description": "",
    "x": 85.979578125,
    "y": -171.936046875
  },
  {
    "id": "2834",
    "categoryId": "1925",
    "name": "Kay Noh Shrine",
    "description": "",
    "x": 84.09425,
    "y": -163.940265625
  },
  {
    "id": "2833",
    "categoryId": "1923",
    "name": "Wasteland Tower",
    "description": "",
    "x": 91.95568750000001,
    "y": -166.083125
  },
  {
    "id": "2832",
    "categoryId": "1938",
    "name": "Gerudo Canyon Stable",
    "description": "",
    "x": 84.1904375,
    "y": -162.777578125
  },
  {
    "id": "2831",
    "categoryId": "1925",
    "name": "Joloo Nah Shrine",
    "description": "",
    "x": 96.687375,
    "y": -154.17598437499998
  },
  {
    "id": "2830",
    "categoryId": "1925",
    "name": "Mijah Rokee Shrine",
    "description": "",
    "x": 85.125125,
    "y": -131.5272921875
  },
  {
    "id": "2829",
    "categoryId": "1925",
    "name": "Mogg Latan Shrine",
    "description": "",
    "x": 92.097125,
    "y": -135.2135015625
  },
  {
    "id": "2828",
    "categoryId": "1925",
    "name": "Toh Yahsa Shrine",
    "description": "",
    "x": 92.5453125,
    "y": -113.9203125
  },
  {
    "id": "2827",
    "categoryId": "1925",
    "name": "Shae Loya Shrine",
    "description": "",
    "x": 82.206875,
    "y": -121.2337734375
  },
  {
    "id": "2826",
    "categoryId": "1938",
    "name": "Tabantha Bridge Stable",
    "description": "",
    "x": 82.19425,
    "y": -119.44378125
  },
  {
    "id": "2825",
    "categoryId": "1925",
    "name": "Dunba Taag Shrine",
    "description": "",
    "x": 83.749015625,
    "y": -103.35732812500001
  },
  {
    "id": "2824",
    "categoryId": "1925",
    "name": "Goma Asaagh Shrine",
    "description": "",
    "x": 84.35509375000001,
    "y": -82.967765625
  },
  {
    "id": "2823",
    "categoryId": "1925",
    "name": "Gee Ha'rah Shrine",
    "description": "",
    "x": 90.805953125,
    "y": -92.7593125
  },
  {
    "id": "2822",
    "categoryId": "1923",
    "name": "Hebra Tower",
    "description": "",
    "x": 94.046875,
    "y": -96.21875
  },
  {
    "id": "2821",
    "categoryId": "1925",
    "name": "Lanno Kooh Shrine",
    "description": "",
    "x": 86.800859375,
    "y": -95.79237499999999
  },
  {
    "id": "2820",
    "categoryId": "1925",
    "name": "Rok Uwog Shrine",
    "description": "",
    "x": 90.859109375,
    "y": -77.61546875
  },
  {
    "id": "2819",
    "categoryId": "1925",
    "name": "Shada Naw Shrine",
    "description": "",
    "x": 81.151484375,
    "y": -77.677578125
  },
  {
    "id": "2818",
    "categoryId": "1925",
    "name": "Raqa Zunzo Shrine",
    "description": "",
    "x": 68.47562500000001,
    "y": -176.85715625
  },
  {
    "id": "2817",
    "categoryId": "1925",
    "name": "Daqo Chisay Shrine",
    "description": "",
    "x": 68.37009375,
    "y": -172.049328125
  },
  {
    "id": "2816",
    "categoryId": "1925",
    "name": "Dako Tah Shrine",
    "description": "",
    "x": 76.17496875,
    "y": -161.791859375
  },
  {
    "id": "2815",
    "categoryId": "1921",
    "name": "Gerudo Town",
    "description": "",
    "x": 68.078125,
    "y": -173.546875
  },
  {
    "id": "2814",
    "categoryId": "1925",
    "name": "Sasa Kai Shrine",
    "description": "",
    "x": 72.370515625,
    "y": -158.529265625
  },
  {
    "id": "2813",
    "categoryId": "1925",
    "name": "Sho Dantu Shrine",
    "description": "",
    "x": 66.89667187500001,
    "y": -153.82860937499998
  },
  {
    "id": "2812",
    "categoryId": "1925",
    "name": "Kuh Takkar Shrine",
    "description": "",
    "x": 79.81854687500001,
    "y": -147.09046875
  },
  {
    "id": "2811",
    "categoryId": "1923",
    "name": "Gerudo Tower",
    "description": "",
    "x": 70.71875,
    "y": -156.571875
  },
  {
    "id": "2810",
    "categoryId": "1925",
    "name": "Keeha Yoog Shrine",
    "description": "",
    "x": 67.8053125,
    "y": -139.19309375
  },
  {
    "id": "2809",
    "categoryId": "1923",
    "name": "Tabantha Tower",
    "description": "",
    "x": 71.5351875,
    "y": -112.52867656250001
  },
  {
    "id": "2808",
    "categoryId": "1925",
    "name": "Tena Ko'sah Shrine",
    "description": "",
    "x": 73.838171875,
    "y": -121.007821875
  },
  {
    "id": "2807",
    "categoryId": "1925",
    "name": "Bareeda Naag Shrine",
    "description": "",
    "x": 71.60959375,
    "y": -104.306609375
  },
  {
    "id": "2806",
    "categoryId": "1925",
    "name": "Akh Va'quot Shrine",
    "description": "",
    "x": 70.87448437500001,
    "y": -100.5359375
  },
  {
    "id": "2805",
    "categoryId": "1938",
    "name": "Rito Stable",
    "description": "",
    "x": 77.131703125,
    "y": -100.537109375
  },
  {
    "id": "2804",
    "categoryId": "1921",
    "name": "Rito Village",
    "description": "",
    "x": 71.467046875,
    "y": -99.756109375
  },
  {
    "id": "2803",
    "categoryId": "1925",
    "name": "Sha Warvo Shrine",
    "description": "",
    "x": 68.277546875,
    "y": -93.51724999999999
  },
  {
    "id": "2802",
    "categoryId": "1925",
    "name": "Mozo Shenno Shrine",
    "description": "",
    "x": 71.33265625,
    "y": -80.527203125
  },
  {
    "id": "2801",
    "categoryId": "1925",
    "name": "Hawa Koth Shrine",
    "description": "",
    "x": 52.25884375,
    "y": -186.96168749999998
  },
  {
    "id": "2800",
    "categoryId": "1925",
    "name": "Tho Kayu Shrine",
    "description": "",
    "x": 53.0289375,
    "y": -171.75048437499998
  },
  {
    "id": "2799",
    "categoryId": "1925",
    "name": "Kema Zoos Shrine",
    "description": "",
    "x": 54.976093750000004,
    "y": -158.76234375
  },
  {
    "id": "2798",
    "categoryId": "1925",
    "name": "Kema Kosassa Shrine",
    "description": "",
    "x": 55.226671874999994,
    "y": -142.1401515625
  },
  {
    "id": "2797",
    "categoryId": "1925",
    "name": "Kah Okeo Shrine",
    "description": "",
    "x": 63.603140624999995,
    "y": -121.528128125
  },
  {
    "id": "2796",
    "categoryId": "1925",
    "name": "Voo Lota Shrine",
    "description": "",
    "x": 65.25996875,
    "y": -101.08615625
  },
  {
    "id": "2795",
    "categoryId": "1925",
    "name": "Maka Rah Shrine",
    "description": "",
    "x": 64.580703125,
    "y": -88.808484375
  },
  {
    "id": "2794",
    "categoryId": "1925",
    "name": "Hia Miu Shrine",
    "description": "",
    "x": 58.53096875,
    "y": -68.587203125
  },
  {
    "id": "2793",
    "categoryId": "1925",
    "name": "To Quomo Shrine",
    "description": "",
    "x": 65.154265625,
    "y": -70.004734375
  },
  {
    "id": "2532",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 198.9676875,
    "y": -165.588125
  },
  {
    "id": "2531",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 191.806171875,
    "y": -174.457203125
  },
  {
    "id": "2530",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 192.23403125,
    "y": -168.440125
  },
  {
    "id": "2529",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 193.80990624999998,
    "y": -163.474578125
  },
  {
    "id": "2528",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 198.883203125,
    "y": -167.37925
  },
  {
    "id": "2527",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 198.601515625,
    "y": -164.1955625
  },
  {
    "id": "2526",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 200.854875,
    "y": -165.12900000000002
  },
  {
    "id": "2525",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 197.35790624999998,
    "y": -150.38931250000002
  },
  {
    "id": "2524",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 200.111609375,
    "y": -157.92928125
  },
  {
    "id": "2523",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 194.91696875,
    "y": -153.86978125000002
  },
  {
    "id": "2522",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 194.7869375,
    "y": -158.953453125
  },
  {
    "id": "2521",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 191.874,
    "y": -145.849546875
  },
  {
    "id": "2520",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 198.83496875,
    "y": -143.984140625
  },
  {
    "id": "2519",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 198.29878125,
    "y": -143.85953125
  },
  {
    "id": "2518",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 193.6165,
    "y": -135.244921875
  },
  {
    "id": "2517",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 195.1065625,
    "y": -129.22657734375
  },
  {
    "id": "2516",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 192.75684375,
    "y": -131.0620234375
  },
  {
    "id": "2515",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 197.572671875,
    "y": -135.56208750000002
  },
  {
    "id": "2514",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 192.607265625,
    "y": -128.94251296875
  },
  {
    "id": "2513",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 199.445875,
    "y": -138.12333125
  },
  {
    "id": "2512",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 194.63217187499998,
    "y": -137.81595
  },
  {
    "id": "2511",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 191.15965625,
    "y": -117.6567828125
  },
  {
    "id": "2510",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 191.75634374999998,
    "y": -124.6127734375
  },
  {
    "id": "2509",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 192.754078125,
    "y": -118.6879984375
  },
  {
    "id": "2508",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 191.621765625,
    "y": -120.827284375
  },
  {
    "id": "2507",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 192.63446875,
    "y": -121.6161453125
  },
  {
    "id": "2506",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 200.13189062499998,
    "y": -118.0308015625
  },
  {
    "id": "2505",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 194.13646875,
    "y": -124.6822828125
  },
  {
    "id": "2504",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 194.239890625,
    "y": -112.4022171875
  },
  {
    "id": "2503",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 201.40375,
    "y": -119.45265625
  },
  {
    "id": "2502",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 1",
    "x": 195.701875,
    "y": -117.11510625
  },
  {
    "id": "2501",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 196.074671875,
    "y": -104.1234375
  },
  {
    "id": "2500",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 201.30796875,
    "y": -100.22921875
  },
  {
    "id": "2499",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 192.036203125,
    "y": -100.55525
  },
  {
    "id": "2498",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 201.547765625,
    "y": -106.8278125
  },
  {
    "id": "2497",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 191.09703125,
    "y": -108.39262500000001
  },
  {
    "id": "2496",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 192.13371875,
    "y": -106.895859375
  },
  {
    "id": "2495",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 201.420375,
    "y": -112.327734375
  },
  {
    "id": "2494",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 201.4825625,
    "y": -111.760453125
  },
  {
    "id": "2493",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 200.412640625,
    "y": -99.23521875
  },
  {
    "id": "2492",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 191.996609375,
    "y": -102.570875
  },
  {
    "id": "2491",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 198.44896875,
    "y": -86.693671875
  },
  {
    "id": "2490",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 193.32878125000002,
    "y": -88.30615625
  },
  {
    "id": "2489",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 190.634421875,
    "y": -85.245203125
  },
  {
    "id": "2488",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 195.782671875,
    "y": -89.89815625
  },
  {
    "id": "2487",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 196.7005,
    "y": -85.47525
  },
  {
    "id": "2486",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 198.796015625,
    "y": -95.212875
  },
  {
    "id": "2485",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 192.14771875,
    "y": -83.6765625
  },
  {
    "id": "2484",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 203.242203125,
    "y": -76.43365625
  },
  {
    "id": "2483",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 197.200546875,
    "y": -78.2671875
  },
  {
    "id": "2482",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 195.875890625,
    "y": -78.338
  },
  {
    "id": "2481",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 203.26871875,
    "y": -79.65284375
  },
  {
    "id": "2480",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 197.108796875,
    "y": -75.809078125
  },
  {
    "id": "2479",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 198.369671875,
    "y": -78.5564375
  },
  {
    "id": "2478",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 177.53775000000002,
    "y": -187.75493749999998
  },
  {
    "id": "2477",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 1",
    "x": 177.616296875,
    "y": -178.06296875
  },
  {
    "id": "2476",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 175.256328125,
    "y": -185.09729687499998
  },
  {
    "id": "2475",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 181.78028125,
    "y": -176.7793125
  },
  {
    "id": "2474",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 180.6110625,
    "y": -185.086515625
  },
  {
    "id": "2473",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 187.32209375,
    "y": -184.545234375
  },
  {
    "id": "2472",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 184.87146875,
    "y": -178.90975
  },
  {
    "id": "2471",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 179.39964062500002,
    "y": -180.168640625
  },
  {
    "id": "2470",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 180.306546875,
    "y": -163.1445625
  },
  {
    "id": "2469",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 177.132296875,
    "y": -162.841484375
  },
  {
    "id": "2468",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 181.45225,
    "y": -165.348234375
  },
  {
    "id": "2467",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 177.19875,
    "y": -165.54343749999998
  },
  {
    "id": "2466",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 178.465859375,
    "y": -172.50690625
  },
  {
    "id": "2465",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 182.93934375,
    "y": -169.06846875
  },
  {
    "id": "2464",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 185.62435937499998,
    "y": -165.710828125
  },
  {
    "id": "2463",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 176.202046875,
    "y": -173.07264062500002
  },
  {
    "id": "2462",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 188.95440625,
    "y": -160.761390625
  },
  {
    "id": "2461",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 187.120703125,
    "y": -161.20600000000002
  },
  {
    "id": "2460",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 175.3286875,
    "y": -159.526203125
  },
  {
    "id": "2459",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 179.21521875,
    "y": -150.437546875
  },
  {
    "id": "2458",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 177.56157812499998,
    "y": -151.295859375
  },
  {
    "id": "2457",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 187.34265625,
    "y": -147.831203125
  },
  {
    "id": "2456",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 177.6689375,
    "y": -153.114125
  },
  {
    "id": "2455",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 181.63971875,
    "y": -145.97359375
  },
  {
    "id": "2454",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 183.0935,
    "y": -154.728484375
  },
  {
    "id": "2453",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 177.4738125,
    "y": -156.576421875
  },
  {
    "id": "2452",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 178.453625,
    "y": -152.14445312499998
  },
  {
    "id": "2451",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 188.885,
    "y": -152.3209375
  },
  {
    "id": "2450",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 185.95610937499998,
    "y": -158.360734375
  },
  {
    "id": "2449",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 182.306859375,
    "y": -157.941578125
  },
  {
    "id": "2448",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 1",
    "x": 183.2658125,
    "y": -149.50176562500002
  },
  {
    "id": "2447",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 186.464375,
    "y": -146.064390625
  },
  {
    "id": "2446",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 181.93734375,
    "y": -136.6061390625
  },
  {
    "id": "2445",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 183.655359375,
    "y": -137.78624374999998
  },
  {
    "id": "2444",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 181.611578125,
    "y": -136.183553125
  },
  {
    "id": "2443",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 180.859875,
    "y": -143.356625
  },
  {
    "id": "2442",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 189.747921875,
    "y": -138.87325625
  },
  {
    "id": "2441",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 179.111625,
    "y": -138.262825
  },
  {
    "id": "2440",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 186.14473437499998,
    "y": -137.650415625
  },
  {
    "id": "2439",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 179.621,
    "y": -128.35286859375
  },
  {
    "id": "2438",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 1",
    "x": 178.1056875,
    "y": -128.37001375
  },
  {
    "id": "2437",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 1",
    "x": 188.22368749999998,
    "y": -133.5040140625
  },
  {
    "id": "2436",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 1",
    "x": 177.075890625,
    "y": -133.0776140625
  },
  {
    "id": "2435",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 183.01,
    "y": -122.0064328125
  },
  {
    "id": "2434",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 179.89840625,
    "y": -119.96479375
  },
  {
    "id": "2433",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 189.884625,
    "y": -114.5845609375
  },
  {
    "id": "2432",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 176.795015625,
    "y": -127.728145625
  },
  {
    "id": "2431",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 188.8360625,
    "y": -116.9963546875
  },
  {
    "id": "2430",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 176.175609375,
    "y": -125.37985
  },
  {
    "id": "2429",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 179.93618750000002,
    "y": -119.8825734375
  },
  {
    "id": "2428",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 183.113859375,
    "y": -123.6755640625
  },
  {
    "id": "2427",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 179.4370625,
    "y": -123.919990625
  },
  {
    "id": "2426",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 1",
    "x": 183.71696875,
    "y": -113.6887140625
  },
  {
    "id": "2425",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 184.32453125,
    "y": -112.24003125
  },
  {
    "id": "2424",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 176.633625,
    "y": -107.760484375
  },
  {
    "id": "2423",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 175.033671875,
    "y": -109.183625
  },
  {
    "id": "2422",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 179.52642187499998,
    "y": -103.25325000000001
  },
  {
    "id": "2421",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 186.223515625,
    "y": -110.34826562500001
  },
  {
    "id": "2420",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 1",
    "x": 178.701828125,
    "y": -96.74515625000001
  },
  {
    "id": "2419",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 179.503625,
    "y": -105.79551562500001
  },
  {
    "id": "2418",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 188.66482812499999,
    "y": -107.06226562500001
  },
  {
    "id": "2417",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 178.590578125,
    "y": -104.12896875
  },
  {
    "id": "2416",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 179.385546875,
    "y": -103.39707812500001
  },
  {
    "id": "2415",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 178.13551562499998,
    "y": -112.19959374999999
  },
  {
    "id": "2414",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 185.95925,
    "y": -101.696171875
  },
  {
    "id": "2413",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 179.4393125,
    "y": -105.67792187500001
  },
  {
    "id": "2412",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 181.24009375,
    "y": -108.026140625
  },
  {
    "id": "2411",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 186.325625,
    "y": -90.137265625
  },
  {
    "id": "2410",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 181.69671875,
    "y": -88.411671875
  },
  {
    "id": "2409",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 179.921,
    "y": -84.202125
  },
  {
    "id": "2408",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 186.385453125,
    "y": -82.922125
  },
  {
    "id": "2407",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 185.231,
    "y": -95.6981875
  },
  {
    "id": "2406",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 182.37446875,
    "y": -95.541546875
  },
  {
    "id": "2405",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 1",
    "x": 188.586625,
    "y": -90.93964062500001
  },
  {
    "id": "2404",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 180.68824999999998,
    "y": -91.825109375
  },
  {
    "id": "2403",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 186.231125,
    "y": -86.16465625000001
  },
  {
    "id": "2402",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 181.993984375,
    "y": -72.03321875
  },
  {
    "id": "2401",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 187.057921875,
    "y": -75.47625
  },
  {
    "id": "2400",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 177.25928125000002,
    "y": -75.9945625
  },
  {
    "id": "2399",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 190.43435937499999,
    "y": -78.819046875
  },
  {
    "id": "2398",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 177.67159375,
    "y": -79.97395312500001
  },
  {
    "id": "2397",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 182.627546875,
    "y": -75.27660937499999
  },
  {
    "id": "2396",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 183.825671875,
    "y": -80.39170312499999
  },
  {
    "id": "2395",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 179.983796875,
    "y": -71.91862499999999
  },
  {
    "id": "2394",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 187.585265625,
    "y": -74.57468750000001
  },
  {
    "id": "2393",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 180.345359375,
    "y": -79.877515625
  },
  {
    "id": "2392",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 176.060546875,
    "y": -70.43154687500001
  },
  {
    "id": "2391",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 159.75440625,
    "y": -177.44289062500002
  },
  {
    "id": "2390",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 163.85125,
    "y": -175.315171875
  },
  {
    "id": "2389",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 174.38623437500002,
    "y": -180.81534375
  },
  {
    "id": "2388",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 172.634109375,
    "y": -185.05890625
  },
  {
    "id": "2387",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 161.437203125,
    "y": -183.1865625
  },
  {
    "id": "2386",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 161.925171875,
    "y": -179.201671875
  },
  {
    "id": "2385",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 173.928625,
    "y": -181.54821875
  },
  {
    "id": "2384",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 167.18984375,
    "y": -187.779828125
  },
  {
    "id": "2383",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 167.988140625,
    "y": -184.292375
  },
  {
    "id": "2382",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 169.191140625,
    "y": -177.96560937499999
  },
  {
    "id": "2381",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 172.32753125,
    "y": -181.94942187499998
  },
  {
    "id": "2380",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 174.114703125,
    "y": -174.96815625
  },
  {
    "id": "2379",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 174.740515625,
    "y": -163.50228125
  },
  {
    "id": "2378",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 160.106703125,
    "y": -160.69890625
  },
  {
    "id": "2377",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 172.747828125,
    "y": -162.107859375
  },
  {
    "id": "2376",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 160.873671875,
    "y": -170.595296875
  },
  {
    "id": "2375",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 171.92681249999998,
    "y": -165.37384375
  },
  {
    "id": "2374",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 170.408328125,
    "y": -164.649265625
  },
  {
    "id": "2373",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 164.9775,
    "y": -163.992171875
  },
  {
    "id": "2372",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 160.808140625,
    "y": -169.0245625
  },
  {
    "id": "2371",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 1",
    "x": 165.559859375,
    "y": -167.23784375
  },
  {
    "id": "2370",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 162.08948437499998,
    "y": -167.604625
  },
  {
    "id": "2369",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 163.69176562500002,
    "y": -169.5620625
  },
  {
    "id": "2368",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 163.99234375,
    "y": -165.111484375
  },
  {
    "id": "2367",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 172.920546875,
    "y": -169.927625
  },
  {
    "id": "2366",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 166.82546875,
    "y": -160.865515625
  },
  {
    "id": "2365",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 172.3175,
    "y": -161.132921875
  },
  {
    "id": "2364",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 164.2604375,
    "y": -154.974484375
  },
  {
    "id": "2363",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 173.0639375,
    "y": -155.578546875
  },
  {
    "id": "2362",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 160.16414062500002,
    "y": -146.88365625
  },
  {
    "id": "2361",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 166.997703125,
    "y": -156.19065625000002
  },
  {
    "id": "2360",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 163.614296875,
    "y": -153.13039062500002
  },
  {
    "id": "2359",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 170.272484375,
    "y": -146.202265625
  },
  {
    "id": "2358",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 167.478390625,
    "y": -147.649671875
  },
  {
    "id": "2357",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 169.19009375000002,
    "y": -145.328078125
  },
  {
    "id": "2356",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 163.56303125,
    "y": -151.462828125
  },
  {
    "id": "2355",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 164.418375,
    "y": -156.56268749999998
  },
  {
    "id": "2354",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 167.241140625,
    "y": -152.555078125
  },
  {
    "id": "2353",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 162.488828125,
    "y": -149.460625
  },
  {
    "id": "2352",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 173.7104375,
    "y": -149.899578125
  },
  {
    "id": "2351",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 161.810875,
    "y": -144.16776562500002
  },
  {
    "id": "2350",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 171.280421875,
    "y": -133.45072031249998
  },
  {
    "id": "2349",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 169.182703125,
    "y": -133.7967828125
  },
  {
    "id": "2348",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 161.583703125,
    "y": -140.34379218750001
  },
  {
    "id": "2347",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 162.994765625,
    "y": -139.3492625
  },
  {
    "id": "2346",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 165.649171875,
    "y": -141.2706078125
  },
  {
    "id": "2345",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 166.654515625,
    "y": -135.21400625
  },
  {
    "id": "2344",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 173.74478125000002,
    "y": -133.20000625
  },
  {
    "id": "2343",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 161.31909374999998,
    "y": -138.6070125
  },
  {
    "id": "2342",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 160.5904375,
    "y": -130.838478125
  },
  {
    "id": "2341",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 163.758234375,
    "y": -138.93158281249998
  },
  {
    "id": "2340",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 173.172390625,
    "y": -136.091734375
  },
  {
    "id": "2339",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 165.16078125,
    "y": -133.83041875
  },
  {
    "id": "2338",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 1",
    "x": 169.950859375,
    "y": -136.7934640625
  },
  {
    "id": "2337",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 170.639328125,
    "y": -142.13015625
  },
  {
    "id": "2336",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 171.616625,
    "y": -120.1729375
  },
  {
    "id": "2335",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 170.90856250000002,
    "y": -125.24371875
  },
  {
    "id": "2334",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 163.54696875,
    "y": -116.747690625
  },
  {
    "id": "2333",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 165.9338125,
    "y": -121.5606
  },
  {
    "id": "2332",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 169.64892187499998,
    "y": -127.9797081875
  },
  {
    "id": "2331",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 169.496703125,
    "y": -112.8254515625
  },
  {
    "id": "2330",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 167.335953125,
    "y": -124.679978125
  },
  {
    "id": "2329",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 170.245484375,
    "y": -100.667640625
  },
  {
    "id": "2328",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 166.727703125,
    "y": -106.25637499999999
  },
  {
    "id": "2327",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 165.613609375,
    "y": -102.7875625
  },
  {
    "id": "2326",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 166.142765625,
    "y": -108.59796875
  },
  {
    "id": "2325",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 163.52810937499999,
    "y": -99.512109375
  },
  {
    "id": "2324",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 165.628046875,
    "y": -108.782015625
  },
  {
    "id": "2323",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 170.985421875,
    "y": -101.81393750000001
  },
  {
    "id": "2322",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 167.1324375,
    "y": -107.6205625
  },
  {
    "id": "2321",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 162.055484375,
    "y": -107.968203125
  },
  {
    "id": "2320",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 164.172296875,
    "y": -110.292859375
  },
  {
    "id": "2319",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 163.4149375,
    "y": -103.53928125
  },
  {
    "id": "2318",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 171.00459375,
    "y": -106.65100000000001
  },
  {
    "id": "2317",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 165.880171875,
    "y": -100.8359375
  },
  {
    "id": "2316",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 161.91778124999996,
    "y": -95.038203125
  },
  {
    "id": "2315",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 159.55337500000002,
    "y": -94.04845312500001
  },
  {
    "id": "2314",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 160.20278125,
    "y": -84.9153125
  },
  {
    "id": "2313",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 164.8105625,
    "y": -95.69725
  },
  {
    "id": "2312",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 169.623390625,
    "y": -95.705109375
  },
  {
    "id": "2311",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 160.611171875,
    "y": -72.16318749999999
  },
  {
    "id": "2310",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 162.304734375,
    "y": -81.002484375
  },
  {
    "id": "2309",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 169.603625,
    "y": -73.756484375
  },
  {
    "id": "2308",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 162.906125,
    "y": -70.601171875
  },
  {
    "id": "2307",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 166.592390625,
    "y": -78.398390625
  },
  {
    "id": "2306",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 167.86034375,
    "y": -71.864421875
  },
  {
    "id": "2305",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 151.65221875,
    "y": -186.203703125
  },
  {
    "id": "2304",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 149.532796875,
    "y": -182.743140625
  },
  {
    "id": "2303",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 153.939859375,
    "y": -177.43190625
  },
  {
    "id": "2302",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 156.760765625,
    "y": -184.18479687500002
  },
  {
    "id": "2301",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 153.39834374999998,
    "y": -188.8083125
  },
  {
    "id": "2300",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 156.18334375,
    "y": -178.3436875
  },
  {
    "id": "2299",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 155.899015625,
    "y": -175.04796875
  },
  {
    "id": "2298",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 158.37103125,
    "y": -175.02221874999998
  },
  {
    "id": "2297",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 144.78984375,
    "y": -184.577265625
  },
  {
    "id": "2296",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 152.25760937500002,
    "y": -183.144390625
  },
  {
    "id": "2295",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 144.4861875,
    "y": -178.855796875
  },
  {
    "id": "2294",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 143.813546875,
    "y": -178.909109375
  },
  {
    "id": "2293",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 155.46565625,
    "y": -185.59340625
  },
  {
    "id": "2292",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 151.314328125,
    "y": -180.663828125
  },
  {
    "id": "2291",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 1",
    "x": 148.711890625,
    "y": -175.01059375
  },
  {
    "id": "2290",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 155.080640625,
    "y": -181.915453125
  },
  {
    "id": "2289",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 149.979890625,
    "y": -177.98054687500002
  },
  {
    "id": "2288",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 149.478453125,
    "y": -186.616625
  },
  {
    "id": "2287",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 156.1159375,
    "y": -177.33835937499998
  },
  {
    "id": "2286",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 147.02165625,
    "y": -183.064140625
  },
  {
    "id": "2285",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 150.64803125,
    "y": -183.177625
  },
  {
    "id": "2284",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 156.453703125,
    "y": -186.46915625
  },
  {
    "id": "2283",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 1",
    "x": 146.6890625,
    "y": -175.741109375
  },
  {
    "id": "2282",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 157.022359375,
    "y": -180.369875
  },
  {
    "id": "2281",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 158.25845312500002,
    "y": -168.070328125
  },
  {
    "id": "2280",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 152.41500000000002,
    "y": -173.286203125
  },
  {
    "id": "2279",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 155.71631250000002,
    "y": -173.794796875
  },
  {
    "id": "2278",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 150.854328125,
    "y": -165.044515625
  },
  {
    "id": "2277",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 148.395140625,
    "y": -166.03217187500002
  },
  {
    "id": "2276",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 149.59225,
    "y": -163.585125
  },
  {
    "id": "2275",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 148.683171875,
    "y": -166.33518750000002
  },
  {
    "id": "2274",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 146.5725,
    "y": -166.69859375
  },
  {
    "id": "2273",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 149.453125,
    "y": -170.95384375
  },
  {
    "id": "2272",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 146.334296875,
    "y": -172.531078125
  },
  {
    "id": "2271",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 154.291515625,
    "y": -164.36904687499998
  },
  {
    "id": "2270",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 158.25825,
    "y": -171.41475
  },
  {
    "id": "2269",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 1 - Invisible: 0",
    "x": 157.47162500000002,
    "y": -165.792734375
  },
  {
    "id": "2268",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 158.72859375000002,
    "y": -169.163734375
  },
  {
    "id": "2267",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 157.334765625,
    "y": -160.0519375
  },
  {
    "id": "2266",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 151.707375,
    "y": -156.90754687499998
  },
  {
    "id": "2265",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 156.09896874999998,
    "y": -144.846484375
  },
  {
    "id": "2264",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 158.582078125,
    "y": -144.59459375
  },
  {
    "id": "2263",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 144.394359375,
    "y": -155.863703125
  },
  {
    "id": "2262",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 158.20712500000002,
    "y": -147.0775625
  },
  {
    "id": "2261",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 155.35046875,
    "y": -152.13578125
  },
  {
    "id": "2260",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 154.18907812499998,
    "y": -146.092796875
  },
  {
    "id": "2259",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 149.50821875,
    "y": -154.255359375
  },
  {
    "id": "2258",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 147.454859375,
    "y": -158.34653125
  },
  {
    "id": "2257",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 153.60889062500002,
    "y": -149.50453125
  },
  {
    "id": "2256",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 155.3214375,
    "y": -158.025828125
  },
  {
    "id": "2255",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 147.66342187499998,
    "y": -156.923859375
  },
  {
    "id": "2254",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 145.213953125,
    "y": -157.5240625
  },
  {
    "id": "2253",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 156.0296875,
    "y": -144.450390625
  },
  {
    "id": "2252",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 148.21003125,
    "y": -148.802515625
  },
  {
    "id": "2251",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 158.30490625,
    "y": -145.358296875
  },
  {
    "id": "2250",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 155.176671875,
    "y": -146.541796875
  },
  {
    "id": "2249",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 152.27407812500002,
    "y": -148.268546875
  },
  {
    "id": "2248",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 144.258671875,
    "y": -148.596140625
  },
  {
    "id": "2247",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 156.234875,
    "y": -143.5031484375
  },
  {
    "id": "2246",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 155.74690625,
    "y": -143.0563140625
  },
  {
    "id": "2245",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 155.13067187500002,
    "y": -129.33872125
  },
  {
    "id": "2244",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 145.43971875,
    "y": -136.6808640625
  },
  {
    "id": "2243",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 150.60153125,
    "y": -136.72438125
  },
  {
    "id": "2242",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 152.93367187500002,
    "y": -140.6199328125
  },
  {
    "id": "2241",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 150.41775,
    "y": -130.11568281249998
  },
  {
    "id": "2240",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 1",
    "x": 152.893546875,
    "y": -129.78376874999998
  },
  {
    "id": "2239",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 158.952015625,
    "y": -135.0612125
  },
  {
    "id": "2238",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 1",
    "x": 154.337546875,
    "y": -138.330075
  },
  {
    "id": "2237",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 1",
    "x": 148.53084375,
    "y": -135.86046249999998
  },
  {
    "id": "2236",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 156.63628125,
    "y": -119.629728125
  },
  {
    "id": "2235",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 149.84434375,
    "y": -114.6195703125
  },
  {
    "id": "2234",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 147.76840625,
    "y": -116.9492109375
  },
  {
    "id": "2233",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 145.00829687499998,
    "y": -124.626646875
  },
  {
    "id": "2232",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 145.250234375,
    "y": -121.0588953125
  },
  {
    "id": "2231",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 149.676234375,
    "y": -126.2354859375
  },
  {
    "id": "2230",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 154.482375,
    "y": -114.529915625
  },
  {
    "id": "2229",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 146.52346875,
    "y": -126.9465765625
  },
  {
    "id": "2228",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 1",
    "x": 149.95239062500002,
    "y": -114.9845453125
  },
  {
    "id": "2227",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 153.51446875,
    "y": -119.4812953125
  },
  {
    "id": "2226",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 146.711265625,
    "y": -109.99015625
  },
  {
    "id": "2225",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 154.3680625,
    "y": -101.17051562500001
  },
  {
    "id": "2224",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 149.5188125,
    "y": -108.29415625
  },
  {
    "id": "2223",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 150.06287500000002,
    "y": -100.503046875
  },
  {
    "id": "2222",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 152.130171875,
    "y": -99.29353125
  },
  {
    "id": "2221",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 150.295234375,
    "y": -103.87390625
  },
  {
    "id": "2220",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 158.48209375,
    "y": -99.364734375
  },
  {
    "id": "2219",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 158.31484375,
    "y": -108.9729375
  },
  {
    "id": "2218",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 148.04128125,
    "y": -110.446171875
  },
  {
    "id": "2217",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 143.75204687500002,
    "y": -103.562203125
  },
  {
    "id": "2216",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 157.18460937499998,
    "y": -90.49003125
  },
  {
    "id": "2215",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 154.958578125,
    "y": -88.094703125
  },
  {
    "id": "2214",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 153.500265625,
    "y": -82.0703125
  },
  {
    "id": "2213",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 152.02890625,
    "y": -95.32026562499999
  },
  {
    "id": "2212",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 153.738,
    "y": -92.93029687500001
  },
  {
    "id": "2211",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 157.465375,
    "y": -85.04521875
  },
  {
    "id": "2210",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 157.149296875,
    "y": -89.4836875
  },
  {
    "id": "2209",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 153.90828125000002,
    "y": -87.923828125
  },
  {
    "id": "2208",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 152.904359375,
    "y": -89.32421875
  },
  {
    "id": "2207",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 152.20489062500002,
    "y": -79.428921875
  },
  {
    "id": "2206",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 145.865671875,
    "y": -69.51909375
  },
  {
    "id": "2205",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 153.236015625,
    "y": -70.79640624999999
  },
  {
    "id": "2204",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 128.218088125,
    "y": -187.22546875
  },
  {
    "id": "2203",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 134.51182968749998,
    "y": -188.13942187499998
  },
  {
    "id": "2202",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 129.07866765625,
    "y": -178.341765625
  },
  {
    "id": "2201",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 138.93625,
    "y": -179.200984375
  },
  {
    "id": "2200",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 132.15785,
    "y": -185.32735937500001
  },
  {
    "id": "2199",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 143.051609375,
    "y": -180.673484375
  },
  {
    "id": "2198",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 131.380040625,
    "y": -182.500234375
  },
  {
    "id": "2197",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 142.21285781249998,
    "y": -187.9576875
  },
  {
    "id": "2196",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 133.735890625,
    "y": -184.908109375
  },
  {
    "id": "2195",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 136.1635375,
    "y": -185.51496875
  },
  {
    "id": "2194",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 139.60770156249998,
    "y": -178.673125
  },
  {
    "id": "2193",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 138.8675515625,
    "y": -175.99078125
  },
  {
    "id": "2192",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 136.08698125,
    "y": -186.82848437500002
  },
  {
    "id": "2191",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 132.2456171875,
    "y": -179.399828125
  },
  {
    "id": "2190",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 1",
    "x": 132.1503421875,
    "y": -187.95325
  },
  {
    "id": "2189",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 137.9904859375,
    "y": -185.981859375
  },
  {
    "id": "2188",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 132.35976718749998,
    "y": -182.74671875
  },
  {
    "id": "2187",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 128.88585859375002,
    "y": -177.21910937500002
  },
  {
    "id": "2186",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 141.9244859375,
    "y": -185.73167187500002
  },
  {
    "id": "2185",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 129.52126359375,
    "y": -187.71168749999998
  },
  {
    "id": "2184",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 134.345525,
    "y": -175.67396875
  },
  {
    "id": "2183",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 132.481809375,
    "y": -188.92846875
  },
  {
    "id": "2182",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 138.08944843749998,
    "y": -184.486296875
  },
  {
    "id": "2181",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 1",
    "x": 140.5948890625,
    "y": -176.638375
  },
  {
    "id": "2180",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 140.889740625,
    "y": -174.957828125
  },
  {
    "id": "2179",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 137.0820234375,
    "y": -174.993796875
  },
  {
    "id": "2178",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 128.53554203125,
    "y": -160.85509374999998
  },
  {
    "id": "2177",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 129.03477328125,
    "y": -164.10390625
  },
  {
    "id": "2176",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 133.78777812500002,
    "y": -168.110046875
  },
  {
    "id": "2175",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 133.32231093750002,
    "y": -172.228578125
  },
  {
    "id": "2174",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 137.7682,
    "y": -164.02978124999998
  },
  {
    "id": "2173",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 141.027428125,
    "y": -166.04025000000001
  },
  {
    "id": "2172",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 141.90016718750002,
    "y": -165.426609375
  },
  {
    "id": "2171",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 134.263590625,
    "y": -161.6073125
  },
  {
    "id": "2170",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 140.353746875,
    "y": -168.080234375
  },
  {
    "id": "2169",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 142.1919765625,
    "y": -162.27384375
  },
  {
    "id": "2168",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 132.38166875000002,
    "y": -165.57828125
  },
  {
    "id": "2167",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 131.35274687499998,
    "y": -160.34467187500002
  },
  {
    "id": "2166",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 132.4420640625,
    "y": -163.209
  },
  {
    "id": "2165",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 140.73783281250002,
    "y": -160.64746875
  },
  {
    "id": "2164",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 134.534521875,
    "y": -172.89696874999998
  },
  {
    "id": "2163",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 131.50268281249998,
    "y": -172.818796875
  },
  {
    "id": "2162",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 130.4054671875,
    "y": -174.58934375
  },
  {
    "id": "2161",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 1",
    "x": 130.652065625,
    "y": -173.36587500000002
  },
  {
    "id": "2160",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 137.131753125,
    "y": -169.848984375
  },
  {
    "id": "2159",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 139.8076859375,
    "y": -164.681328125
  },
  {
    "id": "2158",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 130.5511921875,
    "y": -171.48904687499999
  },
  {
    "id": "2157",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 136.0998375,
    "y": -166.947265625
  },
  {
    "id": "2156",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 1",
    "x": 135.4212140625,
    "y": -161.58003125
  },
  {
    "id": "2155",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 1",
    "x": 137.45209375000002,
    "y": -165.63720312499998
  },
  {
    "id": "2154",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 1",
    "x": 137.52011249999998,
    "y": -165.653578125
  },
  {
    "id": "2153",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 138.61245937500001,
    "y": -167.05346874999998
  },
  {
    "id": "2152",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 137.5365890625,
    "y": -172.84142187499998
  },
  {
    "id": "2151",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 139.00058124999998,
    "y": -174.216171875
  },
  {
    "id": "2150",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 131.1386,
    "y": -168.6853125
  },
  {
    "id": "2149",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 132.6184421875,
    "y": -146.8249375
  },
  {
    "id": "2148",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 140.325596875,
    "y": -150.98990625
  },
  {
    "id": "2147",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 132.971196875,
    "y": -149.84221875
  },
  {
    "id": "2146",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 128.083150859375,
    "y": -157.654625
  },
  {
    "id": "2145",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 138.447609375,
    "y": -150.94215624999998
  },
  {
    "id": "2144",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 129.082848125,
    "y": -150.46875
  },
  {
    "id": "2143",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 133.0546015625,
    "y": -158.116046875
  },
  {
    "id": "2142",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 133.26796406250003,
    "y": -147.86034375
  },
  {
    "id": "2141",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 141.5667640625,
    "y": -157.719265625
  },
  {
    "id": "2140",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 136.103546875,
    "y": -151.055078125
  },
  {
    "id": "2139",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 128.8591765625,
    "y": -155.47746875
  },
  {
    "id": "2138",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 136.074484375,
    "y": -155.940140625
  },
  {
    "id": "2137",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 139.173609375,
    "y": -148.73478125
  },
  {
    "id": "2136",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 130.79627031249998,
    "y": -154.874734375
  },
  {
    "id": "2135",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 139.015415625,
    "y": -156.071359375
  },
  {
    "id": "2134",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 138.06544843749998,
    "y": -155.551
  },
  {
    "id": "2133",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 129.7548984375,
    "y": -154.71534375
  },
  {
    "id": "2132",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 136.6183859375,
    "y": -157.742296875
  },
  {
    "id": "2131",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 132.88562812499998,
    "y": -155.60620312499998
  },
  {
    "id": "2130",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 130.5006921875,
    "y": -158.34643749999998
  },
  {
    "id": "2129",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 129.359571875,
    "y": -152.767171875
  },
  {
    "id": "2128",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 138.4858125,
    "y": -153.599671875
  },
  {
    "id": "2127",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 133.5372578125,
    "y": -159.21165625
  },
  {
    "id": "2126",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 131.6282515625,
    "y": -153.02215625
  },
  {
    "id": "2125",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 128.61350921874998,
    "y": -144.1639375
  },
  {
    "id": "2124",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 131.5203234375,
    "y": -154.650984375
  },
  {
    "id": "2123",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 136.06412812499997,
    "y": -146.235984375
  },
  {
    "id": "2122",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 141.289184375,
    "y": -153.374890625
  },
  {
    "id": "2121",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 137.7974859375,
    "y": -130.848546875
  },
  {
    "id": "2120",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 142.912546875,
    "y": -142.7260640625
  },
  {
    "id": "2119",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 130.29850312499997,
    "y": -132.62138125
  },
  {
    "id": "2118",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 131.521590625,
    "y": -141.6256296875
  },
  {
    "id": "2117",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 140.60268593749998,
    "y": -128.37648343749999
  },
  {
    "id": "2116",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 133.0322765625,
    "y": -136.20323906250002
  },
  {
    "id": "2115",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 134.00408906250001,
    "y": -130.1150375
  },
  {
    "id": "2114",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 128.40099859375,
    "y": -130.304390625
  },
  {
    "id": "2113",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 141.79802812499997,
    "y": -132.2937140625
  },
  {
    "id": "2112",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 129.33667140625,
    "y": -118.0784890625
  },
  {
    "id": "2111",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 1 - Invisible: 0",
    "x": 141.131340625,
    "y": -117.18001406249999
  },
  {
    "id": "2110",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 138.87984062499999,
    "y": -115.118984375
  },
  {
    "id": "2109",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 130.7898203125,
    "y": -113.31217968749999
  },
  {
    "id": "2108",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 132.56538437499998,
    "y": -116.6861203125
  },
  {
    "id": "2107",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 132.99459843750003,
    "y": -112.9677328125
  },
  {
    "id": "2106",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 135.8820921875,
    "y": -120.289546875
  },
  {
    "id": "2105",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 129.52561671875,
    "y": -121.284253125
  },
  {
    "id": "2104",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 135.9204125,
    "y": -114.2090890625
  },
  {
    "id": "2103",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 129.34740156249998,
    "y": -121.56115625
  },
  {
    "id": "2102",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 137.73813437500002,
    "y": -124.956734375
  },
  {
    "id": "2101",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 138.7193421875,
    "y": -118.0765
  },
  {
    "id": "2100",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 1",
    "x": 134.18875624999998,
    "y": -118.2256234375
  },
  {
    "id": "2099",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 137.58457499999997,
    "y": -116.384715625
  },
  {
    "id": "2098",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 137.2151953125,
    "y": -110.701109375
  },
  {
    "id": "2097",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 141.56274843749998,
    "y": -106.71615625
  },
  {
    "id": "2096",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 138.70509531249996,
    "y": -84.89909374999999
  },
  {
    "id": "2095",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 131.70994374999998,
    "y": -82.00959375
  },
  {
    "id": "2094",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 131.2306421875,
    "y": -72.390546875
  },
  {
    "id": "2093",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 137.4280890625,
    "y": -71.22234375
  },
  {
    "id": "2092",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 141.49870312500002,
    "y": -75.522984375
  },
  {
    "id": "2091",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 127.57978156249999,
    "y": -175.54203124999998
  },
  {
    "id": "2090",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 125.641875,
    "y": -175.9265625
  },
  {
    "id": "2089",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 122.45567031249999,
    "y": -188.918484375
  },
  {
    "id": "2088",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 124.4486765625,
    "y": -180.23021875
  },
  {
    "id": "2087",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 114.269871875,
    "y": -183.745984375
  },
  {
    "id": "2086",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 121.943846875,
    "y": -177.243015625
  },
  {
    "id": "2085",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 124.10953437499998,
    "y": -187.81953125
  },
  {
    "id": "2084",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 113.570296875,
    "y": -181.69343750000002
  },
  {
    "id": "2083",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 121.425715625,
    "y": -180.6325625
  },
  {
    "id": "2082",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 117.72241406250001,
    "y": -188.18496875
  },
  {
    "id": "2081",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 126.5117178125,
    "y": -176.889953125
  },
  {
    "id": "2080",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 125.87753281249998,
    "y": -187.4063125
  },
  {
    "id": "2079",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 123.8382125,
    "y": -188.752390625
  },
  {
    "id": "2078",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 1",
    "x": 124.2482640625,
    "y": -188.66409375
  },
  {
    "id": "2077",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 127.95265245312498,
    "y": -168.85417187500002
  },
  {
    "id": "2076",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 121.775,
    "y": -167.988125
  },
  {
    "id": "2075",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 113.5431234375,
    "y": -173.88187499999998
  },
  {
    "id": "2074",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 127.80512281250002,
    "y": -168.411265625
  },
  {
    "id": "2073",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 118.471759375,
    "y": -165.353953125
  },
  {
    "id": "2072",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 126.93718437499999,
    "y": -164.447125
  },
  {
    "id": "2071",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 127.39089578125,
    "y": -167.275671875
  },
  {
    "id": "2070",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 126.83776046875,
    "y": -165.701125
  },
  {
    "id": "2069",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 120.67746406250001,
    "y": -173.441125
  },
  {
    "id": "2068",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 126.96491343749999,
    "y": -166.135265625
  },
  {
    "id": "2067",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 118.5944734375,
    "y": -169.50185937499998
  },
  {
    "id": "2066",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 115.6244375,
    "y": -163.269109375
  },
  {
    "id": "2065",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 127.14413984374998,
    "y": -166.94437499999998
  },
  {
    "id": "2064",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 126.19554999999998,
    "y": -163.9905
  },
  {
    "id": "2063",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 121.385084375,
    "y": -159.600890625
  },
  {
    "id": "2062",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 115.1462890625,
    "y": -152.170640625
  },
  {
    "id": "2061",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 125.0164046875,
    "y": -156.6178125
  },
  {
    "id": "2060",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 117.7867953125,
    "y": -149.72328125
  },
  {
    "id": "2059",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 118.6258453125,
    "y": -144.74712499999998
  },
  {
    "id": "2058",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 1",
    "x": 115.968290625,
    "y": -149.57776562499998
  },
  {
    "id": "2057",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 120.712315625,
    "y": -147.99034375
  },
  {
    "id": "2056",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 112.9143734375,
    "y": -153.401515625
  },
  {
    "id": "2055",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 114.6682421875,
    "y": -154.11279687500002
  },
  {
    "id": "2054",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 121.39026875,
    "y": -159.146265625
  },
  {
    "id": "2053",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 126.336565625,
    "y": -144.37451562500002
  },
  {
    "id": "2052",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 121.35508125,
    "y": -146.58353125
  },
  {
    "id": "2051",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 114.1355875,
    "y": -157.553234375
  },
  {
    "id": "2050",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 115.9705765625,
    "y": -152.597265625
  },
  {
    "id": "2049",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 115.3558828125,
    "y": -158.732953125
  },
  {
    "id": "2048",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 113.108309375,
    "y": -154.8981875
  },
  {
    "id": "2047",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 121.3236859375,
    "y": -130.3582
  },
  {
    "id": "2046",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 1",
    "x": 126.0922703125,
    "y": -137.281303125
  },
  {
    "id": "2045",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 119.9225265625,
    "y": -129.52797453124998
  },
  {
    "id": "2044",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 122.3242328125,
    "y": -134.2022125
  },
  {
    "id": "2043",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 117.928403125,
    "y": -141.6892640625
  },
  {
    "id": "2042",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 1",
    "x": 116.62391875,
    "y": -130.1059140625
  },
  {
    "id": "2041",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 1",
    "x": 125.9108484375,
    "y": -142.76618906250002
  },
  {
    "id": "2040",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 1",
    "x": 116.2824578125,
    "y": -141.94078906250002
  },
  {
    "id": "2039",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 116.902334375,
    "y": -129.56144859375001
  },
  {
    "id": "2038",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 119.98827031249999,
    "y": -136.603490625
  },
  {
    "id": "2037",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 114.429653125,
    "y": -131.42374375
  },
  {
    "id": "2036",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 116.478028125,
    "y": -133.2149453125
  },
  {
    "id": "2035",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 122.2350859375,
    "y": -112.47740781249999
  },
  {
    "id": "2034",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 123.77716718750001,
    "y": -114.2625515625
  },
  {
    "id": "2033",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 125.4486859375,
    "y": -115.7394140625
  },
  {
    "id": "2032",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 124.03125,
    "y": -112.459159375
  },
  {
    "id": "2031",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 121.1785171875,
    "y": -113.4246078125
  },
  {
    "id": "2030",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 126.4231140625,
    "y": -112.6914421875
  },
  {
    "id": "2029",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 125.36923125,
    "y": -114.5561578125
  },
  {
    "id": "2028",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 125.4726078125,
    "y": -123.9055765625
  },
  {
    "id": "2027",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 116.06609375,
    "y": -118.526875
  },
  {
    "id": "2026",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 115.5590625,
    "y": -119.267878125
  },
  {
    "id": "2025",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 122.9314828125,
    "y": -115.5287703125
  },
  {
    "id": "2024",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 124.334484375,
    "y": -116.3760515625
  },
  {
    "id": "2023",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 124.1380703125,
    "y": -116.443546875
  },
  {
    "id": "2022",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 124.0312265625,
    "y": -116.4446734375
  },
  {
    "id": "2021",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 117.6359046875,
    "y": -121.2406
  },
  {
    "id": "2020",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 124.02573125,
    "y": -123.8685296875
  },
  {
    "id": "2019",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 123.8248390625,
    "y": -118.4658140625
  },
  {
    "id": "2018",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 121.843325,
    "y": -115.7280703125
  },
  {
    "id": "2017",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 124.033546875,
    "y": -118.1214328125
  },
  {
    "id": "2016",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 126.93648906249999,
    "y": -112.69337812500001
  },
  {
    "id": "2015",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 119.4296875,
    "y": -124.41375
  },
  {
    "id": "2014",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 122.0124078125,
    "y": -112.474615625
  },
  {
    "id": "2013",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 125.4679234375,
    "y": -114.280421875
  },
  {
    "id": "2012",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 122.4784375,
    "y": -115.037365625
  },
  {
    "id": "2011",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 117.3543875,
    "y": -114.55270625
  },
  {
    "id": "2010",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 118.4755359375,
    "y": -117.3390328125
  },
  {
    "id": "2009",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 124.0339171875,
    "y": -121.348034375
  },
  {
    "id": "2008",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 124.3955234375,
    "y": -118.1034390625
  },
  {
    "id": "2007",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 113.2904640625,
    "y": -115.22446875
  },
  {
    "id": "2006",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 117.5299078125,
    "y": -113.42686093750001
  },
  {
    "id": "2005",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 124.25961875,
    "y": -126.240709375
  },
  {
    "id": "2004",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 114.14609375,
    "y": -123.718125
  },
  {
    "id": "2003",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 117.5790859375,
    "y": -119.5029015625
  },
  {
    "id": "2002",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 113.3874109375,
    "y": -117.980603125
  },
  {
    "id": "2001",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 115.438125,
    "y": -121.701140625
  },
  {
    "id": "2000",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 123.84782343749998,
    "y": -110.206921875
  },
  {
    "id": "1999",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 124.064940625,
    "y": -111.40982812499999
  },
  {
    "id": "1998",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 122.08345624999998,
    "y": -110.62346875
  },
  {
    "id": "1997",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 124.09154062499998,
    "y": -111.411359375
  },
  {
    "id": "1996",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 115.2394359375,
    "y": -97.903796875
  },
  {
    "id": "1995",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 117.004903125,
    "y": -105.440859375
  },
  {
    "id": "1994",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 122.75933125,
    "y": -112.32314062500001
  },
  {
    "id": "1993",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 123.175434375,
    "y": -109.781171875
  },
  {
    "id": "1992",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 125.96028593750002,
    "y": -106.448765625
  },
  {
    "id": "1991",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 125.6951203125,
    "y": -109.87821875
  },
  {
    "id": "1990",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 121.3218734375,
    "y": -100.90551562499999
  },
  {
    "id": "1989",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 122.80321875,
    "y": -100.6970625
  },
  {
    "id": "1988",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 113.753125,
    "y": -102.800015625
  },
  {
    "id": "1987",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 116.22389375,
    "y": -111.01884375
  },
  {
    "id": "1986",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 127.36274625,
    "y": -81.347703125
  },
  {
    "id": "1985",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 119.1283296875,
    "y": -87.38745312500001
  },
  {
    "id": "1984",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 114.3609796875,
    "y": -76.18584374999999
  },
  {
    "id": "1983",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 120.3950234375,
    "y": -78.89192187500001
  },
  {
    "id": "1982",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 103.957140625,
    "y": -175.97004687499998
  },
  {
    "id": "1981",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 106.45046875,
    "y": -180.00125
  },
  {
    "id": "1980",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 106.79634375,
    "y": -185.3740625
  },
  {
    "id": "1979",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 97.901515625,
    "y": -178.656234375
  },
  {
    "id": "1978",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 109.61170312499999,
    "y": -183.90709375
  },
  {
    "id": "1977",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 103.007859375,
    "y": -176.436546875
  },
  {
    "id": "1976",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 108.363390625,
    "y": -176.971109375
  },
  {
    "id": "1975",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 106.88346874999999,
    "y": -186.918640625
  },
  {
    "id": "1974",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 102.820078125,
    "y": -185.47385937500002
  },
  {
    "id": "1973",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 104.14099999999999,
    "y": -181.217078125
  },
  {
    "id": "1972",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 97.96521874999999,
    "y": -179.245203125
  },
  {
    "id": "1971",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 1",
    "x": 110.407015625,
    "y": -184.6316875
  },
  {
    "id": "1970",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 96.803125,
    "y": -184.557296875
  },
  {
    "id": "1969",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 111.33134375,
    "y": -173.468921875
  },
  {
    "id": "1968",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 109.026359375,
    "y": -170.21178125
  },
  {
    "id": "1967",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 106.44396875,
    "y": -170.85521875
  },
  {
    "id": "1966",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 112.18890625,
    "y": -169.22609375000002
  },
  {
    "id": "1965",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 101.10584374999999,
    "y": -162.96532812499998
  },
  {
    "id": "1964",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 109.1819375,
    "y": -164.293375
  },
  {
    "id": "1963",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 101.97032812500001,
    "y": -164.533796875
  },
  {
    "id": "1962",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 102.7505625,
    "y": -166.239515625
  },
  {
    "id": "1961",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 99.721546875,
    "y": -166.431640625
  },
  {
    "id": "1960",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 106.134,
    "y": -165.159453125
  },
  {
    "id": "1959",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 102.08453125,
    "y": -164.04328125
  },
  {
    "id": "1958",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 105.451265625,
    "y": -160.900625
  },
  {
    "id": "1957",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 97.76023437500001,
    "y": -169.77346875
  },
  {
    "id": "1956",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 109.69346875,
    "y": -164.20665624999998
  },
  {
    "id": "1955",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 105.09521875,
    "y": -174.1336875
  },
  {
    "id": "1954",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 106.69584375,
    "y": -162.612421875
  },
  {
    "id": "1953",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 104.50903124999999,
    "y": -158.00271874999999
  },
  {
    "id": "1952",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 106.801609375,
    "y": -143.6626875
  },
  {
    "id": "1951",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 110.234375,
    "y": -157.828125
  },
  {
    "id": "1950",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 97.222671875,
    "y": -144.997390625
  },
  {
    "id": "1949",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 107.993859375,
    "y": -149.639046875
  },
  {
    "id": "1948",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 106.58840624999999,
    "y": -146.215953125
  },
  {
    "id": "1947",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 109.40587500000001,
    "y": -145.44914062499998
  },
  {
    "id": "1946",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 99.881140625,
    "y": -153.404703125
  },
  {
    "id": "1945",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 104.694828125,
    "y": -156.62882812499998
  },
  {
    "id": "1944",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 103.25107812499999,
    "y": -152.68267187499998
  },
  {
    "id": "1943",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 100.70442187500001,
    "y": -156.610890625
  },
  {
    "id": "1942",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 99.57665625,
    "y": -151.94762500000002
  },
  {
    "id": "1941",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 100.990859375,
    "y": -151.10725
  },
  {
    "id": "1940",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 101.958421875,
    "y": -149.780625
  },
  {
    "id": "1939",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 110.03254687500001,
    "y": -146.814125
  },
  {
    "id": "1938",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 107.46410937499999,
    "y": -147.645859375
  },
  {
    "id": "1937",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 108.86421874999999,
    "y": -149.22525000000002
  },
  {
    "id": "1936",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 1",
    "x": 111.4795,
    "y": -148.742578125
  },
  {
    "id": "1935",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 107.143609375,
    "y": -154.1859375
  },
  {
    "id": "1934",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 106.402046875,
    "y": -157.031828125
  },
  {
    "id": "1933",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 110.274,
    "y": -144.101125
  },
  {
    "id": "1932",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 104.5318125,
    "y": -130.4409046875
  },
  {
    "id": "1931",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 100.9519375,
    "y": -133.861434375
  },
  {
    "id": "1930",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 99.57340625,
    "y": -143.2124703125
  },
  {
    "id": "1929",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 110.386140625,
    "y": -134.4736046875
  },
  {
    "id": "1928",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 104.36428125,
    "y": -142.1978953125
  },
  {
    "id": "1927",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 105.50623437499999,
    "y": -141.2291828125
  },
  {
    "id": "1926",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 112.227140625,
    "y": -142.5631125
  },
  {
    "id": "1925",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 107.119421875,
    "y": -133.7283796875
  },
  {
    "id": "1924",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 108.47575,
    "y": -139.4168265625
  },
  {
    "id": "1923",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 110.70406249999999,
    "y": -142.1447234375
  },
  {
    "id": "1922",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 112.056515625,
    "y": -136.74705625
  },
  {
    "id": "1921",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 109.93796875,
    "y": -131.8300546875
  },
  {
    "id": "1920",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 109.963140625,
    "y": -143.0724296875
  },
  {
    "id": "1919",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 107.469640625,
    "y": -137.73221093749999
  },
  {
    "id": "1918",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 106.03890625,
    "y": -135.1829390625
  },
  {
    "id": "1917",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 103.75053125,
    "y": -140.7420296875
  },
  {
    "id": "1916",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 97.284171875,
    "y": -137.3898421875
  },
  {
    "id": "1915",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 98.94395312500001,
    "y": -133.22349843749998
  },
  {
    "id": "1914",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 107.111125,
    "y": -131.9009734375
  },
  {
    "id": "1913",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 1 - Invisible: 0",
    "x": 97.330609375,
    "y": -134.40396875
  },
  {
    "id": "1912",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 104.374734375,
    "y": -128.8821821875
  },
  {
    "id": "1911",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 96.986484375,
    "y": -133.6710390625
  },
  {
    "id": "1910",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 96.861078125,
    "y": -130.52061874999998
  },
  {
    "id": "1909",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 110.569390625,
    "y": -119.7407921875
  },
  {
    "id": "1908",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 103.155640625,
    "y": -124.419771875
  },
  {
    "id": "1907",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 102.507140625,
    "y": -119.9500859375
  },
  {
    "id": "1906",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 110.149703125,
    "y": -116.0945828125
  },
  {
    "id": "1905",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 110.9361875,
    "y": -120.226346875
  },
  {
    "id": "1904",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 110.417515625,
    "y": -117.4464046875
  },
  {
    "id": "1903",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 110.05940625,
    "y": -124.458040625
  },
  {
    "id": "1902",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 97.30193750000001,
    "y": -118.8724265625
  },
  {
    "id": "1901",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 106.554125,
    "y": -126.3127046875
  },
  {
    "id": "1900",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 98.657765625,
    "y": -127.497129375
  },
  {
    "id": "1899",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 102.200625,
    "y": -127.38955640625
  },
  {
    "id": "1898",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 108.337484375,
    "y": -124.2419046875
  },
  {
    "id": "1897",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 110.145765625,
    "y": -123.55723125
  },
  {
    "id": "1896",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 1",
    "x": 101.562734375,
    "y": -125.2573671875
  },
  {
    "id": "1895",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 111.826796875,
    "y": -121.027778125
  },
  {
    "id": "1894",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 108.773171875,
    "y": -112.3778671875
  },
  {
    "id": "1893",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 107.534921875,
    "y": -97.66312500000001
  },
  {
    "id": "1892",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 110.904078125,
    "y": -100.93915625
  },
  {
    "id": "1891",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 111.39071875,
    "y": -97.779546875
  },
  {
    "id": "1890",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 105.557984375,
    "y": -101.92715625
  },
  {
    "id": "1889",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 111.1659375,
    "y": -108.02018749999999
  },
  {
    "id": "1888",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 99.00021875,
    "y": -109.366546875
  },
  {
    "id": "1887",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 112.0959375,
    "y": -111.34253125000001
  },
  {
    "id": "1886",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 1",
    "x": 108.824390625,
    "y": -103.34100000000001
  },
  {
    "id": "1885",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 99.791296875,
    "y": -99.210515625
  },
  {
    "id": "1884",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 98.554828125,
    "y": -99.66904687499999
  },
  {
    "id": "1883",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 112.0700625,
    "y": -95.54223437499999
  },
  {
    "id": "1882",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 111.6575,
    "y": -85.69315625
  },
  {
    "id": "1881",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 105.960125,
    "y": -93.237390625
  },
  {
    "id": "1880",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 105.896125,
    "y": -90.5219375
  },
  {
    "id": "1879",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 108.333859375,
    "y": -91.1235
  },
  {
    "id": "1878",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 111.630859375,
    "y": -87.053734375
  },
  {
    "id": "1877",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 100.4375,
    "y": -91.27025
  },
  {
    "id": "1876",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 101.71534375,
    "y": -93.86190625
  },
  {
    "id": "1875",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 106.076296875,
    "y": -91.87048437499999
  },
  {
    "id": "1874",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 1",
    "x": 100.17184375,
    "y": -85.109109375
  },
  {
    "id": "1873",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 106.916,
    "y": -85.273140625
  },
  {
    "id": "1872",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 103.211125,
    "y": -94.67184375
  },
  {
    "id": "1871",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 101.812625,
    "y": -94.57340625
  },
  {
    "id": "1870",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 104.011015625,
    "y": -73.69032812500001
  },
  {
    "id": "1869",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 110.64378125,
    "y": -80.43974999999999
  },
  {
    "id": "1868",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 110.87521875,
    "y": -74.876984375
  },
  {
    "id": "1867",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 106.512921875,
    "y": -71.110265625
  },
  {
    "id": "1866",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 97.2041875,
    "y": -68.74110937500001
  },
  {
    "id": "1865",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 82.39601562499999,
    "y": -175.82834375
  },
  {
    "id": "1864",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 86.809421875,
    "y": -179.60271875
  },
  {
    "id": "1863",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 94.054546875,
    "y": -178.0061875
  },
  {
    "id": "1862",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 89.7435625,
    "y": -186.6240625
  },
  {
    "id": "1861",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 88.196453125,
    "y": -189.74890625
  },
  {
    "id": "1860",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 84.010765625,
    "y": -163.123640625
  },
  {
    "id": "1859",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 88.153453125,
    "y": -159.84534374999998
  },
  {
    "id": "1858",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 92.69465625000001,
    "y": -162.76181250000002
  },
  {
    "id": "1857",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 87.456953125,
    "y": -167.68545312499998
  },
  {
    "id": "1856",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 96.44221875,
    "y": -173.066109375
  },
  {
    "id": "1855",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 86.935703125,
    "y": -170.98759375
  },
  {
    "id": "1854",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 92.61699999999999,
    "y": -161.80281250000002
  },
  {
    "id": "1853",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 93.5048125,
    "y": -167.853453125
  },
  {
    "id": "1852",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 91.98309375,
    "y": -168.0213125
  },
  {
    "id": "1851",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 95.814296875,
    "y": -165.814046875
  },
  {
    "id": "1850",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 95.70853125,
    "y": -165.453828125
  },
  {
    "id": "1849",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 85.855265625,
    "y": -160.89159375
  },
  {
    "id": "1848",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 92.0828125,
    "y": -172.5315625
  },
  {
    "id": "1847",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 96.458875,
    "y": -162.166296875
  },
  {
    "id": "1846",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 94.128375,
    "y": -160.53190625000002
  },
  {
    "id": "1845",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 91.14406249999999,
    "y": -167.914578125
  },
  {
    "id": "1844",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 83.41620312500001,
    "y": -164.252390625
  },
  {
    "id": "1843",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 86.035546875,
    "y": -173.77587499999998
  },
  {
    "id": "1842",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 95.708578125,
    "y": -156.907765625
  },
  {
    "id": "1841",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 91.42653125,
    "y": -145.259046875
  },
  {
    "id": "1840",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 90.60359375,
    "y": -144.364703125
  },
  {
    "id": "1839",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 95.19715625,
    "y": -145.261375
  },
  {
    "id": "1838",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 90.04473437499999,
    "y": -158.020875
  },
  {
    "id": "1837",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 88.59746874999999,
    "y": -148.60296875
  },
  {
    "id": "1836",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 95.48296875,
    "y": -151.078578125
  },
  {
    "id": "1835",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 89.651984375,
    "y": -146.082890625
  },
  {
    "id": "1834",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 89.488390625,
    "y": -154.773046875
  },
  {
    "id": "1833",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 83.977109375,
    "y": -153.823765625
  },
  {
    "id": "1832",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 83.46875,
    "y": -147.203125
  },
  {
    "id": "1831",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 83.19034375,
    "y": -145.576984375
  },
  {
    "id": "1830",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 90.229515625,
    "y": -158.058203125
  },
  {
    "id": "1829",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 86.656171875,
    "y": -151.986484375
  },
  {
    "id": "1828",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 89.71618749999999,
    "y": -133.8356234375
  },
  {
    "id": "1827",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 85.34496874999999,
    "y": -139.896628125
  },
  {
    "id": "1826",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 96.10875,
    "y": -132.6305125
  },
  {
    "id": "1825",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 91.865484375,
    "y": -128.3752546875
  },
  {
    "id": "1824",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 92.08031249999999,
    "y": -133.33065937499998
  },
  {
    "id": "1823",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 89.19820312499999,
    "y": -135.8865015625
  },
  {
    "id": "1822",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 93.61,
    "y": -139.4194609375
  },
  {
    "id": "1821",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 91.26329687500001,
    "y": -141.2215625
  },
  {
    "id": "1820",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 89.302859375,
    "y": -136.557309375
  },
  {
    "id": "1819",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 95.91429687499999,
    "y": -137.943921875
  },
  {
    "id": "1818",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 94.013609375,
    "y": -135.2398515625
  },
  {
    "id": "1817",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 89.0515,
    "y": -137.21360625
  },
  {
    "id": "1816",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 82.55096875000001,
    "y": -140.44165625
  },
  {
    "id": "1815",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 82.396828125,
    "y": -135.4958578125
  },
  {
    "id": "1814",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 86.6565625,
    "y": -136.5613140625
  },
  {
    "id": "1813",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 92.21014062500001,
    "y": -135.31622031249998
  },
  {
    "id": "1812",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 88.26817187500001,
    "y": -137.997790625
  },
  {
    "id": "1811",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 92.87937500000001,
    "y": -135.2605140625
  },
  {
    "id": "1810",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 96.6143125,
    "y": -119.9663875
  },
  {
    "id": "1809",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 96.27934375000001,
    "y": -119.443690625
  },
  {
    "id": "1808",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 1",
    "x": 85.56398437499999,
    "y": -121.2833703125
  },
  {
    "id": "1807",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 88.190125,
    "y": -123.2140265625
  },
  {
    "id": "1806",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 90.967109375,
    "y": -122.6045734375
  },
  {
    "id": "1805",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 89.966953125,
    "y": -120.3275671875
  },
  {
    "id": "1804",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 95.8021875,
    "y": -115.8783265625
  },
  {
    "id": "1803",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 85.837203125,
    "y": -116.01956875
  },
  {
    "id": "1802",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 86.28812500000001,
    "y": -114.4938875
  },
  {
    "id": "1801",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 1",
    "x": 91.8,
    "y": -115.3991796875
  },
  {
    "id": "1800",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 88.571921875,
    "y": -100.860203125
  },
  {
    "id": "1799",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 91.14695312500001,
    "y": -98.737359375
  },
  {
    "id": "1798",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 84.38859375,
    "y": -97.60003125
  },
  {
    "id": "1797",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 83.672578125,
    "y": -103.08153125
  },
  {
    "id": "1796",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 95.43810937500001,
    "y": -103.644921875
  },
  {
    "id": "1795",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 93.459390625,
    "y": -102.665625
  },
  {
    "id": "1794",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 83.83978125,
    "y": -103.31128125000001
  },
  {
    "id": "1793",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 86.8080625,
    "y": -108.515765625
  },
  {
    "id": "1792",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 88.685546875,
    "y": -105.557734375
  },
  {
    "id": "1791",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 96.39603125,
    "y": -107.677625
  },
  {
    "id": "1790",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 82.5284375,
    "y": -102.390046875
  },
  {
    "id": "1789",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 93.508015625,
    "y": -100.38332812499999
  },
  {
    "id": "1788",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 90.757375,
    "y": -110.021375
  },
  {
    "id": "1787",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 96.17271875,
    "y": -102.64146875
  },
  {
    "id": "1786",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 93.346421875,
    "y": -103.54650000000001
  },
  {
    "id": "1785",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 96.553125,
    "y": -97.9734375
  },
  {
    "id": "1784",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 91.465296875,
    "y": -101.020296875
  },
  {
    "id": "1783",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 81.5498125,
    "y": -98.65465625
  },
  {
    "id": "1782",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 83.77256249999999,
    "y": -83.80710937500001
  },
  {
    "id": "1781",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 81.36099999999999,
    "y": -85.91365625
  },
  {
    "id": "1780",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 96.507,
    "y": -89.62496875
  },
  {
    "id": "1779",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 92.103625,
    "y": -92.16954687500001
  },
  {
    "id": "1778",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 86.7671875,
    "y": -91.0609375
  },
  {
    "id": "1777",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 85.01035937500001,
    "y": -92.706609375
  },
  {
    "id": "1776",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 82.94010937499999,
    "y": -90.53101562500001
  },
  {
    "id": "1775",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 89.44109375,
    "y": -84.79340625
  },
  {
    "id": "1774",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 82.6861875,
    "y": -88.800203125
  },
  {
    "id": "1773",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 83.68293750000001,
    "y": -90.127578125
  },
  {
    "id": "1772",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 85.24828124999999,
    "y": -87.64328125
  },
  {
    "id": "1771",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 93.46781250000001,
    "y": -82.554
  },
  {
    "id": "1770",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 84.507,
    "y": -82.757421875
  },
  {
    "id": "1769",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 90.77265625,
    "y": -94.676875
  },
  {
    "id": "1768",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 82.11665625,
    "y": -90.3053125
  },
  {
    "id": "1767",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 86.802796875,
    "y": -95.9945
  },
  {
    "id": "1766",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 81.28803125,
    "y": -94.172078125
  },
  {
    "id": "1765",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 81.96089062499999,
    "y": -78.83282812499999
  },
  {
    "id": "1764",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 87.341015625,
    "y": -77.39170312499999
  },
  {
    "id": "1763",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 92.840390625,
    "y": -79.684640625
  },
  {
    "id": "1762",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 83.582875,
    "y": -73.41425000000001
  },
  {
    "id": "1761",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 92.2170625,
    "y": -74.756296875
  },
  {
    "id": "1760",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 89.130375,
    "y": -80.78748437499999
  },
  {
    "id": "1759",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 68.63048437500001,
    "y": -181.576359375
  },
  {
    "id": "1758",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 76.64946875,
    "y": -187.174234375
  },
  {
    "id": "1757",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 69.74153125000001,
    "y": -184.407546875
  },
  {
    "id": "1756",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 80.630859375,
    "y": -186.665484375
  },
  {
    "id": "1755",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 67.27903125,
    "y": -174.3409375
  },
  {
    "id": "1754",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 75.60875,
    "y": -163.5673125
  },
  {
    "id": "1753",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 80.0095625,
    "y": -159.948953125
  },
  {
    "id": "1752",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 69.3774375,
    "y": -167.556625
  },
  {
    "id": "1751",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 79.44878125,
    "y": -173.019390625
  },
  {
    "id": "1750",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 74.322046875,
    "y": -174.565015625
  },
  {
    "id": "1749",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 77.616890625,
    "y": -143.97579687500001
  },
  {
    "id": "1748",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 69.939703125,
    "y": -152.344890625
  },
  {
    "id": "1747",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 67.91820312499999,
    "y": -157.6414375
  },
  {
    "id": "1746",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 79.10915625,
    "y": -150.92429687499998
  },
  {
    "id": "1745",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 80.1,
    "y": -148.113546875
  },
  {
    "id": "1744",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 67.887578125,
    "y": -150.922171875
  },
  {
    "id": "1743",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 73.91932812499999,
    "y": -130.5984203125
  },
  {
    "id": "1742",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 70.59709375,
    "y": -138.9110109375
  },
  {
    "id": "1741",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 80.03628125,
    "y": -142.23045000000002
  },
  {
    "id": "1740",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 80.90370312499999,
    "y": -133.8193265625
  },
  {
    "id": "1739",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 70.36175,
    "y": -140.480078125
  },
  {
    "id": "1738",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 77.799078125,
    "y": -119.0310875
  },
  {
    "id": "1737",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 66.026375,
    "y": -118.24122187500001
  },
  {
    "id": "1736",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 77.87829687499999,
    "y": -120.2673
  },
  {
    "id": "1735",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 72.92889062500001,
    "y": -120.9735296875
  },
  {
    "id": "1734",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 67.6604375,
    "y": -125.7007015625
  },
  {
    "id": "1733",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 67.973234375,
    "y": -115.437740625
  },
  {
    "id": "1732",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 68.174390625,
    "y": -126.149621875
  },
  {
    "id": "1731",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 65.943234375,
    "y": -113.616928125
  },
  {
    "id": "1730",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 70.791171875,
    "y": -115.04994375
  },
  {
    "id": "1729",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 70.5775625,
    "y": -121.8543390625
  },
  {
    "id": "1728",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 76.00859375,
    "y": -122.7355484375
  },
  {
    "id": "1727",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 74.38746875,
    "y": -116.939984375
  },
  {
    "id": "1726",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 74.233234375,
    "y": -117.6113203125
  },
  {
    "id": "1725",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 79.417828125,
    "y": -113.792728125
  },
  {
    "id": "1724",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 77.88201562500001,
    "y": -122.7814625
  },
  {
    "id": "1723",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 73.68434375,
    "y": -126.92096515625
  },
  {
    "id": "1722",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 68.56351562500001,
    "y": -115.930259375
  },
  {
    "id": "1721",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 74.181796875,
    "y": -107.23921874999999
  },
  {
    "id": "1720",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 70.23959375,
    "y": -101.68578125
  },
  {
    "id": "1719",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 79.16884375000001,
    "y": -106.64834375000001
  },
  {
    "id": "1718",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 68.92907812499999,
    "y": -98.849625
  },
  {
    "id": "1717",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 71.322125,
    "y": -99.799609375
  },
  {
    "id": "1716",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 69.95721875000001,
    "y": -111.734921875
  },
  {
    "id": "1715",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 79.900875,
    "y": -110.4944375
  },
  {
    "id": "1714",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 72.33990625,
    "y": -100.47896875
  },
  {
    "id": "1713",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 76.884515625,
    "y": -98.80846875
  },
  {
    "id": "1712",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 76.51321875,
    "y": -106.704234375
  },
  {
    "id": "1711",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 78.756640625,
    "y": -103.5736875
  },
  {
    "id": "1710",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 79.31296875000001,
    "y": -84.15259375
  },
  {
    "id": "1709",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 75.64796874999999,
    "y": -81.204765625
  },
  {
    "id": "1708",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 75.93828125,
    "y": -92.10676562500001
  },
  {
    "id": "1707",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 70.53282812500001,
    "y": -89.456953125
  },
  {
    "id": "1706",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 76.79025,
    "y": -87.080234375
  },
  {
    "id": "1705",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 68.135296875,
    "y": -95.082671875
  },
  {
    "id": "1704",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 80.48251562499999,
    "y": -88.62217187499999
  },
  {
    "id": "1703",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 80.168421875,
    "y": -84.03615625
  },
  {
    "id": "1702",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 68.74042187500001,
    "y": -91.747015625
  },
  {
    "id": "1701",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 69.64403125,
    "y": -81.68128125
  },
  {
    "id": "1700",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 74.58578125,
    "y": -95.70601562499999
  },
  {
    "id": "1699",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 71.58360937500001,
    "y": -73.43765625
  },
  {
    "id": "1698",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 73.373046875,
    "y": -72.05196875
  },
  {
    "id": "1697",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 72.147265625,
    "y": -76.86903125
  },
  {
    "id": "1696",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 69.294890625,
    "y": -67.87370312499999
  },
  {
    "id": "1695",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 67.95070312499999,
    "y": -75.68465625
  },
  {
    "id": "1694",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 74.64384375,
    "y": -73.162328125
  },
  {
    "id": "1693",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 68.7228125,
    "y": -80.60989062499999
  },
  {
    "id": "1692",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 65.4296875,
    "y": -71.46875
  },
  {
    "id": "1691",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 66.119125,
    "y": -69.82409375
  },
  {
    "id": "1690",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 52.0281875,
    "y": -178.952578125
  },
  {
    "id": "1689",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 60.064109375,
    "y": -186.01850000000002
  },
  {
    "id": "1688",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 62.441421875,
    "y": -176.30553125
  },
  {
    "id": "1687",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 62.994890625,
    "y": -187.78440625000002
  },
  {
    "id": "1686",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 52.07534375,
    "y": -187.8898125
  },
  {
    "id": "1685",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 60.6935625,
    "y": -182.05851562499998
  },
  {
    "id": "1684",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 56.00146875,
    "y": -164.54445312500002
  },
  {
    "id": "1683",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 61.986421875000005,
    "y": -170.78240625
  },
  {
    "id": "1682",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 51.798312499999994,
    "y": -166.58865624999999
  },
  {
    "id": "1681",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 59.65784375,
    "y": -168.422765625
  },
  {
    "id": "1680",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 54.398671875000005,
    "y": -161.934921875
  },
  {
    "id": "1679",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 65.48315625000001,
    "y": -152.477375
  },
  {
    "id": "1678",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 63.368812500000004,
    "y": -154.843125
  },
  {
    "id": "1677",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 62.6755,
    "y": -151.16240625
  },
  {
    "id": "1676",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 64.319,
    "y": -152.9239375
  },
  {
    "id": "1675",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 61.334796874999995,
    "y": -154.43025
  },
  {
    "id": "1674",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 62.062171875000004,
    "y": -153.934328125
  },
  {
    "id": "1673",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 60.592093750000004,
    "y": -153.459515625
  },
  {
    "id": "1672",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 62.218359375000006,
    "y": -145.711078125
  },
  {
    "id": "1671",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 54.79353125,
    "y": -158.78731249999998
  },
  {
    "id": "1670",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 57.252562499999996,
    "y": -150.239453125
  },
  {
    "id": "1669",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 62.83309375,
    "y": -159.084140625
  },
  {
    "id": "1668",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 59.9783125,
    "y": -156.72696875
  },
  {
    "id": "1667",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 1",
    "x": 63.73601562499999,
    "y": -149.523984375
  },
  {
    "id": "1666",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 56.871281249999996,
    "y": -149.143109375
  },
  {
    "id": "1665",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 59.94785937499999,
    "y": -139.09178125
  },
  {
    "id": "1664",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 60.172593750000004,
    "y": -140.2208265625
  },
  {
    "id": "1663",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 60.415484375000005,
    "y": -138.9108203125
  },
  {
    "id": "1662",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 62.630078125,
    "y": -132.5479203125
  },
  {
    "id": "1661",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 59.107765625,
    "y": -133.1772140625
  },
  {
    "id": "1660",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 64.45645312500001,
    "y": -134.8413671875
  },
  {
    "id": "1659",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 54.711124999999996,
    "y": -141.1619296875
  },
  {
    "id": "1658",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 64.58078125,
    "y": -115.908575
  },
  {
    "id": "1657",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 61.556171875000004,
    "y": -126.687305
  },
  {
    "id": "1656",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 64.880609375,
    "y": -122.52751875
  },
  {
    "id": "1655",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 65.08268749999999,
    "y": -124.36865
  },
  {
    "id": "1654",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 64.47707812499999,
    "y": -101.77612500000001
  },
  {
    "id": "1653",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 65.32545312500001,
    "y": -109.76428125000001
  },
  {
    "id": "1652",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 64.953390625,
    "y": -100.68121875
  },
  {
    "id": "1651",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 61.97321875,
    "y": -100.697109375
  },
  {
    "id": "1650",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 57.954281249999994,
    "y": -97.2050625
  },
  {
    "id": "1649",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 63.568515625,
    "y": -97.76035937500001
  },
  {
    "id": "1648",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 59.299406250000004,
    "y": -95.970546875
  },
  {
    "id": "1647",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 57.574453125000005,
    "y": -94.4670625
  },
  {
    "id": "1646",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 63.17565625,
    "y": -87.117578125
  },
  {
    "id": "1645",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 60.335578125,
    "y": -95.924109375
  },
  {
    "id": "1644",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 64.37782812500001,
    "y": -88.21954687499999
  },
  {
    "id": "1643",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 62.487390625,
    "y": -86.141515625
  },
  {
    "id": "1642",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 1",
    "x": 59.210078124999995,
    "y": -83.2079375
  },
  {
    "id": "1641",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 65.1893125,
    "y": -91.275640625
  },
  {
    "id": "1640",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 60.183921874999996,
    "y": -91.21712500000001
  },
  {
    "id": "1639",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 60.33028125,
    "y": -87.372484375
  },
  {
    "id": "1638",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 65.041578125,
    "y": -69.247203125
  },
  {
    "id": "1637",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Air - KorokLift: 0 - Invisible: 0",
    "x": 62.888093749999996,
    "y": -71.500984375
  },
  {
    "id": "1636",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 59.234375,
    "y": -69.03125
  },
  {
    "id": "1635",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 63.063484375,
    "y": -74.81049999999999
  },
  {
    "id": "1634",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 0 - Invisible: 0",
    "x": 61.892296875,
    "y": -79.018578125
  },
  {
    "id": "1633",
    "categoryId": "1916",
    "name": "Korok Seed",
    "description": "PlacementType: Ground - KorokLift: 1 - Invisible: 0",
    "x": 58.872578125000004,
    "y": -77.75090625
  },
  {
    "id": "1516",
    "categoryId": "1932",
    "name": "Guardian",
    "description": "",
    "x": 129.6796875,
    "y": -132.25
  },
  {
    "id": "1515",
    "categoryId": "1934",
    "name": "Despair (#16)",
    "description": "",
    "x": 138.984375,
    "y": -134.8515625
  },
  {
    "id": "1513",
    "categoryId": "1933",
    "name": "Lynel",
    "description": "",
    "x": 179.7265625,
    "y": -147.21484375
  },
  {
    "id": "1510",
    "categoryId": "1936",
    "name": "Cracked rocks",
    "description": "",
    "x": 67.6796875,
    "y": -69.78125
  },
  {
    "id": "1508",
    "categoryId": "1901",
    "name": "Ice blocks",
    "description": "",
    "x": 63.1875,
    "y": -68.60546875
  },
  {
    "id": "1507",
    "categoryId": "1933",
    "name": "Stalnox",
    "description": "",
    "x": 61.28125,
    "y": -68.94140625
  },
  {
    "id": "1505",
    "categoryId": "1936",
    "name": "Cracked Wall",
    "description": "",
    "x": 59.08203125,
    "y": -70.52734375
  },
  {
    "id": "1503",
    "categoryId": "1901",
    "name": "Buried Chest",
    "description": "",
    "x": 66.82421875,
    "y": -68.1875
  },
  {
    "id": "1500",
    "categoryId": "1936",
    "name": "Cracked Rocks",
    "description": "",
    "x": 75.08203125,
    "y": -70.4375
  },
  {
    "id": "1495",
    "categoryId": "1935",
    "name": "Recital at Warbler`s Nest",
    "description": "",
    "x": 65.73046875,
    "y": -100.81640625
  },
  {
    "id": "1492",
    "categoryId": "1935",
    "name": "The Bird in the Mountains",
    "description": "",
    "x": 71.16796875,
    "y": -99.46875
  },
  {
    "id": "1491",
    "categoryId": "1935",
    "name": "The Spark of Romance",
    "description": "",
    "x": 71.64453125,
    "y": -99.26171875
  },
  {
    "id": "1490",
    "categoryId": "1935",
    "name": "The Apple of My Eye",
    "description": "",
    "x": 71.51171875,
    "y": -99.4296875
  },
  {
    "id": "1487",
    "categoryId": "1935",
    "name": "Find Kheel",
    "description": "",
    "x": 70.6953125,
    "y": -100.3359375
  },
  {
    "id": "1475",
    "categoryId": "1932",
    "name": "Guardian",
    "description": "",
    "x": 149.75,
    "y": -144.1875
  },
  {
    "id": "1398",
    "categoryId": "1901",
    "name": "Blupee",
    "description": "",
    "x": 124.58203125,
    "y": -149.34765625
  },
  {
    "id": "1397",
    "categoryId": "1931",
    "name": "Bokoblin Enemy Camp",
    "description": "",
    "x": 123.49609375,
    "y": -147.6796875
  },
  {
    "id": "1396",
    "categoryId": "1901",
    "name": "Chest",
    "description": "",
    "x": 123.57421875,
    "y": -147.45703125
  },
  {
    "id": "1392",
    "categoryId": "1933",
    "name": "Stone Talus",
    "description": "",
    "x": 120.00390625,
    "y": -146.453125
  },
  {
    "id": "1387",
    "categoryId": "1933",
    "name": "Lynel",
    "description": "",
    "x": 110.078125,
    "y": -147.671875
  },
  {
    "id": "1295",
    "categoryId": "1935",
    "name": "Curry for What Ails You",
    "description": "",
    "x": 77,
    "y": -100.265625
  },
  {
    "id": "1268",
    "categoryId": "1933",
    "name": "Stone Talus",
    "description": "",
    "x": 149.73828125,
    "y": -186.23828125
  },
  {
    "id": "1250",
    "categoryId": "1927",
    "name": "Temple of Time",
    "description": "",
    "x": 115.1953125,
    "y": -159.26171875
  },
  {
    "id": "1214",
    "categoryId": "1905",
    "name": "Emblazoned Shield",
    "description": "",
    "x": 119.0546875,
    "y": -150.5546875
  },
  {
    "id": "1205",
    "categoryId": "1936",
    "name": "Cracked rocks",
    "description": "",
    "x": 60.97265625,
    "y": -94.96484375
  },
  {
    "id": "1203",
    "categoryId": "1931",
    "name": "Lizafos' Enemy Camp",
    "description": "",
    "x": 59.375,
    "y": -97.7109375
  },
  {
    "id": "1197",
    "categoryId": "1933",
    "name": "Stone Talus",
    "description": "",
    "x": 66.48046875,
    "y": -111.05859375
  },
  {
    "id": "1191",
    "categoryId": "1935",
    "name": "Balloon Flight",
    "description": "",
    "x": 144.95703125,
    "y": -110.4921875
  },
  {
    "id": "1180",
    "categoryId": "1901",
    "name": "Chest",
    "description": "",
    "x": 105.90625,
    "y": -147.5703125
  },
  {
    "id": "1178",
    "categoryId": "1910",
    "name": "Treasure Chest",
    "description": "1 of 2 chests in pond",
    "x": 117.49609375,
    "y": -152.01171875
  },
  {
    "id": "1160",
    "categoryId": "1931",
    "name": "Bokoblin Camp",
    "description": "",
    "x": 192.34375,
    "y": -165.28125
  },
  {
    "id": "1115",
    "categoryId": "1935",
    "name": "Find the Fairy Fountain",
    "description": "",
    "x": 156.53515625,
    "y": -143.4609375
  },
  {
    "id": "1111",
    "categoryId": "1934",
    "name": "Memory #14 - To Mount Lanayru",
    "description": "",
    "x": 102.81640625,
    "y": -138.75
  },
  {
    "id": "1109",
    "categoryId": "1936",
    "name": "Cracled Rocks",
    "description": "",
    "x": 94.51953125,
    "y": -135.9921875
  },
  {
    "id": "1107",
    "categoryId": "1936",
    "name": "Cracked rocks",
    "description": "",
    "x": 93.73046875,
    "y": -135.9921875
  },
  {
    "id": "1105",
    "categoryId": "1935",
    "name": "Stalhorse: Pictured!",
    "description": "",
    "x": 102.16015625,
    "y": -87.76171875
  },
  {
    "id": "1101",
    "categoryId": "1935",
    "name": "Trial on the Cliff",
    "description": "",
    "x": 113.3359375,
    "y": -72.78125
  },
  {
    "id": "1100",
    "categoryId": "1901",
    "name": "Chest",
    "description": "",
    "x": 115.84765625,
    "y": -72.76953125
  },
  {
    "id": "1099",
    "categoryId": "1901",
    "name": "Chest",
    "description": "",
    "x": 115.109375,
    "y": -74.55078125
  },
  {
    "id": "1097",
    "categoryId": "1901",
    "name": "Chest",
    "description": "",
    "x": 115.609375,
    "y": -72.3828125
  },
  {
    "id": "1096",
    "categoryId": "1901",
    "name": "Chest",
    "description": "",
    "x": 115.10546875,
    "y": -70.953125
  },
  {
    "id": "1095",
    "categoryId": "1903",
    "name": "Meteor Rod",
    "description": "",
    "x": 116.17578125,
    "y": -72.72265625
  },
  {
    "id": "1094",
    "categoryId": "1901",
    "name": "Chest",
    "description": "",
    "x": 116.9140625,
    "y": -72.76953125
  },
  {
    "id": "1089",
    "categoryId": "1910",
    "name": "Season Pass Chest",
    "description": "",
    "x": 117.40625,
    "y": -151.83984375
  },
  {
    "id": "1084",
    "categoryId": "1934",
    "name": "Zelda's Resentment (#5)",
    "description": "",
    "x": 73.29296875,
    "y": -121.421875
  },
  {
    "id": "1063",
    "categoryId": "1933",
    "name": "Blue Hinox",
    "description": "",
    "x": 101.2265625,
    "y": -155.69921875
  },
  {
    "id": "1055",
    "categoryId": "1933",
    "name": "Stone Talus (Junior)",
    "description": "",
    "x": 147.7265625,
    "y": -162.03125
  },
  {
    "id": "1045",
    "categoryId": "1901",
    "name": "Blupee",
    "description": "",
    "x": 137.15625,
    "y": -149.296875
  },
  {
    "id": "954",
    "categoryId": "1910",
    "name": "Treasure Chests",
    "description": "",
    "x": 109.2578125,
    "y": -154.109375
  },
  {
    "id": "941",
    "categoryId": "1903",
    "name": "elemental weapons",
    "description": "",
    "x": 109.98046875,
    "y": -147.80078125
  },
  {
    "id": "927",
    "categoryId": "1920",
    "name": "Reddit Shield Surf Challenge Start Point",
    "description": "",
    "x": 200.64453125,
    "y": -111.296875
  },
  {
    "id": "886",
    "categoryId": "1936",
    "name": "Cracked Wall",
    "description": "Treasure Chests Inside",
    "x": 141.3671875,
    "y": -158.296875
  },
  {
    "id": "876",
    "categoryId": "1935",
    "name": "Royal Receipes",
    "description": "Gottah's quest",
    "x": 133.4765625,
    "y": -145.09375
  },
  {
    "id": "875",
    "categoryId": "1935",
    "name": "Castle weapons - Parisse",
    "description": "Parisse side quest",
    "x": 133.140625,
    "y": -145.296875
  },
  {
    "id": "854",
    "categoryId": "1935",
    "name": "A Gift for the Great Fairy",
    "description": "",
    "x": 82.22265625,
    "y": -119.296875
  },
  {
    "id": "851",
    "categoryId": "1901",
    "name": "Chest",
    "description": "",
    "x": 72.33984375,
    "y": -118.78515625
  },
  {
    "id": "850",
    "categoryId": "1901",
    "name": "Chest",
    "description": "",
    "x": 72.5234375,
    "y": -118.6953125
  },
  {
    "id": "817",
    "categoryId": "1933",
    "name": "Luminous Stone Talus",
    "description": "",
    "x": 199.11328125,
    "y": -166.4921875
  },
  {
    "id": "798",
    "categoryId": "1935",
    "name": "Link's House",
    "description": "This is not the actual side quest name. We need to confirm in-game. -Josh",
    "x": 179.703125,
    "y": -163.765625
  },
  {
    "id": "786",
    "categoryId": "1937",
    "name": "Malanya Spring",
    "description": "",
    "x": 140.3671875,
    "y": -186.15625
  },
  {
    "id": "785",
    "categoryId": "1937",
    "name": "Great Fairy Fountain",
    "description": "",
    "x": 72.6875,
    "y": -116.28125
  },
  {
    "id": "772",
    "categoryId": "1901",
    "name": "Spring of Courage",
    "description": "",
    "x": 142.03125,
    "y": -165.875
  },
  {
    "id": "746",
    "categoryId": "1901",
    "name": "Northern Icehouse",
    "description": "",
    "x": 69.5,
    "y": -163.8125
  },
  {
    "id": "741",
    "categoryId": "1937",
    "name": "Great Fairy Fountain",
    "description": "",
    "x": 51.765625,
    "y": -187.859375
  },
  {
    "id": "740",
    "categoryId": "1901",
    "name": "Gerudo Great Skeleton",
    "description": "",
    "x": 52.671875,
    "y": -186.046875
  },
  {
    "id": "718",
    "categoryId": "1901",
    "name": "Spring of Power",
    "description": "",
    "x": 186.40625,
    "y": -86.6875
  },
  {
    "id": "713",
    "categoryId": "1901",
    "name": "Forgotten Temple",
    "description": "",
    "x": 106.21875,
    "y": -92.03125
  },
  {
    "id": "683",
    "categoryId": "1901",
    "name": "Flight Range",
    "description": "",
    "x": 67.7421875,
    "y": -92.3125
  },
  {
    "id": "675",
    "categoryId": "1901",
    "name": "Hebra Great Skeleton",
    "description": "",
    "x": 65.02734375,
    "y": -70.08203125
  },
  {
    "id": "476",
    "categoryId": "1934",
    "name": "Silent Princess (#9)",
    "description": "",
    "x": 110.96875,
    "y": -107.61328125
  },
  {
    "id": "474",
    "categoryId": "1930",
    "name": "Lynel",
    "description": "",
    "x": 116.0078125,
    "y": -99.5
  },
  {
    "id": "472",
    "categoryId": "1933",
    "name": "Blue Hinox",
    "description": "",
    "x": 120.48046875,
    "y": -96.00390625
  },
  {
    "id": "470",
    "categoryId": "1936",
    "name": "Cracked Wall",
    "description": "",
    "x": 157.1484375,
    "y": -166.60546875
  },
  {
    "id": "469",
    "categoryId": "1935",
    "name": "",
    "description": "",
    "x": 135.65625,
    "y": -94.640625
  },
  {
    "id": "468",
    "categoryId": "1935",
    "name": "Trial of Second Sight",
    "description": "",
    "x": 131.8671875,
    "y": -97.109375
  },
  {
    "id": "467",
    "categoryId": "1935",
    "name": "The Lost Pilgrimage",
    "description": "",
    "x": 132.06640625,
    "y": -93.2734375
  },
  {
    "id": "466",
    "categoryId": "1935",
    "name": "The Test of Wood",
    "description": "",
    "x": 136.7890625,
    "y": -94.22265625
  },
  {
    "id": "462",
    "categoryId": "1935",
    "name": "Cracked Wall",
    "description": "",
    "x": 158.43359375,
    "y": -168.58984375
  },
  {
    "id": "460",
    "categoryId": "1935",
    "name": "A Gift for my Beloved",
    "description": "",
    "x": 181.828125,
    "y": -161.1328125
  },
  {
    "id": "459",
    "categoryId": "1935",
    "name": "The Jewel Trade",
    "description": "",
    "x": 154.6953125,
    "y": -89.89453125
  },
  {
    "id": "458",
    "categoryId": "1933",
    "name": "Igneo Talus",
    "description": "",
    "x": 148.70703125,
    "y": -80.56640625
  },
  {
    "id": "457",
    "categoryId": "1934",
    "name": "Memory",
    "description": "",
    "x": 78,
    "y": -167.828125
  },
  {
    "id": "456",
    "categoryId": "1931",
    "name": "Enemy Camp",
    "description": "",
    "x": 148.875,
    "y": -152.15625
  },
  {
    "id": "455",
    "categoryId": "1933",
    "name": "Stone Talus",
    "description": "",
    "x": 146.140625,
    "y": -153.3359375
  },
  {
    "id": "453",
    "categoryId": "1934",
    "name": "Return of Calamity Ganon (#15)",
    "description": "",
    "x": 176.5390625,
    "y": -145.84375
  },
  {
    "id": "451",
    "categoryId": "1935",
    "name": "The Statue's Bargain",
    "description": "",
    "x": 179.5703125,
    "y": -161.5546875
  },
  {
    "id": "450",
    "categoryId": "1901",
    "name": "Horned Statue",
    "description": "",
    "x": 179.3671875,
    "y": -162.35546875
  },
  {
    "id": "449",
    "categoryId": "1931",
    "name": "Enemy Camp",
    "description": "",
    "x": 160.3671875,
    "y": -156.3671875
  },
  {
    "id": "443",
    "categoryId": "1931",
    "name": "Enemy Base",
    "description": "",
    "x": 105.5546875,
    "y": -153.2734375
  },
  {
    "id": "441",
    "categoryId": "1934",
    "name": "A Premonition (#8)",
    "description": "",
    "x": 150.1484375,
    "y": -104.015625
  },
  {
    "id": "438",
    "categoryId": "1901",
    "name": "Chest",
    "description": "",
    "x": 175.2734375,
    "y": -159.57421875
  },
  {
    "id": "435",
    "categoryId": "1903",
    "name": "Korok Leaf",
    "description": "",
    "x": 190.90234375,
    "y": -174.703125
  },
  {
    "id": "431",
    "categoryId": "1935",
    "name": "Leviathan Bones",
    "description": "",
    "x": 103.8671875,
    "y": -99.89453125
  },
  {
    "id": "428",
    "categoryId": "1901",
    "name": "Hebra Leviathan",
    "description": "",
    "x": 69.1796875,
    "y": -72.25
  },
  {
    "id": "426",
    "categoryId": "1931",
    "name": "Enemy Camp",
    "description": "",
    "x": 180.65234375,
    "y": -178.640625
  },
  {
    "id": "423",
    "categoryId": "1935",
    "name": "The Weapon Connoisseur",
    "description": "",
    "x": 180.015625,
    "y": -160.94921875
  },
  {
    "id": "422",
    "categoryId": "1933",
    "name": "Blue Hinox",
    "description": "",
    "x": 178.7421875,
    "y": -148.796875
  },
  {
    "id": "420",
    "categoryId": "1936",
    "name": "Rocks",
    "description": "",
    "x": 179.8046875,
    "y": -158.37890625
  },
  {
    "id": "417",
    "categoryId": "1935",
    "name": "The Cursed Statue",
    "description": "",
    "x": 198.4453125,
    "y": -78.671875
  },
  {
    "id": "416",
    "categoryId": "1935",
    "name": "A Shady Customer",
    "description": "",
    "x": 194.23046875,
    "y": -85.15234375
  },
  {
    "id": "412",
    "categoryId": "1935",
    "name": "The Gut Check Challenge",
    "description": "",
    "x": 169.7421875,
    "y": -73.83203125
  },
  {
    "id": "410",
    "categoryId": "1935",
    "name": "Trial of the Labyrinth",
    "description": "",
    "x": 200.78125,
    "y": -72.390625
  },
  {
    "id": "404",
    "categoryId": "1935",
    "name": "Fireproof Lizard Roundup",
    "description": "",
    "x": 153.84765625,
    "y": -97.52734375
  },
  {
    "id": "403",
    "categoryId": "1935",
    "name": "A Brother's Roast",
    "description": "",
    "x": 153.80859375,
    "y": -89.45703125
  },
  {
    "id": "402",
    "categoryId": "1935",
    "name": "The Road to Respect",
    "description": "",
    "x": 154.68359375,
    "y": -88.69140625
  },
  {
    "id": "401",
    "categoryId": "1936",
    "name": "Rock Formation",
    "description": "",
    "x": 169.296875,
    "y": -98.39453125
  },
  {
    "id": "400",
    "categoryId": "1936",
    "name": "Rock Formation",
    "description": "",
    "x": 170.01953125,
    "y": -98.3671875
  },
  {
    "id": "399",
    "categoryId": "1935",
    "name": "Master of the Wind",
    "description": "",
    "x": 192.9453125,
    "y": -133.41015625
  },
  {
    "id": "390",
    "categoryId": "1933",
    "name": "Stone Talus",
    "description": "",
    "x": 167.515625,
    "y": -157.796875
  },
  {
    "id": "389",
    "categoryId": "1901",
    "name": "Chest",
    "description": "",
    "x": 178.32421875,
    "y": -123.59765625
  },
  {
    "id": "388",
    "categoryId": "1936",
    "name": "Cracked Wall",
    "description": "",
    "x": 178.94921875,
    "y": -122.38671875
  },
  {
    "id": "387",
    "categoryId": "1935",
    "name": "Legendary Rabbit Trial",
    "description": "",
    "x": 134.609375,
    "y": -94.171875
  },
  {
    "id": "386",
    "categoryId": "1935",
    "name": "A Freezing Rod",
    "description": "",
    "x": 134.5234375,
    "y": -94.8515625
  },
  {
    "id": "385",
    "categoryId": "1910",
    "name": "Treasure Chest",
    "description": "",
    "x": 117.12890625,
    "y": -151.8125
  },
  {
    "id": "384",
    "categoryId": "1910",
    "name": "Treasure Chest: Opal",
    "description": "",
    "x": 105.58984375,
    "y": -158.52734375
  },
  {
    "id": "380",
    "categoryId": "1937",
    "name": "Great Fairy Fountain",
    "description": "",
    "x": 192.21875,
    "y": -106.5
  },
  {
    "id": "377",
    "categoryId": "1935",
    "name": "Hetsu (3rd Encounter)",
    "description": "",
    "x": 135.234375,
    "y": -94.9921875
  },
  {
    "id": "376",
    "categoryId": "1901",
    "name": "Goal 3",
    "description": "",
    "x": 198.296875,
    "y": -181.05078125
  },
  {
    "id": "375",
    "categoryId": "1901",
    "name": "Goal 2",
    "description": "",
    "x": 197.69140625,
    "y": -186.859375
  },
  {
    "id": "374",
    "categoryId": "1901",
    "name": "Ball 2",
    "description": "",
    "x": 197.078125,
    "y": -186.08203125
  },
  {
    "id": "373",
    "categoryId": "1901",
    "name": "Ball 3",
    "description": "",
    "x": 201.390625,
    "y": -185.34375
  },
  {
    "id": "372",
    "categoryId": "1901",
    "name": "Hole 1",
    "description": "",
    "x": 201.0078125,
    "y": -186.8359375
  },
  {
    "id": "371",
    "categoryId": "1901",
    "name": "Ball 1",
    "description": "",
    "x": 200.9296875,
    "y": -186.609375
  },
  {
    "id": "370",
    "categoryId": "1930",
    "name": "Enemies",
    "description": "",
    "x": 200.546875,
    "y": -186.328125
  },
  {
    "id": "369",
    "categoryId": "1930",
    "name": "Enemies",
    "description": "",
    "x": 197.640625,
    "y": -186.4375
  },
  {
    "id": "368",
    "categoryId": "1930",
    "name": "Enemies",
    "description": "",
    "x": 198.421875,
    "y": -183.734375
  },
  {
    "id": "367",
    "categoryId": "1931",
    "name": "Enemy Camp",
    "description": "",
    "x": 201.328125,
    "y": -185.28125
  },
  {
    "id": "366",
    "categoryId": "1933",
    "name": "Blue Hinox",
    "description": "",
    "x": 198.984375,
    "y": -185.984375
  },
  {
    "id": "365",
    "categoryId": "1935",
    "name": "Eventide Island",
    "description": "",
    "x": 199.390625,
    "y": -184.84375
  },
  {
    "id": "363",
    "categoryId": "1933",
    "name": "Bone Hinox",
    "description": "",
    "x": 158.640625,
    "y": -165.625
  },
  {
    "id": "358",
    "categoryId": "1931",
    "name": "Enemy Camp",
    "description": "",
    "x": 156.7265625,
    "y": -182.71484375
  },
  {
    "id": "356",
    "categoryId": "1933",
    "name": "Lynel",
    "description": "",
    "x": 153.7421875,
    "y": -173.421875
  },
  {
    "id": "355",
    "categoryId": "1933",
    "name": "Hinox",
    "description": "",
    "x": 151.125,
    "y": -175.4765625
  },
  {
    "id": "353",
    "categoryId": "1936",
    "name": "Cracked Wall",
    "description": "",
    "x": 193.74609375,
    "y": -154.31640625
  },
  {
    "id": "349",
    "categoryId": "1935",
    "name": "A Song of Storms",
    "description": "",
    "x": 160.54296875,
    "y": -178.40234375
  },
  {
    "id": "347",
    "categoryId": "1935",
    "name": "Thunder Magnet",
    "description": "",
    "x": 152.1484375,
    "y": -183.171875
  },
  {
    "id": "344",
    "categoryId": "1935",
    "name": "The Horseback Hoodlumns",
    "description": "",
    "x": 136.171875,
    "y": -182.2109375
  },
  {
    "id": "343",
    "categoryId": "1935",
    "name": "Horse Mini-Game",
    "description": "",
    "x": 136.046875,
    "y": -181.77734375
  },
  {
    "id": "342",
    "categoryId": "1934",
    "name": "Subdued Ceremony (#1)",
    "description": "",
    "x": 124.0390625,
    "y": -126.4765625
  },
  {
    "id": "338",
    "categoryId": "1934",
    "name": "Shelter from the Storm (#11)",
    "description": "",
    "x": 130.7109375,
    "y": -158.2421875
  },
  {
    "id": "331",
    "categoryId": "1901",
    "name": "Hetsu (2nd Encounter)",
    "description": "",
    "x": 144.59765625,
    "y": -110.75390625
  },
  {
    "id": "326",
    "categoryId": "1901",
    "name": "Chest",
    "description": "",
    "x": 151.6796875,
    "y": -123.42578125
  },
  {
    "id": "325",
    "categoryId": "1931",
    "name": "Bokoblin Enemy Camp",
    "description": "",
    "x": 155.2109375,
    "y": -126.65234375
  },
  {
    "id": "324",
    "categoryId": "1901",
    "name": "Chest",
    "description": "",
    "x": 156.94140625,
    "y": -126.44921875
  },
  {
    "id": "323",
    "categoryId": "1901",
    "name": "Chest",
    "description": "",
    "x": 157.86328125,
    "y": -126.34765625
  },
  {
    "id": "322",
    "categoryId": "1901",
    "name": "Chest",
    "description": "",
    "x": 163.42578125,
    "y": -124.1953125
  },
  {
    "id": "321",
    "categoryId": "1935",
    "name": "Special Delivery",
    "description": "",
    "x": 171.05859375,
    "y": -126.68359375
  },
  {
    "id": "320",
    "categoryId": "1936",
    "name": "Cracked Rocks",
    "description": "",
    "x": 168.37109375,
    "y": -122.52734375
  },
  {
    "id": "319",
    "categoryId": "1935",
    "name": "Luminous Stone Gathering",
    "description": "",
    "x": 179.36328125,
    "y": -120.9453125
  },
  {
    "id": "318",
    "categoryId": "1935",
    "name": "Frog Catching",
    "description": "",
    "x": 179.8046875,
    "y": -120.58203125
  },
  {
    "id": "317",
    "categoryId": "1901",
    "name": "Chest",
    "description": "",
    "x": 179.64453125,
    "y": -120.51953125
  },
  {
    "id": "316",
    "categoryId": "1935",
    "name": "A Wife Washed Away",
    "description": "",
    "x": 180.3828125,
    "y": -119.53515625
  },
  {
    "id": "315",
    "categoryId": "1935",
    "name": "The Ceremonial Song",
    "description": "",
    "x": 179.5859375,
    "y": -120.0390625
  },
  {
    "id": "314",
    "categoryId": "1935",
    "name": "Diving is Beauty!",
    "description": "",
    "x": 179.44140625,
    "y": -119.8984375
  },
  {
    "id": "312",
    "categoryId": "1935",
    "name": "Lynel Safari",
    "description": "",
    "x": 180.296875,
    "y": -120.02734375
  },
  {
    "id": "307",
    "categoryId": "1931",
    "name": "Lizalfos' Camp",
    "description": "",
    "x": 173.3203125,
    "y": -126.09375
  },
  {
    "id": "301",
    "categoryId": "1935",
    "name": "The Crowned Beast",
    "description": "",
    "x": 168.47265625,
    "y": -134.953125
  },
  {
    "id": "298",
    "categoryId": "1934",
    "name": "Resolve and Grief (#3)",
    "description": "",
    "x": 117.3203125,
    "y": -147.140625
  },
  {
    "id": "296",
    "categoryId": "1935",
    "name": "Misko, the Great Bandit",
    "description": "",
    "x": 155.71484375,
    "y": -158.16796875
  },
  {
    "id": "294",
    "categoryId": "1937",
    "name": "Great Fairy Cotera",
    "description": "",
    "x": 158.9375,
    "y": -141.203125
  },
  {
    "id": "293",
    "categoryId": "1935",
    "name": "Watch Out for the Flowers",
    "description": "",
    "x": 140.8671875,
    "y": -141.16015625
  },
  {
    "id": "292",
    "categoryId": "1935",
    "name": "Wild Horses",
    "description": "",
    "x": 155.3671875,
    "y": -158.16015625
  },
  {
    "id": "291",
    "categoryId": "1935",
    "name": "The Royal White Stallion",
    "description": "",
    "x": 105.5859375,
    "y": -147.95703125
  },
  {
    "id": "290",
    "categoryId": "1935",
    "name": "A Rare Find",
    "description": "",
    "x": 105.515625,
    "y": -147.75390625
  },
  {
    "id": "289",
    "categoryId": "1935",
    "name": "My Hero",
    "description": "",
    "x": 106.21875,
    "y": -147.91015625
  },
  {
    "id": "285",
    "categoryId": "1935",
    "name": "Playtime with Cottla",
    "description": "",
    "x": 157.5546875,
    "y": -143.02734375
  },
  {
    "id": "284",
    "categoryId": "1935",
    "name": "Flown the Coop",
    "description": "",
    "x": 156.65234375,
    "y": -143.01953125
  },
  {
    "id": "283",
    "categoryId": "1935",
    "name": "Koko",
    "description": "",
    "x": 156.1796875,
    "y": -143.85546875
  },
  {
    "id": "282",
    "categoryId": "1931",
    "name": "",
    "description": "",
    "x": 161.9296875,
    "y": -149.48828125
  },
  {
    "id": "281",
    "categoryId": "1901",
    "name": "Chest",
    "description": "",
    "x": 155.02734375,
    "y": -155.31640625
  },
  {
    "id": "280",
    "categoryId": "1931",
    "name": "Bokoblin Enemy Camp",
    "description": "",
    "x": 151.6875,
    "y": -158.5703125
  },
  {
    "id": "279",
    "categoryId": "1901",
    "name": "Cracked Wall",
    "description": "",
    "x": 148.78515625,
    "y": -157.19140625
  },
  {
    "id": "278",
    "categoryId": "1931",
    "name": "Enemy Camp",
    "description": "",
    "x": 141.546875,
    "y": -154.14453125
  },
  {
    "id": "277",
    "categoryId": "1903",
    "name": "Korok Leaf",
    "description": "",
    "x": 140.7734375,
    "y": -154.45703125
  },
  {
    "id": "276",
    "categoryId": "1936",
    "name": "Cracked Wall",
    "description": "",
    "x": 137.171875,
    "y": -150.87890625
  },
  {
    "id": "275",
    "categoryId": "1931",
    "name": "Bokoblin Enemy Camp",
    "description": "",
    "x": 131.6640625,
    "y": -148.25
  },
  {
    "id": "255",
    "categoryId": "1926",
    "name": "Divine Beast Vah Ruta",
    "description": "",
    "x": 185,
    "y": -125.28125
  },
  {
    "id": "254",
    "categoryId": "1930",
    "name": "Lynel",
    "description": "",
    "x": 188.21484375,
    "y": -119.38671875
  },
  {
    "id": "241",
    "categoryId": "1901",
    "name": "Hateno Ancient Tech Lab",
    "description": "",
    "x": 187.0703125,
    "y": -161.2265625
  },
  {
    "id": "235",
    "categoryId": "1930",
    "name": "White Chuchu x 2",
    "description": "",
    "x": 107.2265625,
    "y": -159.41015625
  },
  {
    "id": "234",
    "categoryId": "1930",
    "name": "White Chuchu x 2",
    "description": "",
    "x": 108.46875,
    "y": -160.15234375
  },
  {
    "id": "233",
    "categoryId": "1915",
    "name": "Amber",
    "description": "",
    "x": 107.875,
    "y": -162.69921875
  },
  {
    "id": "231",
    "categoryId": "1932",
    "name": "Guardian",
    "description": "A broken (but active) Guardian will awaken when Link gets near it.",
    "x": 120.76171875,
    "y": -158.44921875
  },
  {
    "id": "229",
    "categoryId": "1935",
    "name": "Hestu",
    "description": "Hestu Location",
    "x": 159.875,
    "y": -150.4296875
  },
  {
    "id": "228",
    "categoryId": "1920",
    "name": "Hyrule Castle",
    "description": "",
    "x": 124.078125,
    "y": -111.453125
  },
  {
    "id": "225",
    "categoryId": "1931",
    "name": "Bokoblin Camp",
    "description": "Four red Bokoblins, one is atop a platform.",
    "x": 119.1484375,
    "y": -152.8203125
  },
  {
    "id": "221",
    "categoryId": "1901",
    "name": "Pigeon",
    "description": "Two pigeons.",
    "x": 110.8125,
    "y": -167.7578125
  },
  {
    "id": "220",
    "categoryId": "1930",
    "name": "Stal Bokoblin",
    "description": "Two Stal Bokoblins appear here at night.",
    "x": 120.78125,
    "y": -164.203125
  },
  {
    "id": "216",
    "categoryId": "1901",
    "name": "Serenne Stable",
    "description": "",
    "x": 107.25,
    "y": -98.125
  },
  {
    "id": "215",
    "categoryId": "1904",
    "name": "Fire Arrow x5",
    "description": "Locked inside a Treasure Chest that is unlocked after all the Bokoblins have been cleared.",
    "x": 117.2734375,
    "y": -164.140625
  },
  {
    "id": "214",
    "categoryId": "1906",
    "name": "Hylian Trousers",
    "description": "Inside a Treasure Chest.",
    "x": 115.453125,
    "y": -162.78125
  },
  {
    "id": "213",
    "categoryId": "1930",
    "name": "Bokoblin",
    "description": "Red Bokoblin.",
    "x": 115.375,
    "y": -163.046875
  },
  {
    "id": "212",
    "categoryId": "1914",
    "name": "Rushroom",
    "description": "Four dotting the cliff side.",
    "x": 112.703125,
    "y": -171.015625
  },
  {
    "id": "211",
    "categoryId": "1914",
    "name": "Hearty Truffle",
    "description": "Description: This rare mushroom has a rich scent. Cook it before eating to temporarily increase your maximum hearts. Additional Effect: Restores 2 hearts.",
    "x": 112.375,
    "y": -170.765625
  },
  {
    "id": "210",
    "categoryId": "1915",
    "name": "Sunset Firefly",
    "description": "Six Sunset Fireflies appear here at night.",
    "x": 112.546875,
    "y": -171
  },
  {
    "id": "209",
    "categoryId": "1932",
    "name": "Guardian",
    "description": "A broken (but active) Guardian will awaken when Link gets near it.",
    "x": 120.2578125,
    "y": -159.25390625
  },
  {
    "id": "208",
    "categoryId": "1936",
    "name": "Cracked Wall",
    "description": "",
    "x": 120.6796875,
    "y": -159.11328125
  },
  {
    "id": "207",
    "categoryId": "1930",
    "name": "Bokoblin",
    "description": "Red Bokoblin.",
    "x": 114.3125,
    "y": -164.640625
  },
  {
    "id": "206",
    "categoryId": "1901",
    "name": "Pigeon",
    "description": "",
    "x": 113.4375,
    "y": -166.4375
  },
  {
    "id": "203",
    "categoryId": "1914",
    "name": "Hylian Shroom",
    "description": "",
    "x": 113.78125,
    "y": -161.34375
  },
  {
    "id": "202",
    "categoryId": "1901",
    "name": "Boar",
    "description": "Three Boars.",
    "x": 112.84375,
    "y": -161.625
  },
  {
    "id": "201",
    "categoryId": "1915",
    "name": "Sizzlewing Butterfly",
    "description": "",
    "x": 109.9375,
    "y": -162.046875
  },
  {
    "id": "199",
    "categoryId": "1930",
    "name": "Stal Bokoblin",
    "description": "Three Stal Bokoblins appear here at night.",
    "x": 104.28125,
    "y": -165.921875
  },
  {
    "id": "198",
    "categoryId": "1930",
    "name": "Stal Bokoblin",
    "description": "Appears here at night.",
    "x": 104.15625,
    "y": -165.109375
  },
  {
    "id": "197",
    "categoryId": "1901",
    "name": "Explosive Barrel",
    "description": "Two Explosive Barrels.",
    "x": 106.3984375,
    "y": -159
  },
  {
    "id": "196",
    "categoryId": "1911",
    "name": "Seared Steak",
    "description": "On spit above Campfire.",
    "x": 106.3828125,
    "y": -159.30078125
  },
  {
    "id": "195",
    "categoryId": "1903",
    "name": "Boko Club",
    "description": "",
    "x": 106.2421875,
    "y": -159.40234375
  },
  {
    "id": "194",
    "categoryId": "1931",
    "name": "Bokoblin Camp",
    "description": "Three red Bokoblins. Campfire is lit.",
    "x": 106.21875,
    "y": -159.21484375
  },
  {
    "id": "193",
    "categoryId": "1901",
    "name": "Tower",
    "description": "Just a tower for Link to climb.",
    "x": 103.21875,
    "y": -160.734375
  },
  {
    "id": "192",
    "categoryId": "1901",
    "name": "Boulder",
    "description": "Two Boulders atop the cliff.",
    "x": 103.640625,
    "y": -158.421875
  },
  {
    "id": "191",
    "categoryId": "1901",
    "name": "Campfire",
    "description": "Lit",
    "x": 103.546875,
    "y": -158.359375
  },
  {
    "id": "187",
    "categoryId": "1915",
    "name": "Apple",
    "description": "Three Apples on a tree.",
    "x": 103.609375,
    "y": -158.1875
  },
  {
    "id": "186",
    "categoryId": "1913",
    "name": "Hyrule Herb",
    "description": "Three Hyrule Herbs.",
    "x": 104.03125,
    "y": -157.96875
  },
  {
    "id": "185",
    "categoryId": "1901",
    "name": "Campfire",
    "description": "Lit",
    "x": 106.4296875,
    "y": -153.3203125
  },
  {
    "id": "183",
    "categoryId": "1901",
    "name": "Tower",
    "description": "Just a tower that Link can climb.",
    "x": 106.125,
    "y": -158.203125
  },
  {
    "id": "182",
    "categoryId": "1905",
    "name": "Boko Shield",
    "description": "",
    "x": 107.578125,
    "y": -159.421875
  },
  {
    "id": "181",
    "categoryId": "1903",
    "name": "Boko Club",
    "description": "",
    "x": 107.59375,
    "y": -159.4375
  },
  {
    "id": "180",
    "categoryId": "1911",
    "name": "Seared Steak",
    "description": "On the spit in the camp.",
    "x": 107.609375,
    "y": -159.421875
  },
  {
    "id": "179",
    "categoryId": "1915",
    "name": "Blue Nightshade",
    "description": "",
    "x": 108.140625,
    "y": -158.953125
  },
  {
    "id": "178",
    "categoryId": "1915",
    "name": "Apple",
    "description": "Three Apples on a tree.",
    "x": 108.1875,
    "y": -158.875
  },
  {
    "id": "177",
    "categoryId": "1914",
    "name": "Hearty Truffle",
    "description": "Two Hearty Truffles inside a hollow stump.",
    "x": 108.890625,
    "y": -159.03125
  },
  {
    "id": "176",
    "categoryId": "1901",
    "name": "Unknown Material",
    "description": "Pink flower, unidentified",
    "x": 109.390625,
    "y": -158.890625
  },
  {
    "id": "175",
    "categoryId": "1915",
    "name": "Apple",
    "description": "Two Apples on a tree.",
    "x": 110.078125,
    "y": -159.1875
  },
  {
    "id": "174",
    "categoryId": "1915",
    "name": "Courser Bee Honey",
    "description": "",
    "x": 110,
    "y": -159.203125
  },
  {
    "id": "173",
    "categoryId": "1914",
    "name": "Hylian Shroom",
    "description": "At the base of a tree.",
    "x": 109.125,
    "y": -160.203125
  },
  {
    "id": "172",
    "categoryId": "1915",
    "name": "Acorn",
    "description": "Two Acorns.",
    "x": 110.09375,
    "y": -160.9375
  },
  {
    "id": "171",
    "categoryId": "1903",
    "name": "Tree Branch",
    "description": "",
    "x": 110.578125,
    "y": -161.234375
  },
  {
    "id": "170",
    "categoryId": "1901",
    "name": "Cracked Wall",
    "description": "",
    "x": 110.0625,
    "y": -161.96875
  },
  {
    "id": "169",
    "categoryId": "1901",
    "name": "Boar",
    "description": "",
    "x": 111.609375,
    "y": -160.625
  },
  {
    "id": "168",
    "categoryId": "1901",
    "name": "THIS CLEARING IS THE REAL SPOT",
    "description": "",
    "x": 112.8125,
    "y": -161.09375
  },
  {
    "id": "167",
    "categoryId": "1914",
    "name": "Hearty Truffle",
    "description": "",
    "x": 112.828125,
    "y": -159.875
  },
  {
    "id": "166",
    "categoryId": "1901",
    "name": "Pigeon",
    "description": "",
    "x": 112.65625,
    "y": -159.828125
  },
  {
    "id": "165",
    "categoryId": "1901",
    "name": "Campfire",
    "description": "Lit",
    "x": 103.140625,
    "y": -161.625
  },
  {
    "id": "164",
    "categoryId": "1903",
    "name": "Torch",
    "description": "Underneath the tree fort.",
    "x": 103.15625,
    "y": -161.90625
  },
  {
    "id": "163",
    "categoryId": "1914",
    "name": "Hylian Shroom",
    "description": "Two Hylian Shrooms underneath the tree fort.",
    "x": 103.140625,
    "y": -161.890625
  },
  {
    "id": "162",
    "categoryId": "1914",
    "name": "Stamella Shroom",
    "description": "Underneath the tree fort.",
    "x": 103.203125,
    "y": -161.78125
  },
  {
    "id": "161",
    "categoryId": "1913",
    "name": "Spicy Pepper",
    "description": "Nine Spicy Peppers among three plants underneath the tree fort.",
    "x": 103.015625,
    "y": -162.28125
  },
  {
    "id": "160",
    "categoryId": "1930",
    "name": "Keese",
    "description": "Three Keese appear here at night.",
    "x": 108.1875,
    "y": -164.875
  },
  {
    "id": "159",
    "categoryId": "1901",
    "name": "Cooking Pot",
    "description": "Unlit",
    "x": 110.125,
    "y": -165.578125
  },
  {
    "id": "158",
    "categoryId": "1901",
    "name": "Campfire",
    "description": "Unlit",
    "x": 109.890625,
    "y": -165.640625
  },
  {
    "id": "157",
    "categoryId": "1901",
    "name": "Boar",
    "description": "",
    "x": 109.828125,
    "y": -162.6875
  },
  {
    "id": "155",
    "categoryId": "1914",
    "name": "Hylian Shroom",
    "description": "Three Hylian Shrooms.",
    "x": 110.25,
    "y": -162.09375
  },
  {
    "id": "153",
    "categoryId": "1901",
    "name": "Tree Branch",
    "description": "There are two Tree Branches near the cliff here.",
    "x": 110.609375,
    "y": -162.359375
  },
  {
    "id": "149",
    "categoryId": "1901",
    "name": "Mineral Deposit",
    "description": "Two mineral deposits are located here. One contains a Sapphire and Flint, the other contains an Amber.",
    "x": 108.265625,
    "y": -171.1875
  },
  {
    "id": "148",
    "categoryId": "1904",
    "name": "Traveler's Bow",
    "description": "Inside a Treasure Chest beneath a Boulder. This one has increased Durability.",
    "x": 113.32421875,
    "y": -164.359375
  },
  {
    "id": "147",
    "categoryId": "1901",
    "name": "Mineral Deposit",
    "description": "Two mineral deposits, one contains Flint, the other contains a Topaz and an Amber.",
    "x": 110.921875,
    "y": -171.171875
  },
  {
    "id": "146",
    "categoryId": "1903",
    "name": "Rusty Broadsword",
    "description": "Reference to the fake Master Swords in ALttP",
    "x": 114.1171875,
    "y": -157.84375
  },
  {
    "id": "145",
    "categoryId": "1904",
    "name": "Ice Arrow",
    "description": "Unknown quantity",
    "x": 114.75,
    "y": -158.0625
  },
  {
    "id": "144",
    "categoryId": "1904",
    "name": "Fire Arrow",
    "description": "Unknown quanitity",
    "x": 114.75,
    "y": -158.125
  },
  {
    "id": "143",
    "categoryId": "1931",
    "name": "Bokoblin Camp",
    "description": "",
    "x": 112.7890625,
    "y": -152.52734375
  },
  {
    "id": "142",
    "categoryId": "1914",
    "name": "Hylian Shroom",
    "description": "Four Hylian Shrooms",
    "x": 109.265625,
    "y": -159.65625
  },
  {
    "id": "141",
    "categoryId": "1933",
    "name": "Stone Talus",
    "description": "",
    "x": 110.97265625,
    "y": -154.0234375
  },
  {
    "id": "139",
    "categoryId": "1901",
    "name": "Treasure Chest",
    "description": "Unknown contents.",
    "x": 111.296875,
    "y": -167.546875
  },
  {
    "id": "138",
    "categoryId": "1931",
    "name": "Bokoblin Camp",
    "description": "Three red Bokoblins",
    "x": 111.34375,
    "y": -167.65625
  },
  {
    "id": "137",
    "categoryId": "1915",
    "name": "Sizzlewing Butterfly",
    "description": "Two Sizzlewing Butterflies",
    "x": 112.21875,
    "y": -167.890625
  },
  {
    "id": "136",
    "categoryId": "1931",
    "name": "Bokoblin Camp",
    "description": "Five red Bokoblins, two are atop platforms.",
    "x": 108.875,
    "y": -153.73046875
  },
  {
    "id": "135",
    "categoryId": "1901",
    "name": "Explosive Barrel",
    "description": "Unknown number",
    "x": 103.8125,
    "y": -158.65625
  },
  {
    "id": "134",
    "categoryId": "1903",
    "name": "Fire Rod",
    "description": "Inside a Treasure Chest (which can be opened at any time).",
    "x": 103.96875,
    "y": -158.921875
  },
  {
    "id": "133",
    "categoryId": "1931",
    "name": "Bokoblin Camp",
    "description": "Four red Bokoblins, one is atop a platform.",
    "x": 103.640625,
    "y": -158.640625
  },
  {
    "id": "132",
    "categoryId": "1906",
    "name": "Quilted Shirt",
    "description": "Obtained from the Old Man.",
    "x": 106.1875,
    "y": -169.171875
  },
  {
    "id": "131",
    "categoryId": "1901",
    "name": "Mineral Deposit",
    "description": "A mineral deposit resembling a cairn rests at Mount Hylia's peak.",
    "x": 106.1875,
    "y": -169.203125
  },
  {
    "id": "130",
    "categoryId": "1915",
    "name": "Hightail Lizard",
    "description": "",
    "x": 114,
    "y": -167.09375
  },
  {
    "id": "129",
    "categoryId": "1931",
    "name": "Bokoblin Camp",
    "description": "",
    "x": 113.8671875,
    "y": -162.64453125
  },
  {
    "id": "127",
    "categoryId": "1901",
    "name": "Cracked Wall",
    "description": "",
    "x": 111.40625,
    "y": -171.34375
  },
  {
    "id": "126",
    "categoryId": "1915",
    "name": "Apple",
    "description": "Eight Apples",
    "x": 112.609375,
    "y": -171.09375
  },
  {
    "id": "125",
    "categoryId": "1930",
    "name": "Bokoblin",
    "description": "Two red Bokoblins",
    "x": 112.609375,
    "y": -171.203125
  },
  {
    "id": "124",
    "categoryId": "1914",
    "name": "Stamella Shroom",
    "description": "",
    "x": 112.59375,
    "y": -170.609375
  },
  {
    "id": "122",
    "categoryId": "1905",
    "name": "Pot Lid",
    "description": "",
    "x": 114.375,
    "y": -170
  },
  {
    "id": "121",
    "categoryId": "1914",
    "name": "Endura Shroom",
    "description": "",
    "x": 114.359375,
    "y": -170.140625
  },
  {
    "id": "120",
    "categoryId": "1901",
    "name": "Baked Apple",
    "description": "",
    "x": 114.421875,
    "y": -169.671875
  },
  {
    "id": "119",
    "categoryId": "1914",
    "name": "Stamella Shroom",
    "description": "",
    "x": 114.4375,
    "y": -169.671875
  },
  {
    "id": "118",
    "categoryId": "1913",
    "name": "Spicy Pepper",
    "description": "Inside Pot.",
    "x": 114.4375,
    "y": -169.640625
  },
  {
    "id": "117",
    "categoryId": "1901",
    "name": "Woodcutter's Axe",
    "description": "",
    "x": 114.421875,
    "y": -169.640625
  },
  {
    "id": "116",
    "categoryId": "1903",
    "name": "Farmer's Pitchfork",
    "description": "",
    "x": 114.296875,
    "y": -169.796875
  },
  {
    "id": "115",
    "categoryId": "1903",
    "name": "Torch",
    "description": "",
    "x": 114.359375,
    "y": -169.984375
  },
  {
    "id": "114",
    "categoryId": "1901",
    "name": "Cooking Pot",
    "description": "Lit",
    "x": 114.25,
    "y": -169.859375
  },
  {
    "id": "113",
    "categoryId": "1915",
    "name": "Hightail Lizard",
    "description": "",
    "x": 114.125,
    "y": -170.0625
  },
  {
    "id": "111",
    "categoryId": "1901",
    "name": "Pigeon",
    "description": "Two pigeons",
    "x": 113.984375,
    "y": -170.3125
  },
  {
    "id": "110",
    "categoryId": "1915",
    "name": "Apple",
    "description": "",
    "x": 113.84375,
    "y": -170.609375
  },
  {
    "id": "108",
    "categoryId": "1914",
    "name": "Endura Shroom",
    "description": "Three (total) Endura Shrooms along multiple trees.",
    "x": 115.046875,
    "y": -170.40625
  },
  {
    "id": "107",
    "categoryId": "1915",
    "name": "Sizzlewing Butterfly",
    "description": "",
    "x": 118.03125,
    "y": -166.65625
  },
  {
    "id": "106",
    "categoryId": "1932",
    "name": "Guardian",
    "description": "A broken (but active) Guardian will awaken when Link gets near it.",
    "x": 121.04296875,
    "y": -159.71875
  },
  {
    "id": "105",
    "categoryId": "1901",
    "name": "Pigeon",
    "description": "Two pigeons appear here",
    "x": 120.234375,
    "y": -163.65625
  },
  {
    "id": "104",
    "categoryId": "1915",
    "name": "Sizzlewing Butterfly",
    "description": "",
    "x": 118,
    "y": -164.125
  },
  {
    "id": "103",
    "categoryId": "1901",
    "name": "Explosive Barrel",
    "description": "Five Explosive Barrels are located here.",
    "x": 117.375,
    "y": -164.046875
  },
  {
    "id": "102",
    "categoryId": "1930",
    "name": "Keese",
    "description": "Two Keese appear here at night.",
    "x": 117.40625,
    "y": -163.25
  },
  {
    "id": "101",
    "categoryId": "1911",
    "name": "Seared Steak",
    "description": "Over the Campfire.",
    "x": 116.921875,
    "y": -162.46875
  },
  {
    "id": "100",
    "categoryId": "1931",
    "name": "Bokoblin Camp",
    "description": "Two red Bokoblins appear here. The Campfire is lit.",
    "x": 116.625,
    "y": -162.265625
  },
  {
    "id": "99",
    "categoryId": "1901",
    "name": "Explosive Barrel",
    "description": "Four Explosive Barrels are located here.",
    "x": 116.703125,
    "y": -161.890625
  },
  {
    "id": "98",
    "categoryId": "1901",
    "name": "Boulder",
    "description": "",
    "x": 116.390625,
    "y": -161.734375
  },
  {
    "id": "97",
    "categoryId": "1903",
    "name": "Torch",
    "description": "",
    "x": 112.8125,
    "y": -159.90625
  },
  {
    "id": "96",
    "categoryId": "1914",
    "name": "Endura Shroom",
    "description": "Two Endura Shrooms",
    "x": 115.71875,
    "y": -170.375
  },
  {
    "id": "95",
    "categoryId": "1914",
    "name": "Stamella Shroom",
    "description": "",
    "x": 115.359375,
    "y": -170.046875
  },
  {
    "id": "94",
    "categoryId": "1930",
    "name": "Keese",
    "description": "Three Keese appear here at night.",
    "x": 115.65625,
    "y": -169.921875
  },
  {
    "id": "93",
    "categoryId": "1930",
    "name": "Stal Bokoblin",
    "description": "Three Stal Bokoblins appear here at night.",
    "x": 116.21875,
    "y": -170.203125
  },
  {
    "id": "92",
    "categoryId": "1904",
    "name": "Boko Bow",
    "description": "",
    "x": 117.46875,
    "y": -166.890625
  },
  {
    "id": "91",
    "categoryId": "1903",
    "name": "Boko Club",
    "description": "",
    "x": 117.375,
    "y": -167.453125
  },
  {
    "id": "90",
    "categoryId": "1905",
    "name": "Boko Shield",
    "description": "",
    "x": 117.46875,
    "y": -166.875
  },
  {
    "id": "89",
    "categoryId": "1901",
    "name": "Campfire",
    "description": "Lit",
    "x": 117.46875,
    "y": -166.875
  },
  {
    "id": "88",
    "categoryId": "1931",
    "name": "Bokoblin Camp",
    "description": "",
    "x": 117.484375,
    "y": -166.890625
  },
  {
    "id": "87",
    "categoryId": "1915",
    "name": "Courser Bee Honey",
    "description": "",
    "x": 117.140625,
    "y": -166.859375
  },
  {
    "id": "86",
    "categoryId": "1930",
    "name": "Bokoblin",
    "description": "Two red Bokoblins appear here.",
    "x": 118.140625,
    "y": -160.859375
  },
  {
    "id": "85",
    "categoryId": "1901",
    "name": "Raft",
    "description": "",
    "x": 109.6875,
    "y": -166.328125
  },
  {
    "id": "84",
    "categoryId": "1931",
    "name": "Bokoblin Camp",
    "description": "Three red Bokoblins One blue Bokoblin One Keese",
    "x": 117.171875,
    "y": -164.09375
  },
  {
    "id": "82",
    "categoryId": "1930",
    "name": "Keese",
    "description": "Three Keese appear here at night.",
    "x": 117.3125,
    "y": -160.078125
  },
  {
    "id": "81",
    "categoryId": "1913",
    "name": "Hyrule Herb",
    "description": "Two Hyrule Herbs grow here.",
    "x": 115.453125,
    "y": -161.21875
  },
  {
    "id": "80",
    "categoryId": "1930",
    "name": "Chuchu",
    "description": "Two Chuchus appear here.",
    "x": 116.0625,
    "y": -161.0625
  },
  {
    "id": "79",
    "categoryId": "1901",
    "name": "Boulder",
    "description": "Two pushable boulders are situated on a ledge here.",
    "x": 115.171875,
    "y": -160.90625
  },
  {
    "id": "78",
    "categoryId": "1930",
    "name": "Keese",
    "description": "Two Keese appear here at night.",
    "x": 115.109375,
    "y": -161.375
  },
  {
    "id": "76",
    "categoryId": "1930",
    "name": "Stal Bokoblin",
    "description": "Three Stal Bokoblins spawn here at night.",
    "x": 114.796875,
    "y": -161.828125
  },
  {
    "id": "75",
    "categoryId": "1930",
    "name": "Bokoblin",
    "description": "Two red Bokoblins (NOT a campsite)",
    "x": 114.328125,
    "y": -160.5
  },
  {
    "id": "74",
    "categoryId": "1901",
    "name": "Campfire",
    "description": "Lit",
    "x": 112.9375,
    "y": -160
  },
  {
    "id": "73",
    "categoryId": "1901",
    "name": "Cooking Pot",
    "description": "Unlit",
    "x": 112.734375,
    "y": -160.015625
  },
  {
    "id": "72",
    "categoryId": "1901",
    "name": "Cooking Pot",
    "description": "Unlit",
    "x": 103.15625,
    "y": -161.5625
  },
  {
    "id": "71",
    "categoryId": "1931",
    "name": "Bokoblin Camp",
    "description": "",
    "x": 105.26171875,
    "y": -156.01171875
  },
  {
    "id": "70",
    "categoryId": "1930",
    "name": "White Chuchu",
    "description": "Two White Chuchus",
    "x": 106.40625,
    "y": -162.859375
  },
  {
    "id": "69",
    "categoryId": "1930",
    "name": "White Chuchu",
    "description": "Two White Chuchus are found here.",
    "x": 107.65625,
    "y": -163.203125
  },
  {
    "id": "68",
    "categoryId": "1901",
    "name": "Campfire",
    "description": "Unlit.",
    "x": 107.78125,
    "y": -163.34375
  },
  {
    "id": "67",
    "categoryId": "1930",
    "name": "White Chuchu",
    "description": "",
    "x": 107.875,
    "y": -163.640625
  },
  {
    "id": "66",
    "categoryId": "1901",
    "name": "Campfire",
    "description": "(Unlit.)",
    "x": 107.921875,
    "y": -164.734375
  },
  {
    "id": "65",
    "categoryId": "1901",
    "name": "Mineral Deposit",
    "description": "Outside of the dilapidated house, containing 2 Rock Salts.",
    "x": 110.75,
    "y": -166.015625
  },
  {
    "id": "64",
    "categoryId": "1904",
    "name": "Traveler's Bow",
    "description": "(Needs confirmation.)",
    "x": 115.046875,
    "y": -158.6953125
  },
  {
    "id": "63",
    "categoryId": "1930",
    "name": "Stal Bokoblin",
    "description": "Three Stal Bokoblins spawn here at night.",
    "x": 109.3125,
    "y": -165.375
  },
  {
    "id": "58",
    "categoryId": "1910",
    "name": "Treasure Chest",
    "description": "Hidden under the water, contents unknown.",
    "x": 110.28125,
    "y": -166.015625
  },
  {
    "id": "56",
    "categoryId": "1904",
    "name": "Soldier's Bow",
    "description": "Found in a Treasure Chest the tower.",
    "x": 114.265625,
    "y": -164.9375
  },
  {
    "id": "55",
    "categoryId": "1901",
    "name": "Goddess Statue",
    "description": "",
    "x": 115.12109375,
    "y": -159.78125
  },
  {
    "id": "52",
    "categoryId": "1904",
    "name": "Arrow x10",
    "description": "",
    "x": 112.5625,
    "y": -159.875
  },
  {
    "id": "51",
    "categoryId": "1904",
    "name": "Traveler's Bow",
    "description": "",
    "x": 112.9375,
    "y": -159.8125
  },
  {
    "id": "50",
    "categoryId": "1930",
    "name": "Keese",
    "description": "Two Keese spawn here at night.",
    "x": 108.484375,
    "y": -164.328125
  },
  {
    "id": "49",
    "categoryId": "1930",
    "name": "White Chuchu",
    "description": "Two White Chuchus are found here.",
    "x": 109.2890625,
    "y": -160.49609375
  },
  {
    "id": "45",
    "categoryId": "1904",
    "name": "Fire Arrow x5",
    "description": "Found inside a Treasure Chest in the cave behind the waterfall.",
    "x": 109.359375,
    "y": -168.375
  },
  {
    "id": "44",
    "categoryId": "1904",
    "name": "Arrow x10",
    "description": "Found inside a Treasure Chest in the cave behind the waterfall.",
    "x": 109.359375,
    "y": -168.375
  },
  {
    "id": "43",
    "categoryId": "1904",
    "name": "Spiked Boko Bow",
    "description": "Found inside a Treasure Chest in the cave behind the waterfall.",
    "x": 109.375,
    "y": -168.390625
  },
  {
    "id": "40",
    "categoryId": "1930",
    "name": "White Chuchu",
    "description": "",
    "x": 110.07421875,
    "y": -161.03515625
  },
  {
    "id": "39",
    "categoryId": "1927",
    "name": "Temple of Time",
    "description": "Temple of Time",
    "x": 114.140625,
    "y": -165.4375
  },
  {
    "id": "38",
    "categoryId": "1915",
    "name": "Wood",
    "description": "There are three bundles of Wood in this dilapidated house, and two bundles outside of it.",
    "x": 110.265625,
    "y": -165.90625
  },
  {
    "id": "37",
    "categoryId": "1903",
    "name": "Korok Leaf",
    "description": "",
    "x": 110.015625,
    "y": -165.578125
  },
  {
    "id": "36",
    "categoryId": "1914",
    "name": "Hylian Shroom",
    "description": "",
    "x": 110.671875,
    "y": -166.296875
  },
  {
    "id": "35",
    "categoryId": "1903",
    "name": "Woodcutter's Axe",
    "description": "",
    "x": 110.703125,
    "y": -166.296875
  },
  {
    "id": "34",
    "categoryId": "1913",
    "name": "Spicy Pepper",
    "description": "There are six Spicy Peppers growing on two plants here. (Three to each plant.)",
    "x": 111.46875,
    "y": -166
  }
] satisfies BotwMapMarker[];
