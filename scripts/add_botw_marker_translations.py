#!/usr/bin/env python3
"""Add Chinese display fields to BOTW map marker data."""

from __future__ import annotations

import json
import re
from pathlib import Path


DATA_FILE = Path("src/data/botw-map-data.ts")

NAME_TRANSLATIONS = {
    "": "",
    "Acorn": "橡子",
    "Amber": "琥珀",
    "Apple": "苹果",
    "Arrow x10": "木箭 ×10",
    "Baked Apple": "烤苹果",
    "Blue Hinox": "蓝色西诺克斯",
    "Blue Nightshade": "潜行草",
    "Blupee": "卢咪",
    "Boar": "野猪",
    "Boko Bow": "波克弓",
    "Boko Club": "波克棍",
    "Boko Shield": "波克盾",
    "Bokoblin": "波克布林",
    "Bokoblin Camp": "波克布林营地",
    "Bokoblin Enemy Camp": "波克布林敌营",
    "Bone Hinox": "骷髅西诺克斯",
    "Boulder": "巨石",
    "Buried Chest": "埋藏宝箱",
    "Campfire": "篝火",
    "Chest": "宝箱",
    "Chuchu": "丘丘",
    "Cooking Pot": "料理锅",
    "Courser Bee Honey": "精力蜂的蜂蜜",
    "Cracked Rocks": "裂开的岩石",
    "Cracked Wall": "可炸墙",
    "Cracked rocks": "裂开的岩石",
    "Cracled Rocks": "裂开的岩石",
    "Divine Beast Vah Ruta": "神兽瓦·露塔",
    "Emblazoned Shield": "纹章盾",
    "Endura Shroom": "毅力蘑菇",
    "Enemies": "敌人",
    "Enemy Base": "敌方据点",
    "Enemy Camp": "敌营",
    "Explosive Barrel": "爆炸桶",
    "Farmer's Pitchfork": "农用草叉",
    "Fire Arrow": "火箭",
    "Fire Arrow x5": "火箭 ×5",
    "Fire Rod": "火焰杖",
    "Goddess Statue": "女神像",
    "Great Fairy Fountain": "大妖精之泉",
    "Guardian": "守护者",
    "Hearty Truffle": "生命松露",
    "Hestu": "伯库林",
    "Hetsu (2nd Encounter)": "伯库林（第 2 次遇见）",
    "Hetsu (3rd Encounter)": "伯库林（第 3 次遇见）",
    "Hightail Lizard": "速速蜥",
    "Hinox": "西诺克斯",
    "Horned Statue": "恶魔神像",
    "Hylian Shroom": "海拉鲁蘑菇",
    "Hylian Trousers": "海利亚裤子",
    "Hyrule Herb": "海拉鲁草",
    "Ice Arrow": "冰箭",
    "Ice blocks": "冰块",
    "Igneo Talus": "熔岩巨人",
    "Keese": "蝙蝠",
    "Koko": "可可娜",
    "Korok Leaf": "克洛格的团扇",
    "Korok Seed": "呀哈哈种子",
    "Luminous Stone Talus": "夜光岩巨人",
    "Lizafos' Enemy Camp": "蜥蜴战士敌营",
    "Lizalfos' Camp": "蜥蜴战士营地",
    "Lynel": "莱尼尔",
    "Memory": "回忆",
    "Meteor Rod": "陨石杖",
    "Mineral Deposit": "矿床",
    "Pigeon": "鸽子",
    "Pot Lid": "锅盖",
    "Quilted Shirt": "防寒服",
    "Raft": "木筏",
    "Rock Formation": "岩石阵",
    "Rocks": "岩石",
    "Rushroom": "速速蘑菇",
    "Rusty Broadsword": "生锈的剑",
    "Seared Steak": "烤肉",
    "Season Pass Chest": "扩展票宝箱",
    "Shrine of Resurrection": "复苏神庙",
    "Sizzlewing Butterfly": "暖暖凤蝶",
    "Soldier's Bow": "士兵之弓",
    "Spicy Pepper": "暖暖草果",
    "Spiked Boko Bow": "尖刺波克弓",
    "Stal Bokoblin": "骷髅波克布林",
    "Stalnox": "骷髅西诺克斯",
    "Stamella Shroom": "精力蘑菇",
    "Stone Talus": "岩石巨人",
    "Stone Talus (Junior)": "岩石巨人（小型）",
    "Sunset Firefly": "静静萤火虫",
    "Torch": "火把",
    "Tower": "塔",
    "Traveler's Bow": "旅人之弓",
    "Treasure Chest": "宝箱",
    "Treasure Chest: Opal": "宝箱：蛋白石",
    "Treasure Chests": "宝箱",
    "Tree Branch": "树枝",
    "Unknown Material": "未知材料",
    "White Chuchu": "白色丘丘",
    "White Chuchu x 2": "白色丘丘 ×2",
    "Wood": "木柴",
    "Woodcutter's Axe": "伐木斧",
    "elemental weapons": "属性武器",
}

PLACE_TRANSLATIONS = {
    "Akkala": "阿卡莱",
    "Central": "中央",
    "Dueling Peaks": "双子山",
    "East Akkala": "东阿卡莱",
    "Eldin": "奥尔汀",
    "Eventide Island": "沃托里岛",
    "Faron": "费罗尼",
    "Flight Range": "飞行训练场",
    "Foothill": "山麓",
    "Forgotten Temple": "忘却神殿",
    "Gerudo Canyon": "格鲁德峡谷",
    "Gerudo Great Skeleton": "格鲁德大化石",
    "Gerudo Town": "格鲁德小镇",
    "Gerudo": "格鲁德",
    "Goron City": "鼓隆城",
    "Great Fairy Cotera": "可秋拉大妖精",
    "Great Plateau": "初始台地",
    "Hateno Ancient Tech Lab": "哈特诺古代研究所",
    "Hateno Village": "哈特诺村",
    "Hateno": "哈特诺",
    "Hebra Great Skeleton": "海布拉大化石",
    "Hebra Leviathan": "海布拉利维坦",
    "Hebra": "海布拉",
    "Highland": "高原",
    "Hyrule Castle": "海拉鲁城堡",
    "Kakariko Village": "卡卡利科村",
    "Korok Forest": "克洛格森林",
    "Lake": "湖",
    "Lakeside": "湖畔",
    "Lanayru": "拉聂尔",
    "Link's House": "林克的家",
    "Lurelin Village": "沃托里村",
    "Malanya Spring": "马神泉",
    "Northern Icehouse": "北部冰屋",
    "Outskirt": "平原外围",
    "Ridgeland": "丘陵",
    "Rito Village": "利特村",
    "Rito": "利特",
    "Riverside": "河畔",
    "Serenne": "玛丽塔",
    "Snowfield": "雪原",
    "South Akkala": "南阿卡莱",
    "Spring of Courage": "勇气之泉",
    "Spring of Power": "力量之泉",
    "Tabantha Bridge": "塔邦挞大桥",
    "Tabantha": "塔邦挞",
    "Tarrey Town": "一始村",
    "Temple of Time": "时之神殿",
    "Wasteland": "荒野",
    "Wetland": "湿地",
    "Woodland": "森林",
    "Zora's Domain": "卓拉领地",
}

QUEST_TRANSLATIONS = {
    "A Brother's Roast": "兄弟岩烤",
    "A Freezing Rod": "冰冷的杖",
    "A Gift for my Beloved": "给心爱之人的礼物",
    "A Gift for the Great Fairy": "献给大妖精的礼物",
    "A Premonition (#8)": "预兆（#8）",
    "A Rare Find": "稀有发现",
    "A Shady Customer": "可疑的客人",
    "A Song of Storms": "暴风雨之歌",
    "A Wife Washed Away": "被冲走的妻子",
    "Ball 1": "球 1",
    "Ball 2": "球 2",
    "Ball 3": "球 3",
    "Balloon Flight": "气球飞行",
    "Castle weapons - Parisse": "城堡武器 - 帕莉塞",
    "Curry for What Ails You": "治病咖喱",
    "Despair (#16)": "绝望（#16）",
    "Diving is Beauty!": "跳水即是美！",
    "Find Kheel": "寻找琪尔",
    "Find the Fairy Fountain": "寻找妖精之泉",
    "Fireproof Lizard Roundup": "耐火蜥蜴捕捉",
    "Flown the Coop": "飞出鸡舍",
    "Frog Catching": "抓青蛙",
    "Goal 2": "目标 2",
    "Goal 3": "目标 3",
    "Hole 1": "洞 1",
    "Horse Mini-Game": "马术小游戏",
    "Legendary Rabbit Trial": "传说兔子试炼",
    "Leviathan Bones": "利维坦骨骸",
    "Luminous Stone Gathering": "收集夜光石",
    "Lynel Safari": "莱尼尔调查",
    "Master of the Wind": "御风者",
    "Memory #14 - To Mount Lanayru": "回忆 #14 - 前往拉聂尔山",
    "Misko, the Great Bandit": "大盗米斯科",
    "My Hero": "我的勇者",
    "Playtime with Cottla": "和科柯娜玩耍",
    "Recital at Warbler`s Nest": "利特姐妹岩的歌声",
    "Reddit Shield Surf Challenge Start Point": "盾牌滑行挑战起点",
    "Resolve and Grief (#3)": "决意与苦恼（#3）",
    "Return of Calamity Ganon (#15)": "灾厄盖侬复活（#15）",
    "Royal Receipes": "王族食谱",
    "Shelter from the Storm (#11)": "避雨（#11）",
    "Silent Princess (#9)": "静谧公主（#9）",
    "Special Delivery": "特殊投递",
    "Stalhorse: Pictured!": "骷髅马照片！",
    "Subdued Ceremony (#1)": "收敛的仪式（#1）",
    "THIS CLEARING IS THE REAL SPOT": "这片空地才是真正地点",
    "The Apple of My Eye": "我眼中的苹果",
    "The Bird in the Mountains": "山上的鸟",
    "The Ceremonial Song": "英杰祭祀诗",
    "The Crowned Beast": "戴冠之兽",
    "The Cursed Statue": "被诅咒的石像",
    "The Gut Check Challenge": "毅力考验",
    "The Horseback Hoodlumns": "骑马的恶徒",
    "The Jewel Trade": "宝石交易",
    "The Lost Pilgrimage": "迷路的朝圣者",
    "The Road to Respect": "通往尊敬之路",
    "The Royal White Stallion": "王族白马",
    "The Spark of Romance": "浪漫火花",
    "The Statue's Bargain": "石像的交易",
    "The Test of Wood": "木之试炼",
    "The Weapon Connoisseur": "武器鉴赏家",
    "Thunder Magnet": "雷电磁石",
    "Trial of Second Sight": "第二视觉试炼",
    "Trial of the Labyrinth": "迷宫试炼",
    "Trial on the Cliff": "断崖试炼",
    "Watch Out for the Flowers": "请勿践踏花朵",
    "Wild Horses": "野马",
    "Zelda's Resentment (#5)": "塞尔达的怨念（#5）",
}

SPECIAL_ROMAN_WORDS = {
    "a": "阿",
    "au": "奥",
    "o": "奥",
    "ruta": "露塔",
    "va": "瓦",
}

CONSONANT_SOUNDS = {
    "b": "巴",
    "c": "卡",
    "ch": "查",
    "d": "达",
    "f": "法",
    "g": "加",
    "h": "哈",
    "j": "加",
    "k": "卡",
    "l": "拉",
    "m": "玛",
    "n": "纳",
    "p": "帕",
    "q": "卡",
    "qu": "库",
    "r": "拉",
    "s": "萨",
    "sh": "夏",
    "t": "塔",
    "th": "塔",
    "v": "瓦",
    "w": "瓦",
    "x": "克斯",
    "y": "亚",
    "z": "扎",
}

VOWEL_SOUNDS = {
    "a": "",
    "aa": "阿",
    "ae": "艾",
    "ai": "艾",
    "au": "奥",
    "ay": "艾",
    "e": "埃",
    "ee": "伊",
    "ei": "艾",
    "i": "伊",
    "ia": "亚",
    "ie": "耶",
    "o": "奥",
    "oa": "奥",
    "oe": "欧",
    "oh": "奥",
    "oo": "乌",
    "ou": "欧",
    "u": "乌",
    "ua": "瓦",
    "ue": "韦",
    "ui": "维",
}

FINAL_SOUNDS = {
    "b": "布",
    "c": "克",
    "d": "德",
    "f": "夫",
    "g": "格",
    "h": "",
    "j": "吉",
    "k": "克",
    "l": "尔",
    "m": "姆",
    "n": "恩",
    "p": "普",
    "q": "克",
    "r": "尔",
    "s": "斯",
    "t": "特",
    "v": "夫",
    "w": "乌",
    "x": "克斯",
    "y": "伊",
    "z": "兹",
}

DESCRIPTION_TRANSLATIONS = {
    "": "",
    "(Needs confirmation.)": "（需要确认。）",
    "(Unlit.)": "（未点燃。）",
    "1 of 2 chests in pond": "池塘中 2 个宝箱之一。",
    "A broken (but active) Guardian will awaken when Link gets near it.": "损坏但仍可活动的守护者会在林克靠近时苏醒。",
    "A mineral deposit resembling a cairn rests at Mount Hylia's peak.": "海利亚山顶有一处类似石堆的矿床。",
    "Appears here at night.": "夜间会在这里出现。",
    "At the base of a tree.": "在树根处。",
    "Description: This rare mushroom has a rich scent. Cook it before eating to temporarily increase your maximum hearts. Additional Effect: Restores 2 hearts.": "说明：这种稀有蘑菇香气浓郁。烹饪后食用可暂时增加心心上限。附加效果：恢复 2 颗心。",
    "Eight Apples": "8 个苹果。",
    "Five Explosive Barrels are located here.": "这里有 5 个爆炸桶。",
    "Five red Bokoblins, two are atop platforms.": "5 只红色波克布林，其中 2 只在平台上。",
    "Found in a Treasure Chest the tower.": "在塔上的宝箱中找到。",
    "Found inside a Treasure Chest in the cave behind the waterfall.": "在瀑布后方洞穴的宝箱中找到。",
    "Four Explosive Barrels are located here.": "这里有 4 个爆炸桶。",
    "Four Hylian Shrooms": "4 个海拉鲁蘑菇。",
    "Four dotting the cliff side.": "4 个分布在崖壁上。",
    "Four red Bokoblins, one is atop a platform.": "4 只红色波克布林，其中 1 只在平台上。",
    "Gottah's quest": "戈塔的任务。",
    "Hestu Location": "伯库林位置。",
    "Hidden under the water, contents unknown.": "藏在水下，内容未知。",
    "Inside Pot.": "在锅里。",
    "Inside a Treasure Chest (which can be opened at any time).": "在宝箱中（可随时打开）。",
    "Inside a Treasure Chest beneath a Boulder. This one has increased Durability.": "在巨石下方的宝箱中。这件物品耐久度更高。",
    "Inside a Treasure Chest.": "在宝箱中。",
    "Just a tower for Link to climb.": "一座可供林克攀爬的塔。",
    "Just a tower that Link can climb.": "一座可供林克攀爬的塔。",
    "Lit": "已点燃。",
    "Locked inside a Treasure Chest that is unlocked after all the Bokoblins have been cleared.": "锁在宝箱中，清掉所有波克布林后解锁。",
    "Nine Spicy Peppers among three plants underneath the tree fort.": "树屋下方 3 株植物上共有 9 个暖暖草果。",
    "Obtained from the Old Man.": "从老人处获得。",
    "On spit above Campfire.": "在篝火上方的烤架上。",
    "On the spit in the camp.": "在营地的烤架上。",
    "Outside of the dilapidated house, containing 2 Rock Salts.": "在破旧房屋外，包含 2 个岩盐。",
    "Over the Campfire.": "在篝火上方。",
    "Parisse side quest": "帕莉塞支线任务。",
    "Pink flower, unidentified": "粉色花朵，未识别。",
    "Red Bokoblin.": "红色波克布林。",
    "Reference to the fake Master Swords in ALttP": "致敬《众神的三角力量》中的假大师之剑。",
    "Six Sunset Fireflies appear here at night.": "夜间这里会出现 6 只静静萤火虫。",
    "Temple of Time": "时之神殿。",
    "There are six Spicy Peppers growing on two plants here. (Three to each plant.)": "这里有 2 株暖暖草果，共 6 个。（每株 3 个。）",
    "There are three bundles of Wood in this dilapidated house, and two bundles outside of it.": "破旧房屋内有 3 捆木柴，屋外还有 2 捆。",
    "There are two Tree Branches near the cliff here.": "这里靠近悬崖处有 2 根树枝。",
    "This is not the actual side quest name. We need to confirm in-game. -Josh": "这不是实际支线任务名，需要在游戏内确认。-Josh",
    "Three (total) Endura Shrooms along multiple trees.": "多棵树旁共有 3 个毅力蘑菇。",
    "Three Apples on a tree.": "树上有 3 个苹果。",
    "Three Boars.": "3 头野猪。",
    "Three Hylian Shrooms.": "3 个海拉鲁蘑菇。",
    "Three Hyrule Herbs.": "3 株海拉鲁草。",
    "Three Keese appear here at night.": "夜间这里会出现 3 只蝙蝠。",
    "Three Stal Bokoblins appear here at night.": "夜间这里会出现 3 只骷髅波克布林。",
    "Three Stal Bokoblins spawn here at night.": "夜间这里会生成 3 只骷髅波克布林。",
    "Three red Bokoblins": "3 只红色波克布林。",
    "Three red Bokoblins One blue Bokoblin One Keese": "3 只红色波克布林、1 只蓝色波克布林、1 只蝙蝠。",
    "Three red Bokoblins. Campfire is lit.": "3 只红色波克布林。篝火已点燃。",
    "Treasure Chests Inside": "内部有宝箱。",
    "Two Acorns.": "2 个橡子。",
    "Two Apples on a tree.": "树上有 2 个苹果。",
    "Two Boulders atop the cliff.": "悬崖顶部有 2 块巨石。",
    "Two Chuchus appear here.": "这里会出现 2 只丘丘。",
    "Two Endura Shrooms": "2 个毅力蘑菇。",
    "Two Explosive Barrels.": "2 个爆炸桶。",
    "Two Hearty Truffles inside a hollow stump.": "空心树桩里有 2 个生命松露。",
    "Two Hylian Shrooms underneath the tree fort.": "树屋下方有 2 个海拉鲁蘑菇。",
    "Two Hyrule Herbs grow here.": "这里长着 2 株海拉鲁草。",
    "Two Keese appear here at night.": "夜间这里会出现 2 只蝙蝠。",
    "Two Keese spawn here at night.": "夜间这里会生成 2 只蝙蝠。",
    "Two Sizzlewing Butterflies": "2 只暖暖凤蝶。",
    "Two Stal Bokoblins appear here at night.": "夜间这里会出现 2 只骷髅波克布林。",
    "Two White Chuchus": "2 只白色丘丘。",
    "Two White Chuchus are found here.": "这里有 2 只白色丘丘。",
    "Two mineral deposits are located here. One contains a Sapphire and Flint, the other contains an Amber.": "这里有 2 处矿床。一处包含蓝宝石和打火石，另一处包含琥珀。",
    "Two mineral deposits, one contains Flint, the other contains a Topaz and an Amber.": "这里有 2 处矿床。一处包含打火石，另一处包含黄玉和琥珀。",
    "Two pigeons": "2 只鸽子。",
    "Two pigeons appear here": "这里会出现 2 只鸽子。",
    "Two pigeons.": "2 只鸽子。",
    "Two pushable boulders are situated on a ledge here.": "这里的岩架上有 2 块可推动的巨石。",
    "Two red Bokoblins": "2 只红色波克布林。",
    "Two red Bokoblins (NOT a campsite)": "2 只红色波克布林（不是营地）。",
    "Two red Bokoblins appear here.": "这里会出现 2 只红色波克布林。",
    "Two red Bokoblins appear here. The Campfire is lit.": "这里会出现 2 只红色波克布林。篝火已点燃。",
    "Underneath the tree fort.": "在树屋下方。",
    "Unknown contents.": "内容未知。",
    "Unknown number": "数量未知。",
    "Unknown quanitity": "数量未知。",
    "Unknown quantity": "数量未知。",
    "Unlit": "未点燃。",
    "Unlit.": "未点燃。",
    "Ze Kasho Apparatus": "泽卡修机关。",
}


def translate_korok_description(description: str) -> str | None:
    match = re.fullmatch(
        r"PlacementType: (?P<placement>Air|Ground) - KorokLift: (?P<lift>[01]) - Invisible: (?P<invisible>[01])",
        description,
    )
    if not match:
        return None

    placement = {"Air": "空中", "Ground": "地面"}[match.group("placement")]
    lift = "是" if match.group("lift") == "1" else "否"
    invisible = "是" if match.group("invisible") == "1" else "否"
    return f"放置类型：{placement}；呀哈哈升降：{lift}；隐藏：{invisible}"


def transliterate_roman_word(word: str) -> str:
    normalized = re.sub(r"[^A-Za-z]", "", word).lower()
    if not normalized:
        return ""
    if normalized in SPECIAL_ROMAN_WORDS:
        return SPECIAL_ROMAN_WORDS[normalized]

    chunks = re.findall(r"([^aeiou]*)([aeiou]+)([^aeiou]*)", normalized)
    if not chunks:
        return "".join(FINAL_SOUNDS.get(char, char) for char in normalized)

    result: list[str] = []
    for onset, vowel, coda in chunks:
        onset_sound = ""
        rest_onset = onset
        for size in (2, 1):
            if rest_onset[:size] in CONSONANT_SOUNDS:
                onset_sound += CONSONANT_SOUNDS[rest_onset[:size]]
                rest_onset = rest_onset[size:]
                break
        onset_sound += "".join(FINAL_SOUNDS.get(char, char) for char in rest_onset)

        vowel_sound = VOWEL_SOUNDS.get(vowel, "".join(VOWEL_SOUNDS.get(char, char) for char in vowel))
        if onset_sound and vowel_sound in {"", "阿"}:
            result.append(onset_sound)
        else:
            result.append(onset_sound + vowel_sound)
        result.append("".join(FINAL_SOUNDS.get(char, char) for char in coda))

    return "".join(result)


def transliterate_roman_phrase(value: str) -> str:
    words = [word for word in re.split(r"[\s'`-]+", value) if word]
    return "".join(transliterate_roman_word(word) for word in words)


def translate_name(name: str) -> str:
    if name in NAME_TRANSLATIONS:
        return NAME_TRANSLATIONS[name]
    if name in PLACE_TRANSLATIONS:
        return PLACE_TRANSLATIONS[name]
    if name in QUEST_TRANSLATIONS:
        return QUEST_TRANSLATIONS[name]

    if name.endswith(" Shrine"):
        return f"{transliterate_roman_phrase(name.removesuffix(' Shrine'))}神庙"
    if name.endswith(" Stable"):
        place = name.removesuffix(" Stable")
        return f"{PLACE_TRANSLATIONS.get(place, place)}驿站"
    if name.endswith(" Tower"):
        place = name.removesuffix(" Tower")
        return f"{PLACE_TRANSLATIONS.get(place, place)}之塔"
    if name.endswith(" Village"):
        place = name.removesuffix(" Village")
        return f"{PLACE_TRANSLATIONS.get(place, place)}村"

    translated = name
    for english, chinese in sorted({**PLACE_TRANSLATIONS, **NAME_TRANSLATIONS}.items(), key=lambda item: -len(item[0])):
        if english:
            translated = translated.replace(english, chinese)
    translated = re.sub(r"[A-Za-z][A-Za-z'`-]*", lambda match: transliterate_roman_phrase(match.group(0)), translated)
    return translated


def translate_description(description: str) -> str:
    korok_description = translate_korok_description(description)
    if korok_description is not None:
        return korok_description
    if description in DESCRIPTION_TRANSLATIONS:
        return DESCRIPTION_TRANSLATIONS[description]
    return description


def extract_marker_array(source: str) -> tuple[str, str, str]:
    start_marker = "export const botwMapMarkers = "
    start = source.index(start_marker) + len(start_marker)
    end_marker = "\n] satisfies BotwMapMarker[];"
    end = source.index(end_marker, start) + 2
    return source[:start], source[start:end], source[end:]


def main() -> int:
    source = DATA_FILE.read_text()
    before, marker_array_source, after = extract_marker_array(source)
    markers = json.loads(marker_array_source)

    for marker in markers:
        marker["nameZh"] = translate_name(marker["name"])
        marker["descriptionZh"] = translate_description(marker["description"])

    DATA_FILE.write_text(
        before + json.dumps(markers, ensure_ascii=False, indent=2) + after,
    )
    print(f"Updated {len(markers)} BOTW marker translations.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
