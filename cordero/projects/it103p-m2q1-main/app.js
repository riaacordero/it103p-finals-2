var app = document.getElementById('app');

// QUOTES LIST

var authors = [
    {
        name: 'Louisa May Alcott',
        imageUrl: 'assets/img/alcott.png',
        quotes: [
            'I am not afraid of storms, for I am learning how to sail my ship.',
            'The power of finding beauty in the humblest things makes home happy and life lovely.',
            'Women have been called queens for a long time, but the kingdom given to them is not worth ruling.', 'I would rather take coffee than compliments just now.', 'Love is the only thing that we can carry with us when we go, and it makes the end so easy.'
        ]
    },
    {
        name: 'Kenneth Burke',
        imageUrl: 'assets/img/burke.png',
        quotes: [
            'Life is not like drama; human life is drama.', 'Stories are equipment for living.',
            'Where there is persuasion, there is rhetoric, and where there is rhetoric, there is meaning.',
            'Man is rotten with perfection.',
            'We not only interpret the character events, we may also interpret our interpretations.'
        ]
    },
    {
        name: 'Niccolo Machiavelli',
        imageUrl: 'assets/img/machiavelli.png',
        quotes: [
            'A government which does not trust its citizens to be armed is not itself to be trusted.', 'Men rise from one ambition to another: first, they seek to secure themselves against attack, and then they try to attack others.', 'The injury therefore that we do to a man must be such that we need not fear his vengeance.', 'Everyone sees what you appear to be, few experience what you really are.', 'How does one use power to do good, when wielding power requires one to do evil?'
        ]
    },
    {
        name: 'Bo Burnham',
        imageUrl: 'assets/img/burnham.png',
        quotes: [
            "Laughter is the best medicine…you know, besides medicine.",
            "If you want love, then the love has got to come from you.",
            "You should not try so hard to be perfect. Trust me, perfect should try to be you.",
            "Quotes are for people who cannot think of something intelligent to say on their own.",
            "Maybe life on earth could be heaven. Doesn’t just the thought of it make it worth a try?"
        ]
    },
    {
        name: 'Pewdiepie',
        imageUrl: 'assets/img/pewdiepie.png',
        quotes: [
            "Life is too short to focus on the things you hate. Focus on what you love instead.",
            "Be nice to people; maybe one day they will be rich.",
            "Do not be a salad. Be the best broccoli you can ever be.",
            "You are just as good. Don not let anyone tell you you are different.",
            "Face your problems! Unless your problem is your face."
        ]
    },
]
function generateAuthorList() {
    var authorList = document.createElement('div');
    authorList.classList.add('row', 'center')
    authorList.style = 'gap:10px'

    for (var i = 0; i < authors.length; i++) {
        var authorListItem = document.createElement('a');
        authorListItem.classList.add('row', 'center')

        var authorButton = document.createElement('img');
        authorButton.className = 'circle-container';
        authorButton.src = authors[i].imageUrl

        authorButton.onclick = function (authorIdx) {
            return function () {
                currentAuthorIdx = authorIdx;
                generateQuote(0, authorIdx);
            }
        }(i);

        authorListItem.appendChild(authorButton);
        authorList.appendChild(authorListItem);
    }

    return authorList;
}
function generateAuthorList() {
    var authorList = document.getElementById('author-list');
    for (var i = 0; i < authors.length; i++) {
        var authorListItem = document.createElement('a');
        authorListItem.classList.add('tooltip', 'bottom')
        authorListItem.dataset.tooltipContent = authors[i].name;

        var authorButton = document.createElement('img');
        authorButton.className = 'circle-container';
        authorButton.src = authors[i].imageUrl;
        authorButton.onclick = function (authorIdx) {
            return function () {
                //   generateQuote(0, authorIdx);
                var authorName = document.getElementById('author-name');
                authorName.textContent = authors[authorIdx].name;

                var generateButton = document.getElementById('generate-btn');
                generateButton.onclick = function () {
                    generateQuote(0, authorIdx);
                }
            }
        }(i);

        authorListItem.appendChild(authorButton);
        authorList.appendChild(authorListItem);
    }
}

function generateQuote(quoteIdx, currentAuthorIdx) {
    var selectedAuthor = authors[currentAuthorIdx];
    var mainQuote = document.getElementById('main-quote');

    while (mainQuote.firstChild) {
        mainQuote.removeChild(mainQuote.firstChild);
    }

    // quote content
    var quoteContent = document.createElement('h1');
    quoteContent.className = 'quote-content';
    quoteContent.style = 'color:white;width:70%;text-align:center;'
    quoteContent.textContent = selectedAuthor.quotes[quoteIdx % selectedAuthor.quotes.length];

    var quoteDescription = document.createElement('p');
    quoteDescription.className = 'quote-description text-white';
    quoteDescription.style = 'width:70%;text-align:center;'
    quoteDescription.textContent = 'Generate another quote from the same author by clicking again the "get quote" button. To generate a quote from a different author, select and click on any avatar then click the "get quote" button.';

    // generate button
    var generateButton = document.getElementById('generate-btn');
    generateButton.onclick = function () {
        generateQuote(quoteIdx + 1, currentAuthorIdx);
    }

    mainQuote.appendChild(quoteContent);
    mainQuote.appendChild(quoteDescription);
}

generateAuthorList();