### HTML Notes

### Sample HTML file with Common tags.

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" type="text/css" href="style.css" />
    <title>Learning JS</title>
  </head>
  <body>
    <h1>Heading</h1>
    <h2>Heading2</h2>
    <h3>Heading 3</h3>
    <h4>Heading 4</h4>
    <!-- This is HTML Comments-->
    <p>
      This is a paragraph text for displaying.This is a paragraph text for
      displaying.This is a paragraph text for displaying.This is a paragraph
      text for displaying.This is a paragraph text for displaying.This is a
      paragraph text for displaying.This is a paragraph text for displaying.This
      is a paragraph text for displaying.This is a paragraph text for
      displaying.This is a paragraph text for displaying.
    </p>
    <a href="https://www.educative.io">Educative Website</a>
    <ul>
      <h4>Unordered List</h4>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
      <li>Item 4</li>
    </ul>
    <ol>
      <h4>Ordered List</h4>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
      <li>Item 4</li>
    </ol>
    <!-- A Table-->
    <table>
      <tr></tr>
        <th>Sr No</th>
        <th>Description</th>
      </tr>
      <tr>
        <td>1</td>
        <td>HTML</td>
      </tr>
      <tr>
        <td>2</td>
        <td>CSS</td>
      </tr>
      <tr>
        <td>3</td>
        <td>JS</td>
      </tr>
    </table>
    <h5>Image</h5>
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/240px-HTML5_logo_and_wordmark.svg.png"/>
    <script src="script.js" />
  </body>
</html>

```

### Linking Javascript file to HTML file

```
<script src="myJSscript.js"></script>
```

### Linking external CSS file to HTML file

```
<link rel="stylesheet" href="cssfilename.css">
```

HTML Elements

<h1>: Highest-level heading
<h6>: Lowest-level heading
<img>: An image
<a>: An anchor which creates a hyperlink to things like other HTML pages, files, email addresses, and more

The first line, <!DOCTYPE html>, is referred as a doctype declaration. This is used to indicate to a browser what HTML version the file is written in. For this file, specifying html indicates that the file is written in HTML5.

One of the properties of HTML elements is their ability to be nested. In other words, HTML elements can exist within other HTML elements. This gives rise to an interesting structure, referred to most commonly as a tree data structure in computer science lingo.

The <head> element contains supporting information about the file, commonly referred to as metadata. There must be a <title> (providing the webpage a title) directly underneath the <head> element in order be complete. The <head> element may also contain links to Javascript files and CSS stylesheets.

The <body> element contains the main content of an HTML file. This is the element that holds the information that is rendered by your web browser. There can be only one <body> element within an HTML file, and most of the HTML you write will exist within this element.

Within the <body> element of this file, we have a high-level heading (<h1>) and a paragraph (<p>).

### HTML attributes

HTML attributes provide additional information about an HTML element. Attributes can be considered as properties of the element. An element may have a single attribute, many attributes, or no attributes at all.

```
<h2 title="This is a subheading">Hello, World!</h2>
 <div class="SampleClass"></div>

<p title="My Paragraph" style="color:blue">Hello, World!</p>
```

### Anchor elements / hyperlinking

One of the most important aspects of the World Wide Web is the ability to link to other parts of the web. Without a way to redirect our HTML page to other web addresses, there really wouldn’t be a “web” at all!
We can connect a HTML page to other web pages by creating a hyperlink using the anchor tag, like so:

```
<a href="http://www.google.com">Google</a>
```

The href attribute refers to Hypertext Reference, whose value is a Uniform Resource Locator (URL). A URL is basically fancy lingo for a web address, or the destination the link is pointing to. The href attribute can also refer to things like:

Email Addresses (mailto:someone@educative.io)
Phone Numbers (tel:+18004444444)
Documents/Files (Give the URL of the file instead of a web page)
Another different location on the same web page the browser is currently on

### Relative vs absolute URL paths

It’s important to understand how file paths play a role in how your hyperlinks will operate.

An absolute URL points to a single address that will direct to the same place regardless of where the original page is coming from. It looks something like this: http://www.github.com/google.

In an absolute URL path there are three main components:

1. The Protocol: What you most often see as http:// or https:// when you browse websites, but can be other things, like file:// or ftp://

2. The Domain: The name of the website (in this example, www.github.com)

3. The Path: The directory (or folder) we wish to navigate to. This field is not always necessary, and generally allows us to navigate to a more specific portion of a domain (in this case, Google’s profile on Github)

An absolute URL provides all the information necessary for a browser with an internet connection to reach the desired address. Furthermore, an absolute URL will not change its destination if used on different devices/browsers.

### Relative URLs

Relative URLs provide less information than absolute URLs and generally refer to pages on the same domain. Relative URLs are useful when you start to deal with multiple web pages on your site, and want a way to navigate between them.

Let’s take a look at a quick example of a directory named website with:

a main index.html page
an about section, named about.html
a nested directory named blogPosts, with three article HTML files named:
article1.html
article2.html
article3.html
If we started in the website directory on the index.html file, we could redirect to the About section by including the anchor tag:

```
<a href="about.html">About</a>
```

Now, say we want to navigate to an article in our blogPost folder. The relative URL path would then include the directory name: blogPost/article2.html. The entire anchor element would then be:

```
<a href="blogPost/article2.html">Article 2</a>
```

Now, how would we navigate back to the index.html page if we are in the blogPost directory? We can accomplish this by indicating the path to the file is one direct level up, like so: ../index.html.

```
<a href="../index.html">Index</a>
```

### Headings

The HTML standard has h1 element as well as five additional text heading elements, appropriately named h2 through h6.

It should be noted that heading elements should not be used to manipulate the font size of a heading. Rather, the levels represent semantically the difference between a main header, sub-header, etc.

### Lists

Often times we will want to include a bulleted or numbered list in web page content. This can be accomplished with HTML lists.

### Unordered lists

We could create an unordered list to represent things like a list of to-dos or a list of grocery items. To do this, we must use the <ul> tag, with nested <li> tags for the list items.

### Ordered lists

An ordered list should be used when the items in the list go in a particular order, like turn-by-turn instructions on a navigation system, or steps in a recipe. An ordered list is fairly similar to an unordered list, except we will want to use the <ol> tag to declare the list. List items are still wrapped in an <li> tag. The list items will be numbered, rather than the bulleted items we saw previously.

### List element attributes: type and start

The type attribute allows us to change the style of either the bullets for unordered lists or the numbering scheme for ordered lists.

Unordered list type values include circle, disc, and square.

```
<ul type="square">
      <h4>Unordered List</h4>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
      <li>Item 4</li>
    </ul>
    <ol start="7">
      <h4>Ordered List</h4>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
      <li>Item 4</li>
    </ol>
```

Ordered list type values can be used to change the numbering scheme, and include the following:

1: Default numeric scheme
I: Upper-case Roman numerals
i: Lower-case Roman numerals
A: Upper-case Alphabet
a: Lower-case Alphabet
Ordered lists have an additional start attribute, that can be used to start the numbering at a value other than the default of 1.

### Sample-

```
<html>
 <head>
   <title>Exercise 5: Structuring a Page for Cooking a Food Recipe</title>
 </head>
 <body>
	<!-- Write your recipe here -->
    <h1>Recipe</h1>
    <h2>Ingredients</h2>
    <ul type=square>
        <li>Ingredient 1</li>
    </ul>
    <h2>Instructions</h2>
    <ol type="i">
        <li>Instructions1</li>
    </ol>
 </body>
</html>

```

### Inline vs. Block Elements + Divs

### Block-level elements

Block-level HTML elements take up the full width of a web page, essentially creating a “block” around the content you place within that element. Block-level elements, by default, also start on a new line. The following are some of the block-level elements:

- Headings (h1-h6)
- Ordered and Unordered Lists (ol, ul)
- List Items (li)
- Paragraphs (p)

### Inline elements

Inline elements, like the name suggests, do not take up the full width of a webpage and are generally in-line with text content. Inline elements also do not start a new line when rendered in the browser. Examples of inline elements include:

- Anchors (a)
- Images (img)
- Bolding Text (strong)
- Emphasizing Text (em)

### Divs

The <div>, a block-level element, allows you to section into separate, logical divisions.
As you can see, the <div> element does not render as anything special on the web page and is mainly used to separate content into distinct groups for organization or styling purposes. Generally, you will nest other HTML elements within <div> elements to provide the proper structure to your page.

### id + class attributes

The id and class attributes can be used to identify specific HTML elements across your HTML page.

The id attribute provides you with the ability to give any element a unique identifier. This identifier can later be used for things like applying specific styles with CSS or capturing input with some Javascript code.

```
<h1 id="companyName">Educative.io</h1>
```

Some notes about id usage:

- an id value should only be used for a single element (you will get unexpected behavior if you use the same id value for multiple elements)
- an id value must not contain any whitespace
- a single element cannot have multiple id values

The class attribute is similar to the id attribute in that it is used to identify specific elements. The main distinctions are:

- the same class value can be used across multiple elements
- an element can have multiple class values, separated by whitespaces
  In the example below, the id and class attributes are used to apply CSS styles (hidden) to our HTML document. Take note of the main differences between the two attributes.

```
<html>
 <head>
   <title>id vs class attributes</title>
 </head>
 <body>
   <!-- id elements can be used to identify specific elements on page -->
   <h1 id="pageTitle">id and class attributes</h1>

   <!-- class elements can be used to identify multiple elements that have
				similar characteristics -->
   <p class="bordered">This element has a border.</p>

	 <!-- the same class value can be used on multiple elements -->
   <p class="bordered">This element also has a border.</p>

   <!-- you can include multiple class values for a single element -->
   <p class="red bordered">This element has red text and a border.</p>
   <p class="blue bordered">This element has blue text and a border.</p>
 </body>
</html>
```

### The img element

Use the <img> tag to embed an image into your web page with an src attribute that contains a file path to the image you want to be included. Use the alt attribute to provide alternative text with a description of the image in case it doesn’t load, or is being read by a screen reader for people with disabilities.

Unlike most of the elements we have encountered thus far, the img element does not have a closing tag :

```
<img src="path/to/image/cat.jpg" alt="A cat">
```

```
<html>
 <head>
   <title>Exercise 5: Structuring a Food Recipe *Continued*</title>
 </head>
 <body>
   <!-- Write your HTML Here -->
   <div id="recipeTitle">
       <h1>Yummy Dish!</h1>
       <img src="https://www.foodandwine.com/thmb/BScdaGCMLf46UiRN-DHRTitN1rQ=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Pasta-Aglio-E-Olio-2-FT-RECIPE0123-38cd2045646a4635a80e8166f085fc7e.jpg" alt="Yummy Dish Pic">
       <div id="ingredients" class="recipeList">
           <h2>Ingredients</h2>
           <ul type=square>
               <li>ingredients</li>
               <li>ingredients</li>
               <li>ingredients</li>
           </ul>
       </div>
       <div id="instructions" class="recipeList">
           <h2>Instructions</h2>
           <ol type="i">
               <li>instructions</li>
               <li>instructions</li>
               <li>instructions</li>
           </ol>
       </div>
   </div>
 </body>
</html>
```
