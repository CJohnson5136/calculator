var equation = 0;
var eqeval = true;

var calc = document.querySelector('#calculator');

var calcList = document.createElement('ul');

var p = document.createElement('p');
p.id = 'screen';
p.innerHTML = equation;
p.style.borderWidth = '2px';
p.style.borderColor = '#cccccc';
p.style.borderStyle = 'outset';
p.style.backgroundColor = '#dddddd';
p.style.marginBottom = '0px';
calcList.appendChild(p);

var buttonList = ['/',9,8,7,'*',6,5,4,'-',3,2,1,'+','=','.',0];

for (var i = 0; i < buttonList.length; i++) {
    var li = document.createElement('li');
    var button = document.createElement('button');
    
    button.textContent = buttonList[i];
    button.id = buttonList[i];
    
    li.appendChild(button);
    calcList.appendChild(li);
}
var image = document.createElement('img');
image.src = 'http://www.moneysense.ca/wp-content/uploads/2011/11/calculator_broken_322.jpg';
image.style.width = '40%';
image.style.margin = 'auto';
image.style.display = 'none';

calc.appendChild(calcList);
calc.appendChild(image);

var screen = document.getElementById('screen');

var buttonClass = document.querySelectorAll('button');
for (var i = 0; i < buttonClass.length; i++) {
    buttonClass[i].addEventListener('click', function(){
        //console.log(this.id);
        if (this.id == '=') {
            //console.log(math.eval(equation));
            equation = math.eval(equation);
            eqeval = true;
        }
        else if (this.id == '/' || this.id == '*' || this.id == '-' || 
            this.id == '+') {
            equation = math.eval(equation);
            equation += this.id;
            eqeval = false;
        }
        else {
            if (eqeval) {
                equation = this.id;
                eqeval = false;
            }
            else {
                equation += this.id;
            }
        }
        screen.innerHTML = equation;
        if (!isFinite(equation) && typeof(equation) == 'number') {
            calcList.style.display = 'none';
            image.style.display = 'list-item';
        }
    });
}

//<iframe width="560" height="315" src="https://www.youtube.com/embed/TTyfqVOFTFc" frameborder="0" allowfullscreen></iframe>
var iframe = document.createElement('iframe');
iframe.src = 'https://www.youtube.com/embed/TTyfqVOFTFc?autoplay=1';
//iframe.style.width='560px';
iframe.width = '1020';
iframe.height = '630';
iframe.frameborder = '0';
iframe.margin = 'auto';

var easteregg = '';
var finalegg = 'ArrowUpArrowUpArrowDownArrowDownArrowLeftArrowRightArrowLeftArrowRightba';
document.addEventListener('keydown', function (e) {
    easteregg += e.key;
    if (easteregg == finalegg) {
        calcList.style.display = 'none';
        image.style.display = 'none';
        calc.appendChild(iframe);
    }
    else if (finalegg.indexOf(easteregg) == -1){
        easteregg = e.key;
    }
})