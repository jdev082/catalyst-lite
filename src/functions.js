const generateHashkey = () => {
    return (
        Math.random().toString(36).substring(2, 15) +
        Math.random().toString(36).substring(2, 15) +
        Math.random().toString(36).substring(2, 15) +
        Math.random().toString(36).substring(2, 15) +
        Math.random().toString(36).substring(2, 15) +
        Math.random().toString(36).substring(2, 15) +
        Math.random().toString(36).substring(2, 15) +
        Math.random().toString(36).substring(2, 15)
    );
}

const removeChildren = (parent) => {
    while (parent.lastChild) {
        parent.removeChild(parent.lastChild);
    }
};

function openFeedback() {
    createTab('https://github.com/JaydenDev/Catalyst/issues/new')
}

function openGithub() {
    createTab('https://github.com/JaydenDev/Catalyst')
}

document.getElementById("more-btn").addEventListener("click", () => {
    document.getElementById("more-menu").classList.toggle("hidden");
});

function reload() {
    document.querySelector(".current").reload();
}

function forward() {
    document.querySelector(".current").goForward();
}

function backward() {
    document.querySelector(".current").goBack();
}

function inspectTab() {
    document.querySelector(".current").inspectElement(0, 0);
}