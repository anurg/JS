### 5th October 2023 Class-- Links

### Hyperlinks
- Intra Document
- Inter Document


###  Intra Document Links
-----------------------------
- You can configure a link that navigates user to any specific location in the same page.
- The target location is identified by using "id" reference.
- You have to create an anchor <a> that can refer to "id" reference.
```
Syntax:
    <h2 id="html">  HTML </h2>
    <img id="mobile"  src="images/realme.jpg">

    <a href="#html">  Text | Image </a>
    <a href="#mobile"> Text | Image </a>
```

FAQ: What is difference between  "src" & "href" ?
Ans:  src is a getter
      href is a setter

FAQ: How to remove underline for hyperlink?
Ans:  By removing the CSS attribute "text-decoration".
```
Syntax:
    a {
      text-decoration:none;
    }
```


FAQ: How to change color for active and visited links?
Ans:  
```
    a) By using HTML <body> attributes :   alink , vlink

            <body  alink="red" vlink="gray">
   
    b) By using CSS classes

            a:visited {            a:active {        => when user hold down mouse btn

            }                }

```

### Example Intra-Page Links

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Intra Links</title>
    <style>
        header {
            padding: 5px;
            background-color: black;
            color:white;
            text-align: center;
        }
        section {
            display: grid;
            grid-template-columns: 2fr 10fr;
            grid-gap: 50px;
            margin-top: 20px;
        }
        main {
            height: 430px;
            overflow: scroll;
        }
        ol {
            list-style: none;
        }
        li {
            border:1px solid gray;
            padding: 4px;
            width: 150px;
            margin-bottom: 20px;
            margin-left:  -30px;
            background-color: black;
            color:white;
            font-size: 20px;
        }
        nav a {
            color:white;
            text-decoration: none;
        }
    </style>
</head>
<body vlink="gray">
    <header>
        <h1>Shopper.</h1>
    </header>
    <section>
        <nav>
          <ol>
            <li> <a href="#home">Home</a> </li>
            <li> <a href="#women"> <img src="public/images/women-fashion.jpg" width="100%" height="150"> </a> </li>
            <li> <a href="#men">Men Fashion</a> </li>
            <li> <a href="#kids">Kids Fashion</a> </li>
          </ol>
        </nav>
        <main>
            <h3 id="home">Home</h3>
            <p>We understand <span>Special Offer on <a href="#watch">Watches - 20% OFF</a></span> that you may have questions about the Microsoft Services Agreement. We have an FAQ page (https://www.microsoft.com/en-us/servicesagreement/faq) that provides more information, including what Microsoft products and services it covers. Whenever we make changes, we provide a summary of the most notable changes to the current Microsoft Services Agreement. We will also continue to provide a summary of the changes to the previous version, and a link to the previous version, of the Microsoft Services Agreement on the Summary of Changes (https://www.microsoft.com/en-us/servicesagreement/updates) page.</p>


            <h3 id="women">Women Fashion</h3>
            <img src="public/images/women-fashion.jpg" width="200" height="300">
            <div>
                <a href="#home">Back to Top</a>
            </div>
            <p>We understand that you may have questions about the Microsoft Services Agreement. We have an FAQ page (https://www.microsoft.com/en-us/servicesagreement/faq) that provides more information, including what Microsoft products and services it covers. Whenever we make changes, we provide a summary of the most notable changes to the current Microsoft Services Agreement. We will also continue to provide a summary of the changes to the previous version, and a link to the previous version, of the Microsoft Services Agreement on the Summary of Changes (https://www.microsoft.com/en-us/servicesagreement/updates) page.</p>
 

            <h3 id="men">Men Fashion</h3>
            <img src="public/images/men-fashion.jpeg" width="200" height="300">
            <div>
                <a href="#home">Back to Top</a>
            </div>
            <p>We understand that you may have questions about the Microsoft Services Agreement. We have an FAQ page (https://www.microsoft.com/en-us/servicesagreement/faq) that provides more information, including what Microsoft products and services it covers. Whenever we make changes, we provide a summary of the most notable changes to the current Microsoft Services Agreement. We will also continue to provide a summary of the changes to the previous version, and a link to the previous version, of the Microsoft Services Agreement on the Summary of Changes (https://www.microsoft.com/en-us/servicesagreement/updates) page.</p>
            <p>We understand that you may have questions about the Microsoft Services Agreement. We have an FAQ page (https://www.microsoft.com/en-us/servicesagreement/faq) that provides more information, including what Microsoft products and services it covers. Whenever we make changes, we provide a summary of the most notable changes to the current Microsoft Services Agreement. We will also continue to provide a summary of the changes to the previous version, and a link to the previous version, of the Microsoft Services Agreement on the Summary of Changes (https://www.microsoft.com/en-us/servicesagreement/updates) page.</p>
             <figure id="watch">
                 <img src="public/images/a1.jpg" width="100" height="100">
                 <figcaption>Watches</figcaption>
             </figure>

           
            <h3 id="kids">Kids Fashion</h3>
            <img src="public/images/kids-fashion.jpg" width="200" height="300">
            <div>
                <a href="#home">Back to Top</a>
            </div>
            <p>We understand that you may have questions about the Microsoft Services Agreement. We have an FAQ page (https://www.microsoft.com/en-us/servicesagreement/faq) that provides more information, including what Microsoft products and services it covers. Whenever we make changes, we provide a summary of the most notable changes to the current Microsoft Services Agreement. We will also continue to provide a summary of the changes to the previous version, and a link to the previous version, of the Microsoft Services Agreement on the Summary of Changes (https://www.microsoft.com/en-us/servicesagreement/updates) page.</p>
           
        </main>
    </section>
</body>
</html>
```
FAQ: How you can highlight any link target if content is not scrollable?
Ans: By using CSS  "target" class. It can verify which context is current target and can define effects dynamically.
```
Syntax:
    .card {
        // styles in normal state
    }

    .card : target {
        // styles when card is target of any hyperlink
    }

    <div class="card"  id="html">
    <div class="card"  id="css">

    <a href="#html"> HTML </a>
    <a href="#css"> CSS </a>
```




###  Inter Document Links
-----------------------------

- An inter document links can handle various functionalities

    a) Navigate to FILE
    b) Navigate to URL
    c) Invoke any application
    d) Invoke any javascript function

Navigate to FILE :

- You can configure a link that navigates user to any specified file in application.
- File can be any type : jpg, png, html, txt, json, xml, docx, xlsx, .mp3 etc..
- Every file type can't open in browser. It requires suitable plugin to install.
- If plugin is not available then linked document will download.

Syntax:
    <a href="public/images/fashion.jpg"> Fashion </a>
    <a href="public/docs/tutorial.pdf"> Tutorial </a>
   
FAQ: How to configure a link that will always download the document?
Ans : By using "download" attribute for <a> element.

Syntax:
    <a href="public/images/kids-fashion.jpg" download="kids">  Kids </a>

