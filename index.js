var request = require('request');
var fs = require('fs');


var Nodofido = function (url, method, api_key, host, path, formdata) {
    
    
    var options = {
        url: url,   
        method: method,
        headers: { 'Authorization': 'Token token=' + api_key, 'host': host, 'path': path, },        
        body: formdata,
        json: true
    }
    
    
    request(options, function (error, response, body) {
        console.log("errrrr: " + error);
        console.log("statusCode: " + response.statusCode); if (!error && response.statusCode == 201) {
            // Print out the response body
            console.log(body)
            console.log("BODYertett: " + body);
            var result = {};
            result.response = response;
            result.body = body;
            result.error = error;
            
            
            response.send(result);
        }
    })

}

var API_KEY = '';

//Set API Key for connect Onfido
//--------------------------------------
Nodofido.setAPIkey = function (api_key) {
    API_KEY = api_key;
}

//Applicant
//--------------------------------------
Nodofido.Applicant = function (opration,formdata, applicant_id, callback) {
    
    var options = {}
    

    if (opration == 'Create') {

        var url = 'https://api.onfido.com/v2/applicants';
        var path = '/v2/applicants';                

        options = {
            url: url,   
            method: 'POST',
            headers: { 'Authorization': 'Token token=' + API_KEY, 'host': 'api.onfido.com', 'path': path, },        
            body: formdata,
            json: true
        }
    }
    else if (opration == 'Fetch') {
        var url = 'https://api.onfido.com/v2/applicants';
        var path = '/v2/applicants';
                
        
        options = {
            url: url,   
            method: 'GET',
            headers: { 'Authorization': 'Token token=' + API_KEY, 'host': 'api.onfido.com', 'path': path, },        
            body: formdata,
            json: true
        }
    }
    else if (opration == 'Edit') {
        var url = 'https://api.onfido.com/v2/applicants';
        var path = '/v2/applicants';
        
        if (applicant_id != '') {
            url = url + '/' + applicant_id;
            path = path + '/' + applicant_id;
        }
        
        options = {
            url: url,   
            method: 'PUT',
            headers: { 'Authorization': 'Token token=' + API_KEY, 'host': 'api.onfido.com', 'path': path, },        
            body: formdata,
            json: true
        }
    }
    else if (opration == 'Fetchid') {
        var url = 'https://api.onfido.com/v2/applicants';
        var path = '/v2/applicants';
        
        if (applicant_id != '') {
            url = url + '/' + applicant_id;
            path = path + '/' + applicant_id;
        }
        
        options = {
            url: url,   
            method: 'GET',
            headers: { 'Authorization': 'Token token=' + API_KEY, 'host': 'api.onfido.com', 'path': path, },        
            body: formdata,
            json: true
        }
    }
    else {
        return callback('Error:Invalid opration', '', '');
    }


    
    request(options, function (error, response, body) {
        //console.log("errrrr: " + error);
        //console.log("statusCode: " + response.statusCode);
        if (!body.error) {
            // Print out the response body
            //console.log(body)
            //console.log("BODYertett: " + body);
            var result = {};
            result.response = response;
            result.body = body;
            result.error = error;
            
            return callback(error, response, body);
            //response.send(result);
            module.exports = result;
        }
        else {
            var result = {};
            result.error = body.error;
            return callback(error, response, body);
        }
    })

}

//Document Upload
//--------------------------------------
Nodofido.Document = function (applicant_id,file_name,file_type,doc_type,file_location,callback) { 

    var formData = {
        file_name: file_name,
        file_type: file_type,
        type: doc_type,
        file: fs.createReadStream(file_location)
    };
    
    var url = 'https://api.onfido.com/v2/applicants/' + applicant_id+'/documents';

    request.post({
        url: url, 
        formData: formData, 
        headers: { 'Authorization': 'Token token='+ API_KEY }
    }, function (err, httpResponse, body) {
        if (err) {
            return callback('Error:Upload Failed', '', '');
        }
        return callback(err, httpResponse, body);
    });

}

//Checks
//--------------------------------------
Nodofido.Checks = function (opration, formdata, applicant_id,check_id, callback) {
    
    var options = {}
    
    
    if (opration == 'Create') {
        
        var url = 'https://api.onfido.com/v2/applicants/'+ applicant_id+'/checks';
        var path = '/v2/applicants/'+ applicant_id+'/checks';
        
        options = {
            url: url,   
            method: 'POST',
            headers: { 'Authorization': 'Token token=' + API_KEY, 'host': 'api.onfido.com', 'path': path, },        
            body: formdata,
            json: true
        }
    }
    else if (opration == 'Fetch') {
        var url = 'https://api.onfido.com/v2/applicants/' + applicant_id + '/checks';
        var path = '/v2/applicants/' + applicant_id + '/checks';
        
        
        options = {
            url: url,   
            method: 'GET',
            headers: { 'Authorization': 'Token token=' + API_KEY, 'host': 'api.onfido.com', 'path': path, },        
            body: formdata,
            json: true
        }
    }
    else if (opration == 'Fetchid') {
        var url = 'https://api.onfido.com/v2/applicants/' + applicant_id + '/checks';
        var path = '/v2/applicants/' + applicant_id + '/checks';
        
        if (check_id != '') {
            url = url + '/' + check_id;
            path = path + '/' + check_id;
        }
        
        options = {
            url: url,   
            method: 'GET',
            headers: { 'Authorization': 'Token token=' + API_KEY, 'host': 'api.onfido.com', 'path': path, },        
            body: formdata,
            json: true
        }
    }
    else {
        return callback('Error:Invalid opration', '', '');
    }
    
    
    
    request(options, function (error, response, body) {
        //console.log("errrrr: " + error);
        //console.log("statusCode: " + response.statusCode);
        if (!body.error) {
            // Print out the response body
            //console.log(body)
            //console.log("BODYertett: " + body);
            var result = {};
            result.response = response;
            result.body = body;
            result.error = error;
            
            return callback(error, response, body);
            //response.send(result);
            module.exports = result;
        }
        else {
            var result = {};
            result.error = body.error;
            return callback(error, response, body);
        }
    })

}

//Reports
//--------------------------------------
Nodofido.Reports = function (opration, formdata, check_id,report_id, callback) {
    
    var options = {}
    
    
    if (opration == 'Fetch') {
        var url = 'https://api.onfido.com/v2/checks/' + check_id + '/reports';
        var path = '/v2/checks/' + check_id + '/reports';
        
        
        options = {
            url: url,   
            method: 'GET',
            headers: { 'Authorization': 'Token token=' + API_KEY, 'host': 'api.onfido.com', 'path': path, },        
            body: formdata,
            json: true
        }
    }
    else if (opration == 'Fetchid') {
        var url = 'https://api.onfido.com/v2/checks/' + check_id + '/reports';
        var path = '/v2/checks/' + check_id + '/reports';
        
        if (report_id != '') {
            url = url + '/' + report_id;
            path = path + '/' + report_id;
        }
        
        options = {
            url: url,   
            method: 'GET',
            headers: { 'Authorization': 'Token token=' + API_KEY, 'host': 'api.onfido.com', 'path': path, },        
            body: formdata,
            json: true
        }
    }
    else {
        return callback('Error:Invalid opration', '', '');
    }
    
    
    
    request(options, function (error, response, body) {
        //console.log("errrrr: " + error);
        //console.log("statusCode: " + response.statusCode);
        if (!body.error) {
            // Print out the response body
            //console.log(body)
            //console.log("BODYertett: " + body);
            var result = {};
            result.response = response;
            result.body = body;
            result.error = error;
            
            return callback(error, response, body);
            //response.send(result);
            module.exports = result;
        }
        else {
            var result = {};
            result.error = body.error;
            return callback(error, response, body);
        }
    })

}


module.exports = Nodofido;


