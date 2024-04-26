# Basics of CSS
## linking css
## boileplate code
## understanding units, px and %
## understanding margin
- border/spaces outside the element 
- 4values: top,right,bottom,left
- 2values: top&bottom, left&right
## padding
- imaginary border/spaces inside an element
## background image
## understanding position absolute
- its like layer which come up like stack
- if u want to make the parent as absolute but u want the child to b
- 
- e positioned based on parent, then the parent will also act as relative here
## understanding position relative
- imagine relative as like box, with some border, within that box outside elements doesn't comes in and inside elemnets doesn't goes outside
- make the element relative, if u want a child elemnet to be positioned based on the parent element, and the parent element is positioned as relative
## understanding flexbox
- for width/x-axis/main axis centering: justify content
- for height/y-axis/cross axis centering: align items

# Responsive

## Understanding units
- px : its fixed
- % : based parent the height width works
- vw,vh : take value based on the screen's size
    - vw : viewport width
    - vh : viewport height
    - vw is greater than vh (or) vh is smaller than vw
- vmax, vmin
    - vmax : takes maximum viewport b/w width and height in percentage.
        eg : if vw is greater then changes is based on width, if vh is greater then changes is based on height
    - vmin : takes minimum viewport b/w width and height in percentage.
        eg : if vw is smaller then changes is based on width, if vh is smaller then changes is based on height
- em, rem
    - em : fontsize based on the parent element
    - rem : fontsize based on the root (html/screen) element
        defaultly, 1rem = 16px

## Layout of website
- absolute vs flex

## flexbox
- display flex
- align items in x and y axis
- flex direction
- flex wrap

## CSS media queries
- min height, min width
- min width, max width

## key points to keep in mind to make reponsive website
1. CSS flexbox
2. CSS units
3. reponsive typography
4. mobile first approach
5. flexible images and media