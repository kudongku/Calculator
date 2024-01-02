# 전형적인 계산기 배열을 가진 계산기 웹사이트 입니다.

## html, css, js 로만 사용하여 구현했습니다.

## grid를 중점적으로 학습하였습니다.

## js

```
let displayValue = '';
```

displayvalue는 계산기에 디스플레이에 띄울 계산식을 보여주는 STring입니다.

```
function appendToDisplay(value) {
  displayValue += value;
  document.getElementById('display').value = displayValue;
}
```

계산기의 버튼을 클릭하면 displayvalue에 문자를 더합니다.

```
function clearDisplay() {
  displayValue = '';
  document.getElementById('display').value = displayValue;
}
```

clear버튼을 누르면 계산식이 모두 지워집니다.

```
function calculate() {
  try {
    let result = eval(displayValue);
    //displayValue에 "2+3*5"라는 값이 저장되어 있는 경우
    // eval(displayValue)은 표준 수학적 연산 순서(덧셈과 뺄셈에 앞서 곱셈과 나눗셈)에 따라
    // 이 식의 결과를 계산하여 결과를 반환합니다.

    displayValue = result.toString();
    document.getElementById('display').value = displayValue;
  } catch (error) {
    displayValue = 'Error';
    document.getElementById('display').value = displayValue;
  }
}
```

= 버튼을 누르면, eval을 통해 연산을 하여 결과값을 display로 보여줍니다.

## html

```
<div class="calculator">
      <input type="text" id="display" readonly />
      <div class="buttons">
        <button onclick="clearDisplay()" class="red_bg">C</button>
        <button onclick="appendToDisplay('/')" class="white_bg">/</button>
        <button onclick="appendToDisplay('7')">7</button>
        <button onclick="appendToDisplay('8')">8</button>
        <button onclick="appendToDisplay('9')">9</button>
        <button onclick="appendToDisplay('+')" class="white_bg">+</button>
        <button onclick="appendToDisplay('4')">4</button>
        <button onclick="appendToDisplay('5')">5</button>
        <button onclick="appendToDisplay('6')">6</button>
        <button onclick="appendToDisplay('-')" class="white_bg">-</button>
        <button onclick="appendToDisplay('1')">1</button>
        <button onclick="appendToDisplay('2')">2</button>
        <button onclick="appendToDisplay('3')">3</button>
        <button onclick="appendToDisplay('*')" class="white_bg">*</button>
        <button onclick="appendToDisplay('0')">0</button>
        <button onclick="appendToDisplay('.')">.</button>
        <button onclick="calculate()" id="twospace" class="white_bg">=</button>
      </div>
</div>
```

아주 단순한 구조

## CSS

```
.buttons {
  display: grid;
  grid-template-columns: repeat(4, 65px);
  grid-auto-rows: 65px;
  grid-gap: 5px;
}
.red_bg {
  background-color: red;
  grid-column: span 3;
}
#twospace {
  grid-column: span 2;
}
```

길이를 정교하게 설정해준뒤,
grid를 통해 한줄에 4개씩 각각의 넓이는 65px씩 설정
3칸을 차지하는 경우 span 3 설정
