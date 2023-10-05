### Notes for 03/10/2023

### Image Attributes
1. src
2. alt
3. title
4. width
5. height
6. border
7. align
8. hspace
9. vspace

### Advanced Attributes

10. crossorign        :  It configures CORS [cross origin resource sharing] for image.
                   If any image is rendered from remote server, then it requires
                   CORS configuration.
```
Syntax:
    <img  src="..from remote location"  crossorign="allow-anonymous | use-credentials">
```

11. decoding        : It defines how image have to load along with other contents in
                  page. It have values "sync, async & auto".
```
Syntax:
    <img src="some path"  decoding="sync | async | auto">

```

12.  importance    : It sets priority for image, which can be low, medium, high & auto.
```
Syntax:
    <img src="some path"  importance="low | medium | high | auto">
```

13.  srcset        : It defines a collection of images to display at specific embedded
                 position.
```
Syntax:
    <img srcset="[collection of images]">
```

FAQ's: How to design fluid-images?
Ans: You can configure fluid image by defining the size in "%".

        <img  width="100">        Static
        <img width="100%">        Fluid


### Example- Amazon Cards

        