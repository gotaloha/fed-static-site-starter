### Components
- **Adding a new Component**
1. Create a new directory and name it appropriately for your new component
2. Create an `index.html` file. This is where you will add the markup for your component. You may also use Nunjucks syntax.
3. Create a `styles.css` file. This is where you will add the CSS for your component. Note that this is *not* SASS but rather straight old school CSS.
4. Open `app.scss` and add the following line near the bottom of the file:
-  `@import "../../components/YOUR_COMPONENT/styles";`
