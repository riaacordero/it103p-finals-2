class Person {
    constructor(name, closeupImagePath, highlightImagePath, quotes, selected = false) {
        this.name = name;
        this.closeupImagePath = "images/" + closeupImagePath;
        this.highlightImagePath = "images/" + highlightImagePath;
        this.quotes = quotes;
        this.selected = selected;
    }
}

let PersonList = [
    new Person(
        "Bill Gates",
        "closeup-gates.jpg",
        "highlight-gates.png",
        [
            "We all need people who will give us feedback. That's how we improve.",
            "Software is a great combination between artistry and engineering.",
            "If your culture doesn't like geeks, you are in real trouble.",
            "I believe in innovation and that the way you get innovation is you fund research and you learn the basic facts.",
            "Success is a lousy teacher. It seduces smart people into thinking they can't lose."
        ]
    ),
    new Person(
        "Steve Jobs",
        "closeup-jobs.jpg",
        "highlight-jobs.png",
        [
            "Great things in business are never done by one person. They're done by a team of people.",
            "Design is not just what it looks like and feels like. Design is how it works.",
            "Be a yardstick of quality. Some people aren't used to an environment where excellence is expected.",
            "Innovation distinguishes between a leader and a follower.",
            "Older people sit down and ask, 'What is it?' but the boy asks, 'What can I do with it?'"
        ]
    ),
    new Person(
        "Nelson Mandela",
        "closeup-mandela.jpg",
        "highlight-mandela.png",
        [
            "It always seems impossible until it's done.",
            "Real leaders must be ready to sacrifice all for the freedom of their people.",
            "I like friends who have independent minds because they tend to make you see problems from all angles.",
            "Do not judge me by my successes, judge me by how many times I fell down and got back up again.",
            "It is in the character of growth that we should learn from both pleasant and unpleasant experiences."
        ]
    ),
    new Person(
        "Elon Musk",
        "closeup-musk.jpg",
        "highlight-musk.png",
        [
            "When something is important enough, you do it even if the odds are not in your favor.",
            "I'd rather be optimistic and wrong than pessimistic and right.",
            "Some people don't like change, but you need to embrace change if the alternative is disaster.",
            "People should pursue what they're passionate about. That will make them happier than pretty much anything else.",
            "It's OK to have your eggs in one basket as long as you control what happens to that basket."
        ]
    ),
    new Person(
        "Barack Obama",
        "closeup-obama.jpg",
        "highlight-obama.png",
        [
            "Change will not come if we wait for some other person or some other time. We are the ones we've been waiting for. We are the change that we seek.",
            "If you're walking down the right path and you're willing to keep walking, eventually you'll make progress.",
            "We need to internalize this idea of excellence. Not many folks spend a lot of time trying to be excellent.",
            "In a world of complex threats, our security and leadership depends on all elements of our power - including strong and principled diplomacy.",
            "Issues are never simple. One thing I'm proud of is that very rarely will you hear me simplify the issues."
        ]
    )
]

function displayPersonButtons() {
    let footer = document.createElement("footer");
    document.body.appendChild(footer);

    PersonList.forEach((person, i) => {
        let personButton = document.createElement("img");
        personButton["id"] = "person-button-" + i;
        personButton["src"] = person.closeupImagePath;
        personButton["alt"] = person.name;
        personButton["onclick"] = () => {
            // Replaces intro text with highlight div after first time
            let introText = document.getElementById("intro");
            if (!!introText) {
                introText.remove();

                let newHighlightDiv = document.createElement("div");
                newHighlightDiv.classList.add("highlight");

                let newHighlightImg = document.createElement("img");
                newHighlightImg["id"] = "highlight-img";
                newHighlightImg["style"]["filter"] = "grayscale(100%)";

                
                let newHighlightName = document.createElement("h1");
                newHighlightName["id"] = "highlight-name";
                
                let newHighlightQuote = document.createElement("h2");
                newHighlightQuote["id"] = "highlight-quote";
                
                let newHighlightButton = document.createElement("button");
                newHighlightButton["textContent"] = "Get Quote";
                newHighlightButton["id"] = "highlight-button";
                newHighlightButton["onclick"] = () => {
                    let highlightQuote = document.getElementById("highlight-quote");
                    let currentIndex = person.quotes.indexOf(highlightQuote.innerHTML);
                    let randomIndex = currentIndex;
                    while (currentIndex === randomIndex) {
                        randomIndex = Math.floor(Math.random() * person.quotes.length);
                    }
                    highlightQuote["innerHTML"] = person.quotes[randomIndex];                    
                }
                
                let newHighlightSubColDiv = document.createElement("div");
                newHighlightSubColDiv.classList.add("highlight-sub-col");
                newHighlightSubColDiv.appendChild(newHighlightName);
                newHighlightSubColDiv.appendChild(newHighlightQuote);
                newHighlightSubColDiv.appendChild(newHighlightButton);

                newHighlightDiv.appendChild(newHighlightImg);
                newHighlightDiv.appendChild(newHighlightSubColDiv);

                let content = document.getElementById("content");
                content.appendChild(newHighlightDiv);
            }

            // Updates highlight div to the currently selected person
            let highlightImg = document.getElementById("highlight-img");
            highlightImg["src"] = person.highlightImagePath;
            highlightImg["alt"] = person.name;

            let highlightName = document.getElementById("highlight-name");
            highlightName["innerHTML"] = person.name;

            let highlightQuote = document.getElementById("highlight-quote");
            highlightQuote["innerHTML"] = "";
        };

        footer.appendChild(personButton);
    })
}

displayPersonButtons();