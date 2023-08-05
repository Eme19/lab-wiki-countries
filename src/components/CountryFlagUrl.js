function getCountryFlagUrl(alpha2Code) {
    /**
     * This function takes a lowercase alpha2Code of a country and returns the URL of a small picture of the country flag.
     *
     * Parameters:
     * alpha2Code (string): The lowercase alpha2Code of the country.
     *
     * Returns:
     * string: The URL of the small picture of the country flag.
     */
    
    try {
      // Check if the alpha2Code is a string
      if (typeof alpha2Code !== 'string') {
        throw new TypeError('alpha2Code must be a string');
      }
      
      // Construct the URL using the alpha2Code
      const flagUrl = `https://www.example.com/flags/${alpha2Code}.png`;
      
      return flagUrl;

    } catch (error) {
      // Log the error
      console.error(`Error: ${error}`);
      return null;
    }
  }

  export default getCountryFlagUrl