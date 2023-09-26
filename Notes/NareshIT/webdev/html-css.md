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


### Ex: Netflix
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Netflix</title>
    <link rel="stylesheet" href="node_modules/bootstrap-icons/font/bootstrap-icons.css">
    <style>
        body {
            background-size: cover;
        }
        .shade {
            background-color: rgba(0,0,0,0.7);
            width: 105%;
            height: 100vh;
            margin-top: -10px;
            margin-left: -10px;
        }
        header {
            padding: 40px;
            padding-right: 100px;
            color:white;
            display: flex;
            justify-content: space-between;
        }
        .brand-title {
            font-size: 30px;
            color:red;
            font-weight: bold;
            font-family: Arial;
        }
        .language {
            display: inline-block;
            padding: 5px;
            border:1px solid white;
            border-radius: 2px;
        }
        .signin {
            background-color: red;
            color:white;
            font-family: Arial;
            padding: 5px;
            display: inline-block;
            width: 80px;
            text-align: center;
            border-radius: 2px;
        }
        .title {
            font-size: 52px;
            font-weight: bold;
            font-family: Arial;
            text-align: center;
            color:white;
            width: 100%;
            margin-top: 120px;
        }
        .sub-title {
            color:white;
            font-size: 25px;
            font-family: Arial;
            text-align: center;
            margin-top: 30px;
        }
        section {
            padding-right: 60px;
        }
        main {
            text-align: center;
            color:white;
            margin-top: 20px;
        }
        .main-title {
            font-size: 20px;
            font-family: Arial;
            margin-bottom: 20px;
        }
        .email {
            display: inline-block;
            background-color: black;
            color:white;
            padding: 10px;
            width: 250px;
            border:1px solid white;
            text-align: left;
            font-size: 20px;
        }
        .btn-start {
            display: inline-block;
            background-color: red;
            color:white;
            font-size: 20px;
            font-weight: bold;
            padding: 10px;
            width: 160px;
        }
    </style>
</head>
<body background="public/images/netflix.jpg">
    <div class="shade">
        <header>
            <div>
                <span class="brand-title">NETFLIX</span>
            </div>
            <div>
                <span class="language">
                    <span class="bi bi-translate"></span>
                     English
                    <span class="bi bi-chevron-down"></span>
                </span>
                <span class="signin">
                    Signin
                </span>
            </div>
        </header>
        <section>
            <div class="title">The biggest Indian hits. Ready to watch here from ₹ 149.</div>
            <div class="sub-title">Join today. Cancel anytime.</div>
            <main>
                <div class="main-title">Ready to watch? Enter your email to create or restart your membership.</div>
                <div class="register">
                    <span class="email">Email Address</span>
                    <span class="btn-start">
                        Get Started <span class="bi bi-chevron-right"></span>
                    </span>
                </div>
            </main>
        </section>
    </div>
</body>
</html>
```

### Class 26/09/2023
### My Notes
Every Page width can be 1200px or 12fr. pixels (px) is not responsive but fraction(fr) is responsive.
e.g. if we divide page in 5 fractions, each fraction will be 12/5 = 2.4 fr

<'aside'> tag is used if the content like links or advertisement (not related to current page).

### Class Notes

Header
Section
Main
Nav
Article
Div
Span

 ### Footer
- Footer comprises of information displayed at bottom margin of page.
- Typically footer contains information about services, copyrights, address etc.
- Content in footer is used for SEO.
```
Syntax:
    <footer>
        ... your content...
    </footer>
```
### FAQ: How to keep content exactly center screen?
Ans:
    1. Make sure that all the content that you want to keep in center is inside one
        container.
                       
                        <main>
                        <div>Title</div>
                        <div>Sub Title</div>
                        </main>
   
    2. Set following attributes for parent container, that holds the single fragment in
        page.
                        <section>
                            <main>
                            <div> Title </div>
                            <div> Sub Title </div>
                           </main>
                        </section>

        section {
            display:flex;
            justify-content:center;
            align-items:center;
            height:100vh;
         }


### CSS Box & Text Shadow


    box-shadow : horizontalPixles, verticalPixels, blurPixels, color;
    text-shadow : horizontalPixles, verticalPixels, blurPixels, color;
```
Syntax:
    .title {
        text-shadow : 5px 4px 2px black;
    }
```
### Example: ex_centering.html
```
Ex:
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .title {
            font-size: 100px;
            font-weight: bold;
            text-shadow: 5px 5px 5px yellow;
        }
        .sub-title {
            font-size: 25px;
            font-style: italic;
        }
        section {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            text-align: center;
            background-color: rgba(0,0,0,0.7);
        }
        main {
            color:white;
        }
    </style>
</head>
<body background="public/images/banner.jpg">
    <section>
            <main>
            <div class="title">Fashion Store</div>
            <div class="sub-title">Men's Fashion | Kid's Fashion | Women's Fashion</div>
            </main>
    </section>
</body>
</html>
```
### CSS Grid Display:
- CSS Grid comprises of content arranged into fixed set of rows and columns.
- CSS Flex don't have fixed set of rows, it changes according to device width.
- Every page can split into 12 fractions for grid.
- You can define columns in fractions or in pixels [1200px].
```
Syntax:
    .container {
        display:grid;
        grid-template-columns: 6fr 6fr;    (or) 600px  600px
    }
```

### Aside
- Aside refers to content that is not relative to current context.
- It comprises of information that can take user aside from current location.
- Typically ads and social links are defined in aside.
```
Syntax:
    <aside>
        ... your content...
    </aside>

```


```
Example for Grid
```

