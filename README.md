# adventurer.js
Create a "Choose Your Own Adventure" Game Easily


![Example Story Screenshot](/example.png)


# Docs
```js
//use default styling
adventure.start('.targetElementClass', storyObject, 'firstQuestion', true);
//OR
adventure.start('#targetElementID', storyObject, 'firstQuestion');

//use your own styling
adventure.start('#targetElementID', storyObject, 'firstQuestion', false);
```
```
/*Box that contains the question*/
.questionBox{

}
/*What shows up when you don't point to an existing object*/
.finishedBox{
}

/*all questions*/
.selectionBox{
}
/*individual questions*/
.s0, .s1, .s2, .s3, .s4, .s5 .....{
}
```

# Getting started
Write your story script inside of an object.

The adventurer function should be in this format:
```js
adventure.start('.targetElementClassOrID', storyObject, 'firstQuestion');
```


Your story object should be in this format:
```js
let myAdventure = {
	Q0: {
		question:'You awake and find yourself in a round room with no doors or windows...',
		options:[
			{btn:"💨 Fart", next:'Q1'},
			{btn:"😴 Take a nap", next:'Q2'},
			{btn:"👅 Lick the wall", next:'Q3'},
			{btn:"😱 Scream for help", next:'Q9'}
		]
	},
	Q1: {
		question:'Wow, that kinda stinks...',
		options:[
			{btn:"💨 Fart again", next:'Q11'},
			{btn:"🤮 Throw up", next:'Q8'},
			{btn:"👅 Lick the stinky walls", next:'Q3'}
		]
	},
	Q2: {
		question:'Wow, that was refreshing...',
		options:[
			{btn:"😴 Oh well, time to sleep some more", next:'Q20'},
			{btn:"🤔 What if this is still a dream? How do we know anything is real?", next:'Q7'},
			{btn:"👅 Lick the walls", next:'Q3'}
		]
	}
}
```

Then we can kick off our story by running this function:
```js
adventurer.start('.adventureArea', myAdventure, 'Q0');
```

### HTML
```html
<html>
	<head>
		<script src="https://cdn.jsdelivr.net/gh/leimapapa/adventurer.js/adventurer.min.js"></script>
	</head>
	<body>
		<div class="adventureArea"></div>
	</body>
</html>
```
### CSS
```css
.adventureArea {
	position:absolute;
	top:50%;
	left:50%;
	transform:translate(-50%,-50%);
}

/*
// edit how the questions, choices, and the finished box show up:
.questionBox, .finishedBox, .selectionBox
*/
```
### JS
```js
let myAdventure = {
	Q0: {
		question:'You awake and find yourself in a round room with no doors or windows...',
		options:[
			{btn:"💨 Fart", next:'Q1'},
			{btn:"😴 Take a nap", next:'Q2'},
			{btn:"👅 Lick the wall", next:'Q3'},
			{btn:"😱 Scream for help", next:'Q9'}
		]
	},
	Q1: {
		question:'Wow, that kinda stinks...',
		options:[
			{btn:"💨 Fart again", next:'Q11'},
			{btn:"🤮 Throw up", next:'Q8'},
			{btn:"👅 Lick the stinky walls", next:'Q3'}
		]
	},
	Q2: {
		question:'Wow, that was refreshing...',
		options:[
			{btn:"😴 Oh well, time to sleep some more", next:'Q20'},
			{btn:"🤔 What if this is still a dream? How do we know anything is real?", next:'Q7'},
			{btn:"👅 Lick the walls", next:'Q3'}
		]
	}
}


adventurer.start('.adventureArea', myAdventure, 'Q0');
```

## CDN

https://cdn.jsdelivr.net/gh/leimapapa/adventurer.js/adventurer.min.js

## Example

https://codepen.io/leimapapa/pen/BaRLyEZ
