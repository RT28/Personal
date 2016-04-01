var global_data;
angular.module("personal_profile_app", []).
    controller("personal_page_controller", ["$scope", "$http", function($scope, $http){
        $scope.data = {
            "Profile" : {
                "Name" : "Riddhi Takkar",
                "PhoneNumber" : "+919819511070",
                "EmailId" : "riddhi.thakkar2804@gmail.com",
                "Location" : "Mumbai, India"
            },
            "Portfolio" : [{
                    "Name" : "Train Capacity Planning Dashboard",
                    "Description" : "Designed user interface for Train capacity planning. A system which enables controllers to determine the no. of vehicle units required to meet a capacity on every single train route. Enables controllers to quickly decide if a particular selection satisfies the capacity demand. It also lets the train controller know when and where will the same vehicle units be needed for other journeys during the day.",
                    "ImageUrl" : "./assets/images/Project1.png"
                }, {
                    "Name" : "Media Screener",
                    "Description" : "Designed an application for an entertainment company which allows its customers or viewers to stream videos for each of the show under every sub brand that it provides. Users can download, share, comment and view galleries of all seasons, episodes of a particular show under a sub brand",
                    "ImageUrl" : "./assets/images/Project2.png"
                }, {
                    "Name" : "Employee Communication iOS App Design",
                    "Description" : "Designed user interface for an iOS app for a telecommunication company. The main idea behind this app was to develop an iOS application that would help employees chat, contact other employees in the organization. Creation of a workflow process that would enable employees submit travel expense reports, allow managers to approve/reject travel expense reports. Users can create tasks for themselves or assign it to others etc.",
                    "ImageUrl" : "./assets/images/Project3.png"
                }, {
                    "Name" : "Data Pipline",
                    "Description" : "Development of a testing system which enables the user with the type of components required during testing. The user can create a new pipeline, save an existing pipeline, export results of the test, know what components are up and running, what services are defunct etc.",
                    "ImageUrl" : "./assets/images/Project4.png"
                }, {
                    "Name" : "Fetal Growth Monitoring",
                    "Description" : "Development of a responsive web application that helps medical professionals and mothers monitor the growth of the foetus at every stage of a pregnancy",
                    "ImageUrl" : "./assets/images/Project5.png"
                }, {
                    "Name" : "Trade Promotions",
                    "Description" : "Part of Pricing domain. Front end web development for a planning, tracking & execution, budget allocations for promotional events for different categories and products across different geographies and timelines. Generation of reports based on Planning, Plan vs Actuals, Invoicing. Also implemented front end access control that limits the use of the system based on the user logged in.",
                    "ImageUrl" : "./assets/images/Project6.png"
                }, {
                    "Name" : "Retail Pricing",
                    "Description" : "Part of Pricing domain. Front end development of a web application that enables the user to price its products keeping in mind competitive pricing, market conditions, demand requirements, etc. Performance reports, opportunity suggestions, summary reports, market reports, etc enable the user to better price their products. Access control allows enabling/disbaling application features based on the type of user thats logged in.",
                    "ImageUrl" : "./assets/images/Project7.png"
                }, {
                    "Name" : "Mobility Pricing Solution",
                    "Description" : "Development of pricing solution for mobile devices. Although not a full fledged solution as compared to the one developed using Microsoft Excel, it helped the organization evaluate possible solutions to the constraints that mobile devices pose in terms of usability, connectivity and limited bandwidth",
                    "ImageUrl" : "./assets/images/Project8.png"
                }, {
                    "Name" : "Receipts Reconcialliation",
                    "Description" : "Developed a web application and deployed it on the company’s intranet, that facilitates the customers monetary interactions with its merchants",
                    "ImageUrl" : "./assets/images/Project9.png"
                }, {
                    "Name" : "Lets Play",
                    "Description" : "Design and Front end development of a web application that facilitates online booking for sports clubs, sporting activities",
                    "ImageUrl" : "./assets/images/Project10.png"
                }
            ]
        };

        $scope.onPortfolioItemClick = function(item) {
            var str = item.ImageUrl.split("/");
            var file = str[str.length - 1];
            str = file.split(".");
            file = str[0];
            var index = file.replace("Project", "");
            document.cookie = index - 1;
        };
        
    }]).controller("detailsController", ["$scope", function($scope){
        $scope.dataDoc = [{
                    "Name" : "Train Capacity Planning Dashboard",
                    "Description" : "Designed user interface for Train capacity planning. A system which enables controllers to determine the no. of vehicle units required to meet a capacity on every single train route. Enables controllers to quickly decide if a particular selection satisfies the capacity demand. It also lets the train controller know when and where will the same vehicle units be needed for other journeys during the day.",
                    "ImageUrl" : "./assets/images/Project1.png",
                    "DetailsImageUrl" : "./assets/details/Project1.png"
                }, {
                    "Name" : "Media Screener",
                    "Description" : "Designed an application for an entertainment company which allows its customers or viewers to stream videos for each of the show under every sub brand that it provides. Users can download, share, comment and view galleries of all seasons, episodes of a particular show under a sub brand",
                    "ImageUrl" : "./assets/images/Project2.png",
                    "DetailsImageUrl" : "./assets/images/Project2.png"
                }, {
                    "Name" : "Employee Communication iOS App Design",
                    "Description" : "Designed user interface for an iOS app for a telecommunication company. The main idea behind this app was to develop an iOS application that would help employees chat, contact other employees in the organization. Creation of a workflow process that would enable employees submit travel expense reports, allow managers to approve/reject travel expense reports. Users can create tasks for themselves or assign it to others etc.",
                    "ImageUrl" : "./assets/images/Project3.png",
                    "DetailsImageUrl" : "./assets/details/Project3.png"
                }, {
                    "Name" : "Data Pipline",
                    "Description" : "Development of a testing system which enables the user with the type of components required during testing. The user can create a new pipeline, save an existing pipeline, export results of the test, know what components are up and running, what services are defunct etc.",
                    "DetailsImageUrl" : "./assets/details/Project4.png",
                    "ImageUrl" : "./assets/images/Project4.png"
                }, {
                    "Name" : "Fetal Growth Monitoring",
                    "Description" : "Development of a responsive web application that helps medical professionals and mothers monitor the growth of the foetus at every stage of a pregnancy",
                    "DetailsImageUrl" : "./assets/details/Project5.png",
                    "ImageUrl" : "./assets/images/Project5.png"
                }, {
                    "Name" : "Trade Promotions",
                    "Description" : "Part of Pricing domain. Front end web development for a planning, tracking & execution, budget allocations for promotional events for different categories and products across different geographies and timelines. Generation of reports based on Planning, Plan vs Actuals, Invoicing. Also implemented front end access control that limits the use of the system based on the user logged in.",
                    "DetailsImageUrl" : "./assets/details/Project6.png",
                    "ImageUrl" : "./assets/images/Project6.png"
                }, {
                    "Name" : "Retail Pricing",
                    "Description" : "Part of Pricing domain. Front end development of a web application that enables the user to price its products keeping in mind competitive pricing, market conditions, demand requirements, etc. Performance reports, opportunity suggestions, summary reports, market reports, etc enable the user to better price their products. Access control allows enabling/disbaling application features based on the type of user thats logged in.",
                    "DetailsImageUrl" : "./assets/details/Project7.png",
                    "ImageUrl" : "./assets/images/Project7.png"
                }, {
                    "Name" : "Mobility Pricing Solution",
                    "Description" : "Development of pricing solution for mobile devices. Although not a full fledged solution as compared to the one developed using Microsoft Excel, it helped the organization evaluate possible solutions to the constraints that mobile devices pose in terms of usability, connectivity and limited bandwidth",
                    "DetailsImageUrl" : "./assets/details/Project8.png",
                    "ImageUrl" : "./assets/images/Project8.png"
                }, {
                    "Name" : "Receipts Reconcialliation",
                    "Description" : "Developed a web application and deployed it on the company’s intranet, that facilitates the customers monetary interactions with its merchants",
                    "DetailsImageUrl" : "./assets/details/Project9.png",
                    "ImageUrl" : "./assets/images/Project9.png"
                }, {
                    "Name" : "Lets Play",
                    "Description" : "Design and Front end development of a web application that facilitates online booking for sports clubs, sporting activities",
                    "DetailsImageUrl" : "./assets/details/Project10.png",
                    "ImageUrl" : "./assets/images/Project10.png"
                }
            ];
            
        $scope.data = $scope.dataDoc[Number(document.cookie)];
        
        //$scope.data = global_data;
    }]);