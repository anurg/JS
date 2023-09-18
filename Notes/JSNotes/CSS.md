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
```
<link rel="stylesheet" href="cssfilename.css">
```

CSS files comprise a set of rules, each of which consists of a selector (to indicate which elements you are trying to modify), followed by a declaration block that contains a set of properties and those properties’ values.