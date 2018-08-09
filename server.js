const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mysql = require('mysql');



// Connection string
const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "db1"
});

// Connect to mysql

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
 
 
// default route
app.get('/', function (req, res) {
    return res.send({ error: true, message: 'welcome' })
});
 
// port must be set to 8080 because incoming http requests are routed from port 80 to port 8080
app.listen(8080, function () {
    console.log('Node app is running on port 8080');
});

app.get('/userList', function (req, res) {
  //Make SQL statement:
 
  var sql = "SELECT * FROM user ";
  //Execute the SQL statement, with the value array:
  con.query(sql, function (err, result) {
    if (err) throw err;
    return res.send({ status: true, data: result, message: 'Data List success' });
  });
});
app.get('/memberlist', function (req, res) {
  //Make SQL statement:
 
  var sql = "SELECT * FROM task_members ";
  //Execute the SQL statement, with the value array:
  con.query(sql, function (err, result) {
    if (err) throw err;
    return res.send({ status: true, data: result, message: 'Data List success' });
  });
});
app.get('/userrole', function (req, res) {
  //Make SQL statement:
 
  var sql = "SELECT * FROM user_role ";
  //Execute the SQL statement, with the value array:
  con.query(sql, function (err, result) {
    if (err) throw err;
    return res.send({ status: true, data: result, message: 'Data List success' });
  });
});
app.get('/rolemap1', function (req, res) {
  //Make SQL statement:
 
  var sql = "SELECT * FROM user_role_mapping ";
  //Execute the SQL statement, with the value array:
  con.query(sql, function (err, result) {
    if (err) throw err;
    return res.send({ status: true, data: result, message: 'Data List success' });
  });
});

app.get('/headtask', function (req, res) {
  //Make SQL statement:
 
  var sql = "SELECT task.tast_name,task.task_id FROM task ";
  //Execute the SQL statement, with the value array:
  con.query(sql, function (err, result) {
    if (err) throw err;
    return res.send({ status: true, data: result, message: 'Data List success' });
  });
});

//SUMAN

app.post('/rolemapa', function (req, res) {


  let emp_id = req.body.emp_id;
  
  let role_code = req.body.role_code ;
  
  
  
  
  
  con.query("INSERT INTO user_role_mapping SET ? ",{ emp_id: emp_id , role_code: role_code }, function (error, results, fields) {
  
  if (error) throw error;
  
  return res.send({ error: false, data: results, message: 'New role has been created successfully.' });
  
  });
  
  });
   

app.post('/demoInsert', function (req, res) {
 
  let user_role_id = req.body.user_role_id;
  let role_code = req.body.role_code ;
  let role_name = req.body.role_name;
  let role_description = req.body.role_description ;

  if (!user_role_id) {
      return res.status(400).send({ error:true, message: 'Please provide user_role_id' });
  }

  con.query("INSERT INTO user_role SET ? ", { user_role_id: user_role_id , role_code: role_code ,role_name: role_name ,role_description: role_description }, function (error, results, fields) {
      if (error) throw error;
      return res.send({ error: false, data: results, message: 'New role has been created successfully.' });
  });
});
app.get('/taskcapture', function (req, res) {

  //Make SQL statement:
  
  var sql = "SELECT * FROM task INNER JOIN task_capture ON (task.task_id = task_capture.task_id) ";
  
  //Execute the SQL statement, with the value array:
  
  con.query(sql, function (err, result) {
  
  if (err) throw err;
  
  return res.send({ status: true, data: result, message: 'Data List success' });
  
  });
  
  });
  app.get('/assign2', function (req, res) {

    //Make SQL statement:
    
    var sql = "SELECT * FROM user INNER JOIN user_role_mapping ON (user.emp_id = user_role_mapping.emp_id) ";
    
    //Execute the SQL statement, with the value array:
    
    con.query(sql, function (err, result) {
    
    if (err) throw err;
    
    return res.send({ status: true, data: result, message: 'Data List success' });
    
    });
    
    
    });


    app.get('/unassign', function (req, res) {

      //Make SQL statement:
      
      var sql = "SELECT * FROM user INNER JOIN task_members ON (user.emp_id = task_members.emp_id) ";
      
      //Execute the SQL statement, with the value array:
      
      con.query(sql, function (err, result) {
      
      if (err) throw err;
      
      return res.send({ status: true, data: result, message: 'Data List success' });
      
      });
      
      
      });
      app.get('/atask1', function (req, res) {

        //Make SQL statement:
        
        var sql = "SELECT * FROM user INNER JOIN task_members ON (user.emp_id <> task_members.emp_id) ";
        
        //Execute the SQL statement, with the value array:
        
        con.query(sql, function (err, result) {
        
        if (err) throw err;
        
        return res.send({ status: true, data: result, message: 'Data List success' });
        
        });
        
        
        });
app.put('/demoInsert', function (req, res) {
 
  let user_role_id = req.body.user_role_id;
  let role_code = req.body.role_code ;
  let role_name = req.body.role_name;
  let role_description = req.body.role_description ;

  con.query("INSERT INTO user_role SET ? ", { user_role_id: user_role_id , role_code: role_code ,role_name: role_name ,role_description: role_description }, function (error, results, fields) {
      if (error) throw error;
      return res.send({ error: false, data: results, message: 'New role has been edited successfully.' });
  });
});



app.delete('/demoList', function(req, res){
  /*let user_role_id = req.body.user_role_id;
  let role_code = req.body.role_code ;
  let role_name = req.body.role_name;
  let role_description = req.body.role_description ;*/
  

  con.query("DELETE FROM user_role WHERE user_role_id = ?",[req.params.user_role_id],{ user_role_id: user_role_id }, function (error, results, fields) {
    if (error) throw error;
    return res.send({ message: 'New role has been deleted successfully.' });
});
});
//SUMAN

app.get('/roleMap', function (req, res) {
  //Make SQL statement:
  var sql = "SELECT * FROM user_role_mapping ";
  //Execute the SQL statement, with the value array:
  con.query(sql, function (err, result) {
    if (err) throw err;
    return res.send({ status: true, data: result, message: 'Data List success' });
  });
});
app.get('/roleMapping', function (req, res) {
  //Make SQL statement:
  var sql = "SELECT * from user right join user_role_mapping on user.emp_id = user_role_mapping.emp_id inner join user_role on user_role.role_code = user_role_mapping.role_code";
  //Execute the SQL statement, with the value array:
  con.query(sql, function (err, result) {
    if (err) throw err;
    return res.send({ status: true, data: result, message: 'Data List success' });
  });
});
app.get('/deletetask', function (req, res) {
  //Make SQL statement:
  var sql = "SELECT * from user right join user_role_mapping on user.emp_id = user_role_mapping.emp_id inner join user_role on user_role.role_code = user_role_mapping.role_code";
  //Execute the SQL statement, with the value array:
  con.query(sql, function (err, result) {
    if (err) throw err;
    return res.send({ status: true, data: result, message: 'Data List success' });
  });
});
app.get('/roleMapping1', function (req, res) {
  //Make SQL statement:
  var sql = "SELECT * from user right join user_role_mapping on user.emp_id = user_role_mapping.emp_id inner join user_role on user_role.role_code = user_role_mapping.role_code WHERE user_role.role_code='asso'";
  //Execute the SQL statement, with the value array:
  con.query(sql, function (err, result) {
    if (err) throw err;
    return res.send({ status: true, data: result, message: 'Data List success' });
  });
});
app.get('/taskMembers', function (req, res) {
  //Make SQL statement:
  var sql = "SELECT * from user right join task_members on user.emp_id = task_members.emp_id inner join task on task.task_id = task_members.task_id";
  //Execute the SQL statement, with the value array:
  con.query(sql, function (err, result) {
    if (err) throw err;
    return res.send({ status: true, data: result, message: 'Data List success' });
  });
});

app.delete('/userdel1/:id', function (req, res) {
 
  let id = req.params.id;
 
  con.query('DELETE FROM user WHERE user_id = ?',[id], function (error, results, fields) {
      if (error) throw error;
      return res.send({ error: false, data: results, message: 'Task has been updated successfully.' });
  });
});
app.delete('/userdel2/:id', function (req, res) {
 
  let id = req.params.id;
 
  con.query('DELETE FROM user_role WHERE role_id = ?',[id], function (error, results, fields) {
      if (error) throw error;
      return res.send({ error: false, data: results, message: 'Task has been updated successfully.' });
  });
});
app.delete('/userdel3/:id', function (req, res) {
 
  let id = req.params.id;
 
  con.query('DELETE FROM user_role_mapping WHERE role_code = ?',[id], function (error, results, fields) {
      if (error) throw error;
      return res.send({ error: false, data: results, message: 'Task has been updated successfully.' });
  });
});
app.put('/editrole', function (req, res) {
 
  let user_id = req.body.user_id;
  let first_name = req.body.first_name;

  if (!user_id || !first_name) {
      return res.status(400).send({ error: task, message: 'Please provide role and emp_id' });
  }

  con.query("UPDATE user SET first_name = ? WHERE user_id = ?", [first_name, user_id], function (error, results, fields) {
      if (error) throw error;
      return res.send({ error: false, data: results, message: 'Task has been updated successfully.' });
  });
});
app.put('/updateuser', function (req, res) {
 
  let emp_id = req.body.emp_id;
  let first_name = req.body.first_name;
  let last_name = req.body.last_name;
  let phone_no = req.body.phone_no;
  let Email = req.body.Email;
  let Gender = req.body.Gender;
  let modified_by = req.body.modified_by;

  

  con.query("UPDATE user SET first_name = ?,last_name = ? ,phone_no = ?, Email = ?,Gender = ?,modified_by=? WHERE emp_id = ?", [first_name,last_name,phone_no,Email,Gender,modified_by, emp_id], function (error, results, fields) {
      if (error) throw error;
      return res.send({ error: false, data: results, message: 'Task has been updated successfully.' });
  });
});
app.put('/updateuserr', function (req, res) {
 
  let role_id = req.body.role_id;
  let role_code = req.body.role_code;
  let role_name = req.body.role_name;
  let role_description = req.body.role_description;
  let modified_by=req.body.modified_by;

  

  con.query("UPDATE user_role SET role_code = ?,role_name = ? ,role_description = ?,modified_by=? WHERE role_id = ?", [role_code,role_name,role_description,modified_by,role_id], function (error, results, fields) {
      if (error) throw error;
      return res.send({ error: false, data: results, message: 'Task has been updated successfully.' });
  });
});
app.post('/demoInsert', function (req, res) {
  //Make SQL statement:
  var sql = "INSERT INTO task (Title, Status) VALUES ?";
  //Make an array of values:
  var values = [
    ['Go to Movie', 'pending']
  ];
  //Execute the SQL statement, with the value array:
  con.query(sql, [values], function (err, result) {
    if (err) throw err;
    return res.send({ status: true, data: result, message: 'Data Inserted' });
  });
});

app.post('/adduser', function (req, res) {
 
  let emp_id = req.body.emp_id;
  let first_name = req.body.first_name;
  let last_name = req.body.last_name;
  let phone_no = req.body.phone_no;
  let Email = req.body.Email;
  let Gender = req.body.Gender;
  let created_by = req.body.created_by
  

  if (!emp_id) {
      return res.status(400).send({ error:true, message: 'Please provide emp_id' });
  }

  con.query("INSERT INTO user SET ? ", { emp_id: emp_id ,first_name: first_name, last_name: last_name, phone_no: phone_no,Email:Email, Gender:Gender,created_by:created_by  }, function (error, results, fields) {
      if (error) throw error;
      return res.send({ error: false, data: results, message: 'New task has been created successfully.' });
  });
});
app.post('/addrole', function (req, res) {
 
  let role_id = req.body.role_id;
  let role_code = req.body.role_code;
  let role_name = req.body.role_name;
  let role_description = req.body.role_description;
  let created_by = req.body.created_by
  
  

  if (!role_id) {
      return res.status(400).send({ error:true, message: 'Please provide emp_id' });
  }

  con.query("INSERT INTO user_role SET ? ", { role_id: role_id ,role_code: role_code,role_name: role_name, role_description: role_description,created_by: created_by  }, function (error, results, fields) {
      if (error) throw error;
      return res.send({ error: false, data: results, message: 'New task has been created successfully.' });
  });
});

app.put('/changepassword', function (req, res) {
 
  let emp_id = req.body.emp_id;
  let password = req.body.password;
  let modified_by = req.body.modified_by;

  con.query("UPDATE user SET password = ?,modified_by = ? WHERE emp_id = ?", [password,modified_by,emp_id], function (error, results, fields) {
      if (error) throw error;
      return res.send({ error: false, data: results, message: 'Task has been updated successfully.' });
  });
});

app.put('/updateprofile', function (req, res) {
 
  let emp_id = req.body.emp_id;
  let first_name = req.body.first_name;
  let last_name = req.body.last_name;
  let phone_no = req.body.phone_no;
  let Email = req.body.Email;
  let Gender = req.body.Gender;
  let modified_by = req.body.modified_by
  

  

  con.query("UPDATE user SET first_name = ?,last_name = ? ,phone_no = ?, Email = ?,Gender = ?,modified_by=? WHERE emp_id = ?", [first_name,last_name,phone_no,Email,Gender,modified_by, emp_id], function (error, results, fields) {
      if (error) throw error;
      return res.send({ error: false, data: results, message: 'Task has been updated successfully.' });
  });
});
//Sumantask
app.delete('/taskdel1/:id', function (req, res) {
 
  let id = req.params.id;
 
  con.query('DELETE FROM task WHERE task_id = ?',[id], function (error, results, fields) {
      if (error) throw error;
      return res.send({ error: false, data: results, message: 'Task has been deleted successfully.' });
  });
});

app.get('/tasklist', function (req, res) {
  //Make SQL statement:
 
  var sql = "SELECT * FROM task ";
  //Execute the SQL statement, with the value array:
  con.query(sql, function (err, result) {
    if (err) throw err;
    return res.send({ status: true, data: result, message: 'Task List success' });
  });
});

app.post('/entertask', function (req, res) {
 
  
  let task_name = req.body.task_name;
  let task_description = req.body.task_description;

  



  con.query("INSERT INTO task SET ? ", { task_name: task_name, task_description: task_description, 
     }, function (error, results, fields) {
      if (error) throw error;
      return res.send({ error: false, data: results, message: 'New task has been created successfully.' });
  });
});
app.put('/updatetask', function (req, res) {
 
  let task_id = req.body.task_id;
  let task_name = req.body.task_name;
  let task_description = req.body.task_description;
  

  

  con.query("UPDATE task SET task_name = ? ,task_description = ? WHERE task_id = ?", [task_name,task_description,task_id], function (error, results, fields) {
      if (error) throw error;
      return res.send({ error: false, data: results, message: 'Task has been updated successfully.' });
  });
});
app.put('/updatemapping', function (req, res) {
 
  let emp_id = req.body.emp_id;
  let role_code = req.body.role_code;
  

  

  con.query("UPDATE user_role_mapping SET role_code = ?  WHERE emp_id = ?", [role_code,emp_id], function (error, results, fields) {
      if (error) throw error;
      return res.send({ error: false, data: results, message: 'Task has been updated successfully.' });
  });
});
app.post('/assigntask', function (req, res) {
 
  let task_id = req.body.task_id;
  let emp_id = req.body.emp_id;
  
  
  

  

  con.query("INSERT INTO task_members SET ? ", { task_id: task_id ,emp_id: emp_id }, function (error, results, fields) {
      if (error) throw error;
      return res.send({ error: false, data: results, message: 'New task has been created successfully.' });
  });
});
app.post('/taskdetails', function (req, res) {
 
  let task_id = req.body.task_id;
  let emp_id = req.body.emp_id;
  let month = req.body.month;
  let var_1 = req.body.var_1;
  let var_2 = req.body.var_2;
  let var_3 = req.body.var_3;
  con.query("INSERT INTO task_report SET ? ", { task_id: task_id ,emp_id: emp_id,month:month,var_1:var_1,var_2:var_2,var_3:var_3 }, function (error, results, fields) {
      if (error) throw error;
      return res.send({ error: false, data: results, message: 'New task has been created successfully.' });
  });
});
//Sumantask
