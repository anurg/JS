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

