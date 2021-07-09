# adventurer.js
Create a "Choose Your Own Adventure" Game Easily


![](/example.png)


# Getting started
Write your story script inside of an object.

It should be in this format:
```
adventure.start('.targetElementClassOrID', storyObject, 'firstQuestion');
```


Your story object should be in this format:
```
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
```
adventurer.start('.adventureArea', myAdventure, 'Q0');
```


## CDN

https://cdn.jsdelivr.net/gh/leimapapa/adventurer.js/adventurer.min.js

## Example

https://codepen.io/leimapapa/pen/BaRLyEZ
