let myChart = document.getElementById("myChart").getContext('2d');
let addLabelInput = document.getElementById("addLabel");
let addNumberInput = document.getElementById("addNumber");
let addButton = document.getElementById("addButton");
const colors = ["red","green","yellow","blue","orange","brown","pink","purple"]

let testChart = new Chart(myChart,{
  type:'line',
  data:{
    labels:["1","2","3","4","5"],
    datasets:[{
      label:'テストチャート',
      data:[
        1,
        2,
        3,
        4,
        5
      ],
      backgroundColor:[
        'rgba(255,63,24,0.6)',
        'rgba(155,63,24,0.6)',
        'rgba(55,61,44,0.6)',
        'rgba(215,13,24,0.6)',
        'rgba(20,63,24,0.6)'
      ]
    }]
  },
  options:{
    title:{
      display:true,
      text: 'Test',
      fontSize:24
    },
    legend:{
      position:'right'
    }
    // scales:{
    //   xAxes:[
    //     scaleLabel:{
    //       display: true,
    //       labelString: '月'
    //     }
    //   ],
    //   yAxes:[
    //     scaleLabel:{
    //       display: true,
    //       labelString: '月'
    //     }
    //   ]
    // }
  }
});



if(addLabelInput.value != "" && addNumberInput.value != ""){
  
}
addLabelInput.addEventListener('keypress',(e) => {
  if(e.key == 'Enter'){
    if(addLabelInput.value != "" && addNumberInput.value != ""){
      console.log(addLabelInput.value)
    testChart.data.labels.push(addLabelInput.value);
    testChart.data.datasets[0].data.push(addNumberInput.value);
    testChart.data.datasets[0].backgroundColor.push(colors[0]);
    testChart.update();
    }
  }
});
addButton.addEventListener('click',() => {
  if(addLabelInput.value != "" && addNumberInput.value != ""){
    console.log(addLabelInput.value)
  testChart.data.labels.push(addLabelInput.value);
  testChart.data.datasets[0].data.push(addNumberInput.value);
  testChart.data.datasets[0].backgroundColor.push(colors[0]);
  testChart.update();
  }
});