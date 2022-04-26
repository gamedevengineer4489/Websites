const db = require('../config/database');
const requireLogin = require('../middleware/requireLogin');

module.exports = app => {
    app.post('/api/createDeck', requireLogin, (req, res) => {
            
            
            var tableName = `Deck_${req.body.googleid}_${req.body.deckname.toLowerCase()}`;
            var createTableQuery = "CREATE TABLE IF NOT EXISTS " + tableName + "(googleid character varying NOT NULL, emailaddress character varying)";
            
            db.query(createTableQuery);
            var insertColumnsQuery = "ALTER TABLE " + tableName + " ADD IF NOT EXISTS " + req.body.deckname.toLowerCase() + "_Words" + " character varying" + ", ADD IF NOT EXISTS " + req.body.deckname.toLowerCase() + "_Definitions character varying"
            db.query(insertColumnsQuery);

            var insertQuery = "INSERT INTO " + tableName + "(googleid, emailaddress, " + req.body.deckname.toLowerCase() + "_words, " + req.body.deckname.toLowerCase() + "_definitions) VALUES($1,$2,$3, $4)";
            db.query(insertQuery, [req.body.googleid, req.body.emailaddress, req.body.firstword.replaceAll('_', ' '), req.body.firstworddefinition.replaceAll('_', ' ')]);

            var insertQueryDecks = "INSERT INTO users" + "(" + `decks_${req.user.googleid})` + "VALUES($1)";
            db.query(insertQueryDecks, [req.body.deckname.toLowerCase()]);
            
            var retrieveAllDecksQuery = "DROP TABLE IF EXISTS temp_table; SELECT * INTO temp_table FROM " + tableName + "; ALTER TABLE temp_table DROP googleid, DROP emailaddress; SELECT * FROM temp_table";  
            db.query(retrieveAllDecksQuery);

            
            db.query("SELECT * FROM temp_table", (err, result) => {
                if(result && result.rows && result.rows.length) {
                    res.send(result.rows);
                } else {
                    res.send({})
                }
                
            });
            
        }
    );

    app.get('/api/fetchDecks', requireLogin, async (req, res) => {
        console.log(req);
        
        var columnName = `decks_${req.user.googleid}`;
        
        db.query(`SELECT ${columnName} FROM users where ${columnName} IS NOT NULL`, (err, result) => {
            
            if(result && result.rows && result.rows.length) {
                res.send(result.rows);
            } else {
                res.send({})
            }
            
        });
        
    });

    app.get('/api/fetchDeck/words/:deckname', requireLogin, async (req, res) => {
        
        var tableName = `deck_${req.user.googleid}_${req.params.deckname}`;
        db.query(`SELECT ${req.params.deckname}_words FROM ${tableName}`, (err, result) => {
            if(result && result.rows) {
                res.send(result.rows);
            } else {
                res.send({})
            }
            
            
        });
        
    });

    app.delete('/api/fetchDeck/:deckname', requireLogin, async (req, res) => {
        
        var columnName = `decks_${req.user.googleid}`;
        var tableToDropName = `deck_${req.user.googleid}_${req.params.deckname}`;
        var deleteQuery = `DELETE FROM users WHERE ${columnName}='${req.params.deckname}'; DROP TABLE ${tableToDropName}`;
        db.query(deleteQuery);
        
    });

    app.get('/api/fetchDeck/definitions/:deckname', requireLogin, async (req, res) => {
        var tableName = `deck_${req.user.googleid}_${req.params.deckname}`;
        db.query(`SELECT ${req.params.deckname}_definitions FROM ${tableName}`, (err, result) => {
            if(result && result.rows) {
                res.send(result.rows);
            } else {
                res.send({});
            }
        });
        
    });
}

