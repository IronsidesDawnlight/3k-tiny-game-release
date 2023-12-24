const DEV = true;

/*
   ===== PATHS =====
*/

const IMAGE_PATH = "./img/";
const JSON_PATH = "./json/"; // https://raw.githubusercontent.com/AndyBlocker/3k-tiny-game/main/json/

// for local debug
// const IMAGE_PATH = " https://raw.githubusercontent.com/AndyBlocker/3k-tiny-game/main/img/";
// const JSON_PATH = " https://raw.githubusercontent.com/AndyBlocker/3k-tiny-game/main/json/";

/* 
    ===== TUNABLES =====
*/
const SCP_COLOR = "#FF9D95";
const PROPS_COLOR = "#CCE9FF";
const EVENT_COLOR = "#9C67B5";
const BOSS_COLOR = "#fde44c";
const CLINICAL_COLOR = "#FFFFFF";
const DEFAULT_CONTINUE_TEXT = "前往下一事件";

const PURSE_CARD_ID = "purse";
const PET_CARD_ID = "pet";

/* 
    ===== VARIABLES =====
*/

const cardContainer = document.querySelector('.card-container');
const lootContainer = document.getElementById('loots');
const hintText1 = document.getElementById('hintText1');
const hintText2 = document.getElementById('hintText2');
let purseTitle = undefined;

var maxCardsToShow = 4;

const attributesCommon = [
    "displayID", "description", "descriptionNoJ", "descriptionNoL", "descriptionNoJL"
];
const attributesEvent = [
    "type", "hintText", "getCards", "loseCards", "correctPrompt", "easterEggPrompt", "nextEvent", "choices", "buttonPrompt",
    "specialDescription", "specialNextEvent", "specialOnEnter",
    "newMoney"
];
const attributesCard = [
    "name", "color", "img"
];
const DATA_TYPES = {
    Card: 0,
    Event: 1,
    __Count: 2,
};

/* 
    ===== GAME STATUS =====
*/
let currentEventId = "0";
let currentStartIndex = 0;
let deck = [];
let branch = {
    j: false, // J线完成情况
    d: false, // 梦线完成情况
    l: false, // 爱线完成情况
    m: false  // 钱线完成情况
};
let money = '0';
let completedEvents = [];
let specialCardsData = {
    "pet" : {
        value: 0,
        hasExtraDesc: false,
        desc: "",
        descNoJ: "",
        logEvents: ["4454", "4455", "1922", "1775", "812", "765", "2297", "1061", "1818", "1819", "1296", "3000-love"]
    },
    "006J" : {
        hasExtraDesc: false,
        desc: "",
        descNoJ: "",
        logEvents: ["122", "296", "048J", "321J"]
    },
    "purse" : {
        value : 0
    }
}

let _lootToPick = 0;