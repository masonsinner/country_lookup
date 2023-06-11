document.addEventListener("DOMContentLoaded", () => {
    const homeLink = document.getElementById("home");
    const lookupLink = document.getElementById("look-up");
    const homePage = document.getElementById("homePage");
    const lookupPage = document.getElementById("lookupPage");
  
    homeLink.addEventListener("click", () => {
      homePage.classList.remove("hidden");
      lookupPage.classList.add("hidden");
      homeLink.classList.add("active");
      lookupLink.classList.remove("active");
    });
  
    lookupLink.addEventListener("click", () => {
      homePage.classList.add("hidden");
      lookupPage.classList.remove("hidden");
      homeLink.classList.remove("active");
      lookupLink.classList.add("active");
    });
  
    const lookupButton = document.getElementById("lookupButton");
    const countryInput = document.getElementById("countryInput");
    const countryInfo = document.getElementById("countryInfo");
    const flagImage = document.getElementById("flagImage");
    const coatOfArmsImage = document.getElementById("coatOfArmsImage");
    const currencyTypes = document.getElementById("currencyTypes");
    const capital = document.getElementById("capital");
    const languages = document.getElementById("languages");
  
    lookupButton.addEventListener("click", () => {
      const countryName = countryInput.value;
      fetch(`https://restcountries.com/v2/name/${countryName}`)
        .then(response => response.json())
        .then(data => {
          if (data.length > 0) {
            const country = data[0];
            flagImage.src = country.flags.png;
            coatOfArmsImage.src = country.flags.svg;
            currencyTypes.textContent = `Currency Types: ${country.currencies[0].name}`;
            capital.textContent = `Capital: ${country.capital}`;
            const languageNames = country.languages.map(lang => lang.name).join(", ");
            languages.textContent = `Languages: ${languageNames}`;
            countryInfo.classList.remove("hidden");
          } else {
            // Display an error message if no country data is found
            countryInfo.classList.add("hidden");
            alert("Country not found!");
          }
        })
        .catch(error => {
          console.log(error);
          // Display an error message if there's an issue with the API request
          countryInfo.classList.add("hidden");
          alert("Error fetching country data. Please try again later.");
        });
    });
  });
  