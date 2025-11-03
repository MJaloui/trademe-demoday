var Item = require('./models/item');

module.exports = function (app, db) {
  
  // show the home page (all items)
  app.get('/', function (req, res) {
    Item.find().sort({ createdAt: -1 }).exec(function (err, items) {
      if (err) return console.log(err);
      res.render('index.ejs', {
        items: items || []
      });
    });
  });

  // show add item page
  app.get('/add-item', function (req, res) {
    res.render('add-item.ejs');
  });

  // handle add item form submission
  app.post('/add-item', function (req, res) {
    var newItem = new Item({
      username: req.body.username,
      brand: req.body.brand,
      size: req.body.size,
      category: req.body.category,
      imageURL: req.body.imageURL,
      contactInfo: req.body.contactInfo
    });

    newItem.save(function (err, result) {
      if (err) {
        console.log(err);
        return res.send('Error saving item');
      }
      console.log('Item saved to database');
      res.redirect('/');
    });
  });

  // show edit item page
  app.get('/edit-item/:id', function (req, res) {
    Item.findById(req.params.id, function (err, item) {
      if (err) {
        console.log(err);
        return res.redirect('/');
      }
      res.render('edit-item.ejs', {
        item: item,
        itemId: req.params.id
      });
    });
  });
};

