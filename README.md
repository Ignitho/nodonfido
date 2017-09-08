
	This is a complete example to Onfido API using JS.

## Installing

	npm install nodonfido

## Usage

	var nodonfido = require('nodonfido');	

## Setup API Key

	nodonfido.setAPIkey('My_API_Key');

## Create an Applicant


	var FormData = {
    			'title': 'Mr',
    			'first_name': 'first name',
    			'last_name': 'last name',
    			'gender': 'male',    
    			'dob': '2013-02-17',
    			'telephone': '322222222',
    			'country': 'GBR',
    			'email': 'name@email.com',
    			'addresses': [{
            			'building_number': '100',
            			'street': 'Main Street',
            			'town': 'London',
            			'postcode': 'SW4 6EH',
            			'country': 'GBR',
            			'start_date': '2013-02-17'
        			}]
			}

	nodonfido.Applicant('Create', FormData, '', function (error, response, body) {
    		if (!error) {
       		// Print out the response body
        	console.log(body)
    		} 
    		else { console.log('Error : ' + error) }
		});
	

## List all Applicants


		var FormData = {};

		nodonfido.Applicant('Fetch', FormData, '', function (error, response, body) {
    			if (!error) {
        			// Print out the response body
        			console.log(body)
    			} 
    			else { console.log('Error : ' + error) }
		});


## Fetch Applicant by ID


 	--> Syntax
 		nodonfido.Applicant('Fetchid', FormData, Applicant_Id, function (error, response, body) {});


	var FormData = {};

	nodonfido.Applicant('Fetchid', FormData, 'e4ertf7-3345-4efe-bb27-d193452428c88', function (error, response, body) {
    		if (!error) {
        	// Print out the response body
        	console.log(body)
    		} 
    		else { console.log('Error : ' + error) }
	});


## Upload Document for an Applicant


 	--> Syntax
		nodonfido.Document( applicant_id, file_name, file_type,doc_type,file_location, function (error, response, 	

	body) {});


		nodonfido.Document('e4ertf7-3345-4efe-bb27-d193452428c88', 'image.jpg', 'jpg', 'passport', 'C:\\image.jpg', 

 
		function (error, response, body) {
    			if (!error) {
        		// Print out the response body
        		console.log(body)
    		} 
    		else { console.log('Error : ' + error) }
		});


## Create Checks for an Applicant


	--> Syntax
		nodonfido.Checks('Create', check_args, applicant_id, ' ', function (error, response, body){});


			check_args = {
    				type: 'standard',
    				reports: [{ name: 'identity' }]
				}

			nodonfido.Checks('Create', check_args, 'e4ertf7-3345-4efe-bb27-d193452428c88', ' ', function 		

			(error, response, body) {
   			 if (!error) {
    	   			 // Print out the response body
       				 console.log(body)
   			 } 
  			  else { console.log('Error : ' + error) }
			});


## Fetch All Checks for an Applicant


	--> Syntax
		nodonfido.Checks('Fetch', check_args, applicant_id, ' ', function (error, response, body){});


		check_args = { }

		nodonfido.Checks('Fetch', check_args, 'e4ertf7-3345-4efe-bb27-d193452428c88', '', function (error, 		

		response, body) {
    			if (!error) {
        			// Print out the response body
        			console.log(body)
    			} 
    			else { console.log('Error : ' + error) }
		});


## Fetch Checks by CheckId


	--> Syntax
		nodonfido.Checks('Fetchid', check_args, applicant_id,check_id, function (error, response, body){});


		check_args = { } 

		nodonfido.Checks('Fetchid', check_args, 'e4ertf7-3345-4efe-bb27-d193452428c88', '74dfgh42c-cc38-48aa-8gh4-	

		e2cfghfg21b30', function 
		(error, response, body) {
    			if (!error) {
        		// Print out the response body
        		console.log(body)
    		} 
    		else { console.log('Error : ' + error) }
		});


## List Reports for an applicant by CheckID


	--> Syntax
		nodonfido.Reports('Fetch',FormData, check_id,' ', function (error, response, body){});


		var FormData = {};

			nodonfido.Reports('Fetch', FormData, '74dfgh42c-cc38-48aa-8gh4-e2cfghfg21b30', '', function (error, 

			response, body) {
    				if (!error) {
        				// Print out the response body
        				console.log(body)
    				} 
    				else { console.log('Error : ' + error) }
			});


## Fetch Reports by ReportID


	--> Syntax
		nodonfido.Reports('Fetchid',FormData, check_id,report_id, function (error, response, body){});


		var FormData = {};

		nodonfido.Reports('Fetchid', FormData, '74dfgh42c-cc38-48aa-8gh4-e2cfghfg21b30', '0bfhj597-fec5-4f22-b9a7-	

	28ab0fgh1837', 
   			 function(error, response, body) {
   				 if (!error) {
       					 // Print out the response body
       					 console.log(body)
    				} 
    				else { console.log('Error : ' + error) }
			});

