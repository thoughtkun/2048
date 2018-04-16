function showNumberWithAnimation(x, y, number) {
  var numberCell = $('#number-cell-' + x + '-' + y);
  numberCell.css({
    backgroundColor: getNumberBackgroundColor(number),
    color: getNumberColor(number),
  })
  numberCell.text(number);
  numberCell.animate({
    width: '100px',
    height: '100px',
    top: getPosTop(x, y),
    left: getPosLeft(x, y)
  }, 50)
}