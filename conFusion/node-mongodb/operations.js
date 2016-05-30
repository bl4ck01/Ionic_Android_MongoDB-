var assert = require('assert');

exports.insertDocument = function (db, document, collection, callback){
    //get the doc collection
    var coll = db.collection(collection);
    //insert some docs
    coll.insert(document, function(err, result){
        assert.equal(err, null);
        console.log('inserted'+ result.result.n +' into the doc collection '+ collection);
        callback(result);
    });
};

exports.findDocuments = function(db, collection, callback){
    var coll = db.collection(collection);
    coll.find({}).toArray(function(err, docs){
        assert.equal(err, null);
        callback(docs);
    });
};

exports.removeDocument = function(db, document, collection, callback){
    var coll = db.collection(collection);
    coll.deleteOne(document, function(err, result){
        assert.equal(err, null);
        console.log("removed the doc" + document);
        callback(result);
    });
};

exports.updateDocument = function(db, document, update, collection, callback){
    var coll = db.collection(collection);
    coll.updateOne(document, {$set: update }, null, function(err, result){
        assert.equal(err, null);
        console.log("update the doc with " + update);
        callback(result);
    });
};