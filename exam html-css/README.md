# Exam: HTML & CSS

### Getting Started
 - Fork this repository under your own account
 - Commit your progress frequently and with descriptive commit messages
 - All your answers and solutions should go in this repository

### What can I use?
 - You can use any resource online, but **please work individually**
 - Instead of copy-pasting your answers and solutions, write them in your own words.


# Tasks

## 1. Build a design (~90 minutes) [10 points]
Build the following profile cards according to the design provided.   
Follow the design as closely as possible.   
Commit an HTML and a CSS file to this repository.
![design](exercise-1.png)

### Assets
John Duck | Jane Duck | Pencil icon
--------- | --------- | -----------
![duck](duck.jpg) | ![duck](duck2.jpg) | ![pencil-icon](edit-icon.png)   

### Other data
  - Name font size: 28 pixels
  - Text size: 14 pixels
  - Font family: Arial, sans-serif

### Acceptance criteria
The task is accepted if:
  - The result follows design [2p]
  - The code follows style guide [1p]
  - The CSS & HTML are valid [1p]
  - The HTML considers semantic responsibilities [2p]
  - The code avoids code duplication [2p]
  - The CSS has meaningful and short selectors [2p]

Extra points for if:
  - the result is centered on the page [2p]


## 2. Understand code (~15 minutes) [2 points]
Read the following code snippet:   
What is the distance between the top-left corner of the document body and the yellow box?   
Give a detailed explanation below!   
Add your answer to this readme file, commit your changes to this repository.
```HTML
<!DOCTYPE html>
<html>
  <head>
    <style>
      body {
        padding: 0px;
        margin: 0px;
      }
      .foo {
        top: 20px;
        left: 20px;
        width: 100px;
        height: 100px;
        position: absolute;
        background: blue;
      }
      .bar {
        top: 20px;
        left: 20px;
        width: 30px;
        height: 30px;
        position: absolute;
        background: yellow;
      }
    </style>
  </head>
  <body>
    <div class="foo">
      <div class="bar"></div>
    </div>
  </body>
</html>
```
#### Your answer: [2p]
The foo class rectangle will from 20px (top, left) from the body because it has an absolute position from the body corner. The bar class has also an absolute position, but this class positions himselfs to the top left corner of the foo class.
The reason of these, because the foo class has a position too.

## 3. Explain concepts (~15 minutes) [4 points]
Add your answer to this readme file, commit your changes to this repository.


### Explain the difference between `display: block` and `display: inline` in CSS! What is `display: inline-block`?
#### Your answer: [2p]
The display CSS property specifies the type of rendering box used for an element. We can add block properties with the display property for none block elements too. The block element generates a block element box. These boxes will under each other. (egymás alatt fognak elhelyezkedni) The inline element generates one or more inline element boxes. These boxes will to situate inline. The inline-block element generates a block element box that will be flowed with surrounding content as if it were a single inline box.

### What is the difference between a `<section>` and an `<article>` element? Name one good example of using an `<article>`.
#### Your answer: [2p]
Section and article are both of html elements. But section gives us only logical meaning, function. Article has a semantic meaning
too. It is useful for search-engines, so they knows what kind of content is this. If I write an online blog, it is
the best to put content of the blog in an `<article>`. So everyone knows that is for example a reusable content.
