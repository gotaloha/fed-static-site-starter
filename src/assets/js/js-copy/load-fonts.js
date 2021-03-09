function loadFonts () {
  if (sessionStorage.fontsLoaded) {
    document.documentElement.classList.add('fonts-loaded')
    return
  }

  if ('fonts' in document) {
    Promise.all([
      document.fonts.load('1em Open Sans'),
      document.fonts.load('700 1em Open Sans'),
      document.fonts.load('italic 1em Open Sans'),
      document.fonts.load('italic 700 1em Open Sans')
    ]).then(_ => {
      document.documentElement.classList.add('fonts-loaded')
    })
  }
}

loadFonts()
