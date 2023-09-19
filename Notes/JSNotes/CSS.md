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
Your browser renders every HTML element as a rectangular box according to the standard CSS box model. Each HTML element on your web page consists of a content area, padding, a border, and a margin.

Learning how to manipulate the CSS properties within the box model will be helpful with laying out content on your web pages.

### Relative vs. absolute measurements 
We can manipulate the parameters for sizing the “box” that makes up an element with many different CSS properties. Often times, you will want to specify the length of the content area, padding, margins, etc.

But how do we specify these lengths? The most common units used are percentages, %, and the number of pixels, px.

Percentages are a relative measure of length. When specifying length using the % unit, the length is measured as relative to the parent element’s length:
ince we used %, a relative unit of measurement, the length of the h1 elements in the second div are half that of the h1 elements in the first div even though these elements have the same CSS properties.

Specifying the number of pixels, on the other hand, yields an absolute measure of length. Absolute measurements are fixed and do not rely on measurements from other HTML elements.
```
<html>
 <head>
   <title>Relative Length Measurements</title>
 </head>
 <body>
   <div>
     <h1 class="half">Half-width of parent element.</h1>
     <h1 class="quarter">Quarter-width of parent element.</h1>
   </div>
   <div id="halfWidthContainer">
     <h1 class="half">Half-width of parent element.</h1>
     <h1 class="quarter">Quarter-width of parent element.</h1>
   </div>
 </body>
</html>

```

```
body * {
  border: 3px solid black;
  border-radius: 10px;
}

#halfWidthContainer {
  width: 50%
}

.half {
  width: 50%;
}

.quarter {
  width: 25%;
}
```

![MyImage](images/CSS-Box-Model.png)

### Manipulating the box model

### height and width
Use the height and width CSS properties to change the height and width of an element’s content area.

### padding
Use the padding property to create spacing between an element’s content area and border. The padding property applies this spacing in different ways depending on how many values you provide, as illustrated in the example below:

When you specify the length as a percentage, the length is relative to the width of the parent element.



```
//HTML
<html>
 <head>
   <title>CSS Padding</title>
 </head>
 <body>
   <div>
     <span id="padding1">One Value</span>
     <span id="padding2">Two Values</span>
     <span id="padding3">Three Values</span>
     <span id="padding4">Four Values</span>
   </div>
 </body>
</html>

// CSS 
/* A single value will apply the same 
padding on all sides of the box */
#padding1 {
  padding: 10px;
}

/* Two values will apply as: 
		first value - vertical sides
		second value - horizontal sides */
#padding2 {
  padding: 5px 20px;
}

/* Three values will apply as:  
		first value: top side
		second value: horizontal sides
		third value: bottom side */
#padding3 {
  padding: 10px 5px 30px;
} 

/* Four values will apply as: 
		first value: top
		second value: right
		third value: bottom
		fourth value: left
*/
#padding4 {
  padding: 10px 5px 60px 35px;
}

div {
  padding: 20px;
}

span {
  background-color: plum;
  border: 5px solid green;
}

```
You can also apply padding to a single side of the element using more specific CSS properties. These include padding-bottom, padding-left, padding-right, and padding-top. These properties accept a single value in either relative or absolute units of length:
```
/* Apply 10 percent (of parent element's width) worth of padding to the bottom side of paragraph elements */

p {
    padding-bottom: 10%;
}
```

### border
Like its name implies, the border CSS property sets the border of an element. The syntax for the border property is as follows
```
border: width style color;
```

The width can be given in absolute or relative units. The style can include things like none, dotted, groove, double, and solid, ridge, inset, outset. 
```
//HTML
<html>
 <head>
   <title>Creating borders with CSS</title>
 </head>
 <body>
   <p id="border1">Purple dotted border</p>
   <p id="border2">Green double border</p>
   <p id="border3">Yellow solid border</p>
   <p id="border4">Teal grooved border</p>
 </body>
</html>
//CSS 
#border1 {
  border: 10px dotted purple;
}

#border2 {
  border: 10px double green;
}

#border3 {
  border: 10px solid yellow;
}

#border4 {
  border: 10px groove teal;
}
```

The border property can be expanded into more finely tuned properties such as border-style, border-color, and border-width. These properties can be further expanded to target a specific side, e.g. border-top-width, border-left-style, and so on.

The simple border property is considered shorthand for the more detailed properties. 

```
border-width: as each of the properties of the shorthand:
        border-top-width: medium
        border-right-width: medium
        border-bottom-width: medium
        border-left-width: medium
border-style: as each of the properties of the shorthand:
        border-top-style: none
        border-right-style: none
        border-bottom-style: none
        border-left-style: none
border-color: as each of the properties of the shorthand:
        border-top-color: currentcolor
        border-right-color: currentcolor
        border-bottom-color: currentcolor
        border-left-color: currentcolor
```

### border-radius 
If you want to create borders that have rounded corners, use the border-radius property. You can also create elliptical corners by providing two values to border-radius, separated by a slash (/).

```
// HTML
<html>
 <head>
   <script type="text/javascript" src="https://code.jquery.com/jquery-1.12.0.js"></script>
 </head>
 <body>
   <h1>Straight corners</h1>
   <h1 class="rounded">Rounded corners</h1>
   <h1 class="elliptical">Elliptical corners</h1>
 </body>
</html>

//CSS

h1 {
  border: 10px solid black;
  margin: 20px;
}

.rounded {
	border-radius: 15px;
}

.elliptical {
  border-radius: 50px / 25px;
}
```
```
h1 {
    padding-top: 10px;
    padding-bottom: 50px;
    padding-left:40px;
    padding-right:20px;
    border: 4px solid green;
    border-radius: 10px;
}
//or we can write like
h1 {
    padding: 10px 20px;
    border: 4px solid green;
    border-radius: 10px;
}


```
### margin 
The margin property is very similar to the padding property, except it allows you to define the spacing around the outside of an HTML element past the border. Like padding, it allows you to define single or multiple values.

margin can also be broken out into more fine-grained properties to target a specific side, including margin-top, margin-bottom, margin-right, and margin-left.

```
* 1 value: margin applied as
	 same on all sides */
#margin1 {
  margin: 10px;
}

/* 2 values: margin applied as 
	 vertical sides - horizontal sides */
#margin2 {
  margin: 10px 20px;
}

/* 3 values: margin applied as 
   top - horizontal sides - bottom */
#margin3 {
  margin: 10px 20px 30px;
}

/* 4 values: margin applied as 
   top - right - bottom - left */
#margin4 {
  margin: 10px 20px 30px 40px;
}

.spanBox {
  border: 1px dashed black;
  margin: 5px;
  float: left;
}

span {
  background-color: plum;
  border: 5px solid green;
  padding: 10px 20px;
  display: inline-block;
}
```

### Centering an HTML elemment

```
//HTML
<html>
 <head>
   <title>Centering elements using margins</title>
 </head>
 <body>
   <div>
     <h1>This element should be centered.</h1>
   </div>
 </body>
</html>

// CSS
div {
  border: 5px solid blue;
}

h1 {
  border: 5px dashed black;
  width: 50%;
  margin-left: 25%;
  margin-right: 25%;
}
```