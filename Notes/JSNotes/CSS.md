## CSS Notes

### Linking CSS with HTML
There are three ways to add CSS to the HTML code.

### Inline CSS
CSS is said to be added ‘inline’ when it is used in the style attribute of HTML tags. This is inefficient and not scalable because each individual tag would have to have the CSS inserted. This method is generally never used as it is extremely impractical.
```
<h3 style ="color:blue">Blue Heading!</h3>
```

### Internal CSS
You can use <style> tags within the <head> of the HTML to define the style of a certain tag. For instance, in the example below, all h3 headings are defined to be blue. This approach is clearly better from using CSS inline because this makes the code less repetitive, easier to read and write, and overall economical.

```
<html>
 <head>
  <style>
   h3 {color: blue;}
  </style>
 </head>
 <body>
   <h3>Internal CSS</h3>
 </body>
</html>

```

### External CSS
CSS is most commonly written in a separate file and linked up with the HTML. The advantage of doing so is that it can be reused by other HTML files, updating it becomes simpler, and web pages can be tailored for different users, browsers, and platforms.

You can do so by writing a self-closing link tag in your HTML head like the following,
it would be better to separate concerns by putting content structure and content stylization in separate files.

Loading a separate CSS file into an HTML page can be accomplished by placing a link element within the head, like so:
```
<link href="styles.css" rel="stylesheet" type="text/css">
```

CSS files comprise a set of rules, each of which consists of a selector (to indicate which elements you are trying to modify), followed by a declaration block that contains a set of properties and those properties’ values.

Cascading style sheets
What exactly does cascading mean?
order matters when creating CSS rules. If there are multiple CSS rules for the same element (and the same property), a hierarchical cascade is responsible for determining which one gets selected and applied to the element.

### Basic three CSS selectors 
CSS rules can select for elements in many different ways. The three basic kinds of selectors are:

type selectors: used to select HTML elements by element name
class selectors: used to select HTML elements by a specific class value
id selectors: used to select an HTML element associated with a specific id value
Using a type selector is as simple as typing the name of the element:
```
/* Change default size of h1 elements */
h1 {
	font-size: 1em;
}
```
Using a class selector is done by placing a . followed by the name of the class value:
```
 <div class="bordered">
     <h1>Using Class Selectors</h1>
     <p>Use Class Selectors to Target Elements with Specific Class Values</p>
   </div>
   //////// CSS
.bordered {
	border: 2px solid black;
}
```

Using an id selector is done by placing a # followed by the id value:

```
<h1 id="aboutIdSelectors">
     Use Id Selectors to Target an Element with a Specific Id Value
   </h1>
/////// CSS
#aboutIdSelectors {
	font-size: 2em;
  border: 5px dashed blue;
  font-style: italic;
}
```
In the case where two (or more) selectors target the same element and property, the cascade will select which property to apply based on its importance. id selectors are the most important, followed by class selectors, and finally, type selectors.

### Selecting multiple elements 
To select multiple elements, separate the selectors by commas, like so:
```
h1, p {
  border: 1px solid black;
}

/* Selecting styles to be applied to several classes */
.ingredientsList, .instructionsList {
  font-size: 1.2em;
}

/* Using multiple kinds of selectors*/
h3, .red, #redElement{
  color: red;
}
```

### Selecting nested elements 
To select for only the children of a certain parent element, you must indicate the parent element and then the child element, with a > bracket in between them.
```
/* select only for h1 elements within div's */
div > h1 {
  border-bottom: 1px solid black;
}

div > div > p {
  border-bottom: 1px solid black;
}
```


### CSS Box Model

![MyImage](images/CSS-Box-Model.png)