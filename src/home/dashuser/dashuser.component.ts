import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { Chart } from  'node_modules/chart.js';
declare const deluseracc : any;
declare const contactadmin : any;

@Component({
  selector: 'app-dashuser',
  templateUrl: './dashuser.component.html',
  styleUrls: ['/src/home/home.component.css','./dashuser.component.css']
})
export class DashuserComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
    $(document).ready(function (){
      $('#detailsform .editbtn').on('click',function(){
        //$(this).parent().children('input').css({"color": "red", "border": "2px solid red"});
        console.log("Clicked Button");
        $(this).parent().children('input').toggleClass('showborder hideborder');
        $(this).parent().children('input').prop('readonly',function(index,value){
          if(value == true){
            return false;
          }
          else {
            return true;
          }
        });
        
        $(this).children('#editlink').toggleClass('hideAnchor showAnchor');
        $(this).children('#submitlink').toggleClass('showAnchor hideAnchor');
        
    });
  });
  
    var myChart = new Chart("charts", {
        type: 'line',
        data: {
            labels: ['Last Week', '2nd Week', '3rdWeek', '4th Week', '5th Week'],
            datasets: [{
                label: '# of Votes',
                data: [10, 5, 8, 15, 7],
                backgroundColor: [
                    'rgba(0,0,0,0.1)'
                ],
                borderColor: [
                    'rgba(0, 0, 0, 0.2)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });

  }

  onDeleteAccClick(){
    deluseracc();
  }
  onContactAdminClick(){
    contactadmin();
  }
}
