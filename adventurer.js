const adventurer = (function () {
	
	const stylePage = (textCol='#ceced1', questionBox = '#0c1810', selectionBox='#4e5e6c', selectionBoxHover = '#ac5648', finishedBox = '#5d4e49') => {
		
		const css = `
			.questionBox, .finishedBox {
				background: ${questionBox};
				color: ${textCol};
				position: relative;
				top: 0;
				left: 50%;
				-webkit-transform:translate(-50%);
				    -ms-transform:translate(-50%);
				        transform:translate(-50%);
				width: 90vw;
				max-width:400px;
				padding:15px;
				border-radius:9px;
				border:3px solid #f5f5f5;
				-webkit-box-shadow:0px 2px 2px rgba(0,0,0,0.5);
				        box-shadow:0px 2px 2px rgba(0,0,0,0.5);
				font-family:'Roboto', sans-serif;
				font-size:1.1em;
				margin-top:4px;
			}

			.selectionBox {
				background:${selectionBox};
				color: ${textCol};
				cursor:pointer;
				position: relative;
				display:block;
				top: 0;
				left: 50%;
				-webkit-transform:translate(-50%);
				    -ms-transform:translate(-50%);
				        transform:translate(-50%);
				width: 88vw;
				max-width:380px;
				padding:15px;
				border-radius:999px;
				border:3px dashed #f5f5f5;
				-webkit-box-shadow:0px 2px 2px rgba(0,0,0,0.5);
				        box-shadow:0px 2px 2px rgba(0,0,0,0.5);
				font-family:'Roboto', sans-serif;
				font-size:1.2em;
				font-weight:bold;
				margin-top:4px;
				text-align:left;
				transition:300ms;
				white-space: preline;
			}
			.selectionBox:hover{
				background:-o-linear-gradient(65deg, ${selectionBox}, ${selectionBoxHover});
				background:linear-gradient(25deg, ${selectionBox}, ${selectionBoxHover});
			}
			.finishedBox{
				background:${finishedBox}
			}
		`,
		head = document.head || document.getElementsByTagName("head")[0],
		style = document.createElement("style");
		head.appendChild(style);

		style.type = "text/css";
		if (style.styleSheet) {
			// This is required for IE8 and below.
			style.styleSheet.cssText = css;
		} else {
			style.appendChild(document.createTextNode(css));
		}
	}
	
	const nextQuestion = (elem, snippets, selection) => {
		if(!selection){
			document.querySelector(elem).innerHTML = '<div class="finishedBox">Wow, what a ride...</div>';
		} else {
			const thisSelection = snippets[selection];
			if (!thisSelection) {
				document.querySelector(elem).innerHTML = '<div class="finishedBox">Wow, what a ride...</div>';
			} else {
				document.querySelector(elem).innerHTML = '';
				document.querySelector(elem).innerHTML += `
				<div class="questionBox">${thisSelection.question}</div>
			`;
				const selections = thisSelection.options;
				const nextObj = [];
				if(selections){
					for (let i=0; i< selections.length; i++){
						nextObj.push(selections[i].next);
						document.querySelector(elem).innerHTML += `
							<button class="selectionBox s${i}">${selections[i].btn}</button>
						`;
					}
					for (let j=0; j< selections.length; j++){
						document.querySelector(`.s${j}`).addEventListener("click", function(){
							nextQuestion(elem, snippets, nextObj[j]);
						});
					}
				}
			}
		}
	}
	return {
		start: (elem, snippets, selection, defaultCSS=true) => {
			if (defaultCSS){
				stylePage();
			}
			nextQuestion(elem, snippets, selection);
		}
	}
})();
