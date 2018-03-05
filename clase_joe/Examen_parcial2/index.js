var slider = 1;

function replaceStyle(id, styleToRemove, styleToAdd) {
    document.getElementById(id).classList.remove(styleToRemove);
    document.getElementById(id).classList.add(styleToAdd);
}

function addStyle(id, styleToAdd) {

    document.getElementById(id).classList.add(styleToAdd);
}

function goNext() {
    if (slider == 1) {
        replaceStyle("imageHolder", "firstFrame", "secondFrame");
        slider++;
    } else if (slider == 2) {
        replaceStyle("imageHolder", "secondFrame", "thirdFrame");
        slider++;
    } else {
        replaceStyle("imageHolder", "thirdFrame", "firstFrame");
        slider = 1;
    }
}

function goBack() {
    if (slider == 1) {
        replaceStyle("imageHolder", "secondFrame", "firstFrame", );
        slider--;
    } else if (slider == 2) {
        replaceStyle("imageHolder", "thirdFrame", "secondFrame");
        slider--;
    } else {
        replaceStyle("imageHolder", "firstFrame", "thirdFrame");
        slider = 3;
    }
}