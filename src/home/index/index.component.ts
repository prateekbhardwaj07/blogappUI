import { Component, ComponentFactoryResolver, OnInit, ViewChild } from '@angular/core';
import { PostOutlineService } from "../services/post-outline.service";
import { SlickCarouselComponent } from "ngx-slick-carousel";
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faUserCircle, faCalendar } from '@fortawesome/free-regular-svg-icons';
import { formatDate, JsonPipe } from '@angular/common';
import * as $ from 'jquery';
import { catchError } from 'rxjs/operators'
import { PostOutline } from '../model/PostOutline';
import { NgForm } from '@angular/forms';
import { CommonService } from '../services/common.service';
import { newArray } from '@angular/compiler/src/util';



@Component({
	selector: 'app-index',
	templateUrl: './index.component.html',
	styleUrls: ['/src/home/home.component.css', './index.component.css']
})
export class IndexComponent implements OnInit {

	faChevronLeft = faChevronLeft;
	faChevronRight = faChevronRight;
	faUserCircle = faUserCircle;
	faCalender = faCalendar;
	hits: number = 0;
	clickedElement: any;
	onMailSubmitMsg: string;
	navArray = [];
	public postoutlinetrends:PostOutline[];
	public postoutlinerecents:PostOutline[];
	public postsNavArr:number[] = [];
	public postsNavIndex :number;

	@ViewChild('slickModal', { static: true }) slickModal: SlickCarouselComponent;   // static corresponds to resolving of query results before change detection runs.

	constructor(private _postoutlineService: PostOutlineService, private _commonService: CommonService) { }

	ngOnInit(): void {

		this._postoutlineService.getTrendingPosts().subscribe(
			(data) => { this.postoutlinetrends = data },
			(error) => { console.log(error.statusText, "Error Occurred") }
		)

		this._postoutlineService.setRecentPostsOffset('0');

		this._postoutlineService.getRecentPosts().subscribe(
			(data) => { this.postoutlinerecents = data },
			(error) => { console.log('Error: ', error.status + error.statusText) }
		);

		this._postoutlineService.getPostsRowsCountDB().subscribe(
			(data) => { this.initialiseNavArrVar(data[0].response) },
			(error) => { console.log('Error: $error.status + $error.statusText') }
		);


	}

	initialiseNavArrVar(rowCount:any) {
		var length = rowCount;
		var rows = (length / 5);
		rows = Math.ceil(rows);
		var mod = (length % 5);
		console.log(rows + ' ' + mod);
		this.navArray = new Array(rows);
		var count = 0;
		for (var i = 0; i < rows; i++) {
			if(mod != 0){
				console.log((rows-1)*5);
				if (count < ((rows-1)*5)) {
					this.navArray[i] = new Array(5);
					for (var j = 0; j <= 4; j++) {
						this.navArray[i][j] = (i) * 5 + j + 1;
						count++;
					}
				}
				else {
					this.navArray[i] = new Array(mod);
					for (var j = 0; j < mod; j++) {
						this.navArray[i][j] = ++count;
						
					}
				}
			}
			else {
				this.navArray[i] = new Array(5);
				for (var j = 0; j <= 4; j++) {
					this.navArray[i][j] = (i) * 5 + j + 1;
				}
			}
		}
		this.postsNavArr = this.navArray[0];
		this.postsNavIndex = 0;
		console.log(this.postsNavArr)
	}

	/* Slick JS Configuration JSON */
	slideConfig = {
		"slidesToShow": 4,
		"slidesToScroll": 1,
		"autoplay": true,
		"dots": false,
		"autoplaySpeed": 5000,
		"arrows": false,
		"responsive": [
			{
				"breakpoint": 1024,
				"settings": {
					"slidesToShow": 3,
					"slidesToScroll": 1,
					"infinite": true
				}
			},
			{
				"breakpoint": 812,
				"settings": {
					"slidesToShow": 2,
					"slidesToScroll": 1
				}
			},
			{
				"breakpoint": 600,
				"settings": {
					"slidesToShow": 1,
					"slidesToScroll": 1
				}
			}
			// You can unslick at a given breakpoint now by adding:
			// settings: "unslick"
			// instead of a settings object
		]
	};

	/* Next Slide Method Slick JS */
	nextSlick() {
		this.slickModal.slickNext();
	}

	/* Previous Slide Method Slick JS */
	prevSlick() {
		this.slickModal.slickPrev();
	}

	/* Timestamp to Date Format  */
	processDate(date: number): string {
		var formattedDate = formatDate(date, 'mediumDate', 'en-US');
		return formattedDate;
	}

	/* Toggle Related Text View TrendingPosts */
	toggleRelated(element: any) {

		if (this.clickedElement !== element) {
			this.hits = 0;
		}
		if (this.hits % 2 !== 0) //for hits 2,4,6,8 etc. Also the condition
		{
			$(element).css({ "height": "100px", "transition": "height 0.15s ease-out" });
			$(element).children('.relatedinfo').css({ 'display': "none" });
		}
		else { // for hits 1,3,5,7,9		
			$(element).css({ "height": "175px", "transition": "height 0.25s ease-in" });
			$(element).children('.relatedinfo').css({ 'display': "block" });
		}
		console.log("Hits : ", this.hits);
		this.hits++;
		this.clickedElement = element;

	}

	/* Fetching Recent Posts Using Offset From Page Number */
	fetchRecentPostByPage(pageNumber: string) {
		this._postoutlineService.setRecentPostsOffset(pageNumber);
		this._postoutlineService.getRecentPosts().subscribe(
			(data) => { this.postoutlinerecents = data },
			(error) => { console.log(error, "Error Occurred") }
		);

	}

	navigateTo(event: any) {
		var currentLinkNode = event.target;
		var activeLinkNode = document.querySelector('.pagination .is-active');
		var activeLinkValue = parseInt(activeLinkNode.innerHTML);
		console.log("Current Link Node : ", currentLinkNode.nodeName);
		if (currentLinkNode.nodeName != null) {
			var parent = currentLinkNode.parentNode;
			var parentname: string = parent.nodeName;
			console.log(parentname);

			if (parent != null && parentname === 'svg') {

				var attrStr = parent.getAttribute('data-icon');
				if (attrStr === 'chevron-left') {

					console.log("left arrow clicked");
					if (activeLinkValue > this.postsNavArr[0]) {
						activeLinkNode.classList.remove("is-active");
						activeLinkNode.previousElementSibling.classList.add("is-active");
						this.fetchRecentPostByPage((activeLinkValue - 1).toString());
					}
					if(activeLinkValue == this.postsNavArr[0]){
						if(this.postsNavIndex == 0){
							// do nothing
							console.log('No Action Needed');
						}
						else {
							this.postsNavArr = this.navArray[--this.postsNavIndex];
							// redirect to prev set of pages & reload page
						}
					}

				}
				if (attrStr === 'chevron-right') {
					console.log("right arrow clicked");
					if (activeLinkValue < this.postsNavArr[this.postsNavArr.length-1]) {
						activeLinkNode.classList.remove("is-active");
						activeLinkNode.nextElementSibling.classList.add("is-active");
						this.fetchRecentPostByPage((activeLinkValue + 1).toString());
					}
					if(activeLinkValue == this.postsNavArr[this.postsNavArr.length-1]){
						if(this.postsNavIndex == this.navArray.length){
							// do nothing
							console.log('No Action Needed');
						}
						else {
							this.postsNavArr = this.navArray[++this.postsNavIndex];
							// redirect to prev set of pages & reload page
						}
					}

				}

			}
			if (parent != null && parentname === 'FA-ICON') {

				var iconID = parent.id;
				if (iconID === 'prev') {
					console.log("left arrow clicked");
					// run method for previos posts
					if (activeLinkValue > this.postsNavArr[0]) {
						activeLinkNode.classList.remove("is-active");
						activeLinkNode.previousElementSibling.classList.add("is-active");
						this.fetchRecentPostByPage((activeLinkValue - 1).toString());
					}
					if(activeLinkValue == this.postsNavArr[0]){
						if(this.postsNavIndex == 0){
							// do nothing
							console.log('No Action Needed');
						}
						else {
							this.postsNavArr = this.navArray[--this.postsNavIndex];
							// redirect to prev set of pages & reload page
						}
					}

				}
				if (iconID === 'next') {
					console.log("right arrow clicked");
					// run method for next posts
					if (activeLinkValue < this.postsNavArr[this.postsNavArr.length-1]) {
						activeLinkNode.classList.remove("is-active");
						activeLinkNode.nextElementSibling.classList.add("is-active");
						this.fetchRecentPostByPage((activeLinkValue + 1).toString());
					}
					if(activeLinkValue == this.postsNavArr[this.postsNavArr.length-1]){
						if(this.postsNavIndex == this.navArray.length){
							// do nothing
							console.log('No Action Needed');
						}
						else {
							this.postsNavArr = this.navArray[++this.postsNavIndex];
							// redirect to prev set of pages & reload page
						}
					}
				}

			}
			if (parent != null && parentname === 'UL') {

				var currentLinkValue = event.target.innerHTML;
				console.log(currentLinkValue);
				var numValue = parseInt(currentLinkValue);
				if ((numValue !== NaN) && (numValue >= this.postsNavArr[0] && numValue <= this.postsNavArr[this.postsNavArr.length-1])) {
					console.log("Link Value : ", numValue);
					// run method for numbered posts
					activeLinkNode.classList.remove("is-active");
					currentLinkNode.classList.add("is-active");
					this.fetchRecentPostByPage((numValue).toString());
				}
			}
		}
		else {
			this.fetchRecentPostByPage('0');
		}
	}

	/* Subscribe Mail Method Form  */
	onMailSubmit(subscribeForm: NgForm) {
		var email = subscribeForm.controls['useremail'].value;
		console.log(email);
		this._commonService.subscribeMail(email).subscribe(
			data => { this.onMailSubmitMsg = data },
			error => { console.log('Error :', error.status + error.statusText) }
		)
		if (this.onMailSubmitMsg != null) {
			alert('Hello User $(this.onMailSubmitMessage)');
		}
	}



}
// var prevLink = document.querySelector('.pagination #prev');
// var nextLink = document.querySelector('.pagination #next');
// this.navArr = this.initialiseNavArrVar(data)
