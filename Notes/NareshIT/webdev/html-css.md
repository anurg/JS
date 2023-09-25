### Web dev Notes from Sudhakar Sharma - NareshIT




25th September 2023
### Nav

- It defines navigation area in webpage.
- Typically elements in Nav area are used to navigate from one location to another with in the page or outside side.
```
Syntax:
    <nav>
       ... your content ...
    </nav>
```

### Creating Responsive Navbar:
- A responsive navbar can change its orientation according device width.
- You can control the page orientation by using "CSS"  media queries.
```
Syntax:
    @media  type  and (orientation:landscape|portrait) {

    }
   
    type = screen, print, speech
```


### CSS Flex:
- The default flex direction is "row".
- You can change the flex direction to "column".
- Direction is mostly controlled using "@media" query.
```
Syntax:
    nav {
      display:flex;
      flex-direction: row | column;
    }
```

### CSS Hover:
- Hover is a class of CSS that defines effects for element when mouse pointer is over - the element.
- Any CSS class can be configured for element by using ":"  which is inheritance operator.

```
Syntax:
    element : className {

    }

    span:hover {

    }
```
### Example
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Navbar</title>
    <link rel="stylesheet" href="node_modules/bootstrap-icons/font/bootstrap-icons.css">
    <style>
        span {
            display: inline-block;
            width: 100px;
            border:1px solid black;
            text-align: center;
            font-family: Arial;
            font-size: 20px;
            padding: 5px;
        }

        span:hover {
            background-color: black;
            color:white;
            cursor: grab;
        }

        @media screen and (orientation:landscape) {
            nav {
                display: flex;
                flex-direction: row;
            }
            span {
                margin-right: 20px;
            }
        }
        @media screen and (orientation:portrait) {
            nav {
                display: flex;
                flex-direction: column;
            }
            span {
                margin-bottom: 20px;
            }
        }
    </style>
</head>
<body>
    <nav>
        <span class="bi bi-house"> Home</span>
        <span class="bi bi-file-break"> Pages</span>
        <span class="bi bi-cart"> Shop</span>
        <span class="bi bi-globe"> Blog</span>
        <span class="bi bi-search"> Search</span>
    </nav>
</body>
</html>
```
Summary
- Header
- Article
- Nav

### Section
- It defines the area between header and footer.
- Section comprises of body content, which includes all document elements and semantics displayed in workspace.
```
Syntax:
   <section>
    ... your content....
  </section>
```


 ### Main
- In computer programming and designing "main" refers to "entry point".
- Every website provides an entry point for new user.
- A website can have multiple entiry points.
- Typically main contains register link or navigation to the contents in page.

```
Syntax:
    <section>
       <main>
        ... entry point...
       </main>
    </section>
```

### CSS Transparent Color:
- You can set transparent color in css by using "rgba()" method.
- It uses "red, green, blue & alpha values".

       rgba(redValue, greenValue, blueValue, alphaValue)

- RGB value range will be from 0 to 255.
- Alpha value range can be 0 to 1.

      rgba(0,255,0, 0.5)        => transparent green
      rgba(0,0,0,0.5)        => transparent black


