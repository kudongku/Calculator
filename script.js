let displayValue = '';

function appendToDisplay(value) {
  displayValue += value;
  document.getElementById('display').value = displayValue;
}

function clearDisplay() {
  displayValue = '';
  document.getElementById('display').value = displayValue;
}

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
