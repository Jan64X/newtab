// grabs all links from the shortcuts
const uiNames = document.querySelectorAll("a[href]");
const uiNamesarr = Array.from(uiNames);

objOfLinks = uiNamesarr.map((item) => {
  return {
      name: item.textContent.trim(), // Extracting text content and trimming extra spaces
      link: item.getAttribute('href') // Getting the value of the 'href' attribute
  };
});


let arrOfNames = [];
objOfLinks.forEach((e) => {
    arrOfNames.push(e.name);
});


// if the input search has a similar pattern it takes you to that website 
document.querySelector(".search-form").addEventListener("keypress", function(e) {
  let keyCode = e.keyCode || e.which;
  if (keyCode === 13) {
      const userInput = document.querySelector(".search-form").value.toLowerCase().trim();
      
      const matchedLink = objOfLinks.find(linkObj => linkObj.name.toLowerCase().startsWith(userInput));

      if (matchedLink) {
          window.open(matchedLink.link, "_self");
      } else {
          const baseLink = "https://www.google.com/search?q=";
          const link = baseLink.concat(userInput);
          console.log(link);
          window.open(link, "_self");
      }
  }
}, false);


console.log("arrOfNames:", arrOfNames);
console.log("objOfLinks:", objOfLinks);
