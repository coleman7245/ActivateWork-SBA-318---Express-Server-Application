export class Webpage {
    #body;
    #config;
    #searchBtn;
    #searchQuery;

    constructor(body, config) {
        this.#body = body;
        this.#config = config;
    }

    get searchQuery() {
        return this.#searchQuery;
    }

    set searchQuery(sQuery) {
        this.#searchQuery = sQuery;
    }

    get searchButton() {
        return this.#searchBtn;
    }

    build() {
        
    };

    createBackground() {
        this.#body.style.backgroundColor = this.#config.backgroundColor;
    };

    createFrame() {
        let frame = document.createElement("div");
        frame.setAttribute("class", "frame");
        frame.style.display = "inline-block";
        frame.style.padding = "10px";
        frame.style.backgroundColor = `${this.#config.backgroundColor}`;
        frame.style.border = `10px solid ${this.#config.frameColor}`;
        frame.style.boxShadow = "0px 0px 10px 10px black";
        frame.style.height = "fit-content";
        frame.style.width = "fit-content";
        frame.style.margin = "5% 40%";
        frame.style.textAlign = "center";
        this.#body.append(frame);

        return frame;
    };

    createTextBox(text, isBold) {
        let textBox = this.createFrame();

        let textContainer = document.createElement("p");
        textContainer.style.textShadow = "0px 5px 10px black";
        textContainer.style.color = `${this.#config.frameColor}`;
        textContainer.style.fontSize = "3em";

        if (isBold) {
            let boldText = document.createElement("b");
            boldText.innerText = text;
            textContainer.append(boldText);
        }
        else
            textContainer.innerText = text;

        textBox.append(textContainer);


        this.#body.append(textBox);
    };

    createSearchBar() {
        let searchBarDiv = this.createFrame();

        let sbLabel = document.createElement("label");
        let boldText = document.createElement("b");
        sbLabel.setAttribute("for", "search-site");
        sbLabel.innerText = "Find info on your favorite game or game company here! (Courtesy of Giant Bomb)";
        sbLabel.style.textShadow = "0px 5px 10px black";
        sbLabel.style.color = `${this.#config.frameColor}`;
        sbLabel.style.fontSize = "3em";
        sbLabel.style.color = `${this.#config.frameColor}`;
        sbLabel.style.margin = "10px";
        boldText.append(sbLabel);
        searchBarDiv.append(boldText);

        let searchTextField = document.createElement("input");
        searchTextField.setAttribute("type", "text");
        searchTextField.style.margin = "10px";
        searchBarDiv.append(searchTextField);

        let searchButton = document.createElement("button");
        searchButton.setAttribute("id", "searchBtn");
        searchButton.innerText = "Find";
        searchButton.style.margin = "10px";

        searchButton.addEventListener("click", () => {
            this.searchQuery = searchTextField.value;
            console.log(searchTextField.value);
        });

        searchBarDiv.append(searchButton);

        this.#body.append(searchBarDiv);
    };

    createLink(url, text) {
        let frame = this.createFrame();
        let urlHTML = document.createElement("a");
        urlHTML.setAttribute("href", url);
        urlHTML.style.color = `${this.#config.frameColor}`;
        urlHTML.style.fontSize = "3em";
        urlHTML.innerText = text;
        frame.append(urlHTML);

        this.#body.append(frame);
    }

    createNavBar() {
        let homeLink = document.createElement("a");
        homeLink.setAttribute("href", "./index.html");
        homeLink.innerText = "Home";

        homeLink.addEventListener("mouseenter", () => {
            homeLink.style.backgroundColor = "rgb(0, 0, 153)";
        });

        homeLink.addEventListener("mouseleave", () => {
            homeLink.style.backgroundColor = "yellow";
        });

        let breedIdsLink = document.createElement("a");
        breedIdsLink.setAttribute("href", "./breeds.html");
        breedIdsLink.innerText = "Breed Ids";

        breedIdsLink.addEventListener("mouseenter", () => {
            breedIdsLink.style.backgroundColor = "rgb(0, 0, 153)";
        });

        breedIdsLink.addEventListener("mouseleave", () => {
            breedIdsLink.style.backgroundColor = "yellow";
        });

        let navBar = document.createElement("div");
        navBar.setAttribute("class", "nav-bar");
        navBar.append(homeLink);
        navBar.append(breedIdsLink);

        this.#body.append(navBar);
    }
}

export class BreedListPage extends Webpage {
    constructor(body, config) {
        super(body, config);
    }

    build() {

    }

    createList(data) {

    }
}

class ResultsPage extends Webpage {
    
    constructor(body, config) {
        super(body, config);
    }

    build() {

    }
}

export class IndexPage extends Webpage {
    constructor(body, config) {
        super(body, config);
    }

    build() {
        this.createBackground();
        this.createNavBar();
        this.createTextBox("Breed Ids", true);
        this.createSearchBar();
    }
}