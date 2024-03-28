    // grabs all links from the shortcuts
    const uiNames = document.querySelectorAll("a[href]");
    const uiNamesarr = Array.from(uiNames);

    const objOfLinks = uiNamesarr.map((item) => {
      return {
        name: item.textContent.trim(),
        link: item.getAttribute('href')
      };
    });

    let arrOfNames = [];
    objOfLinks.forEach((e) => {
      arrOfNames.push(e.name);
    });

    document.querySelector(".search-form").addEventListener("keypress", function(e) {
      let keyCode = e.keyCode || e.which;
      if (keyCode === 13) {
        const userInput = document.querySelector(".search-form").value.toLowerCase().trim();
        const selectedEngine = document.querySelector(".search-engine").value;

        let searchLink;
        if (selectedEngine === 'google') {
          searchLink = "https://www.google.com/search?q=";
        } else if (selectedEngine === 'searx') {
          searchLink = "https://searx.thegpm.org/?q=";
        } else if (selectedEngine === 'duckduckgo') {
          searchLink = "https://duckduckgo.com/?q=";
        } else if (selectedEngine === 'bing') {
          searchLink = "https://www.bing.com/search?q=";
        } else {
          // Add more cases for other search engines
          // Default to Google if the selected engine is not recognized
          searchLink = "https://www.google.com/search?q=";
        }

        const matchedLink = objOfLinks.find(linkObj => linkObj.name.toLowerCase().startsWith(userInput));

        if (matchedLink) {
          window.open(matchedLink.link, "_self");
        } else {
          const link = searchLink.concat(userInput);
          console.log(link);
          window.open(link, "_self");
        }
      }
    }, false);

    console.log("arrOfNames:", arrOfNames);
    console.log("objOfLinks:", objOfLinks);