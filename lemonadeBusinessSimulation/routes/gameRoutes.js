const db = require('../config/db');

module.exports = app => {
    app.get('/auth/obtainUser/:id', (req, res) => {
        
        db.query("SELECT * FROM usergamedata WHERE GoogleID = ?", req.user.GoogleID, (err, rows) => {
            if(err) {
                console.log(err);
                return;
            }
            
            if(rows.length)
            {
                return res.send(rows[0]);
            } else {
                var newSQLObject = new Object();
                newSQLObject.GoogleID = req.user.GoogleID;
                newSQLObject.CashAmount = 5000;
                newSQLObject.AmountOfLemons = 0;
                newSQLObject.AmountOfSugar = 0;
                newSQLObject.AmountOfIce = 0;
                newSQLObject.AmountOfCups = 0;
                newSQLObject.AmountOfWater = 0;
                newSQLObject.RecipeAmountOfLemons = 0;
                newSQLObject.RecipeAmountOfSugar = 0;
                newSQLObject.RecipeAmountOfIce = 0;
                newSQLObject.RecipeAmountOfWater = 0;
                newSQLObject.HasIceMachine = false;
                newSQLObject.HasRefrigerator = false;
                newSQLObject.Year = 1;
                newSQLObject.Month = 1;
                newSQLObject.Day = 1;
                newSQLObject.LemonadePrice = 0;
                var insertQuery = "INSERT INTO usergamedata (GoogleID, CashAmount, AmountOfLemons, AmountOfSugar, AmountOfIce, AmountOfCups, RecipeAmountOfLemons, RecipeAmountOfSugar, RecipeAmountOfIce, HasIceMachine, HasRefrigerator, Year, Month , Day) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
                db.query(insertQuery, [newSQLObject.GoogleID, newSQLObject.CashAmount, newSQLObject.AmountOfLemons, newSQLObject.AmountOfSugar, newSQLObject.AmountOfIce, newSQLObject.AmountOfCups, newSQLObject.RecipeAmountOfLemons, newSQLObject.RecipeAmountOfSugar, newSQLObject.RecipeAmountOfIce, newSQLObject.HasIceMachine, newSQLObject.HasRefrigerator, newSQLObject.Year, newSQLObject.Month, newSQLObject.Day], (err, rows) => {
                    
                    return newSQLObject;
                });
            }
           
        })
        
    });
    
    app.patch('/auth/changeUserData/:id', (req, res) => {
        console.log(req);
        if(req.body.propertyToChange && req.body.amountToSet && !req.body.additionalPropertyToChange && !req.body.amountToSetAdditional)
        {
            var updateQuery = "UPDATE usergamedata SET " + req.body.propertyToChange + " = " + req.body.amountToSet + " WHERE GoogleID = ? ";
        } else if(!req.body.propertyToChange && !req.body.amountToSet && req.body.additionalPropertyToChange && req.body.amountToSetAdditional)
        {
            var updateQuery = "UPDATE usergamedata SET " + req.body.additionalPropertyToChange + " = " + req.body.amountToSetAdditional + " WHERE GoogleID = ? ";
        } else {
            var updateQuery = "UPDATE usergamedata SET " + req.body.propertyToChange + " = " + req.body.amountToSet + ", " + req.body.additionalPropertyToChange + " = " + req.body.amountToSetAdditional + " WHERE GoogleID = ? ";
        }
        
        db.query(updateQuery, [req.user.GoogleID], (err, rows) => {
            if(err) {
                console.log(err);
                return;
            }
            
            
            res.send(rows[0]);
            
        })
    });  
}