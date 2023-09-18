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

h1: Highest-level heading
h6: Lowest-level heading
img: An image
a: An anchor which creates a hyperlink to things like other HTML pages, files, email addresses, and more

The first line, <!DOCTYPE html>, is referred as a doctype declaration. This is used to indicate to a browser what HTML version the file is written in. For this file, specifying html indicates that the file is written in HTML5.

One of the properties of HTML elements is their ability to be nested. In other words, HTML elements can exist within other HTML elements. This gives rise to an interesting structure, referred to most commonly as a tree data structure in computer science lingo.

The <head> element contains supporting information about the file, commonly referred to as metadata. There must be a <title> (providing the webpage a title) directly underneath the <head> element in order be complete. The <head> element may also contain links to Javascript files and CSS stylesheets.

The <body> element contains the main content of an HTML file. This is the element that holds the information that is rendered by your web browser. There can be only one <body> element within an HTML file, and most of the HTML you write will exist within this element.

Within the <body> element of this file, we have a high-level heading (h1) and a paragraph (p).

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

We could create an unordered list to represent things like a list of to-dos or a list of grocery items. To do this, we must use the 'ul' tag, with nested 'li' tags for the list items.

### Ordered lists

An ordered list should be used when the items in the list go in a particular order, like turn-by-turn instructions on a navigation system, or steps in a recipe. An ordered list is fairly similar to an unordered list, except we will want to use the 'ol 'tag to declare the list. List items are still wrapped in an 'li' tag. The list items will be numbered, rather than the bulleted items we saw previously.

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

### Semantics

### Structural semantic elements#
div elements can be used to separate content into different sections. However, div elements do not provide any inherent semantic meaning and are used most often as generic containers for styling content. With HTML5, several structural elements.
### hgroup
'hgroup' elements can be used to group heading elements that are semantically part of the same heading.
```
<hgroup>
  <h1>My Amazing Website</h1>
  <h2>More information about my website</h2>
</hgroup>

```

### nav
'nav' elements should be used to house components of your web page that are used to navigate to different parts of your web page.

A 'nav' element is often found inside a 'header' element. It is not necessary to follow this convention if you wish to place your navigation elements elsewhere on the web page.

```
<header>
  <hgroup>
    <h1>My Amazing Website</h1>
    <h2>More information about my website</h2>
  </hgroup>
  <nav>
    <!-- Navigational anchors elments are often wrapped in an unordered list -->
    <ul>
      <li><a href="#about">About Me</a></li>
      <li><a href="#contact">Contace</a></li>
    </ul>
  </nav>
</header>

```

### footer
The 'footer' element, as its name suggests, is used to house content that would be considered to be the footer of your page.

A footer can store things like the website’s author, copyright information, or even navigational elements to other pages on your website.

```
<footer>
  <h3>&copy; My Company Name, 2023</h3>
</footer>
```
### article
'article' elements should be used to house individual pieces of content that are unique to an individual page. A blog entry, a news/scholarly article, and a forum post are all good examples of content that would be semantically appropriate to store in an 'article' element.

'article 'elements should have a heading to indicate what the article's content is about.
```
<article>
  <h1>Cryptocurrency: What is it?</h1>
  <!-- Article contents -->
</article>
```
### section
'section' elements represent thematic groupings of content on your web page. For example, if your web page housed the contents of a book, 'section' elements could be used for the book’s chapters.

'section' elements should also have a heading element to indicate what the section's contents are about.

In general, 'section' elements should be used when you need to place your content into semantic groupings that don’t fit the description of any other semantic element.

'section' elements can also be used to break up content in an 'article' element into semantically discrete components.
```
<section>
  <h2>Chapter 1</h2>
  <!-- Chapter contents -->
</section>
<section>
  <h2>Chapter 2</h2>
  <!-- Chapter contents -->
</section>
<section>
  <h2>Chapter 3</h2>
  <!-- Chapter contents -->
</section>
<section>
  <h2>Chapter 4</h2>
  <!-- Chapter contents -->
</section>
```

### time
Use the 'time' element to provide a machine-readable timestamp for parts of your content that indicate a specific time or date. The 'time' element has a datetime attribute that takes as input the date/time in a variety of formats, which you can learn more about here.

'time' should be used for things like the time of an event or the date a blog post is published to a website. 'time' elements are not rendered any differently than regular text, but it provides a way to semantically indicate to a computer what content is to be considered a time or date.

### aside
'aside' elements are generally used to house information that is not part of your main content, but is in some way related to it.

'aside' elements could be used for things like supporting information in an article, or a sidebar with navigational elements.

```
<html>
 <head>
   <script type="text/javascript" src="https://code.jquery.com/jquery-1.12.0.js"></script>
 </head>
 <body>
   <!-- Add semantic tags to this HTML -->
   <header>
    <hgroup>
      <h1>Learning Web Development</h1>
      <h2>A site dedicated to learning how to develop applications for the web.</h2>
    </hgroup>
    <nav>
      <ul>
        <li><a href="">Home</a></li>
        <li><a href="">About This Site</a></li>
        <li><a href="">Contact Information</a></li>
      </ul>
    </nav>
   </header>
  <article>
   <hgroup>
    <h1>Using Semantic HTML Elements</h1>
    <h2>A complete guide on indicating meaning for your web page's content</h2>
    <h3> <time datetime="2017-12-18">December 18, 2017</time></h3>
   </hgroup>
  
   <section>
    <h4><code>header</code></h4>
    <p>Use header elements for content that is consistent across your web page.</p>
    <p>Headers may also contain your site's navigation components.</p>
    </section>
  
    <section>
    <h4><code>footer</code></h4>
    <p>Use footer elements to store "footer" content, like author/copyright info.</p>
    </section>
    
    <section>
    <h4><code>nav</code></h4>
    <p>Use nav elements to store elements associated with site navigation.</p>
    <p>Navigational <code>anchor</code> tags are often wrapped in an unordered list element.</p>
    </section>
  </article>
  <footer>  
    <p>&copy; Educative.io 2017</p>
  </footer>
   
 </body>
</html>
```
### CSS file for above exercise
```
* {
  font-family: "Helvetica Neue", "Helvetica", arial, sans-serif; 
}

header h1 {
  font-weight: bolder;
  font-size: 3em;
  margin: 0px 10px;
}

header h2 {
  font-weight: lighter;
  margin: 0px 10px 10px;
}

header nav {
  border-top: 1px solid black;
  border-bottom: 1px solid black;
}

header nav ul {
  list-style-type: none;
  margin: 0; 
  padding: 0;
  width: 100%;
  background-color: #d9e4f4;
}

header nav ul li {
  display: inline-block;
}

header nav ul li a {
  display: block;
  color: #000;
  padding: 8px 16px;
  text-decoration: none;
}

header nav ul li a:hover {
  background-color: #364b6b;
  color: white;
}

article {
  margin: 5% 2%;
}

article hgroup {
  border-left: 5px solid red;
}

article hgroup h1 {
  margin: 0px 10px;
  font-size: 2.3em;
}

article hgroup h2 {
  margin: 0px 10px 10px;
  font-weight: lighter;
}

article hgroup h3 {
  margin: 5px 10px 10px;
  font-weight: normal;
}

article section {
  width: 90%;
  margin: 10px 10px;
}

article section h4 {
  font-size: 1.3em;
  font-weight: lighter;
  margin: 30px 10px 10px;
}

article section p {
  margin: 10px 20px;
}

code {
  font-family: "Menlo", monospace;
  color: #c7254e;
  background-color: #f9f2f4;
  padding: 2px 4px;
 	border-radius: 5px;
}

footer p {
  color: #9b9b9b;
  border-top: 1px solid #9b9b9b;
	padding: 10px;
}
```
### HTML Tables

 A table consists of rows and columns. Each row/column pair has a piece of data associated with it, referred to as a table cell.

In the table above, the first row is used to declare the data type for each column, and serves as the table header. For the rest of the rows, we have a piece of data for each column (the cells), which has the data type specified in the header.

To indicate that a cell is part of the header use the 'th' tag instead of 'td'
```
<html>
 <head>
   <title>Working with HTML Tables</title>
 </head>
 <body>
   <table>
     <tr>
       <th>Name</th>
       <th>Date of Birth</th>
       <th>Weight</th>
     </tr> 
     <tr>
       <td>Mary</td>
       <td>12/13/1994</td>
       <td>130</td>
     </tr> 
     <tr>
    <td>John</td>
    <td>10/08/1974</td>
    <td>150</td>
     </tr>   
   </table>
 </body>
</html>
```

### HTML Forms

HTML forms are how we receive user input on our web pages. If you’ve ever visited a blog and left a comment or used your credit card online to purchase something, you have used HTML forms to interact with the web page you were visiting.
### form element
'form' element only declares the HTML form.
### input element

To start accepting user input, let’s add an 'input' element that accepts text:
### label element

The 'label' element has a for attribute that associates the 'label' with a specific 'input' element. The for attribute’s value should match that of the 'input' element’s id value. 'label' elements are useful as they allow your 'input' elements to be identified by screen readers.

Notice if you write in the password field, the text is obscured since we’ve indicated the input's type attribute has a value of password.

### Text inputs

We’ve seen how the 'input' element can accept text values. There are several different type values that can be used, including:

text: for plain text
password: to obscure a password input field
search: to indicate the text field is used for searching a page/multiple pages
url: validates input as a URL address
tel: for inputting phone numbers
email: validates input as an email address
In the case of url and email, the browser will check to see if the input is a valid URL or email address.

### textarea
If you want your user to be able to include new lines (by pressing return) in their text input, you can use a 'textarea 'element:
You can also specify the size of 'textarea' by using the rows and cols attributes.

### Buttons
A <'button'> element should be used whenever you want to create a clickable button to perform some action on the page.

<'button'> elements are simple to define, and have three different type values:

submit: submits form data to a server
reset: resets all the data in the current form
button: no default behavior.

### Selection inputs
You can use <'select'> (with nested <'option'>) elements to create a drop-down selection of items that a user can choose from:

Including the selected attribute in an <'option'> element will show that option by default.

Additionally, if you want to group options into different categories, you can nest <'option'> elements in an <'optgroup'> element:

### Radio Button
The <'input'> element has other type values that accept inputs other than text. For instance, radio buttons can be used to create a list of options where you only want one option selected:

To group the radio buttons into one selection, each <'input'> element’s name attribute must have the same value. The optional checked attribute will select one of the radio buttons when the page loads.

### checkboxes
If you want to create a list where the user can select multiple options, you can use checkboxes. A checkbox can be specified by using an <'input'> element with a type value checkbox:

Like radio <'input'> elements, checkboxes must have the same value for the name attribute to be considered part of the same group. The main difference is that multiple checkboxes within the same group can be selected.


```
<h1>Login Page</h1>
    <form>
      <label for="username">
        Username:
        <input type="text" id="username" name="" username />
      </label>
      <label for="password">
        Password:
        <input type="password" id="password" name="password" />
      </label>
      <label for="emailid">
        Email Id:
        <input type="email" id="emailid" name="emailid" />
      </label>
      <label for="url">
        URL:
        <input type="url" id="url" name="url" />
      </label>
      <label for="multiLineInput">
        <p>This is an input element that can include new lines:</p>
        <textarea id="multiLineInput"></textarea>
      </label>
      <label for="selector">
        <p>
          A <code>select</code> element allows users to input from a selection:
        </p>
        <select id="selector">
          <option>Option 1</option>
          <option>Option 2</option>
          <option selected>Option 3</option>
          <option>Option 4</option>
        </select>
      </label>
      <label for="selector">
        <p>
          A <code>select</code> element allows users to input from a selection:
        </p>
        <select id="selector">
          <optgroup label="Group 1">
            <option>Option 1</option>
            <option>Option 2</option>
          </optgroup>
          <optgroup label="Group 2">
            <option>Option 3</option>
            <option>Option 4</option>
          </optgroup>
          <optgroup label="Group 3">
            <option>Option 5</option>
            <option>Option 6</option>
          </optgroup>
        </select>
      </label>
      <h3>
        What time is best to give you a call?--With same name so only one option
        can be selected.
      </h3>
      <label for="morning">
        Morning
        <input type="radio" id="morning" name="callTime" checked />
      </label>
      <label for="afternoon">
        Afternoon
        <input type="radio" id="afternoon" name="callTime" />
      </label>
      <label for="evening">
        Evening
        <input type="radio" id="evening" name="callTime" />
      </label>

      <!-- The following radio buttons will not be considered part of the same group since they don't have
				the same "name" attribute. -->
      <h3>
        What time is best to give you a call?-- Without same name so multiple
        options can be selected.
      </h3>
      <label for="morning">
        Morning
        <input type="radio" id="morning" />
      </label>
      <label for="afternoon">
        Afternoon
        <input type="radio" id="afternoon" />
      </label>
      <label for="evening">
        Evening
        <input type="radio" id="evening" />
      </label>
      <h4>CheckBoxes</h4>
      <h3>Select all the times that you are available:</h3>
      <label for="morning">
        Morning
        <input type="checkbox" id="morning" name="callTime" checked />
      </label>
      <label for="afternoon">
        Afternoon
        <input type="checkbox" id="afternoon" name="callTime" />
      </label>
      <label for="evening">
        Evening
        <input type="checkbox" id="evening" name="callTime" />
      </label>
      <button type="submit">Submit Name</button>
    </form>
```