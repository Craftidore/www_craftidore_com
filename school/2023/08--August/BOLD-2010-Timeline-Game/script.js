((global) => {
    let M = {};

    let clickedEl = null;

    M.onMouseMove = (event) => {
        if (clickedEl != null) {
            clickedEl.style.position = "absolute";
            clickedEl.style.top = event.pageY-40 + "px";
            clickedEl.style.left = event.pageX-175 + "px";
        }
    }

    M.clickHandler = (event) => {
        div = event.srcElement.parentElement;
        clickedEl = (clickedEl == null) ? div : null;
    }

    let orderCheck = (elems, orderFunc) => {
        elems = Array.prototype.slice.call(elems,0)
        elems = elems.sort(orderFunc);
        console.log(elems);
        let i;
        let stillValid = true;
        for (i = 0; i < elems.length; i++) {
            let elem = elems[i];
            elem.classList.remove("inactive");
            elem.classList.remove("correct");
            elem.classList.remove("incorrect");
            if (stillValid && elem.outerText == M.values[i]) {
                elem.classList.add("correct");
            }
            else {
                stillValid = false;
                elem.classList.add("incorrect");
            }
        }
    }

    M.checkAnswer = (event) => {
        orderCheck(document.querySelectorAll(".piece"), (elem1, elem2) => {
            l1 = elem1.style.top.slice(0, elem1.style.top.length-2);
            l2 = elem2.style.top.slice(0, elem2.style.top.length-2);
            // console.log(Number(l1));
            // console.log(Number(l2));
            return Number(l1) - Number(l2);
        })
    }

    M.values = [
        "Creation",
        "Fall (Sin of Adam & Eve)",
        "Flood",
        "Nations",
        "Abraham (& Sarah)",
        "Isaac (& Rebecca)",
        "Jacob (& Rachel)",
        "Joseph",
        "Exodus—Exiting Egypt (1680-1250 BC)",
        "Egypt (Israelites are slaves)",
        "eXit (Moses, 10 Plagues, Passover, Red Sea)",
        "sInai",
        "Torah (10 Commandments & Golden Calf)",
        "Tabernacle",
        "Leviticus—Holiness (1 yr @ base of Sinai)",
        "- Holy Sacrifices (5 types)",
        "2<sup>nd</sup> Great Command—Love Neighbor as Self",
        "Numbers—Wilderness Wandering (40 yrs)",
        "Gen 1 fails to enter land because of unbelief",
        "40 Years Wilderness Wandering",
        "Gen 2 prepares to enter land by faith",
        "Deuteronomy—Do-it-all-over-again",
        "Moses’s 3 Sermons",
        "1<sup>st</sup> Great Command—Love God with all",
        "Joshua—Conquest (1250 BC)",
        "- Israel Conquers Jericho, Ai, & Ḥaṣor",
        "12 Tribes Divide Up the Land of Canaan",
        "Judges—Cycles (1250 BC until Saul)",
        "Spirit-Filled Military Leaders",
        "Deborah, Gideon, Samson",
        "Sin-Oppression-Repentance-Deliverance-Rest",
        "Ruth—Redemption (during time of Judges)",
        "Naomi’s Husband & Sons die",
        "Ruth & Boaz Sacrifice for Each Other",
        "Their Children Redeem Naomi, Israel, & World",
        "1 Samuel—Saul (1050 BC)",
        "God Blesses Barren Hannah with Son Samuel",
        "Eli’s House Falls & Samuel becomes final judge",
        "Samuel’s House Falls & Samuel anoints 1<sup>st</sup> King",
        "Saul Reigns in Humility then Pride (3 sins)",
        "David Kills Goliath & Saul Hunts David",
        "2 Samuel—David (1010 BC)",
        "David Reigns 40 Years & Establishes Jerusalem",
        "David Commits Adultery & Murder",
        "David’s Family Suffers",
        "1 Kings—Solomon (970 BC)",
        "Solomon Reigns 40 Years with Wisdom & Wealth",
        "Solomon Builds the Temple & Expands Israel",
        "Solomon Turns Away from God",
        "Rehoboam’s Folly Divides Kingdom (930 BC)",
        "Ahab & Jezebel: Worst Northern King/Queen",
        "Elijah (prophet to kings) opposes Ahab",
        "2 Kings—Divided Kingdom",
        "Elisha (prophet to common people)",
        "North Israel is Exiled (722 BC)",
        "Hezekiah & Josiah: Good Kings",
        "Manasseh: Worst King of Judah",
        "Judah is Exiled (586 BC)",
        "1-2 Chronicles—Restoration",
        "Cyrus’s Decree of Return (539 BC)",
        "The 12 Tribes are Called to Reunite in Jerusalem",
        "Ezra—Law",
        "Zerubbabel Rebuilds Temple (515 BC)",
        "Ezra Restores the Law (458 BC)",
        "Nehemiah—Wall (445 BC)",
        "Nehemiah Rebuilds the Wall",
        "Ezra and Nehemiah Reform Israel",
        "Esther—Providence (480 BC)",
        "Mordechai (what-a-guy) Raises Esther",
        "Haman (hateful-man) Plots Against the Jews",
        "Queen Esther Saves Jews from Destruction",
    ];

    global.Israel = M;
})(window);

document.addEventListener('DOMContentLoaded', () => {
    gameDiv = document.querySelector("#game");
    let i = 0;
    for (let val of Israel.values) {
        d = document.createElement("div");
        gameDiv.appendChild(d);
        d.classList.add("piece");
        d.classList.add("inactive");
        d.innerHTML = "<p>" + val + "</p>";
        d.style.top = `${Math.floor(Math.random()*4000)+200}px`;
        d.style.left = `${Math.floor(Math.random()*1000)}px`;
        d.addEventListener("click", Israel.clickHandler);
        i++;
    }
    document.onmousemove = Israel.onMouseMove;
    document.querySelector("#checkAnswer").addEventListener("click", Israel.checkAnswer);
});


