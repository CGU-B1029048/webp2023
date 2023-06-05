const styleArgument = {fontSize: '10px', color: 'lime', 'background-color': 'wheat'}
const ChangeText=(event)=>{
  console.log(event.target);
  event.target.innerText = event.target.innerText + " is clicked";
}
const multibutton=(num)=>{
  var output = [];
  for (let i = 0; i <= num; i++)
    output.push(<button style={styleArgument} onClick={ChangeText}>第{i}個按鈕</button>)
  return output;
}

export default multibutton;