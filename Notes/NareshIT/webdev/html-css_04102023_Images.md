### Notes for 4th October 2023 

### Image Examples and Links

### CSS Flex:
- Flex is a display style, which supports 2 directions
```
        flex-direction: row            [side by side]
        flex-direction: column        [stack - column-reverse]
        flex-direction: row-reverse
        flex-direction: column-reverse

```

- Align Items can keep content in container  top, center, bottom when flex direction is row.
```
            {
              flex-direction: row;
              display:flex;
              align-items: baseline | center | end;
            }

            baseline    = top
            end = bottom

```

- Align items can keep content in container left, center & right when flex direction is column.
```
```
            {
             display:flex;
             flex-direction:column;
             align:items: baseline | center | end;
            }

            baseline = left
            end = right
```

Note: It align-items attributes is not defined in flex style then the element width and height will fit the container width & height.





### CSS Absolute & Relative Positions:

- Relative is the position defined for parent element.
- Absolute is the position defined for child element.
- Absolute can change the position with relative to its parent by using the attributes :
  top, left, right & bottom.

Syntax:
    <nav>
        <button> </button>
    </nav>

    nav {
        position: relative;
     }
    button {
         position: absolute;
         top:0px;
         right:0px;
    }

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .women {
            width: 700px;
            height: 500px;
            background-image: url("public/images/women-fashion.jpg");
            background-size: cover;
            position: relative;
        }
        .offer {
            width: 70px;
            height: 70px;
            background-color: red;
            color:white;
            padding: 5px;
            border-radius: 50px;
            text-align: center;
            font-size: 20px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            position: absolute;
            right: 10px;
            top: 10px;
        }
    </style>
</head>
<body>
    <div class="women">
        <div class="offer">
            <div>Save</div>
            <div>30% Off</div>
        </div>
    </div>
</body>
</html>

```
### Ex: Cart with position relative and absolute
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="node_modules/bootstrap-icons/font/bootstrap-icons.css">
    <style>
        .count {
            display: inline-block;
            width: 8px;
            height: 8px;
            background-color: red;
            color:white;
            font-size: 6px;
            border-radius: 20px;
            padding: 2px;
            text-align: center;
            position: absolute;
            top: -3px;
            right: -3px;
        }
        .nav-icons {
            position: relative;
            width: 20px;
        }
    </style>
</head>
<body>
    <div class="nav-icons">
        <span class="bi bi-cart4"></span>
        <span class="count">2</span>
    </div>
</body>
</html>
```



### Links in HTML

- Link is clickable text, picture or graphic that navigates the user to any location on web.
- The links that navigate using "HTTP" protocol are known as "HyperLinks".

Note:
- Web uses various protocols like
        http
        https
        tcp/ip
        ftp
        smtp
        msmq   etc..
- A protocol defines rules for handling communication in network based application.
- Website uses 2 protocols for web page communication
        a) http    [Hyper Text Transfer Protocol]
        b) https    [Hyper Text Transfer Protocol Secured]

        src="d:/images/pic.jpg"        => physical path => valid if it is using ftp.
        src="images/pic.jpg"        => virtual path => valid for http, https

- Links are classified into 2 types

        1. Intra Document Links
        2. Inter Document Links

- Links are created and configured by using anchor element "<a>".